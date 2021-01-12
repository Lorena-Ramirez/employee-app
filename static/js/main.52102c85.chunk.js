(this["webpackJsonpemployee-app"]=this["webpackJsonpemployee-app"]||[]).push([[0],{23:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var l=s(0),r=s(2),n=s(12),a=s.n(n),c=s(13),o=s(14),i=s(17),h=s(16);var u=function(){return Object(l.jsxs)("div",{className:"jumbotron",style:{textAlign:"center"},children:[Object(l.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(l.jsx)("p",{className:"lead",children:"View Employee Directory, or search for a specific employee"})]})};s(23);var j=function(e){return Object(l.jsx)("form",{className:"searchForm",children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(l.jsx)("div",{className:"search_container",children:Object(l.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"})})]})})};var d=function(e){var t;return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Image"}),Object(l.jsx)("th",{scope:"col",onClick:e.sortTable,style:{cursor:"pointer"},children:"Name"}),Object(l.jsx)("th",{scope:"col",children:"Phone"}),Object(l.jsx)("th",{scope:"col",children:"Email"}),Object(l.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(l.jsxs)("tbody",{children:[null===(t=e.employees)||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:e.picture.medium,alt:"Employee"})}),Object(l.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.dob.date.split("T")[0]})]})})),";"]})]})},m=s(15),p=s.n(m),b=function(){return p.a.get("https://randomuser.me/api/?results=15&nat=us")},y=function(e){Object(i.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={allEmployees:null,filteredEmployees:null,sortedEmployees:null,search:"",isSorting:!1},e.handleInputChange=function(t){var s=t.target.value;e.setState({search:s}),e.filterEmployees(s)},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployee(e.state.search),e.filterEmployee()},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({allEmployees:t.data.results,filteredEmployees:t.data.results}),console.log(e.state.allEmployees)})).catch((function(e){return console.log(e)}))}},{key:"sortTable",value:function(){this.setState({filteredEmployees:this.state.allEmployees.sort()}),console.log(this.state.filterEmployees)}},{key:"filterEmployees",value:function(e){var t=this.state.allEmployees;t=t.filter((function(t){return t.name.first.toLowerCase().includes(e.toLowerCase())})),console.log(t),this.setState({filteredEmployees:t})}},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(j,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,resetTable:this.resetTable,sortTable:this.sortTable}),Object(l.jsx)(d,{employees:this.state.filteredEmployees,sortTable:this.sortTable})]})}}]),s}(r.Component);var f=function(){return Object(l.jsx)(y,{})};s(42);a.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.52102c85.chunk.js.map