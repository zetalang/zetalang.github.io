(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var i=t(3038),s=t(862);n.default=void 0;var a=s(t(7294)),r=t(9414),l=t(4651),o=t(7426),c={};function u(e,n,t,i){if(e&&(0,r.isLocalURL)(n)){e.prefetch(n,t,i).catch((function(e){0}));var s=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;c[n+"%"+t+(s?"%"+s:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,s=(0,l.useRouter)(),d=a.default.useMemo((function(){var n=(0,r.resolveHref)(s,e.href,!0),t=i(n,2),a=t[0],l=t[1];return{href:a,as:e.as?(0,r.resolveHref)(s,e.as):l||a}}),[s,e.href,e.as]),f=d.href,C=d.as,h=e.children,m=e.replace,v=e.shallow,x=e.scroll,p=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=(n=a.Children.only(h))&&"object"===typeof n&&n.ref,_=(0,o.useIntersection)({rootMargin:"200px"}),b=i(_,2),j=b[0],w=b[1],N=a.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);(0,a.useEffect)((function(){var e=w&&t&&(0,r.isLocalURL)(f),n="undefined"!==typeof p?p:s&&s.locale,i=c[f+"%"+C+(n?"%"+n:"")];e&&!i&&u(s,f,C,{locale:n})}),[C,f,w,p,t,s]);var k={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,i,s,a,l,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(t))&&(e.preventDefault(),null==l&&i.indexOf("#")>=0&&(l=!1),n[s?"replace":"push"](t,i,{shallow:a,locale:o,scroll:l}))}(e,s,f,C,m,v,x,p)},onMouseEnter:function(e){(0,r.isLocalURL)(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(s,f,C,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var y="undefined"!==typeof p?p:s&&s.locale,M=s&&s.isLocaleDomain&&(0,r.getDomainLocale)(C,y,s&&s.locales,s&&s.domainLocales);k.href=M||(0,r.addBasePath)((0,r.addLocale)(C,y,s&&s.defaultLocale))}return a.default.cloneElement(n,k)};n.default=d},7426:function(e,n,t){"use strict";var i=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!r,o=(0,s.useRef)(),c=(0,s.useState)(!1),u=i(c,2),d=u[0],f=u[1],C=(0,s.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||d||e&&e.tagName&&(o.current=function(e,n,t){var i=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var i=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:s,elements:i}),t}(t),s=i.id,a=i.observer,r=i.elements;return r.set(e,n),a.observe(e),function(){r.delete(e),a.unobserve(e),0===r.size&&(a.disconnect(),l.delete(s))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return(0,s.useEffect)((function(){if(!r&&!d){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[C,d]};var s=t(7294),a=t(3447),r="undefined"!==typeof IntersectionObserver;var l=new Map},1295:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var i=t(5893),s=t(5889),a=t.n(s),r=t(1664);function l(e){return(0,i.jsx)("svg",{width:e.width,height:e.height,viewBox:"0 0 40 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M35.8884 7.47654C35.9138 7.80464 35.9138 8.13283 35.9138 8.46093C35.9138 18.4687 27.6651 30 12.5889 30C7.94417 30 3.62947 28.7578 0 26.6016C0.659924 26.6719 1.29438 26.6953 1.9797 26.6953C5.81213 26.6953 9.34011 25.5 12.1574 23.461C8.55331 23.3906 5.53299 21.211 4.49236 18.2109C5.00002 18.2812 5.5076 18.3281 6.04065 18.3281C6.77667 18.3281 7.51276 18.2343 8.198 18.0703C4.44166 17.3671 1.6243 14.3203 1.6243 10.6406V10.5469C2.71564 11.1094 3.98478 11.461 5.32986 11.5078C3.12173 10.1484 1.67508 7.82809 1.67508 5.20307C1.67508 3.79685 2.0811 2.50779 2.79181 1.38278C6.82737 5.97652 12.8934 8.97647 19.6954 9.30466C19.5685 8.74215 19.4923 8.15627 19.4923 7.57032C19.4923 3.3984 23.1472 0 27.6903 0C30.0507 0 32.1827 0.91406 33.6802 2.39062C35.533 2.06252 37.3096 1.42967 38.8833 0.562504C38.2741 2.32036 36.9797 3.79692 35.2792 4.73435C36.929 4.57037 38.528 4.1484 40 3.56253C38.8834 5.06246 37.4874 6.39835 35.8884 7.47654Z",fill:"black"})})}function o(e){return(0,i.jsx)("svg",{width:e.width,height:e.height,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M10.0343 24.156C10.0343 24.28 9.89516 24.3793 9.71976 24.3793C9.52016 24.3979 9.38105 24.2986 9.38105 24.156C9.38105 24.0319 9.52016 23.9326 9.69556 23.9326C9.87702 23.914 10.0343 24.0133 10.0343 24.156ZM8.15323 23.8768C8.11089 24.0009 8.23186 24.1435 8.41331 24.1808C8.57057 24.2428 8.75202 24.1808 8.78831 24.0567C8.8246 23.9326 8.70968 23.79 8.52822 23.7341C8.37097 23.6907 8.19556 23.7527 8.15323 23.8768ZM10.8266 23.7713C10.6512 23.8148 10.5302 23.9326 10.5484 24.0753C10.5665 24.1994 10.7238 24.28 10.9052 24.2366C11.0806 24.1932 11.2016 24.0753 11.1835 23.9512C11.1653 23.8334 11.002 23.7527 10.8266 23.7713ZM14.8065 0C6.41734 0 0 6.53216 0 15.1362C0 22.0158 4.22177 27.9028 10.252 29.9747C11.0262 30.1174 11.2984 29.6273 11.2984 29.2241C11.2984 28.8395 11.2802 26.718 11.2802 25.4152C11.2802 25.4152 7.04637 26.3457 6.15726 23.5666C6.15726 23.5666 5.46774 21.7615 4.47581 21.2962C4.47581 21.2962 3.09073 20.3223 4.57258 20.3409C4.57258 20.3409 6.07863 20.4649 6.90726 21.9414C8.23185 24.3359 10.4516 23.6473 11.3165 23.2379C11.4556 22.2453 11.8488 21.5567 12.2843 21.1473C8.90323 20.7627 5.49194 20.2602 5.49194 14.2926C5.49194 12.5867 5.95161 11.7306 6.91935 10.6388C6.7621 10.2356 6.24798 8.57307 7.07661 6.4267C8.34072 6.02348 11.25 8.10161 11.25 8.10161C12.4597 7.75422 13.7601 7.57433 15.0484 7.57433C16.3367 7.57433 17.6371 7.75422 18.8468 8.10161C18.8468 8.10161 21.756 6.01728 23.0202 6.4267C23.8488 8.57927 23.3347 10.2356 23.1774 10.6388C24.1452 11.7368 24.7379 12.5929 24.7379 14.2926C24.7379 20.2788 21.1754 20.7565 17.7944 21.1473C18.3508 21.6374 18.8226 22.5679 18.8226 24.0257C18.8226 26.1162 18.8044 28.703 18.8044 29.2117C18.8044 29.6149 19.0827 30.105 19.8508 29.9623C25.8992 27.9028 30 22.0158 30 15.1362C30 6.53216 23.1956 0 14.8065 0ZM5.87903 21.3955C5.8004 21.4575 5.81855 21.6002 5.92137 21.718C6.01814 21.8173 6.15726 21.8607 6.23589 21.7801C6.31452 21.718 6.29637 21.5753 6.19355 21.4575C6.09677 21.3582 5.95766 21.3148 5.87903 21.3955ZM5.22581 20.893C5.18347 20.9736 5.24395 21.0729 5.36492 21.1349C5.46169 21.1969 5.58266 21.1783 5.625 21.0915C5.66734 21.0108 5.60685 20.9116 5.48589 20.8496C5.36492 20.8123 5.26815 20.8309 5.22581 20.893ZM7.18548 23.1014C7.08871 23.182 7.125 23.3681 7.26411 23.486C7.40323 23.6287 7.57863 23.6473 7.65726 23.548C7.73589 23.4674 7.6996 23.2813 7.57863 23.1634C7.44556 23.0207 7.26411 23.0021 7.18548 23.1014ZM6.49597 22.1895C6.39919 22.2515 6.39919 22.4128 6.49597 22.5555C6.59274 22.6982 6.75605 22.7602 6.83468 22.6982C6.93145 22.6175 6.93145 22.4562 6.83468 22.3136C6.75 22.1709 6.59274 22.1088 6.49597 22.1895Z",fill:"black"})})}function c(e){return(0,i.jsx)("svg",{width:e.width,height:e.height,viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M21.862 16.15C21.862 17.187 21.097 18.037 20.128 18.037C19.176 18.037 18.394 17.187 18.394 16.15C18.394 15.113 19.159 14.263 20.128 14.263C21.097 14.263 21.862 15.113 21.862 16.15ZM13.923 14.263C12.954 14.263 12.189 15.113 12.189 16.15C12.189 17.187 12.971 18.037 13.923 18.037C14.892 18.037 15.657 17.187 15.657 16.15C15.674 15.113 14.892 14.263 13.923 14.263ZM31.875 3.502V34C27.5922 30.2152 28.9619 31.4681 23.987 26.843L24.888 29.988H5.61C3.689 29.988 2.125 28.424 2.125 26.486V3.502C2.125 1.564 3.689 0 5.61 0H28.39C30.311 0 31.875 1.564 31.875 3.502ZM27.03 19.618C27.03 14.144 24.582 9.707 24.582 9.707C22.134 7.871 19.805 7.922 19.805 7.922L19.567 8.194C22.457 9.078 23.8 10.353 23.8 10.353C19.7618 8.13975 15.0182 8.13935 11.101 9.86C10.472 10.149 10.098 10.353 10.098 10.353C10.098 10.353 11.509 9.01 14.569 8.126L14.399 7.922C14.399 7.922 12.07 7.871 9.622 9.707C9.622 9.707 7.174 14.144 7.174 19.618C7.174 19.618 8.602 22.083 12.359 22.202C12.359 22.202 12.988 21.437 13.498 20.791C11.339 20.145 10.523 18.785 10.523 18.785C10.7731 18.96 11.1855 19.187 11.22 19.21C14.0894 20.8169 18.1653 21.3434 21.828 19.805C22.423 19.584 23.086 19.261 23.783 18.802C23.783 18.802 22.933 20.196 20.706 20.825C21.216 21.471 21.828 22.202 21.828 22.202C25.585 22.083 27.03 19.618 27.03 19.618V19.618Z",fill:"black"})})}function u(){return(0,i.jsxs)("nav",{className:a().nav,children:[(0,i.jsx)("img",{src:"/logo.svg",width:"50em",height:"50em"}),(0,i.jsxs)("div",{className:a().navlink,children:[(0,i.jsx)(r.default,{href:"/zetadocs",children:(0,i.jsx)("div",{className:a().link,children:"Documentation"})}),(0,i.jsx)(r.default,{href:"/community",children:(0,i.jsx)("div",{className:a().link,children:"Community"})}),(0,i.jsx)(r.default,{href:"/installation",children:(0,i.jsx)("div",{className:a().link,children:"Installation"})}),(0,i.jsx)(r.default,{href:"/Blog",children:(0,i.jsx)("div",{className:a().link,children:"Blog"})})]}),(0,i.jsxs)("div",{className:a().smlinks,children:[(0,i.jsx)(r.default,{href:"https://github.com/zetalang",children:(0,i.jsx)("div",{className:a().link,children:(0,i.jsx)(o,{width:"1.5em",height:"1.5em"})})}),(0,i.jsx)(r.default,{href:"https://twitter.com/zetalang",children:(0,i.jsx)("div",{className:a().link,children:(0,i.jsx)(l,{width:"1.5em",height:"1.5em"})})}),(0,i.jsx)(r.default,{href:"https://discord.com/invite/wY9NsfGFDP",children:(0,i.jsx)("div",{className:a().link,children:(0,i.jsx)(c,{width:"1.5em",height:"1.5em"})})})]})]})}var d=t(4476),f=t.n(d);function C(){return(0,i.jsx)("div",{style:{height:"40vh"},children:(0,i.jsx)("img",{src:"./syntax.png",height:"100%"})})}function h(){return(0,i.jsxs)("main",{className:f().main,children:[(0,i.jsx)(u,{}),(0,i.jsxs)("div",{className:f().landingmain,children:[(0,i.jsxs)("div",{className:f().landing,children:[(0,i.jsxs)("h1",{className:f().bannertxt,children:[(0,i.jsx)("span",{className:f().bluetext,children:"Supercharge"})," your"," ",(0,i.jsx)("span",{className:f().bluetext,children:"CLI"})]}),(0,i.jsxs)("div",{className:f().subbannertext,children:[(0,i.jsx)("span",{className:f().bluetext,children:"Zeta is a programming language designed"})," for CLI applications ",(0,i.jsx)("br",{}),"and is built for",(0,i.jsxs)("span",{className:f().bluetext,children:[" ","speed, efficiency, and ease of use."]})]}),(0,i.jsxs)("div",{className:f().buttons,children:[(0,i.jsx)("button",{className:f().buttonblue,children:"Get Started!"}),(0,i.jsx)("button",{className:f().buttonwhite,children:"Try it out!"})]})]}),(0,i.jsx)("div",{className:f().codesnippet,children:(0,i.jsx)(C,{})})]})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1295)}])},5889:function(e){e.exports={nav:"Nav_nav__c6jRM",navlink:"Nav_navlink__zyBm3",link:"Nav_link__2u-Tr",smlinks:"Nav_smlinks__2zvWI"}},4476:function(e){e.exports={main:"Home_main__1x8gC",landingmain:"Home_landingmain__3nVdr",landing:"Home_landing__3VX3f",bluetext:"Home_bluetext__2nBOQ",bannertxt:"Home_bannertxt__3I98O",subbannertext:"Home_subbannertext__tt1OG",buttonwhite:"Home_buttonwhite__rRg-U",buttonblue:"Home_buttonblue__sh2Vm",buttons:"Home_buttons__f55Jx",codesnippet:"Home_codesnippet__3062C"}},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);