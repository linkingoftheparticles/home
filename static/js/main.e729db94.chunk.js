(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a.n(n),i=a(71),r=a.n(i),s=(a(88),a(55)),c=a.n(s),l=a(72),d=a(73),p=a(74),u=a(82),m=a(75),b=a(8),h=a(81),y=(a(90),a(91),a(178)),v=a(179),f=a(180),g=a(181),x=a(182),w=a(76),E=a.n(w).a.initializeApp({apiKey:"AIzaSyAgYDtauVULemmJlwXVY5NS-nXhWrK3ioE",authDomain:"art8-588f2.firebaseapp.com",databaseURL:"https://art8-588f2.firebaseio.com",projectId:"art8-588f2",storageBucket:"art8-588f2.appspot.com",messagingSenderId:"438297753640",appId:"1:438297753640:web:e02cb1b669ee8b06"}),k=a(78),_=a.n(k),S=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).logText=function(){var e=Object(l.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),E.database().ref("text").push(a.state.text);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.captureText=function(e){e.preventDefault();var t=e.target.value;a.setState({text:t})},a.state={Story:[],text:""},a.logText=a.logText.bind(Object(b.a)(a)),a.captureText=a.captureText.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;E.database().ref("text").orderByKey().limitToLast(100).on("child_added",function(t){var a={text:t.val(),id:t.key};console.log(a),e.setState({Story:e.state.Story.concat([a])})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{class:"App"},o.a.createElement("h1",{className:"display-3",class:"title1"},"What is your story?"),o.a.createElement("h1",{className:"display-5",class:"title2"},"Add a sentence to the end of this story. Add your own story."),o.a.createElement(y.a,{onSubmit:this.logText},o.a.createElement(v.a,{row:!0},o.a.createElement(f.a,{sm:11},o.a.createElement(g.a,{type:"textarea",name:"text",id:"exampleText",size:"lg",onChange:this.captureText})),o.a.createElement(x.a,{type:"submit"},"Submit"))),o.a.createElement(_.a,{class:"particle",height:"500px",params:{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#000000"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#000000",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})),o.a.createElement("h1",{className:"display-3",class:"txt"},"Linking of the Particles"),o.a.createElement("p",{className:"display-3",class:"txt"},"By: Collective Anonomous"),o.a.createElement("p",{class:"txt",className:"lead"},this.state.Story.map(function(e){return o.a.createElement("li",{class:"li",key:e.id},e.text)})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(175);r.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a(176)},88:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},91:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.e729db94.chunk.js.map