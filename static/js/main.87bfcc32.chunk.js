(this["webpackJsonpreact-weather-exercise"]=this["webpackJsonpreact-weather-exercise"]||[]).push([[0],{113:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(11),o=n.n(a),c=(n(113),n(58)),i=n(59),s=n(60),l=n(65),u=n(18),d=n(157),h=n(81),f=n(185),j=n(6),b=function(){var e=Object(h.a)((function(){return{root:{flexGrow:1,textAlign:"center",color:"#fff"}}}))();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(f.a,{container:!0,spacing:3,children:Object(j.jsx)(f.a,{item:!0,xs:12,children:Object(j.jsx)(d.a,{variant:"h2",children:"Weather Forecast Munich"})})})})},m=n(192),g=n(186),p="SET_WEATHER_INFORMATION",O="SET_WEATHER_INFORMATION_START",x="SET_RADIO_SELECTED_VALUE",v="SET_BARCHART_VISIBILITY",w=n(97),y=n.n(w),I=function(){return function(e){e({type:O}),y.a.get("https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=metric").then((function(t){var n;e((n=t.data,{type:p,weatherInformation:n}))})).catch((function(e){console.error(e.message)}))}},C=Object(u.b)((function(e){return{selectedValue:e.selectedValue}}),(function(e){return{onChangeRadioSelectedValue:function(t){return e(function(e){return{type:x,value:e}}(t))}}}))((function(e){var t=function(t){var n=t.target.value;e.onChangeRadioSelectedValue(n)},n=Object(h.a)((function(){return{root:{flexGrow:1,textAlign:"center",margin:"60px 0",color:"#fff"}}}))(),r=Object(j.jsx)("div",{children:Object(j.jsx)(g.a,{value:"female",control:Object(j.jsx)(m.a,{checked:"celcius"===e.selectedValue,onChange:t,value:"celcius",name:"radio-button-celcius",color:"secondary"}),label:"Celcius"})}),a=Object(j.jsx)("div",{children:Object(j.jsx)(g.a,{value:"female",control:Object(j.jsx)(m.a,{checked:"fahrenheit"===e.selectedValue,onChange:t,value:"fahrenheit",name:"radio-button-fahrenheit",color:"secondary"}),label:"Fahrenheit"})});return Object(j.jsx)("div",{className:n.root,children:Object(j.jsxs)(f.a,{container:!0,spacing:3,children:[Object(j.jsx)(f.a,{item:!0,xs:6,children:r}),Object(j.jsx)(f.a,{item:!0,xs:6,children:a})]})})})),k=n(48),B=n(98),A=n.n(B),S=n(187),T=n(188),V=n(190),N=n(189),E=n(50),R=n(9),_=Object(u.b)((function(e){return{weatherInformation:e.weatherInformation.list,selectedValue:e.selectedValue}}))((function(e){var t=Object(h.a)((function(){return{root:{flexGrow:1,marginBottom:30}}}))(),n=[];return e.weatherInformation.filter((function(t){return new Date(t.dt_txt).toLocaleString("en-US",{month:"long",day:"numeric"})===e.day})).map((function(t){return n.push({temp:"celcius"===e.selectedValue?t.main.temp:1.8*t.main.temp+32,hour:new Date(t.dt_txt).toLocaleString("en-US",{hour:"numeric"})}),t})),Object(j.jsx)(f.a,{justify:"center",container:!0,spacing:8,className:t.root,children:Object(j.jsx)(f.a,{item:!0,xs:6,children:Object(j.jsxs)(E.c,{data:n,color:"#fff",children:[Object(j.jsx)(E.a,{}),Object(j.jsx)(E.d,{}),Object(j.jsx)(E.b,{color:"#fff",valueField:"temp",argumentField:"hour"}),Object(j.jsx)(R.e,{}),Object(j.jsx)(R.f,{})]})})})})),W=Object(u.b)((function(e){return{selectedValue:e.selectedValue,showBarChart:e.showBarChart,id:e.id,day:e.day}}),(function(e){return{setBarChartVisibility:function(t,n,r){return e(function(e,t,n){return{type:v,id:e,day:t,showBarChart:n}}(t,n,r))}}}))((function(e){var t,n,r=Object(h.a)((function(){return{root:{flexGrow:1,marginBottom:30},media:{height:180,width:250},card:{maxWidth:345,marginTop:200,backgroundColor:"transparent",color:"#fff",boxShadow:"0 10px 20px rgba(0, 0, 0, .3)",border:"1px solid rgba(255, 255, 255, .2)"},typography:{textAlign:"center"}}}))(),a=[];return t=Object(j.jsx)(f.a,{container:!0,justify:"center",spacing:8,className:r.root,children:e.item.map((function(t){return Object(j.jsx)(f.a,{item:!0,children:Object(j.jsx)(S.a,{onClick:function(){return n=t.id,r=t.day,void e.setBarChartVisibility(n,r,e.showBarChart);var n,r},className:r.card,children:Object(j.jsxs)(T.a,{children:[Object(j.jsx)(N.a,{className:r.media,image:"https://openweathermap.org/img/wn/".concat(t.icon,"@4x.png"),alt:"OpenWeather Icon",title:"Contemplative Reptile"}),Object(j.jsxs)(V.a,{children:[Object(j.jsx)(d.a,{className:r.typography,gutterBottom:!0,variant:"h5",component:"h2",children:"".concat(t.day)}),Object(j.jsx)(d.a,{className:r.typography,gutterBottom:!0,variant:"h5",component:"h2",children:"Average: ".concat("celcius"===e.selectedValue?t.temp+" \xb0C":1.8*t.temp+32+" \xb0F")})]},t.id)]},t.id)},t.id)},t.id)}))},"1"),a.push(t),e.showBarChart&&(n=Object(j.jsx)(_,{day:e.day})),Object(j.jsxs)("div",{children:[a,n]})})),L=Object(u.b)((function(e){return{weather:e.weatherInformation,weatherInformation:e.weatherInformation.list}}))((function(e){for(var t,n=e.weatherInformation,r=[],a=[],o=0,c=0,i=[],s=[],l=0;l<n.length;l++){var u=new Date(n[l].dt_txt).toLocaleString("en-US",{month:"long",day:"numeric"}),d=new Date(n[l].dt_txt).toLocaleString("en-US",{hour:"numeric"});r.push({id:n[l].dt,day:u,temp:n[l].main.temp,icon:n[l].weather[0].icon,dayTime:d})}var h,b,m=[].concat(r),g=m.reduce((function(e,t){return e[t.day]=(e[t.day]||0)+1,e}),{});return Object.keys(g).map((function(e){return i.push(g[e])})),i.map((function(e){return s.push(m.splice(0,e))})),s.map((function(e){return e.map((function(e,n){return t=n,o+=e.temp})),c=o/e.length,a.push({id:e[t].id,day:e[0].day,temp:Math.round(c),icon:e[t].icon,dayTime:e[t].dayTime}),o=0,c})),Object(j.jsx)(f.a,{container:!0,children:Object(j.jsx)(f.a,{item:!0,xs:12,children:Object(j.jsx)(A.a,{autoPlay:!1,animation:"slide",duration:"500",navButtonsAlwaysVisible:!0,indicators:!1,cycleNavigation:!1,navButtonsWrapperProps:{style:{top:0,height:"10%"}},fullHeightHover:!1,timeout:500,navButtonsProps:{style:{marginRight:"20vw",marginLeft:"20vw"}},children:(h=a,b=3,h.reduce((function(e,t,n){var r=Math.floor(n/b);return e[r]=[].concat(Object(k.a)(e[r]||[]),[t]),e}),[])).map((function(e,t){return Object(j.jsx)(W,{item:e,data:a},t)}))})})})})),F=n(191),D=Object(h.a)((function(e){return{root:{display:"flex",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),M=function(){var e=D();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(F.a,{size:100,color:"secondary"})})},P=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitWeatherInformation()}},{key:"render",value:function(){var e;return e=this.props.loading?Object(j.jsx)(M,{}):Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(C,{}),Object(j.jsx)(L,{})]}),Object(j.jsx)(r.Fragment,{children:e})}}]),n}(r.Component),U=Object(u.b)((function(e){return{weatherInformation:e.weatherInformation,loading:e.loading,showBarchart:e.showBarchart}}),(function(e){return{onInitWeatherInformation:function(){return e(I())}}}))(P),H=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).style={backgroundImage:"url(/background-image.jpg)",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{style:this.style,children:Object(j.jsx)(U,{})})}}]),n}(r.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=n(44),q=n(27),Q={loading:!0,weatherInformation:null,city:null,selectedValue:"celcius",showBarChart:!1,toggledArray:[],id:null},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(q.a)(Object(q.a)({},e),{},{weatherInformation:t.weatherInformation,city:t.weatherInformation.city.name,loading:!1});case O:return Object(q.a)({},e);case v:var n,r=e.weatherInformation.list.filter((function(e){return e.dt===t.id})).map((function(e){return e.dt})),a=Object(k.a)(e.toggledArray);return a.push.apply(a,Object(k.a)(r)),n=t.id===e.toggledArray[e.toggledArray.length-1]&&t.showBarChart===!n,Object(q.a)(Object(q.a)({},e),{},{showBarChart:!n,toggledArray:a,id:t.id,day:t.day});case x:return Object(q.a)(Object(q.a)({},e),{},{selectedValue:t.value});default:return e}},$=n(100),K=Object(J.c)(Y,Object(J.a)($.a));o.a.render(Object(j.jsx)(u.a,{store:K,children:Object(j.jsx)(H,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-weather-exercise",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-weather-exercise","/service-worker.js");G?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):z(e)}))}}()}},[[151,1,2]]]);
//# sourceMappingURL=main.87bfcc32.chunk.js.map