(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{141:function(e,t,a){e.exports=a(189)},189:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),i=a(123),s=a(11),c=a(36),m=a(27),d=a(28),u=a(30),h=a(29),p=a(246),g=a(227),f=a(225),E=a(245),b=a(230),v=a(229),y=a(71),N=a.n(y),C=a(51),w=a(24),x=a.n(w),S=a(223),T=a(228),k=a(12),O=a.n(k),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.setState({loading:!0});var t={email:n.state.email,password:n.state.password};O.a.post("/login",t).then((function(e){localStorage.setItem("AuthToken","Bearer ".concat(e.data.token)),n.setState({loading:!1}),n.props.history.push("/")})).catch((function(e){n.setState({errors:e.response.data,loading:!1})}))},n.state={email:"",password:"",errors:[],loading:!1},n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){"errors"in e.UI&&e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.errors,n=t.loading;return o.a.createElement(S.a,{component:"main",maxWidth:"xs"},o.a.createElement(f.a,null),o.a.createElement("div",{className:e.paper},o.a.createElement(p.a,{className:e.avatar},o.a.createElement(N.a,null)),o.a.createElement(C.a,{component:"h1",variant:"h5"},"Login"),o.a.createElement("form",{className:e.form,noValidate:!0},o.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,helperText:a.email,error:!!a.email,onChange:this.handleChange}),o.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",helperText:a.password,error:!!a.password,onChange:this.handleChange}),o.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.handleSubmit,disabled:n||!this.state.email||!this.state.password},"Sign In",n&&o.a.createElement(T.a,{size:30,className:e.progess})),o.a.createElement(v.a,{container:!0},o.a.createElement(v.a,{item:!0},o.a.createElement(b.a,{href:"signup",variant:"body2"},"Don't have an account? Sign Up"))),a.general&&o.a.createElement(C.a,{variant:"body2",className:e.customError},a.general))))}}]),a}(n.Component),W=x()((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progess:{position:"absolute"}}}))(j),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.setState({loading:!0});var t={firstName:n.state.firstName,lastName:n.state.lastName,phoneNumber:n.state.phoneNumber,country:n.state.country,username:n.state.username,email:n.state.email,password:n.state.password,confirmPassword:n.state.confirmPassword};O.a.post("/signup",t).then((function(e){localStorage.setItem("AuthToken","Bearer ".concat(e.data.token)),n.setState({loading:!1}),n.props.history.push("/")})).catch((function(e){n.setState({errors:e.response.data,loading:!1})}))},n.state={firstName:"",lastName:"",phoneNumber:"",country:"",username:"",email:"",password:"",confirmPassword:"",errors:[],loading:!1},n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.errors,n=t.loading;return o.a.createElement(S.a,{component:"main",maxWidth:"xs"},o.a.createElement(f.a,null),o.a.createElement("div",{className:e.paper},o.a.createElement(p.a,{className:e.avatar},o.a.createElement(N.a,null)),o.a.createElement(C.a,{component:"h1",variant:"h5"},"Sign up"),o.a.createElement("form",{className:e.form,noValidate:!0},o.a.createElement(v.a,{container:!0,spacing:2},o.a.createElement(v.a,{item:!0,xs:12,sm:6},o.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",name:"firstName",autoComplete:"firstName",helperText:a.firstName,error:!!a.firstName,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,xs:12,sm:6},o.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lastName",helperText:a.lastName,error:!!a.lastName,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,xs:12,sm:6},o.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",helperText:a.username,error:!!a.username,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,xs:12,sm:6},o.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"phoneNumber",label:"Phone Number",name:"phoneNumber",autoComplete:"phoneNumber",pattern:"[7-9]{1}[0-9]{9}",helperText:a.phoneNumber,error:!!a.phoneNumber,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",helperText:a.email,error:!!a.email,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"country",label:"Country",name:"country",autoComplete:"country",helperText:a.country,error:!!a.country,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",helperText:a.password,error:!!a.password,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",autoComplete:"current-password",onChange:this.handleChange}))),o.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.handleSubmit,disabled:n||!this.state.email||!this.state.password||!this.state.firstName||!this.state.lastName||!this.state.country||!this.state.username||!this.state.phoneNumber},"Sign Up",n&&o.a.createElement(T.a,{size:30,className:e.progess})),o.a.createElement(v.a,{container:!0,justify:"flex-end"},o.a.createElement(v.a,{item:!0},o.a.createElement(b.a,{href:"login",variant:"body2"},"Already have an account? Sign in"))))))}}]),a}(n.Component),P=x()((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},progess:{position:"absolute"}}}))(I),L=a(76),A=a(231),z=a(232),B=a(233),D=a(234),q=a(3),U=function(e){null===localStorage.getItem("AuthToken")&&e.push("/login")},V=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentWillMount=function(){U(n.props.history);var e=localStorage.getItem("AuthToken");O.a.defaults.headers.common={Authorization:"".concat(e)},O.a.get("/user").then((function(e){console.log(e.data),n.setState({firstName:e.data.userCredentials.firstName,lastName:e.data.userCredentials.lastName,email:e.data.userCredentials.email,phoneNumber:e.data.userCredentials.phoneNumber,country:e.data.userCredentials.country,username:e.data.userCredentials.username,uiLoading:!1})})).catch((function(e){403===e.response.status&&n.props.history.push("/login"),console.log(e),n.setState({errorMsg:"Error in retrieving the data"})}))},n.handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.handleImageChange=function(e){n.setState({image:e.target.files[0]})},n.profilePictureHandler=function(e){e.preventDefault(),n.setState({uiLoading:!0}),U(n.props.history);var t=localStorage.getItem("AuthToken"),a=new FormData;a.append("image",n.state.image),a.append("content",n.state.content),O.a.defaults.headers.common={Authorization:"".concat(t)},O.a.post("/user/image",a,{headers:{"content-type":"multipart/form-data"}}).then((function(){window.location.reload()})).catch((function(e){403===e.response.status&&n.props.history.push("/login"),console.log(e),n.setState({uiLoading:!1,imageError:"Error in posting the data"})}))},n.updateFormValues=function(e){e.preventDefault(),n.setState({buttonLoading:!0}),U(n.props.history);var t=localStorage.getItem("AuthToken");O.a.defaults.headers.common={Authorization:"".concat(t)};var a={firstName:n.state.firstName,lastName:n.state.lastName,country:n.state.country};O.a.post("/user",a).then((function(){n.setState({buttonLoading:!1})})).catch((function(e){403===e.response.status&&n.props.history.push("/login"),console.log(e),n.setState({buttonLoading:!1})}))},n.state={firstName:"",lastName:"",email:"",phoneNumber:"",username:"",country:"",profilePicture:"",uiLoading:!0,buttonLoading:!1,imageError:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=Object(L.a)(e,["classes"]);return!0===this.state.uiLoading?o.a.createElement("main",{className:t.content},o.a.createElement("div",{className:t.toolbar}),this.state.uiLoading&&o.a.createElement(T.a,{size:150,className:t.uiProgess})):o.a.createElement("main",{className:t.content},o.a.createElement("div",{className:t.toolbar}),o.a.createElement(A.a,Object.assign({},a,{className:Object(q.a)(t.root,t)}),o.a.createElement(z.a,null,o.a.createElement("div",{className:t.details},o.a.createElement("div",null,o.a.createElement(C.a,{className:t.locationText,gutterBottom:!0,variant:"h4"},this.state.firstName," ",this.state.lastName))),o.a.createElement("div",{className:t.progress})),o.a.createElement(B.a,null)),o.a.createElement("br",null),o.a.createElement(A.a,Object.assign({},a,{className:Object(q.a)(t.root,t)}),o.a.createElement("form",{autoComplete:"off",noValidate:!0},o.a.createElement(B.a,null),o.a.createElement(z.a,null,o.a.createElement(v.a,{container:!0,spacing:3},o.a.createElement(v.a,{item:!0,md:6,xs:12},o.a.createElement(E.a,{fullWidth:!0,label:"First name",margin:"dense",name:"firstName",variant:"outlined",value:this.state.firstName,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,md:6,xs:12},o.a.createElement(E.a,{fullWidth:!0,label:"Last name",margin:"dense",name:"lastName",variant:"outlined",value:this.state.lastName,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,md:6,xs:12},o.a.createElement(E.a,{fullWidth:!0,label:"Email",margin:"dense",name:"email",variant:"outlined",disabled:!0,value:this.state.email,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,md:6,xs:12},o.a.createElement(E.a,{fullWidth:!0,label:"Phone Number",margin:"dense",name:"phone",type:"number",variant:"outlined",disabled:!0,value:this.state.phoneNumber,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,md:6,xs:12},o.a.createElement(E.a,{fullWidth:!0,label:"User Name",margin:"dense",name:"userHandle",disabled:!0,variant:"outlined",value:this.state.username,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,md:6,xs:12},o.a.createElement(E.a,{fullWidth:!0,label:"Country",margin:"dense",name:"country",variant:"outlined",value:this.state.country,onChange:this.handleChange})))),o.a.createElement(B.a,null),o.a.createElement(D.a,null))),o.a.createElement(g.a,{color:"primary",variant:"contained",type:"submit",className:t.submitButton,onClick:this.updateFormValues,disabled:this.state.buttonLoading||!this.state.firstName||!this.state.lastName||!this.state.country},"Save details",this.state.buttonLoading&&o.a.createElement(T.a,{size:30,className:t.progess})))}}]),a}(n.Component),F=x()((function(e){return{content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar,root:{},details:{display:"flex"},avatar:{height:110,width:100,flexShrink:0,flexGrow:0},locationText:{paddingLeft:"15px"},buttonProperty:{position:"absolute",top:"50%"},uiProgess:{position:"fixed",zIndex:"1000",height:"31px",width:"31px",left:"50%",top:"35%"},progess:{position:"absolute"},uploadButton:{marginLeft:"8px",margin:e.spacing(1)},customError:{color:"red",fontSize:"0.8rem",marginTop:10},submitButton:{marginTop:"10px"}}}))(V),H=a(48),M=a(238),G=a(119),R=a.n(G),J=a(239),_=a(240),$=a(236),K=a(85),Q=a.n(K),X=a(193),Y=a(235),Z=a(237),ee=a(84),te=a.n(ee),ae=a(118),ne=a.n(ae),oe=function(e){return{content:{flexGrow:1,padding:e.spacing(3)},appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},submitButton:{display:"block",color:"white",textAlign:"center",position:"absolute",top:14,right:10},floatingButton:{position:"fixed",bottom:0,right:0},form:{width:"98%",marginLeft:13,marginTop:e.spacing(3)},toolbar:e.mixins.toolbar,root:{minWidth:470},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12},uiProgess:{position:"fixed",zIndex:"1000",height:"31px",width:"31px",left:"50%",top:"35%"},dialogeStyle:{maxWidth:"50%"},viewRoot:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}},re=o.a.forwardRef((function(e,t){return o.a.createElement(X.a,Object.assign({direction:"up",ref:t},e))})),le=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.componentWillMount=function(){U(n.props.history);var e=localStorage.getItem("AuthToken");O.a.defaults.headers.common={Authorization:"".concat(e)},O.a.get("/todos").then((function(e){n.setState({todos:e.data,uiLoading:!1})})).catch((function(e){console.log(e)}))},n.state={todos:"",title:"",body:"",todoId:"",errors:[],open:!1,uiLoading:!0,buttonType:"",viewOpen:!1},n.deleteTodoHandler=n.deleteTodoHandler.bind(Object(H.a)(n)),n.handleEditClickOpen=n.handleEditClickOpen.bind(Object(H.a)(n)),n.handleViewOpen=n.handleViewOpen.bind(Object(H.a)(n)),n}return Object(d.a)(a,[{key:"deleteTodoHandler",value:function(e){U(this.props.history);var t=localStorage.getItem("AuthToken");O.a.defaults.headers.common={Authorization:"".concat(t)};var a=e.todo.todoId;O.a.delete("todo/".concat(a)).then((function(){window.location.reload()})).catch((function(e){console.log(e)}))}},{key:"handleEditClickOpen",value:function(e){this.setState({title:e.todo.title,body:e.todo.body,todoId:e.todo.todoId,buttonType:"Edit",open:!0})}},{key:"handleViewOpen",value:function(e){this.setState({title:e.todo.title,body:e.todo.body,viewOpen:!0})}},{key:"render",value:function(){var e=this,t=x()(oe)((function(e){var t=e.children,a=e.classes,n=e.onClose,r=Object(L.a)(e,["children","classes","onClose"]);return o.a.createElement(Y.a,Object.assign({disableTypography:!0,className:a.root},r),o.a.createElement(C.a,{variant:"h6"},t),n?o.a.createElement($.a,{"aria-label":"close",className:a.closeButton,onClick:n},o.a.createElement(Q.a,null)):null)})),a=x()((function(e){return{viewRoot:{padding:e.spacing(2)}}}))(Z.a);te.a.extend(ne.a);var n=this.props.classes,r=this.state,l=r.open,i=r.errors,s=r.viewOpen,c=function(){e.setState({viewOpen:!1})},m=function(t){e.setState({open:!1})};return!0===this.state.uiLoading?o.a.createElement("main",{className:n.content},o.a.createElement("div",{className:n.toolbar}),this.state.uiLoading&&o.a.createElement(T.a,{size:150,className:n.uiProgess})):o.a.createElement("main",{className:n.content},o.a.createElement("div",{className:n.toolbar}),o.a.createElement($.a,{className:n.floatingButton,color:"primary","aria-label":"Add Todo",onClick:function(){e.setState({todoId:"",title:"",body:"",buttonType:"",open:!0})}},o.a.createElement(R.a,{style:{fontSize:60}})),o.a.createElement(M.a,{fullScreen:!0,open:l,onClose:m,TransitionComponent:re},o.a.createElement(J.a,{className:n.appBar},o.a.createElement(_.a,null,o.a.createElement($.a,{edge:"start",color:"inherit",onClick:m,"aria-label":"close"},o.a.createElement(Q.a,null)),o.a.createElement(C.a,{variant:"h6",className:n.title},"Edit"===this.state.buttonType?"Edit Todo":"Create a new Todo"),o.a.createElement(g.a,{autoFocus:!0,color:"inherit",onClick:function(t){U(e.props.history),t.preventDefault();var a={title:e.state.title,body:e.state.body},n={};n="Edit"===e.state.buttonType?{url:"/todo/".concat(e.state.todoId),method:"put",data:a}:{url:"/todo",method:"post",data:a};var o=localStorage.getItem("AuthToken");O.a.defaults.headers.common={Authorization:"".concat(o)},O()(n).then((function(){e.setState({open:!1}),window.location.reload()})).catch((function(t){e.setState({open:!0,errors:t.response.data}),console.log(t)}))},className:n.submitButton},"Edit"===this.state.buttonType?"Save":"Submit"))),o.a.createElement("form",{className:n.form,noValidate:!0},o.a.createElement(v.a,{container:!0,spacing:2},o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"todoTitle",label:"Todo Title",name:"title",autoComplete:"todoTitle",helperText:i.title,value:this.state.title,error:!!i.title,onChange:this.handleChange})),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"todoDetails",label:"Todo Details",name:"body",autoComplete:"todoDetails",multiline:!0,rows:25,rowsMax:25,helperText:i.body,error:!!i.body,onChange:this.handleChange,value:this.state.body}))))),o.a.createElement(v.a,{container:!0,spacing:2},this.state.todos.map((function(t){return o.a.createElement(v.a,{item:!0,xs:12,sm:6},o.a.createElement(A.a,{className:n.root,variant:"outlined"},o.a.createElement(z.a,null,o.a.createElement(C.a,{variant:"h5",component:"h2"},t.title),o.a.createElement(C.a,{className:n.pos,color:"textSecondary"},te()(t.createdAt).fromNow()),o.a.createElement(C.a,{variant:"body2",component:"p"},"".concat(t.body.substring(0,65)))),o.a.createElement(D.a,null,o.a.createElement(g.a,{size:"small",color:"primary",onClick:function(){return e.handleViewOpen({todo:t})}}," ","View"," "),o.a.createElement(g.a,{size:"small",color:"primary",onClick:function(){return e.handleEditClickOpen({todo:t})}},"Edit"),o.a.createElement(g.a,{size:"small",color:"primary",onClick:function(){return e.deleteTodoHandler({todo:t})}},"Delete"))))}))),o.a.createElement(M.a,{onClose:c,"aria-labelledby":"customized-dialog-title",open:s,fullWidth:!0,classes:{paperFullWidth:n.dialogeStyle}},o.a.createElement(t,{id:"customized-dialog-title",onClose:c},this.state.title),o.a.createElement(a,{dividers:!0},o.a.createElement(E.a,{fullWidth:!0,id:"todoDetails",name:"body",multiline:!0,readonly:!0,rows:1,rowsMax:25,value:this.state.body,InputProps:{disableUnderline:!0}}))))}}]),a}(n.Component),ie=x()(oe)(le),se=a(241),ce=a(226),me=a(242),de=a(243),ue=a(244),he=a(121),pe=a.n(he),ge=a(120),fe=a.n(ge),Ee=a(122),be=a.n(Ee),ve=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={render:!1},n.loadAccountPage=function(e){n.setState({render:!0})},n.loadTodoPage=function(e){n.setState({render:!1})},n.logoutHandler=function(e){localStorage.removeItem("AuthToken"),n.props.history.push("/login")},n.componentWillMount=function(){U(n.props.history);var e=localStorage.getItem("AuthToken");O.a.defaults.headers.common={Authorization:"".concat(e)},O.a.get("/user").then((function(e){console.log(e.data),n.setState({firstName:e.data.userCredentials.firstName,lastName:e.data.userCredentials.lastName,email:e.data.userCredentials.email,phoneNumber:e.data.userCredentials.phoneNumber,country:e.data.userCredentials.country,username:e.data.userCredentials.username,uiLoading:!1,profilePicture:e.data.userCredentials.imageUrl})})).catch((function(e){403===e.response.status&&n.props.history.push("/login"),console.log(e),n.setState({errorMsg:"Error in retrieving the data"})}))},n.state={firstName:"",lastName:"",profilePicture:"",uiLoading:!0,imageLoading:!1},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return!0===this.state.uiLoading?o.a.createElement("div",{className:e.root},this.state.uiLoading&&o.a.createElement(T.a,{size:150,className:e.uiProgess})):o.a.createElement("div",{className:e.root},o.a.createElement(f.a,null),o.a.createElement(J.a,{position:"fixed",className:e.appBar},o.a.createElement(_.a,null,o.a.createElement(C.a,{variant:"h6",noWrap:!0},"TodoApp"))),o.a.createElement(se.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},o.a.createElement("div",{className:e.toolbar}),o.a.createElement(B.a,null),o.a.createElement("center",null,o.a.createElement(p.a,{src:this.state.profilePicture,className:e.avatar}),o.a.createElement("p",null," ",this.state.firstName," ",this.state.lastName)),o.a.createElement(B.a,null),o.a.createElement(ce.a,null,o.a.createElement(me.a,{button:!0,key:"Todo",onClick:this.loadTodoPage},o.a.createElement(de.a,null," ",o.a.createElement(fe.a,null)," "),o.a.createElement(ue.a,{primary:"Todo"})),o.a.createElement(me.a,{button:!0,key:"Account",onClick:this.loadAccountPage},o.a.createElement(de.a,null," ",o.a.createElement(pe.a,null)," "),o.a.createElement(ue.a,{primary:"Account"})),o.a.createElement(me.a,{button:!0,key:"Logout",onClick:this.logoutHandler},o.a.createElement(de.a,null," ",o.a.createElement(be.a,null)," "),o.a.createElement(ue.a,{primary:"Logout"})))),o.a.createElement("div",null,this.state.render?o.a.createElement(F,null):o.a.createElement(ie,null)))}}]),a}(n.Component),ye=x()((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},avatar:{height:110,width:100,flexShrink:0,flexGrow:0,marginTop:20},uiProgess:{position:"fixed",zIndex:"1000",height:"31px",width:"31px",left:"45%",top:"35%"},toolbar:e.mixins.toolbar}}))(ve);var Ne=function(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:ye}),o.a.createElement(s.a,{exact:!0,path:"/login",component:W}),o.a.createElement(s.a,{exact:!0,path:"/signup",component:P}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[141,1,2]]]);
//# sourceMappingURL=main.b0f69fc3.chunk.js.map