(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1875c6e"],{"03fc":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容",clearable:"","prefix-icon":"el-icon-search"},on:{clear:e.handleFilter},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.key,callback:function(t){e.$set(e.listQuery,"key",t)},expression:"listQuery.key"}}),e._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:e.handleFilter},model:{value:e.listQuery.sort,callback:function(t){e.$set(e.listQuery,"sort",t)},expression:"listQuery.sort"}},e._l(e.sortOptions,(function(e){return n("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n      "+e._s("搜索")+"\n    ")]),e._v(" "),e.permissionList.add?n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      "+e._s("添加")+"\n    ")]):e._e(),e._v(" "),e.permissionList.del?n("el-button",{staticClass:"filter-item",attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.handleBatchDel}},[e._v("\n      "+e._s("删除")+"\n    ")]):e._e()],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{stripe:"",data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange,"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{label:"服务器别名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.alias_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"服务器地址",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.server_address))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"登录用户名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.user_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"备注",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.memo))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"360","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[e.permissionList.view?n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return e.handleDetail(i.id)}}},[e._v("\n          "+e._s("查看")+"\n        ")]):e._e(),e._v(" "),e.permissionList.update?n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(i.id)}}},[e._v("\n          "+e._s("编辑")+"\n        ")]):e._e(),e._v(" "),e.permissionList.update?n("el-button",{attrs:{type:"primary",size:"mini",width:"290"}},[n("a",{attrs:{href:"/api/xterm?sid="+i.id,target:"blank"}},[e._v("连接")])]):e._e(),e._v(" "),e.permissionList.del?n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(i)}}},[e._v("\n          "+e._s("删除")+"\n        ")]):e._e()]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{"element-loading-text":"正在执行","element-loading-background":"rgba(255,255,255,0.7)",rules:e.rules,model:e.temp,"label-position":"left","label-width":"80px"}},[n("el-form-item",{attrs:{label:"服务器别名",prop:"alias_name"}},[n("el-input",{model:{value:e.temp.alias_name,callback:function(t){e.$set(e.temp,"alias_name",t)},expression:"temp.alias_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"服务器地址",prop:"server_address"}},[n("el-input",{model:{value:e.temp.server_address,callback:function(t){e.$set(e.temp,"server_address",t)},expression:"temp.server_address"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"登录用户名",prop:"user_name"}},[n("el-input",{model:{value:e.temp.user_name,callback:function(t){e.$set(e.temp,"user_name",t)},expression:"temp.user_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{placeholder:"1-120位","show-password":"",minlength:"1",maxlength:"120"},model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"备注",prop:"memo"}},[n("el-input",{model:{value:e.temp.memo,callback:function(t){e.$set(e.temp,"memo",t)},expression:"temp.memo"}})],1)],1),e._v(" "),"detail"!==e.dialogStatus&&!0!==e.loading?n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        "+e._s("取消")+"\n      ")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        "+e._s("确定")+"\n      ")])],1):e._e()],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogFormVisibleSetRole,title:e.dialogFormVisibleSetRoleTitle},on:{"update:visible":function(t){e.dialogFormVisibleSetRole=t}}},[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"正在执行","element-loading-background":"rgba(255,255,255,0.7)","label-width":"80px","label-position":"left"}},[n("el-form-item",[n("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":!1,data:e.treeData,props:e.treeProps,"show-checkbox":"","default-expand-all":"","node-key":"id"}})],1)],1),e._v(" "),!0!==e.loading?n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogFormVisibleSetRole=!1}}},[e._v("\n        "+e._s("取消")+"\n      ")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.setRole()}}},[e._v("\n        "+e._s("确定")+"\n      ")])],1):e._e()],1)],1)},a=[],o=(n("4b5e"),n("6c28"),n("4634"),n("470e")),r=n("b775");function l(e){return Object(r["a"])({url:"/serverinfo/list",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/serverinfo/detail",method:"get",params:{id:e}})}function u(e){return Object(r["a"])({url:"/serverinfo/update",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/serverinfo/create",method:"post",data:e})}function d(e){return Object(r["a"])({url:"/serverinfo/delete",method:"post",data:e})}var m=n("6724"),p=n("333d"),f=n("e350"),h={name:"ServerInfo",components:{Pagination:p["a"]},directives:{waves:m["a"]},data:function(){return{operationList:[],permissionList:{add:!1,del:!1,view:!1,update:!1},tableKey:0,list:[],total:0,listLoading:!0,loading:!0,listQuery:{page:1,limit:20,key:void 0,status:void 0,sort:"-id"},sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],temp:{id:0,memo:"",status:0},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"添加",detail:"详情"},rules:{},multipleSelection:[]}},created:function(){this.getMenuButton(),this.getList()},methods:{checkPermission:function(){this.permissionList.add=Object(f["a"])(this.operationList),this.permissionList.del=Object(f["b"])(this.operationList),this.permissionList.view=Object(f["f"])(this.operationList),this.permissionList.update=Object(f["e"])(this.operationList)},getMenuButton:function(){var e=this;Object(o["f"])("ServerInfo").then((function(t){e.operationList=t.data})).then((function(){e.checkPermission()}))},getList:function(){var e=this;this.listLoading=!0,l(this.listQuery).then((function(t){e.list=t.data.items,e.total=t.data.total,e.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},sortChange:function(e){var t=e.prop,n=e.order;this.listQuery.sort="ascending"===n?"+"+t:"descending"===n?"-"+t:void 0,this.handleFilter()},resetTemp:function(){this.temp={status:1,memo:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.loading=!1,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.loading=!0,c(e.temp).then((function(t){e.temp.id=t.data.id,e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3}),e.total=e.total+1})).catch((function(){e.loading=!1})))}))},handleDetail:function(e){var t=this;this.loading=!0,s(e).then((function(e){t.loading=!1,t.temp=e.data})),this.dialogStatus="detail",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleUpdate:function(e){var t=this;this.loading=!0,s(e).then((function(e){t.loading=!1,t.temp=e.data})),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){e.loading=!0;var n=Object.assign({},e.temp);u(n).then((function(){var t=!0,n=!1,i=void 0;try{for(var a,o=e.list[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var r=a.value;if(r.id===e.temp.id){var l=e.list.indexOf(r);e.list.splice(l,1,e.temp);break}}}catch(s){n=!0,i=s}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})).catch((function(){e.loading=!1}))}}))},handleDelete:function(e){var t=this,n=[];n.push(e.id),this.$confirm("是否确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){d(n).then((function(){t.$message({message:"删除成功",type:"success"}),t.total=t.total-1;var n=t.list.indexOf(e);t.list.splice(n,1)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleSelectionChange:function(e){this.multipleSelection=e},handleBatchDel:function(){var e=this;if(0!==this.multipleSelection.length){var t=[],n=!0,i=!1,a=void 0;try{for(var o,r=this.multipleSelection[Symbol.iterator]();!(n=(o=r.next()).done);n=!0){var l=o.value;t.push(l.id)}}catch(s){i=!0,a=s}finally{try{n||null==r.return||r.return()}finally{if(i)throw a}}this.$confirm("是否确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){d(t).then((function(){e.$message({message:"删除成功",type:"success"});var t=!0,n=!1,i=void 0;try{for(var a,o=e.multipleSelection[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var r=a.value;e.total=e.total-1;var l=e.list.indexOf(r);e.list.splice(l,1)}}catch(s){n=!0,i=s}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}else this.$message({message:"未选中任何行",type:"warning",duration:2e3})}}},v=h,g=n("4e82"),b=Object(g["a"])(v,i,a,!1,null,null,null);t["default"]=b.exports},"470e":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"g",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return c}));var i=n("b775");function a(e){return Object(i["a"])({url:"/menu/list",method:"get",params:e})}function o(){return Object(i["a"])({url:"/menu/allmenu",method:"get"})}function r(e){return Object(i["a"])({url:"/menu/detail",method:"get",params:{id:e}})}function l(e){return Object(i["a"])({url:"/menu/update",method:"post",data:e})}function s(e){return Object(i["a"])({url:"/menu/create",method:"post",data:e})}function u(e){return Object(i["a"])({url:"/menu/delete",method:"post",data:e})}function c(e){return Object(i["a"])({url:"/menu/menubuttonlist",method:"get",params:{menucode:e}})}},6396:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function a(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,n){var r=o(),l=e-r,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var o=Math.easeInOutQuad(u,r,l,t);a(o),u<t?i(e):n&&"function"===typeof n&&n()};c()}},6724:function(e,t,n){"use strict";n("8d41");var i="@@wavesContext";function a(e,t){function n(n){var i=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),o=a.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(r.width,r.height)+"px",o.appendChild(l)),a.type){case"center":l.style.top=r.height/2-l.offsetHeight/2+"px",l.style.left=r.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(n.pageY-r.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(n.pageX-r.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=a.color,l.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=n:e[i]={removeHandle:n},n}var o={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t["a"]=o},"8d41":function(e,t,n){},e350:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d}));n("40c5"),n("23cc");var i=n("4360");function a(e){if(e&&e instanceof Array&&e.length>0){var t=i["a"].getters&&i["a"].getters.roles,n=e,a=t.some((function(e){return n.includes(e)}));return!!a}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}function o(e,t){var n=e,i=t,a=n.includes(i);return!!a}function r(e){return o(e,"add")}function l(e){return o(e,"del")}function s(e){return o(e,"view")}function u(e){return o(e,"update")}function c(e){return o(e,"setadminrole")}function d(e){return o(e,"setrolemenu")}}}]);