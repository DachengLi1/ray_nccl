"""Code to wrap some NCCL API calls."""
import numpy
try:
    import cupy
    from cupy.cuda import nccl
    from cupy.cuda.nccl import get_version
    from cupy.cuda.nccl import get_build_version
    from cupy.cuda.nccl import NcclCommunicator
except ImportError:
    raise ImportError("NCCL in Ray requires Cupy being available!")

from ray.util.collective.types import ReduceOp, torch_available

NCCL_REDUCE_OP_MAP = {
    ReduceOp.SUM: nccl.NCCL_SUM,
    ReduceOp.PRODUCT: nccl.NCCL_PROD,
    ReduceOp.MIN: nccl.NCCL_MIN,
    ReduceOp.MAX: nccl.NCCL_MAX,
}

# cupy types are the same with numpy types
NUMPY_NCCL_DTYPE_MAP = {
    # INT types
    numpy.int: nccl.NCCL_INT,
    numpy.uint8: nccl.NCCL_UINT8,
    numpy.uint32: nccl.NCCL_UINT32,
    numpy.uint64: nccl.NCCL_UINT64,
    numpy.int8: nccl.NCCL_INT8,
    numpy.int32: nccl.NCCL_INT32,
    numpy.int64: nccl.NCCL_INT64,
    # FLOAT types
    numpy.half: nccl.NCCL_HALF,
    numpy.float: nccl.NCCL_FLOAT,
    numpy.float16: nccl.NCCL_FLOAT16,
    numpy.float32: nccl.NCCL_FLOAT32,
    numpy.float64: nccl.NCCL_FLOAT64,
    numpy.double: nccl.NCCL_DOUBLE
}

if torch_available():
    import torch
    import torch.utils.dlpack
    TORCH_NCCL_DTYPE_MAP = {
        # INT types
        torch.int: nccl.NCCL_INT,
        torch.uint8: nccl.NCCL_UINT8,
        torch.int8: nccl.NCCL_INT8,
        torch.int32: nccl.NCCL_INT32,
        torch.int64: nccl.NCCL_INT64,
        torch.long: nccl.NCCL_INT64,
        # FLOAT types
        torch.half: nccl.NCCL_HALF,
        torch.float: nccl.NCCL_FLOAT,
        torch.float16: nccl.NCCL_FLOAT16,
        torch.float32: nccl.NCCL_FLOAT32,
        torch.float64: nccl.NCCL_FLOAT64,
        torch.double: nccl.NCCL_DOUBLE,
    }

    TORCH_NUMPY_DTYPE_MAP = {
        # INT types
        torch.int: numpy.int,
        torch.uint8: numpy.uint8,
        torch.int8: numpy.int8,
        torch.int32: numpy.int32,
        torch.int64: numpy.int64,
        torch.long: numpy.int64,
        # FLOAT types
        torch.half: numpy.half,
        torch.float: numpy.float,
        torch.float16: numpy.float16,
        torch.float32: numpy.float32,
        torch.float64: numpy.float64,
    }


def get_nccl_build_version():
    return get_build_version()


def get_nccl_runtime_version():
    return get_version()


def get_nccl_unique_id():
    return nccl.get_unique_id()


def create_nccl_communicator(world_size, nccl_unique_id, rank):
    """Create an NCCL communicator using NCCL APIs.

    Args:
        world_size (int): the number of processes of this communcator group.
        nccl_unique_id (str): the NCCLUniqueID for this group.
        rank (int): the rank of this process.
    Returns:
        comm (nccl.ncclComm_t): an NCCL communicator.
    """
    # TODO(Hao): make this inside the NCCLComm class,
    #  and implement the abort method. Make it RAII.
    comm = NcclCommunicator(world_size, nccl_unique_id, rank)
    return comm


def get_nccl_reduce_op(reduce_op):
    """Map the reduce op to NCCL reduce op type.

    Args:
        reduce_op (ReduceOp): ReduceOp Enum (SUM/PRODUCT/MIN/MAX).
    Returns:
        (nccl.ncclRedOp_t): the mapped NCCL reduce op.
    """
    if reduce_op not in NCCL_REDUCE_OP_MAP:
        raise RuntimeError(
            "NCCL does not support reduce op: '{}'".format(reduce_op))
    return NCCL_REDUCE_OP_MAP[reduce_op]


def get_nccl_tensor_dtype(tensor):
    """Return the corresponded NCCL dtype given a tensor."""
    if isinstance(tensor, cupy.ndarray):
        return NUMPY_NCCL_DTYPE_MAP[tensor.dtype.type]
    if torch_available():
        if isinstance(tensor, torch.Tensor):
            return TORCH_NCCL_DTYPE_MAP[tensor.dtype]
    raise ValueError("Unsupported tensor type. Got: {}. Supported "
                     "GPU tensor types are: torch.Tensor, "
                     "cupy.ndarray.".format(type(tensor)))


def get_cupy_tensor_dtype(tensor):
    """Return the corresponded Cupy dtype given a tensor."""
    if isinstance(tensor, cupy.ndarray):
        return tensor.dtype.type
    if torch_available():
        if isinstance(tensor, torch.Tensor):
            return TORCH_NUMPY_DTYPE_MAP[tensor.dtype]
    raise ValueError("Unsupported tensor type. Got: {}. Supported "
                     "GPU tensor types are: torch.Tensor, "
                     "cupy.ndarray.".format(type(tensor)))


def get_tensor_ptr(tensor):
    """Return the pointer to the underlying memory storage of a tensor."""
    if isinstance(tensor, cupy.ndarray):
        return tensor.data.ptr
    if isinstance(tensor, numpy.ndarray):
        return tensor.data
    if torch_available():
        if isinstance(tensor, torch.Tensor):
            if not tensor.is_cuda:
                raise RuntimeError("torch tensor must be on gpu.")
            return tensor.data_ptr()
    raise ValueError("Unsupported tensor type. Got: {}. Supported "
                     "GPU tensor types are: torch.Tensor, "
                     "cupy.ndarray.".format(type(tensor)))


def get_tensor_n_elements(tensor):
    """Return the number of elements in a tensor."""
    if isinstance(tensor, cupy.ndarray) or isinstance(tensor, numpy.ndarray):
        return tensor.size
    if torch_available():
        if isinstance(tensor, torch.Tensor):
            return torch.numel(tensor)
    raise ValueError("Unsupported tensor type. Got: {}. Supported "
                     "GPU tensor types are: torch.Tensor, "
                     "cupy.ndarray.".format(type(tensor)))


def get_tensor_shape(tensor):
    """Return the shape of the tensor as a list."""
    if isinstance(tensor, cupy.ndarray):
        return list(tensor.shape)
    if torch_available():
        if isinstance(tensor, torch.Tensor):
            return list(tensor.size())
    raise ValueError("Unsupported tensor type. Got: {}. Supported "
                     "GPU tensor types are: torch.Tensor, "
                     "cupy.ndarray.".format(type(tensor)))


def get_tensor_strides(tensor):
    """Return the strides of the tensor as a list."""
    if isinstance(tensor, cupy.ndarray):
        return [
            int(stride / tensor.dtype.itemsize) for stride in tensor.strides
        ]
    if torch_available():
        if isinstance(tensor, torch.Tensor):
            return list(tensor.stride())
    raise ValueError("Unsupported tensor type. Got: {}. Supported "
                     "GPU tensor types are: torch.Tensor, "
                     "cupy.ndarray.".format(type(tensor)))


def copy_tensor(dst_tensor, src_tensor):
    """Copy the content from src_tensor to dst_tensor.

    Args:
        dst_tensor: the tensor to copy from.
        src_tensor: the tensor to copy to.

    Returns:
        None
    """
    copied = True
    if isinstance(dst_tensor, cupy.ndarray) \
            and isinstance(src_tensor, cupy.ndarray):
        cupy.copyto(dst_tensor, src_tensor)
    elif torch_available():
        if isinstance(dst_tensor, torch.Tensor) and isinstance(
                src_tensor, torch.Tensor):
            dst_tensor.copy_(src_tensor)
        elif isinstance(dst_tensor, torch.Tensor) and isinstance(
                src_tensor, cupy.ndarray):
            t = torch.utils.dlpack.from_dlpack(src_tensor.toDlpack())
            dst_tensor.copy_(t)
        elif isinstance(dst_tensor, cupy.ndarray) and isinstance(
                src_tensor, torch.Tensor):
            t = cupy.fromDlpack(torch.utils.dlpack.to_dlpack(src_tensor))
            cupy.copyto(dst_tensor, t)
        else:
            copied = False
    else:
        copied = False
    if not copied:
        raise ValueError("Unsupported tensor type. Got: {} and {}. Supported "
                         "GPU tensor types are: torch.Tensor, cupy.ndarray."
                         .format(type(dst_tensor), type(src_tensor)))


def get_devices(inputs):
    """Returns a list of devices (ints) from the inputs"""
    devices = [0] * len(inputs)
    for i in range(len(inputs)):
        if isinstance(inputs[i], cupy.ndarray):
            try:
                devices[i] = inputs[i].device.id
            except AttributeError as e:
                raise RuntimeError("not all inputs on a GPU device.")
        elif torch_available() and isinstance(inputs[i], torch.Tensor):
            index = inputs[i].device.index
            if index is None:
                raise RuntimeError("not all inputs on a GPU device.")
        else:
            ValueError("Unsupported tensor type. "
                         "Got: {}.".format(type(inputs)))
    return devices


def get_key_from_devices(devices):
    """Return key from a list of devices"""
    return ", ".join([str(d) for d in devices])


# def check_single_tensor_input(tensor):
#     """Check if the tensor is with a supported type."""
#     if isinstance(tensor, numpy.ndarray):
#         return
#     if types.cupy_available():
#         if isinstance(tensor, types.cp.ndarray):
#             return
#     if types.torch_available():
#         if isinstance(tensor, types.th.Tensor):
#             return
#     raise RuntimeError("Unrecognized tensor type '{}'. Supported types are: "
#             "np.ndarray, torch.Tensor, cupy.ndarray.".format(
#                 type(tensor)))
#
# def check_collective_input(inputs):
#     """Check the validity of inputs for collective operations"""
#     if not isinstance(inputs, list):
#         raise ValueError("Inputs must be a list of tensors.")
#     if len(inputs) == 0:
#         raise ValueError("Collective inputs have 0 elements.")
#     for i in range(len(inputs)):
#         check_single_tensor_input(inputs[i])
