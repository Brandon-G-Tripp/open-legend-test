(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[51],{1228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(1228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,i){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(1228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},3715:function(e,t,r){"use strict";var n=r(2122),o=r(1253),a=r(6156),i=r(7294),s=r(2585),l=r(3288),p=r(7969),u=i.forwardRef((function(e,t){var r=e.classes,a=e.className,l=e.component,u=void 0===l?"div":l,d=e.disableGutters,c=void 0!==d&&d,f=e.fixed,x=void 0!==f&&f,b=e.maxWidth,m=void 0===b?"lg":b,g=(0,o.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(u,(0,n.Z)({className:(0,s.Z)(r.root,a,x&&r.fixed,c&&r.disableGutters,!1!==m&&r["maxWidth".concat((0,p.Z)(String(m)))]),ref:t},g))}));t.Z=(0,l.Z)((function(e){return{root:(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:n}),t}),{}),maxWidthXs:(0,a.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,a.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,a.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,a.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,a.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},7442:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7294),o=r(7013),a=r(3715),i=r(3497),s=r(2964),l=r(229),p=(0,r(7399).Z)({content:{fontSize:"16px",paddingBottom:"16px","& h2":{background:"rgba(50,39,176,.15)",padding:"8px"},"& blockquote":{backgroundColor:"#fbf9ff",margin:"8px",padding:"15px"},"& .sticky-sidebar":{"& h3":{margin:"0"},"& p":{margin:"0"},"& blockquote":{background:"inherit",margin:"0",padding:"0"},float:"right",width:"43%",padding:"12px",margin:"0 0 0 16px",background:"white"},"& table":{width:"100%!important",background:"0 0!important",borderCollapse:"collapse",borderSpacing:"0",tableLayout:"fixed",display:"table","& .table-no-body":{"& th:first-of-type":{width:"25%"},"& th:nth-of-type(2)":{width:"25%"},"& th:nth-of-type(3)":{width:"50%"}}},"& thead":{display:"table-header-group",verticalAlign:"middle","& tr":{"& th":{padding:"0"}}},"& th":{padding:"7px",borderWidth:"0",textAlign:"center"},"& tr":{display:"table-row",verticalAlign:"inherit",borderColor:"inherit",border:"0","& td":{padding:"7px",borderWidth:"0",textAlign:"center"}},"& tbody":{display:"table-row-group",verticalAlign:"middle",borderSpacing:"0","& tr:nth-child(odd)":{background:"#fbf9ff",textAlign:"center"},"& tr:nth-child(even)":{background:"#ffe6cc",textAlign:"center"}},"& .table-no-body-heading":{marginBottom:"0",textAlign:"center"},"& .table-even-header":{textTransform:"uppercase",background:"#f9cb9c",padding:"4px 0"}},navDiv:{display:"flex",flexDirection:"row",justifyContent:"center","& > a":{margin:"0 8px"}}});function u(e){var t=e.data,r=e.pageContext,u=p(),d=r.prev?{url:""+r.prev.frontmatter.slug,title:r.prev.frontmatter.title}:null,c=r.next?{url:""+r.next.frontmatter.slug,title:r.next.frontmatter.title}:null,f=t.mdx,x=(f.frontmatter,f.body),b=f.headings;return n.createElement(l.Z,null,n.createElement(a.Z,{maxWidth:"xl",className:u.content},n.createElement(i.MDXProvider,null,n.createElement(s.MDXRenderer,{headings:b},x)),n.createElement("div",{className:u.navDiv},d&&n.createElement(o.Link,{to:d.url},n.createElement("h4",null," < Previous Chapter ")),c&&n.createElement(o.Link,{to:c.url},n.createElement("h4",null,"Next Chapter >")))))}},2964:function(e,t,r){var n=r(2331);e.exports={MDXRenderer:n}},2331:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),i=r(7316);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),u=r(3497).mdx,d=r(6745).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,["scope","children"]),s=d(t),c=p.useMemo((function(){if(!r)return null;var e=l({React:p,mdx:u},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return p.createElement(c,l({},a))}}}]);
//# sourceMappingURL=component---src-templates-core-rules-template-js-232e40c5dbcc62806fe5.js.map