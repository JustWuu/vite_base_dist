import{m as G,n as $,p as ce,q as le,s as te,x as Fe,y as X,z as De,A as ze,B as Ue,l as He,C as je,D as qe,E as Ke,G as de,H as We,I as Ve,J as Xe,K as Ge,L as Ye,M as Je,N as Ze,O as Qe,P as et,Q as re,_ as tt,R as nt,S as rt,T as st,U as ot,V as he,W as at,X as it,Y as ut,Z as ct}from"./index.e0ef0c6a.js";const N=G(),pe=$(G());class se{constructor(e){this.child=e}async get(e){return await ce(le(pe,`${this.child}/`+e)).then(n=>{if(n.exists())return console.log(`${this.child} database get ok`),n.val();throw"\u67E5\u7121\u8CC7\u6599"}).catch(n=>{throw n})}async array(e){return await ce(le(pe,`${this.child}/${e}`)).then(n=>{if(n.exists())return console.log(`${this.child} database get array ok`),n.val();throw"\u67E5\u7121\u8CC7\u6599"}).catch(n=>{throw n})}async set(e,n){await te($(N,`${this.child}/`+e),n).then(()=>{console.log(`${this.child} database set ok`)}).catch(r=>{throw r})}async keySet(e){const n=Fe($(N,`${this.child}/`)).key;return await te($(N,`${this.child}/`+n),e).then(()=>(console.log(`${this.child} database keySet ok`),n)).catch(r=>{throw r})}async update(e,n){await X($(N,`${this.child}/`+e),n).then(()=>{console.log(`${this.child} database update ok`)}).catch(r=>{throw r})}async remove(e){await De($(N,`${this.child}/`+e)).then(()=>{console.log(`${this.child} database remove ok`)}).catch(n=>{throw n})}onValue(e,n){console.log(`database onValue: ${this.child}/${e} start`),ze($(N,`${this.child}/`+e),r=>{console.log(`database onValue: ${this.child}/${e} update`),n(r.val())})}}class lt extends se{constructor(){super("images")}}const q=G(),fe=Ue();let d,S={displayName:"",email:"",emailVerified:"",isAnonymous:"",phoneNumber:"",photoURL:"",uid:"",metadata:null,state:"",newPhoneNumber:""},F={displayName:"",photoURL:"",uid:"",level:"",info:""};class oe extends se{constructor(){super("user")}async createUserProfile(){let e=new Date;d=fe.currentUser,S={displayName:d.displayName,email:d.email,emailVerified:d.emailVerified,isAnonymous:d.isAnonymous,phoneNumber:d.phoneNumber,photoURL:d.photoURL,uid:d.uid,metadata:d.metadata,state:"using",updateAt:e.getTime(),level:1,physicalPower:10,skillPoints:1,experience:0,maxExperience:100,healthPoints:20,maxHealthPoints:20,manaPoint:10,maxManaPoint:10,info:""},F={displayName:d.displayName,photoURL:d.photoURL,uid:d.uid,level:1,info:""},te($(q,`${this.child}/${S.uid}/profile`),S),X($(q,`${this.child}/${S.uid}/publicProfile`),F)}async updateUserProfile(e){let n=new Date;d=fe.currentUser,S={...e,displayName:d.displayName,email:d.email,emailVerified:d.emailVerified,isAnonymous:d.isAnonymous,phoneNumber:d.phoneNumber,photoURL:d.photoURL,uid:d.uid,state:"using",updateAt:n.getTime()},e?F={displayName:d.displayName,photoURL:d.photoURL,uid:d.uid,level:e.level,info:e.info}:F={displayName:d.displayName,photoURL:d.photoURL,uid:d.uid},X($(q,`${this.child}/${S.uid}/profile`),S),X($(q,`${this.child}/${S.uid}/publicProfile`),F)}}G();class dt extends se{constructor(){super("message")}}const D=new oe,x=He(),b=Ue();let h=b.currentUser;const U={"auth/user-not-found":"\u627E\u4E0D\u5230\u8A72\u96FB\u5B50\u90F5\u4EF6","auth/email-already-in-use":"\u8A72\u96FB\u5B50\u90F5\u4EF6\u5DF2\u5728\u4F7F\u7528\u4E2D","auth/invalid-email":"\u7121\u6548\u7684\u96FB\u5B50\u90F5\u4EF6","auth/wrong-password":"\u5BC6\u78BC\u932F\u8AA4","auth/weak-password":"\u5BC6\u78BC\u8907\u96DC\u5EA6\u904E\u4F4E","auth/too-many-requests":"\u8207\u5148\u524D\u767C\u9001\u9593\u9694\u904E\u77ED","auth/missing-email":"\u8ACB\u8F38\u5165\u4FE1\u7BB1","auth/user-not-7":"\u627E\u4E0D\u5230\u8A72\u5E33\u865F"};class Pe{constructor(){}async createUser(e,n){return await je(b,e,n).then(r=>(h=r.user,console.log(`${h.email} create OK`),D.createUserProfile(),r.user)).catch(r=>{const s=r.code;throw console.log(s),U[`${s}`]})}async signIn(e,n){return await qe(b,e,n).then(r=>(h=r,r.user)).catch(r=>{const s=r.code;throw U[`${s}`]})}async signOut(){return await Ke(b).then(()=>{}).catch(e=>e.message)}async reauthenticate(e){h=b.currentUser;const n=de.credential(h.email,e);return await We(h,n).then(r=>(console.log(`${h.email} reauthenticate OK`),r.user)).catch(r=>{const s=r.code;throw U[`${s}`]})}async updatePassword(e){return h=b.currentUser,await Ve(h,e).then(()=>(console.log(`${h.email} updatePassword OK`),!0)).catch(n=>{const r=n.code;throw U[`${r}`]})}async update(e,n){return h=b.currentUser,await Xe(h,e).then(()=>(x.user=null,x.user=h,x.user.displayName===null&&(x.user.displayName=x.user.email),console.log(`${h.email} update OK`),D.updateUserProfile(n),!0)).catch(r=>{const s=r.code;throw U[`${s}`]})}async deleteUser(){const e=new Date;h=b.currentUser;const n=h.uid;return await Ge(h).then(()=>(D.update(`${n}/profile`,{state:"delete",updateAt:e}),!0)).catch(r=>{const s=r.code;throw U[`${s}`]})}async sendEmail(){return h=b.currentUser,await Ye(h).then(()=>(console.log(`${h.email} send email OK`),!0)).catch(e=>{const n=e.code;throw U[`${n}`]})}async sendPassword(e){return await Je(b,e).then(()=>(console.log(`${e} send password OK`),!0)).catch(n=>{const r=n.code;throw U[`${r}`]})}async signInAnonymously(){return await Ze(b).then(e=>(D.createUserProfile(),e.user)).catch(e=>{const n=e.code;throw U[`${n}`]})}async anonymouslyRegister(e,n){const r=de.credential(e,n);return h=b.currentUser,await Qe(h,r).then(s=>(x.user=null,x.user=h,console.log(`${h.email} anonymous account upgraded OK`),D.updateUserProfile(),s.user)).catch(s=>{const o=s.code;throw U[`${o}`]})}getUser(){return et(x)}}/**
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
 */const Te="firebasestorage.googleapis.com",Ce="storageBucket",ht=2*60*1e3,pt=10*60*1e3;/**
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
 */class m extends ut{constructor(e,n,r=0){super(Z(e),`Firebase Storage: ${n} (${Z(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,m.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Z(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Z(t){return"storage/"+t}function ae(){const t="An unknown error occurred, please check the error payload for server response.";return new m("unknown",t)}function ft(t){return new m("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mt(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new m("unauthenticated",t)}function gt(){return new m("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function yt(t){return new m("unauthorized","User does not have permission to access '"+t+"'.")}function wt(){return new m("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _t(){return new m("canceled","User canceled the upload/download.")}function bt(t){return new m("invalid-url","Invalid URL '"+t+"'.")}function $t(t){return new m("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function kt(){return new m("no-default-bucket","No default bucket found. Did you set the '"+Ce+"' property when initializing the app?")}function vt(){return new m("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Rt(t){return new m("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ne(t){return new m("invalid-argument",t)}function Ae(){return new m("app-deleted","The Firebase app was deleted.")}function Ut(t){return new m("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function H(t,e){return new m("invalid-format","String does not match format '"+t+"': "+e)}function z(t){throw new m("internal-error","Internal error: "+t)}/**
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
 */class _{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_.makeFromUrl(e,n)}catch{return new _(e,"")}if(r.path==="")return r;throw $t(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function p(w){w.path_=decodeURIComponent(w.path)}const k="v[A-Za-z0-9_]+",T=n.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",C=new RegExp(`^https?://${T}/${k}/b/${s}/o${v}`,"i"),A={bucket:1,path:3},B=n===Te?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",L=new RegExp(`^https?://${B}/${s}/${y}`,"i"),R=[{regex:c,indices:u,postModify:o},{regex:C,indices:A,postModify:p},{regex:L,indices:{bucket:1,path:2},postModify:p}];for(let w=0;w<R.length;w++){const j=R[w],Y=j.regex.exec(e);if(Y){const Ne=Y[j.indices.bucket];let J=Y[j.indices.path];J||(J=""),r=new _(Ne,J),j.postModify(r);break}}if(r==null)throw bt(e);return r}}class Pt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Tt(t,e,n){let r=1,s=null,o=null,a=!1,c=0;function u(){return c===2}let p=!1;function k(...y){p||(p=!0,e.apply(null,y))}function T(y){s=setTimeout(()=>{s=null,t(C,u())},y)}function v(){o&&clearTimeout(o)}function C(y,...L){if(p){v();return}if(y){v(),k.call(null,y,...L);return}if(u()||a){v(),k.call(null,y,...L);return}r<64&&(r*=2);let R;c===1?(c=2,R=0):R=(r+Math.random())*1e3,T(R)}let A=!1;function B(y){A||(A=!0,v(),!p&&(s!==null?(y||(c=2),clearTimeout(s),T(0)):y||(c=1)))}return T(0),o=setTimeout(()=>{a=!0,B(!0)},n),B}function Ct(t){t(!1)}/**
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
 */function At(t){return t!==void 0}function St(t){return typeof t=="object"&&!Array.isArray(t)}function Se(t){return typeof t=="string"||t instanceof String}function me(t){return ie()&&t instanceof Blob}function ie(){return typeof Blob<"u"&&!ct()}function ge(t,e,n,r){if(r<e)throw ne(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ne(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function xt(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Et(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var M;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(M||(M={}));/**
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
 */function Ot(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
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
 */class Mt{constructor(e,n,r,s,o,a,c,u,p,k,T,v=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=p,this.progressCallback_=k,this.connectionFactory_=T,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,A)=>{this.resolve_=C,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new K(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const u=c.loaded,p=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,p)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===M.NO_ERROR,u=o.getStatus();if((!c||Ot(u,this.additionalRetryCodes_))&&this.retry){const k=o.getErrorCode()===M.ABORT;r(!1,new K(!1,null,k));return}const p=this.successCodes_.indexOf(u)!==-1;r(!0,new K(p,o))})},n=(r,s)=>{const o=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());At(u)?o(u):o()}catch(u){a(u)}else if(c!==null){const u=ae();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(s.canceled){const u=this.appDelete_?Ae():_t();a(u)}else{const u=wt();a(u)}};this.canceled_?n(!1,new K(!1,null,!0)):this.backoffId_=Tt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ct(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class K{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function It(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Bt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Lt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Nt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ft(t,e,n,r,s,o,a=!0){const c=Et(t.urlParams),u=t.url+c,p=Object.assign({},t.headers);return Lt(p,e),It(p,n),Bt(p,o),Nt(p,r),new Mt(u,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,a)}/**
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
 */function Dt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zt(...t){const e=Dt();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ie())return new Blob(t);throw new m("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Ht(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function jt(t){if(typeof atob>"u")throw Rt("base-64");return atob(t)}/**
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
 */const P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Q{constructor(e,n){this.data=e,this.contentType=n||null}}function qt(t,e){switch(t){case P.RAW:return new Q(xe(e));case P.BASE64:case P.BASE64URL:return new Q(Ee(t,e));case P.DATA_URL:return new Q(Wt(e),Vt(e))}throw ae()}function xe(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,a=t.charCodeAt(++n);r=65536|(o&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Kt(t){let e;try{e=decodeURIComponent(t)}catch{throw H(P.DATA_URL,"Malformed data URL.")}return xe(e)}function Ee(t,e){switch(t){case P.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw H(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case P.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw H(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jt(e)}catch(s){throw s.message.includes("polyfill")?s:H(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Oe{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw H(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Xt(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Wt(t){const e=new Oe(t);return e.base64?Ee(P.BASE64,e.rest):Kt(e.rest)}function Vt(t){return new Oe(t).contentType}function Xt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class E{constructor(e,n){let r=0,s="";me(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(me(this.data_)){const r=this.data_,s=Ht(r,e,n);return s===null?null:new E(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new E(r,!0)}}static getBlob(...e){if(ie()){const n=e.map(r=>r instanceof E?r.data_:r);return new E(zt.apply(null,n))}else{const n=e.map(a=>Se(a)?qt(P.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(a=>{for(let c=0;c<a.length;c++)s[o++]=a[c]}),new E(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Gt(t){let e;try{e=JSON.parse(t)}catch{return null}return St(e)?e:null}/**
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
 */function Yt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Jt(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Me(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Zt(t,e){return e}class g{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Zt}}let W=null;function Qt(t){return!Se(t)||t.length<2?t:Me(t)}function en(){if(W)return W;const t=[];t.push(new g("bucket")),t.push(new g("generation")),t.push(new g("metageneration")),t.push(new g("name","fullPath",!0));function e(o,a){return Qt(a)}const n=new g("name");n.xform=e,t.push(n);function r(o,a){return a!==void 0?Number(a):a}const s=new g("size");return s.xform=r,t.push(s),t.push(new g("timeCreated")),t.push(new g("updated")),t.push(new g("md5Hash",null,!0)),t.push(new g("cacheControl",null,!0)),t.push(new g("contentDisposition",null,!0)),t.push(new g("contentEncoding",null,!0)),t.push(new g("contentLanguage",null,!0)),t.push(new g("contentType",null,!0)),t.push(new g("metadata","customMetadata",!0)),W=t,W}function tn(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new _(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function nn(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const a=n[o];r[a.local]=a.xform(r,e[a.server])}return tn(r,t),r}function rn(t,e,n){const r=Gt(e);return r===null?null:nn(t,r,n)}function sn(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class on{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function an(t){if(!t)throw ae()}function un(t,e){function n(r,s){const o=rn(t,s,e);return an(o!==null),o}return n}function cn(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=gt():s=mt():n.getStatus()===402?s=ft(t.bucket):n.getStatus()===403?s=yt(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function ln(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function dn(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=ln(null,e)),r}function hn(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let R="";for(let w=0;w<2;w++)R=R+Math.random().toString().slice(2);return R}const u=c();a["Content-Type"]="multipart/related; boundary="+u;const p=dn(e,r,s),k=sn(p,n),T="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+k+`\r
--`+u+`\r
Content-Type: `+p.contentType+`\r
\r
`,v=`\r
--`+u+"--",C=E.getBlob(T,r,v);if(C===null)throw vt();const A={name:p.fullPath},B=xt(o,t.host,t._protocol),y="POST",L=t.maxUploadRetryTime,O=new on(B,y,un(t,n),L);return O.urlParams=A,O.headers=a,O.body=C.uploadData(),O.errorHandler=cn(e),O}class pn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=M.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=M.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=M.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw z("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw z("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw z("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw z("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw z("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fn extends pn{initXhr(){this.xhr_.responseType="text"}}function mn(){return new fn}/**
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
 */class I{constructor(e,n){this._service=e,n instanceof _?this._location=n:this._location=_.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new I(e,n)}get root(){const e=new _(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Me(this._location.path)}get storage(){return this._service}get parent(){const e=Yt(this._location.path);if(e===null)return null;const n=new _(this._location.bucket,e);return new I(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ut(e)}}function gn(t,e,n){t._throwIfRoot("uploadBytes");const r=hn(t.storage,t._location,en(),new E(e,!0),n);return t.storage.makeRequestWithTokens(r,mn).then(s=>({metadata:s,ref:t}))}function yn(t,e){const n=Jt(t._location.path,e),r=new _(t._location.bucket,n);return new I(t.storage,r)}/**
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
 */function wn(t){return/^[A-Za-z]+:\/\//.test(t)}function _n(t,e){return new I(t,e)}function Ie(t,e){if(t instanceof ue){const n=t;if(n._bucket==null)throw kt();const r=new I(n,n._bucket);return e!=null?Ie(r,e):r}else return e!==void 0?yn(t,e):t}function bn(t,e){if(e&&wn(e)){if(t instanceof ue)return _n(t,e);throw ne("To use ref(service, url), the first argument must be a Storage instance.")}else return Ie(t,e)}function ye(t,e){const n=e==null?void 0:e[Ce];return n==null?null:_.makeFromBucketSpec(n,t)}function $n(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:at(s,t.app.options.projectId))}class ue{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Te,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ht,this._maxUploadRetryTime=pt,this._requests=new Set,s!=null?this._bucket=_.makeFromBucketSpec(s,this._host):this._bucket=ye(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_.makeFromBucketSpec(this._url,e):this._bucket=ye(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ge("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ge("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new I(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new Pt(Ae());{const a=Ft(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const we="@firebase/storage",_e="0.10.0";/**
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
 */const Be="storage";function be(t,e,n){return t=re(t),gn(t,e,n)}function $e(t,e){return t=re(t),bn(t,e)}function kn(t=rt(),e){t=re(t);const r=tt(t,Be).getImmediate({identifier:e}),s=nt("storage");return s&&vn(r,...s),r}function vn(t,e,n,r={}){$n(t,e,n,r)}function Rn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ue(n,r,s,e,it)}function Un(){st(new ot(Be,Rn,"PUBLIC").setMultipleInstances(!0)),he(we,_e,""),he(we,_e,"esm2017")}Un();const ke=new lt,ve=new oe,Re=kn(),Le=new Pe,{user:V}=Le.getUser();class Cn{constructor(){}async upload(e){const n=$e(Re,`images/${e.name}`);return await be(n,e).then(r=>{console.log(r.metadata.name,"Uploaded a blob or file!");const s={url:`https://firebasestorage.googleapis.com/v0/b/mygame-xian.appspot.com/o/images%2F${r.metadata.name}?alt=media&token=b80d3559-f423-4e68-b07c-96f2ffb2b5b2`,name:r.metadata.name,type:r.metadata.contentType,size:r.metadata.size,fullPath:r.metadata.fullPath,created:r.metadata.timeCreated,uploader:V.value.uid};return ke.keySet(s).then(o=>{ve.set(`${V.value.uid}/images/${o}`,{name:s.name})}),!0}).catch(r=>{throw r})}async uploadProfilePhoto(e){const n=$e(Re,`images/${e.name}`);await be(n,e).then(r=>{console.log(r.metadata.name,"Uploaded a blob or file!");const s={url:`https://firebasestorage.googleapis.com/v0/b/mygame-xian.appspot.com/o/images%2F${r.metadata.name}?alt=media&token=b80d3559-f423-4e68-b07c-96f2ffb2b5b2`,name:r.metadata.name,type:r.metadata.contentType,size:r.metadata.size,fullPath:r.metadata.fullPath,created:r.metadata.timeCreated,uploader:V.value.uid};ke.keySet(s).then(o=>{ve.set(`${V.value.uid}/images/${o}`,{name:s.name}),Le.update({photoURL:s.url})})}).catch(r=>{throw r})}}const ee=new dt,l=new oe,Pn=new Pe;let f;const{user:i}=Pn.getUser();class An{constructor(){}async sendMail(e){let n=new Date;return f={fromUid:i.value.uid,date:n.getTime(),...e},await l.get(`${e.toUid}/publicProfile`).then(()=>{ee.keySet(f).then(r=>(console.log(`send to ${e.toUid} ok`),l.set(`${e.toUid}/notCheckedMessage/private/${r}`,{mailKey:r,title:f.title,fromUid:f.fromUid,date:f.date}),!0)).catch(r=>{throw r})}).catch(r=>{throw r})}async sendSystemMail(e){return f={fromUid:"\u7CFB\u7D71",date:new Date().getTime(),...e},await ee.keySet(f).then(r=>{l.set(`${i.value.uid}/notCheckedMessage/system/${r}`,{mailKey:r,title:f.title,fromUid:f.fromUid,date:f.date})})}async getPrivateMail(){return await l.array(`${i.value.uid}/notCheckedMessage/private`).then(e=>(e&&(l.remove(`${i.value.uid}/notCheckedMessage/private`),l.update(`${i.value.uid}/message/private/`,e)),l.array(`${i.value.uid}/message/private`).then(n=>n))).catch(e=>l.array(`${i.value.uid}/message/private`).then(n=>n))}async getSystemMail(){return await l.array(`${i.value.uid}/notCheckedMessage/system`).then(e=>(e&&(l.remove(`${i.value.uid}/notCheckedMessage/system`),l.update(`${i.value.uid}/message/system/`,e)),l.array(`${i.value.uid}/message/system`).then(n=>n))).catch(e=>l.array(`${i.value.uid}/message/system`).then(n=>n))}async getMail(e){return await ee.get(e).then(n=>n)}async apply(e){let n=new Date;return f={fromUid:i.value.uid,date:n.getTime(),...e},await l.get(`${e.toUid}/publicProfile`).then(()=>l.get(`${i.value.uid}/friends/${e.toUid}`).then(()=>["showError","\u5DF2\u5728\u597D\u53CB\u540D\u55AE"]).catch(()=>e.toUid==i.value.uid?["showError","\u4E0D\u53EF\u589E\u52A0\u81EA\u5DF1\u70BA\u597D\u53CB"]:(l.set(`${e.toUid}/friendsApply/${i.value.uid}`,{uid:f.fromUid,date:f.date,photoURL:i.value.photoURL}),this.sendMail({title:`${i.value.uid} \u5411\u4F60\u7533\u8ACB\u70BA\u597D\u53CB`,...e}),["showSuccess","\u7533\u8ACB\u597D\u53CB\u6210\u529F"]))).catch(()=>{throw"\u67E5\u7121\u6B64\u4EBA"})}async accept(e){return f={date:new Date().getTime(),toUid:e,title:"\u63A5\u53D7\u4F60\u7684\u597D\u53CB\u7533\u8ACB",content:`${i.value.uid} \u5DF2\u63A5\u53D7\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,type:"private"},await l.get(`${i.value.uid}/friendsApply/${e}`).then(r=>(l.remove(`${i.value.uid}/friendsApply/${e}`),l.update(`${i.value.uid}/friends/${e}`,r),l.update(`${e}/friends/${i.value.uid}`,{date:f.date,photoURL:i.value.photoURL,uid:i.value.uid}),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u7533\u8ACB"})}async reject(e){return f={date:new Date().getTime(),toUid:e,title:"\u62D2\u7D55\u4F60\u7684\u597D\u53CB\u7533\u8ACB",content:`${i.value.uid} \u62D2\u7D55\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,type:"private"},await l.get(`${i.value.uid}/friendsApply/${e}`).then(r=>(l.remove(`${i.value.uid}/friendsApply/${e}`),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u7533\u8ACB"})}async deleteFriends(e){return f={date:new Date().getTime(),toUid:e,title:`${i.value.uid} \u89E3\u9664\u8207\u4F60\u7684\u597D\u53CB\u95DC\u4FC2`,content:`${i.value.uid} \u5DF2\u5F9E\u597D\u53CB\u540D\u55AE\u522A\u9664\u4F60`,type:"private"},await l.get(`${i.value.uid}/friends/${e}`).then(r=>(l.remove(`${i.value.uid}/friends/${e}`),l.remove(`${e}/friends/${i.value.uid}`),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u597D\u53CB"})}async editFriends(e,n){return await l.get(`${i.value.uid}/friends/${e}`).then(r=>(l.update(`${i.value.uid}/friends/${e}`,{name:n}),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u597D\u53CB"})}async getFriendsApply(){return await l.array(`${i.value.uid}/friendsApply`).then(e=>e).catch(e=>{throw e})}async getFriends(){return await l.array(`${i.value.uid}/friends`).then(e=>e).catch(e=>{throw e})}}export{Pe as A,se as D,An as M,Cn as S,oe as U};
