function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var a,i,o,r,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,o=i;return a=i=void 0,l=t,r=e.apply(o,n)}function S(e){return l=e,f=setTimeout(O,t),c?y(e):r}function w(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function O(){var e=g();if(w(e))return j(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?d(n,o-(e-l)):n}(e))}function j(e){return f=void 0,v&&a?y(e):(a=i=void 0,r)}function h(){var e=g(),n=w(e);if(a=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),r}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,a=u=i=f=void 0},h.flush=function(){return void 0===f?r:j(g())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=o.test(e);return n||r.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:a,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");let S={};if(localStorage.getItem("feedback-form-state")){let e=JSON.parse(localStorage.getItem("feedback-form-state"));e.email&&(y.email.value=e.email),e.message&&(y.message.value=e.message)}y.addEventListener("input",e(t)((e=>{localStorage.getItem("feedback-form-state")&&(S=JSON.parse(localStorage.getItem("feedback-form-state"))),S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),y.addEventListener("submit",(e=>{e.preventDefault(),y.email.value&&y.message.value?y.email.value&&y.message.value&&(y.email.value="",y.message.value="",console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),S={}):alert("Należy wypełnić wszystkie pola!")}));
//# sourceMappingURL=03-feedback.da6d4167.js.map
