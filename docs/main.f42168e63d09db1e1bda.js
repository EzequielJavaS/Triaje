(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=5)})([function(){},function(a,b,c){var d=c(2),e=c(3);e=e.__esModule?e.default:e,'string'==typeof e&&(e=[[a.i,e,'']]);d(e,{insert:'head',singleton:!1});a.exports=e.locals||{}},function(a,b,c){'use strict';function d(a){for(var b=-1,c=0;c<m.length;c++)if(m[c].identifier===a){b=c;break}return b}function e(a,b){for(var c={},e=[],f=0;f<a.length;f++){var g=a[f],h=b.base?g[0]+b.base:g[0],i=c[h]||0,k=''.concat(h,' ').concat(i);c[h]=i+1;var l=d(k),n={css:g[1],media:g[2],sourceMap:g[3]};-1===l?m.push({identifier:k,updater:j(n,b),references:1}):(m[l].references++,m[l].updater(n)),e.push(k)}return e}function f(a){var b=document.createElement('style'),d=a.attributes||{};if('undefined'==typeof d.nonce){var e=c.nc;e&&(d.nonce=e)}if(Object.keys(d).forEach(function(a){b.setAttribute(a,d[a])}),'function'==typeof a.insert)a.insert(b);else{var f=l(a.insert||'head');if(!f)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.');f.appendChild(b)}return b}function g(a){return null!==a.parentNode&&void a.parentNode.removeChild(a)}function h(a,b,c,d){var e=c?'':d.media?'@media '.concat(d.media,' {').concat(d.css,'}'):d.css;if(a.styleSheet)a.styleSheet.cssText=n(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function i(a,b,c){var d=c.css,e=c.media,f=c.sourceMap;if(e?a.setAttribute('media',e):a.removeAttribute('media'),f&&btoa&&(d+='\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(f)))),' */')),a.styleSheet)a.styleSheet.cssText=d;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(d))}}function j(a,b){var c,d,e;if(b.singleton){var j=p++;c=o||(o=f(b)),d=h.bind(null,c,j,!1),e=h.bind(null,c,j,!0)}else c=f(b),d=i.bind(null,c,b),e=function(){g(c)};return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}var k=function(){var a;return function(){return'undefined'==typeof a&&(a=!!(window&&document&&document.all&&!window.atob)),a}}(),l=function(){var a={};return function(b){if('undefined'==typeof a[b]){var c=document.querySelector(b);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(a){c=null}a[b]=c}return a[b]}}(),m=[],n=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}(),o=null,p=0;a.exports=function(a,b){b=b||{},b.singleton||'boolean'==typeof b.singleton||(b.singleton=k()),a=a||[];var c=e(a,b);return function(a){if(a=a||[],'[object Array]'===Object.prototype.toString.call(a)){for(var f=0;f<c.length;f++){var g=c[f],h=d(g);m[h].references--}for(var i=e(a,b),j=0;j<c.length;j++){var k=c[j],l=d(k);0===m[l].references&&(m[l].updater(),m.splice(l,1))}c=i}}}},function(a,b,c){var d=c(4);b=d(!1),b.push([a.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }\n\n','']),a.exports=b},function(a){'use strict';function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='.concat(e.sourceRoot||'').concat(a,' */')});return[d].concat(g).concat([f]).join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c='sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(b);return'/*# '.concat(c,' */')}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '.concat(c[2],' {').concat(d,'}'):d}).join('')},c.i=function(a,b,d){'string'==typeof a&&(a=[[null,a,'']]);var e={};if(d)for(var f,g=0;g<this.length;g++)f=this[g][0],null!=f&&(e[f]=!0);for(var h,i=0;i<a.length;i++)(h=[].concat(a[i]),!(d&&e[h[0]]))&&(b&&(h[2]?h[2]=''.concat(b,' and ').concat(h[2]):h[2]=b),c.push(h))},c}},function(a,b,c){'use strict';function d(){T=setInterval(function(){let a=`00:${('0'+V).slice(-2)}`;if(t.innerHTML=a,V--,-1==V){for(let a of z)a.disabled=!0;clearInterval(T),o(m),ea()}},1e3)}function e(a){J.style.display='none',K.style.display='none',O.style.display='none',P.style.display='none',Q.style.display='none',H.style.display='none',I.style.display='none',L.style.display='none',M.style.display='none',S.style.display='block';for(let b of z)b.disabled=a}function f(){clearInterval(T),v.src='./assets/imgFinal.png',A.innerHTML=0,e(!0)}function g(){Y--,A.innerHTML=Y,clearInterval(T),V=U,d(),$=r(s[X]),Z=$.slice(-1),v.src=`./assets/img/${$}.jpg`,$=s[X],X++,e(!1)}function h(){clearInterval(T),d();for(let a of N)0!=a.currentTime&&a.play()}var i=Math.round;c.r(b),c.d(b,'ejecutaError',function(){return fa}),c.d(b,'continuarPausa',function(){return h});var j=c(0),k=c(1);const l=(a,b,c)=>{switch(a){case 1:if('v'==c[0]&&'btnVerde'==b)return'CORRECTO';if('v'==c[0]&&'btnVerde'!=b)return'ERROR_VERDE';if('n'==c[1]&&'btnRespira'==b)return'NO RESPIRA';if('s'==c[1]&&'btnRespira'==b)return'RESPIRA NORMAL';if('r'==c[1]&&'btnRespira'==b)return'RESPIRA<br>MUY R\xC1PIDO';if('e'==c[1]&&'btnRespira'==b)return'RESPIRA<br>MUY R\xC1PIDO';if('i'==c[1]&&'btnRespira'==b)return'RESPIRA<br>MUY R\xC1PIDO';if(('n'==c[1]||'s'==c[1]||'r'==c[1]||'r'==c[1]||'e'==c[1]||'i'==c[1])&&'btnRespira'!=b)return'ERROR_RESPIRA';break;case 2:if('n'==c[2]&&'btnAbro'==b)return'SIGUE SIN<br>RESPIRAR';if('n'==c[2]&&'btnAbro'!=b)return'ERROR_ABRIR_VIA';if('s'==c[2]&&'btnAbro'==b)return'e'==c[3]?'AHORA S\xCD RESPIRO':'i'==c[3]?'AHORA S\xCD RESPIRO':'AHORA S\xCD RESPIRO';if('s'==c[2]&&'btnAbro'!=b)return'ERROR_ABRIR_VIA';if('p'==c[2]&&'btnPulso'==b)return'NO TIENE PULSO';if('u'==c[2]&&'btnPulso'==b)return'S\xCD TIENE PULSO';if(('p'==c[2]||'u'==c[2])&&'btnPulso'!=b)return'ERROR_PULSO';if('i'==c[2]&&'compresion'==b)return'BUENA COMPRESI\xD3N';if('i'==c[2]&&'compresion'!=b)return'ERROR_COMPRESION';if('e'==c[2]&&'torniquete'==b)return'BUEN TORNIQUETE';if('e'==c[2]&&'torniquete'!=b)return'ERROR_TORNIQUETE';if('r'==c[2]&&'btnRojo'==b)return'CORRECTO';if('r'==c[2]&&'btnRojo'!=b)return'ERROR_ROJO_1';break;case 3:if('n'==c[3]&&'btnNegro'==b)return'CORRECTO';if('n'==c[3]&&'n'==c[2]&&'btnNegro'!=b)return'ERROR_NEGRO';if('e'==c[3]&&'torniquete'==b)return'BUEN TORNIQUETE';if('e'==c[3]&&'s'==c[2]&&'torniquete'!=b)return'ERROR_TORNIQUETE_2';if('e'==c[3]&&'p'==c[2]&&'torniquete'!=b)return'ERROR_TORNIQUETE_3';if('i'==c[3]&&'compresion'==b)return'BUENA COMPRESI\xD3N';if('i'==c[3]&&'p'==c[2]&&'compresion'!=b)return'ERROR_COMPRESION_2';if('i'==c[3]&&'s'==c[2]&&'compresion'!=b)return'ERROR_COMPRESION_3';if('l'==c[3]&&'btnPosLate'==b)return'BUENA<br>POSICI\xD3N LATERAL';if('l'==c[3]&&'btnPosLate'!=b)return'ERROR_POSICION';if('s'==c[3]&&'btnOrdenes'==b)return'S\xCD OBEDECE \xD3RDENES';if('n'==c[3]&&'btnOrdenes'==b)return'NO OBEDECE \xD3RDENES';if(('s'==c[3]||'n'==c[3])&&'btnOrdenes'!=b)return'ERROR_ORDENES';if('r'==c[3]&&'btnRojo'==b)return'CORRECTO';if('r'==c[3]&&'e'==c[2]&&'btnRojo'!=b)return'ERROR_ROJO_1';if('r'==c[3]&&'p'==c[2]&&'btnRojo'!=b)return'ERROR_ROJO_2';if('r'==c[3]&&'i'==c[2]&&'btnRojo'!=b)return'ERROR_ROJO_1';break;case 4:if('l'==c[4]&&'btnPosLate'==b)return'BUENA<br>POSICI\xD3N LATERAL';if('l'==c[4]&&'btnPosLate'!=b)return'ERROR_POSICION';if('r'==c[4]&&'btnRojo'==b)return'CORRECTO';if('r'==c[4]&&'l'==c[3]&&'btnRojo'!=b)return'ERROR_ROJO_3';if('r'==c[4]&&'e'==c[3]&&'btnRojo'!=b)return'ERROR_ROJO_5';if('r'==c[4]&&'n'==c[3]&&'btnRojo'!=b)return'ERROR_ROJO_4';if('r'==c[4]&&'i'==c[3]&&'btnRojo'!=b)return'ERROR_ROJO_5';if('a'==c[4]&&'btnAmarillo'==b)return'CORRECTO';if('a'==c[4]&&'btnAmarillo'!=b)return'ERROR_AMARILLO';break;case 5:if('r'==c[5]&&'btnRojo'==b)return'CORRECTO';return'r'==c[5]&&'btnRojo'!=b?'ERROR_ROJO_3':'ERROR';}},m='<p class= "grande"> SE AGOT\xD3 EL TIEMPO</p>',n=(a)=>Swal.fire({icon:'error',background:'#D6D9C8',html:a,confirmButtonText:'Continuar',allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,backdrop:!0,width:'50%',customClass:{closeButton:'.btn'},willClose:fa}).then(function(){}),o=(a)=>Swal.fire({icon:'error',background:'#D6D9C8',html:a,allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,backdrop:!0,width:'50%',timer:2e3,showConfirmButton:!1,willClose:fa}).then(function(){}),p=(a)=>Swal.fire({background:'#D6D9C8',html:a,confirmButtonText:'Continuar',allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,backdrop:!0,width:'50%',willClose:h}).then(function(){});let q=()=>{function a(a,c){d=d.sort(function(){return Math.random()-.5});let e=0;for(let f=0;f<a;f++)b.push(c+d[e]),e++,e==d.length&&(e=0);return b}let b=[],c=['rnslrz','reerzz','riirzz','rnselr','rnsilr','rrrzzz','rsperz','rspirz','rsprzz','rsunrz'],d=[1,2,3,4,5,6,7,8,9];const e=30,f=c.length;let g=3,h=5,i=3,j=20,k=g+h+i+j;if(k!=e){j-=k-e}b=a(g,'vzzzzz'),b=a(h,'asusaz'),b=a(i,'nnnnzz'),d=d.sort(function(){return Math.random()-.5});let l=0,m=0;for(let a=0;a<j;a++)b.push(c[l]+d[m]),l++,m++,l==f&&(l=0),m==d.length&&(m=0);return b=function(a){for(var b,c,d=a.length;0!==d;)c=Math.floor(Math.random()*d),d-=1,b=a[d],a[d]=a[c],a[c]=b;return a}(b),b},r=(a)=>{switch(a.slice(0,-1)){case'asusaz':case'rnslrz':case'rrrzzz':case'rsprzz':case'rsunrz':a='tumbado'+a[6];break;case'nnnnzz':a=0==a[6]%2?'torniquete'+a[6]:'compresion'+a[6];break;case'vzzzzz':a='caminando'+a[6];break;case'reerzz':a=1==a[6]?'torniquete2':'torniquete'+a[6];break;case'rnselr':a=1==a[6]?'torniquete3':'torniquete'+a[6];break;case'rsperz':a=1==a[6]?'torniquete4':'torniquete'+a[6];break;case'riirzz':case'rnsilr':case'rspirz':a='compresion'+a[6];}return a},s=[];const t=document.getElementById('cont'),u=document.querySelector('#botonera'),v=document.querySelector('#imgVictima'),w=document.querySelector('.iniciar'),x=document.querySelector('.salir'),y=document.querySelector('.pausar'),z=document.querySelectorAll('.fl2'),A=document.querySelector('#restantes'),B=document.querySelector('#correcto'),C=document.querySelector('#errorHTML'),D=document.querySelectorAll('.btn'),E=document.querySelector('#correctoAud'),F=document.querySelector('#errorAud'),G=document.querySelector('#clickAud'),H=document.querySelector('#respiraVid'),I=document.querySelector('#respiraRapVid'),J=document.querySelector('#pulsoVid'),K=document.querySelector('#noPulso'),L=document.querySelector('#ordenVid'),M=document.querySelector('#noOrdenVid'),N=document.querySelectorAll('video'),O=document.querySelector('#noRespira'),P=document.querySelector('.torni'),Q=document.querySelector('.presi'),R=document.querySelector('#check'),S=document.querySelector('.logoTexto');K.style.display='none';let T;const U=30;let V=U;t.innerHTML='00:00';let W,X,Y,Z,$,_=0,aa=0,ba=0,ca=0;x.addEventListener('click',()=>{location.reload(!0)}),y.addEventListener('click',()=>{clearInterval(T);for(let a of N)a.pause();p('<p class= "grande"> Triaje Pausado</p>')}),w.addEventListener('click',()=>{s=q(),console.log(s),0,W=1,clearInterval(T),V=U,X=0,Y=s.length,A.innerHTML=Y,B.innerHTML='0 = 0 %',C.innerHTML='0 = 0 %',_=0,ba=0,R.style.display='none',y.disabled=!1,e(!1),$=r(s[X]),Z=$.slice(-1),v.src=`./assets/img/${$}.jpg`,$=s[X],X++,d()}),u.addEventListener('click',(a)=>{if(a.target.classList.contains('btn')){for(let a of D)a.blur();for(let a of N)a.pause(),a.currentTime=0;let b=l(W,a.target.id,$);'ERROR'===b?(n(void 0),ea()):'ERROR_RESPIRA'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert">Si la v\xEDctima <u>no</u> camina, la primera valoraci\xF3n es saber si respira.</p> <br><p class="textAlertCenterBold">\xBFRespira?</p>'),ea()):'ERROR_VERDE'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert">En el triaje START, si la v\xEDctma camina se tr\xEDa directamente como verde.</p> <br><p class="textAlertCenterBold">VERDE</p>'),ea()):'ERROR_ABRIR_VIA'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlertCenter" >Si la v\xEDctima no respira, debe de abrir la v\xEDa a\xE9rea.</p> <br><p class="textAlertCenterBold">Abro V\xEDa Aerea</p>'),ea()):'ERROR_PULSO'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >La v\xEDctima tiene una respiraci\xF3n normal. Debe valorar el pulso radial o el relleno capilar.</p> <br><p class="textAlertCenterBold"> \xBFPulso Radial / Relleno Capilar &lt 2?" </p>'),ea()):'ERROR_TORNIQUETE'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >La v\xEDctima presenta taquipnea y una hemorragia activa en extremidad. Debe colocar un torniquete.</p> <br><p class="textAlertCenterBold"> Torniquete </p>'),ea()):'ERROR_COMPRESION'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >La v\xEDctima presenta taquipnea y una hemorragia activa en zona de uni\xF3n. Debe realizar compresi\xF3n en la zona.</p> <br><p class="textAlertCenterBold"> Compresi\xF3n Directa </p>'),ea()):'ERROR_ROJO_1'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >Una FR superior a 30, por si sola, es indicativa de triaje rojo. No es necesario hacer m\xE1s valoraciones. Se aplicar\xE1n las medidas salvadoras oportunas solo si fuese necesario y se tria como rojo.</p> <br><p class="textAlertCenterBold"> ROJO </p>'),ea()):'ERROR_ROJO_2'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >La v\xEDctima no presente pulso radial o el relleno capilar es superior a 2 segundos. No muestra sangrado activo. No es necesario seguir evaluando. Se debe triar como rojo</p> <br><p class="textAlertCenterBold"> ROJO </p>'),ea()):'ERROR_ROJO_3'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >Ha abierto la v\xEDa a\xE9rea de la v\xEDctima. Se debe triar como rojo</p> <br><p class="textAlertCenterBold"> ROJO </p>'),ea()):'ERROR_ROJO_4'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >La v\xEDctima no obedece \xF3rdenes. Se debe triar como rojo</p> <br><p class="textAlertCenterBold"> ROJO </p>'),ea()):'ERROR_ROJO_5'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >La v\xEDctima no presente pulso radial o el relleno capilar es superior a 2 segundos. Se debe triar como rojo</p> <br><p class="textAlertCenterBold"> ROJO </p>'),ea()):'ERROR_NEGRO'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >Si la v\xEDctima no respira despu\xE9s de haber abierto la v\xEDa a\xE9rea, debe triarse como negro.</p> <br><p class="textAlertCenterBold"> NEGRO </p>'),ea()):'ERROR_TORNIQUETE_2'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >Si ha abierto v\xEDa a\xE9rea y existe una hemorragia activa en extremidad, debe aplicar un torniquete.</p> <br><p class="textAlertCenterBold"> Torniquete </p>'),ea()):'ERROR_TORNIQUETE_3'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >La v\xEDctima no presente pulso radial o el relleno capilar es superior a 2 segundos. No es necesario seguir evaluando. Existe una hemorragia activa en extremidad, debe aplicar un torniquete.</p> <br><p class="textAlertCenterBold"> Torniquete </p>'),ea()):'ERROR_COMPRESION_2'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >Despu\xE9s de revisar respiraci\xF3n y pulso, si existe una hemorragia activa en zona de uni\xF3n, debe realizar compresi\xF3n en la zona.</p> <br><p class="textAlertCenterBold"> Compresi\xF3n Directa </p>'),ea()):'ERROR_COMPRESION_3'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" > Si ha abierto v\xEDa a\xE9rea y existe una hemorragia activa en zona de uni\xF3n, debe realizar compresi\xF3n en la zona.</p> <br><p class="textAlertCenterBold"> Compresi\xF3n Directa</p>'),ea()):'ERROR_POSICION'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >Si ha abierto la v\xEDa a\xE9rea de la v\xEDctima para que pueda respirar, debe dejarla en posici\xF3n lateral de seguridad.</p> <br><p class="textAlertCenterBold"> Posici\xF3n Lateral de Seguridad</p>'),ea()):'ERROR_ORDENES'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" > Si la v\xEDctima presenta pulso o relleno capilar normal, debe valorar si responde a \xF3rdenes sencillas.</p> <br><p class="textAlertCenterBold"> Obedece \xD3rdenes</p>'),ea()):'ERROR_AMARILLO'===b?(n('<p class= "grande">Esto es un error</p><br><p class="textAlert" >Si la v\xEDctima responde a \xF3rdenes debe ser triada como amarillo</p> <br><p class="textAlertCenterBold"> AMARILLO </p>'),ea()):'CORRECTO'===b?(E.play(),da(),clearInterval(T),e(!0)):'NO TIENE PULSO'===b?(G.play(),H.style.display='none',J.style.display='none',K.style.display='block'):'NO RESPIRA'===b?(G.play(),S.style.display='none',O.innerHTML='\xA1\xA1NO RESPIRA!!',H.style.display='block',O.style.display='block'):'SIGUE SIN<br>RESPIRAR'===b?(G.play(),S.style.display='none',O.innerHTML='\xA1\xA1SIGUE SIN RESPIRAR!!'):'BUENA<br>POSICI\xD3N LATERAL'===b?(G.play(),v.src=`./assets/img/seg/seguridad${[Z]}.jpg`):'BUENA COMPRESI\xD3N'===b?(G.play(),Q.style.display='block'):'BUEN TORNIQUETE'===b?(G.play(),P.style.display='block'):'S\xCD OBEDECE \xD3RDENES'===b?(G.play(),J.style.display='none',L.style.display='block',L.play()):'NO OBEDECE \xD3RDENES'===b?(G.play(),J.style.display='none',M.style.display='block',M.play()):'RESPIRA NORMAL'===b||'AHORA S\xCD RESPIRO'===b?(S.style.display='none',O.style.display='none',H.style.display='block',H.play()):'RESPIRA<br>MUY R\xC1PIDO'===b?(S.style.display='none',H.style.display='none',I.style.display='block',I.play()):'S\xCD TIENE PULSO'===b?(H.style.display='none',K.style.display='none',J.style.display='block',J.play()):void 0;W++}});const da=()=>{R.style.display='block',setTimeout(function(){ga()},2e3)},ea=()=>{F.play(),clearInterval(T)},fa=()=>{ba++,aa=i(100*_/(_+ba)),B.innerHTML=`${_} = ${aa} %`,ca=i(100*ba/(_+ba)),C.innerHTML=`${ba} = ${ca} %`,W=1,1===Y?f():g()},ga=()=>{R.style.display='none',_++,aa=i(100*_/(_+ba)),B.innerHTML=`${_} = ${aa} %`,ca=i(100*ba/(_+ba)),C.innerHTML=`${ba} = ${ca} %`,W=1,1===Y?f():g()}}]);