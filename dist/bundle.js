(()=>{var t={890:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(645),a=n.n(r)()((function(t){return t[1]}));a.push([t.id,"* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n}\n\nbody {\n\tfont-family: Arial, Helvetica, sans-serif;\n\tline-height: 1;\n}\n\n.nav-bar {\n\tdisplay: flex;\n}\n\n.nav-bar:hover {\n\tcursor: pointer;\n}\n\n#new-todo {\n\tmargin-right: 5px;\n}\n\n#all-todos {\n\tmargin-left: 5px;\n\tmargin-right: 5px;\n}\n\n#new-todo-container {\n\tdisplay: grid;\n}\n\ninput {\n\tborder: 1px solid black;\n\tmargin-left: 5px;\n}\n",""]);const i=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},798:function(t,e,n){t=n.nmd(t),function(n,r){"use strict";var a={};n.PubSub=a,function(t){var e={},n=-1;function r(t,e,n){try{t(e,n)}catch(t){setTimeout(function(t){return function(){throw t}}(t),0)}}function a(t,e,n){t(e,n)}function i(t,n,i,o){var u,c=e[n],s=o?a:r;if(Object.prototype.hasOwnProperty.call(e,n))for(u in c)Object.prototype.hasOwnProperty.call(c,u)&&s(c[u],t,i)}function o(t){var n=String(t);return Boolean(Object.prototype.hasOwnProperty.call(e,n)&&function(t){var e;for(e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!0;return!1}(e[n]))}function u(t,e,n,r){var a=function(t,e,n){return function(){var r=String(t),a=r.lastIndexOf(".");for(i(t,t,e,n);-1!==a;)a=(r=r.substr(0,a)).lastIndexOf("."),i(t,r,e,n);i(t,"*",e,n)}}(t="symbol"==typeof t?t.toString():t,e,r);return!!function(t){for(var e=String(t),n=o(e)||o("*"),r=e.lastIndexOf(".");!n&&-1!==r;)r=(e=e.substr(0,r)).lastIndexOf("."),n=o(e);return n}(t)&&(!0===n?a():setTimeout(a,0),!0)}t.publish=function(e,n){return u(e,n,!1,t.immediateExceptions)},t.publishSync=function(e,n){return u(e,n,!0,t.immediateExceptions)},t.subscribe=function(t,r){if("function"!=typeof r)return!1;t="symbol"==typeof t?t.toString():t,Object.prototype.hasOwnProperty.call(e,t)||(e[t]={});var a="uid_"+String(++n);return e[t][a]=r,a},t.subscribeAll=function(e){return t.subscribe("*",e)},t.subscribeOnce=function(e,n){var r=t.subscribe(e,(function(){t.unsubscribe(r),n.apply(this,arguments)}));return t},t.clearAllSubscriptions=function(){e={}},t.clearSubscriptions=function(t){var n;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&0===n.indexOf(t)&&delete e[n]},t.countSubscriptions=function(t){var n,r=0;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&0===n.indexOf(t)&&r++;return r},t.getSubscriptions=function(t){var n,r=[];for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&0===n.indexOf(t)&&r.push(n);return r},t.unsubscribe=function(n){var r,a,i,o="string"==typeof n&&(Object.prototype.hasOwnProperty.call(e,n)||function(t){var n;for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&0===n.indexOf(t))return!0;return!1}(n)),u=!o&&"string"==typeof n,c="function"==typeof n,s=!1;if(!o){for(r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(a=e[r],u&&a[n]){delete a[n],s=n;break}if(c)for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&a[i]===n&&(delete a[i],s=!0)}return s}t.clearSubscriptions(n)}}(a),void 0!==t&&t.exports&&(e=t.exports=a),e.PubSub=a,t.exports=e=a}("object"==typeof window&&window||this)},379:(t,e,n)=>{"use strict";var r,a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function o(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],a=0;a<t.length;a++){var u=t[a],c=e.base?u[0]+e.base:u[0],s=n[c]||0,d="".concat(c," ").concat(s);n[c]=s+1;var l=o(d),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:d,updater:g(f,e),references:1}),r.push(d)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,d=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function l(t,e,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,a);else{var i=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function f(t,e,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(t,e){var n,r,a;if(e.singleton){var i=m++;n=h||(h=c(e)),r=l.bind(null,n,i,!1),a=l.bind(null,n,i,!0)}else n=c(e),r=f.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var a=o(n[r]);i[a].references--}for(var c=u(t,e),s=0;s<n.length;s++){var d=o(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}}},e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(n){t(1,arguments);var r=e(n);return!isNaN(r)}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function i(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var o,u={date:i({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:i({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function d(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var c,s=u[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(d),c=t.valueCallback?t.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(s.length)}}}const l={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(t,e,n,r){return c[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(o.matchPattern);if(!a)return null;var i=a[0],u=n.match(o.parsePattern);if(!u)return null;var c=o.valueCallback?o.valueCallback(u[0]):u[0];return{value:c=r.valueCallback?r.valueCallback(c):c,rest:n.slice(i.length)}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function h(n,r){t(2,arguments);var a=e(n).getTime(),i=f(r);return new Date(a+i)}function m(e,n){t(2,arguments);var r=f(n);return h(e,-r)}function g(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const p=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return g("yy"===e?r%100:r,e.length)},w=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):g(n+1,2)},v=function(t,e){return g(t.getUTCDate(),e.length)},b=function(t,e){return g(t.getUTCHours()%12||12,e.length)},y=function(t,e){return g(t.getUTCHours(),e.length)},T=function(t,e){return g(t.getUTCMinutes(),e.length)},C=function(t,e){return g(t.getUTCSeconds(),e.length)},x=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return g(Math.floor(r*Math.pow(10,n-3)),e.length)};var M=864e5;function P(n){t(1,arguments);var r=1,a=e(n),i=a.getUTCDay(),o=(i<r?7:0)+i-r;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function O(n){t(1,arguments);var r=e(n),a=r.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=P(i),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var c=P(u);return r.getTime()>=o.getTime()?a+1:r.getTime()>=c.getTime()?a:a-1}function S(e){t(1,arguments);var n=O(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=P(r);return a}var D=6048e5;function E(n,r){t(1,arguments);var a=r||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:f(o),c=null==a.weekStartsOn?u:f(a.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=e(n),d=s.getUTCDay(),l=(d<c?7:0)+d-c;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function k(n,r){t(1,arguments);var a=e(n,r),i=a.getUTCFullYear(),o=r||{},u=o.locale,c=u&&u.options&&u.options.firstWeekContainsDate,s=null==c?1:f(c),d=null==o.firstWeekContainsDate?s:f(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var h=E(l,r),m=new Date(0);m.setUTCFullYear(i,0,d),m.setUTCHours(0,0,0,0);var g=E(m,r);return a.getTime()>=h.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}function N(e,n){t(1,arguments);var r=n||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:f(i),u=null==r.firstWeekContainsDate?o:f(r.firstWeekContainsDate),c=k(e,n),s=new Date(0);s.setUTCFullYear(c,0,u),s.setUTCHours(0,0,0,0);var d=E(s,n);return d}var U=6048e5;function W(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+g(i,2)}function j(t,e){return t%60==0?(t>0?"-":"+")+g(Math.abs(t)/60,2):Y(t,e)}function Y(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+g(Math.floor(a/60),2)+n+g(a%60,2)}const q={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return p(t,e)},Y:function(t,e,n,r){var a=k(t,r),i=a>0?a:1-a;return"YY"===e?g(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):g(i,e.length)},R:function(t,e){return g(O(t),e.length)},u:function(t,e){return g(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return g(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return g(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return w(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return g(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(n,r,a,i){var o=function(n,r){t(1,arguments);var a=e(n),i=E(a,r).getTime()-N(a,r).getTime();return Math.round(i/U)+1}(n,i);return"wo"===r?a.ordinalNumber(o,{unit:"week"}):g(o,r.length)},I:function(n,r,a){var i=function(n){t(1,arguments);var r=e(n),a=P(r).getTime()-S(r).getTime();return Math.round(a/D)+1}(n);return"Io"===r?a.ordinalNumber(i,{unit:"week"}):g(i,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):v(t,e)},D:function(n,r,a){var i=function(n){t(1,arguments);var r=e(n),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var i=r.getTime(),o=a-i;return Math.floor(o/M)+1}(n);return"Do"===r?a.ordinalNumber(i,{unit:"dayOfYear"}):g(i,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return g(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return g(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return g(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):g(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):g(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):C(t,e)},S:function(t,e){return x(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return j(a);case"XXXX":case"XX":return Y(a);case"XXXXX":case"XXX":default:return Y(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return j(a);case"xxxx":case"xx":return Y(a);case"xxxxx":case"xxx":default:return Y(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+W(a,":");case"OOOO":default:return"GMT"+Y(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+W(a,":");case"zzzz":default:return"GMT"+Y(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return g(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return g((r._originalDate||t).getTime(),e.length)}};function L(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function z(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const H={p:z,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return L(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",L(a,e)).replace("{{time}}",z(i,e))}};var A=6e4;function F(t){return t.getTime()%A}function X(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(A+F(e))%A:F(e);return n*A+r}var B=["D","DD"],Q=["YY","YYYY"];function G(t){return-1!==B.indexOf(t)}function R(t){return-1!==Q.indexOf(t)}function _(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,V=/''/g,K=/[a-zA-Z]/;function $(t){return t.match(Z)[1].replace(V,"'")}var tt=n(379),et=n.n(tt),nt=n(890);et()(nt.Z,{insert:"head",singleton:!1}),nt.Z.locals;n(798);var rt=function t(e,n,r,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.title=e,this.description=n,this.dueDate=r,this.priority=a};function at(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var it,ot,ut,ct,st=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getAllTodos",value:function(){return this._allTodos}},{key:"pushNewTodo",value:function(t,e){var n=new rt(e[0],e[1],e[2],e[3]);this._allTodos.push(n)}}],null&&at(e.prototype,null),n&&at(e,n),t}();st._allTodos=[],PubSub.subscribe("NEW_TODO",st.pushNewTodo),ct=document.querySelector("#sub-content"),it={newTodoForm:function(t){if(0===ct.children.length){var e=document.createElement("div");e.className="new-input",e.id="new-todo-container";var n=document.createElement("input");n.type="text",n.className="new-input",n.id="title-input",n.name="title";var r=document.createElement("label");r.for="title",r.className="new-input",r.textContent="Title";var a=document.createElement("input");a.type="text",a.className="new-input",a.id="description-input",a.name="description";var i=document.createElement("label");i.for="description",i.className="new-input",i.textContent="Description";var o=document.createElement("input");o.type="date",o.name="due-date",o.id="new-due-date",o.className="new-input",o.value=t,o.min=t;var u=document.createElement("label");u.for="due-date",u.className="new-input",u.textContent="Due Date";var c=document.createElement("input");c.type="radio",c.className="new-input",c.id="priority1",c.name="priority",c.value="1";var s=document.createElement("label");s.className="new-input",s.for="priority1",s.textContent="Priority 1";var d=document.createElement("input");d.type="radio",d.className="new-input",d.id="priority2",d.name="priority",d.value="2";var l=document.createElement("label");l.className="new-input",l.for="priority2",l.textContent="Priority 2";var f=document.createElement("input");f.type="radio",f.className="new-input",f.id="priority3",f.name="priority",f.value="3";var h=document.createElement("label");h.className="new-input",h.for="priority3",h.textContent="Priority 3";var m=document.createElement("button");m.id="new-submit-button",m.className="new-input",m.textContent="Create";var g=document.createElement("button");g.className="new-input",g.id="cancel-new",g.textContent="Cancel",r.appendChild(n),i.appendChild(a),u.appendChild(o),s.appendChild(c),l.appendChild(d),h.appendChild(f),e.appendChild(r),e.appendChild(i),e.appendChild(u),e.appendChild(s),e.appendChild(l),e.appendChild(h),e.appendChild(m),e.appendChild(g),ct.appendChild(e),m.addEventListener("click",(function(){var t=document.querySelectorAll("input"),e=[];t.forEach((function(t){("text"===t.type||"date"===t.type||"radio"===t.type&&!0===t.checked)&&e.push(t.value)})),PubSub.publish("NEW_TODO",e)})),g.addEventListener("click",(function(){ct.innerHTML=""}))}},allTodosPage:function(t){console.log(t)}},ot=document.querySelector("#new-todo"),ut=document.querySelector("#all-todos"),ot.addEventListener("click",(function(){var n=function(n,a,i){t(2,arguments);var o=String(a),u=i||{},c=u.locale||l,s=c.options&&c.options.firstWeekContainsDate,d=null==s?1:f(s),h=null==u.firstWeekContainsDate?d:f(u.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=c.options&&c.options.weekStartsOn,p=null==g?0:f(g),w=null==u.weekStartsOn?p:f(u.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var v=e(n);if(!r(v))throw new RangeError("Invalid time value");var b=X(v),y=m(v,b),T={firstWeekContainsDate:h,weekStartsOn:w,locale:c,_originalDate:v};return o.match(J).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,c.formatLong,T):t})).join("").match(I).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return $(t);var r=q[e];if(r)return!u.useAdditionalWeekYearTokens&&R(t)&&_(t,a,n),!u.useAdditionalDayOfYearTokens&&G(t)&&_(t,a,n),r(y,t,c.localize,T);if(e.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}(Date.now(),"yyyy-MM-dd");it.newTodoForm(n)})),ut.addEventListener("click",(function(){var t=st.getAllTodos();it.allTodosPage(t)}))})()})();