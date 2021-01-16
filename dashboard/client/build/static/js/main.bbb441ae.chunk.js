(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{121:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(19),l=r.n(o),c=(r(96),r(6)),i=r(5),s=r(8),u=r(9),p=r(10),m=r(156),d=r(37),f=r(40),h=r(41),g=r(13),v=r.n(g),b=r(14),y=r.n(b),E=r(127),k=r(27),j=r(16),x=r.n(j),O=r(26),w=r(151),N=r(153),C=r(150),S=r(152),F=r(149),W=window.location.origin,L=function(){var e=Object(O.a)(x.a.mark(function e(t,r){var n,a,o,l,c,i,s,u,p,m,d;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n=new URL(t,W),a=0,o=Object.entries(r);a<o.length;a++)l=o[a],c=Object(k.a)(l,2),i=c[0],s=c[1],n.searchParams.set(i,s);return e.next=4,fetch(n.toString());case 4:return u=e.sent,e.next=7,u.json();case 7:if(p=e.sent,m=p.result,null===(d=p.error)){e.next=11;break}throw Error(d);case 11:return e.abrupt("return",m);case 12:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),A=function(){return L("/api/ray_config",{})},I=function(){return L("/api/node_info",{})},_=function(e,t){return L("/api/errors",{hostname:e,pid:t||""})},M=function(e,t){return L("/api/logs",{hostname:e,pid:t||""})},R=r(62),T=Object(R.b)({name:"dashboard",initialState:{rayConfig:null,nodeInfo:null,lastUpdatedAt:null,error:null},reducers:{setRayConfig:function(e,t){e.rayConfig=t.payload},setNodeInfo:function(e,t){e.nodeInfo=t.payload,e.lastUpdatedAt=Date.now()},setError:function(e,t){e.error=t.payload}}}),B=T.actions,D=T.reducer,U=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,r=e.lastUpdatedAt,n=e.error;return a.a.createElement("div",{className:t.root},null!==r&&a.a.createElement(E.a,{className:t.lastUpdated},"Last updated: ",new Date(r).toLocaleString()),null!==n&&a.a.createElement(E.a,{className:t.error},n))}}]),t}(a.a.Component),z=Object(d.b)(function(e){return{lastUpdatedAt:e.dashboard.lastUpdatedAt,error:e.dashboard.error}})(y()(function(e){return v()({root:{marginTop:e.spacing(2)},lastUpdated:{color:e.palette.text.secondary,fontSize:"0.8125rem",textAlign:"center"},error:{color:e.palette.error.main,fontSize:"0.8125rem",textAlign:"center"}})})(U)),H=r(79),P=r.n(H),V=r(80),J=r.n(V),G=r(43),X=r.n(G),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,r=e.text,n=this.props.percent;n=Math.max(n,0);var o=[0,255,0],l=o,c=function(e,t,r){var n=Object(k.a)(e,3),a=n[0],o=n[1],l=n[2],c=Object(k.a)(t,3);return[a*(1-r)+c[0]*r,o*(1-r)+c[1]*r,l*(1-r)+c[2]*r]}(o,[255,0,0],(n=Math.min(n,100))/100),i="\n      linear-gradient(\n        to right,\n        rgba(".concat(l.join(","),", ").concat(.2,") 0%,\n        rgba(").concat(c.join(","),", ").concat(.2,") ").concat(n,"%,\n        transparent ").concat(n,"%\n      )\n    ");return a.a.createElement("div",{className:t.root},a.a.createElement("div",{className:t.inner,style:{background:i}},r))}}]),t}(a.a.Component),K=y()(function(e){return v()({root:{borderColor:e.palette.divider,borderStyle:"solid",borderWidth:1},inner:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}})})(q),Q=function(e){var t=function(e){if(0===e.length)return 0;var t=0,r=0,n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var i=l.value,s=i.weight;t+=s*i.value,r+=s}}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t/r}(e.nodes.map(function(e){return{weight:e.cpus[0],value:e.cpu}}));return a.a.createElement("div",{style:{minWidth:60}},a.a.createElement(K,{percent:t,text:"".concat(t.toFixed(1),"%")}))},Y=function(e){var t=e.node;return a.a.createElement("div",{style:{minWidth:60}},a.a.createElement(K,{percent:t.cpu,text:"".concat(t.cpu.toFixed(1),"%")}))},Z=function(e){var t=e.worker;return a.a.createElement("div",{style:{minWidth:60}},a.a.createElement(K,{percent:t.cpu_percent,text:"".concat(t.cpu_percent.toFixed(1),"%")}))},$=function(e,t){return"".concat((e/("mebibyte"===t?Math.pow(1024,2):Math.pow(1024,3))).toFixed(1)," ").concat("mebibyte"===t?"MiB":"GiB")},ee=function(e,t,r){var n=$(e,r),a=$(t,r),o=100*e/t;return"".concat(n," / ").concat(a," (").concat(o.toFixed(0),"%)")},te=function(e){var t=Math.floor(e)%60,r=Math.floor(e/60)%60,n=Math.floor(e/60/60)%24,a=Math.floor(e/60/60/24),o=function(e){return e.toString().padStart(2,"0")};return[a?"".concat(a,"d"):"","".concat(o(n),"h"),"".concat(o(r),"m"),"".concat(o(t),"s")].join(" ")},re=function(e){var t=e.nodes,r=0,n=0,o=!0,l=!1,c=void 0;try{for(var i,s=t[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value;r+=u.disk["/"].used,n+=u.disk["/"].total}}catch(p){l=!0,c=p}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}return a.a.createElement(K,{percent:100*r/n,text:ee(r,n,"gibibyte")})},ne=function(e){var t=e.node;return a.a.createElement(K,{percent:100*t.disk["/"].used/t.disk["/"].total,text:ee(t.disk["/"].used,t.disk["/"].total,"gibibyte")})},ae=function(){return a.a.createElement(E.a,{color:"textSecondary",component:"span",variant:"inherit"},"N/A")},oe=r(148),le=function(e){return function(t){var r=t.nodes,n=0,o=!0,l=!1,c=void 0;try{for(var i,s=r[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value;u.ip in e&&(n+=e[u.ip].total)}}catch(p){l=!0,c=p}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}return 0===n?a.a.createElement(E.a,{color:"textSecondary",component:"span",variant:"inherit"},"No errors"):a.a.createElement(a.a.Fragment,null,n.toLocaleString()," ",1===n?"error":"errors")}},ce=function(e){return function(t){var r=t.node;return 0===e.total?a.a.createElement(E.a,{color:"textSecondary",component:"span",variant:"inherit"},"No errors"):a.a.createElement(oe.a,{component:f.b,to:"/errors/".concat(r.hostname)},"View all errors (",e.total.toLocaleString(),")")}},ie=function(e){return function(t){var r=t.node,n=t.worker;return 0===e.perWorker[n.pid]?a.a.createElement(E.a,{color:"textSecondary",component:"span",variant:"inherit"},"No errors"):a.a.createElement(oe.a,{component:f.b,to:"/errors/".concat(r.hostname,"/").concat(n.pid)},"View errors (",e.perWorker[n.pid].toLocaleString(),")")}},se=function(e){var t=e.nodes;return a.a.createElement(a.a.Fragment,null,"Totals (",t.length.toLocaleString()," ",1===t.length?"host":"hosts",")")},ue=function(e){var t=e.node;return a.a.createElement(a.a.Fragment,null,t.hostname," (",t.ip,")")},pe=function(e){var t=e.worker;return a.a.createElement(a.a.Fragment,null,t.cmdline[0].split("::",2)[0]," (PID: ",t.pid,")")},me=function(e){return function(t){var r=t.nodes,n=0,o=!0,l=!1,c=void 0;try{for(var i,s=r[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value;u.ip in e&&(n+=e[u.ip].total)}}catch(p){l=!0,c=p}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}return 0===n?a.a.createElement(E.a,{color:"textSecondary",component:"span",variant:"inherit"},"No logs"):a.a.createElement(a.a.Fragment,null,n.toLocaleString()," ",1===n?"line":"lines")}},de=function(e){return function(t){var r=t.node;return 0===e.total?a.a.createElement(E.a,{color:"textSecondary",component:"span",variant:"inherit"},"No logs"):a.a.createElement(oe.a,{component:f.b,to:"/logs/".concat(r.hostname)},"View all logs (",e.total.toLocaleString()," ",1===e.total?"line":"lines",")")}},fe=function(e){return function(t){var r=t.node,n=t.worker;return 0===e.perWorker[n.pid]?a.a.createElement(E.a,{color:"textSecondary",component:"span",variant:"inherit"},"No logs"):a.a.createElement(oe.a,{component:f.b,to:"/logs/".concat(r.hostname,"/").concat(n.pid)},"View log (",e.perWorker[n.pid].toLocaleString()," ",1===e.perWorker[n.pid]?"line":"lines",")")}},he=function(e){var t=e.nodes,r=0,n=0,o=!0,l=!1,c=void 0;try{for(var i,s=t[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value;r+=u.mem[0]-u.mem[1],n+=u.mem[0]}}catch(p){l=!0,c=p}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}return a.a.createElement(K,{percent:100*r/n,text:ee(r,n,"gibibyte")})},ge=function(e){var t=e.node;return a.a.createElement(K,{percent:100*(t.mem[0]-t.mem[1])/t.mem[0],text:ee(t.mem[0]-t.mem[1],t.mem[0],"gibibyte")})},ve=function(e){var t=e.node,r=e.worker;return a.a.createElement(K,{percent:100*r.memory_info.rss/t.mem[0],text:$(r.memory_info.rss,"mebibyte")})},be=function(e){var t=e.nodes,r=0,n=!0,o=!1,l=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){r+=c.value.net[1]}}catch(s){o=!0,l=s}finally{try{n||null==i.return||i.return()}finally{if(o)throw l}}return a.a.createElement(a.a.Fragment,null,$(r,"mebibyte"),"/s")},ye=function(e){var t=e.node;return a.a.createElement(a.a.Fragment,null,$(t.net[1],"mebibyte"),"/s")},Ee=function(){return a.a.createElement(E.a,{color:"textSecondary",component:"span",variant:"inherit"},"N/A")},ke=function(e){var t=e.nodes,r=0,n=!0,o=!1,l=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){r+=c.value.net[0]}}catch(s){o=!0,l=s}finally{try{n||null==i.return||i.return()}finally{if(o)throw l}}return a.a.createElement(a.a.Fragment,null,$(r,"mebibyte"),"/s")},je=function(e){var t=e.node;return a.a.createElement(a.a.Fragment,null,$(t.net[0],"mebibyte"),"/s")},xe=function(){return a.a.createElement(E.a,{color:"textSecondary",component:"span",variant:"inherit"},"N/A")},Oe=function(e){return Date.now()/1e3-e},we=function(e){e.nodes;return a.a.createElement(E.a,{color:"textSecondary",component:"span",variant:"inherit"},"N/A")},Ne=function(e){var t=e.node;return a.a.createElement(a.a.Fragment,null,te(Oe(t.boot_time)))},Ce=function(e){var t=e.worker;return a.a.createElement(a.a.Fragment,null,te(Oe(t.create_time)))},Se=function(e){var t=e.nodes,r=0,n=0,o=!0,l=!1,c=void 0;try{for(var i,s=t[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value;r+=u.workers.length,n+=u.cpus[0]}}catch(p){l=!0,c=p}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}return a.a.createElement(a.a.Fragment,null,r.toLocaleString()," ",1===r?"worker":"workers"," / ",n.toLocaleString()," ",1===n?"core":"cores")},Fe=function(e){var t=e.node,r=t.workers.length,n=t.cpus[0];return a.a.createElement(a.a.Fragment,null,r.toLocaleString()," ",1===r?"worker":"workers"," /"," ",n.toLocaleString()," ",1===n?"core":"cores")},We=function(e){var t=e.worker;return a.a.createElement(a.a.Fragment,null,t.cmdline[0].split("::",2)[1])},Le=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={expanded:!1},r.toggleExpand=function(){r.setState(function(e){return{expanded:!e.expanded}})},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,r=e.node,n=e.logCounts,o=e.errorCounts,l=this.state.expanded,c=[{NodeFeature:ue,WorkerFeature:pe},{NodeFeature:Fe,WorkerFeature:We},{NodeFeature:Ne,WorkerFeature:Ce},{NodeFeature:Y,WorkerFeature:Z},{NodeFeature:ge,WorkerFeature:ve},{NodeFeature:ne,WorkerFeature:ae},{NodeFeature:je,WorkerFeature:xe},{NodeFeature:ye,WorkerFeature:Ee},{NodeFeature:de(n),WorkerFeature:fe(n)},{NodeFeature:ce(o),WorkerFeature:ie(o)}];return a.a.createElement(a.a.Fragment,null,a.a.createElement(F.a,{hover:!0},a.a.createElement(C.a,{className:X()(t.cell,t.expandCollapseCell),onClick:this.toggleExpand},l?a.a.createElement(J.a,{className:t.expandCollapseIcon}):a.a.createElement(P.a,{className:t.expandCollapseIcon})),c.map(function(e,n){var o=e.NodeFeature;return a.a.createElement(C.a,{className:t.cell,key:n},a.a.createElement(o,{node:r}))})),l&&r.workers.map(function(e,n){return a.a.createElement(F.a,{hover:!0,key:n},a.a.createElement(C.a,{className:t.cell}),c.map(function(n,o){var l=n.WorkerFeature;return a.a.createElement(C.a,{className:t.cell,key:o},a.a.createElement(l,{node:r,worker:e}))}))}))}}]),t}(a.a.Component),Ae=y()(function(e){return v()({cell:{padding:e.spacing(1),textAlign:"center","&:last-child":{paddingRight:e.spacing(1)}},expandCollapseCell:{cursor:"pointer"},expandCollapseIcon:{color:e.palette.text.secondary,fontSize:"1.5em",verticalAlign:"middle"}})})(Le),Ie=r(81),_e=r.n(Ie),Me=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,r=e.nodes,n=e.logCounts,o=e.errorCounts,l=[{ClusterFeature:se},{ClusterFeature:Se},{ClusterFeature:we},{ClusterFeature:Q},{ClusterFeature:he},{ClusterFeature:re},{ClusterFeature:ke},{ClusterFeature:be},{ClusterFeature:me(n)},{ClusterFeature:le(o)}];return a.a.createElement(F.a,{hover:!0},a.a.createElement(C.a,{className:t.cell},a.a.createElement(_e.a,{className:t.totalIcon})),l.map(function(e,n){var o=e.ClusterFeature;return a.a.createElement(C.a,{className:t.cell,key:n},a.a.createElement(o,{nodes:r}))}))}}]),t}(a.a.Component),Re=y()(function(e){return v()({cell:{borderTopColor:e.palette.divider,borderTopStyle:"solid",borderTopWidth:2,padding:e.spacing(1),textAlign:"center","&:last-child":{paddingRight:e.spacing(1)}},totalIcon:{color:e.palette.text.secondary,fontSize:"1.5em",verticalAlign:"middle"}})})(Me),Te=B,Be=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).refreshNodeInfo=Object(O.a)(x.a.mark(function e(){var t;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:t=e.sent,r.props.setNodeInfo(t),r.props.setError(null),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r.props.setError(e.t0.toString());case 11:return e.prev=11,setTimeout(r.refreshNodeInfo,1e3),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[0,8,11,14]])})),r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshNodeInfo();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.classes,r=e.nodeInfo;if(null===r)return a.a.createElement(E.a,{className:t.root,color:"textSecondary"},"Loading...");var n={},o={},l=!0,c=!1,i=void 0;try{for(var s,u=r.clients[Symbol.iterator]();!(l=(s=u.next()).done);l=!0){var p=s.value;n[p.ip]={perWorker:{},total:0},o[p.ip]={perWorker:{},total:0};var m=!0,d=!1,f=void 0;try{for(var h,g=p.workers[Symbol.iterator]();!(m=(h=g.next()).done);m=!0){var v=h.value;n[p.ip].perWorker[v.pid]=0,o[p.ip].perWorker[v.pid]=0}}catch(V){d=!0,f=V}finally{try{m||null==g.return||g.return()}finally{if(d)throw f}}}}catch(V){c=!0,i=V}finally{try{l||null==u.return||u.return()}finally{if(c)throw i}}for(var b=0,y=Object.keys(r.log_counts);b<y.length;b++){var j=y[b];if(j in n)for(var x=0,O=Object.entries(r.log_counts[j]);x<O.length;x++){var W=O[x],L=Object(k.a)(W,2),A=L[0],I=L[1];n[j].perWorker[A]=I,n[j].total+=I}}for(var _=0,M=Object.keys(r.error_counts);_<M.length;_++){var R=M[_];if(R in o)for(var T=0,B=Object.entries(r.error_counts[R]);T<B.length;T++){var D=B[T],U=Object(k.a)(D,2),H=U[0],P=U[1];o[R].perWorker[H]=P,o[R].total+=P}}return a.a.createElement("div",null,a.a.createElement(E.a,null,"Node information:"),a.a.createElement(w.a,{className:t.table},a.a.createElement(S.a,null,a.a.createElement(F.a,null,a.a.createElement(C.a,{className:t.cell}),a.a.createElement(C.a,{className:t.cell},"Host"),a.a.createElement(C.a,{className:t.cell},"Workers"),a.a.createElement(C.a,{className:t.cell},"Uptime"),a.a.createElement(C.a,{className:t.cell},"CPU"),a.a.createElement(C.a,{className:t.cell},"RAM"),a.a.createElement(C.a,{className:t.cell},"Disk"),a.a.createElement(C.a,{className:t.cell},"Sent"),a.a.createElement(C.a,{className:t.cell},"Received"),a.a.createElement(C.a,{className:t.cell},"Logs"),a.a.createElement(C.a,{className:t.cell},"Errors"))),a.a.createElement(N.a,null,r.clients.map(function(e){return a.a.createElement(Ae,{key:e.ip,node:e,logCounts:n[e.ip],errorCounts:o[e.ip]})}),a.a.createElement(Re,{nodes:r.clients,logCounts:n,errorCounts:o}))),a.a.createElement(z,null))}}]),t}(a.a.Component),De=Object(d.b)(function(e){return{nodeInfo:e.dashboard.nodeInfo}},Te)(y()(function(e){return v()({root:{backgroundColor:e.palette.background.paper,padding:e.spacing(2),"& > :not(:first-child)":{marginTop:e.spacing(2)}},table:{marginTop:e.spacing(1)},cell:{padding:e.spacing(1),textAlign:"center","&:last-child":{paddingRight:e.spacing(1)}}})})(Be)),Ue=B,ze=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).refreshRayConfig=Object(O.a)(x.a.mark(function e(){var t;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:t=e.sent,r.props.setRayConfig(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,setTimeout(r.refreshRayConfig,1e4),e.finish(9);case 12:case"end":return e.stop()}},e,null,[[0,7,9,12]])})),r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshRayConfig();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.classes,r=e.rayConfig;if(null===r)return null;var n=[{key:"Autoscaling mode",value:r.autoscaling_mode},{key:"Head node type",value:r.head_type},{key:"Worker node type",value:r.worker_type},{key:"Min worker nodes",value:r.min_workers},{key:"Initial worker nodes",value:r.initial_workers},{key:"Max worker nodes",value:r.max_workers},{key:"Idle timeout",value:"".concat(r.idle_timeout_minutes," ").concat(1===r.idle_timeout_minutes?"minute":"minutes")}];return a.a.createElement("div",null,a.a.createElement(E.a,null,"Ray cluster configuration:"),a.a.createElement(w.a,{className:t.table},a.a.createElement(S.a,null,a.a.createElement(F.a,null,a.a.createElement(C.a,{className:t.cell},"Setting"),a.a.createElement(C.a,{className:t.cell},"Value"))),a.a.createElement(N.a,null,n.map(function(e,r){var n=e.key,o=e.value;return a.a.createElement(F.a,{key:r},a.a.createElement(C.a,{className:X()(t.cell,t.key)},n),a.a.createElement(C.a,{className:t.cell},o))}))))}}]),t}(a.a.Component),He=Object(d.b)(function(e){return{rayConfig:e.dashboard.rayConfig}},Ue)(y()(function(e){return v()({table:{marginTop:e.spacing(1),width:"auto"},cell:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3),textAlign:"center","&:last-child":{paddingRight:e.spacing(3)}},key:{color:e.palette.text.secondary}})})(ze)),Pe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement("div",{className:e.root},a.a.createElement(E.a,{variant:"h5"},"Ray Dashboard"),a.a.createElement(De,null),a.a.createElement(He,null))}}]),t}(a.a.Component),Ve=y()(function(e){return v()({root:{backgroundColor:e.palette.background.paper,padding:e.spacing(2),"& > :not(:first-child)":{marginTop:e.spacing(4)}}})})(Pe),Je=r(50),Ge=r(154),Xe=r(155),qe=r(82),Ke=r.n(qe),Qe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,r=e.handleClose,n=e.title;return a.a.createElement(Ge.a,{classes:{paper:t.paper},fullWidth:!0,maxWidth:"md",onClose:r,open:!0,scroll:"body"},a.a.createElement(Xe.a,{className:t.closeButton,onClick:r},a.a.createElement(Ke.a,null)),a.a.createElement(E.a,{className:t.title},n),this.props.children)}}]),t}(a.a.Component),Ye=y()(function(e){return v()({paper:{padding:e.spacing(3)},closeButton:{position:"absolute",right:e.spacing(1.5),top:e.spacing(1.5),zIndex:1},title:{borderBottomColor:e.palette.divider,borderBottomStyle:"solid",borderBottomWidth:1,fontSize:"1.5rem",lineHeight:1,marginBottom:e.spacing(3),paddingBottom:e.spacing(3)}})})(Qe),Ze=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,r=e.lines;return a.a.createElement(w.a,null,a.a.createElement(N.a,null,r.map(function(e,r){return a.a.createElement(F.a,{key:r},a.a.createElement(C.a,{className:X()(t.cell,t.lineNumber),"data-line-number":r+1}),a.a.createElement(C.a,{className:X()(t.cell,t.line)},e))})))}}]),t}(a.a.Component),$e=y()(function(e){return v()({root:{overflowX:"auto"},cell:{borderWidth:0,fontFamily:"SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace",padding:0,"&:last-child":{paddingRight:0}},lineNumber:{color:e.palette.text.secondary,paddingRight:e.spacing(2),textAlign:"right",verticalAlign:"top",width:"1%","&::before":{content:"attr(data-line-number)"}},line:{textAlign:"left",whiteSpace:"pre-wrap"}})})(Ze),et=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={result:null,error:null},r.handleClose=function(){r.props.history.push("/")},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(x.a.mark(function e(){var t,r,n,a,o;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match,r=t.params,n=r.hostname,a=r.pid,e.next=5,_(n,a);case 5:o=e.sent,this.setState({result:o,error:null}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.setState({result:null,error:e.t0.toString()});case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.classes,r=e.match,n=this.state,o=n.result,l=n.error,c=r.params.hostname;return a.a.createElement(Ye,{handleClose:this.handleClose,title:"Errors"},null!==l?a.a.createElement(E.a,{color:"error"},l):null===o?a.a.createElement(E.a,{color:"textSecondary"},"Loading..."):Object.entries(o).map(function(e){var r=Object(k.a)(e,2),n=r[0],o=r[1];return a.a.createElement(a.a.Fragment,{key:n},a.a.createElement(E.a,{className:t.header},c," (PID: ",n,")"),o.length>0?o.map(function(e,r){var n=e.message,o=e.timestamp;return a.a.createElement("div",{className:t.error,key:r},a.a.createElement(E.a,{className:t.timestamp},"Error at ",new Date(1e3*o).toLocaleString()),a.a.createElement($e,{lines:n.trim().split("\n")}))}):a.a.createElement(E.a,{color:"textSecondary"},"No errors found."))}))}}]),t}(a.a.Component),tt=y()(function(e){return v()({header:{lineHeight:1,marginBottom:e.spacing(3),marginTop:e.spacing(3)},error:{backgroundColor:Object(Je.fade)(e.palette.error.main,.04),borderLeftColor:e.palette.error.main,borderLeftStyle:"solid",borderLeftWidth:2,marginTop:e.spacing(3),padding:e.spacing(2)},timestamp:{color:e.palette.text.secondary,marginBottom:e.spacing(1)}})})(et),rt=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={result:null,error:null},r.handleClose=function(){r.props.history.push("/")},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(x.a.mark(function e(){var t,r,n,a,o;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match,r=t.params,n=r.hostname,a=r.pid,e.next=5,M(n,a);case 5:o=e.sent,this.setState({result:o,error:null}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.setState({result:null,error:e.t0.toString()});case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.classes,r=e.match,n=this.state,o=n.result,l=n.error,c=r.params.hostname;return a.a.createElement(Ye,{handleClose:this.handleClose,title:"Logs"},null!==l?a.a.createElement(E.a,{color:"error"},l):null===o?a.a.createElement(E.a,{color:"textSecondary"},"Loading..."):Object.entries(o).map(function(e){var r=Object(k.a)(e,2),n=r[0],o=r[1];return a.a.createElement(a.a.Fragment,{key:n},a.a.createElement(E.a,{className:t.header},c," (PID: ",n,")"),o.length>0?a.a.createElement("div",{className:t.log},a.a.createElement($e,{lines:o})):a.a.createElement(E.a,{color:"textSecondary"},"No logs found."))}))}}]),t}(a.a.Component),nt=y()(function(e){return v()({header:{lineHeight:1,marginBottom:e.spacing(3),marginTop:e.spacing(3)},log:{backgroundColor:Object(Je.fade)(e.palette.primary.main,.04),borderLeftColor:e.palette.primary.main,borderLeftStyle:"solid",borderLeftWidth:2,padding:e.spacing(2)}})})(rt),at=Object(R.a)({reducer:{dashboard:D},devTools:!1}),ot=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(d.a,{store:at},a.a.createElement(f.a,null,a.a.createElement(m.a,null),a.a.createElement(Ve,null),a.a.createElement(h.a,{component:nt,path:"/logs/:hostname/:pid?"}),a.a.createElement(h.a,{component:tt,path:"/errors/:hostname/:pid?"})))}}]),t}(a.a.Component);l.a.render(a.a.createElement(ot,null),document.getElementById("root"))},91:function(e,t,r){e.exports=r(121)}},[[91,1,2]]]);
//# sourceMappingURL=main.bbb441ae.chunk.js.map