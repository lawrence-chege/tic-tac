(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(15),a(9)),u=a(1),i=a(2),h=a(4),m=a(3),s=a(5),p=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Check"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Phone Number")))},E=function(e){var t=e.charactersData.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox"})),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.country),r.a.createElement("td",null,t.age),r.a.createElement("td",null,t.phone),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))}));return r.a.createElement("tbody",null,t)},b=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.charactersData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(p,null),r.a.createElement(E,{charactersData:t,removeCharacter:a}))}}]),t}(n.Component),d=a(8),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.submitForm=function(){a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",Country:"",age:"",phone:""},a.state=a.initialState,a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.country,n=e.age,c=e.phone;return r.a.createElement("form",{className:"new-eit"},r.a.createElement("label",null,"Name "),r.a.createElement("input",{type:"text",name:"name",placeholder:"EIT's Name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Country "),r.a.createElement("input",{type:"text",name:"country",value:a,placeholder:"Home country",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"age",value:n,placeholder:"Age of Eit",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"phone",value:c,placeholder:"Phone Number",onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),t}(n.Component),f=(a(16),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a.removeCharacter=function(e){var t=a.state.characters;a.setState({characters:t.filter((function(t,a){return a!==e}))})},a.handleSubmit=function(e){a.setState({characters:[].concat(Object(o.a)(a.state.characters),[e])})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Akwaaba EITs"),r.a.createElement(v,{handleSubmit:this.handleSubmit}),r.a.createElement(b,{charactersData:this.state.characters,removeCharacter:this.removeCharacter}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.bb7a9326.chunk.js.map