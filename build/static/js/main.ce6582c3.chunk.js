(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(25)},,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(8),c=n.n(s),o=(n(15),n(6)),l=n(1),r=n(2),u=n(4),m=n(3),h=n(5),d=(n(17),n(19),n(21),n(23),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(m.a)(e).call(this,t))).onClick=function(t){console.log("Hi!"),n.setState({completed:!n.state.completed})},n.state={completed:!1},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"item"},i.a.createElement("p",{className:this.state.completed?"finished":"unfinished"},this.props.item),i.a.createElement("input",{type:"checkbox",onClick:this.onClick}))}}]),e}(a.Component)),f=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(m.a)(e).call(this,t))).onChange=function(t){n.setState({item:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.setState({item:"",listItems:[].concat(Object(o.a)(n.state.listItems),[n.state.item])})},n.state={item:"",listItems:[]},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"list"},i.a.createElement("h2",null,this.props.title),i.a.createElement("form",{className:"List",onSubmit:this.onSubmit},i.a.createElement("input",{value:this.state.item,onChange:this.onChange}),i.a.createElement("button",null,"Add Item")),i.a.createElement("div",{className:"itemContainer"},this.state.listItems.map(function(t,e){return i.a.createElement(d,{item:t})})))}}]),e}(a.Component),b=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(m.a)(e).call(this,t))).onChange=function(t){n.setState({list:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.setState({list:"",lists:[].concat(Object(o.a)(n.state.lists),[n.state.list])})},n.state={list:"",lists:[]},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{className:"header",onSubmit:this.onSubmit},i.a.createElement("input",{value:this.state.list,onChange:this.onChange}),i.a.createElement("button",null,"Add List")),i.a.createElement("div",{className:"mainContainer"},this.state.lists.map(function(t,e){return i.a.createElement(f,{key:e,title:t})})))}}]),e}(a.Component),p=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(m.a)(e).call(this,t))).onChange=function(t){n.setState({listToAdd:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.setState({listToAdd:"",lists:[].concat(Object(o.a)(n.state.lists),[n.state.listToAdd])})},n.state={listToAdd:"",lists:[]},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.ce6582c3.chunk.js.map