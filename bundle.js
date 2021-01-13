(()=>{var e={890:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n}\n\nbody {\n\tfont-family: Arial, Helvetica, sans-serif;\n\tline-height: 1;\n}\n\n.nav-bar {\n\tdisplay: flex;\n}\n\n.nav-bar:hover {\n\tcursor: pointer;\n}\n\n#new-todo {\n\tmargin-right: 5px;\n}\n\n#new-project {\n\tmargin-right: 5px;\n}\n\n#new-todo-container {\n\tdisplay: grid;\n}\n\n.new-project-form {\n\tdisplay: grid;\n}\n\nh3 {\n\tmargin-top: 5px;\n}\n\np {\n\tmargin-top: 5px;\n}\n\ninput {\n\tborder: 1px solid black;\n\tmargin-left: 5px;\n}\n\nul {\n\tborder: 1px solid black;\n\tmargin-top: 5px;\n}\n",""]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},798:function(e,t,n){e=n.nmd(e),function(n,r){"use strict";var a={};n.PubSub=a,function(e){var t={},n=-1;function r(e,t,n){try{e(t,n)}catch(e){setTimeout(function(e){return function(){throw e}}(e),0)}}function a(e,t,n){e(t,n)}function o(e,n,o,i){var u,c=t[n],s=i?a:r;if(Object.prototype.hasOwnProperty.call(t,n))for(u in c)Object.prototype.hasOwnProperty.call(c,u)&&s(c[u],e,o)}function i(e){var n=String(e);return Boolean(Object.prototype.hasOwnProperty.call(t,n)&&function(e){var t;for(t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!0;return!1}(t[n]))}function u(e,t,n,r){var a=function(e,t,n){return function(){var r=String(e),a=r.lastIndexOf(".");for(o(e,e,t,n);-1!==a;)a=(r=r.substr(0,a)).lastIndexOf("."),o(e,r,t,n);o(e,"*",t,n)}}(e="symbol"==typeof e?e.toString():e,t,r);return!!function(e){for(var t=String(e),n=i(t)||i("*"),r=t.lastIndexOf(".");!n&&-1!==r;)r=(t=t.substr(0,r)).lastIndexOf("."),n=i(t);return n}(e)&&(!0===n?a():setTimeout(a,0),!0)}e.publish=function(t,n){return u(t,n,!1,e.immediateExceptions)},e.publishSync=function(t,n){return u(t,n,!0,e.immediateExceptions)},e.subscribe=function(e,r){if("function"!=typeof r)return!1;e="symbol"==typeof e?e.toString():e,Object.prototype.hasOwnProperty.call(t,e)||(t[e]={});var a="uid_"+String(++n);return t[e][a]=r,a},e.subscribeAll=function(t){return e.subscribe("*",t)},e.subscribeOnce=function(t,n){var r=e.subscribe(t,(function(){e.unsubscribe(r),n.apply(this,arguments)}));return e},e.clearAllSubscriptions=function(){t={}},e.clearSubscriptions=function(e){var n;for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&0===n.indexOf(e)&&delete t[n]},e.countSubscriptions=function(e){var n,r=0;for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&0===n.indexOf(e)&&r++;return r},e.getSubscriptions=function(e){var n,r=[];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&0===n.indexOf(e)&&r.push(n);return r},e.unsubscribe=function(n){var r,a,o,i="string"==typeof n&&(Object.prototype.hasOwnProperty.call(t,n)||function(e){var n;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&0===n.indexOf(e))return!0;return!1}(n)),u=!i&&"string"==typeof n,c="function"==typeof n,s=!1;if(!i){for(r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(a=t[r],u&&a[n]){delete a[n],s=n;break}if(c)for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&a[o]===n&&(delete a[o],s=!0)}return s}e.clearSubscriptions(n)}}(a),void 0!==e&&e.exports&&(t=e.exports=a),t.PubSub=a,e.exports=t=a}("object"==typeof window&&window||this)},379:(e,t,n)=>{"use strict";var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],a=0;a<e.length;a++){var u=e[a],c=t.base?u[0]+t.base:u[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var d=i(l),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:l,updater:p(f,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function p(e,t){var n,r,a;if(t.singleton){var o=m++;n=h||(h=c(t)),r=d.bind(null,n,o,!1),a=d.bind(null,n,o,!0)}else n=c(t),r=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=i(n[r]);o[a].references--}for(var c=u(e,t),s=0;s<n.length;s++){var l=i(n[s]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(n){e(1,arguments);var r=t(n);return!isNaN(r)}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var i,u={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,c=a.width?String(a.width):e.defaultWidth;r=e.values[c]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function l(e){return function(t,n){var r=String(t),a=n||{},o=a.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=r.match(i);if(!u)return null;var c,s=u[0],l=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(s))return n}(l):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(s))return n}(l),c=e.valueCallback?e.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(s.length)}}}const d={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(e,t,n,r){return c[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(i.matchPattern);if(!a)return null;var o=a[0],u=n.match(i.parsePattern);if(!u)return null;var c=i.valueCallback?i.valueCallback(u[0]):u[0];return{value:c=r.valueCallback?r.valueCallback(c):c,rest:n.slice(o.length)}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function h(n,r){e(2,arguments);var a=t(n).getTime(),o=f(r);return new Date(a+o)}function m(t,n){e(2,arguments);var r=f(n);return h(t,-r)}function p(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const v=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return p("yy"===t?r%100:r,t.length)},g=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):p(n+1,2)},w=function(e,t){return p(e.getUTCDate(),t.length)},b=function(e,t){return p(e.getUTCHours()%12||12,t.length)},y=function(e,t){return p(e.getUTCHours(),t.length)},C=function(e,t){return p(e.getUTCMinutes(),t.length)},T=function(e,t){return p(e.getUTCSeconds(),t.length)},x=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return p(Math.floor(r*Math.pow(10,n-3)),t.length)};var P=864e5;function E(n){e(1,arguments);var r=1,a=t(n),o=a.getUTCDay(),i=(o<r?7:0)+o-r;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function M(n){e(1,arguments);var r=t(n),a=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=E(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var c=E(u);return r.getTime()>=i.getTime()?a+1:r.getTime()>=c.getTime()?a:a-1}function j(t){e(1,arguments);var n=M(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=E(r);return a}var O=6048e5;function S(n,r){e(1,arguments);var a=r||{},o=a.locale,i=o&&o.options&&o.options.weekStartsOn,u=null==i?0:f(i),c=null==a.weekStartsOn?u:f(a.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=t(n),l=s.getUTCDay(),d=(l<c?7:0)+l-c;return s.setUTCDate(s.getUTCDate()-d),s.setUTCHours(0,0,0,0),s}function k(n,r){e(1,arguments);var a=t(n,r),o=a.getUTCFullYear(),i=r||{},u=i.locale,c=u&&u.options&&u.options.firstWeekContainsDate,s=null==c?1:f(c),l=null==i.firstWeekContainsDate?s:f(i.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(o+1,0,l),d.setUTCHours(0,0,0,0);var h=S(d,r),m=new Date(0);m.setUTCFullYear(o,0,l),m.setUTCHours(0,0,0,0);var p=S(m,r);return a.getTime()>=h.getTime()?o+1:a.getTime()>=p.getTime()?o:o-1}function N(t,n){e(1,arguments);var r=n||{},a=r.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:f(o),u=null==r.firstWeekContainsDate?i:f(r.firstWeekContainsDate),c=k(t,n),s=new Date(0);s.setUTCFullYear(c,0,u),s.setUTCHours(0,0,0,0);var l=S(s,n);return l}var D=6048e5;function U(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+p(o,2)}function W(e,t){return e%60==0?(e>0?"-":"+")+p(Math.abs(e)/60,2):q(e,t)}function q(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+p(Math.floor(a/60),2)+n+p(a%60,2)}const Y={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return v(e,t)},Y:function(e,t,n,r){var a=k(e,r),o=a>0?a:1-a;return"YY"===t?p(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):p(o,t.length)},R:function(e,t){return p(M(e),t.length)},u:function(e,t){return p(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return p(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return p(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return g(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return p(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(n,r,a,o){var i=function(n,r){e(1,arguments);var a=t(n),o=S(a,r).getTime()-N(a,r).getTime();return Math.round(o/D)+1}(n,o);return"wo"===r?a.ordinalNumber(i,{unit:"week"}):p(i,r.length)},I:function(n,r,a){var o=function(n){e(1,arguments);var r=t(n),a=E(r).getTime()-j(r).getTime();return Math.round(a/O)+1}(n);return"Io"===r?a.ordinalNumber(o,{unit:"week"}):p(o,r.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):w(e,t)},D:function(n,r,a){var o=function(n){e(1,arguments);var r=t(n),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=r.getTime(),i=a-o;return Math.floor(i/P)+1}(n);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):p(o,r.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return p(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return p(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return p(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):y(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):p(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):p(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):C(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):T(e,t)},S:function(e,t){return x(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return W(a);case"XXXX":case"XX":return q(a);case"XXXXX":case"XXX":default:return q(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return W(a);case"xxxx":case"xx":return q(a);case"xxxxx":case"xxx":default:return q(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+U(a,":");case"OOOO":default:return"GMT"+q(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+U(a,":");case"zzzz":default:return"GMT"+q(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return p(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return p((r._originalDate||e).getTime(),t.length)}};function L(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function F(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const A={p:F,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return L(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",L(a,t)).replace("{{time}}",F(o,t))}};var H=6e4;function z(e){return e.getTime()%H}function R(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var r=n>0?(H+z(t))%H:z(t);return n*H+r}var X=["D","DD"],B=["YY","YYYY"];function Q(e){return-1!==X.indexOf(e)}function G(e){return-1!==B.indexOf(e)}function _(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,V=/^'([^]*?)'?$/,Z=/''/g,K=/[a-zA-Z]/;function $(e){return e.match(V)[1].replace(Z,"'")}var ee=n(798),te=n.n(ee),ne=n(379),re=n.n(ne),ae=n(890);re()(ae.Z,{insert:"head",singleton:!1}),ae.Z.locals;function oe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ue=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];oe(this,e),this.title=t,this.todos=n}var t,n;return t=e,(n=[{key:"getTodos",value:function(){return this.todos}},{key:"addTodo",value:function(e){return this.todos.push(e)}},{key:"removeTodo",value:function(e){return this.todos.splice(e,1)}}])&&ie(t.prototype,n),e}(),ce=function e(t,n,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.description=n,this.dueDate=r,this.priority=a};function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var le=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.allProjects=[new ue("My First Project",[new ce("test","test","11-11-1111","1"),new ce("test2","test2","22-22-2222","2")])]}var t,n;return t=e,(n=[{key:"getAllProjects",value:function(){return this.allProjects}},{key:"addNewProject",value:function(e){var t=new ue(e[0],e[1]);return this.allProjects.push(t)}},{key:"removeProject",value:function(e){return this.allProjects.splice(e,1)}},{key:"removeTodoFromProject",value:function(e,t){for(var n=this.allProjects,r=0;r<n.length;r++)for(var a=0;a<n[r].todos.length;a++){var o=n[r].todos[a];n[r].title===t&&o.title===e.title&&n[r].removeTodo(a)}}},{key:"pushNewTodo",value:function(e){for(var t=0;t<this.allProjects.length;t++)this.allProjects[t].title===e[e.length-1]&&this.allProjects[t].todos.push(new ce(e[0],e[1],e[2],e[3]))}}])&&se(t.prototype,n),e}();function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var fe=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"htmlConvertTodo",value:function(e){var t=e.querySelectorAll("li"),n=[];return t.forEach((function(e){n.push(e.textContent)})),new ce(n[0],n[1],n[2],n[3])}}],null&&de(t.prototype,null),n&&de(t,n),e}();!function(){var n=function(n,a,o){e(2,arguments);var i=String(a),u=o||{},c=u.locale||d,s=c.options&&c.options.firstWeekContainsDate,l=null==s?1:f(s),h=null==u.firstWeekContainsDate?l:f(u.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=c.options&&c.options.weekStartsOn,v=null==p?0:f(p),g=null==u.weekStartsOn?v:f(u.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var w=t(n);if(!r(w))throw new RangeError("Invalid time value");var b=R(w),y=m(w,b),C={firstWeekContainsDate:h,weekStartsOn:g,locale:c,_originalDate:w};return i.match(J).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,A[t])(e,c.formatLong,C):e})).join("").match(I).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return $(e);var r=Y[t];if(r)return!u.useAdditionalWeekYearTokens&&G(e)&&_(e,a,n),!u.useAdditionalDayOfYearTokens&&Q(e)&&_(e,a,n),r(y,e,c.localize,C);if(t.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("")}(Date.now(),"yyyy-MM-dd"),a=function(e){var t=document.querySelector("#sub-content");function n(){t.innerHTML=""}function r(){document.querySelectorAll("input").forEach((function(t){"text"===t.type?t.value="":"radio"===t.type?t.checked=!1:"date"===t.type&&(t.value=e)}))}function a(){var e=document.querySelectorAll("input"),t=document.querySelector("select");if(function(e){for(var t=0,n=0;n<e.length;n++){if("text"===e[n].type&&""===e[n].value)return!0;if("radio"===e[n].type&&!1===e[n].checked&&t++,3===t)return!0}return!1}(e))alert("Please complete all elements of the form!");else{if(!t||""!==t.value){var n=[];return e.forEach((function(e){("text"===e.type||"date"===e.type||"radio"===e.type&&!0===e.checked)&&n.push(e.value)})),t&&n.push(t.value),"new-todo-button"===this.id?PubSub.publish("NEW_TODO",n):PubSub.publish("NEW_PROJECT",n)}alert("Please choose a project!")}}function o(){var e=this.parentElement.parentElement.querySelector("h3");PubSub.publish("REMOVE_TODO",[this.parentElement,e.textContent])}function i(){PubSub.publish("REFRESH_DISPLAY","blank")}return{newTodoForm:function(o){n();var i=document.createElement("div");i.className="new-input",i.id="new-todo-container";var u=document.createElement("input");u.type="text",u.className="new-input",u.id="title-input",u.name="title";var c=document.createElement("label");c.for="title",c.className="new-input",c.textContent="Title";var s=document.createElement("input");s.type="text",s.className="new-input",s.id="description-input",s.name="description";var l=document.createElement("label");l.for="description",l.className="new-input",l.textContent="Description";var d=document.createElement("input");d.type="date",d.name="due-date",d.id="new-due-date",d.className="new-input",d.value=e,d.min=e;var f=document.createElement("label");f.for="due-date",f.className="new-input",f.textContent="Due Date";var h=document.createElement("input");h.type="radio",h.className="new-input",h.id="priority1",h.name="priority",h.value="1";var m=document.createElement("label");m.className="new-input",m.for="priority1",m.textContent="Priority 1";var p=document.createElement("input");p.type="radio",p.className="new-input",p.id="priority2",p.name="priority",p.value="2";var v=document.createElement("label");v.className="new-input",v.for="priority2",v.textContent="Priority 2";var g=document.createElement("input");g.type="radio",g.className="new-input",g.id="priority3",g.name="priority",g.value="3";var w=document.createElement("label");w.className="new-input",w.for="priority3",w.textContent="Priority 3";var b=document.createElement("select");b.name="projects",b.id="project-select";var y=document.createElement("label");y.className="new-input",y.id="select-project-label",y.for="project-select",y.textContent="Add this to:";var C=document.createElement("option");C.value="",C.textContent="-- Choose Project --",b.appendChild(C),o.forEach((function(e){var t=document.createElement("option");t.value=e.title,t.textContent=e.title,b.appendChild(t)})),y.appendChild(b);var T=document.createElement("button");T.id="new-todo-button",T.className="new-input",T.textContent="Create";var x=document.createElement("button");x.className="new-input",x.id="cancel-new",x.textContent="Cancel",c.appendChild(u),l.appendChild(s),f.appendChild(d),m.appendChild(h),v.appendChild(p),w.appendChild(g),i.appendChild(c),i.appendChild(l),i.appendChild(f),i.appendChild(m),i.appendChild(v),i.appendChild(w),i.appendChild(y),i.appendChild(T),i.appendChild(x),t.appendChild(i),T.addEventListener("click",a),T.addEventListener("click",r),x.addEventListener("click",n)},newProjectForm:function(){n();var e=document.createElement("div");e.className="new-project-form",e.div="new-project-div";var o=document.createElement("input");o.type="text",o.className="new-project-div",o.id="project-title",o.name="project-title";var i=document.createElement("label");i.for="project-title",i.className="new-project-div",i.textContent="Project Title";var u=document.createElement("button");u.id="project-create-button",u.className="new-project-div",u.textContent="Create";var c=document.createElement("button");c.className="new-project-div",c.id="cancel-project",c.textContent="Cancel",u.addEventListener("click",a),u.addEventListener("click",r),c.addEventListener("click",n),i.appendChild(o),e.appendChild(i),e.appendChild(u),e.appendChild(c),t.appendChild(e)},projectsPage:function(e){n();var r,a=document.createElement("div");if(a.className="all-projects",a.id="all-projects-container",e.length>0)for(var u=function(t){var n=document.createElement("div");n.className="all-projects",n.id="project".concat(t);var r=document.createElement("h3");r.className="all-projects",r.id="project-title".concat(t),r.textContent=e[t].title,n.appendChild(r),e[t].todos.forEach((function(e){!function(e,t,n){var r=document.createElement("ul");r.className="todo-item",r.id=parseInt(n);var a=document.createElement("li");a.className="todo-item";var u=document.createElement("li");u.className="todo-item";var c=document.createElement("li");c.className="todo-item";var s=document.createElement("li");s.className="todo-item";var l=document.createElement("button");l.className="todo-item",l.textContent="Complete",l.addEventListener("click",o),l.addEventListener("click",i),a.textContent=t.title,u.textContent=t.description,c.textContent=t.dueDate,s.textContent=t.priority,r.appendChild(a),r.appendChild(u),r.appendChild(c),r.appendChild(s),r.appendChild(l),e.appendChild(r)}(n,e,t)})),a.appendChild(n)},c=0;c<e.length;c++)u(c);else(r=document.createElement("p")).id="div-empty",r.textContent="No ".concat("projects"," here!"),t.appendChild(r);t.appendChild(a)}}}(n),o=new le,i=document.querySelector("#new-todo"),u=document.querySelector("#new-project"),c=document.querySelector("#projects");function s(){var e=o.getAllProjects();a.projectsPage(e)}i.addEventListener("click",(function(){a.newTodoForm(o.getAllProjects())})),c.addEventListener("click",s),u.addEventListener("click",(function(){a.newProjectForm(n)})),te().subscribe("NEW_TODO",(function(e,t){o.pushNewTodo(t),alert("New Todo added!")})),te().subscribe("NEW_PROJECT",(function(e,t){o.addNewProject(t),alert("New Project added!")})),te().subscribe("REMOVE_TODO",(function(e,t){var n=fe.htmlConvertTodo(t[0]);o.removeTodoFromProject(n,t[1])})),te().subscribe("REFRESH_DISPLAY",s)}()})()})();