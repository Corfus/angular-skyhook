(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"O/wF":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));var i=n("LoAr"),r=(n("8dL6"),i["ɵcrt"]({encapsulation:0,styles:[".fab[_ngcontent-%COMP%] { color: black; }\n        p[_ngcontent-%COMP%] {\n            margin-top: 0;\n        }\n        a[_ngcontent-%COMP%] {\n            padding: 8px;\n            display: inline-block;\n            background: rgba(68, 72, 224, 0.14);\n            background: #e5e2fa;\n            background: #e2ecfa;\n            text-decoration: none;\n        }"],data:{}}));function s(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,0,null,null,3,"p",[],null,null,null,null,null)),(t()(),i["ɵeld"](1,0,null,null,2,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(t()(),i["ɵeld"](2,0,null,null,0,"i",[["class","fab fa-github"]],null,null,null,null,null)),(t()(),i["ɵted"](-1,null,[" View the source on GitHub "]))],null,(function(t,e){t(e,1,0,e.component.link)}))}},glzE:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return D})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return C})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return S}));var i=n("D57K"),r=n("LiEJ"),s=n("LR82"),o=n("fQLH"),c=n("lqvn"),a=n("z5yO"),u=function(){function t(t,e){this.width=t,this.height=e}return t.prototype.style=function(){return{width:this.width+"px",height:this.height+"px"}},t}(),p={halfway:"halfway",fixed:"fixed"},h=function(){function t(t,e,n){var o=this;this.dnd=t,this.el=e,this.cdr=n,this.listId=Math.random().toString(),this.horizontal=!1,this.hoverTrigger=p.halfway,this.childrenSubject$=new r.a([]),this.children$=this.childrenSubject$,this.subs=new s.a,this.listSubs=new s.a,this.target=this.dnd.dropTarget(null,{canDrop:function(t){if(!o.acceptsType(t.getItemType()))return!1;var e=t.getItem();return!!e&&o.getCanDrop(e,t)},drop:function(t){var e=t.getItem();return e&&o.getCanDrop(e,t)&&o.spec&&o.spec.drop&&o.spec.drop(e,t),{}},hover:function(t){var e=t.getItem();o.children&&function(t){var e,n;try{for(var r=Object(i.__values)(t),s=r.next();!s.done;s=r.next())return!1}catch(o){e={error:o}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return!0}(o.children)&&e&&o.getCanDrop(e,t)&&t.isOver({shallow:!0})&&o.callHover(e,t,{listId:o.listId,index:0})}},this.subs)}return t.prototype.updateSubscription=function(){var t=this;if(null!=this.listId&&this.spec&&(this.listSubs&&(this.subs.remove(this.listSubs),this.listSubs.unsubscribe()),this.spec.getList)){var e=this.spec.getList(this.listId);this.listSubs=e&&e.subscribe((function(e){e&&(t.childrenSubject$.next(e),t.children=e,t.cdr.markForCheck())})),this.subs.add(this.listSubs)}},t.prototype.contextFor=function(t,e){return{data:t,index:e,listId:this.listId,spec:this.spec,horizontal:this.horizontal,hoverTrigger:this.hoverTrigger}},t.prototype.getCanDrop=function(t,e,n){return void 0===n&&(n=!0),this.spec&&this.spec.canDrop?this.spec.canDrop(t,e):n},t.prototype.callHover=function(t,e,n){n&&(t.hover=n,t=Object(i.__assign)({},t)),this.spec&&this.spec.hover&&this.spec.hover(t,e)},t.prototype.ngOnInit=function(){this.updateSubscription(),this.target.setTypes(this.getTargetType())},t.prototype.getTargetType=function(){return Array.isArray(this.spec.accepts)?this.spec.accepts:this.spec.accepts||this.spec.type},t.prototype.acceptsType=function(t){return null!=t&&(Array.isArray(this.spec.accepts)?-1!==this.spec.accepts.indexOf(t):t==this.getTargetType())},t.prototype.ngOnChanges=function(t){var e=t.spec;t.listId&&this.updateSubscription(),e&&this.updateSubscription(),this.target.setTypes(this.getTargetType())},t.prototype.ngAfterViewInit=function(){if(!this.el)throw new Error("ssSortable directive must have ElementRef");this.target.connectDropTarget(this.el.nativeElement)},t.prototype.ngOnDestroy=function(){this.subs.unsubscribe()},t}(),l=function(){return function(){}}(),d=function(t){function e(e,n,i){var r=t.call(this,e,n,i)||this;return r.trackById=function(t,e){return r.spec&&r.spec.trackBy(e)},r}return Object(i.__extends)(e,t),Object.defineProperty(e.prototype,"ssRenderTemplates",{set:function(t){t.length>0&&(this.template=t.first)},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){if(!this.template)throw new Error('You must provide a <ng-template cardTemplate> as a content child, or with [template]="myTemplateRef"')},e.prototype.ngOnInit=function(){t.prototype.ngOnInit.call(this)},e.prototype.ngAfterViewInit=function(){t.prototype.ngAfterViewInit.call(this)},e.prototype.ngOnChanges=function(e){t.prototype.ngOnChanges.call(this,e)},e.prototype.ngOnDestroy=function(){t.prototype.ngOnDestroy.call(this)},e}(h);function g(t,e,n,i){var r=e.hover,s=(t.horizontal?i.x:i.y)<(t.horizontal?n.left:n.top)+(t.horizontal?n.width||n.right-n.left:n.height||n.bottom-n.top)/2;return t.listId===r.listId?t.index<r.index?s?t.index:t.index+1:s?t.index-1:t.index:s?t.index:t.index+1}function f(t){return t.index}var y=requestAnimationFrame||webkitRequestAnimationFrame||function(t){return setTimeout(t,0)},b=function(){function t(t,e){var n=this;this.dnd=t,this.el=e,this.subs=new s.a,this.sameIds=function(t,e){return t&&e.data&&n.spec.trackBy(t)===n.spec.trackBy(e.data)},this.target=this.dnd.dropTarget(null,{canDrop:function(){return!1},hover:function(t){n.hover(t)}},this.subs),this.source=this.dnd.dragSource(null,{canDrag:function(t){return n.getCanDrag(t)},isDragging:function(t){return n.isDragging(t.getItem())},beginDrag:function(t){var e=n.createItem();return n.spec&&n.spec.beginDrag&&y((function(){n.spec&&n.spec.beginDrag&&n.spec.beginDrag(e,t)})),e},endDrag:function(t){var e=t.getItem();e&&n.spec&&n.spec.endDrag&&n.spec.endDrag(e,t)}},this.subs),this.isDragging$=this.source.listen((function(t){return t.isDragging()}))}return Object.defineProperty(t.prototype,"data",{get:function(){return this.context.data},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this.context.spec&&this.context.spec.type},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"accepts",{get:function(){var t=this.context.spec;return t?Array.isArray(t.accepts)?t.accepts:t.accepts||t.type:[]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"listId",{get:function(){return this.context.listId},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"index",{get:function(){return this.context.index},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spec",{get:function(){return this.context.spec},enumerable:!0,configurable:!0}),t.prototype.createItem=function(){return{data:this.data,index:this.index,size:this.size(),type:this.type,isInternal:!0,listId:this.listId,hover:{index:this.index,listId:this.listId}}},t.prototype.getCanDrag=function(t){return!this.spec||!this.spec.canDrag||this.spec.canDrag(this.data,this.listId,t)},t.prototype.isDragging=function(t){return this.spec&&this.spec.isDragging?t&&this.spec.isDragging(this.data,t)||!1:t&&this.sameIds(this.data,t)||!1},t.prototype.hover=function(t){var e=t.getItem(),n=t.getClientOffset();if(null!=e&&null!=n&&(!this.isDragging(e)||this.index!==e.hover.index||this.listId!==e.hover.listId)){var r=e.hover,s=function(t){switch(t){case p.fixed:return f;default:return g}}(this.context.hoverTrigger)(this.context,e,this.rect(),n);if(s<0)throw new Error("@angular-skyhook/sortable: Cannot move a card to an index < 0.");if(s!==r.index||this.listId!==r.listId){if(e.hover={index:s,listId:this.listId},this.spec&&this.spec.canDrop&&!this.spec.canDrop(e,t))return;this.spec&&this.spec.hover&&this.spec.hover(Object(i.__assign)({},e),t)}}},t.prototype.rect=function(){if(!this.el)throw new Error("@angular-skyhook/sortable: [ssRender] expected to be attached to a real DOM element");return this.el.nativeElement.getBoundingClientRect()},t.prototype.size=function(){var t=this.rect();return new u(t.width||t.right-t.left,t.height||t.bottom-t.top)},t.prototype.ngOnInit=function(){this.target.setTypes(this.accepts),this.source.setType(this.type)},t.prototype.ngAfterViewInit=function(){this.el&&this.target.connectDropTarget(this.el.nativeElement)},t.prototype.ngOnChanges=function(){this.target.setTypes(this.accepts),this.source.setType(this.type)},t.prototype.ngOnDestroy=function(){this.subs.unsubscribe()},t}(),v=Symbol("EXTERNAL_LIST_ID"),D=function(){function t(t,e){var n=this;this.dnd=t,this.el=e,this.source=this.dnd.dragSource(null,{canDrag:function(t){return!n.spec||!n.spec.canDrag||n.spec.canDrag(void 0,void 0,t)},beginDrag:function(){if("function"!=typeof n.spec.createData)throw new Error("spec.createData must be a function");return{type:n.spec.type,data:n.spec.createData(),hover:{index:-1,listId:v},isInternal:!1,index:-1,listId:v,size:n.size()}},endDrag:function(t){var e=t.getItem();e&&n.spec&&n.spec.endDrag&&n.spec.endDrag(e,t)}})}return t.prototype.size=function(){var t=this.el.nativeElement.getBoundingClientRect();return new u(t.width||t.right-t.left,t.height||t.bottom-t.top)},t.prototype.ngOnChanges=function(){this.source.setType(this.spec.type)},t.prototype.ngOnDestroy=function(){this.source.unsubscribe()},t}(),m={BeginDrag:"BeginDrag",Hover:"Hover",Drop:"Drop",EndDrag:"EndDrag"},I=function(){return function(t,e){this.type=t,this.item=e,this.event=m.BeginDrag}}(),x=function(){return function(t,e){this.type=t,this.item=e,this.event=m.Hover}}(),w=function(){return function(t,e){this.type=t,this.item=e,this.event=m.Drop}}(),T=function(){return function(t,e){this.type=t,this.item=e,this.event=m.EndDrag}}(),O=function(){return function(t,e,n){var i=this;this.store=t,this.actionType=e,this.beginDrag=function(t,e){i.store.dispatch(new I(i.actionType,t))},this.hover=function(t,e){i.store.dispatch(new x(i.actionType,t))},this.drop=function(t,e){i.store.dispatch(new w(i.actionType,t))},this.endDrag=function(t,e){i.store.dispatch(new T(i.actionType,t))},void 0!==n.type&&(this.type=n.type),void 0!==n.accepts&&(this.accepts=n.accepts),void 0!==n.trackBy&&(this.trackBy=n.trackBy),void 0!==n.getList&&(this.getList=n.getList),void 0!==n.canDrag&&(this.canDrag=n.canDrag),void 0!==n.canDrop&&(this.canDrop=n.canDrop),void 0!==n.isDragging&&(this.isDragging=n.isDragging),void 0!==n.createData&&(this.createData=n.createData)}}(),k=Symbol("SPILLED_LIST_ID");function S(t,e,n){var r=function(t){return t?(t.hover={listId:k,index:-1},Object(i.__assign)({},t)):null},s=new o.a,u=t.dropTarget(e,{hover:function(t){if(t.canDrop()&&t.isOver({shallow:!0})){var e=r(t.getItem());s.next(e)}else s.next(null)},drop:n.drop&&function(t){var e=r(t.getItem());t.didDrop()||n.drop&&e&&n.drop(e)}||void 0}),p=s.pipe(Object(c.a)(),Object(a.a)((function(t){return!!t}))).subscribe((function(t){n.hover&&t&&n.hover(t)}));return u.add(p),u}var C=function(){return function(){}}()}}]);