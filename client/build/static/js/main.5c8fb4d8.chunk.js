(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(85)},53:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),o=(a(51),a(53),a(9)),u=a(10),i=a(12),s=a(11),m=a(13),g=a(106),p=a(108),b=a(107),h=a(87),E=a(88),v=a(89),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0,className:"mt-3"},l.a.createElement(E.a,null,l.a.createElement(v.a,{xs:12},"Page Not Found 404")))}}]),t}(n.Component),d=a(20),y=a.n(d),j=a(23),x=a(90),O=a(91),S=a(92),w=a(93),C=a(94),k="https://arcane-wildwood-52300.herokuapp.com/api/v0",I=[{value:"Insurance",label:"Insurance"},{value:"Finance",label:"Finance"},{value:"Mortgage",label:"Mortgage"},{value:"Loan",label:"Loan"},{value:"Investment",label:"Investment"},{value:"Learning",label:"Learning"}],L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",content:"",category:""},a.handleSubmit=function(e){e.preventDefault();var t={title:a.state.title,content:a.state.content,category:a.state.category.value};return console.log("new Blog is>>>",t),y.a.post("".concat(k,"/blogs"),t).then(function(e){console.log("posting new Blog response is>>>",e)}).catch(function(e){console.log("err posting new blog is >>>",e)})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{fluid:!0,className:"mt-3"},l.a.createElement(E.a,null,l.a.createElement(v.a,{xs:12},l.a.createElement(x.a,{onSubmit:this.handleSubmit},l.a.createElement(O.a,null,l.a.createElement(S.a,{for:"exampleTitle"},"Title"),l.a.createElement(w.a,{type:"text",name:"title",id:"exampleTitle",placeholder:"Please enter blog title",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}})),l.a.createElement(O.a,null,l.a.createElement(S.a,{for:"exampleContent"},"Content"),l.a.createElement(w.a,{style:{height:400},type:"textarea",name:"password",id:"exampleContent",placeholder:"Please enter blog content",value:this.state.conent,onChange:function(t){return e.setState({content:t.target.value})}})),l.a.createElement(O.a,null,l.a.createElement(S.a,{for:"exampleSelect"},"Category"),l.a.createElement(j.a,{name:"select",id:"exampleSelect",value:this.state.category,onChange:function(t){return e.setState({category:t})},options:I})),l.a.createElement(C.a,null,"Submit")))))}}]),t}(n.Component),N=a(42),P=a.n(N),T=a(95),F=a(96),B=a(97),M=a(98),_=a(99),A=[{value:"Insurance",label:"Insurance"},{value:"Finance",label:"Finance"},{value:"Mortgage",label:"Mortgage"},{value:"Loan",label:"Loan"},{value:"Investment",label:"Investment"},{value:"Learning",label:"Learning"}],D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",category:"",content:"",blogs:[]},a.startSearch=function(e){e.preventDefault();var t={current_page:1,category:a.state.category?a.state.category.value:null,title_keyword:a.state.title||null,content_keyword:a.state.content||null};return y.a.get("".concat(k,"/blogs"),{params:t}).then(function(e){console.log("results is >>>",e);var t=e.data.docs;e.data.pages;a.setState({blogs:t})}).catch(function(e){console.log("err is >>>",e)})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{fluid:!0,className:"mt-3"},l.a.createElement(E.a,null,l.a.createElement(v.a,{xs:12},l.a.createElement(x.a,{onSubmit:this.startSearch},l.a.createElement(E.a,{form:!0},l.a.createElement(v.a,{md:4},l.a.createElement(O.a,null,l.a.createElement(S.a,{for:"exampleTitle"},"Search Title"),l.a.createElement(w.a,{type:"text",name:"title",id:"exampleTitle",placeholder:"Please enter blog title",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}))),l.a.createElement(v.a,{md:4},l.a.createElement(O.a,null,l.a.createElement(S.a,{for:"exampleContent"},"Search Content"),l.a.createElement(w.a,{type:"text",name:"content",id:"exampleContent",placeholder:"Please enter blog content",value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}}))),l.a.createElement(v.a,{md:4},l.a.createElement(O.a,null,l.a.createElement(S.a,{for:"exampleSelect"},"Category"),l.a.createElement(j.a,{name:"select",id:"exampleSelect",value:this.state.category,onChange:function(t){return e.setState({category:t})},options:A})))),l.a.createElement(C.a,null,"Submit")))),l.a.createElement(E.a,{className:"mt-3"},l.a.createElement(v.a,{xs:12},l.a.createElement(T.a,null,P.a.map(this.state.blogs,function(e){return l.a.createElement(F.a,{key:e.id},l.a.createElement(B.a,null,e.title),l.a.createElement(M.a,null,l.a.createElement(_.a,null,e.content)))})))))}}]),t}(n.Component),J=a(102),H=a(100),q=a(101),z=a(103),G=a(104),K=a(105),Q=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(H.a,{color:"dark",expand:"md"},l.a.createElement(q.a,{tag:J.a,to:"/"},"Home"),l.a.createElement(z.a,{className:"",navbar:!0},l.a.createElement(G.a,{className:"text-light"},l.a.createElement(K.a,{tag:J.a,to:"/new"},"Post New Blog"))))}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,null,l.a.createElement("div",null,l.a.createElement(Q,null),l.a.createElement(p.a,null,l.a.createElement(b.a,{exact:!0,path:"/",component:D}),l.a.createElement(b.a,{exact:!0,path:"/new",component:L}),l.a.createElement(b.a,{component:f}))))}}]),t}(n.Component);c.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[46,2,1]]]);
//# sourceMappingURL=main.5c8fb4d8.chunk.js.map