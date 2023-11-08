!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("react-date-object")):"function"==typeof define&&define.amd?define(["react","react-date-object"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).AnalogTimePicker=t(e.React,e.DateObject)}(this,(function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),a=r(t);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],d=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;d=!1}else for(;!(d=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);d=!0);}catch(e){c=!0,a=e}finally{try{if(!d&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e){var t=e.direction,r=e.onClick,a=e.disabled;return n.default.createElement("button",{type:"button",className:"rmdp-arrow-container ".concat(t," ").concat(a?"disabled":""),onClick:r,"aria-roledescription":"button to navigate ".concat(t.replace("rmdp-",""))},n.default.createElement("i",{className:"rmdp-arrow"}))}function m(e){var t=e.max,r=e.name,a=e.value,o=e.onChange,i=e.digits;return n.default.createElement("input",{type:"text",name:r,value:a,onChange:function(e){var n=l(e.target.value);if(isNaN(n))return;if(t&&Number(n)>t)return;o(r,n)},onKeyDown:function(e){var t;if("ArrowUp"===e.key)t=1;else{if("ArrowDown"!==e.key)return;t=-1}o(r,l(a)+t)}});function l(e){var t,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=c(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;e=e.replace(n,i.indexOf(n))}}catch(e){r.e(e)}finally{r.f()}return Number(e)}}function f(e){return Array.isArray(e)}function s(t){var r=t.selectedDate,a=t.focused,o=t.handleFocusedDate,l=t.state,d=t.setState,c=t.format;return e.useEffect((function(){f(r)&&0!==r.length&&(a||p(f(r[0])?r[0][0]:r[0]))}),[a,r,p]),f(r)&&n.default.createElement("div",{style:{display:"flex",padding:"5px 0"}},n.default.createElement("select",{className:"rmdp-input",style:{height:"26px",width:"90%",margin:"auto"},value:(null==a?void 0:a.day)||"",onChange:function(e){return p(r.flat().find((function(t){return t.day.toString()===e.target.value})))}},r.flat().map((function(e){return n.default.createElement("option",{key:e.day,value:e.day},e.format(c))}))));function p(e){d(i(i({},l),{},{focused:e})),o(e)}}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY/MM/DD";return e instanceof a.default?e.set({calendar:t,format:r}):e=new a.default({date:e,calendar:t,format:r}),e}function h(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}h(".rmdp-analog-clock{background-color:#83cbe7;border:5px solid #09589e;border-radius:50%;height:130px;margin:auto 20px;position:relative;width:130px}.bottom .rmdp-analog-clock,.top .rmdp-analog-clock{margin:20px auto}.rmdp-analog-clock .dot{background-color:#ccc;border-radius:50%;bottom:0;box-shadow:0 2px 4px -1px #000;height:8px;left:0;margin:auto;position:absolute;right:0;top:0;width:8px;z-index:10}.rmdp-analog-clock .rmdp-hour{background-color:#333;height:30px;top:35px;transform-origin:50% 30px;z-index:5}.rmdp-analog-clock .rmdp-hour,.rmdp-analog-clock .rmdp-minute{border-top-left-radius:50%;border-top-right-radius:50%;left:50%;margin-left:-2px;position:absolute;width:4px}.rmdp-analog-clock .rmdp-minute{background-color:#666;height:55px;top:14px;transform-origin:50% 52px;z-index:6}.rmdp-analog-clock .rmdp-second{background-color:#0074d9;border-top-left-radius:50%;border-top-right-radius:50%;height:60px;left:50%;margin-left:-1px;position:absolute;top:10px;transform-origin:50% 55px;width:2px;z-index:7}.rmdp-analog-clock span{color:#333;display:inline-block;font-family:Arial;font-size:16px;font-weight:700;position:absolute;z-index:4}.rmdp-analog-clock .rmdp-h12{left:50%;margin-left:-9px;top:10px}.rmdp-analog-clock .rmdp-h3{right:10px;top:58px}.rmdp-analog-clock .rmdp-h6{bottom:7px;left:50%;margin-left:-4px}.rmdp-analog-clock .rmdp-h9{left:10px;top:58px}.rmdp-analog-clock .dial-lines{background-color:#4ca6f5;height:5px;left:50%;margin-left:-1px;position:absolute;transform-origin:50% 65px;width:2px;z-index:2}.rmdp-analog-clock .dial-lines:nth-of-type(5n){background-color:#0074d9;height:8px;width:3px}@media (max-height:400px),(max-width:400px){.rmdp-analog-clock{height:100px;margin:20px 10px;width:100px}.rmdp-analog-clock .dial-lines{height:3px;transform-origin:50% 50px;width:1px}.rmdp-analog-clock .dial-lines:nth-of-type(5n){background-color:#0074d9;height:5px;width:2px}.rmdp-analog-clock span{font-size:12px;font-weight:400}.rmdp-analog-clock .rmdp-h12{top:6px}.rmdp-analog-clock .rmdp-h3{right:7px;top:41px}.rmdp-analog-clock .rmdp-h6{bottom:6px}.rmdp-analog-clock .rmdp-h9{left:7px;top:41px}.rmdp-analog-clock .rmdp-hour{height:20px;top:30px;transform-origin:50% 20px}.rmdp-analog-clock .rmdp-minute{height:28px;top:19px;transform-origin:50% 31px}.rmdp-analog-clock .rmdp-second{height:33px;top:16px;transform-origin:50% 35px}.rmdp-analog-clock .dot{box-shadow:0 2px 4px -1px #000;height:7px;width:7px}}");h(".rmdp-time-picker.left div,.rmdp-time-picker.right div{margin:auto}.rmdp-time-picker{display:flex;padding:3px 0}.rmdp-time-picker.active{display:flex}.rmdp-time-picker div{align-items:center;display:flex;flex:1;flex-direction:column;margin-top:1px}.rmdp-time-picker div input{border:none;flex-grow:1;font-size:14px;padding:5px 2px;text-align:center;width:20px}.rmdp-time-picker div input::-webkit-inner-spin-button,.rmdp-time-picker div input::-webkit-outer-spin-button{-webkit-appearance:none}.rmdp-time-picker div input[type=number]{-moz-appearance:textfield}.rmdp-time-picker .dvdr{display:flex;flex-direction:column;justify-content:center;margin-top:-5px}.rmdp-time-picker div .rmdp-am{color:#000;font-size:13px;line-height:22px;margin-top:2px}.rmdp-only-time-picker{margin-bottom:0;width:220px}.rmdp-up i{margin-top:7px;transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.rmdp-down i{margin-top:3px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}@media (max-height:400px),(max-width:400px){.rmdp-time-picker div input{font-size:12px}.rmdp-time-picker div .rmdp-am{font-size:12px;line-height:22px}}");var x=function(e){return"rotate(".concat(e,"deg)")},y=[["hour","HH",24],["minute","mm",60],["second","ss",60]];function b(e){var t=e.max,r=e.name,a=d(e.values,2),o=a[0],i=a[1],l=e.update,c=e.digits,p=e.hideDivider,f=e.step;return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",null,n.default.createElement(u,{direction:"rmdp-up",onClick:function(){return l(r,o+f)}}),n.default.createElement(m,{max:t,value:i,onChange:l,digits:c,name:r}),n.default.createElement(u,{direction:"rmdp-down",onClick:function(){return l(r,o-f)}})),!p&&n.default.createElement("span",{className:"dvdr"},":"))}return function(t){var r=t.state,o=t.setState,l=t.handleChange,c=t.handleFocusedDate,p=t.format,u=void 0===p?"YYYY/MM/DD":p,m=t.position,f=t.calendarProps.disableDayPicker,h=t.hideSeconds,v=t.hStep,k=void 0===v?1:v,w=t.mStep,E=void 0===w?1:w,j=t.sStep,O=void 0===j?1:j,D=t.minDate,S=t.maxDate,A=r.date,N=r.selectedDate,C=r.multiple,P=r.range,z=r.focused,T=(C||P?z:N)||A,Y=T.hour,M=T.minute,I=T.second,F={hour:30*Y+.5*M,minute:6*M+.1*I,second:6*I},q=e.useMemo((function(){return Array.from(Array(60).keys()).map((function(e){return n.default.createElement("div",{key:e,className:"dial-lines",style:{transform:x(6*(e+1))}})}))}),[]),B=["3","6","9","12"].map((function(e,t){return n.default.createElement("span",{key:t,className:"rmdp-h"+e},e.replace(/[0-9]/g,(function(e){return A.digits[e]})))}));return n.default.createElement("div",{className:m,style:{display:"grid",minWidth:f?"180px":""}},n.default.createElement("div",{className:"rmdp-analog-clock"},n.default.createElement("div",{className:"dot"}),n.default.createElement("div",null,y.map((function(e,t){var r=d(e,1)[0];return"second"===r&&h?null:n.default.createElement("div",{key:t,style:{transform:x(F[r])},className:"rmdp-".concat(r)})}))),n.default.createElement("div",null,B),n.default.createElement("div",null,q)),Array.isArray(N)&&n.default.createElement(s,{selectedDate:N,focused:z,handleFocusedDate:c,state:r,setState:o,format:u}),n.default.createElement("div",{style:{margin:"auto 0"}},n.default.createElement("div",{className:"rmdp-time-picker"},y.map((function(e,t){var r=d(e,3),a=r[0],o=r[1],i=r[2];if("second"===a&&h)return null;var l=1;switch(a){case"hour":l=k;break;case"minute":l=E;break;case"second":l=O}return n.default.createElement(b,{max:i,key:t,name:a,step:l,values:H(a,o),update:U,digits:A.digits,hideDivider:"second"===a||"minute"===a&&h})})))));function H(e,t){return T[e]||(T[e]=0),[T[e],T.format(t)]}function U(e,t){var n=new a.default(T).set(e,t);D&&n<g(D,r.calendar,r.format)||S&&n>g(S,r.calendar,r.format)||(T[e]=t,l(N,i(i({},r),{},{selectedDate:N,focused:z})))}}}));
