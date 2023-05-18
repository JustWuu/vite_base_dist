import{D as Y,k as $e,l as ke,s as Le,m as K,n as Z,i as Be,p as Fe,q as De,v as ze,E as le,x as He,y as je,z as qe,A as Ke,B as We,C as Xe,F as Ve,G as Ge,H as Ye,I as se,J as Je,K as Qe,L as Ze,M as et,N as tt,O as de,P as nt,S as rt,Q as st,R as ot}from"./index.588223ac.js";class at extends Y{constructor(){super("images")}}const W=$e(),he=ke();let d,S={displayName:"",email:"",emailVerified:"",isAnonymous:"",phoneNumber:"",photoURL:"",uid:"",metadata:null,state:"",newPhoneNumber:""},D={displayName:"",photoURL:"",uid:"",level:"",info:""};class oe extends Y{constructor(){super("user")}async createUserProfile(){let e=new Date;d=he.currentUser,S={displayName:d.displayName,email:d.email,emailVerified:d.emailVerified,isAnonymous:d.isAnonymous,phoneNumber:d.phoneNumber,photoURL:d.photoURL,uid:d.uid,metadata:d.metadata,state:"using",updateAt:e.getTime(),level:1,physicalPower:10,skillPoints:1,experience:0,maxExperience:100,healthPoints:20,maxHealthPoints:20,manaPoint:10,maxManaPoint:10,info:""},D={displayName:d.displayName,photoURL:d.photoURL,uid:d.uid,level:1,info:""},Le(K(W,`${this.child}/${S.uid}/profile`),S),Z(K(W,`${this.child}/${S.uid}/publicProfile`),D)}async updateUserProfile(e){let n=new Date;d=he.currentUser,S={...e,displayName:d.displayName,email:d.email,emailVerified:d.emailVerified,isAnonymous:d.isAnonymous,phoneNumber:d.phoneNumber,photoURL:d.photoURL,uid:d.uid,state:"using",updateAt:n.getTime()},e?D={displayName:d.displayName,photoURL:d.photoURL,uid:d.uid,level:e.level,info:e.info}:D={displayName:d.displayName,photoURL:d.photoURL,uid:d.uid},Z(K(W,`${this.child}/${S.uid}/profile`),S),Z(K(W,`${this.child}/${S.uid}/publicProfile`),D)}}$e();class it extends Y{constructor(){super("message")}}class ut extends Y{constructor(){super("forum")}}const z=new oe,x=Be(),b=ke();let h=b.currentUser;const k={"auth/user-not-found":"\u627E\u4E0D\u5230\u8A72\u96FB\u5B50\u90F5\u4EF6","auth/email-already-in-use":"\u8A72\u96FB\u5B50\u90F5\u4EF6\u5DF2\u5728\u4F7F\u7528\u4E2D","auth/invalid-email":"\u7121\u6548\u7684\u96FB\u5B50\u90F5\u4EF6","auth/wrong-password":"\u5BC6\u78BC\u932F\u8AA4","auth/weak-password":"\u5BC6\u78BC\u8907\u96DC\u5EA6\u904E\u4F4E","auth/too-many-requests":"\u8207\u5148\u524D\u767C\u9001\u9593\u9694\u904E\u77ED","auth/missing-email":"\u8ACB\u8F38\u5165\u4FE1\u7BB1","auth/user-not-7":"\u627E\u4E0D\u5230\u8A72\u5E33\u865F"};class ae{constructor(){}async createUser(e,n){return await Fe(b,e,n).then(r=>(h=r.user,console.log(`${h.email} create OK`),z.createUserProfile(),r.user)).catch(r=>{const s=r.code;throw console.log(s),k[`${s}`]})}async signIn(e,n){return await De(b,e,n).then(r=>(h=r,r.user)).catch(r=>{const s=r.code;throw k[`${s}`]})}async signOut(){return await ze(b).then(()=>{}).catch(e=>e.message)}async reauthenticate(e){h=b.currentUser;const n=le.credential(h.email,e);return await He(h,n).then(r=>(console.log(`${h.email} reauthenticate OK`),r.user)).catch(r=>{const s=r.code;throw k[`${s}`]})}async updatePassword(e){return h=b.currentUser,await je(h,e).then(()=>(console.log(`${h.email} updatePassword OK`),!0)).catch(n=>{const r=n.code;throw k[`${r}`]})}async update(e,n){return h=b.currentUser,await qe(h,e).then(()=>(x.user=null,x.user=h,x.user.displayName===null&&(x.user.displayName=x.user.email),console.log(`${h.email} update OK`),z.updateUserProfile(n),!0)).catch(r=>{const s=r.code;throw k[`${s}`]})}async deleteUser(){const e=new Date;h=b.currentUser;const n=h.uid;return await Ke(h).then(()=>(z.update(`${n}/profile`,{state:"delete",updateAt:e}),!0)).catch(r=>{const s=r.code;throw k[`${s}`]})}async sendEmail(){return h=b.currentUser,await We(h).then(()=>(console.log(`${h.email} send email OK`),!0)).catch(e=>{const n=e.code;throw k[`${n}`]})}async sendPassword(e){return await Xe(b,e).then(()=>(console.log(`${e} send password OK`),!0)).catch(n=>{const r=n.code;throw k[`${r}`]})}async signInAnonymously(){return await Ve(b).then(e=>(z.createUserProfile(),e.user)).catch(e=>{const n=e.code;throw k[`${n}`]})}async anonymouslyRegister(e,n){const r=le.credential(e,n);return h=b.currentUser,await Ge(h,r).then(s=>(x.user=null,x.user=h,console.log(`${h.email} anonymous account upgraded OK`),z.updateUserProfile(),s.user)).catch(s=>{const o=s.code;throw k[`${o}`]})}getUser(){return Ye(x)}}/**
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
 */const Ue="firebasestorage.googleapis.com",Pe="storageBucket",ct=2*60*1e3,lt=10*60*1e3;/**
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
 */class m extends st{constructor(e,n,r=0){super(ee(e),`Firebase Storage: ${n} (${ee(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,m.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ee(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ee(t){return"storage/"+t}function ie(){const t="An unknown error occurred, please check the error payload for server response.";return new m("unknown",t)}function dt(t){return new m("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ht(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new m("unauthenticated",t)}function pt(){return new m("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function ft(t){return new m("unauthorized","User does not have permission to access '"+t+"'.")}function mt(){return new m("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function gt(){return new m("canceled","User canceled the upload/download.")}function yt(t){return new m("invalid-url","Invalid URL '"+t+"'.")}function wt(t){return new m("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function _t(){return new m("no-default-bucket","No default bucket found. Did you set the '"+Pe+"' property when initializing the app?")}function bt(){return new m("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function vt(t){return new m("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function re(t){return new m("invalid-argument",t)}function Te(){return new m("app-deleted","The Firebase app was deleted.")}function Rt(t){return new m("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function j(t,e){return new m("invalid-format","String does not match format '"+t+"': "+e)}function H(t){throw new m("internal-error","Internal error: "+t)}/**
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
 */class _{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_.makeFromUrl(e,n)}catch{return new _(e,"")}if(r.path==="")return r;throw wt(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function p(w){w.path_=decodeURIComponent(w.path)}const v="v[A-Za-z0-9_]+",T=n.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",A=new RegExp(`^https?://${T}/${v}/b/${s}/o${R}`,"i"),C={bucket:1,path:3},B=n===Ue?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",F=new RegExp(`^https?://${B}/${s}/${y}`,"i"),$=[{regex:l,indices:u,postModify:o},{regex:A,indices:C,postModify:p},{regex:F,indices:{bucket:1,path:2},postModify:p}];for(let w=0;w<$.length;w++){const q=$[w],J=q.regex.exec(e);if(J){const Ne=J[q.indices.bucket];let Q=J[q.indices.path];Q||(Q=""),r=new _(Ne,Q),q.postModify(r);break}}if(r==null)throw yt(e);return r}}class $t{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kt(t,e,n){let r=1,s=null,o=null,a=!1,l=0;function u(){return l===2}let p=!1;function v(...y){p||(p=!0,e.apply(null,y))}function T(y){s=setTimeout(()=>{s=null,t(A,u())},y)}function R(){o&&clearTimeout(o)}function A(y,...F){if(p){R();return}if(y){R(),v.call(null,y,...F);return}if(u()||a){R(),v.call(null,y,...F);return}r<64&&(r*=2);let $;l===1?(l=2,$=0):$=(r+Math.random())*1e3,T($)}let C=!1;function B(y){C||(C=!0,R(),!p&&(s!==null?(y||(l=2),clearTimeout(s),T(0)):y||(l=1)))}return T(0),o=setTimeout(()=>{a=!0,B(!0)},n),B}function Ut(t){t(!1)}/**
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
 */function Pt(t){return t!==void 0}function Tt(t){return typeof t=="object"&&!Array.isArray(t)}function Ae(t){return typeof t=="string"||t instanceof String}function pe(t){return ue()&&t instanceof Blob}function ue(){return typeof Blob<"u"&&!ot()}function fe(t,e,n,r){if(r<e)throw re(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw re(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function At(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ct(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var N;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(N||(N={}));/**
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
 */function St(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
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
 */class xt{constructor(e,n,r,s,o,a,l,u,p,v,T,R=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=p,this.progressCallback_=v,this.connectionFactory_=T,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,C)=>{this.resolve_=A,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new X(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const u=l.loaded,p=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,p)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===N.NO_ERROR,u=o.getStatus();if((!l||St(u,this.additionalRetryCodes_))&&this.retry){const v=o.getErrorCode()===N.ABORT;r(!1,new X(!1,null,v));return}const p=this.successCodes_.indexOf(u)!==-1;r(!0,new X(p,o))})},n=(r,s)=>{const o=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Pt(u)?o(u):o()}catch(u){a(u)}else if(l!==null){const u=ie();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?Te():gt();a(u)}else{const u=mt();a(u)}};this.canceled_?n(!1,new X(!1,null,!0)):this.backoffId_=kt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ut(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class X{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Et(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ot(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Mt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function It(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Nt(t,e,n,r,s,o,a=!0){const l=Ct(t.urlParams),u=t.url+l,p=Object.assign({},t.headers);return Mt(p,e),Et(p,n),Ot(p,o),It(p,r),new xt(u,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,a)}/**
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
 */function Lt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Bt(...t){const e=Lt();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ue())return new Blob(t);throw new m("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Ft(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Dt(t){if(typeof atob>"u")throw vt("base-64");return atob(t)}/**
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
 */const P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class te{constructor(e,n){this.data=e,this.contentType=n||null}}function zt(t,e){switch(t){case P.RAW:return new te(Ce(e));case P.BASE64:case P.BASE64URL:return new te(Se(t,e));case P.DATA_URL:return new te(jt(e),qt(e))}throw ie()}function Ce(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,a=t.charCodeAt(++n);r=65536|(o&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Ht(t){let e;try{e=decodeURIComponent(t)}catch{throw j(P.DATA_URL,"Malformed data URL.")}return Ce(e)}function Se(t,e){switch(t){case P.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw j(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case P.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw j(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Dt(e)}catch(s){throw s.message.includes("polyfill")?s:j(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class xe{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw j(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Kt(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function jt(t){const e=new xe(t);return e.base64?Se(P.BASE64,e.rest):Ht(e.rest)}function qt(t){return new xe(t).contentType}function Kt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class O{constructor(e,n){let r=0,s="";pe(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(pe(this.data_)){const r=this.data_,s=Ft(r,e,n);return s===null?null:new O(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new O(r,!0)}}static getBlob(...e){if(ue()){const n=e.map(r=>r instanceof O?r.data_:r);return new O(Bt.apply(null,n))}else{const n=e.map(a=>Ae(a)?zt(P.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(a=>{for(let l=0;l<a.length;l++)s[o++]=a[l]}),new O(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Wt(t){let e;try{e=JSON.parse(t)}catch{return null}return Tt(e)?e:null}/**
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
 */function Xt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Vt(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ee(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Gt(t,e){return e}class g{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Gt}}let V=null;function Yt(t){return!Ae(t)||t.length<2?t:Ee(t)}function Jt(){if(V)return V;const t=[];t.push(new g("bucket")),t.push(new g("generation")),t.push(new g("metageneration")),t.push(new g("name","fullPath",!0));function e(o,a){return Yt(a)}const n=new g("name");n.xform=e,t.push(n);function r(o,a){return a!==void 0?Number(a):a}const s=new g("size");return s.xform=r,t.push(s),t.push(new g("timeCreated")),t.push(new g("updated")),t.push(new g("md5Hash",null,!0)),t.push(new g("cacheControl",null,!0)),t.push(new g("contentDisposition",null,!0)),t.push(new g("contentEncoding",null,!0)),t.push(new g("contentLanguage",null,!0)),t.push(new g("contentType",null,!0)),t.push(new g("metadata","customMetadata",!0)),V=t,V}function Qt(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new _(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Zt(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const a=n[o];r[a.local]=a.xform(r,e[a.server])}return Qt(r,t),r}function en(t,e,n){const r=Wt(e);return r===null?null:Zt(t,r,n)}function tn(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class nn{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function rn(t){if(!t)throw ie()}function sn(t,e){function n(r,s){const o=en(t,s,e);return rn(o!==null),o}return n}function on(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=pt():s=ht():n.getStatus()===402?s=dt(t.bucket):n.getStatus()===403?s=ft(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function an(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function un(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=an(null,e)),r}function cn(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let $="";for(let w=0;w<2;w++)$=$+Math.random().toString().slice(2);return $}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const p=un(e,r,s),v=tn(p,n),T="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+u+`\r
Content-Type: `+p.contentType+`\r
\r
`,R=`\r
--`+u+"--",A=O.getBlob(T,r,R);if(A===null)throw bt();const C={name:p.fullPath},B=At(o,t.host,t._protocol),y="POST",F=t.maxUploadRetryTime,M=new nn(B,y,sn(t,n),F);return M.urlParams=C,M.headers=a,M.body=A.uploadData(),M.errorHandler=on(e),M}class ln{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=N.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=N.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=N.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw H("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw H("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw H("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw H("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw H("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dn extends ln{initXhr(){this.xhr_.responseType="text"}}function hn(){return new dn}/**
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
 */class L{constructor(e,n){this._service=e,n instanceof _?this._location=n:this._location=_.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new L(e,n)}get root(){const e=new _(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ee(this._location.path)}get storage(){return this._service}get parent(){const e=Xt(this._location.path);if(e===null)return null;const n=new _(this._location.bucket,e);return new L(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Rt(e)}}function pn(t,e,n){t._throwIfRoot("uploadBytes");const r=cn(t.storage,t._location,Jt(),new O(e,!0),n);return t.storage.makeRequestWithTokens(r,hn).then(s=>({metadata:s,ref:t}))}function fn(t,e){const n=Vt(t._location.path,e),r=new _(t._location.bucket,n);return new L(t.storage,r)}/**
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
 */function mn(t){return/^[A-Za-z]+:\/\//.test(t)}function gn(t,e){return new L(t,e)}function Oe(t,e){if(t instanceof ce){const n=t;if(n._bucket==null)throw _t();const r=new L(n,n._bucket);return e!=null?Oe(r,e):r}else return e!==void 0?fn(t,e):t}function yn(t,e){if(e&&mn(e)){if(t instanceof ce)return gn(t,e);throw re("To use ref(service, url), the first argument must be a Storage instance.")}else return Oe(t,e)}function me(t,e){const n=e==null?void 0:e[Pe];return n==null?null:_.makeFromBucketSpec(n,t)}function wn(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:nt(s,t.app.options.projectId))}class ce{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Ue,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ct,this._maxUploadRetryTime=lt,this._requests=new Set,s!=null?this._bucket=_.makeFromBucketSpec(s,this._host):this._bucket=me(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_.makeFromBucketSpec(this._url,e):this._bucket=me(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fe("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fe("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new L(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new $t(Te());{const a=Nt(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ge="@firebase/storage",ye="0.10.0";/**
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
 */const Me="storage";function we(t,e,n){return t=se(t),pn(t,e,n)}function _e(t,e){return t=se(t),yn(t,e)}function _n(t=Ze(),e){t=se(t);const r=Je(t,Me).getImmediate({identifier:e}),s=Qe("storage");return s&&bn(r,...s),r}function bn(t,e,n,r={}){wn(t,e,n,r)}function vn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ce(n,r,s,e,rt)}function Rn(){et(new tt(Me,vn,"PUBLIC").setMultipleInstances(!0)),de(ge,ye,""),de(ge,ye,"esm2017")}Rn();const be=new at,ve=new oe,Re=_n(),Ie=new ae,{user:G}=Ie.getUser();class Pn{constructor(){}async upload(e){const n=_e(Re,`images/${e.name}`);return await we(n,e).then(r=>{console.log(r.metadata.name,"Uploaded a blob or file!");const s={url:`https://firebasestorage.googleapis.com/v0/b/mygame-xian.appspot.com/o/images%2F${r.metadata.name}?alt=media&token=b80d3559-f423-4e68-b07c-96f2ffb2b5b2`,name:r.metadata.name,type:r.metadata.contentType,size:r.metadata.size,fullPath:r.metadata.fullPath,created:r.metadata.timeCreated,uploader:G.value.uid};return be.keySet(s).then(o=>{ve.set(`${G.value.uid}/images/${o}`,{name:s.name})}),!0}).catch(r=>{throw r})}async uploadProfilePhoto(e){const n=_e(Re,`images/${e.name}`);await we(n,e).then(r=>{console.log(r.metadata.name,"Uploaded a blob or file!");const s={url:`https://firebasestorage.googleapis.com/v0/b/mygame-xian.appspot.com/o/images%2F${r.metadata.name}?alt=media&token=b80d3559-f423-4e68-b07c-96f2ffb2b5b2`,name:r.metadata.name,type:r.metadata.contentType,size:r.metadata.size,fullPath:r.metadata.fullPath,created:r.metadata.timeCreated,uploader:G.value.uid};be.keySet(s).then(o=>{ve.set(`${G.value.uid}/images/${o}`,{name:s.name}),Ie.update({photoURL:s.url})})}).catch(r=>{throw r})}}const ne=new it,c=new oe,$n=new ae;let f;const{user:i}=$n.getUser();class Tn{constructor(){}async sendMail(e){let n=new Date;return f={fromUid:i.value.uid,date:n.getTime(),...e},await c.get(`${e.toUid}/publicProfile`).then(()=>{ne.keySet(f).then(r=>(console.log(`send to ${e.toUid} ok`),c.set(`${e.toUid}/notCheckedMessage/private/${r}`,{mailKey:r,title:f.title,fromUid:f.fromUid,date:f.date}),!0)).catch(r=>{throw r})}).catch(r=>{throw r})}async sendSystemMail(e){return f={fromUid:"\u7CFB\u7D71",date:new Date().getTime(),...e},await ne.keySet(f).then(r=>{c.set(`${i.value.uid}/notCheckedMessage/system/${r}`,{mailKey:r,title:f.title,fromUid:f.fromUid,date:f.date})})}async getPrivateMail(){return await c.array(`${i.value.uid}/notCheckedMessage/private`).then(e=>(e&&(c.remove(`${i.value.uid}/notCheckedMessage/private`),c.update(`${i.value.uid}/message/private/`,e)),c.array(`${i.value.uid}/message/private`).then(n=>n))).catch(e=>c.array(`${i.value.uid}/message/private`).then(n=>n))}async getSystemMail(){return await c.array(`${i.value.uid}/notCheckedMessage/system`).then(e=>(e&&(c.remove(`${i.value.uid}/notCheckedMessage/system`),c.update(`${i.value.uid}/message/system/`,e)),c.array(`${i.value.uid}/message/system`).then(n=>n))).catch(e=>c.array(`${i.value.uid}/message/system`).then(n=>n))}async getMail(e){return await ne.get(e).then(n=>n)}async apply(e){let n=new Date;return f={fromUid:i.value.uid,date:n.getTime(),...e},await c.get(`${e.toUid}/publicProfile`).then(()=>c.get(`${i.value.uid}/friends/${e.toUid}`).then(()=>["showError","\u5DF2\u5728\u597D\u53CB\u540D\u55AE"]).catch(()=>e.toUid==i.value.uid?["showError","\u4E0D\u53EF\u65B0\u589E\u81EA\u5DF1\u70BA\u597D\u53CB"]:(c.set(`${e.toUid}/friendsApply/${i.value.uid}`,{uid:f.fromUid,date:f.date,photoURL:i.value.photoURL}),this.sendMail({title:`${i.value.uid} \u5411\u4F60\u7533\u8ACB\u70BA\u597D\u53CB`,...e}),["showSuccess","\u7533\u8ACB\u597D\u53CB\u6210\u529F"]))).catch(()=>{throw"\u67E5\u7121\u6B64\u4EBA"})}async accept(e){return f={date:new Date().getTime(),toUid:e,title:`${i.value.uid} \u63A5\u53D7\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,content:`${i.value.uid} \u5DF2\u63A5\u53D7\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,type:"private"},await c.get(`${i.value.uid}/friendsApply/${e}`).then(r=>(c.remove(`${i.value.uid}/friendsApply/${e}`),c.update(`${i.value.uid}/friends/${e}`,r),c.update(`${e}/friends/${i.value.uid}`,{date:f.date,photoURL:i.value.photoURL,uid:i.value.uid}),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u7533\u8ACB"})}async reject(e){return f={date:new Date().getTime(),toUid:e,title:"\u62D2\u7D55\u4F60\u7684\u597D\u53CB\u7533\u8ACB",content:`${i.value.uid} \u62D2\u7D55\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,type:"private"},await c.get(`${i.value.uid}/friendsApply/${e}`).then(r=>(c.remove(`${i.value.uid}/friendsApply/${e}`),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u7533\u8ACB"})}async deleteFriends(e){return f={date:new Date().getTime(),toUid:e,title:`${i.value.uid} \u89E3\u9664\u8207\u4F60\u7684\u597D\u53CB\u95DC\u4FC2`,content:`${i.value.uid} \u5DF2\u5F9E\u597D\u53CB\u540D\u55AE\u522A\u9664\u4F60`,type:"private"},await c.get(`${i.value.uid}/friends/${e}`).then(r=>(c.remove(`${i.value.uid}/friends/${e}`),c.remove(`${e}/friends/${i.value.uid}`),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u597D\u53CB"})}async editFriends(e,n){return await c.get(`${i.value.uid}/friends/${e}`).then(r=>(c.update(`${i.value.uid}/friends/${e}`,{name:n}),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u597D\u53CB"})}async getFriendsApply(){return await c.array(`${i.value.uid}/friendsApply`).then(e=>e).catch(e=>{throw e})}async getFriends(){return await c.array(`${i.value.uid}/friends`).then(e=>e).catch(e=>{throw e})}async getProfileFriends(e){return await c.get(`${e}/publicProfile`).then(n=>n).catch(n=>{throw n})}}const E=new ut,kn=new ae;let I;const{user:U}=kn.getUser();class An{constructor(){}async published(e){if(e.area==""||e.content==""||e.theme=="")throw["showError","\u8ACB\u586B\u59A5\u5167\u5BB9"];if(U.value.isAnonymous)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u9032\u884C\u4FE1\u7BB1\u8A3B\u518A"];if(U.value.displayName==null)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u8A2D\u5B9A\u540D\u7A31"];let n=new Date;return I={author:{fromUid:U.value.uid,displayName:U.value.displayName,photoURL:U.value.photoURL},date:n.getTime(),...e},await E.keySet(I,I.area.type).then(r=>(E.update(`all/${r}/`,{id:r,area:I.area.type}),E.update(`${I.area.type}/${r}/`,{id:r}),["showSuccess","\u767C\u5E03\u6210\u529F"])).catch(()=>{throw["showError","\u767C\u5E03\u5931\u6557"]})}async getAreaArticle(e){return await E.array(e).then(n=>n).catch(n=>{throw n})}async getArticle(e){return await E.get(`all/${e}`).then(n=>E.get(`${n.area}/${n.id}`).then(r=>r).catch(r=>{throw r})).catch(n=>{throw n})}async reply(e,n){if(n.content=="")throw["showError","\u8ACB\u586B\u59A5\u5167\u5BB9"];if(U.value.isAnonymous)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u9032\u884C\u4FE1\u7BB1\u8A3B\u518A"];if(U.value.displayName==null)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u8A2D\u5B9A\u540D\u7A31"];let r=new Date;return I={author:{fromUid:U.value.uid,displayName:U.value.displayName,photoURL:U.value.photoURL},date:r.getTime(),...n},await E.get(`all/${e}`).then(s=>E.keySet(I,`${s.area}/${s.id}/reply`).then(()=>["showSuccess","\u767C\u5E03\u6210\u529F"]).catch(()=>{throw["showError","\u767C\u5E03\u5931\u6557"]})).catch(()=>{throw["showError","\u767C\u5E03\u5931\u6557"]})}}export{ae as A,An as F,Tn as M,Pn as S,oe as U};
