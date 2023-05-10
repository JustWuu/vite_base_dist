import{k as Q,l as $,m as pe,n as fe,s as oe,p as He,q as J,v as je,x as qe,y as Ce,i as Ke,z as We,A as Ve,B as Xe,E as me,C as Ge,D as Ye,F as Je,G as Qe,H as Ze,I as et,J as tt,K as nt,L as rt,M as ie,N as st,O as ot,P as at,Q as it,R as ut,S as ge,T as ct,U as lt,V as dt,W as ht}from"./index.e72bd00b.js";const z=Q(),ye=$(Q());class Z{constructor(e){this.child=e}async get(e){return await pe(fe(ye,`${this.child}/`+e)).then(n=>{if(n.exists())return console.log(`${this.child} database get ok`),n.val();throw"\u67E5\u7121\u8CC7\u6599"}).catch(n=>{throw n})}async array(e){return await pe(fe(ye,`${this.child}/${e}`)).then(n=>{if(n.exists())return console.log(`${this.child} database get array ok`),n.val();throw"\u67E5\u7121\u8CC7\u6599"}).catch(n=>{throw n})}async set(e,n){await oe($(z,`${this.child}/`+e),n).then(()=>{console.log(`${this.child} database set ok`)}).catch(r=>{throw r})}async keySet(e,n=""){const r=He($(z,`${this.child}/`)).key;return await oe($(z,`${this.child}/${n}/`+r),e).then(()=>(console.log(`${this.child} database keySet ok`),r)).catch(s=>{throw s})}async update(e,n){await J($(z,`${this.child}/`+e),n).then(()=>{console.log(`${this.child} database update ok`)}).catch(r=>{throw r})}async remove(e){await je($(z,`${this.child}/`+e)).then(()=>{console.log(`${this.child} database remove ok`)}).catch(n=>{throw n})}onValue(e,n){console.log(`database onValue: ${this.child}/${e} start`),qe($(z,`${this.child}/`+e),r=>{console.log(`database onValue: ${this.child}/${e} update`),n(r.val())})}}class pt extends Z{constructor(){super("images")}}const V=Q(),we=Ce();let d,x={displayName:"",email:"",emailVerified:"",isAnonymous:"",phoneNumber:"",photoURL:"",uid:"",metadata:null,state:"",newPhoneNumber:""},H={displayName:"",photoURL:"",uid:"",level:"",info:""};class ue extends Z{constructor(){super("user")}async createUserProfile(){let e=new Date;d=we.currentUser,x={displayName:d.displayName,email:d.email,emailVerified:d.emailVerified,isAnonymous:d.isAnonymous,phoneNumber:d.phoneNumber,photoURL:d.photoURL,uid:d.uid,metadata:d.metadata,state:"using",updateAt:e.getTime(),level:1,physicalPower:10,skillPoints:1,experience:0,maxExperience:100,healthPoints:20,maxHealthPoints:20,manaPoint:10,maxManaPoint:10,info:""},H={displayName:d.displayName,photoURL:d.photoURL,uid:d.uid,level:1,info:""},oe($(V,`${this.child}/${x.uid}/profile`),x),J($(V,`${this.child}/${x.uid}/publicProfile`),H)}async updateUserProfile(e){let n=new Date;d=we.currentUser,x={...e,displayName:d.displayName,email:d.email,emailVerified:d.emailVerified,isAnonymous:d.isAnonymous,phoneNumber:d.phoneNumber,photoURL:d.photoURL,uid:d.uid,state:"using",updateAt:n.getTime()},e?H={displayName:d.displayName,photoURL:d.photoURL,uid:d.uid,level:e.level,info:e.info}:H={displayName:d.displayName,photoURL:d.photoURL,uid:d.uid},J($(V,`${this.child}/${x.uid}/profile`),x),J($(V,`${this.child}/${x.uid}/publicProfile`),H)}}Q();class ft extends Z{constructor(){super("message")}}class mt extends Z{constructor(){super("forum")}}const j=new ue,E=Ke(),b=Ce();let h=b.currentUser;const U={"auth/user-not-found":"\u627E\u4E0D\u5230\u8A72\u96FB\u5B50\u90F5\u4EF6","auth/email-already-in-use":"\u8A72\u96FB\u5B50\u90F5\u4EF6\u5DF2\u5728\u4F7F\u7528\u4E2D","auth/invalid-email":"\u7121\u6548\u7684\u96FB\u5B50\u90F5\u4EF6","auth/wrong-password":"\u5BC6\u78BC\u932F\u8AA4","auth/weak-password":"\u5BC6\u78BC\u8907\u96DC\u5EA6\u904E\u4F4E","auth/too-many-requests":"\u8207\u5148\u524D\u767C\u9001\u9593\u9694\u904E\u77ED","auth/missing-email":"\u8ACB\u8F38\u5165\u4FE1\u7BB1","auth/user-not-7":"\u627E\u4E0D\u5230\u8A72\u5E33\u865F"};class ce{constructor(){}async createUser(e,n){return await We(b,e,n).then(r=>(h=r.user,console.log(`${h.email} create OK`),j.createUserProfile(),r.user)).catch(r=>{const s=r.code;throw console.log(s),U[`${s}`]})}async signIn(e,n){return await Ve(b,e,n).then(r=>(h=r,r.user)).catch(r=>{const s=r.code;throw U[`${s}`]})}async signOut(){return await Xe(b).then(()=>{}).catch(e=>e.message)}async reauthenticate(e){h=b.currentUser;const n=me.credential(h.email,e);return await Ge(h,n).then(r=>(console.log(`${h.email} reauthenticate OK`),r.user)).catch(r=>{const s=r.code;throw U[`${s}`]})}async updatePassword(e){return h=b.currentUser,await Ye(h,e).then(()=>(console.log(`${h.email} updatePassword OK`),!0)).catch(n=>{const r=n.code;throw U[`${r}`]})}async update(e,n){return h=b.currentUser,await Je(h,e).then(()=>(E.user=null,E.user=h,E.user.displayName===null&&(E.user.displayName=E.user.email),console.log(`${h.email} update OK`),j.updateUserProfile(n),!0)).catch(r=>{const s=r.code;throw U[`${s}`]})}async deleteUser(){const e=new Date;h=b.currentUser;const n=h.uid;return await Qe(h).then(()=>(j.update(`${n}/profile`,{state:"delete",updateAt:e}),!0)).catch(r=>{const s=r.code;throw U[`${s}`]})}async sendEmail(){return h=b.currentUser,await Ze(h).then(()=>(console.log(`${h.email} send email OK`),!0)).catch(e=>{const n=e.code;throw U[`${n}`]})}async sendPassword(e){return await et(b,e).then(()=>(console.log(`${e} send password OK`),!0)).catch(n=>{const r=n.code;throw U[`${r}`]})}async signInAnonymously(){return await tt(b).then(e=>(j.createUserProfile(),e.user)).catch(e=>{const n=e.code;throw U[`${n}`]})}async anonymouslyRegister(e,n){const r=me.credential(e,n);return h=b.currentUser,await nt(h,r).then(s=>(E.user=null,E.user=h,console.log(`${h.email} anonymous account upgraded OK`),j.updateUserProfile(),s.user)).catch(s=>{const o=s.code;throw U[`${o}`]})}getUser(){return rt(E)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="firebasestorage.googleapis.com",xe="storageBucket",gt=2*60*1e3,yt=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m extends dt{constructor(e,n,r=0){super(ne(e),`Firebase Storage: ${n} (${ne(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,m.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ne(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ne(t){return"storage/"+t}function le(){const t="An unknown error occurred, please check the error payload for server response.";return new m("unknown",t)}function wt(t){return new m("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _t(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new m("unauthenticated",t)}function bt(){return new m("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function $t(t){return new m("unauthorized","User does not have permission to access '"+t+"'.")}function vt(){return new m("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function kt(){return new m("canceled","User canceled the upload/download.")}function Rt(t){return new m("invalid-url","Invalid URL '"+t+"'.")}function Ut(t){return new m("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Pt(){return new m("no-default-bucket","No default bucket found. Did you set the '"+xe+"' property when initializing the app?")}function Tt(){return new m("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function At(t){return new m("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ae(t){return new m("invalid-argument",t)}function Ee(){return new m("app-deleted","The Firebase app was deleted.")}function Ct(t){return new m("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function K(t,e){return new m("invalid-format","String does not match format '"+t+"': "+e)}function q(t){throw new m("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_.makeFromUrl(e,n)}catch{return new _(e,"")}if(r.path==="")return r;throw Ut(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function p(w){w.path_=decodeURIComponent(w.path)}const v="v[A-Za-z0-9_]+",A=n.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",C=new RegExp(`^https?://${A}/${v}/b/${s}/o${k}`,"i"),S={bucket:1,path:3},F=n===Se?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",D=new RegExp(`^https?://${F}/${s}/${y}`,"i"),R=[{regex:l,indices:u,postModify:o},{regex:C,indices:S,postModify:p},{regex:D,indices:{bucket:1,path:2},postModify:p}];for(let w=0;w<R.length;w++){const W=R[w],ee=W.regex.exec(e);if(ee){const ze=ee[W.indices.bucket];let te=ee[W.indices.path];te||(te=""),r=new _(ze,te),W.postModify(r);break}}if(r==null)throw Rt(e);return r}}class St{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e,n){let r=1,s=null,o=null,a=!1,l=0;function u(){return l===2}let p=!1;function v(...y){p||(p=!0,e.apply(null,y))}function A(y){s=setTimeout(()=>{s=null,t(C,u())},y)}function k(){o&&clearTimeout(o)}function C(y,...D){if(p){k();return}if(y){k(),v.call(null,y,...D);return}if(u()||a){k(),v.call(null,y,...D);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,A(R)}let S=!1;function F(y){S||(S=!0,k(),!p&&(s!==null?(y||(l=2),clearTimeout(s),A(0)):y||(l=1)))}return A(0),o=setTimeout(()=>{a=!0,F(!0)},n),F}function Et(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t!==void 0}function Mt(t){return typeof t=="object"&&!Array.isArray(t)}function Oe(t){return typeof t=="string"||t instanceof String}function _e(t){return de()&&t instanceof Blob}function de(){return typeof Blob<"u"&&!ht()}function be(t,e,n,r){if(r<e)throw ae(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ae(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Nt(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(L||(L={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,r,s,o,a,l,u,p,v,A,k=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=p,this.progressCallback_=v,this.connectionFactory_=A,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,S)=>{this.resolve_=C,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new X(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const u=l.loaded,p=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,p)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===L.NO_ERROR,u=o.getStatus();if((!l||Lt(u,this.additionalRetryCodes_))&&this.retry){const v=o.getErrorCode()===L.ABORT;r(!1,new X(!1,null,v));return}const p=this.successCodes_.indexOf(u)!==-1;r(!0,new X(p,o))})},n=(r,s)=>{const o=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Ot(u)?o(u):o()}catch(u){a(u)}else if(l!==null){const u=le();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?Ee():kt();a(u)}else{const u=vt();a(u)}};this.canceled_?n(!1,new X(!1,null,!0)):this.backoffId_=xt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Et(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class X{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Ft(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Dt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function zt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ht(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jt(t,e,n,r,s,o,a=!0){const l=Nt(t.urlParams),u=t.url+l,p=Object.assign({},t.headers);return zt(p,e),Ft(p,n),Dt(p,o),Ht(p,r),new Bt(u,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Kt(...t){const e=qt();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(de())return new Blob(t);throw new m("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Wt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){if(typeof atob>"u")throw At("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class re{constructor(e,n){this.data=e,this.contentType=n||null}}function Xt(t,e){switch(t){case T.RAW:return new re(Me(e));case T.BASE64:case T.BASE64URL:return new re(Ie(t,e));case T.DATA_URL:return new re(Yt(e),Jt(e))}throw le()}function Me(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,a=t.charCodeAt(++n);r=65536|(o&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Gt(t){let e;try{e=decodeURIComponent(t)}catch{throw K(T.DATA_URL,"Malformed data URL.")}return Me(e)}function Ie(t,e){switch(t){case T.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw K(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case T.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw K(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Vt(e)}catch(s){throw s.message.includes("polyfill")?s:K(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ne{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw K(T.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Qt(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Yt(t){const e=new Ne(t);return e.base64?Ie(T.BASE64,e.rest):Gt(e.rest)}function Jt(t){return new Ne(t).contentType}function Qt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,n){let r=0,s="";_e(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(_e(this.data_)){const r=this.data_,s=Wt(r,e,n);return s===null?null:new M(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new M(r,!0)}}static getBlob(...e){if(de()){const n=e.map(r=>r instanceof M?r.data_:r);return new M(Kt.apply(null,n))}else{const n=e.map(a=>Oe(a)?Xt(T.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(a=>{for(let l=0;l<a.length;l++)s[o++]=a[l]}),new M(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t){let e;try{e=JSON.parse(t)}catch{return null}return Mt(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tn(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Le(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,e){return e}class g{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||nn}}let G=null;function rn(t){return!Oe(t)||t.length<2?t:Le(t)}function sn(){if(G)return G;const t=[];t.push(new g("bucket")),t.push(new g("generation")),t.push(new g("metageneration")),t.push(new g("name","fullPath",!0));function e(o,a){return rn(a)}const n=new g("name");n.xform=e,t.push(n);function r(o,a){return a!==void 0?Number(a):a}const s=new g("size");return s.xform=r,t.push(s),t.push(new g("timeCreated")),t.push(new g("updated")),t.push(new g("md5Hash",null,!0)),t.push(new g("cacheControl",null,!0)),t.push(new g("contentDisposition",null,!0)),t.push(new g("contentEncoding",null,!0)),t.push(new g("contentLanguage",null,!0)),t.push(new g("contentType",null,!0)),t.push(new g("metadata","customMetadata",!0)),G=t,G}function on(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new _(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function an(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const a=n[o];r[a.local]=a.xform(r,e[a.server])}return on(r,t),r}function un(t,e,n){const r=Zt(e);return r===null?null:an(t,r,n)}function cn(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class ln{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){if(!t)throw le()}function hn(t,e){function n(r,s){const o=un(t,s,e);return dn(o!==null),o}return n}function pn(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=bt():s=_t():n.getStatus()===402?s=wt(t.bucket):n.getStatus()===403?s=$t(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function fn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function mn(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=fn(null,e)),r}function gn(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let R="";for(let w=0;w<2;w++)R=R+Math.random().toString().slice(2);return R}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const p=mn(e,r,s),v=cn(p,n),A="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+u+`\r
Content-Type: `+p.contentType+`\r
\r
`,k=`\r
--`+u+"--",C=M.getBlob(A,r,k);if(C===null)throw Tt();const S={name:p.fullPath},F=It(o,t.host,t._protocol),y="POST",D=t.maxUploadRetryTime,I=new ln(F,y,hn(t,n),D);return I.urlParams=S,I.headers=a,I.body=C.uploadData(),I.errorHandler=pn(e),I}class yn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw q("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw q("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw q("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw q("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw q("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wn extends yn{initXhr(){this.xhr_.responseType="text"}}function _n(){return new wn}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){this._service=e,n instanceof _?this._location=n:this._location=_.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new B(e,n)}get root(){const e=new _(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Le(this._location.path)}get storage(){return this._service}get parent(){const e=en(this._location.path);if(e===null)return null;const n=new _(this._location.bucket,e);return new B(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ct(e)}}function bn(t,e,n){t._throwIfRoot("uploadBytes");const r=gn(t.storage,t._location,sn(),new M(e,!0),n);return t.storage.makeRequestWithTokens(r,_n).then(s=>({metadata:s,ref:t}))}function $n(t,e){const n=tn(t._location.path,e),r=new _(t._location.bucket,n);return new B(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){return/^[A-Za-z]+:\/\//.test(t)}function kn(t,e){return new B(t,e)}function Be(t,e){if(t instanceof he){const n=t;if(n._bucket==null)throw Pt();const r=new B(n,n._bucket);return e!=null?Be(r,e):r}else return e!==void 0?$n(t,e):t}function Rn(t,e){if(e&&vn(e)){if(t instanceof he)return kn(t,e);throw ae("To use ref(service, url), the first argument must be a Storage instance.")}else return Be(t,e)}function $e(t,e){const n=e==null?void 0:e[xe];return n==null?null:_.makeFromBucketSpec(n,t)}function Un(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:ct(s,t.app.options.projectId))}class he{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Se,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gt,this._maxUploadRetryTime=yt,this._requests=new Set,s!=null?this._bucket=_.makeFromBucketSpec(s,this._host):this._bucket=$e(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_.makeFromBucketSpec(this._url,e):this._bucket=$e(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){be("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){be("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new B(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new St(Ee());{const a=jt(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ve="@firebase/storage",ke="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="storage";function Re(t,e,n){return t=ie(t),bn(t,e,n)}function Ue(t,e){return t=ie(t),Rn(t,e)}function Pn(t=at(),e){t=ie(t);const r=st(t,Fe).getImmediate({identifier:e}),s=ot("storage");return s&&Tn(r,...s),r}function Tn(t,e,n,r={}){Un(t,e,n,r)}function An(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new he(n,r,s,e,lt)}function Cn(){it(new ut(Fe,An,"PUBLIC").setMultipleInstances(!0)),ge(ve,ke,""),ge(ve,ke,"esm2017")}Cn();const Pe=new pt,Te=new ue,Ae=Pn(),De=new ce,{user:Y}=De.getUser();class On{constructor(){}async upload(e){const n=Ue(Ae,`images/${e.name}`);return await Re(n,e).then(r=>{console.log(r.metadata.name,"Uploaded a blob or file!");const s={url:`https://firebasestorage.googleapis.com/v0/b/mygame-xian.appspot.com/o/images%2F${r.metadata.name}?alt=media&token=b80d3559-f423-4e68-b07c-96f2ffb2b5b2`,name:r.metadata.name,type:r.metadata.contentType,size:r.metadata.size,fullPath:r.metadata.fullPath,created:r.metadata.timeCreated,uploader:Y.value.uid};return Pe.keySet(s).then(o=>{Te.set(`${Y.value.uid}/images/${o}`,{name:s.name})}),!0}).catch(r=>{throw r})}async uploadProfilePhoto(e){const n=Ue(Ae,`images/${e.name}`);await Re(n,e).then(r=>{console.log(r.metadata.name,"Uploaded a blob or file!");const s={url:`https://firebasestorage.googleapis.com/v0/b/mygame-xian.appspot.com/o/images%2F${r.metadata.name}?alt=media&token=b80d3559-f423-4e68-b07c-96f2ffb2b5b2`,name:r.metadata.name,type:r.metadata.contentType,size:r.metadata.size,fullPath:r.metadata.fullPath,created:r.metadata.timeCreated,uploader:Y.value.uid};Pe.keySet(s).then(o=>{Te.set(`${Y.value.uid}/images/${o}`,{name:s.name}),De.update({photoURL:s.url})})}).catch(r=>{throw r})}}const se=new ft,c=new ue,Sn=new ce;let f;const{user:i}=Sn.getUser();class Mn{constructor(){}async sendMail(e){let n=new Date;return f={fromUid:i.value.uid,date:n.getTime(),...e},await c.get(`${e.toUid}/publicProfile`).then(()=>{se.keySet(f).then(r=>(console.log(`send to ${e.toUid} ok`),c.set(`${e.toUid}/notCheckedMessage/private/${r}`,{mailKey:r,title:f.title,fromUid:f.fromUid,date:f.date}),!0)).catch(r=>{throw r})}).catch(r=>{throw r})}async sendSystemMail(e){return f={fromUid:"\u7CFB\u7D71",date:new Date().getTime(),...e},await se.keySet(f).then(r=>{c.set(`${i.value.uid}/notCheckedMessage/system/${r}`,{mailKey:r,title:f.title,fromUid:f.fromUid,date:f.date})})}async getPrivateMail(){return await c.array(`${i.value.uid}/notCheckedMessage/private`).then(e=>(e&&(c.remove(`${i.value.uid}/notCheckedMessage/private`),c.update(`${i.value.uid}/message/private/`,e)),c.array(`${i.value.uid}/message/private`).then(n=>n))).catch(e=>c.array(`${i.value.uid}/message/private`).then(n=>n))}async getSystemMail(){return await c.array(`${i.value.uid}/notCheckedMessage/system`).then(e=>(e&&(c.remove(`${i.value.uid}/notCheckedMessage/system`),c.update(`${i.value.uid}/message/system/`,e)),c.array(`${i.value.uid}/message/system`).then(n=>n))).catch(e=>c.array(`${i.value.uid}/message/system`).then(n=>n))}async getMail(e){return await se.get(e).then(n=>n)}async apply(e){let n=new Date;return f={fromUid:i.value.uid,date:n.getTime(),...e},await c.get(`${e.toUid}/publicProfile`).then(()=>c.get(`${i.value.uid}/friends/${e.toUid}`).then(()=>["showError","\u5DF2\u5728\u597D\u53CB\u540D\u55AE"]).catch(()=>e.toUid==i.value.uid?["showError","\u4E0D\u53EF\u65B0\u589E\u81EA\u5DF1\u70BA\u597D\u53CB"]:(c.set(`${e.toUid}/friendsApply/${i.value.uid}`,{uid:f.fromUid,date:f.date,photoURL:i.value.photoURL}),this.sendMail({title:`${i.value.uid} \u5411\u4F60\u7533\u8ACB\u70BA\u597D\u53CB`,...e}),["showSuccess","\u7533\u8ACB\u597D\u53CB\u6210\u529F"]))).catch(()=>{throw"\u67E5\u7121\u6B64\u4EBA"})}async accept(e){return f={date:new Date().getTime(),toUid:e,title:`${i.value.uid} \u63A5\u53D7\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,content:`${i.value.uid} \u5DF2\u63A5\u53D7\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,type:"private"},await c.get(`${i.value.uid}/friendsApply/${e}`).then(r=>(c.remove(`${i.value.uid}/friendsApply/${e}`),c.update(`${i.value.uid}/friends/${e}`,r),c.update(`${e}/friends/${i.value.uid}`,{date:f.date,photoURL:i.value.photoURL,uid:i.value.uid}),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u7533\u8ACB"})}async reject(e){return f={date:new Date().getTime(),toUid:e,title:"\u62D2\u7D55\u4F60\u7684\u597D\u53CB\u7533\u8ACB",content:`${i.value.uid} \u62D2\u7D55\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,type:"private"},await c.get(`${i.value.uid}/friendsApply/${e}`).then(r=>(c.remove(`${i.value.uid}/friendsApply/${e}`),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u7533\u8ACB"})}async deleteFriends(e){return f={date:new Date().getTime(),toUid:e,title:`${i.value.uid} \u89E3\u9664\u8207\u4F60\u7684\u597D\u53CB\u95DC\u4FC2`,content:`${i.value.uid} \u5DF2\u5F9E\u597D\u53CB\u540D\u55AE\u522A\u9664\u4F60`,type:"private"},await c.get(`${i.value.uid}/friends/${e}`).then(r=>(c.remove(`${i.value.uid}/friends/${e}`),c.remove(`${e}/friends/${i.value.uid}`),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u597D\u53CB"})}async editFriends(e,n){return await c.get(`${i.value.uid}/friends/${e}`).then(r=>(c.update(`${i.value.uid}/friends/${e}`,{name:n}),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u597D\u53CB"})}async getFriendsApply(){return await c.array(`${i.value.uid}/friendsApply`).then(e=>e).catch(e=>{throw e})}async getFriends(){return await c.array(`${i.value.uid}/friends`).then(e=>e).catch(e=>{throw e})}async getProfileFriends(e){return await c.get(`${e}/publicProfile`).then(n=>n).catch(n=>{throw n})}}const O=new mt,xn=new ce;let N;const{user:P}=xn.getUser();class In{constructor(){}async published(e){if(e.area==""||e.content==""||e.theme=="")throw["showError","\u8ACB\u586B\u59A5\u5167\u5BB9"];if(P.value.isAnonymous)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u9032\u884C\u4FE1\u7BB1\u8A3B\u518A"];if(P.value.displayName==null)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u8A2D\u5B9A\u540D\u7A31"];let n=new Date;return N={author:{fromUid:P.value.uid,displayName:P.value.displayName,photoURL:P.value.photoURL},date:n.getTime(),...e},await O.keySet(N,N.area.type).then(r=>(O.update(`all/${r}/`,{id:r,area:N.area.type}),O.update(`${N.area.type}/${r}/`,{id:r}),["showSuccess","\u767C\u5E03\u6210\u529F"])).catch(()=>{throw["showError","\u767C\u5E03\u5931\u6557"]})}async getAreaArticle(e){return await O.array(e).then(n=>n).catch(n=>{throw n})}async getArticle(e){return await O.get(`all/${e}`).then(n=>O.get(`${n.area}/${n.id}`).then(r=>r).catch(r=>{throw r})).catch(n=>{throw n})}async reply(e,n){if(n.content=="")throw["showError","\u8ACB\u586B\u59A5\u5167\u5BB9"];if(P.value.isAnonymous)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u9032\u884C\u4FE1\u7BB1\u8A3B\u518A"];if(P.value.displayName==null)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u8A2D\u5B9A\u540D\u7A31"];let r=new Date;return N={author:{fromUid:P.value.uid,displayName:P.value.displayName,photoURL:P.value.photoURL},date:r.getTime(),...n},await O.get(`all/${e}`).then(s=>O.keySet(N,`${s.area}/${s.id}/reply`).then(()=>["showSuccess","\u767C\u5E03\u6210\u529F"]).catch(()=>{throw["showError","\u767C\u5E03\u5931\u6557"]})).catch(()=>{throw["showError","\u767C\u5E03\u5931\u6557"]})}}export{ce as A,In as F,Mn as M,On as S,ue as U};
