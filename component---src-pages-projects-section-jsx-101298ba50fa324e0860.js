"use strict";(self.webpackChunkportfolio_v2=self.webpackChunkportfolio_v2||[]).push([[276],{729:function(e,r,t){var n=t(7294),a=t(6541);r.Z=function(e){var r=e.text,t=e.centered,o=void 0!==t&&t;return n.createElement(a.xu,{display:"flex",justifyContent:"center",alignItems:"center",color:{base:"font.dark",md:"font.darker"},w:"100%",letterSpacing:"0.2em",fontSize:{md:"text.sm"},_before:o&&{marginRight:"10px",content:'""',height:"2px",transform:"translateY(-50%)",bg:{base:"font.dark",md:"font.darker"},flexGrow:1},_after:{marginLeft:"10px",content:'""',height:"2px",transform:"translateY(-50%)",bg:{base:"font.dark",md:"font.darker"},flexGrow:1}},r)}},6365:function(e,r,t){var n=t(3366),a=t(7294),o=t(6541),i=["primary","label","href"];r.Z=function(e){var r=e.primary,t=void 0!==r&&r,l=e.label,c=e.href,s=(0,n.Z)(e,i);return a.createElement(o.rU,Object.assign({href:c,target:"_blank",rel:"noreferrer",bg:t?"primary":"secondary",p:{base:"15px 25px",md:"15px 30px"},textDecoration:"none!important",letterSpacing:"0.2em",color:t?"font.darkest":"font.dark",shadow:t&&"sm.primary",_hover:{transform:"scale(1.03)",color:t?"black":"font.light"},textAlign:"center"},s),l)}},4648:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(7294),a=t(6541),o=t(729),i=function(e){var r=e.title,t=e.linkDemo;return n.createElement(a.xu,{display:"flex",justifyContent:"flex-start",alignItems:"center",w:"100%",fontSize:"2.5rem",color:"font.dark",transition:"all 0.15s ease-in-out",_before:{marginTop:"5px",marginRight:"10px",content:'""',h:"5px",w:"30px",transform:"translateY(-50%)",bg:"primary",shadow:"sm.primary"},_hover:{color:"font.light",transform:"translateX(5px)"}},n.createElement(a.rU,{href:t,target:"_blank",rel:"noreferrer",textDecoration:"none!important"},r))},l=function(e){var r=e.description;return n.createElement(a.xu,{bg:"secondary",color:"font.dark",p:"20px 25px",fontWeight:400},r)},c=function(e){var r=e.tag;return n.createElement(a.xu,{bg:"secondary",p:"6px 12px"},r)},s=function(e){var r=e.tags;return n.createElement(a.xu,{display:"flex",gap:"12px",fontFamily:"courierPrime",color:"font.dark",fontWeight:400,flexWrap:"wrap"},r.map((function(e){return n.createElement(c,{key:e,tag:e})})))},f=t(6365),m=function(e){var r=e.linkRepo,t=e.linkDemo;return n.createElement(a.xu,{display:"flex",gap:"15px"},n.createElement(f.Z,{primary:!0,label:"VIEW DEMO",href:t}),n.createElement(f.Z,{label:"VIEW CODE",href:r}))},u=t(7370),p=t(559),d=t(3873);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},g.apply(this,arguments)}function x(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var b=["htmlWidth","htmlHeight","alt"],h=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],k=n.forwardRef((function(e,r){var t=e.htmlWidth,a=e.htmlHeight,o=e.alt,i=x(e,b);return n.createElement("img",g({width:t,height:a,ref:r,alt:o},i))})),v=(0,u.Gp)((function(e,r){var t=e.fallbackSrc,a=e.fallback,o=e.src,i=e.srcSet,l=e.align,c=e.fit,s=e.loading,f=e.ignoreFallback,m=e.crossOrigin,b=e.fallbackStrategy,v=void 0===b?"beforeLoadOrError":b,y=e.referrerPolicy,E=x(e,h),w=null!=s||f||!(void 0!==t||void 0!==a),O=function(e){var r=e.loading,t=e.src,a=e.srcSet,o=e.onLoad,i=e.onError,l=e.crossOrigin,c=e.sizes,s=e.ignoreFallback,f=(0,n.useState)("pending"),m=f[0],u=f[1];(0,n.useEffect)((function(){u(t?"loading":"pending")}),[t]);var p=(0,n.useRef)(),g=(0,n.useCallback)((function(){if(t){x();var e=new Image;e.src=t,l&&(e.crossOrigin=l),a&&(e.srcset=a),c&&(e.sizes=c),r&&(e.loading=r),e.onload=function(e){x(),u("loaded"),null==o||o(e)},e.onerror=function(e){x(),u("failed"),null==i||i(e)},p.current=e}}),[t,l,a,c,o,i,r]),x=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,d.a)((function(){if(!s)return"loading"===m&&g(),function(){x()}}),[m,g,s]),s?"loaded":m}(g({},e,{ignoreFallback:w})),j=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(O,v),D=g({ref:r,objectFit:c,objectPosition:l},w?E:(0,p.CE)(E,["onError","onLoad"]));return j?a||n.createElement(u.m$.img,g({as:k,className:"chakra-image__placeholder",src:t},D)):n.createElement(u.m$.img,g({as:k,src:o,srcSet:i,crossOrigin:m,loading:s,referrerPolicy:y,className:"chakra-image"},D))}));p.Ts&&(v.displayName="Image");var y=function(e){var r=e.linkDemo,t=e.image;return n.createElement(a.xu,{display:{base:"none",md:"block"},minW:"800px",maxW:"800px",minH:"450px",maxH:"450px",borderRadius:"10px",overflow:"hidden"},n.createElement(a.rU,{href:r,target:"_blank",rel:"noreferrer"},n.createElement(v,{src:t,minW:"100%",maxW:"100%",minH:"100%",maxH:"100%",objectFit:"cover",objectPosition:"center",transition:"all 0.2s ease-in-out",_hover:{transform:"scale(1.05)"}})))},E=function(e){var r=e.title,t=e.description,o=e.tags,c=e.image,f=e.linkRepo,u=e.linkDemo;return n.createElement(a.xu,{display:"flex",w:"100%",justifyContent:"space-between",gap:{md:"60px"},zIndex:1,position:"relative",_before:{display:{base:"block",md:"none"},content:'""',position:"absolute",bgImage:c,bgSize:"cover",bgPosition:"center",bgRepeat:"no-repeat",w:"100%",h:"100%",opacity:.2,zIndex:-1,padding:"100px"}},n.createElement(a.xu,{display:"flex",flexDir:"column",gap:"30px",zIndex:2},n.createElement(i,{title:r,linkDemo:u}),n.createElement(l,{description:t}),n.createElement(s,{tags:o}),n.createElement(m,{linkRepo:f,linkDemo:u})),n.createElement(y,{linkDemo:"http://nexus.waldemarperalta.com",image:c}))},w=function(){return n.createElement(a.xu,{display:"flex",flexDir:"column",justifyContent:"flex-start",alignItems:"center",w:{base:"100%",md:"1500px"},gap:"10px"},n.createElement(o.Z,{text:"PROJECTS"}),n.createElement(E,{title:"Project Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat hendrerit justo eget efficitur. Curabitur ornare leo ornare elit tincidunt blandit. Ut nulla purus, accumsan vel semper eget",tags:["Python","Django","Javascript","React","Gatsby","Docker","Git"],image:"https://source.unsplash.com/random/800x600",linkRepo:"https://github.com/wperalta70/nexus",linkDemo:"http://nexus.waldemarperalta.com"}))}},3366:function(e,r,t){function n(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-projects-section-jsx-101298ba50fa324e0860.js.map