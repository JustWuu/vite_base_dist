import{D as J,j as Se,i as Ae,k as Pe,q as xe,v as Ee,x as Oe,E as se,y as Ie,z as Me,A as Be,B as Fe,F as De,G as Le,H as Ne,I as ze,J as je,K as Q,L as He,M as qe,N as Ke,O as We,P as Xe,Q as oe,R as Ge,S as Ve,T as Ye,U as Je}from"./index.27a5a0bf.js";import Z from"./user.35d041ca.js";class Qe extends J{constructor(){super("images")}}Se();class Ze extends J{constructor(){super("message")}}class et extends J{constructor(){super("forum")}}const D=new Z,A=Ae(),_=Pe();let d=_.currentUser;const R={"auth/user-not-found":"\u627E\u4E0D\u5230\u8A72\u96FB\u5B50\u90F5\u4EF6","auth/email-already-in-use":"\u8A72\u96FB\u5B50\u90F5\u4EF6\u5DF2\u5728\u4F7F\u7528\u4E2D","auth/invalid-email":"\u7121\u6548\u7684\u96FB\u5B50\u90F5\u4EF6","auth/wrong-password":"\u5BC6\u78BC\u932F\u8AA4","auth/weak-password":"\u5BC6\u78BC\u8907\u96DC\u5EA6\u904E\u4F4E","auth/too-many-requests":"\u8207\u5148\u524D\u767C\u9001\u9593\u9694\u904E\u77ED","auth/missing-email":"\u8ACB\u8F38\u5165\u4FE1\u7BB1","auth/user-not-7":"\u627E\u4E0D\u5230\u8A72\u5E33\u865F"};class ee{constructor(){}async createUser(e,r){return await xe(_,e,r).then(n=>(d=n.user,console.log(`${d.email} create OK`),D.createUserProfile(["client"]),n.user)).catch(n=>{const s=n.code;throw console.log(s),R[`${s}`]})}async signIn(e,r){return await Ee(_,e,r).then(n=>(d=n,n.user)).catch(n=>{const s=n.code;throw R[`${s}`]})}async signOut(){return await Oe(_).then(()=>{}).catch(e=>e.message)}async reauthenticate(e){d=_.currentUser;const r=se.credential(d.email,e);return await Ie(d,r).then(n=>(console.log(`${d.email} reauthenticate OK`),n.user)).catch(n=>{const s=n.code;throw R[`${s}`]})}async updatePassword(e){return d=_.currentUser,await Me(d,e).then(()=>(console.log(`${d.email} updatePassword OK`),!0)).catch(r=>{const n=r.code;throw R[`${n}`]})}async update(e){return d=_.currentUser,await Be(d,e).then(()=>(A.user=null,A.user={...e,...d},A.user.displayName===null&&(A.user.displayName=A.user.email),console.log(`${d.email} update OK`),D.updateUserProfile(e),!0)).catch(r=>{const n=r.code;throw R[`${n}`]})}async deleteUser(){const e=new Date;d=_.currentUser;const r=d.uid;return await Fe(d).then(()=>(D.update(`${r}/profile`,{state:"delete",updateAt:e}),!0)).catch(n=>{const s=n.code;throw R[`${s}`]})}async sendEmail(){return d=_.currentUser,await De(d).then(()=>(console.log(`${d.email} send email OK`),!0)).catch(e=>{const r=e.code;throw R[`${r}`]})}async sendPassword(e){return await Le(_,e).then(()=>(console.log(`${e} send password OK`),!0)).catch(r=>{const n=r.code;throw R[`${n}`]})}async signInAnonymously(){return await Ne(_).then(e=>(D.createUserProfile(["anonymously"]),e.user)).catch(e=>{const r=e.code;throw R[`${r}`]})}async anonymouslyRegister(e,r){const n=se.credential(e,r);return d=_.currentUser,await ze(d,n).then(s=>(A.user=null,A.user=d,console.log(`${d.email} anonymous account upgraded OK`),D.updateUserProfile(),s.user)).catch(s=>{const o=s.code;throw R[`${o}`]})}getUser(){return je(A)}}/**
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
 */const me="firebasestorage.googleapis.com",we="storageBucket",tt=2*60*1e3,nt=10*60*1e3;/**
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
 */class p extends Ye{constructor(e,r,n=0){super(X(e),`Firebase Storage: ${r} (${X(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,p.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return X(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function X(t){return"storage/"+t}function te(){const t="An unknown error occurred, please check the error payload for server response.";return new p("unknown",t)}function rt(t){return new p("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function st(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new p("unauthenticated",t)}function ot(){return new p("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function at(t){return new p("unauthorized","User does not have permission to access '"+t+"'.")}function it(){return new p("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ut(){return new p("canceled","User canceled the upload/download.")}function ct(t){return new p("invalid-url","Invalid URL '"+t+"'.")}function lt(t){return new p("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function dt(){return new p("no-default-bucket","No default bucket found. Did you set the '"+we+"' property when initializing the app?")}function ht(){return new p("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function ft(t){return new p("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Y(t){return new p("invalid-argument",t)}function ye(){return new p("app-deleted","The Firebase app was deleted.")}function pt(t){return new p("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function N(t,e){return new p("invalid-format","String does not match format '"+t+"': "+e)}function L(t){throw new p("internal-error","Internal error: "+t)}/**
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
 */class y{constructor(e,r){this.bucket=e,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,r){let n;try{n=y.makeFromUrl(e,r)}catch{return new y(e,"")}if(n.path==="")return n;throw lt(e)}static makeFromUrl(e,r){let n=null;const s="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function h(w){w.path_=decodeURIComponent(w.path)}const b="v[A-Za-z0-9_]+",T=r.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",C=new RegExp(`^https?://${T}/${b}/b/${s}/o${v}`,"i"),S={bucket:1,path:3},B=r===me?"(?:storage.googleapis.com|storage.cloud.google.com)":r,m="([^?#]*)",F=new RegExp(`^https?://${B}/${s}/${m}`,"i"),k=[{regex:l,indices:u,postModify:o},{regex:C,indices:S,postModify:h},{regex:F,indices:{bucket:1,path:2},postModify:h}];for(let w=0;w<k.length;w++){const z=k[w],K=z.regex.exec(e);if(K){const Ce=K[z.indices.bucket];let W=K[z.indices.path];W||(W=""),n=new y(Ce,W),z.postModify(n);break}}if(n==null)throw ct(e);return n}}class gt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function mt(t,e,r){let n=1,s=null,o=null,a=!1,l=0;function u(){return l===2}let h=!1;function b(...m){h||(h=!0,e.apply(null,m))}function T(m){s=setTimeout(()=>{s=null,t(C,u())},m)}function v(){o&&clearTimeout(o)}function C(m,...F){if(h){v();return}if(m){v(),b.call(null,m,...F);return}if(u()||a){v(),b.call(null,m,...F);return}n<64&&(n*=2);let k;l===1?(l=2,k=0):k=(n+Math.random())*1e3,T(k)}let S=!1;function B(m){S||(S=!0,v(),!h&&(s!==null?(m||(l=2),clearTimeout(s),T(0)):m||(l=1)))}return T(0),o=setTimeout(()=>{a=!0,B(!0)},r),B}function wt(t){t(!1)}/**
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
 */function yt(t){return t!==void 0}function _t(t){return typeof t=="object"&&!Array.isArray(t)}function _e(t){return typeof t=="string"||t instanceof String}function ae(t){return ne()&&t instanceof Blob}function ne(){return typeof Blob<"u"&&!Je()}function ie(t,e,r,n){if(n<e)throw Y(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>r)throw Y(`Invalid value for '${t}'. Expected ${r} or less.`)}/**
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
 */function bt(t,e,r){let n=e;return r==null&&(n=`https://${e}`),`${r}://${n}/v0${t}`}function vt(t){const e=encodeURIComponent;let r="?";for(const n in t)if(t.hasOwnProperty(n)){const s=e(n)+"="+e(t[n]);r=r+s+"&"}return r=r.slice(0,-1),r}/**
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
 */var I;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(I||(I={}));/**
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
 */function kt(t,e){const r=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return r||s||o}/**
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
 */class Rt{constructor(e,r,n,s,o,a,l,u,h,b,T,v=!0){this.url_=e,this.method_=r,this.headers_=n,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=b,this.connectionFactory_=T,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,S)=>{this.resolve_=C,this.reject_=S,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new j(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===I.NO_ERROR,u=o.getStatus();if((!l||kt(u,this.additionalRetryCodes_))&&this.retry){const b=o.getErrorCode()===I.ABORT;n(!1,new j(!1,null,b));return}const h=this.successCodes_.indexOf(u)!==-1;n(!0,new j(h,o))})},r=(n,s)=>{const o=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());yt(u)?o(u):o()}catch(u){a(u)}else if(l!==null){const u=te();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?ye():ut();a(u)}else{const u=it();a(u)}};this.canceled_?r(!1,new j(!1,null,!0)):this.backoffId_=mt(e,r,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class j{constructor(e,r,n){this.wasSuccessCode=e,this.connection=r,this.canceled=!!n}}function $t(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ut(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Tt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ct(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function St(t,e,r,n,s,o,a=!0){const l=vt(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return Tt(h,e),$t(h,r),Ut(h,o),Ct(h,n),new Rt(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,a)}/**
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
 */function At(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Pt(...t){const e=At();if(e!==void 0){const r=new e;for(let n=0;n<t.length;n++)r.append(t[n]);return r.getBlob()}else{if(ne())return new Blob(t);throw new p("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function xt(t,e,r){return t.webkitSlice?t.webkitSlice(e,r):t.mozSlice?t.mozSlice(e,r):t.slice?t.slice(e,r):null}/**
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
 */function Et(t){if(typeof atob>"u")throw ft("base-64");return atob(t)}/**
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
 */const U={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class G{constructor(e,r){this.data=e,this.contentType=r||null}}function Ot(t,e){switch(t){case U.RAW:return new G(be(e));case U.BASE64:case U.BASE64URL:return new G(ve(t,e));case U.DATA_URL:return new G(Mt(e),Bt(e))}throw te()}function be(t){const e=[];for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(r<t.length-1&&(t.charCodeAt(r+1)&64512)===56320))e.push(239,191,189);else{const o=n,a=t.charCodeAt(++r);n=65536|(o&1023)<<10|a&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function It(t){let e;try{e=decodeURIComponent(t)}catch{throw N(U.DATA_URL,"Malformed data URL.")}return be(e)}function ve(t,e){switch(t){case U.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw N(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case U.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw N(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=Et(e)}catch(s){throw s.message.includes("polyfill")?s:N(t,"Invalid character found")}const n=new Uint8Array(r.length);for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);return n}class ke{constructor(e){this.base64=!1,this.contentType=null;const r=e.match(/^data:([^,]+)?,/);if(r===null)throw N(U.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=r[1]||null;n!=null&&(this.base64=Ft(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function Mt(t){const e=new ke(t);return e.base64?ve(U.BASE64,e.rest):It(e.rest)}function Bt(t){return new ke(t).contentType}function Ft(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class x{constructor(e,r){let n=0,s="";ae(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(r?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(r?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,r){if(ae(this.data_)){const n=this.data_,s=xt(n,e,r);return s===null?null:new x(s)}else{const n=new Uint8Array(this.data_.buffer,e,r-e);return new x(n,!0)}}static getBlob(...e){if(ne()){const r=e.map(n=>n instanceof x?n.data_:n);return new x(Pt.apply(null,r))}else{const r=e.map(a=>_e(a)?Ot(U.RAW,a).data:a.data_);let n=0;r.forEach(a=>{n+=a.byteLength});const s=new Uint8Array(n);let o=0;return r.forEach(a=>{for(let l=0;l<a.length;l++)s[o++]=a[l]}),new x(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Dt(t){let e;try{e=JSON.parse(t)}catch{return null}return _t(e)?e:null}/**
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
 */function Lt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Nt(t,e){const r=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?r:t+"/"+r}function Re(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function zt(t,e){return e}class g{constructor(e,r,n,s){this.server=e,this.local=r||e,this.writable=!!n,this.xform=s||zt}}let H=null;function jt(t){return!_e(t)||t.length<2?t:Re(t)}function Ht(){if(H)return H;const t=[];t.push(new g("bucket")),t.push(new g("generation")),t.push(new g("metageneration")),t.push(new g("name","fullPath",!0));function e(o,a){return jt(a)}const r=new g("name");r.xform=e,t.push(r);function n(o,a){return a!==void 0?Number(a):a}const s=new g("size");return s.xform=n,t.push(s),t.push(new g("timeCreated")),t.push(new g("updated")),t.push(new g("md5Hash",null,!0)),t.push(new g("cacheControl",null,!0)),t.push(new g("contentDisposition",null,!0)),t.push(new g("contentEncoding",null,!0)),t.push(new g("contentLanguage",null,!0)),t.push(new g("contentType",null,!0)),t.push(new g("metadata","customMetadata",!0)),H=t,H}function qt(t,e){function r(){const n=t.bucket,s=t.fullPath,o=new y(n,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:r})}function Kt(t,e,r){const n={};n.type="file";const s=r.length;for(let o=0;o<s;o++){const a=r[o];n[a.local]=a.xform(n,e[a.server])}return qt(n,t),n}function Wt(t,e,r){const n=Dt(e);return n===null?null:Kt(t,n,r)}function Xt(t,e){const r={},n=e.length;for(let s=0;s<n;s++){const o=e[s];o.writable&&(r[o.server]=t[o.local])}return JSON.stringify(r)}class Gt{constructor(e,r,n,s){this.url=e,this.method=r,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Vt(t){if(!t)throw te()}function Yt(t,e){function r(n,s){const o=Wt(t,s,e);return Vt(o!==null),o}return r}function Jt(t){function e(r,n){let s;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?s=ot():s=st():r.getStatus()===402?s=rt(t.bucket):r.getStatus()===403?s=at(t.path):s=n,s.status=r.getStatus(),s.serverResponse=n.serverResponse,s}return e}function Qt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Zt(t,e,r){const n=Object.assign({},r);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=Qt(null,e)),n}function en(t,e,r,n,s){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let w=0;w<2;w++)k=k+Math.random().toString().slice(2);return k}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const h=Zt(e,n,s),b=Xt(h,r),T="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+b+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,v=`\r
--`+u+"--",C=x.getBlob(T,n,v);if(C===null)throw ht();const S={name:h.fullPath},B=bt(o,t.host,t._protocol),m="POST",F=t.maxUploadRetryTime,E=new Gt(B,m,Yt(t,r),F);return E.urlParams=S,E.headers=a,E.body=C.uploadData(),E.errorHandler=Jt(e),E}class tn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=I.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=I.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,r,n,s){if(this.sent_)throw L("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw L("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw L("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw L("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw L("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nn extends tn{initXhr(){this.xhr_.responseType="text"}}function rn(){return new nn}/**
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
 */class M{constructor(e,r){this._service=e,r instanceof y?this._location=r:this._location=y.makeFromUrl(r,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,r){return new M(e,r)}get root(){const e=new y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Re(this._location.path)}get storage(){return this._service}get parent(){const e=Lt(this._location.path);if(e===null)return null;const r=new y(this._location.bucket,e);return new M(this._service,r)}_throwIfRoot(e){if(this._location.path==="")throw pt(e)}}function sn(t,e,r){t._throwIfRoot("uploadBytes");const n=en(t.storage,t._location,Ht(),new x(e,!0),r);return t.storage.makeRequestWithTokens(n,rn).then(s=>({metadata:s,ref:t}))}function on(t,e){const r=Nt(t._location.path,e),n=new y(t._location.bucket,r);return new M(t.storage,n)}/**
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
 */function an(t){return/^[A-Za-z]+:\/\//.test(t)}function un(t,e){return new M(t,e)}function $e(t,e){if(t instanceof re){const r=t;if(r._bucket==null)throw dt();const n=new M(r,r._bucket);return e!=null?$e(n,e):n}else return e!==void 0?on(t,e):t}function cn(t,e){if(e&&an(e)){if(t instanceof re)return un(t,e);throw Y("To use ref(service, url), the first argument must be a Storage instance.")}else return $e(t,e)}function ue(t,e){const r=e==null?void 0:e[we];return r==null?null:y.makeFromBucketSpec(r,t)}function ln(t,e,r,n={}){t.host=`${e}:${r}`,t._protocol="http";const{mockUserToken:s}=n;s&&(t._overrideAuthToken=typeof s=="string"?s:Ge(s,t.app.options.projectId))}class re{constructor(e,r,n,s,o){this.app=e,this._authProvider=r,this._appCheckProvider=n,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=me,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tt,this._maxUploadRetryTime=nt,this._requests=new Set,s!=null?this._bucket=y.makeFromBucketSpec(s,this._host):this._bucket=ue(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=y.makeFromBucketSpec(this._url,e):this._bucket=ue(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ie("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ie("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const r=await e.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new M(this,e)}_makeRequest(e,r,n,s,o=!0){if(this._deleted)return new gt(ye());{const a=St(e,this._appId,n,s,r,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,r){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,r,n,s).getPromise()}}const ce="@firebase/storage",le="0.10.0";/**
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
 */const Ue="storage";function de(t,e,r){return t=Q(t),sn(t,e,r)}function he(t,e){return t=Q(t),cn(t,e)}function dn(t=Ke(),e){t=Q(t);const n=He(t,Ue).getImmediate({identifier:e}),s=qe("storage");return s&&hn(n,...s),n}function hn(t,e,r,n={}){ln(t,e,r,n)}function fn(t,{instanceIdentifier:e}){const r=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new re(r,n,s,e,Ve)}function pn(){We(new Xe(Ue,fn,"PUBLIC").setMultipleInstances(!0)),oe(ce,le,""),oe(ce,le,"esm2017")}pn();const fe=new Qe,pe=new Z,ge=dn(),Te=new ee,{user:q}=Te.getUser();class _n{constructor(){}async upload(e){const r=he(ge,`images/${e.name}`);return await de(r,e).then(n=>{console.log(n.metadata.name,"Uploaded a blob or file!");const s={url:`https://firebasestorage.googleapis.com/v0/b/mygame-xian.appspot.com/o/images%2F${n.metadata.name}?alt=media&token=b80d3559-f423-4e68-b07c-96f2ffb2b5b2`,name:n.metadata.name,type:n.metadata.contentType,size:n.metadata.size,fullPath:n.metadata.fullPath,created:n.metadata.timeCreated,uploader:q.value.uid};return fe.keySet(s).then(o=>{pe.set(`${q.value.uid}/images/${o}`,{name:s.name})}),!0}).catch(n=>{throw n})}async uploadProfilePhoto(e){const r=he(ge,`images/${e.name}`);await de(r,e).then(n=>{console.log(n.metadata.name,"Uploaded a blob or file!");const s={url:`https://firebasestorage.googleapis.com/v0/b/mygame-xian.appspot.com/o/images%2F${n.metadata.name}?alt=media&token=b80d3559-f423-4e68-b07c-96f2ffb2b5b2`,name:n.metadata.name,type:n.metadata.contentType,size:n.metadata.size,fullPath:n.metadata.fullPath,created:n.metadata.timeCreated,uploader:q.value.uid};fe.keySet(s).then(o=>{pe.set(`${q.value.uid}/images/${o}`,{name:s.name}),Te.update({photoURL:s.url})})}).catch(n=>{throw n})}}const V=new Ze,c=new Z,gn=new ee;let f;const{user:i}=gn.getUser();class bn{constructor(){}async sendMail(e){let r=new Date;return f={fromUid:i.value.uid,date:r.getTime(),...e},await c.get(`${e.toUid}/publicProfile`).then(()=>{V.keySet(f).then(n=>(console.log(`send to ${e.toUid} ok`),c.set(`${e.toUid}/notCheckedMessage/private/${n}`,{mailKey:n,title:f.title,fromUid:f.fromUid,date:f.date}),!0)).catch(n=>{throw n})}).catch(n=>{throw n})}async sendSystemMail(e){return f={fromUid:"\u7CFB\u7D71",date:new Date().getTime(),...e},await V.keySet(f).then(n=>{c.set(`${i.value.uid}/notCheckedMessage/system/${n}`,{mailKey:n,title:f.title,fromUid:f.fromUid,date:f.date})})}async getPrivateMail(){return await c.array(`${i.value.uid}/notCheckedMessage/private`).then(e=>(e&&(c.remove(`${i.value.uid}/notCheckedMessage/private`),c.update(`${i.value.uid}/message/private/`,e)),c.array(`${i.value.uid}/message/private`).then(r=>r))).catch(e=>c.array(`${i.value.uid}/message/private`).then(r=>r))}async getSystemMail(){return await c.array(`${i.value.uid}/notCheckedMessage/system`).then(e=>(e&&(c.remove(`${i.value.uid}/notCheckedMessage/system`),c.update(`${i.value.uid}/message/system/`,e)),c.array(`${i.value.uid}/message/system`).then(r=>r))).catch(e=>c.array(`${i.value.uid}/message/system`).then(r=>r))}async getMail(e){return await V.get(e).then(r=>r)}async apply(e){let r=new Date;return f={fromUid:i.value.uid,date:r.getTime(),...e},await c.get(`${e.toUid}/publicProfile`).then(()=>c.get(`${i.value.uid}/friends/${e.toUid}`).then(()=>["showError","\u5DF2\u5728\u597D\u53CB\u540D\u55AE"]).catch(()=>e.toUid==i.value.uid?["showError","\u4E0D\u53EF\u65B0\u589E\u81EA\u5DF1\u70BA\u597D\u53CB"]:(c.set(`${e.toUid}/friendsApply/${i.value.uid}`,{uid:f.fromUid,date:f.date,photoURL:i.value.photoURL}),this.sendMail({title:`${i.value.uid} \u5411\u4F60\u7533\u8ACB\u70BA\u597D\u53CB`,...e}),["showSuccess","\u7533\u8ACB\u597D\u53CB\u6210\u529F"]))).catch(()=>{throw"\u67E5\u7121\u6B64\u4EBA"})}async accept(e){return f={date:new Date().getTime(),toUid:e,title:`${i.value.uid} \u63A5\u53D7\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,content:`${i.value.uid} \u5DF2\u63A5\u53D7\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,type:"private"},await c.get(`${i.value.uid}/friendsApply/${e}`).then(n=>(c.remove(`${i.value.uid}/friendsApply/${e}`),c.update(`${i.value.uid}/friends/${e}`,n),c.update(`${e}/friends/${i.value.uid}`,{date:f.date,photoURL:i.value.photoURL,uid:i.value.uid}),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u7533\u8ACB"})}async reject(e){return f={date:new Date().getTime(),toUid:e,title:"\u62D2\u7D55\u4F60\u7684\u597D\u53CB\u7533\u8ACB",content:`${i.value.uid} \u62D2\u7D55\u4F60\u7684\u597D\u53CB\u7533\u8ACB`,type:"private"},await c.get(`${i.value.uid}/friendsApply/${e}`).then(n=>(c.remove(`${i.value.uid}/friendsApply/${e}`),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u7533\u8ACB"})}async deleteFriends(e){return f={date:new Date().getTime(),toUid:e,title:`${i.value.uid} \u89E3\u9664\u8207\u4F60\u7684\u597D\u53CB\u95DC\u4FC2`,content:`${i.value.uid} \u5DF2\u5F9E\u597D\u53CB\u540D\u55AE\u522A\u9664\u4F60`,type:"private"},await c.get(`${i.value.uid}/friends/${e}`).then(n=>(c.remove(`${i.value.uid}/friends/${e}`),c.remove(`${e}/friends/${i.value.uid}`),this.sendMail(f),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u597D\u53CB"})}async editFriends(e,r){return await c.get(`${i.value.uid}/friends/${e}`).then(n=>(c.update(`${i.value.uid}/friends/${e}`,{name:r}),!0)).catch(()=>{throw"\u67E5\u7121\u6B64\u597D\u53CB"})}async getFriendsApply(){return await c.array(`${i.value.uid}/friendsApply`).then(e=>e).catch(e=>{throw e})}async getFriends(){return await c.array(`${i.value.uid}/friends`).then(e=>e).catch(e=>{throw e})}async getProfileFriends(e){return await c.get(`${e}/publicProfile`).then(r=>r).catch(r=>{throw r})}}const P=new et,mn=new ee;let O;const{user:$}=mn.getUser();class vn{constructor(){}async published(e){if(e.area==""||e.content==""||e.theme=="")throw["showError","\u8ACB\u586B\u59A5\u5167\u5BB9"];if($.value.isAnonymous)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u9032\u884C\u4FE1\u7BB1\u8A3B\u518A"];if($.value.displayName==null)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u8A2D\u5B9A\u540D\u7A31"];let r=new Date;return O={author:{fromUid:$.value.uid,displayName:$.value.displayName,photoURL:$.value.photoURL},date:r.getTime(),...e},await P.keySet(O,O.area.type).then(n=>(P.update(`all/${n}/`,{id:n,area:O.area.type}),P.update(`${O.area.type}/${n}/`,{id:n}),["showSuccess","\u767C\u5E03\u6210\u529F"])).catch(()=>{throw["showError","\u767C\u5E03\u5931\u6557"]})}async getAreaArticle(e){return await P.array(e).then(r=>r).catch(r=>{throw r})}async getArticle(e){return await P.get(`all/${e}`).then(r=>P.get(`${r.area}/${r.id}`).then(n=>n).catch(n=>{throw n})).catch(r=>{throw r})}async reply(e,r){if(r.content=="")throw["showError","\u8ACB\u586B\u59A5\u5167\u5BB9"];if($.value.isAnonymous)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u9032\u884C\u4FE1\u7BB1\u8A3B\u518A"];if($.value.displayName==null)throw["showError","\u8ACB\u5148\u81F3\u500B\u4EBA\u8CC7\u6599\u8A2D\u5B9A\u540D\u7A31"];let n=new Date;return O={author:{fromUid:$.value.uid,displayName:$.value.displayName,photoURL:$.value.photoURL},date:n.getTime(),...r},await P.get(`all/${e}`).then(s=>P.keySet(O,`${s.area}/${s.id}/reply`).then(()=>["showSuccess","\u767C\u5E03\u6210\u529F"]).catch(()=>{throw["showError","\u767C\u5E03\u5931\u6557"]})).catch(()=>{throw["showError","\u767C\u5E03\u5931\u6557"]})}}export{ee as A,vn as F,bn as M,_n as S};
