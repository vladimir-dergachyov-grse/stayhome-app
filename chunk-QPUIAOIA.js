import{e as U}from"./chunk-5W5LBEIB.js";import{a as G,b as z,c as it,d as C}from"./chunk-KISKPCJ3.js";import{$ as F,$a as Ie,$d as Be,A as M,Ba as u,Bb as _,Ca as a,Cb as xe,Da as h,Db as H,Dc as Ee,Ea as le,Eb as N,Ec as Fe,F as X,Fa as ce,Fb as V,Fc as be,Ha as Z,Hb as T,Jb as L,Je as W,Ka as v,Kb as A,Ke,La as d,Lb as j,Le as k,Ma as de,Mb as Pe,Md as Le,Me as et,N as I,Na as K,Ne as tt,Ob as B,Pa as fe,Pb as Se,Qa as ge,Ra as he,Rd as Ae,Sa as ee,Ta as l,Ua as b,V as y,Va as ve,W as w,Wc as Oe,Wd as re,X as ae,Xa as _e,Ya as Te,Za as Ce,_ as E,_a as te,_d as je,ae as Re,ba as pe,bd as He,cb as ie,cd as Ne,db as oe,fe as We,gb as ne,ge as ke,hb as ye,he as Ge,i as se,ic as De,je as ze,ka as p,ke as Ue,la as c,le as $e,mb as x,n as P,ne as Qe,ob as we,oc as Me,p as S,pb as O,q as ue,re as qe,se as Je,ta as Y,va as f,vd as Ve,ve as Xe,w as D,wa as me,we as Ye,xa as s,ye as R,ze as Ze}from"./chunk-65IBRMVV.js";var ct=["*",[["input"]]],dt=["*","input"],ft=e=>({$implicit:e});function gt(e,t){if(e&1){let i=Z();u(0,"tui-svg",7),ie(1,"async"),v("click",function(){E(i);let n=d(3);return F(n.togglePasswordVisibility())}),a()}if(e&2){let i=t.polymorpheusOutlet,o=d().ngIf,n=ee(3),r=d(2);s("src",i)("tuiHint",o[0]&&o[1]&&n)("tuiHintAppearance",oe(1,4,r.computedAppearance$)||"")("tuiHintDirection",(r.hintOptions==null?null:r.hintOptions.direction)||"bottom-left")}}function ht(e,t){if(e&1&&l(0),e&2){let i=d().ngIf,o=d(2);ve(" ",o.isPasswordHidden?i[0]:i[1]," ")}}function vt(e,t){if(e&1&&(le(0),f(1,gt,2,6,"tui-svg",5)(2,ht,1,1,"ng-template",6,1,ne),ce()),e&2){let i=d(2);p(),s("polymorpheusOutlet",i.icon)("polymorpheusOutletContext",Ie(2,ft,i.size))}}function _t(e,t){if(e&1&&(f(0,vt,4,4,"ng-container",4),ie(1,"async")),e&2){let i=d();s("ngIf",oe(1,1,i.passwordTexts$))}}var Tt={icons:{hide:({$implicit:e})=>e==="s"?"tuiIconEyeOff":"tuiIconEyeOffLarge",show:({$implicit:e})=>e==="s"?"tuiIconEye":"tuiIconEyeLarge"}},Ct=De(Tt);var Q=(()=>{class e extends He{constructor(i,o,n,r,m,pt,mt){var J;super(i,o),this.textfieldSize=n,this.passwordTexts$=r,this.options=m,this.hintOptions=pt,this.mode$=mt,this.directive$=((J=this.hintOptions)===null||J===void 0?void 0:J.change$)||se,this.isPasswordHidden=!0,this.computedAppearance$=ue([this.mode$.pipe(S(g=>g==="onDark"?"onDark":"")),this.directive$.pipe(X(null),S(()=>{var g;return((g=this.hintOptions)===null||g===void 0?void 0:g.appearance)||""}))]).pipe(S(([g,lt])=>lt||g),X(""))}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){var i;return!!(!((i=this.textfield)===null||i===void 0)&&i.focused)}get icon(){return this.isPasswordHidden?this.options.icons.hide:this.options.icons.show}get inputType(){return this.isPasswordHidden||!this.interactive?"password":"text"}onValueChange(i){this.value=i}onFocused(i){this.updateFocused(i)}togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden}getFallbackValue(){return""}}return e.\u0275fac=function(i){return new(i||e)(c(xe,10),c(ye),c(qe),c(tt),c(Ct),c(We,8),c(Le))},e.\u0275cmp=y({type:e,selectors:[["tui-input-password"]],viewQuery:function(i,o){if(i&1&&fe(W,5),i&2){let n;ge(n=he())&&(o.textfield=n.first)}},hostVars:1,hostBindings:function(i,o){i&2&&me("data-size",o.size)},features:[te([Oe(e),Ne(e),Re]),Y],ngContentSelectors:dt,decls:5,vars:11,consts:[["iconContent","polymorpheus"],["hintContent","polymorpheus"],[1,"t-textfield",3,"valueChange","focusedChange","disabled","focusable","invalid","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldIcon","value"],[3,"polymorpheus"],[4,"ngIf"],["appearance","icon","automation-id","tui-password__icon","tuiWrapper","","class","t-icon",3,"src","tuiHint","tuiHintAppearance","tuiHintDirection","click",4,"polymorpheusOutlet","polymorpheusOutletContext"],["polymorpheus",""],["appearance","icon","automation-id","tui-password__icon","tuiWrapper","",1,"t-icon",3,"click","src","tuiHint","tuiHintAppearance","tuiHintDirection"]],template:function(i,o){if(i&1){let n=Z();de(ct),u(0,"tui-primitive-textfield",2),Ce("valueChange",function(m){return E(n),Te(o.value,m)||(o.value=m),F(m)}),v("focusedChange",function(m){return E(n),F(o.onFocused(m))}),K(1),K(2,1,["ngProjectAs","input",5,["input"]]),a(),f(3,_t,2,3,"ng-template",3,0,ne)}if(i&2){let n=ee(4);s("disabled",o.computedDisabled)("focusable",o.focusable)("invalid",o.computedInvalid)("nativeId",o.nativeId)("pseudoActive",o.pseudoActive)("pseudoFocus",o.pseudoFocus)("pseudoHover",o.pseudoHover)("readOnly",o.readOnly)("tuiTextfieldIcon",o.interactive?n:""),_e("value",o.value),p(3),s("polymorpheus",o.type)}},dependencies:[W,je,Ke,Qe,Ee,x,Fe,Xe,ke,Ue,Ge,ze,we],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),e})(),q=(()=>{class e extends Ve{onValueChange(i){this.host.onValueChange(i)}process(i){this.input=i}ngDoCheck(){this.host.nativeFocusableElement&&Me(this.host.nativeFocusableElement)&&(this.host.nativeFocusableElement.type=this.host.inputType)}}return e.\u0275fac=(()=>{let t;return function(o){return(t||(t=pe(e)))(o||e)}})(),e.\u0275dir=ae({type:e,selectors:[["tui-input-password"]],features:[te([Ae(e)]),Y]}),e})(),rt=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=w({type:e}),e.\u0275inj=I({imports:[[O,B,be,Ye,Be,$e,et,Je]]}),e})();function xt(e,t){if(e&1&&(u(0,"p",8),l(1),a()),e&2){let i=d();p(),b(i.errorMessage)}}var st=(()=>{let t=class t{constructor(o){this.auth=o,this.form=new V({name:new T("",C([_.minLength(2)])),email:new T("",C([_.email])),password:new T("",C([_.minLength(8)]))}),this.isLoading=!1}onSubmit(){if(this.isLoading)return;let{name:o,email:n,password:r}=this.form.getRawValue();this.isLoading=!0,this.auth.singUp(o,n,r).pipe(D(m=>(m instanceof Error?this.errorMessage=m.message:this.errorMessage=JSON.stringify(m),P())),M(()=>this.isLoading=!1)).subscribe()}};t.\u0275fac=function(n){return new(n||t)(c(U))},t.\u0275cmp=y({type:t,selectors:[["app-login-signup"]],decls:13,vars:6,consts:[[1,"login-form",3,"ngSubmit","formGroup"],[3,"formControl","minlength"],["tuiTextfield","","type","text"],[3,"formControl"],["tuiTextfield","","autocomplete","email","type","email"],["tuiTextfield",""],["tuiButton","","type","submit"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(n,r){n&1&&(u(0,"form",0),v("ngSubmit",function(){return r.onSubmit()}),u(1,"tui-input",1),l(2," \u0418\u043C\u044F "),h(3,"input",2),a(),u(4,"tui-input",3),l(5," E-mail "),h(6,"input",4),a(),u(7,"tui-input-password",3),l(8," \u041F\u0430\u0440\u043E\u043B\u044C "),h(9,"input",5),a(),u(10,"button",6),l(11,"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438 \u0432\u043E\u0439\u0442\u0438"),a(),f(12,xt,2,1,"p",7),a()),n&2&&(s("formGroup",r.form),p(),s("formControl",r.form.controls.name)("minlength",2),p(3),s("formControl",r.form.controls.email),p(3),s("formControl",r.form.controls.password),p(5),s("ngIf",r.errorMessage))},dependencies:[x,L,H,N,Pe,A,j,R,G,z,k,Q,q]});let e=t;return e})();function Pt(e,t){if(e&1&&(u(0,"p",6),l(1),a()),e&2){let i=d();p(),b(i.errorMessage)}}var ut=(()=>{let t=class t{constructor(o){this.auth=o,this.form=new V({email:new T("",C([_.email])),password:new T("",C([_.minLength(8)]))}),this.isLoading=!1}onSubmit(){if(this.isLoading)return;let{email:o,password:n}=this.form.getRawValue();this.isLoading=!0,this.auth.signIn(o,n).pipe(D(r=>(r instanceof Error?this.errorMessage=r.message:this.errorMessage=JSON.stringify(r),P())),M(()=>this.isLoading=!1)).subscribe()}};t.\u0275fac=function(n){return new(n||t)(c(U))},t.\u0275cmp=y({type:t,selectors:[["app-login-signin"]],decls:10,vars:4,consts:[[1,"login-form",3,"ngSubmit","formGroup"],[3,"formControl"],["tuiTextfield","","autocomplete","email","type","email"],["tuiTextfield",""],["tuiButton","","type","submit"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(n,r){n&1&&(u(0,"form",0),v("ngSubmit",function(){return r.onSubmit()}),u(1,"tui-input",1),l(2," E-mail "),h(3,"input",2),a(),u(4,"tui-input-password",1),l(5," \u041F\u0430\u0440\u043E\u043B\u044C "),h(6,"input",3),a(),u(7,"button",4),l(8,"\u0412\u043E\u0439\u0442\u0438"),a(),f(9,Pt,2,1,"p",5),a()),n&2&&(s("formGroup",r.form),p(),s("formControl",r.form.controls.email),p(3),s("formControl",r.form.controls.password),p(5),s("ngIf",r.errorMessage))},dependencies:[x,L,H,N,A,j,R,G,z,k,Q,q]});let e=t;return e})();var St=[{path:"signin",component:ut},{path:"signup",component:st},{path:"**",redirectTo:"/"}],at=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=I({imports:[re.forChild(St),re]});let e=t;return e})();var hi=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=I({imports:[O,at,B,Se,Ze,it,rt]});let e=t;return e})();export{hi as LoginModule};