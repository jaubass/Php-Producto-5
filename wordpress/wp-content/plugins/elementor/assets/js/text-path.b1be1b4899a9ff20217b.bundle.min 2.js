/*! elementor - v3.9.1 - 14-12-2022 */
"use strict";(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[48],{6468:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(6028);class TextPathHandler extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{pathContainer:".e-text-path",svg:".e-text-path > svg"}}}getDefaultElements(){const{selectors:t}=this.getSettings(),e=this.$element[0];return{widgetWrapper:e,pathContainer:e.querySelector(t.pathContainer),svg:e.querySelector(t.svg),textPath:e.querySelector(t.textPath)}}onInit(){this.elements=this.getDefaultElements(),this.fetchSVG().then((()=>{this.pathId=`e-path-${this.elements.widgetWrapper.dataset.id}`,this.textPathId=`e-text-path-${this.elements.widgetWrapper.dataset.id}`,this.elements.svg&&this.initTextPath()}))}fetchSVG(){const{url:t}=this.elements.pathContainer.dataset;return t&&t.endsWith(".svg")?fetch(t).then((t=>t.text())).then((t=>{this.elements.pathContainer.innerHTML=t,this.elements=this.getDefaultElements()})):Promise.reject(t)}setOffset(t){this.elements.textPath&&(this.isRTL()&&(t=100-parseInt(t)),this.elements.textPath.setAttribute("startOffset",t+"%"))}onElementChange(t){const{start_point:e,text:s}=this.getElementSettings();switch(t){case"start_point":this.setOffset(e.size);break;case"text":this.setText(s);break;case"text_path_direction":this.setOffset(e.size),this.setText(s)}}attachIdToPath(){(this.elements.svg.querySelector("[data-path-anchor]")||this.elements.svg.querySelector("path")).id=this.pathId}initTextPath(){const{start_point:t}=this.getElementSettings(),e=this.elements.pathContainer.dataset.text;this.attachIdToPath(),this.elements.svg.innerHTML+=`\n\t\t\t<text>\n\t\t\t\t<textPath id="${this.textPathId}" href="#${this.pathId}"></textPath>\n\t\t\t</text>\n\t\t`,this.elements.textPath=this.elements.svg.querySelector(`#${this.textPathId}`),this.setOffset(t.size),this.setText(e)}setText(t){const{url:e,is_external:s,nofollow:i}=this.getElementSettings().link,h=s?"_blank":"",a=i?"nofollow":"";e&&(t=`<a href="${(0,n.escapeHTML)(e)}" rel="${a}" target="${h}">${(0,n.escapeHTML)(t)}</a>`),this.elements.textPath.innerHTML=t;const r=this.elements.svg.querySelector(`#${this.textPathId}-clone`);if(r&&r.remove(),this.shouldReverseText()){const e=this.elements.textPath.cloneNode();e.id+="-clone",e.classList.add("elementor-hidden"),e.textContent=t,this.elements.textPath.parentNode.appendChild(e),this.reverseToRTL()}}isRTL(){const{text_path_direction:t}=this.getElementSettings();let e=elementorFrontend.config.is_rtl;return t&&(e="rtl"===t),e}shouldReverseText(){return this.isRTL()&&-1===navigator.userAgent.indexOf("Firefox")}reverseToRTL(){let t=this.elements.textPath;t=t.querySelector("a")||t;t.textContent=t.textContent.replace(/([\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC\s$&+,:;=?@#|'<>.^*()%!-]+)/gi,(t=>t.split("").reverse().join(""))),t.setAttribute("aria-hidden",!0)}}e.default=TextPathHandler}}]);