(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sl="169",ei={ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,Wl=1,ld=2,Gh=1,cd=2,Dn=3,ri=0,Ve=1,Pe=2,ni=0,ns=1,Vo=2,Xl=3,$l=4,hd=5,vi=100,ud=101,dd=102,fd=103,pd=104,md=200,_d=201,gd=202,vd=203,ca=204,ha=205,xd=206,yd=207,Md=208,Sd=209,Ed=210,bd=211,wd=212,Ad=213,Td=214,ua=0,da=1,fa=2,ls=3,pa=4,ma=5,_a=6,ga=7,Hh=0,Cd=1,Rd=2,ii=0,Pd=1,Ld=2,Id=3,Dd=4,Ud=5,Nd=6,Fd=7,Vh=300,cs=301,hs=302,va=303,xa=304,tr=306,us=1e3,bn=1001,ya=1002,un=1003,Od=1004,js=1005,cn=1006,mr=1007,Jn=1008,Bn=1009,Wh=1010,Xh=1011,Gs=1012,ol=1013,Mi=1014,Un=1015,Vs=1016,rl=1017,al=1018,ds=1020,$h=35902,qh=1021,Yh=1022,xn=1023,jh=1024,Kh=1025,is=1026,fs=1027,Zh=1028,ll=1029,Jh=1030,cl=1031,hl=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,Ma=35840,Sa=35841,Ea=35842,ba=35843,wa=36196,Aa=37492,Ta=37496,Ca=37808,Ra=37809,Pa=37810,La=37811,Ia=37812,Da=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,ka=37820,Ga=37821,zo=36492,Ha=36494,Va=36495,Qh=36283,Wa=36284,Xa=36285,$a=36286,Bd=3200,zd=3201,tu=0,kd=1,jn="",je="srgb",ai="srgb-linear",ul="display-p3",er="display-p3-linear",Wo="linear",ue="srgb",Xo="rec709",$o="p3",Ri=7680,ql=519,Gd=512,Hd=513,Vd=514,eu=515,Wd=516,Xd=517,$d=518,qd=519,qa=35044,Yl="300 es",Nn=2e3,qo=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jl=1234567;const Fs=Math.PI/180,ps=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function dl(i,t){return(i%t+t)%t}function Yd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jd(i,t,e){return i!==t?(e-i)/(t-i):0}function Os(i,t,e){return(1-e)*i+e*t}function Kd(i,t,e,n){return Os(i,t,1-Math.exp(-e*n))}function Zd(i,t=1){return t-Math.abs(dl(i,t*2)-t)}function Jd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function tf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ef(i,t){return i+Math.random()*(t-i)}function nf(i){return i*(.5-Math.random())}function sf(i){i!==void 0&&(jl=i);let t=jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function of(i){return i*Fs}function rf(i){return i*ps}function af(i){return(i&i-1)===0&&i!==0}function lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hf(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),p=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gt={DEG2RAD:Fs,RAD2DEG:ps,generateUUID:Fn,clamp:Ae,euclideanModulo:dl,mapLinear:Yd,inverseLerp:jd,lerp:Os,damp:Kd,pingpong:Zd,smoothstep:Jd,smootherstep:Qd,randInt:tf,randFloat:ef,randFloatSpread:nf,seededRandom:sf,degToRad:of,radToDeg:rf,isPowerOfTwo:af,ceilPowerOfTwo:lf,floorPowerOfTwo:cf,setQuaternionFromProperEuler:hf,normalize:se,denormalize:vn};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,o,r,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],_=s[6],S=s[1],y=s[4],M=s[7],T=s[2],w=s[5],C=s[8];return o[0]=r*v+a*S+l*T,o[3]=r*m+a*y+l*w,o[6]=r*_+a*M+l*C,o[1]=c*v+h*S+u*T,o[4]=c*m+h*y+u*w,o[7]=c*_+h*M+u*C,o[2]=d*v+p*S+g*T,o[5]=d*m+p*y+g*w,o[8]=d*_+p*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,p=c*o-r*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_r.makeScale(t,e)),this}rotate(t){return this.premultiply(_r.makeRotation(-t)),this}translate(t,e){return this.premultiply(_r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new Wt;function nu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uf(){const i=Yo("canvas");return i.style.display="block",i}const Kl={};function ko(i){i in Kl||(Kl[i]=!0,console.warn(i))}function df(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function ff(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zl=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jl=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[ai]:{transfer:Wo,primaries:Xo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[je]:{transfer:ue,primaries:Xo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[er]:{transfer:Wo,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Jl),fromReference:i=>i.applyMatrix3(Zl)},[ul]:{transfer:ue,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Jl),fromReference:i=>i.applyMatrix3(Zl).convertLinearToSRGB()}},mf=new Set([ai,er]),ne={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!mf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ms[t].toReference,s=Ms[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ms[i].primaries},getTransfer:function(i){return i===jn?Wo:Ms[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ms[t].luminanceCoefficients)}};function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class _f{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Yo("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ss(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ss(e[n]/255)*255):e[n]=ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gf=0;class iu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(vr(s[r].image)):o.push(vr(s[r]))}else o=vr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_f.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;class We extends bi{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=bn,s=bn,o=cn,r=Jn,a=xn,l=Bn,c=We.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Fn(),this.name="",this.source=new iu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Vh;We.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(p+1)/2,T=(_+1)/2,w=(h+d)/4,C=(u+v)/4,P=(g+m)/4;return y>M&&y>T?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=w/n,o=C/n):M>T?M<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),n=w/s,o=P/s):T<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),n=C/o,s=P/o),this.set(n,s,o,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new iu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends xf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class su extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yf extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],p=o[r+1],g=o[r+2],v=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a;const _=l*d+c*p+h*g+u*v,S=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,_*S);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const M=a*S;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+v*M,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],d=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),d=l(n/2),p=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new L,Ql=new Ei;class Ws{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,fn):fn.fromBufferAttribute(o,r),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),Zs.subVectors(this.max,Ss),Li.subVectors(t.a,Ss),Ii.subVectors(t.b,Ss),Di.subVectors(t.c,Ss),Gn.subVectors(Ii,Li),Hn.subVectors(Di,Ii),ci.subVectors(Li,Di);let e=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-ci.z,ci.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,ci.z,0,-ci.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-ci.y,ci.x,0];return!yr(e,Li,Ii,Di,Zs)||(e=[1,0,0,0,1,0,0,0,1],!yr(e,Li,Ii,Di,Zs))?!1:(Js.crossVectors(Gn,Hn),e=[Js.x,Js.y,Js.z],yr(e,Li,Ii,Di,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new L,new L,new L,new L,new L,new L,new L,new L],fn=new L,Ks=new Ws,Li=new L,Ii=new L,Di=new L,Gn=new L,Hn=new L,ci=new L,Ss=new L,Zs=new L,Js=new L,hi=new L;function yr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){hi.fromArray(i,o);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Mf=new Ws,Es=new L,Mr=new L;class nr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mf.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(Mr)),this.expandByPoint(Es.copy(t.center).sub(Mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new L,Sr=new L,Qs=new L,Vn=new L,Er=new L,to=new L,br=new L;class ir{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sr.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Sr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Qs),a=Vn.dot(this.direction),l=-Vn.dot(Qs),c=Vn.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-a,d=r*a-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sr).addScaledVector(Qs,d),p}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,o){Er.subVectors(e,t),to.subVectors(n,t),br.crossVectors(Er,to);let r=this.direction.dot(br),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Vn.subVectors(this.origin,t);const l=a*this.direction.dot(to.crossVectors(Vn,to));if(l<0)return null;const c=a*this.direction.dot(Er.cross(Vn));if(c<0||l+c>r)return null;const h=-a*Vn.dot(br);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,o,r,a,l,c,h,u,d,p,g,v,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,d,p,g,v,m)}set(t,e,n,s,o,r,a,l,c,h,u,d,p,g,v,m){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=o,_[5]=r,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=g,_[11]=v,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),o=1/Ui.setFromMatrixColumn(t,1).length(),r=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-r*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=v-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*l,p=r*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sf,t,Ef)}lookAt(t,e,n){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Wn.crossVectors(n,Qe),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Wn.crossVectors(n,Qe)),Wn.normalize(),eo.crossVectors(Qe,Wn),s[0]=Wn.x,s[4]=eo.x,s[8]=Qe.x,s[1]=Wn.y,s[5]=eo.y,s[9]=Qe.y,s[2]=Wn.z,s[6]=eo.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],_=n[14],S=n[3],y=n[7],M=n[11],T=n[15],w=s[0],C=s[4],P=s[8],D=s[12],x=s[1],E=s[5],N=s[9],U=s[13],F=s[2],$=s[6],V=s[10],z=s[14],O=s[3],tt=s[7],Q=s[11],it=s[15];return o[0]=r*w+a*x+l*F+c*O,o[4]=r*C+a*E+l*$+c*tt,o[8]=r*P+a*N+l*V+c*Q,o[12]=r*D+a*U+l*z+c*it,o[1]=h*w+u*x+d*F+p*O,o[5]=h*C+u*E+d*$+p*tt,o[9]=h*P+u*N+d*V+p*Q,o[13]=h*D+u*U+d*z+p*it,o[2]=g*w+v*x+m*F+_*O,o[6]=g*C+v*E+m*$+_*tt,o[10]=g*P+v*N+m*V+_*Q,o[14]=g*D+v*U+m*z+_*it,o[3]=S*w+y*x+M*F+T*O,o[7]=S*C+y*E+M*$+T*tt,o[11]=S*P+y*N+M*V+T*Q,o[15]=S*D+y*U+M*z+T*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],_=t[15];return g*(+o*l*u-s*c*u-o*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+o*r*d-s*r*p+s*c*h-o*l*h)+m*(+e*c*u-e*a*p-o*r*u+n*r*p+o*a*h-n*c*h)+_*(-s*a*h-e*l*u+e*a*d+s*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],_=t[15],S=u*m*c-v*d*c+v*l*p-a*m*p-u*l*_+a*d*_,y=g*d*c-h*m*c-g*l*p+r*m*p+h*l*_-r*d*_,M=h*v*c-g*u*c+g*a*p-r*v*p-h*a*_+r*u*_,T=g*u*l-h*v*l-g*a*d+r*v*d+h*a*m-r*u*m,w=e*S+n*y+s*M+o*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=S*C,t[1]=(v*d*o-u*m*o-v*s*p+n*m*p+u*s*_-n*d*_)*C,t[2]=(a*m*o-v*l*o+v*s*c-n*m*c-a*s*_+n*l*_)*C,t[3]=(u*l*o-a*d*o-u*s*c+n*d*c+a*s*p-n*l*p)*C,t[4]=y*C,t[5]=(h*m*o-g*d*o+g*s*p-e*m*p-h*s*_+e*d*_)*C,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*_-e*l*_)*C,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*p+e*l*p)*C,t[8]=M*C,t[9]=(g*u*o-h*v*o-g*n*p+e*v*p+h*n*_-e*u*_)*C,t[10]=(r*v*o-g*a*o+g*n*c-e*v*c-r*n*_+e*a*_)*C,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*p-e*a*p)*C,t[12]=T*C,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*C,t[14]=(g*a*s-r*v*s-g*n*l+e*v*l+r*n*m-e*a*m)*C,t[15]=(r*u*s-h*a*s+h*n*l-e*u*l-r*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,p=o*h,g=o*u,v=r*h,m=r*u,_=a*u,S=l*c,y=l*h,M=l*u,T=n.x,w=n.y,C=n.z;return s[0]=(1-(v+_))*T,s[1]=(p+M)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(d+_))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+y)*C,s[9]=(m-S)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Ui.set(s[0],s[1],s[2]).length();const r=Ui.set(s[4],s[5],s[6]).length(),a=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const c=1/o,h=1/r,u=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Nn){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===Nn)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===qo)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Nn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*c,p=(n+s)*h;let g,v;if(a===Nn)g=(r+o)*u,v=-2*u;else if(a===qo)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new L,pn=new le,Sf=new L(0,0,0),Ef=new L(1,1,1),Wn=new L,eo=new L,Qe=new L,tc=new le,ec=new Ei;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ae(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bf=0;const nc=new L,Ni=new Ei,Pn=new le,no=new L,bs=new L,wf=new L,Af=new Ei,ic=new L(1,0,0),sc=new L(0,1,0),oc=new L(0,0,1),rc={type:"added"},Tf={type:"removed"},Fi={type:"childadded",child:null},wr={type:"childremoved",child:null};class ve extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new L,e=new yn,n=new Ei,s=new L(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Wt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(oc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?no.copy(t):no.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(bs,no,this.up):Pn.lookAt(no,bs,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tf),wr.child=t,this.dispatchEvent(wr),wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new L(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new L,Ln=new L,Ar=new L,In=new L,Oi=new L,Bi=new L,ac=new L,Tr=new L,Cr=new L,Rr=new L,Pr=new re,Lr=new re,Ir=new re;class hn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){mn.subVectors(s,e),Ln.subVectors(n,e),Ar.subVectors(t,e);const r=mn.dot(mn),a=mn.dot(Ln),l=mn.dot(Ar),c=Ln.dot(Ln),h=Ln.dot(Ar),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(r*h-a*l)*d;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,In.x),l.addScaledVector(r,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Pr.setScalar(0),Lr.setScalar(0),Ir.setScalar(0),Pr.fromBufferAttribute(t,e),Lr.fromBufferAttribute(t,n),Ir.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Pr,o.x),r.addScaledVector(Lr,o.y),r.addScaledVector(Ir,o.z),r}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Ln.subVectors(t,e),mn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),mn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Oi.subVectors(s,n),Bi.subVectors(o,n),Tr.subVectors(t,n);const l=Oi.dot(Tr),c=Bi.dot(Tr);if(l<=0&&c<=0)return e.copy(n);Cr.subVectors(t,s);const h=Oi.dot(Cr),u=Bi.dot(Cr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Oi,r);Rr.subVectors(t,o);const p=Oi.dot(Rr),g=Bi.dot(Rr);if(g>=0&&p<=g)return e.copy(o);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Bi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ac.subVectors(o,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(ac,a);const _=1/(m+v+d);return r=v*_,a=d*_,e.copy(n).addScaledVector(Oi,r).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},io={h:0,s:0,l:0};function Dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=dl(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Dr(r,o,t+1/3),this.g=Dr(r,o,t),this.b=Dr(r,o,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=je){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return ne.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ae(Fe.r*255,0,255))*65536+Math.round(Ae(Fe.g*255,0,255))*256+Math.round(Ae(Fe.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,o=Fe.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=je){ne.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(io);const n=Os(Xn.h,io.h,e),s=Os(Xn.s,io.s,e),o=Os(Xn.l,io.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Ft;Ft.NAMES=ou;let Cf=0;class wi extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=ns,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xe extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new L,so=new lt;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),o=se(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class ru extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class au extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rf=0;const on=new le,Ur=new ve,zi=new L,tn=new Ws,ws=new Ws,Re=new L;class ze extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nu(t)?au:ru)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(tn.min,ws.min),tn.expandByPoint(Re),Re.addVectors(tn.max,ws.max),tn.expandByPoint(Re)):(tn.expandByPoint(ws.min),tn.expandByPoint(ws.max))}tn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Re.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(t,c),Re.add(zi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;const c=new L,h=new L,u=new L,d=new lt,p=new lt,g=new lt,v=new L,m=new L;function _(P,D,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,x),d.fromBufferAttribute(o,P),p.fromBufferAttribute(o,D),g.fromBufferAttribute(o,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(E),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(E),a[P].add(v),a[D].add(v),a[x].add(v),l[P].add(m),l[D].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,D=S.length;P<D;++P){const x=S[P],E=x.start,N=x.count;for(let U=E,F=E+N;U<F;U+=3)_(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new L,M=new L,T=new L,w=new L;function C(P){T.fromBufferAttribute(s,P),w.copy(T);const D=a[P];y.copy(D),y.sub(T.multiplyScalar(T.dot(D))).normalize(),M.crossVectors(w,D);const E=M.dot(l[P])<0?-1:1;r.setXYZW(P,y.x,y.y,y.z,E)}for(let P=0,D=S.length;P<D;++P){const x=S[P],E=x.start,N=x.count;for(let U=E,F=E+N;U<F;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new L,o=new L,r=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let _=0;_<h;_++)d[g++]=c[p++]}return new Ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new le,ui=new ir,oo=new nr,cc=new L,ro=new L,ao=new L,lo=new L,Nr=new L,co=new L,hc=new L,ho=new L;class dt extends ve{constructor(t=new ze,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){co.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(Nr.fromBufferAttribute(u,t),r?co.addScaledVector(Nr,h):co.addScaledVector(Nr.sub(e),h))}e.add(co)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(o),ui.copy(t.ray).recast(t.near),!(oo.containsPoint(ui.origin)===!1&&(ui.intersectSphere(oo,cc)===null||ui.origin.distanceToSquared(cc)>(t.far-t.near)**2))&&(lc.copy(o).invert(),ui.copy(t.ray).applyMatrix4(lc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],_=r[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,T=y;M<T;M+=3){const w=a.getX(M),C=a.getX(M+1),P=a.getX(M+2);s=uo(this,_,t,n,c,h,u,w,C,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,_=v;m<_;m+=3){const S=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=uo(this,r,t,n,c,h,u,S,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],_=r[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,T=y;M<T;M+=3){const w=M,C=M+1,P=M+2;s=uo(this,_,t,n,c,h,u,w,C,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,_=v;m<_;m+=3){const S=m,y=m+1,M=m+2;s=uo(this,r,t,n,c,h,u,S,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Pf(i,t,e,n,s,o,r,a){let l;if(t.side===Ve?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===ri,a),l===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ho);return c<e.near||c>e.far?null:{distance:c,point:ho.clone(),object:i}}function uo(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,ro),i.getVertexPosition(l,ao),i.getVertexPosition(c,lo);const h=Pf(i,t,e,n,ro,ao,lo,hc);if(h){const u=new L;hn.getBarycoord(hc,ro,ao,lo,u),s&&(h.uv=hn.getInterpolatedAttribute(s,a,l,c,u,new lt)),o&&(h.uv1=hn.getInterpolatedAttribute(o,a,l,c,u,new lt)),r&&(h.normal=hn.getInterpolatedAttribute(r,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};hn.getNormal(ro,ao,lo,d.normal),h.face=d,h.barycoord=u}return h}class ge extends ze{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(v,m,_,S,y,M,T,w,C,P,D){const x=M/C,E=T/P,N=M/2,U=T/2,F=w/2,$=C+1,V=P+1;let z=0,O=0;const tt=new L;for(let Q=0;Q<V;Q++){const it=Q*E-U;for(let Rt=0;Rt<$;Rt++){const nt=Rt*x-N;tt[v]=nt*S,tt[m]=it*y,tt[_]=F,c.push(tt.x,tt.y,tt.z),tt[v]=0,tt[m]=0,tt[_]=w>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Rt/C),u.push(1-Q/P),z+=1}}for(let Q=0;Q<P;Q++)for(let it=0;it<C;it++){const Rt=d+it+$*Q,nt=d+it+$*(Q+1),H=d+(it+1)+$*(Q+1),Y=d+(it+1)+$*Q;l.push(Rt,nt,Y),l.push(nt,H,Y),O+=6}a.addGroup(p,O,D),p+=O,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=ms(i[e]);for(const s in n)t[s]=n[s]}return t}function Lf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const If={clone:ms,merge:Ge};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cu extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,uc=new lt,dc=new lt;class Ke extends cu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,uc,dc),e.subVectors(dc,uc)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Gi=1;class Nf extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(ki,Gi,t,e);s.layers=this.layers,this.add(s);const o=new Ke(ki,Gi,t,e);o.layers=this.layers,this.add(o);const r=new Ke(ki,Gi,t,e);r.layers=this.layers,this.add(r);const a=new Ke(ki,Gi,t,e);a.layers=this.layers,this.add(a);const l=new Ke(ki,Gi,t,e);l.layers=this.layers,this.add(l);const c=new Ke(ki,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hu extends We{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ff extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ge(5,5,5),o=new zn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:ni});o.uniforms.tEquirect.value=e;const r=new dt(s,o),a=e.minFilter;return e.minFilter===Jn&&(e.minFilter=cn),new Nf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Fr=new L,Of=new L,Bf=new Wt;class Yn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fr.subVectors(n,e).cross(Of.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bf.getNormalMatrix(t),s=this.coplanarPoint(Fr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new nr,fo=new L;class pl{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,o=new Yn,r=new Yn){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],_=s[12],S=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-o,d-c,m-p,M-_).normalize(),n[1].setComponents(l+o,d+c,m+p,M+_).normalize(),n[2].setComponents(l+r,d+h,m+g,M+S).normalize(),n[3].setComponents(l-r,d-h,m-g,M-S).normalize(),n[4].setComponents(l-a,d-u,m-v,M-y).normalize(),e===Nn)n[5].setComponents(l+a,d+u,m+v,M+y).normalize();else if(e===qo)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fo.x=s.normal.x>0?t.max.x:t.min.x,fo.y=s.normal.y>0?t.max.y:t.min.y,fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uu(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function zf(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class Ai extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let _=0;_<h;_++){const S=_*d-r;for(let y=0;y<c;y++){const M=y*u-o;g.push(M,-S,0),v.push(0,0,1),m.push(y/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){const y=S+c*_,M=S+c*(_+1),T=S+1+c*(_+1),w=S+1+c*_;p.push(y,M,w),p.push(M,T,w)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,up=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ip=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:kf,alphahash_pars_fragment:Gf,alphamap_fragment:Hf,alphamap_pars_fragment:Vf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:$f,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:jf,begin_vertex:Kf,beginnormal_vertex:Zf,bsdfs:Jf,iridescence_fragment:Qf,bumpmap_pars_fragment:tp,clipping_planes_fragment:ep,clipping_planes_pars_fragment:np,clipping_planes_pars_vertex:ip,clipping_planes_vertex:sp,color_fragment:op,color_pars_fragment:rp,color_pars_vertex:ap,color_vertex:lp,common:cp,cube_uv_reflection_fragment:hp,defaultnormal_vertex:up,displacementmap_pars_vertex:dp,displacementmap_vertex:fp,emissivemap_fragment:pp,emissivemap_pars_fragment:mp,colorspace_fragment:_p,colorspace_pars_fragment:gp,envmap_fragment:vp,envmap_common_pars_fragment:xp,envmap_pars_fragment:yp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Ip,envmap_vertex:Sp,fog_vertex:Ep,fog_pars_vertex:bp,fog_fragment:wp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Pp,lights_pars_begin:Lp,lights_toon_fragment:Dp,lights_toon_pars_fragment:Up,lights_phong_fragment:Np,lights_phong_pars_fragment:Fp,lights_physical_fragment:Op,lights_physical_pars_fragment:Bp,lights_fragment_begin:zp,lights_fragment_maps:kp,lights_fragment_end:Gp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Wp,logdepthbuf_vertex:Xp,map_fragment:$p,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:jp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:Jp,morphcolor_vertex:Qp,morphnormal_vertex:tm,morphtarget_pars_vertex:em,morphtarget_vertex:nm,normal_fragment_begin:im,normal_fragment_maps:sm,normal_pars_fragment:om,normal_pars_vertex:rm,normal_vertex:am,normalmap_pars_fragment:lm,clearcoat_normal_fragment_begin:cm,clearcoat_normal_fragment_maps:hm,clearcoat_pars_fragment:um,iridescence_pars_fragment:dm,opaque_fragment:fm,packing:pm,premultiplied_alpha_fragment:mm,project_vertex:_m,dithering_fragment:gm,dithering_pars_fragment:vm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:Sm,shadowmap_vertex:Em,shadowmask_pars_fragment:bm,skinbase_vertex:wm,skinning_pars_vertex:Am,skinning_vertex:Tm,skinnormal_vertex:Cm,specularmap_fragment:Rm,specularmap_pars_fragment:Pm,tonemapping_fragment:Lm,tonemapping_pars_fragment:Im,transmission_fragment:Dm,transmission_pars_fragment:Um,uv_pars_fragment:Nm,uv_pars_vertex:Fm,uv_vertex:Om,worldpos_vertex:Bm,background_vert:zm,background_frag:km,backgroundCube_vert:Gm,backgroundCube_frag:Hm,cube_vert:Vm,cube_frag:Wm,depth_vert:Xm,depth_frag:$m,distanceRGBA_vert:qm,distanceRGBA_frag:Ym,equirect_vert:jm,equirect_frag:Km,linedashed_vert:Zm,linedashed_frag:Jm,meshbasic_vert:Qm,meshbasic_frag:t_,meshlambert_vert:e_,meshlambert_frag:n_,meshmatcap_vert:i_,meshmatcap_frag:s_,meshnormal_vert:o_,meshnormal_frag:r_,meshphong_vert:a_,meshphong_frag:l_,meshphysical_vert:c_,meshphysical_frag:h_,meshtoon_vert:u_,meshtoon_frag:d_,points_vert:f_,points_frag:p_,shadow_vert:m_,shadow_frag:__,sprite_vert:g_,sprite_frag:v_},ut={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Sn={basic:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ge([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ge([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ge([ut.points,ut.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ge([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ge([ut.common,ut.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ge([ut.sprite,ut.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ge([ut.common,ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ge([ut.lights,ut.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Sn.physical={uniforms:Ge([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const po={r:0,b:0,g:0},fi=new yn,x_=new le;function y_(i,t,e,n,s,o,r){const a=new Ft(0);let l=o===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function v(S){let y=!1;const M=g(S);M===null?_(a,l):M&&M.isColor&&(_(M,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===tr)?(h===void 0&&(h=new dt(new ge(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:ms(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fi.copy(y.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x_.makeRotationFromEuler(fi)),h.material.toneMapped=ne.getTransfer(M.colorSpace)!==ue,(u!==M||d!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new dt(new Ai(2,2),new zn({name:"BackgroundMaterial",uniforms:ms(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ne.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function _(S,y){S.getRGB(po,lu(i)),n.buffers.color.setClear(po.r,po.g,po.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,_(a,l)},render:v,addToRenderList:m}}function M_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(x,E,N,U,F){let $=!1;const V=u(U,N,E);o!==V&&(o=V,c(o.object)),$=p(x,U,N,F),$&&g(x,U,N,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,M(x,E,N,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,E,N){const U=N.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let $=F[E.id];$===void 0&&($={},F[E.id]=$);let V=$[U];return V===void 0&&(V=d(l()),$[U]=V),V}function d(x){const E=[],N=[],U=[];for(let F=0;F<e;F++)E[F]=0,N[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:U,object:x,attributes:{},index:null}}function p(x,E,N,U){const F=o.attributes,$=E.attributes;let V=0;const z=N.getAttributes();for(const O in z)if(z[O].location>=0){const Q=F[O];let it=$[O];if(it===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),Q===void 0||Q.attribute!==it||it&&Q.data!==it.data)return!0;V++}return o.attributesNum!==V||o.index!==U}function g(x,E,N,U){const F={},$=E.attributes;let V=0;const z=N.getAttributes();for(const O in z)if(z[O].location>=0){let Q=$[O];Q===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const it={};it.attribute=Q,Q&&Q.data&&(it.data=Q.data),F[O]=it,V++}o.attributes=F,o.attributesNum=V,o.index=U}function v(){const x=o.newAttributes;for(let E=0,N=x.length;E<N;E++)x[E]=0}function m(x){_(x,0)}function _(x,E){const N=o.newAttributes,U=o.enabledAttributes,F=o.attributeDivisors;N[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),F[x]!==E&&(i.vertexAttribDivisor(x,E),F[x]=E)}function S(){const x=o.newAttributes,E=o.enabledAttributes;for(let N=0,U=E.length;N<U;N++)E[N]!==x[N]&&(i.disableVertexAttribArray(N),E[N]=0)}function y(x,E,N,U,F,$,V){V===!0?i.vertexAttribIPointer(x,E,N,F,$):i.vertexAttribPointer(x,E,N,U,F,$)}function M(x,E,N,U){v();const F=U.attributes,$=N.getAttributes(),V=E.defaultAttributeValues;for(const z in $){const O=$[z];if(O.location>=0){let tt=F[z];if(tt===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),tt!==void 0){const Q=tt.normalized,it=tt.itemSize,Rt=t.get(tt);if(Rt===void 0)continue;const nt=Rt.buffer,H=Rt.type,Y=Rt.bytesPerElement,et=H===i.INT||H===i.UNSIGNED_INT||tt.gpuType===ol;if(tt.isInterleavedBufferAttribute){const ot=tt.data,xt=ot.stride,ct=tt.offset;if(ot.isInstancedInterleavedBuffer){for(let pt=0;pt<O.locationSize;pt++)_(O.location+pt,ot.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let pt=0;pt<O.locationSize;pt++)m(O.location+pt);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let pt=0;pt<O.locationSize;pt++)y(O.location+pt,it/O.locationSize,H,Q,xt*Y,(ct+it/O.locationSize*pt)*Y,et)}else{if(tt.isInstancedBufferAttribute){for(let ot=0;ot<O.locationSize;ot++)_(O.location+ot,tt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ot=0;ot<O.locationSize;ot++)m(O.location+ot);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ot=0;ot<O.locationSize;ot++)y(O.location+ot,it/O.locationSize,H,Q,it*Y,it/O.locationSize*ot*Y,et)}}else if(V!==void 0){const Q=V[z];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(O.location,Q);break;case 3:i.vertexAttrib3fv(O.location,Q);break;case 4:i.vertexAttrib4fv(O.location,Q);break;default:i.vertexAttrib1fv(O.location,Q)}}}}S()}function T(){P();for(const x in n){const E=n[x];for(const N in E){const U=E[N];for(const F in U)h(U[F].object),delete U[F];delete E[N]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const E=n[x.id];for(const N in E){const U=E[N];for(const F in U)h(U[F].object),delete U[F];delete E[N]}delete n[x.id]}function C(x){for(const E in n){const N=n[E];if(N[x.id]===void 0)continue;const U=N[x.id];for(const F in U)h(U[F].object),delete U[F];delete N[x.id]}}function P(){D(),r=!0,o!==s&&(o=s,c(o.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function S_(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function E_(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Un&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:T,maxSamples:w}}function b_(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Yn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,_=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const S=o?0:n,y=S*4;let M=_.clippingState||null;l.value=M,M=h(g,d,y,p);for(let T=0;T!==y;++T)M[T]=e[T];_.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const _=p+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<_)&&(m=new Float32Array(_));for(let y=0,M=p;y!==v;++y,M+=4)r.copy(u[y]).applyMatrix4(S,a),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function w_(i){let t=new WeakMap;function e(r,a){return a===va?r.mapping=cs:a===xa&&(r.mapping=hs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===va||a===xa)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ff(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class du extends cu{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ts=4,fc=[.125,.215,.35,.446,.526,.582],xi=20,Or=new du,pc=new Ft;let Br=null,zr=0,kr=0,Gr=!1;const _i=(1+Math.sqrt(5))/2,Hi=1/_i,mc=[new L(-_i,Hi,0),new L(_i,Hi,0),new L(-Hi,0,_i),new L(Hi,0,_i),new L(0,_i,-Hi),new L(0,_i,Hi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class _c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Br=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Br,zr,kr),this._renderer.xr.enabled=Gr,t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Br=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Vs,format:xn,colorSpace:ai,depthBuffer:!1},s=gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A_(o)),this._blurMaterial=T_(o,t,e)}return s}_compileMaterial(t){const e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,s){const a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pc),h.toneMapping=ii,h.autoClear=!1;const p=new xe({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new dt(new ge,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(pc),v=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):S===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;mo(s,S*y,_>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===cs||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new dt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;mo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=mc[(s-o-1)%mc.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*xi-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):xi;m>xi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const _=[];let S=0;for(let C=0;C<xi;++C){const P=C/v,D=Math.exp(-P*P/2);_.push(D),C===0?S+=D:C<m&&(S+=2*D)}for(let C=0;C<_.length;C++)_[C]=_[C]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const M=this._sizeLods[s],T=3*M*(s>y-ts?s-y+ts:0),w=4*(this._cubeSize-M);mo(e,T,w,3*M,2*M),l.setRenderTarget(e),l.render(u,Or)}}function A_(i){const t=[],e=[],n=[];let s=i;const o=i-ts+1+fc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-ts?l=fc[r-i+ts-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,_=1,S=new Float32Array(v*g*p),y=new Float32Array(m*g*p),M=new Float32Array(_*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,P=w>2?0:-1,D=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(D,v*g*w),y.set(d,m*g*w);const x=[w,w,w,w,w,w];M.set(x,_*g*w)}const T=new ze;T.setAttribute("position",new Ue(S,v)),T.setAttribute("uv",new Ue(y,m)),T.setAttribute("faceIndex",new Ue(M,_)),t.push(T),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gc(i,t,e){const n=new Si(i,t,e);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function T_(i,t,e){const n=new Float32Array(xi),s=new L(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function vc(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function xc(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===va||l===xa,h=l===cs||l===hs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new _c(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new _c(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function R_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ko("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function P_(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,_=v.length;m<_;m++)t.remove(v[m])}d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,_=v.length;m<_;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let y=0,M=S.length;y<M;y+=3){const T=S[y+0],w=S[y+1],C=S[y+2];d.push(T,w,w,C,C,T)}}else if(g!==void 0){const S=g.array;v=g.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const T=y+0,w=y+1,C=y+2;d.push(T,w,w,C,C,T)}}else return;const m=new(nu(d)?au:ru)(d,1);m.version=v;const _=o.get(u);_&&t.remove(_),o.set(u,m)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function L_(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,p){i.drawElements(n,p,o,d*r),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,o,d*r,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,d,0,g);let m=0;for(let _=0;_<g;_++)m+=p[_];e.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d.length;_++)c(d[_]/r,p[_],v[_]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,d,0,v,0,g);let _=0;for(let S=0;S<g;S++)_+=p[S];for(let S=0;S<v.length;S++)e.update(_,n,v[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function I_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function D_(i,t,e){const n=new WeakMap,s=new re;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let T=a.attributes.position.count*M,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*w*4*u),P=new su(C,T,w,u);P.type=Un,P.needsUpdate=!0;const D=M*4;for(let E=0;E<u;E++){const N=_[E],U=S[E],F=y[E],$=T*w*4*E;for(let V=0;V<N.count;V++){const z=V*D;g===!0&&(s.fromBufferAttribute(N,V),C[$+z+0]=s.x,C[$+z+1]=s.y,C[$+z+2]=s.z,C[$+z+3]=0),v===!0&&(s.fromBufferAttribute(U,V),C[$+z+4]=s.x,C[$+z+5]=s.y,C[$+z+6]=s.z,C[$+z+7]=0),m===!0&&(s.fromBufferAttribute(F,V),C[$+z+8]=s.x,C[$+z+9]=s.y,C[$+z+10]=s.z,C[$+z+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new lt(T,w)},n.set(a,d),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function U_(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class fu extends We{constructor(t,e,n,s,o,r,a,l,c,h=is){if(h!==is&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Mi),n===void 0&&h===fs&&(n=ds),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pu=new We,yc=new fu(1,1),mu=new su,_u=new yf,gu=new hu,Mc=[],Sc=[],Ec=new Float32Array(16),bc=new Float32Array(9),wc=new Float32Array(4);function vs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Mc[s];if(o===void 0&&(o=new Float32Array(s),Mc[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sr(i,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function N_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function F_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function B_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function z_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Te(e,n))return;wc.set(n),i.uniformMatrix2fv(this.addr,!1,wc),Ce(e,n)}}function k_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Te(e,n))return;bc.set(n),i.uniformMatrix3fv(this.addr,!1,bc),Ce(e,n)}}function G_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Te(e,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),Ce(e,n)}}function H_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function V_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function $_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function j_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function K_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(yc.compareFunction=eu,o=yc):o=pu,e.setTexture2D(t||o,s)}function Z_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_u,s)}function J_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gu,s)}function Q_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mu,s)}function t0(i){switch(i){case 5126:return N_;case 35664:return F_;case 35665:return O_;case 35666:return B_;case 35674:return z_;case 35675:return k_;case 35676:return G_;case 5124:case 35670:return H_;case 35667:case 35671:return V_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return $_;case 36294:return q_;case 36295:return Y_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Q_}}function e0(i,t){i.uniform1fv(this.addr,t)}function n0(i,t){const e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function i0(i,t){const e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function s0(i,t){const e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function o0(i,t){const e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function r0(i,t){const e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function a0(i,t){const e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function l0(i,t){i.uniform1iv(this.addr,t)}function c0(i,t){i.uniform2iv(this.addr,t)}function h0(i,t){i.uniform3iv(this.addr,t)}function u0(i,t){i.uniform4iv(this.addr,t)}function d0(i,t){i.uniform1uiv(this.addr,t)}function f0(i,t){i.uniform2uiv(this.addr,t)}function p0(i,t){i.uniform3uiv(this.addr,t)}function m0(i,t){i.uniform4uiv(this.addr,t)}function _0(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);Te(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||pu,o[r])}function g0(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);Te(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||_u,o[r])}function v0(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);Te(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||gu,o[r])}function x0(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);Te(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||mu,o[r])}function y0(i){switch(i){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return o0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return d0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return x0}}class M0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=t0(e.type)}}class S0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y0(e.type)}}class E0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function Ac(i,t){i.seq.push(t),i.map[t.id]=t}function b0(i,t,e){const n=i.name,s=n.length;for(Hr.lastIndex=0;;){const o=Hr.exec(n),r=Hr.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Ac(e,c===void 0?new M0(a,i,t):new S0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new E0(a),Ac(e,u)),e=u}}}class Go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);b0(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Tc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const w0=37297;let A0=0;function T0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function C0(i){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(i);let n;switch(t===e?n="":t===$o&&e===Xo?n="LinearDisplayP3ToLinearSRGB":t===Xo&&e===$o&&(n="LinearSRGBToLinearDisplayP3"),i){case ai:case er:return[n,"LinearTransferOETF"];case je:case ul:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Cc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+T0(i.getShaderSource(t),r)}else return s}function R0(i,t){const e=C0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function P0(i,t){let e;switch(t){case Pd:e="Linear";break;case Ld:e="Reinhard";break;case Id:e="Cineon";break;case Dd:e="ACESFilmic";break;case Nd:e="AgX";break;case Fd:e="Neutral";break;case Ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _o=new L;function L0(){ne.getLuminanceCoefficients(_o);const i=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function D0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Us(i){return i!==""}function Rc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(N0,O0)}const F0=new Map;function O0(i,t){let e=Vt[t];if(e===void 0){const n=F0.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}const B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(i){return i.replace(B0,z0)}function z0(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ic(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function G0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function V0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hh:t="ENVMAP_BLENDING_MULTIPLY";break;case Cd:t="ENVMAP_BLENDING_MIX";break;case Rd:t="ENVMAP_BLENDING_ADD";break}return t}function W0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function X0(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=k0(e),c=G0(e),h=H0(e),u=V0(e),d=W0(e),p=I0(e),g=D0(o),v=s.createProgram();let m,_,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),_.length>0&&(_+=`
`)):(m=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),_=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ii?P0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),L0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),r=Ya(r),r=Rc(r,e),r=Pc(r,e),a=Ya(a),a=Rc(a,e),a=Pc(a,e),r=Lc(r),a=Lc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=S+m+r,M=S+_+a,T=Tc(s,s.VERTEX_SHADER,y),w=Tc(s,s.FRAGMENT_SHADER,M);s.attachShader(v,T),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(E){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(w).trim();let $=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,w);else{const z=Cc(s,T,"vertex"),O=Cc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+z+`
`+O)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||F==="")&&(V=!1);V&&(E.diagnostics={runnable:$,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:F,prefix:_}})}s.deleteShader(T),s.deleteShader(w),P=new Go(s,v),D=U0(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let D;this.getAttributes=function(){return D===void 0&&C(this),D};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,w0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let $0=0;class q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Y0(t),e.set(t,n)),n}}class Y0{constructor(t){this.id=$0++,this.code=t,this.usedTimes=0}}function j0(i,t,e,n,s,o,r){const a=new fl,l=new q0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,E,N,U,F){const $=U.fog,V=F.geometry,z=x.isMeshStandardMaterial?U.environment:null,O=(x.isMeshStandardMaterial?e:t).get(x.envMap||z),tt=O&&O.mapping===tr?O.image.height:null,Q=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const it=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Rt=it!==void 0?it.length:0;let nt=0;V.morphAttributes.position!==void 0&&(nt=1),V.morphAttributes.normal!==void 0&&(nt=2),V.morphAttributes.color!==void 0&&(nt=3);let H,Y,et,ot;if(Q){const $e=Sn[Q];H=$e.vertexShader,Y=$e.fragmentShader}else H=x.vertexShader,Y=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),ot=l.getFragmentShaderID(x);const xt=i.getRenderTarget(),ct=F.isInstancedMesh===!0,pt=F.isBatchedMesh===!0,ht=!!x.map,Lt=!!x.matcap,I=!!O,Xt=!!x.aoMap,It=!!x.lightMap,Ht=!!x.bumpMap,At=!!x.normalMap,jt=!!x.displacementMap,Dt=!!x.emissiveMap,R=!!x.metalnessMap,b=!!x.roughnessMap,W=x.anisotropy>0,K=x.clearcoat>0,st=x.dispersion>0,Z=x.iridescence>0,Tt=x.sheen>0,ft=x.transmission>0,yt=W&&!!x.anisotropyMap,Kt=K&&!!x.clearcoatMap,rt=K&&!!x.clearcoatNormalMap,Mt=K&&!!x.clearcoatRoughnessMap,Bt=Z&&!!x.iridescenceMap,zt=Z&&!!x.iridescenceThicknessMap,St=Tt&&!!x.sheenColorMap,$t=Tt&&!!x.sheenRoughnessMap,kt=!!x.specularMap,ce=!!x.specularColorMap,B=!!x.specularIntensityMap,gt=ft&&!!x.transmissionMap,j=ft&&!!x.thicknessMap,J=!!x.gradientMap,mt=!!x.alphaMap,vt=x.alphaTest>0,qt=!!x.alphaHash,ye=!!x.extensions;let Xe=ii;x.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const Jt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:Y,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:ot,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:pt,batchingColor:pt&&F._colorsTexture!==null,instancing:ct,instancingColor:ct&&F.instanceColor!==null,instancingMorph:ct&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:ai,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:Lt,envMap:I,envMapMode:I&&O.mapping,envMapCubeUVHeight:tt,aoMap:Xt,lightMap:It,bumpMap:Ht,normalMap:At,displacementMap:p&&jt,emissiveMap:Dt,normalMapObjectSpace:At&&x.normalMapType===kd,normalMapTangentSpace:At&&x.normalMapType===tu,metalnessMap:R,roughnessMap:b,anisotropy:W,anisotropyMap:yt,clearcoat:K,clearcoatMap:Kt,clearcoatNormalMap:rt,clearcoatRoughnessMap:Mt,dispersion:st,iridescence:Z,iridescenceMap:Bt,iridescenceThicknessMap:zt,sheen:Tt,sheenColorMap:St,sheenRoughnessMap:$t,specularMap:kt,specularColorMap:ce,specularIntensityMap:B,transmission:ft,transmissionMap:gt,thicknessMap:j,gradientMap:J,opaque:x.transparent===!1&&x.blending===ns&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:vt,alphaHash:qt,combine:x.combine,mapUv:ht&&m(x.map.channel),aoMapUv:Xt&&m(x.aoMap.channel),lightMapUv:It&&m(x.lightMap.channel),bumpMapUv:Ht&&m(x.bumpMap.channel),normalMapUv:At&&m(x.normalMap.channel),displacementMapUv:jt&&m(x.displacementMap.channel),emissiveMapUv:Dt&&m(x.emissiveMap.channel),metalnessMapUv:R&&m(x.metalnessMap.channel),roughnessMapUv:b&&m(x.roughnessMap.channel),anisotropyMapUv:yt&&m(x.anisotropyMap.channel),clearcoatMapUv:Kt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:St&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:$t&&m(x.sheenRoughnessMap.channel),specularMapUv:kt&&m(x.specularMap.channel),specularColorMapUv:ce&&m(x.specularColorMap.channel),specularIntensityMapUv:B&&m(x.specularIntensityMap.channel),transmissionMapUv:gt&&m(x.transmissionMap.channel),thicknessMapUv:j&&m(x.thicknessMap.channel),alphaMapUv:mt&&m(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(At||W),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(ht||mt),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:nt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pe,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function S(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)E.push(N),E.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(y(E,x),M(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function y(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function T(x){const E=v[x.type];let N;if(E){const U=Sn[E];N=If.clone(U.uniforms)}else N=x.uniforms;return N}function w(x,E){let N;for(let U=0,F=h.length;U<F;U++){const $=h[U];if($.cacheKey===E){N=$,++N.usedTimes;break}}return N===void 0&&(N=new X0(i,E,x,o),h.push(N)),N}function C(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function P(x){l.remove(x)}function D(){l.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:T,acquireProgram:w,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:D}}function K0(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uc(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,p,g,v,m){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=p,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=v,_.group=m),t++,_}function a(u,d,p,g,v,m){const _=r(u,d,p,g,v,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):e.push(_)}function l(u,d,p,g,v,m){const _=r(u,d,p,g,v,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function c(u,d){e.length>1&&e.sort(u||Z0),n.length>1&&n.sort(d||Dc),s.length>1&&s.sort(d||Dc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function J0(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Uc,i.set(n,[r])):s>=o.length?(r=new Uc,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Q0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ft};break;case"SpotLight":e={position:new L,direction:new L,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let eg=0;function ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ig(i){const t=new Q0,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,o=new le,r=new le;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,g=0,v=0,m=0,_=0,S=0,y=0,M=0,T=0,w=0,C=0;c.sort(ng);for(let D=0,x=c.length;D<x;D++){const E=c[D],N=E.color,U=E.intensity,F=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=N.r*U,u+=N.g*U,d+=N.b*U;else if(E.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(E.sh.coefficients[V],U);C++}else if(E.isDirectionalLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const z=E.shadow,O=e.get(E);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=E.shadow.matrix,S++}n.directional[p]=V,p++}else if(E.isSpotLight){const V=t.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(N).multiplyScalar(U),V.distance=F,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,n.spot[v]=V;const z=E.shadow;if(E.map&&(n.spotLightMap[T]=E.map,T++,z.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[v]=z.matrix,E.castShadow){const O=e.get(E);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.spotShadow[v]=O,n.spotShadowMap[v]=$,M++}v++}else if(E.isRectAreaLight){const V=t.get(E);V.color.copy(N).multiplyScalar(U),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=V,m++}else if(E.isPointLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const z=E.shadow,O=e.get(E);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=E.shadow.matrix,y++}n.point[g]=V,g++}else if(E.isHemisphereLight){const V=t.get(E);V.skyColor.copy(E.color).multiplyScalar(U),V.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[_]=V,_++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==_||P.numDirectionalShadows!==S||P.numPointShadows!==y||P.numSpotShadows!==M||P.numSpotMaps!==T||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=_,P.numDirectionalShadows=S,P.numPointShadows=y,P.numSpotShadows=M,P.numSpotMaps=T,P.numLightProbes=C,n.version=eg++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){const y=c[_];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),r.identity(),o.copy(y.matrixWorld),o.premultiply(m),r.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Nc(i){const t=new ig(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function sg(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Nc(i),t.set(s,[a])):o>=r.length?(a=new Nc(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class og extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rg extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cg(i,t,e){let n=new pl;const s=new lt,o=new lt,r=new re,a=new og({depthPacking:zd}),l=new rg,c={},h=e.maxTextureSize,u={[ri]:Ve,[Ve]:ri,[Pe]:Pe},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:ag,fragmentShader:lg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let _=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const D=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ni),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=_!==Dn&&this.type===Dn,F=_===Dn&&this.type!==Dn;for(let $=0,V=w.length;$<V;$++){const z=w[$],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const tt=O.getFrameExtents();if(s.multiply(tt),o.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/tt.x),s.x=o.x*tt.x,O.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/tt.y),s.y=o.y*tt.y,O.mapSize.y=o.y)),O.map===null||U===!0||F===!0){const it=this.type!==Dn?{minFilter:un,magFilter:un}:{};O.map!==null&&O.map.dispose(),O.map=new Si(s.x,s.y,it),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const Q=O.getViewportCount();for(let it=0;it<Q;it++){const Rt=O.getViewport(it);r.set(o.x*Rt.x,o.y*Rt.y,o.x*Rt.z,o.y*Rt.w),N.viewport(r),O.updateMatrices(z,it),n=O.getFrustum(),M(C,P,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Dn&&S(O,P),O.needsUpdate=!1}_=this.type,m.needsUpdate=!1,i.setRenderTarget(D,x,E)};function S(w,C){const P=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Si(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,P,p,v,null)}function y(w,C,P,D){let x=null;const E=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const N=x.uuid,U=C.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let $=F[U];$===void 0&&($=x.clone(),F[U]=$,C.addEventListener("dispose",T)),x=$}if(x.visible=C.visible,x.wireframe=C.wireframe,D===Dn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=i.properties.get(x);N.light=P}return x}function M(w,C,P,D,x){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Dn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const U=t.update(w),F=w.material;if(Array.isArray(F)){const $=U.groups;for(let V=0,z=$.length;V<z;V++){const O=$[V],tt=F[O.materialIndex];if(tt&&tt.visible){const Q=y(w,tt,D,x);w.onBeforeShadow(i,w,C,P,U,Q,O),i.renderBufferDirect(P,null,U,Q,w,O),w.onAfterShadow(i,w,C,P,U,Q,O)}}}else if(F.visible){const $=y(w,F,D,x);w.onBeforeShadow(i,w,C,P,U,$,null),i.renderBufferDirect(P,null,U,$,w,null),w.onAfterShadow(i,w,C,P,U,$,null)}}const N=w.children;for(let U=0,F=N.length;U<F;U++)M(N[U],C,P,D,x)}function T(w){w.target.removeEventListener("dispose",T);for(const P in c){const D=c[P],x=w.target.uuid;x in D&&(D[x].dispose(),delete D[x])}}}const hg={[ua]:da,[fa]:_a,[pa]:ga,[ls]:ma,[da]:ua,[_a]:fa,[ga]:pa,[ma]:ls};function ug(i){function t(){let B=!1;const gt=new re;let j=null;const J=new re(0,0,0,0);return{setMask:function(mt){j!==mt&&!B&&(i.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){B=mt},setClear:function(mt,vt,qt,ye,Xe){Xe===!0&&(mt*=ye,vt*=ye,qt*=ye),gt.set(mt,vt,qt,ye),J.equals(gt)===!1&&(i.clearColor(mt,vt,qt,ye),J.copy(gt))},reset:function(){B=!1,j=null,J.set(-1,0,0,0)}}}function e(){let B=!1,gt=!1,j=null,J=null,mt=null;return{setReversed:function(vt){gt=vt},setTest:function(vt){vt?et(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(vt){j!==vt&&!B&&(i.depthMask(vt),j=vt)},setFunc:function(vt){if(gt&&(vt=hg[vt]),J!==vt){switch(vt){case ua:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=vt}},setLocked:function(vt){B=vt},setClear:function(vt){mt!==vt&&(i.clearDepth(vt),mt=vt)},reset:function(){B=!1,j=null,J=null,mt=null}}}function n(){let B=!1,gt=null,j=null,J=null,mt=null,vt=null,qt=null,ye=null,Xe=null;return{setTest:function(Jt){B||(Jt?et(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Jt){gt!==Jt&&!B&&(i.stencilMask(Jt),gt=Jt)},setFunc:function(Jt,$e,Tn){(j!==Jt||J!==$e||mt!==Tn)&&(i.stencilFunc(Jt,$e,Tn),j=Jt,J=$e,mt=Tn)},setOp:function(Jt,$e,Tn){(vt!==Jt||qt!==$e||ye!==Tn)&&(i.stencilOp(Jt,$e,Tn),vt=Jt,qt=$e,ye=Tn)},setLocked:function(Jt){B=Jt},setClear:function(Jt){Xe!==Jt&&(i.clearStencil(Jt),Xe=Jt)},reset:function(){B=!1,gt=null,j=null,J=null,mt=null,vt=null,qt=null,ye=null,Xe=null}}}const s=new t,o=new e,r=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,_=null,S=null,y=null,M=null,T=null,w=new Ft(0,0,0),C=0,P=!1,D=null,x=null,E=null,N=null,U=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),$=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),$=V>=2);let O=null,tt={};const Q=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),Rt=new re().fromArray(Q),nt=new re().fromArray(it);function H(B,gt,j,J){const mt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(B,vt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<j;qt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(gt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return vt}const Y={};Y[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),et(i.DEPTH_TEST),o.setFunc(ls),It(!1),Ht(Wl),et(i.CULL_FACE),I(ni);function et(B){c[B]!==!0&&(i.enable(B),c[B]=!0)}function ot(B){c[B]!==!1&&(i.disable(B),c[B]=!1)}function xt(B,gt){return h[B]!==gt?(i.bindFramebuffer(B,gt),h[B]=gt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function ct(B,gt){let j=d,J=!1;if(B){j=u.get(gt),j===void 0&&(j=[],u.set(gt,j));const mt=B.textures;if(j.length!==mt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,qt=mt.length;vt<qt;vt++)j[vt]=i.COLOR_ATTACHMENT0+vt;j.length=mt.length,J=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,J=!0);J&&i.drawBuffers(j)}function pt(B){return p!==B?(i.useProgram(B),p=B,!0):!1}const ht={[vi]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[dd]:i.FUNC_REVERSE_SUBTRACT};ht[fd]=i.MIN,ht[pd]=i.MAX;const Lt={[md]:i.ZERO,[_d]:i.ONE,[gd]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[xd]:i.DST_ALPHA,[vd]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[Sd]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function I(B,gt,j,J,mt,vt,qt,ye,Xe,Jt){if(B===ni){g===!0&&(ot(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),B!==hd){if(B!==v||Jt!==P){if((m!==vi||y!==vi)&&(i.blendEquation(i.FUNC_ADD),m=vi,y=vi),Jt)switch(B){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,S=null,M=null,T=null,w.set(0,0,0),C=0,v=B,P=Jt}return}mt=mt||gt,vt=vt||j,qt=qt||J,(gt!==m||mt!==y)&&(i.blendEquationSeparate(ht[gt],ht[mt]),m=gt,y=mt),(j!==_||J!==S||vt!==M||qt!==T)&&(i.blendFuncSeparate(Lt[j],Lt[J],Lt[vt],Lt[qt]),_=j,S=J,M=vt,T=qt),(ye.equals(w)===!1||Xe!==C)&&(i.blendColor(ye.r,ye.g,ye.b,Xe),w.copy(ye),C=Xe),v=B,P=!1}function Xt(B,gt){B.side===Pe?ot(i.CULL_FACE):et(i.CULL_FACE);let j=B.side===Ve;gt&&(j=!j),It(j),B.blending===ns&&B.transparent===!1?I(ni):I(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const J=B.stencilWrite;r.setTest(J),J&&(r.setMask(B.stencilWriteMask),r.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),r.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),jt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(B){D!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),D=B)}function Ht(B){B!==ad?(et(i.CULL_FACE),B!==x&&(B===Wl?i.cullFace(i.BACK):B===ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),x=B}function At(B){B!==E&&($&&i.lineWidth(B),E=B)}function jt(B,gt,j){B?(et(i.POLYGON_OFFSET_FILL),(N!==gt||U!==j)&&(i.polygonOffset(gt,j),N=gt,U=j)):ot(i.POLYGON_OFFSET_FILL)}function Dt(B){B?et(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function R(B){B===void 0&&(B=i.TEXTURE0+F-1),O!==B&&(i.activeTexture(B),O=B)}function b(B,gt,j){j===void 0&&(O===null?j=i.TEXTURE0+F-1:j=O);let J=tt[j];J===void 0&&(J={type:void 0,texture:void 0},tt[j]=J),(J.type!==B||J.texture!==gt)&&(O!==j&&(i.activeTexture(j),O=j),i.bindTexture(B,gt||Y[B]),J.type=B,J.texture=gt)}function W(){const B=tt[O];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(B){Rt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Rt.copy(B))}function St(B){nt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),nt.copy(B))}function $t(B,gt){let j=l.get(gt);j===void 0&&(j=new WeakMap,l.set(gt,j));let J=j.get(B);J===void 0&&(J=i.getUniformBlockIndex(gt,B.name),j.set(B,J))}function kt(B,gt){const J=l.get(gt).get(B);a.get(gt)!==J&&(i.uniformBlockBinding(gt,J,B.__bindingPointIndex),a.set(gt,J))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},O=null,tt={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,_=null,S=null,y=null,M=null,T=null,w=new Ft(0,0,0),C=0,P=!1,D=null,x=null,E=null,N=null,U=null,Rt.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:et,disable:ot,bindFramebuffer:xt,drawBuffers:ct,useProgram:pt,setBlending:I,setMaterial:Xt,setFlipSided:It,setCullFace:Ht,setLineWidth:At,setPolygonOffset:jt,setScissorTest:Dt,activeTexture:R,bindTexture:b,unbindTexture:W,compressedTexImage2D:K,compressedTexImage3D:st,texImage2D:Mt,texImage3D:Bt,updateUBOMapping:$t,uniformBlockBinding:kt,texStorage2D:Kt,texStorage3D:rt,texSubImage2D:Z,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:zt,viewport:St,reset:ce}}function Fc(i,t,e,n){const s=dg(n);switch(e){case qh:return i*t;case jh:return i*t;case Kh:return i*t*2;case Zh:return i*t/s.components*s.byteLength;case ll:return i*t/s.components*s.byteLength;case Jh:return i*t*2/s.components*s.byteLength;case cl:return i*t*2/s.components*s.byteLength;case Yh:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case hl:return i*t*4/s.components*s.byteLength;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case ba:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case wa:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zo:case Ha:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qh:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(i){switch(i){case Bn:case Wh:return{byteLength:1,components:1};case Gs:case Xh:case Vs:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case Mi:case ol:case Un:return{byteLength:4,components:1};case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fg(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return p?new OffscreenCanvas(R,b):Yo("canvas")}function v(R,b,W){let K=1;const st=Dt(R);if((st.width>W||st.height>W)&&(K=W/Math.max(st.width,st.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(K*st.width),Tt=Math.floor(K*st.height);u===void 0&&(u=g(Z,Tt));const ft=b?g(Z,Tt):u;return ft.width=Z,ft.height=Tt,ft.getContext("2d").drawImage(R,0,0,Z,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Z+"x"+Tt+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==un&&R.minFilter!==cn}function _(R){i.generateMipmap(R)}function S(R,b,W,K,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===i.RED&&(W===i.FLOAT&&(Z=i.R32F),W===i.HALF_FLOAT&&(Z=i.R16F),W===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.R8UI),W===i.UNSIGNED_SHORT&&(Z=i.R16UI),W===i.UNSIGNED_INT&&(Z=i.R32UI),W===i.BYTE&&(Z=i.R8I),W===i.SHORT&&(Z=i.R16I),W===i.INT&&(Z=i.R32I)),b===i.RG&&(W===i.FLOAT&&(Z=i.RG32F),W===i.HALF_FLOAT&&(Z=i.RG16F),W===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RG8UI),W===i.UNSIGNED_SHORT&&(Z=i.RG16UI),W===i.UNSIGNED_INT&&(Z=i.RG32UI),W===i.BYTE&&(Z=i.RG8I),W===i.SHORT&&(Z=i.RG16I),W===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),W===i.UNSIGNED_INT&&(Z=i.RGB32UI),W===i.BYTE&&(Z=i.RGB8I),W===i.SHORT&&(Z=i.RGB16I),W===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),W===i.UNSIGNED_INT&&(Z=i.RGBA32UI),W===i.BYTE&&(Z=i.RGBA8I),W===i.SHORT&&(Z=i.RGBA16I),W===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){const Tt=st?Wo:ne.getTransfer(K);W===i.FLOAT&&(Z=i.RGBA32F),W===i.HALF_FLOAT&&(Z=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Z=Tt===ue?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(R,b){let W;return R?b===null||b===Mi||b===ds?W=i.DEPTH24_STENCIL8:b===Un?W=i.DEPTH32F_STENCIL8:b===Gs&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Mi||b===ds?W=i.DEPTH_COMPONENT24:b===Un?W=i.DEPTH_COMPONENT32F:b===Gs&&(W=i.DEPTH_COMPONENT16),W}function M(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==un&&R.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){const b=R.target;b.removeEventListener("dispose",T),C(b),b.isVideoTexture&&h.delete(b)}function w(R){const b=R.target;b.removeEventListener("dispose",w),D(b)}function C(R){const b=n.get(R);if(b.__webglInit===void 0)return;const W=R.source,K=d.get(W);if(K){const st=K[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&P(R),Object.keys(K).length===0&&d.delete(W)}n.remove(R)}function P(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const W=R.source,K=d.get(W);delete K[b.__cacheKey],r.memory.textures--}function D(R){const b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let st=0;st<b.__webglFramebuffer[K].length;st++)i.deleteFramebuffer(b.__webglFramebuffer[K][st]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=R.textures;for(let K=0,st=W.length;K<st;K++){const Z=n.get(W[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),r.memory.textures--),n.remove(W[K])}n.remove(R)}let x=0;function E(){x=0}function N(){const R=x;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),x+=1,R}function U(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function F(R,b){const W=n.get(R);if(R.isVideoTexture&&At(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(W,R,b);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function $(R,b){const W=n.get(R);if(R.version>0&&W.__version!==R.version){nt(W,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function V(R,b){const W=n.get(R);if(R.version>0&&W.__version!==R.version){nt(W,R,b);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function z(R,b){const W=n.get(R);if(R.version>0&&W.__version!==R.version){H(W,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}const O={[us]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},tt={[un]:i.NEAREST,[Od]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[mr]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},Q={[Gd]:i.NEVER,[qd]:i.ALWAYS,[Hd]:i.LESS,[eu]:i.LEQUAL,[Vd]:i.EQUAL,[$d]:i.GEQUAL,[Wd]:i.GREATER,[Xd]:i.NOTEQUAL};function it(R,b){if(b.type===Un&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===mr||b.magFilter===js||b.magFilter===Jn||b.minFilter===cn||b.minFilter===mr||b.minFilter===js||b.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,O[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,O[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,O[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==js&&b.minFilter!==Jn||b.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Rt(R,b){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));const K=b.source;let st=d.get(K);st===void 0&&(st={},d.set(K,st));const Z=U(b);if(Z!==R.__cacheKey){st[Z]===void 0&&(st[Z]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,W=!0),st[Z].usedTimes++;const Tt=st[R.__cacheKey];Tt!==void 0&&(st[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&P(b)),R.__cacheKey=Z,R.__webglTexture=st[Z].texture}return W}function nt(R,b,W){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const st=Rt(R,b),Z=b.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+W);const Tt=n.get(Z);if(Z.version!==Tt.__version||st===!0){e.activeTexture(i.TEXTURE0+W);const ft=ne.getPrimaries(ne.workingColorSpace),yt=b.colorSpace===jn?null:ne.getPrimaries(b.colorSpace),Kt=b.colorSpace===jn||ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let rt=v(b.image,!1,s.maxTextureSize);rt=jt(b,rt);const Mt=o.convert(b.format,b.colorSpace),Bt=o.convert(b.type);let zt=S(b.internalFormat,Mt,Bt,b.colorSpace,b.isVideoTexture);it(K,b);let St;const $t=b.mipmaps,kt=b.isVideoTexture!==!0,ce=Tt.__version===void 0||st===!0,B=Z.dataReady,gt=M(b,rt);if(b.isDepthTexture)zt=y(b.format===fs,b.type),ce&&(kt?e.texStorage2D(i.TEXTURE_2D,1,zt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,zt,rt.width,rt.height,0,Mt,Bt,null));else if(b.isDataTexture)if($t.length>0){kt&&ce&&e.texStorage2D(i.TEXTURE_2D,gt,zt,$t[0].width,$t[0].height);for(let j=0,J=$t.length;j<J;j++)St=$t[j],kt?B&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,St.width,St.height,Mt,Bt,St.data):e.texImage2D(i.TEXTURE_2D,j,zt,St.width,St.height,0,Mt,Bt,St.data);b.generateMipmaps=!1}else kt?(ce&&e.texStorage2D(i.TEXTURE_2D,gt,zt,rt.width,rt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Mt,Bt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,zt,rt.width,rt.height,0,Mt,Bt,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,zt,$t[0].width,$t[0].height,rt.depth);for(let j=0,J=$t.length;j<J;j++)if(St=$t[j],b.format!==xn)if(Mt!==null)if(kt){if(B)if(b.layerUpdates.size>0){const mt=Fc(St.width,St.height,b.format,b.type);for(const vt of b.layerUpdates){const qt=St.data.subarray(vt*mt/St.data.BYTES_PER_ELEMENT,(vt+1)*mt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,vt,St.width,St.height,1,Mt,qt,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,St.width,St.height,rt.depth,Mt,St.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,zt,St.width,St.height,rt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,St.width,St.height,rt.depth,Mt,Bt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,zt,St.width,St.height,rt.depth,0,Mt,Bt,St.data)}else{kt&&ce&&e.texStorage2D(i.TEXTURE_2D,gt,zt,$t[0].width,$t[0].height);for(let j=0,J=$t.length;j<J;j++)St=$t[j],b.format!==xn?Mt!==null?kt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,j,zt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?B&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,St.width,St.height,Mt,Bt,St.data):e.texImage2D(i.TEXTURE_2D,j,zt,St.width,St.height,0,Mt,Bt,St.data)}else if(b.isDataArrayTexture)if(kt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,zt,rt.width,rt.height,rt.depth),B)if(b.layerUpdates.size>0){const j=Fc(rt.width,rt.height,b.format,b.type);for(const J of b.layerUpdates){const mt=rt.data.subarray(J*j/rt.data.BYTES_PER_ELEMENT,(J+1)*j/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,rt.width,rt.height,1,Mt,Bt,mt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Mt,Bt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,rt.width,rt.height,rt.depth,0,Mt,Bt,rt.data);else if(b.isData3DTexture)kt?(ce&&e.texStorage3D(i.TEXTURE_3D,gt,zt,rt.width,rt.height,rt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Mt,Bt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,zt,rt.width,rt.height,rt.depth,0,Mt,Bt,rt.data);else if(b.isFramebufferTexture){if(ce)if(kt)e.texStorage2D(i.TEXTURE_2D,gt,zt,rt.width,rt.height);else{let j=rt.width,J=rt.height;for(let mt=0;mt<gt;mt++)e.texImage2D(i.TEXTURE_2D,mt,zt,j,J,0,Mt,Bt,null),j>>=1,J>>=1}}else if($t.length>0){if(kt&&ce){const j=Dt($t[0]);e.texStorage2D(i.TEXTURE_2D,gt,zt,j.width,j.height)}for(let j=0,J=$t.length;j<J;j++)St=$t[j],kt?B&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Mt,Bt,St):e.texImage2D(i.TEXTURE_2D,j,zt,Mt,Bt,St);b.generateMipmaps=!1}else if(kt){if(ce){const j=Dt(rt);e.texStorage2D(i.TEXTURE_2D,gt,zt,j.width,j.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Bt,rt)}else e.texImage2D(i.TEXTURE_2D,0,zt,Mt,Bt,rt);m(b)&&_(K),Tt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function H(R,b,W){if(b.image.length!==6)return;const K=Rt(R,b),st=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const Z=n.get(st);if(st.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+W);const Tt=ne.getPrimaries(ne.workingColorSpace),ft=b.colorSpace===jn?null:ne.getPrimaries(b.colorSpace),yt=b.colorSpace===jn||Tt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,rt=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let J=0;J<6;J++)!Kt&&!rt?Mt[J]=v(b.image[J],!0,s.maxCubemapSize):Mt[J]=rt?b.image[J].image:b.image[J],Mt[J]=jt(b,Mt[J]);const Bt=Mt[0],zt=o.convert(b.format,b.colorSpace),St=o.convert(b.type),$t=S(b.internalFormat,zt,St,b.colorSpace),kt=b.isVideoTexture!==!0,ce=Z.__version===void 0||K===!0,B=st.dataReady;let gt=M(b,Bt);it(i.TEXTURE_CUBE_MAP,b);let j;if(Kt){kt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,$t,Bt.width,Bt.height);for(let J=0;J<6;J++){j=Mt[J].mipmaps;for(let mt=0;mt<j.length;mt++){const vt=j[mt];b.format!==xn?zt!==null?kt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,vt.width,vt.height,zt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,$t,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,vt.width,vt.height,zt,St,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,$t,vt.width,vt.height,0,zt,St,vt.data)}}}else{if(j=b.mipmaps,kt&&ce){j.length>0&&gt++;const J=Dt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,$t,J.width,J.height)}for(let J=0;J<6;J++)if(rt){kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Mt[J].width,Mt[J].height,zt,St,Mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$t,Mt[J].width,Mt[J].height,0,zt,St,Mt[J].data);for(let mt=0;mt<j.length;mt++){const qt=j[mt].image[J].image;kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,qt.width,qt.height,zt,St,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,$t,qt.width,qt.height,0,zt,St,qt.data)}}else{kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,zt,St,Mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$t,zt,St,Mt[J]);for(let mt=0;mt<j.length;mt++){const vt=j[mt];kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,zt,St,vt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,$t,zt,St,vt.image[J])}}}m(b)&&_(i.TEXTURE_CUBE_MAP),Z.__version=st.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Y(R,b,W,K,st,Z){const Tt=o.convert(W.format,W.colorSpace),ft=o.convert(W.type),yt=S(W.internalFormat,Tt,ft,W.colorSpace);if(!n.get(b).__hasExternalTextures){const rt=Math.max(1,b.width>>Z),Mt=Math.max(1,b.height>>Z);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Z,yt,rt,Mt,b.depth,0,Tt,ft,null):e.texImage2D(st,Z,yt,rt,Mt,0,Tt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,st,n.get(W).__webglTexture,0,It(b)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,st,n.get(W).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(R,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const K=b.depthTexture,st=K&&K.isDepthTexture?K.type:null,Z=y(b.stencilBuffer,st),Tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=It(b);Ht(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Z,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,R)}else{const K=b.textures;for(let st=0;st<K.length;st++){const Z=K[st],Tt=o.convert(Z.format,Z.colorSpace),ft=o.convert(Z.type),yt=S(Z.internalFormat,Tt,ft,Z.colorSpace),Kt=It(b);W&&Ht(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,yt,b.width,b.height):Ht(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,yt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,yt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,st=It(b);if(b.depthTexture.format===is)Ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===fs)Ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function xt(R){const b=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const st=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",st)};K.addEventListener("dispose",st),b.__depthDisposeCallback=st}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ot(b.__webglFramebuffer,R)}else if(W){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),et(b.__webglDepthbuffer[K],R,!1);else{const st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),et(b.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(R,b,W){const K=n.get(R);b!==void 0&&Y(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&xt(R)}function pt(R){const b=R.texture,W=n.get(R),K=n.get(b);R.addEventListener("dispose",w);const st=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Tt=st.length>1;if(Tt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,r.memory.textures++),Z){W.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[ft]=[];for(let yt=0;yt<b.mipmaps.length;yt++)W.__webglFramebuffer[ft][yt]=i.createFramebuffer()}else W.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)W.__webglFramebuffer[ft]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ft=0,yt=st.length;ft<yt;ft++){const Kt=n.get(st[ft]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),r.memory.textures++)}if(R.samples>0&&Ht(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){const yt=st[ft];W.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ft]);const Kt=o.convert(yt.format,yt.colorSpace),rt=o.convert(yt.type),Mt=S(yt.internalFormat,Kt,rt,yt.colorSpace,R.isXRRenderTarget===!0),Bt=It(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,W.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),et(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),it(i.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)Y(W.__webglFramebuffer[ft][yt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else Y(W.__webglFramebuffer[ft],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(b)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,yt=st.length;ft<yt;ft++){const Kt=st[ft],rt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),it(i.TEXTURE_2D,Kt),Y(W.__webglFramebuffer,R,Kt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(Kt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,K.__webglTexture),it(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)Y(W.__webglFramebuffer[yt],R,b,i.COLOR_ATTACHMENT0,ft,yt);else Y(W.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,ft,0);m(b)&&_(ft),e.unbindTexture()}R.depthBuffer&&xt(R)}function ht(R){const b=R.textures;for(let W=0,K=b.length;W<K;W++){const st=b[W];if(m(st)){const Z=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Tt=n.get(st).__webglTexture;e.bindTexture(Z,Tt),_(Z),e.unbindTexture()}}}const Lt=[],I=[];function Xt(R){if(R.samples>0){if(Ht(R)===!1){const b=R.textures,W=R.width,K=R.height;let st=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(R),ft=b.length>1;if(ft)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);const Kt=n.get(b[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,W,K,0,0,W,K,st,i.NEAREST),l===!0&&(Lt.length=0,I.length=0,Lt.push(i.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Lt.push(Z),I.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);const Kt=n.get(b[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function It(R){return Math.min(s.maxSamples,R.samples)}function Ht(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function At(R){const b=r.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function jt(R,b){const W=R.colorSpace,K=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==ai&&W!==jn&&(ne.getTransfer(W)===ue?(K!==xn||st!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function Dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=E,this.setTexture2D=F,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=ct,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Ht}function pg(i,t){function e(n,s=jn){let o;const r=ne.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Vs)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===xn)return i.RGBA;if(n===jh)return i.LUMINANCE;if(n===Kh)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===Zh)return i.RED;if(n===ll)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===cl)return i.RG_INTEGER;if(n===hl)return i.RGBA_INTEGER;if(n===No||n===Fo||n===Oo||n===Bo)if(r===ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===No)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===No)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===Ea||n===ba)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ma)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Aa||n===Ta)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===wa||n===Aa)return r===ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ta)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Ra||n===Pa||n===La||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ga)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ca)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Ha||n===Va)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===zo)return r===ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===Wa||n===Xa||n===$a)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===zo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class mg extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class de extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _g={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),_=this._getHandJoint(c,v);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new We,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:gg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends bi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new xg,m=e.getContextAttributes();let _=null,S=null;const y=[],M=[],T=new lt;let w=null;const C=new Ke;C.layers.enable(1),C.viewport=new re;const P=new Ke;P.layers.enable(2),P.viewport=new re;const D=[C,P],x=new mg;x.layers.enable(1),x.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=y[H];return Y===void 0&&(Y=new Vr,y[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=y[H];return Y===void 0&&(Y=new Vr,y[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=y[H];return Y===void 0&&(Y=new Vr,y[H]=Y),Y.getHandSpace()};function U(H){const Y=M.indexOf(H.inputSource);if(Y===-1)return;const et=y[Y];et!==void 0&&(et.update(H.inputSource,H.frame,c||r),et.dispatchEvent({type:H.type,data:H.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",$);for(let H=0;H<y.length;H++){const Y=M[H];Y!==null&&(M[H]=null,y[H].disconnect(Y))}E=null,N=null,v.reset(),t.setRenderTarget(_),p=null,d=null,u=null,s=null,S=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Si(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,et=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?fs:is,et=m.stencil?ds:Mi);const xt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Si(d.textureWidth,d.textureHeight,{format:xn,type:Bn,depthTexture:new fu(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(H){for(let Y=0;Y<H.removed.length;Y++){const et=H.removed[Y],ot=M.indexOf(et);ot>=0&&(M[ot]=null,y[ot].disconnect(et))}for(let Y=0;Y<H.added.length;Y++){const et=H.added[Y];let ot=M.indexOf(et);if(ot===-1){for(let ct=0;ct<y.length;ct++)if(ct>=M.length){M.push(et),ot=ct;break}else if(M[ct]===null){M[ct]=et,ot=ct;break}if(ot===-1)break}const xt=y[ot];xt&&xt.connect(et)}}const V=new L,z=new L;function O(H,Y,et){V.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(et.matrixWorld);const ot=V.distanceTo(z),xt=Y.projectionMatrix.elements,ct=et.projectionMatrix.elements,pt=xt[14]/(xt[10]-1),ht=xt[14]/(xt[10]+1),Lt=(xt[9]+1)/xt[5],I=(xt[9]-1)/xt[5],Xt=(xt[8]-1)/xt[0],It=(ct[8]+1)/ct[0],Ht=pt*Xt,At=pt*It,jt=ot/(-Xt+It),Dt=jt*-Xt;if(Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Dt),H.translateZ(jt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),xt[10]===-1)H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const R=pt+jt,b=ht+jt,W=Ht-Dt,K=At+(ot-Dt),st=Lt*ht/b*R,Z=I*ht/b*R;H.projectionMatrix.makePerspective(W,K,st,Z,R,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function tt(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Y=H.near,et=H.far;v.texture!==null&&(v.depthNear>0&&(Y=v.depthNear),v.depthFar>0&&(et=v.depthFar)),x.near=P.near=C.near=Y,x.far=P.far=C.far=et,(E!==x.near||N!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,N=x.far);const ot=H.parent,xt=x.cameras;tt(x,ot);for(let ct=0;ct<xt.length;ct++)tt(xt[ct],ot);xt.length===2?O(x,C,P):x.projectionMatrix.copy(C.projectionMatrix),Q(H,x,ot)};function Q(H,Y,et){et===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(et.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ps*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let it=null;function Rt(H,Y){if(h=Y.getViewerPose(c||r),g=Y,h!==null){const et=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ot=!1;et.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let ct=0;ct<et.length;ct++){const pt=et[ct];let ht=null;if(p!==null)ht=p.getViewport(pt);else{const I=u.getViewSubImage(d,pt);ht=I.viewport,ct===0&&(t.setRenderTargetTextures(S,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(S))}let Lt=D[ct];Lt===void 0&&(Lt=new Ke,Lt.layers.enable(ct),Lt.viewport=new re,D[ct]=Lt),Lt.matrix.fromArray(pt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(pt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(ht.x,ht.y,ht.width,ht.height),ct===0&&(x.matrix.copy(Lt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(Lt)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const ct=u.getDepthInformation(et[0]);ct&&ct.isValid&&ct.texture&&v.init(t,ct,s.renderState)}}for(let et=0;et<y.length;et++){const ot=M[et],xt=y[et];ot!==null&&xt!==void 0&&xt.update(ot,Y,c||r)}it&&it(H,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const nt=new uu;nt.setAnimationLoop(Rt),this.setAnimationLoop=function(H){it=H},this.dispose=function(){}}}const pi=new yn,Mg=new le;function Sg(i,t){function e(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,lu(i)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function s(m,_,S,y,M){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(m,_):_.isMeshToonMaterial?(o(m,_),u(m,_)):_.isMeshPhongMaterial?(o(m,_),h(m,_)):_.isMeshStandardMaterial?(o(m,_),d(m,_),_.isMeshPhysicalMaterial&&p(m,_,M)):_.isMeshMatcapMaterial?(o(m,_),g(m,_)):_.isMeshDepthMaterial?o(m,_):_.isMeshDistanceMaterial?(o(m,_),v(m,_)):_.isMeshNormalMaterial?o(m,_):_.isLineBasicMaterial?(r(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,S,y):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,e(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Ve&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,e(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Ve&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,e(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,e(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const S=t.get(_),y=S.envMap,M=S.envMapRotation;y&&(m.envMap.value=y,pi.copy(M),pi.x*=-1,pi.y*=-1,pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(pi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,m.aoMapTransform))}function r(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,S,y){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*S,m.scale.value=y*.5,_.map&&(m.map.value=_.map,e(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function u(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function p(m,_,S){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ve&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,_){_.matcap&&(m.matcap.value=_.matcap)}function v(m,_){const S=t.get(_).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Eg(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function c(S,y){let M=s[S.id];M===void 0&&(g(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(S,T);const w=t.render.frame;o[S.id]!==w&&(d(S),o[S.id]=w)}function h(S){const y=u();S.__bindingPointIndex=y;const M=i.createBuffer(),T=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],M=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,C=M.length;w<C;w++){const P=Array.isArray(M[w])?M[w]:[M[w]];for(let D=0,x=P.length;D<x;D++){const E=P[D];if(p(E,w,D,T)===!0){const N=E.__offset,U=Array.isArray(E.value)?E.value:[E.value];let F=0;for(let $=0;$<U.length;$++){const V=U[$],z=v(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,N+F,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,F),F+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,y,M,T){const w=S.value,C=y+"_"+M;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const P=T[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return T[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(S){const y=S.uniforms;let M=0;const T=16;for(let C=0,P=y.length;C<P;C++){const D=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,E=D.length;x<E;x++){const N=D[x],U=Array.isArray(N.value)?N.value:[N.value];for(let F=0,$=U.length;F<$;F++){const V=U[F],z=v(V),O=M%T,tt=O%z.boundary,Q=O+tt;M+=tt,Q!==0&&T-Q<z.storage&&(M+=T-Q),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=z.storage}}}const w=M%T;return w>0&&(M+=T-w),S.__size=M,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function _(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:l,update:c,dispose:_}}class bg{constructor(t={}){const{canvas:e=uf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const _=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=ii,this.toneMappingExposure=1;const y=this;let M=!1,T=0,w=0,C=null,P=-1,D=null;const x=new re,E=new re;let N=null;const U=new Ft(0);let F=0,$=e.width,V=e.height,z=1,O=null,tt=null;const Q=new re(0,0,$,V),it=new re(0,0,$,V);let Rt=!1;const nt=new pl;let H=!1,Y=!1;const et=new le,ot=new le,xt=new L,ct=new re,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Lt(){return C===null?z:1}let I=n;function Xt(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),I===null){const k="webgl2";if(I=Xt(k,A),I===null)throw Xt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let It,Ht,At,jt,Dt,R,b,W,K,st,Z,Tt,ft,yt,Kt,rt,Mt,Bt,zt,St,$t,kt,ce,B;function gt(){It=new R_(I),It.init(),kt=new pg(I,It),Ht=new E_(I,It,t,kt),At=new ug(I),Ht.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),jt=new I_(I),Dt=new K0,R=new fg(I,It,At,Dt,Ht,kt,jt),b=new w_(y),W=new C_(y),K=new zf(I),ce=new M_(I,K),st=new P_(I,K,jt,ce),Z=new U_(I,st,K,jt),zt=new D_(I,Ht,R),rt=new b_(Dt),Tt=new j0(y,b,W,It,Ht,ce,rt),ft=new Sg(y,Dt),yt=new J0,Kt=new sg(It),Bt=new y_(y,b,W,At,Z,d,l),Mt=new cg(y,Z,Ht),B=new Eg(I,jt,Ht,At),St=new S_(I,It,jt),$t=new L_(I,It,jt),jt.programs=Tt.programs,y.capabilities=Ht,y.extensions=It,y.properties=Dt,y.renderLists=yt,y.shadowMap=Mt,y.state=At,y.info=jt}gt();const j=new yg(y,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=It.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=It.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize($,V,!1))},this.getSize=function(A){return A.set($,V)},this.setSize=function(A,k,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,V=k,e.width=Math.floor(A*z),e.height=Math.floor(k*z),X===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set($*z,V*z).floor()},this.setDrawingBufferSize=function(A,k,X){$=A,V=k,z=X,e.width=Math.floor(A*X),e.height=Math.floor(k*X),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,k,X,q){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,k,X,q),At.viewport(x.copy(Q).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(it)},this.setScissor=function(A,k,X,q){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,k,X,q),At.scissor(E.copy(it).multiplyScalar(z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(A){At.setScissorTest(Rt=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(A=!0,k=!0,X=!0){let q=0;if(A){let G=!1;if(C!==null){const at=C.texture.format;G=at===hl||at===cl||at===ll}if(G){const at=C.texture.type,_t=at===Bn||at===Mi||at===Gs||at===ds||at===rl||at===al,bt=Bt.getClearColor(),wt=Bt.getClearAlpha(),Ut=bt.r,Ot=bt.g,Ct=bt.b;_t?(p[0]=Ut,p[1]=Ot,p[2]=Ct,p[3]=wt,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Ut,g[1]=Ot,g[2]=Ct,g[3]=wt,I.clearBufferiv(I.COLOR,0,g))}else q|=I.COLOR_BUFFER_BIT}k&&(q|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),yt.dispose(),Kt.dispose(),Dt.dispose(),b.dispose(),W.dispose(),Z.dispose(),ce.dispose(),B.dispose(),Tt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Fl),j.removeEventListener("sessionend",Ol),li.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=jt.autoReset,k=Mt.enabled,X=Mt.autoUpdate,q=Mt.needsUpdate,G=Mt.type;gt(),jt.autoReset=A,Mt.enabled=k,Mt.autoUpdate=X,Mt.needsUpdate=q,Mt.type=G}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qt(A){const k=A.target;k.removeEventListener("dispose",qt),ye(k)}function ye(A){Xe(A),Dt.remove(A)}function Xe(A){const k=Dt.get(A).programs;k!==void 0&&(k.forEach(function(X){Tt.releaseProgram(X)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,X,q,G,at){k===null&&(k=pt);const _t=G.isMesh&&G.matrixWorld.determinant()<0,bt=id(A,k,X,q,G);At.setMaterial(q,_t);let wt=X.index,Ut=1;if(q.wireframe===!0){if(wt=st.getWireframeAttribute(X),wt===void 0)return;Ut=2}const Ot=X.drawRange,Ct=X.attributes.position;let ie=Ot.start*Ut,he=(Ot.start+Ot.count)*Ut;at!==null&&(ie=Math.max(ie,at.start*Ut),he=Math.min(he,(at.start+at.count)*Ut)),wt!==null?(ie=Math.max(ie,0),he=Math.min(he,wt.count)):Ct!=null&&(ie=Math.max(ie,0),he=Math.min(he,Ct.count));const fe=he-ie;if(fe<0||fe===1/0)return;ce.setup(G,q,bt,X,wt);let Ze,te=St;if(wt!==null&&(Ze=K.get(wt),te=$t,te.setIndex(Ze)),G.isMesh)q.wireframe===!0?(At.setLineWidth(q.wireframeLinewidth*Lt()),te.setMode(I.LINES)):te.setMode(I.TRIANGLES);else if(G.isLine){let Pt=q.linewidth;Pt===void 0&&(Pt=1),At.setLineWidth(Pt*Lt()),G.isLineSegments?te.setMode(I.LINES):G.isLineLoop?te.setMode(I.LINE_LOOP):te.setMode(I.LINE_STRIP)}else G.isPoints?te.setMode(I.POINTS):G.isSprite&&te.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)te.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Pt=G._multiDrawStarts,Ie=G._multiDrawCounts,ee=G._multiDrawCount,dn=wt?K.get(wt).bytesPerElement:1,Ci=Dt.get(q).currentProgram.getUniforms();for(let Je=0;Je<ee;Je++)Ci.setValue(I,"_gl_DrawID",Je),te.render(Pt[Je]/dn,Ie[Je])}else if(G.isInstancedMesh)te.renderInstances(ie,fe,G.count);else if(X.isInstancedBufferGeometry){const Pt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ie=Math.min(X.instanceCount,Pt);te.renderInstances(ie,fe,Ie)}else te.render(ie,fe)};function Jt(A,k,X){A.transparent===!0&&A.side===Pe&&A.forceSinglePass===!1?(A.side=Ve,A.needsUpdate=!0,Ys(A,k,X),A.side=ri,A.needsUpdate=!0,Ys(A,k,X),A.side=Pe):Ys(A,k,X)}this.compile=function(A,k,X=null){X===null&&(X=A),m=Kt.get(X),m.init(k),S.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==X&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const q=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const at=G.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const bt=at[_t];Jt(bt,X,G),q.add(bt)}else Jt(at,X,G),q.add(at)}),S.pop(),m=null,q},this.compileAsync=function(A,k,X=null){const q=this.compile(A,k,X);return new Promise(G=>{function at(){if(q.forEach(function(_t){Dt.get(_t).currentProgram.isReady()&&q.delete(_t)}),q.size===0){G(A);return}setTimeout(at,10)}It.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let $e=null;function Tn(A){$e&&$e(A)}function Fl(){li.stop()}function Ol(){li.start()}const li=new uu;li.setAnimationLoop(Tn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(A){$e=A,j.setAnimationLoop(A),A===null?li.stop():li.start()},j.addEventListener("sessionstart",Fl),j.addEventListener("sessionend",Ol),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,k,C),m=Kt.get(A,S.length),m.init(k),S.push(m),ot.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),nt.setFromProjectionMatrix(ot),Y=this.localClippingEnabled,H=rt.init(this.clippingPlanes,Y),v=yt.get(A,_.length),v.init(),_.push(v),j.enabled===!0&&j.isPresenting===!0){const at=y.xr.getDepthSensingMesh();at!==null&&ur(at,k,-1/0,y.sortObjects)}ur(A,k,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(O,tt),ht=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ht&&Bt.addToRenderList(v,A),this.info.render.frame++,H===!0&&rt.beginShadows();const X=m.state.shadowsArray;Mt.render(X,A,k),H===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,G=v.transmissive;if(m.setupLights(),k.isArrayCamera){const at=k.cameras;if(G.length>0)for(let _t=0,bt=at.length;_t<bt;_t++){const wt=at[_t];zl(q,G,A,wt)}ht&&Bt.render(A);for(let _t=0,bt=at.length;_t<bt;_t++){const wt=at[_t];Bl(v,A,wt,wt.viewport)}}else G.length>0&&zl(q,G,A,k),ht&&Bt.render(A),Bl(v,A,k);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,k),ce.resetDefaultState(),P=-1,D=null,S.pop(),S.length>0?(m=S[S.length-1],H===!0&&rt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?v=_[_.length-1]:v=null};function ur(A,k,X,q){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){q&&ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);const _t=Z.update(A),bt=A.material;bt.visible&&v.push(A,_t,bt,X,ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){const _t=Z.update(A),bt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ct.copy(A.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),ct.copy(_t.boundingSphere.center)),ct.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(bt)){const wt=_t.groups;for(let Ut=0,Ot=wt.length;Ut<Ot;Ut++){const Ct=wt[Ut],ie=bt[Ct.materialIndex];ie&&ie.visible&&v.push(A,_t,ie,X,ct.z,Ct)}}else bt.visible&&v.push(A,_t,bt,X,ct.z,null)}}const at=A.children;for(let _t=0,bt=at.length;_t<bt;_t++)ur(at[_t],k,X,q)}function Bl(A,k,X,q){const G=A.opaque,at=A.transmissive,_t=A.transparent;m.setupLightsView(X),H===!0&&rt.setGlobalState(y.clippingPlanes,X),q&&At.viewport(x.copy(q)),G.length>0&&qs(G,k,X),at.length>0&&qs(at,k,X),_t.length>0&&qs(_t,k,X),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function zl(A,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Si(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Vs:Bn,minFilter:Jn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const at=m.state.transmissionRenderTarget[q.id],_t=q.viewport||x;at.setSize(_t.z,_t.w);const bt=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(U),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),ht&&Bt.render(X);const wt=y.toneMapping;y.toneMapping=ii;const Ut=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),H===!0&&rt.setGlobalState(y.clippingPlanes,q),qs(A,X,q),R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at),It.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Ct=0,ie=k.length;Ct<ie;Ct++){const he=k[Ct],fe=he.object,Ze=he.geometry,te=he.material,Pt=he.group;if(te.side===Pe&&fe.layers.test(q.layers)){const Ie=te.side;te.side=Ve,te.needsUpdate=!0,kl(fe,X,q,Ze,te,Pt),te.side=Ie,te.needsUpdate=!0,Ot=!0}}Ot===!0&&(R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at))}y.setRenderTarget(bt),y.setClearColor(U,F),Ut!==void 0&&(q.viewport=Ut),y.toneMapping=wt}function qs(A,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let G=0,at=A.length;G<at;G++){const _t=A[G],bt=_t.object,wt=_t.geometry,Ut=q===null?_t.material:q,Ot=_t.group;bt.layers.test(X.layers)&&kl(bt,k,X,wt,Ut,Ot)}}function kl(A,k,X,q,G,at){A.onBeforeRender(y,k,X,q,G,at),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(y,k,X,q,A,at),G.transparent===!0&&G.side===Pe&&G.forceSinglePass===!1?(G.side=Ve,G.needsUpdate=!0,y.renderBufferDirect(X,k,q,G,A,at),G.side=ri,G.needsUpdate=!0,y.renderBufferDirect(X,k,q,G,A,at),G.side=Pe):y.renderBufferDirect(X,k,q,G,A,at),A.onAfterRender(y,k,X,q,G,at)}function Ys(A,k,X){k.isScene!==!0&&(k=pt);const q=Dt.get(A),G=m.state.lights,at=m.state.shadowsArray,_t=G.state.version,bt=Tt.getParameters(A,G.state,at,k,X),wt=Tt.getProgramCacheKey(bt);let Ut=q.programs;q.environment=A.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(A.isMeshStandardMaterial?W:b).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ut===void 0&&(A.addEventListener("dispose",qt),Ut=new Map,q.programs=Ut);let Ot=Ut.get(wt);if(Ot!==void 0){if(q.currentProgram===Ot&&q.lightsStateVersion===_t)return Hl(A,bt),Ot}else bt.uniforms=Tt.getUniforms(A),A.onBeforeCompile(bt,y),Ot=Tt.acquireProgram(bt,wt),Ut.set(wt,Ot),q.uniforms=bt.uniforms;const Ct=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),Hl(A,bt),q.needsLights=od(A),q.lightsStateVersion=_t,q.needsLights&&(Ct.ambientLightColor.value=G.state.ambient,Ct.lightProbe.value=G.state.probe,Ct.directionalLights.value=G.state.directional,Ct.directionalLightShadows.value=G.state.directionalShadow,Ct.spotLights.value=G.state.spot,Ct.spotLightShadows.value=G.state.spotShadow,Ct.rectAreaLights.value=G.state.rectArea,Ct.ltc_1.value=G.state.rectAreaLTC1,Ct.ltc_2.value=G.state.rectAreaLTC2,Ct.pointLights.value=G.state.point,Ct.pointLightShadows.value=G.state.pointShadow,Ct.hemisphereLights.value=G.state.hemi,Ct.directionalShadowMap.value=G.state.directionalShadowMap,Ct.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ct.spotShadowMap.value=G.state.spotShadowMap,Ct.spotLightMatrix.value=G.state.spotLightMatrix,Ct.spotLightMap.value=G.state.spotLightMap,Ct.pointShadowMap.value=G.state.pointShadowMap,Ct.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Ot,q.uniformsList=null,Ot}function Gl(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Go.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Hl(A,k){const X=Dt.get(A);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function id(A,k,X,q,G){k.isScene!==!0&&(k=pt),R.resetTextureUnits();const at=k.fog,_t=q.isMeshStandardMaterial?k.environment:null,bt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ai,wt=(q.isMeshStandardMaterial?W:b).get(q.envMap||_t),Ut=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ot=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ct=!!X.morphAttributes.position,ie=!!X.morphAttributes.normal,he=!!X.morphAttributes.color;let fe=ii;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=y.toneMapping);const Ze=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=Ze!==void 0?Ze.length:0,Pt=Dt.get(q),Ie=m.state.lights;if(H===!0&&(Y===!0||A!==D)){const sn=A===D&&q.id===P;rt.setState(q,A,sn)}let ee=!1;q.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ie.state.version||Pt.outputColorSpace!==bt||G.isBatchedMesh&&Pt.batching===!1||!G.isBatchedMesh&&Pt.batching===!0||G.isBatchedMesh&&Pt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Pt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Pt.instancing===!1||!G.isInstancedMesh&&Pt.instancing===!0||G.isSkinnedMesh&&Pt.skinning===!1||!G.isSkinnedMesh&&Pt.skinning===!0||G.isInstancedMesh&&Pt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pt.instancingMorph===!1&&G.morphTexture!==null||Pt.envMap!==wt||q.fog===!0&&Pt.fog!==at||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==Ut||Pt.vertexTangents!==Ot||Pt.morphTargets!==Ct||Pt.morphNormals!==ie||Pt.morphColors!==he||Pt.toneMapping!==fe||Pt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Pt.__version=q.version);let dn=Pt.currentProgram;ee===!0&&(dn=Ys(q,k,G));let Ci=!1,Je=!1,dr=!1;const _e=dn.getUniforms(),kn=Pt.uniforms;if(At.useProgram(dn.program)&&(Ci=!0,Je=!0,dr=!0),q.id!==P&&(P=q.id,Je=!0),Ci||D!==A){Ht.reverseDepthBuffer?(et.copy(A.projectionMatrix),ff(et),pf(et),_e.setValue(I,"projectionMatrix",et)):_e.setValue(I,"projectionMatrix",A.projectionMatrix),_e.setValue(I,"viewMatrix",A.matrixWorldInverse);const sn=_e.map.cameraPosition;sn!==void 0&&sn.setValue(I,xt.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_e.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Je=!0,dr=!0)}if(G.isSkinnedMesh){_e.setOptional(I,G,"bindMatrix"),_e.setOptional(I,G,"bindMatrixInverse");const sn=G.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),_e.setValue(I,"boneTexture",sn.boneTexture,R))}G.isBatchedMesh&&(_e.setOptional(I,G,"batchingTexture"),_e.setValue(I,"batchingTexture",G._matricesTexture,R),_e.setOptional(I,G,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",G._indirectTexture,R),_e.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",G._colorsTexture,R));const fr=X.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&zt.update(G,X,dn),(Je||Pt.receiveShadow!==G.receiveShadow)&&(Pt.receiveShadow=G.receiveShadow,_e.setValue(I,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(kn.envMap.value=wt,kn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(kn.envMapIntensity.value=k.environmentIntensity),Je&&(_e.setValue(I,"toneMappingExposure",y.toneMappingExposure),Pt.needsLights&&sd(kn,dr),at&&q.fog===!0&&ft.refreshFogUniforms(kn,at),ft.refreshMaterialUniforms(kn,q,z,V,m.state.transmissionRenderTarget[A.id]),Go.upload(I,Gl(Pt),kn,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Go.upload(I,Gl(Pt),kn,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_e.setValue(I,"center",G.center),_e.setValue(I,"modelViewMatrix",G.modelViewMatrix),_e.setValue(I,"normalMatrix",G.normalMatrix),_e.setValue(I,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const sn=q.uniformsGroups;for(let pr=0,rd=sn.length;pr<rd;pr++){const Vl=sn[pr];B.update(Vl,dn),B.bind(Vl,dn)}}return dn}function sd(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function od(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,k,X){Dt.get(A.texture).__webglTexture=k,Dt.get(A.depthTexture).__webglTexture=X;const q=Dt.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const X=Dt.get(A);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,X=0){C=A,T=k,w=X;let q=!0,G=null,at=!1,_t=!1;if(A){const wt=Dt.get(A);if(wt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(wt.__hasExternalTextures)R.rebindTextures(A,Dt.get(A.texture).__webglTexture,Dt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ct=A.depthTexture;if(wt.__boundDepthTexture!==Ct){if(Ct!==null&&Dt.has(Ct)&&(A.width!==Ct.image.width||A.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(_t=!0);const Ot=Dt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?G=Ot[k][X]:G=Ot[k],at=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?G=Dt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?G=Ot[X]:G=Ot,x.copy(A.viewport),E.copy(A.scissor),N=A.scissorTest}else x.copy(Q).multiplyScalar(z).floor(),E.copy(it).multiplyScalar(z).floor(),N=Rt;if(At.bindFramebuffer(I.FRAMEBUFFER,G)&&q&&At.drawBuffers(A,G),At.viewport(x),At.scissor(E),At.setScissorTest(N),at){const wt=Dt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,X)}else if(_t){const wt=Dt.get(A.texture),Ut=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,X||0,Ut)}P=-1},this.readRenderTargetPixels=function(A,k,X,q,G,at,_t){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){At.bindFramebuffer(I.FRAMEBUFFER,bt);try{const wt=A.texture,Ut=wt.format,Ot=wt.type;if(!Ht.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-q&&X>=0&&X<=A.height-G&&I.readPixels(k,X,q,G,kt.convert(Ut),kt.convert(Ot),at)}finally{const wt=C!==null?Dt.get(C).__webglFramebuffer:null;At.bindFramebuffer(I.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(A,k,X,q,G,at,_t){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){const wt=A.texture,Ut=wt.format,Ot=wt.type;if(!Ht.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-q&&X>=0&&X<=A.height-G){At.bindFramebuffer(I.FRAMEBUFFER,bt);const Ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(k,X,q,G,kt.convert(Ut),kt.convert(Ot),0);const ie=C!==null?Dt.get(C).__webglFramebuffer:null;At.bindFramebuffer(I.FRAMEBUFFER,ie);const he=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await df(I,he,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(Ct),I.deleteSync(he),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,X=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-X),G=Math.floor(A.image.width*q),at=Math.floor(A.image.height*q),_t=k!==null?k.x:0,bt=k!==null?k.y:0;R.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,_t,bt,G,at),At.unbindTexture()},this.copyTextureToTexture=function(A,k,X=null,q=null,G=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],k=arguments[2],G=arguments[3]||0,X=null);let at,_t,bt,wt,Ut,Ot;X!==null?(at=X.max.x-X.min.x,_t=X.max.y-X.min.y,bt=X.min.x,wt=X.min.y):(at=A.image.width,_t=A.image.height,bt=0,wt=0),q!==null?(Ut=q.x,Ot=q.y):(Ut=0,Ot=0);const Ct=kt.convert(k.format),ie=kt.convert(k.type);R.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const he=I.getParameter(I.UNPACK_ROW_LENGTH),fe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ze=I.getParameter(I.UNPACK_SKIP_PIXELS),te=I.getParameter(I.UNPACK_SKIP_ROWS),Pt=I.getParameter(I.UNPACK_SKIP_IMAGES),Ie=A.isCompressedTexture?A.mipmaps[G]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,Ut,Ot,at,_t,Ct,ie,Ie.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,Ut,Ot,Ie.width,Ie.height,Ct,Ie.data):I.texSubImage2D(I.TEXTURE_2D,G,Ut,Ot,at,_t,Ct,ie,Ie),I.pixelStorei(I.UNPACK_ROW_LENGTH,he),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,te),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pt),G===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(A,k,X=null,q=null,G=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,A=arguments[2],k=arguments[3],G=arguments[4]||0);let at,_t,bt,wt,Ut,Ot,Ct,ie,he;const fe=A.isCompressedTexture?A.mipmaps[G]:A.image;X!==null?(at=X.max.x-X.min.x,_t=X.max.y-X.min.y,bt=X.max.z-X.min.z,wt=X.min.x,Ut=X.min.y,Ot=X.min.z):(at=fe.width,_t=fe.height,bt=fe.depth,wt=0,Ut=0,Ot=0),q!==null?(Ct=q.x,ie=q.y,he=q.z):(Ct=0,ie=0,he=0);const Ze=kt.convert(k.format),te=kt.convert(k.type);let Pt;if(k.isData3DTexture)R.setTexture3D(k,0),Pt=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Pt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Ie=I.getParameter(I.UNPACK_ROW_LENGTH),ee=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ci=I.getParameter(I.UNPACK_SKIP_ROWS),Je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ut),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ot),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Pt,G,Ct,ie,he,at,_t,bt,Ze,te,fe.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Pt,G,Ct,ie,he,at,_t,bt,Ze,fe.data):I.texSubImage3D(Pt,G,Ct,ie,he,at,_t,bt,Ze,te,fe),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ci),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Je),G===0&&k.generateMipmaps&&I.generateMipmap(Pt),At.unbindTexture()},this.initRenderTarget=function(A){Dt.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),At.unbindTexture()},this.resetState=function(){T=0,w=0,C=null,At.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ul?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===er?"display-p3":"srgb"}}class Mn{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new Mn(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wg extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ag{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new L;class jo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),o=se(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new jo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _l extends wi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vi;const As=new L,Wi=new L,Xi=new L,$i=new lt,Ts=new lt,vu=new le,go=new L,Cs=new L,vo=new L,Oc=new lt,Wr=new lt,Bc=new lt;class xu extends ve{constructor(t=new _l){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ag(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new jo(n,3,0,!1)),Vi.setAttribute("uv",new jo(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),vu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;xo(go.set(-.5,-.5,0),Xi,r,Wi,s,o),xo(Cs.set(.5,-.5,0),Xi,r,Wi,s,o),xo(vo.set(.5,.5,0),Xi,r,Wi,s,o),Oc.set(0,0),Wr.set(1,0),Bc.set(1,1);let a=t.ray.intersectTriangle(go,Cs,vo,!1,As);if(a===null&&(xo(Cs.set(-.5,.5,0),Xi,r,Wi,s,o),Wr.set(0,1),a=t.ray.intersectTriangle(go,vo,Cs,!1,As),a===null))return;const l=t.ray.origin.distanceTo(As);l<t.near||l>t.far||e.push({distance:l,point:As.clone(),uv:hn.getInterpolation(As,go,Cs,vo,Oc,Wr,Bc,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xo(i,t,e,n,s,o){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ts.x=o*$i.x-s*$i.y,Ts.y=s*$i.x+o*$i.y):Ts.copy($i),i.copy(t),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(vu)}class yu extends wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zc=new le,ja=new ir,yo=new nr,Mo=new L;class Tg extends ve{constructor(t=new ze,e=new yu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=o,t.ray.intersectsSphere(yo)===!1)return;zc.copy(s).invert(),ja.copy(t.ray).applyMatrix4(zc);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);Mo.fromBufferAttribute(u,m),kc(Mo,m,l,s,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,v=p;g<v;g++)Mo.fromBufferAttribute(u,g),kc(Mo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function kc(i,t,e,n,s,o,r){const a=ja.distanceSqToPoint(i);if(a<e){const l=new L;ja.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ti extends We{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,p=(r-h)/d;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new lt:new L);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],o=[],r=[],a=new L,l=new le;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new L)}o[0]=new L,r[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ae(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,g))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(Ae(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gl extends An{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cg extends gl{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function vl(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,p=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,p*=h,s(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const So=new L,Xr=new vl,$r=new vl,qr=new vl;class Rg extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(So.subVectors(s[0],s[1]).add(s[0]),c=So);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(So.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Xr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),$r.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),qr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Xr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),$r.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),qr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Xr.calc(l),$r.calc(l),qr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gc(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Pg(i,t){const e=1-i;return e*e*t}function Lg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function Bs(i,t,e,n){return Pg(i,t)+Lg(i,e)+Ig(i,n)}function Dg(i,t){const e=1-i;return e*e*e*t}function Ug(i,t){const e=1-i;return 3*e*e*i*t}function Ng(i,t){return 3*(1-i)*i*i*t}function Fg(i,t){return i*i*i*t}function zs(i,t,e,n,s){return Dg(i,t)+Ug(i,e)+Ng(i,n)+Fg(i,s)}class Mu extends An{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(zs(t,s.x,o.x,r.x,a.x),zs(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Og extends An{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(zs(t,s.x,o.x,r.x,a.x),zs(t,s.y,o.y,r.y,a.y),zs(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Su extends An{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bg extends An{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eu extends An{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Bs(t,s.x,o.x,r.x),Bs(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zg extends An{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Bs(t,s.x,o.x,r.x),Bs(t,s.y,o.y,r.y),Bs(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bu extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Gc(a,l.x,c.x,h.x,u.x),Gc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var Hc=Object.freeze({__proto__:null,ArcCurve:Cg,CatmullRomCurve3:Rg,CubicBezierCurve:Mu,CubicBezierCurve3:Og,EllipseCurve:gl,LineCurve:Su,LineCurve3:Bg,QuadraticBezierCurve:Eu,QuadraticBezierCurve3:zg,SplineCurve:bu});class kg extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Hc[s.type]().fromJSON(s))}return this}}class Gg extends kg{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Su(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Eu(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Mu(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new bu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new gl(t,e,n,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class xl extends ze{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ae(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,u=new L,d=new lt,p=new L,g=new L,v=new L;let m=0,_=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,_=t[S+1].y-t[S].y,p.x=_*1,p.y=-m,p.z=_*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,_=t[S+1].y-t[S].y,p.x=_*1,p.y=-m,p.z=_*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let S=0;S<=e;S++){const y=n+S*h*s,M=Math.sin(y),T=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*T,r.push(u.x,u.y,u.z),d.x=S/e,d.y=w/(t.length-1),a.push(d.x,d.y);const C=l[3*w+0]*M,P=l[3*w+1],D=l[3*w+0]*T;c.push(C,P,D)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const M=y+S*t.length,T=M,w=M+t.length,C=M+t.length+1,P=M+1;o.push(T,w,P),o.push(C,P,w)}this.setIndex(o),this.setAttribute("position",new me(r,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.points,t.segments,t.phiStart,t.phiLength)}}class yl extends xl{constructor(t=1,e=1,n=4,s=8){const o=new Gg;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new yl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Qt extends ze{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=n/2;let _=0;S(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(p,2));function S(){const M=new L,T=new L;let w=0;const C=(e-t)/n;for(let P=0;P<=o;P++){const D=[],x=P/o,E=x*(e-t)+t;for(let N=0;N<=s;N++){const U=N/s,F=U*l+a,$=Math.sin(F),V=Math.cos(F);T.x=E*$,T.y=-x*n+m,T.z=E*V,u.push(T.x,T.y,T.z),M.set($,C,V).normalize(),d.push(M.x,M.y,M.z),p.push(U,1-x),D.push(g++)}v.push(D)}for(let P=0;P<s;P++)for(let D=0;D<o;D++){const x=v[D][P],E=v[D+1][P],N=v[D+1][P+1],U=v[D][P+1];t>0&&(h.push(x,E,U),w+=3),e>0&&(h.push(E,N,U),w+=3)}c.addGroup(_,w,0),_+=w}function y(M){const T=g,w=new lt,C=new L;let P=0;const D=M===!0?t:e,x=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;const E=g;for(let N=0;N<=s;N++){const F=N/s*l+a,$=Math.cos(F),V=Math.sin(F);C.x=D*V,C.y=m*x,C.z=D*$,u.push(C.x,C.y,C.z),d.push(0,x,0),w.x=$*.5+.5,w.y=V*.5*x+.5,p.push(w.x,w.y),g++}for(let N=0;N<s;N++){const U=T+N,F=E+N;M===!0?h.push(F,F+1,U):h.push(F+1,F,U),P+=3}c.addGroup(_,P,M===!0?1:2),_+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xs extends Qt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Xs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class or extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(o.slice(),3)),this.setAttribute("uv",new me(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new L,M=new L,T=new L;for(let w=0;w<e.length;w+=3)p(e[w+0],y),p(e[w+1],M),p(e[w+2],T),l(y,M,T,S)}function l(S,y,M,T){const w=T+1,C=[];for(let P=0;P<=w;P++){C[P]=[];const D=S.clone().lerp(M,P/w),x=y.clone().lerp(M,P/w),E=w-P;for(let N=0;N<=E;N++)N===0&&P===w?C[P][N]=D:C[P][N]=D.clone().lerp(x,N/E)}for(let P=0;P<w;P++)for(let D=0;D<2*(w-P)-1;D++){const x=Math.floor(D/2);D%2===0?(d(C[P][x+1]),d(C[P+1][x]),d(C[P][x])):(d(C[P][x+1]),d(C[P+1][x+1]),d(C[P+1][x]))}}function c(S){const y=new L;for(let M=0;M<o.length;M+=3)y.x=o[M+0],y.y=o[M+1],y.z=o[M+2],y.normalize().multiplyScalar(S),o[M+0]=y.x,o[M+1]=y.y,o[M+2]=y.z}function h(){const S=new L;for(let y=0;y<o.length;y+=3){S.x=o[y+0],S.y=o[y+1],S.z=o[y+2];const M=m(S)/2/Math.PI+.5,T=_(S)/Math.PI+.5;r.push(M,1-T)}g(),u()}function u(){for(let S=0;S<r.length;S+=6){const y=r[S+0],M=r[S+2],T=r[S+4],w=Math.max(y,M,T),C=Math.min(y,M,T);w>.9&&C<.1&&(y<.2&&(r[S+0]+=1),M<.2&&(r[S+2]+=1),T<.2&&(r[S+4]+=1))}}function d(S){o.push(S.x,S.y,S.z)}function p(S,y){const M=S*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){const S=new L,y=new L,M=new L,T=new L,w=new lt,C=new lt,P=new lt;for(let D=0,x=0;D<o.length;D+=9,x+=6){S.set(o[D+0],o[D+1],o[D+2]),y.set(o[D+3],o[D+4],o[D+5]),M.set(o[D+6],o[D+7],o[D+8]),w.set(r[x+0],r[x+1]),C.set(r[x+2],r[x+3]),P.set(r[x+4],r[x+5]),T.copy(S).add(y).add(M).divideScalar(3);const E=m(T);v(w,x+0,S,E),v(C,x+2,y,E),v(P,x+4,M,E)}}function v(S,y,M,T){T<0&&S.x===1&&(r[y]=S.x-1),M.x===0&&M.z===0&&(r[y]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function _(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.vertices,t.indices,t.radius,t.details)}}class rr extends or{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rr(t.radius,t.detail)}}class $s extends or{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $s(t.radius,t.detail)}}class xs extends ze{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new L,g=new lt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const _=o+m/n*r;p.x=u*Math.cos(_),p.y=u*Math.sin(_),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let _=0;_<n;_++){const S=_+m,y=S,M=S+n+1,T=S+n+2,w=S+1;a.push(y,M,w),a.push(M,T,w)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class si extends ze{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new L,d=new L,p=[],g=[],v=[],m=[];for(let _=0;_<=n;_++){const S=[],y=_/n;let M=0;_===0&&r===0?M=.5/e:_===n&&l===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){const w=T/e;u.x=-t*Math.cos(s+w*o)*Math.sin(r+y*a),u.y=t*Math.cos(r+y*a),u.z=t*Math.sin(s+w*o)*Math.sin(r+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+M,1-y),S.push(c++)}h.push(S)}for(let _=0;_<n;_++)for(let S=0;S<e;S++){const y=h[_][S+1],M=h[_][S],T=h[_+1][S],w=h[_+1][S+1];(_!==0||r>0)&&p.push(y,M,w),(_!==n-1||l<Math.PI)&&p.push(M,T,w)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ee extends wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ar extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hg extends ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yr=new le,Vc=new L,Wc=new L;class Ml{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vc),Wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wc),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vg extends Ml{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ps*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Wg extends ar{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new Vg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Xc=new le,Rs=new L,jr=new L;class Xg extends Ml{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Rs),jr.copy(n.position),jr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(jr),n.updateMatrixWorld(),s.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc)}}class wu extends ar{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $g extends Ml{constructor(){super(new du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Au extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new $g}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=$c();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function $c(){return performance.now()}const qc=new le;class Yg{constructor(t,e,n=0,s=1/0){this.ray=new ir(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(t,e=!0,n=[]){return Ka(t,this,n,e),n.sort(Yc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Ka(t[s],this,n,e);return n.sort(Yc),n}}function Yc(i,t){return i.distance-t.distance}function Ka(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Ka(o[r],t,e,!0)}}class jc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tu extends bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);const Yt={DEFAULT_DATASET:"jezero_test",SEGMENTS:256,PATCH_SIZE_M:2e3,PATCH_SEGMENTS:256,PATCH_RECENTER_DIST_M:250,GRAVITY_MS2:3.71,EYE_HEIGHT_M:1.6,WALK_SPEED_MS:1.2,RUN_SPEED_MS:2.5,JUMP_VELOCITY_MS:3,MAX_SAFE_SLOPE_DEG:25,O2_RESERVE_L:580,O2_BASE_CONSUMPTION_L_PER_H:50,SLOPE_COST_FACTORS:[{from_deg:0,to_deg:5,factor:1},{from_deg:5,to_deg:10,factor:1.35},{from_deg:10,to_deg:15,factor:1.85},{from_deg:15,to_deg:20,factor:2.6},{from_deg:20,to_deg:25,factor:3.6},{from_deg:25,to_deg:90,factor:5}],BOUNDS_MARGIN_M:10},f={mode:"orbit",exaggeration:2,datasetId:null,metadata:null,dem:null,baseTexture:null,layers:[],fisio:{gravity_ms2:Yt.GRAVITY_MS2,eye_height_m:Yt.EYE_HEIGHT_M,walk_speed_ms:Yt.WALK_SPEED_MS,run_speed_ms:Yt.RUN_SPEED_MS,jump_velocity_ms:Yt.JUMP_VELOCITY_MS,max_safe_slope_deg:Yt.MAX_SAFE_SLOPE_DEG,o2_reserve_l:Yt.O2_RESERVE_L,o2_base_consumption_l_per_h:Yt.O2_BASE_CONSUMPTION_L_PER_H,slope_cost_factors:Yt.SLOPE_COST_FACTORS},health:null,healthMode:"solo",healthLastAggregate:null,routeCostMode:"oxygen",healthRouteResult:null,routeCostDimensions:{slope:!0,metabolic:!1,heart_rate:!1,oxygen:!1,thermal:!1,hydration:!1,radiation:!1},routeCostPreset:"classic",routeComparison:null,routeComparisonComputing:!1,healthRouteActive:!1,hud:{elev_m:0,slope_deg:0,speed_ms:0,o2Remaining_l:Yt.O2_RESERVE_L,o2Rate_l_h:0,slopeWarning:!1},weather:{mode:"nominal",temp_c:-63,pressure_hpa:7.4,wind_ms:5.2,dust_tau:.45,uv_level:"MODERADO",thermalPenalty:1},solar:{lat_deg:18.38,lon_deg:77.58,ls_deg:142,ltst_h:10.5,autoCycle:!1,distance_au:1.564,toa_irradiance_wm2:556,surface_irradiance_wm2:412,declination_deg:15.2,elevation_deg:66.4,azimuth_deg:112,airmass:1.09,phase:"DIA"},route:null,qaoaRoute:null,routeAlgorithm:"astar",routeStart_m:null,routeGoal_m:null,routeSelectMode:null,routeGroup:null,pois:[],poiGroup:null,poiLayerEnabled:!0,poiLayerOpacity:1,completedPOIs:new Set,nearestPOI:null,terrainMesh:null,terrainGeo:null,heights:null,terrainWidth:1e3,terrainDepth:1e3,boundsX:490,boundsZ:490,localPatchMesh:null,localPatchGeo:null,localPatchHeights:null,localPatchCenter:new lt(0,0),orbitControls:null,fpControls:null,astronautGroup:null,astronautPosition:new L(0,0,0),transition:null,interaction:{isDraggingAstronaut:!1,lastDockDragEnd:0},hooks:{onRecallAstronaut:null}},ae=new wg;ae.background=new Ft(724240);const Et=new Ke(60,window.innerWidth/window.innerHeight,.2,5e5);Et.up.set(0,0,-1);Et.position.set(0,4e4,0);const pe=new bg({antialias:!0});pe.setPixelRatio(Math.min(window.devicePixelRatio,2));pe.setSize(window.innerWidth,window.innerHeight);pe.outputColorSpace=je;document.getElementById("app").appendChild(pe.domElement);const De=new Hg(16767424,2365457,1.1);ae.add(De);const en=new Au(16773600,2.2);en.position.set(-14e3,2e4,11e3);ae.add(en);const _n=new Au(9417983,.35);_n.position.set(12e3,6e3,-14e3);ae.add(_n);const _s=new Wg(15398143,0,85,Math.PI/4.2,.35,1.2);_s.position.set(0,0,0);Et.add(_s);Et.add(_s.target);_s.target.position.set(0,0,-20);const Cu=new wu(15398143,0,16,1.4);Et.add(Cu);ae.add(Et);const qi={set intensity(i){_s.intensity=i*2.4,Cu.intensity=i*.75},get intensity(){return _s.intensity}};function jg(){const i=new si(1,36,24);i.scale(-1,1,1);const t=`
    varying vec3 vWorldPosition;
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,e=`
    uniform vec3 topColor;       // Color en el cenit marciano
    uniform vec3 bottomColor;    // Color en el horizonte (butterscotch / salmón / niebla)
    uniform vec3 sunDirection;   // Dirección normalizada del Sol
    uniform vec3 mieColor;       // Color del halo de dispersión frontal Mie
    uniform float mieIntensity;  // Intensidad del halo solar
    uniform float opacity;       // Opacidad general (1 diurno -> 0 nocturno)
    uniform float horizonBias;   // Curvatura del gradiente vertical
    varying vec3 vWorldPosition;

    void main() {
      vec3 dir = normalize(vWorldPosition);
      float h = clamp(dir.y * 1.6 + horizonBias, 0.0, 1.0);
      float grad = pow(h, 0.65);

      // Mezcla base del gradiente vertical marciano (Horizonte butterscotch -> Cenit ocre oscuro)
      vec3 sky = mix(bottomColor, topColor, grad);

      // Dispersión frontal Mie alrededor del disco solar (cono azul en atardecer, dorado en día)
      float cosTheta = max(dot(dir, sunDirection), 0.0);
      float mie = pow(cosTheta, 28.0) * mieIntensity;
      float wideMie = pow(cosTheta, 6.0) * (mieIntensity * 0.28);
      sky += mieColor * (mie + wideMie);

      gl_FragColor = vec4(sky, opacity);
    }
  `,n=new zn({vertexShader:t,fragmentShader:e,uniforms:{topColor:{value:new Ft(7684904)},bottomColor:{value:new Ft(14460536)},sunDirection:{value:new L(0,1,0)},mieColor:{value:new Ft(16772822)},mieIntensity:{value:.65},opacity:{value:1},horizonBias:{value:.12}},side:Ve,depthWrite:!1,transparent:!0,fog:!1}),s=new dt(i,n);return s.scale.setScalar(8e4),ae.add(s),s}const Zt=jg();function Kg(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d");t.save(),t.translate(64,64),t.scale(1.15,.88);const e=t.createRadialGradient(-10,-12,4,0,0,48);e.addColorStop(0,"#f2ece4"),e.addColorStop(.45,"#c5beb4"),e.addColorStop(.85,"#6a645d"),e.addColorStop(1,"rgba(30, 28, 25, 0)"),t.fillStyle=e,t.beginPath(),t.arc(0,0,46,0,Math.PI*2),t.fill(),t.fillStyle="rgba(60, 55, 50, 0.45)",t.beginPath(),t.ellipse(-14,-8,14,11,-.3,0,Math.PI*2),t.fill(),t.restore();const n=new Ti(i),s=new _l({map:n,color:14671064,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),o=new xu(s);return o.scale.setScalar(2600),ae.add(o),o}const rn=Kg();function Zg(){const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,2,128,128,126);e.addColorStop(0,"rgba(255, 255, 255, 1.0)"),e.addColorStop(.11,"rgba(255, 244, 224, 0.96)"),e.addColorStop(.26,"rgba(255, 198, 145, 0.42)"),e.addColorStop(.55,"rgba(135, 175, 235, 0.14)"),e.addColorStop(1,"rgba(0, 0, 0, 0.0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const n=new Ti(i),s=new _l({map:n,color:16773858,transparent:!0,opacity:.95,depthWrite:!1,blending:Vo,fog:!1}),o=new xu(s);return o.scale.setScalar(6500),ae.add(o),o}const ln=Zg();window.addEventListener("resize",()=>{Et.aspect=window.innerWidth/window.innerHeight,Et.updateProjectionMatrix(),pe.setSize(window.innerWidth,window.innerHeight)});function Jg(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255, 255, 255, 1)"),e.addColorStop(.2,"rgba(235, 245, 255, 0.85)"),e.addColorStop(.5,"rgba(180, 210, 255, 0.25)"),e.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Ti(i),s=3500,o=new ze,r=new Float32Array(s*3),a=new Float32Array(s*3),l=[new Ft(16777215),new Ft(14084351),new Ft(16772829),new Ft(16765606)];for(let u=0;u<s;u++){const d=1+Math.random()*.9,p=Math.random()*Math.PI*2,g=Math.acos(2*Math.random()-1);r[u*3]=d*Math.sin(g)*Math.cos(p),r[u*3+1]=d*Math.cos(g),r[u*3+2]=d*Math.sin(g)*Math.sin(p);const v=l[Math.floor(Math.random()*l.length)],m=.5+Math.random()*.5;a[u*3]=v.r*m,a[u*3+1]=v.g*m,a[u*3+2]=v.b*m}o.setAttribute("position",new Ue(r,3)),o.setAttribute("color",new Ue(a,3));const c=new yu({size:4,sizeAttenuation:!1,map:n,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Vo,fog:!1}),h=new Tg(o,c);return h.scale.setScalar(1e5),ae.add(h),h}const nn=Jg(),Be=new Yg,os=new lt;function Sl(i){const t=pe.domElement.getBoundingClientRect();return os.x=(i.clientX-t.left)/t.width*2-1,os.y=-((i.clientY-t.top)/t.height)*2+1,os}function be(i,t){const e=f.terrainWidth,n=f.terrainDepth;if(e<=0||n<=0)return null;const s=(i+e*.5)/e,o=(t+n*.5)/n;if(s<0||s>1||o<0||o>1)return null;const r=f.dem,a=f.metadata;if(r&&a&&Array.isArray(a.shape)){const[T,w]=a.shape,C=a.elevation_range_m[0],P=w-1,D=T-1,x=s*P,E=o*D,N=Math.min(P-1,Math.max(0,Math.floor(x))),U=Math.min(D-1,Math.max(0,Math.floor(E))),F=x-N,$=E-U,V=U*w,z=(U+1)*w,O=r[V+N],tt=r[V+N+1],Q=r[z+N],it=r[z+N+1],Rt=O+(tt-O)*F,nt=Q+(it-Q)*F;return Rt+(nt-Rt)*$-C}const l=f.heights;if(!l)return null;const c=Yt.SEGMENTS,h=c+1,u=s*c,d=o*c,p=Math.min(c-1,Math.max(0,Math.floor(u))),g=Math.min(c-1,Math.max(0,Math.floor(d))),v=u-p,m=d-g,_=g*h,S=(g+1)*h,y=l[_+p]+(l[_+p+1]-l[_+p])*v,M=l[S+p]+(l[S+p+1]-l[S+p])*v;return y+(M-y)*m}function Le(i,t){const e=be(i,t);return e!==null?e*f.exaggeration:null}function Se(i,t){const e=f.dem,n=f.metadata;if(!e||!n)return 0;const[s,o]=n.shape,[r,a]=n.size_m;if(o<2||s<2||r<=0||a<=0)return 0;const l=Gt.clamp((i+r*.5)/r,0,1),c=Gt.clamp((t+a*.5)/a,0,1),h=Math.round(l*(o-1)),u=Math.round(c*(s-1)),d=Math.max(0,h-1),p=Math.min(o-1,h+1),g=Math.max(0,u-1),v=Math.min(s-1,u+1),m=r/(o-1),_=a/(s-1),S=(p-d)*m,y=(v-g)*_,M=e[u*o+p],T=e[u*o+d],w=e[v*o+h],C=e[g*o+h],P=S>0?(M-T)/S:0,D=y>0?(w-C)/y:0;return Math.atan(Math.hypot(P,D))*(180/Math.PI)}function lr(i,t=0){const e=f.fisio.slope_cost_factors||Yt.SLOPE_COST_FACTORS;let n=1;for(let s=0;s<e.length;s++){const o=e[s];if(i>=o.from_deg&&i<o.to_deg){n=o.factor;break}s===e.length-1&&i>=o.from_deg&&(n=o.factor)}return t>5e-4?n:t<-5e-4?Math.max(.85,1+(n-1)*.25):1+(n-1)*.15}function Ru(i){return f.terrainMesh?(Sl(i),Be.setFromCamera(os,Et),Be.near=0,Be.far=1/0,Be.intersectObject(f.terrainMesh,!1)):[]}function Kc(i){return f.astronautGroup?(Sl(i),Be.setFromCamera(os,Et),Be.near=0,Be.far=1/0,Be.intersectObject(f.astronautGroup,!0)):[]}function Qg(i){if(!f.poiGroup||!f.poiGroup.visible)return null;Sl(i),Be.setFromCamera(os,Et),Be.near=0,Be.far=1/0;const t=Be.intersectObject(f.poiGroup,!0);for(let e=0;e<t.length;e++){let n=t[e].object;for(;n;){if(n.userData&&n.userData.poi)return{poi:n.userData.poi,point:t[e].point};n=n.parent}}return null}function tv(i=200){if(!f.terrainMesh||!f.heights)return;const t=new L(0,-1,0),e=new L,n=performance.now();let s=0;for(let d=0;d<i;d++){const p=d*73%1e3-500,g=d*137%1e3-500;e.set(p,2e4,g),Be.set(e,t),Be.near=0,Be.far=4e4;const v=Be.intersectObject(f.terrainMesh,!1);v.length&&(s+=v[0].point.y)}const o=performance.now()-n,r=performance.now();let a=0;for(let d=0;d<i;d++){const p=d*73%1e3-500,g=d*137%1e3-500,v=Le(p,g);v!==null&&(a+=v)}const l=performance.now()-r,c=o*1e3/i,h=l*1e3/i,u=l>0?(o/l).toFixed(0):"∞";console.log(`[Marswalk T3 Benchmark] (${i} muestras) · Raycast: ${(o/i).toFixed(3)} ms/llamada (${c.toFixed(1)} µs) · Bilineal: ${(l/i).toFixed(5)} ms/llamada (${h.toFixed(3)} µs) · Mejora: ~${u}× más rápido (Δ media Y = ${(Math.abs(s-a)/i).toFixed(3)} m)`)}const Ko=[],El=[],bl=[];function ev(){Ko.length=0,El.length=0,bl.length=0}function nv(i,t){for(const e of Ko)e.rotation.y+=i*(e.userData.speed||9);for(const e of El){const n=e.userData.baseYaw||0;e.rotation.y=n+Math.sin(t*.9+(e.userData.phase||0))*.45}for(const e of bl){const n=1+.14*Math.sin(t*3.2+(e.userData.phase||0));e.scale.set(n,1,n)}}function iv(i,t=0,e=1){const n=new de;n.userData={poi:i,isArtifactRoot:!0};const[s,o]=i.position_m,r=Le(s,o)??0,a=(d,p,g,v=0)=>{const m=s+p,_=o+g,S=(Le(m,_)??r)-r+v;d.position.set(p,S,g),d.traverse(y=>{y.isMesh&&(y.userData={...y.userData,poi:i})}),n.add(d)},l=i.type==="hazard"?16726101:i.type==="shelter"?5632667:6749425,c=new xe({color:l,transparent:!0,opacity:.22*e,side:Pe,depthWrite:!1}),h=new dt(new Qt(.18,.55,42,12,1,!0),c);h.position.set(0,21,0),h.userData={poi:i,baseOpacity:.22},n.add(h);const u=new dt(new xs(2.8,3.3,32),new xe({color:l,transparent:!0,opacity:.55*e,side:Pe,depthWrite:!1}));if(u.rotation.x=-Math.PI/2,u.position.set(0,.12,0),u.userData={poi:i,baseOpacity:.55,phase:t*1.1},bl.push(u),n.add(u),i.type==="shelter"){const d=ov();a(d,0,0,0);const p=Zc(t);p.rotation.y=.45,a(p,8.5,5,0);const g=sv(t);g.rotation.y=-.3,a(g,4.8,9.2,0)}else if(i.type==="sampling"){const d=rv();if(a(d,0,0,0),t%2===1){const p=Zc(t+10);p.rotation.y=-.85,a(p,4.2,-3.2,0)}}else if(i.type==="hazard"){const d=av();a(d,0,0,0)}return n}function Zc(i=0){const t=new de;t.name="perseveranceRover";const e=new Ee({color:15592162,roughness:.45,metalness:.25}),n=new Ee({color:13935160,roughness:.32,metalness:.72}),s=new Ee({color:2238254,roughness:.65,metalness:.45}),o=new Ee({color:10134706,roughness:.4,metalness:.75}),r=new xe({color:6749425}),a=new xe({color:16726101}),l=new Qt(.27,.27,.24,16);l.rotateZ(Math.PI/2);const c=new Qt(.14,.14,.26,10);c.rotateZ(Math.PI/2);const h=[[-1.12,.27,1.08],[1.12,.27,1.08],[-1.18,.27,0],[1.18,.27,0],[-1.12,.27,-1.08],[1.12,.27,-1.08]];for(const[V,z,O]of h){const tt=new dt(l,s);tt.position.set(V,z,O),t.add(tt);const Q=new dt(c,o);Q.position.set(V,z,O),t.add(Q);const it=new dt(new Qt(.035,.035,.68,8),o);it.position.set(V*.82,.55,O*.88),it.rotation.z=V>0?.32:-.32,t.add(it)}const u=new dt(new ge(1.55,.58,2.15),e);u.position.set(0,.86,0),t.add(u);const d=new dt(new ge(1.48,.18,2.05),n);d.position.set(0,.54,0),t.add(d);const p=new dt(new ge(1.42,.08,1.95),o);p.position.set(0,1.18,0),t.add(p);const g=new de;g.position.set(0,1.05,-1.25),g.rotation.x=-.45;const v=new dt(new Qt(.22,.24,.85,12),e);g.add(v);const m=new dt(new ge(.62,.75,.04),o),_=new dt(new ge(.04,.75,.62),o);g.add(m,_),t.add(g);const S=new dt(new Qt(.03,.03,.45,8),o);S.position.set(-.45,1.42,-.55),t.add(S);const y=new dt(new Qt(.22,.18,.06,16),n);y.position.set(-.45,1.66,-.55),y.rotation.x=.35,t.add(y);const M=new dt(new Qt(.055,.065,.95,10),e);M.position.set(.42,1.65,.68),t.add(M);const T=new de;T.position.set(.42,2.18,.68),T.userData={baseYaw:0,phase:i*1.7};const w=new dt(new ge(.46,.28,.32),e);T.add(w);const C=new dt(new Qt(.075,.075,.06,16),r);C.rotation.x=Math.PI/2,C.position.set(0,.04,.16),T.add(C);const P=new dt(new ge(.08,.07,.05),s);P.position.set(-.15,-.05,.16);const D=P.clone();D.position.set(.15,-.05,.16),T.add(P,D),El.push(T),t.add(T);const x=new de;x.position.set(-.15,.95,1.08);const E=new dt(new Qt(.04,.04,.85,8),o);E.rotation.x=Math.PI/2-.35,E.position.set(0,-.14,.38),x.add(E);const N=new dt(new Qt(.035,.035,.72,8),o);N.rotation.x=Math.PI/2+.55,N.position.set(0,-.42,.88),x.add(N);const U=new dt(new Qt(.18,.18,.22,12),s);U.position.set(0,-.62,1.15),x.add(U);const F=new dt(new Qt(.01,.025,.35,8),a);F.position.set(0,-.78,1.15),x.add(F),t.add(x);const $=new dt(new rr(.28,1),new Ee({color:8143659,roughness:.92}));return $.scale.set(1.3,.65,1.1),$.position.set(-.15,.12,2.23),t.add($),t}function sv(i=0){const t=new de;t.name="ingenuityHelicopter";const e=new Ee({color:14855996,roughness:.3,metalness:.8}),n=new Ee({color:1843238,roughness:.5,metalness:.5}),s=new Ee({color:1452877,roughness:.25,metalness:.7}),o=new dt(new ge(.38,.32,.38),e);o.position.set(0,.42,0),t.add(o);const r=new dt(new Qt(.025,.025,.52,8),n);r.position.set(0,.72,0),t.add(r);const a=new dt(new ge(1.85,.015,.14),n);a.position.set(0,.78,0),a.userData={speed:11},Ko.push(a),t.add(a);const l=new dt(new ge(1.85,.015,.14),n);l.position.set(0,.88,0),l.rotation.y=Math.PI/2,l.userData={speed:-11},Ko.push(l),t.add(l);const c=new dt(new ge(.68,.02,.26),s);c.position.set(0,.98,0),t.add(c);const h=[Math.PI*.25,Math.PI*.75,-Math.PI*.25,-Math.PI*.75];for(const u of h){const d=new dt(new Qt(.012,.012,.65,6),n);d.position.set(Math.cos(u)*.32,.22,Math.sin(u)*.32),d.rotation.z=-Math.cos(u)*.55,d.rotation.x=Math.sin(u)*.55,t.add(d)}return t}function ov(){const i=new de;i.name="marsEvaHabitat";const t=new Ee({color:15790837,roughness:.5,metalness:.2}),e=new Ee({color:7239813,roughness:.4,metalness:.7}),n=new Ee({color:1388892,roughness:.3,metalness:.65}),s=new xe({color:16173381}),o=new xe({color:5632667}),r=new dt(new Qt(4.4,4.8,.28,24),e);r.position.set(0,.14,0),i.add(r);const a=new dt(new Qt(3.4,3.4,2.2,24),t);a.position.set(0,1.38,0),i.add(a);const l=new dt(new si(3.4,24,16,0,Math.PI*2,0,Math.PI*.5),t);l.position.set(0,2.48,0),i.add(l);const c=new dt(new ge(1.8,2.1,2.2),e);c.position.set(0,1.25,3.6),i.add(c);const h=new dt(new Ai(.95,1.65),o);h.position.set(0,1.15,4.72),i.add(h);const u=new wu(5632667,1.2,16,1.8);u.position.set(0,2.1,4.9),i.add(u);for(const g of[-.7,.7,2.1,-2.1]){const v=new dt(new ge(.75,.42,.12),s);v.position.set(Math.sin(g)*3.38,1.85,Math.cos(g)*3.38),v.rotation.y=g,i.add(v)}for(const g of[-1,1]){const v=new dt(new ge(3.6,.08,1.8),n);v.position.set(g*5.4,1.15,-.5),v.rotation.x=.28,i.add(v);const m=new dt(new Qt(.08,.08,1.15,8),e);m.position.set(g*4.2,.6,-.5),i.add(m)}const d=new dt(new Qt(.06,.06,1.4,8),e);d.position.set(-1.1,5.8,-.8),i.add(d);const p=new dt(new Xs(.85,.45,16,1,!0),t);return p.position.set(-1.1,6.55,-.8),p.rotation.x=Math.PI*.72,i.add(p),i}function rv(){const i=new de,t=new Ee({color:14476010,roughness:.25,metalness:.85}),e=new Ee({color:15119420,roughness:.3,metalness:.8}),n=new xe({color:6749425}),s=new Ee({color:2370099,roughness:.6,metalness:.4}),o=new dt(new ge(.45,.28,.45),e);o.position.set(0,1.45,0),i.add(o);const r=new dt(new $s(.24,0),n);r.position.set(0,1.92,0),i.add(r);for(let l=0;l<3;l++){const c=l/3*Math.PI*2,h=new dt(new Qt(.025,.025,1.65,8),s);h.position.set(Math.cos(c)*.38,.72,Math.sin(c)*.38),h.rotation.z=-Math.cos(c)*.28,h.rotation.x=Math.sin(c)*.28,i.add(h)}const a=[[-.95,.65,.4],[.85,.75,-.5],[.25,-1.05,1.1]];for(const[l,c,h]of a){const u=new de,d=new dt(new Qt(.055,.055,.55,12),t);d.rotation.z=Math.PI/2;const p=new dt(new Qt(.065,.065,.12,12),e);p.rotation.z=Math.PI/2,p.position.x=.24,u.add(d,p),u.position.set(l,.07,c),u.rotation.y=h,i.add(u)}return i}function av(){const i=new de,t=new Ee({color:2500910,roughness:.6,metalness:.5}),e=new xe({color:16726101}),n=new xe({color:16173381}),s=new dt(new Qt(.55,.7,.25,8),t);s.position.set(0,.12,0),i.add(s);const o=new dt(new Qt(.08,.12,2.4,8),t);o.position.set(0,1.3,0),i.add(o);const r=new dt(new Xs(.55,.95,4),e);r.position.set(0,2.85,0),r.rotation.x=Math.PI,i.add(r);const a=new dt(new Qt(.16,.16,.35,12),n);return a.position.set(0,1.95,0),i.add(a),i}const Jc={body_mass_kg:80,body_height_m:1.8,age_years:40,sex:"unspecified",fitness_level:"nominal",acclimatization_day:30,suit_mass_kg:60,terrain_factor:1.1,walk_speed_ms:1.2,run_speed_ms:2.5,max_safe_slope_deg:25,health_smoothing_alpha:.12,rer_assumed:.82,max_sustainable_m_w:900,hr_rest_bpm:70,hr_walk_target_bpm:110,hr_max_bpm:null,hr_m_threshold_w:300,hr_m_max_w:900,sv_rest_ml:70,sv_max_ml:120,o2_capacity_l_equiv:580,o2_critical_threshold_l:58,gravity_ms2:3.71,gravity_earth_ms2:9.81,gravity_correction_mode:"empirical",gravity_empirical_factor:.8,suit_pressure_kpa:30,suit_pressure_overhead_mode:"percent_overhead",suit_pressure_overhead_fraction:.3,t_core_initial_c:37,t_core_warning_c:38.5,t_core_critical_c:39.5,body_c_p_kj_kg_k:3.5,thermal_mode:"nominal",thermal_lcvg_efficiency:.85,potable_water_provision_l_h:.24,potable_water_capacity_l:2,dehydration_warning_pct_body_mass:2,dehydration_critical_pct_body_mass:4,route_weights:{slope:.15,oxygen:.25,metabolic:.2,heart_rate:.15,thermal:.1,hydration:.1,radiation:.05,contingency:0},group_size:3,coupling_policy:"coupled",max_separation_m:50,link_distance_max_m:200,formation:"column",leader_rotation_interval_min:20,leader_terrain_factor:1.2,follower_terrain_factor:1.05,leader_extra_hr_bpm:5,rotation_overhead_s:30,rotation_overhead_m_w:150,comm_nominal_range_m:200,comm_degraded_range_m:500,group_cognitive_hr_bump_bpm:8,resource_topology:"per_suit",abort_threshold_min:5,not_modeled:{radiation:"Fase G3 · requiere surface_dose_rate por sitio y SPE",contingency:"Fase G3 · requiere leak_rate por miembro",co2:"Fase G3 · requiere cartucho LiOH y VCO2 acumulado",fatigue:"Sin fuente canónica · proxy exponencial no defendible",cognitive:"Sin modelo cuantitativo validado",gravity_gait_adaptation:"Factor empírico 0.80 sin validación experimental",suit_joint_resistance_per_articulation:"Modelo Newman-Barratt requiere geometría y cinemática; fuera de alcance MVP",mars_atmospheric_pressure:"Afecta térmico/contingencia/comunicaciones, no metabolismo (traje a 30 kPa)"}},lv={id:"astronaut",role:"leader",body_mass_kg:80,age_years:40,sex:"unspecified",fitness_level:"nominal",cumulative_career_dose_mgy:0,o2_capacity_l_equiv:580};function Pu(i){return 220-i}function cv(i){return Math.tan(i*Math.PI/180)*100}function hv(i,t=null){const e=i.body_mass_kg,n=i.suit_mass_kg,s=i.walk_speed_ms,o=cv(i.signed_slope_deg),r=1.5*e+2*(e+n)*(n/e)**2,a=i.terrain_factor*(e+n)*(1.5*s*s+.35*s*o);let l=r+a,c=Math.max(l,.5*r),h=1,u=0;return t&&(t.gravity_correction_mode==="linear_vertical"?(h=t.gravity_ms2/t.gravity_earth_ms2,l=r+a*h,c=Math.max(l,.5*r)):t.gravity_correction_mode==="empirical"&&(h=t.gravity_empirical_factor,l*=h,c*=h),t.suit_pressure_overhead_mode==="percent_overhead"&&(u=c*t.suit_pressure_overhead_fraction,l+=u,c+=u)),{baseline_w:r,effort_w:a,metabolic_rate_raw_w:l,metabolic_rate_w:c,grade_percent:o,gravity_factor_applied:h,pressure_overhead_w:u}}function uv(i,t=.82){const n=19.6+(Math.max(.7,Math.min(1,t))-.7)/.3*1.5;return i*60/(n*1e3)}function dv(i,t){const e=t.hr_m_threshold_w,n=t.hr_m_max_w;if(i<=e){const o=Math.max(0,i/e);return t.hr_rest_bpm+(t.hr_walk_target_bpm-t.hr_rest_bpm)*o}const s=Math.min(1,(i-e)/(n-e));return t.hr_walk_target_bpm+(t.hr_max_bpm-t.hr_walk_target_bpm)*s}function fv(i,t){const e=t.hr_m_threshold_w,n=t.hr_m_max_w;if(i<=e){const o=Math.max(0,i/e);return t.sv_rest_ml+(t.sv_max_ml-t.sv_rest_ml)*o}const s=Math.min(1,(i-e)/(n-e));return t.sv_rest_ml+(t.sv_max_ml-t.sv_rest_ml)*(.5+.5*s)}function pv(i,t,e,n,s,o){if(o.thermal_mode==="nominal"){const p=o.t_core_initial_c+Math.min(.4,Math.max(0,(t-300)/1500)*.4);return Math.min(o.t_core_initial_c+.4,Math.max(o.t_core_initial_c,i+(p-i)*Math.min(1,n*2)))}const r=s.body_mass_kg,a=o.body_c_p_kj_kg_k*1e3,l=.5,c=t*(1-o.thermal_lcvg_efficiency),h=l*(i-e),d=(c-h)/(r*a)*n*3600;return Math.min(45,i+d)}function mv(i,t,e,n,s){const r=.4*(t/600)*(1+Math.max(0,e-37)*.2)*n,a=s.potable_water_provision_l_h*n;return Math.max(0,i+r-a)}function _v(i,t,e,n){const s=Math.max(0,i.walking_time_h||0),o=Math.max(0,Math.min(90,i.slope_deg||0)),a=(i.delta_elev_m||0)>=0?o:-o,l=i.walk_speed_ms??n.walk_speed_ms,c=hv({body_mass_kg:e.body_mass_kg,suit_mass_kg:n.suit_mass_kg,walk_speed_ms:l,signed_slope_deg:a,terrain_factor:n.terrain_factor},n),h=uv(c.metabolic_rate_w,n.rer_assumed),u=h*n.rer_assumed,d=dv(c.metabolic_rate_w,n),p=fv(c.metabolic_rate_w,n),g=d*p/1e3,v=c.metabolic_rate_w*s*3.6,m=h*60*s,_=Math.max(0,(t.o2_remaining_l??e.o2_capacity_l_equiv)-m),S=i.ambient_temp_c??-63,y=t.t_core_c??n.t_core_initial_c,M=pv(y,c.metabolic_rate_w,S,s,e,n),T=t.hydration_deficit_l??0,w=mv(T,c.metabolic_rate_w,M,s,n),C=w/e.body_mass_kg*100;return{member_id:e.id,o2_remaining_l:_,o2_consumed_l_total:(t.o2_consumed_l_total||0)+m,energy_kj_total:(t.energy_kj_total||0)+v,metabolic_rate_w:c.metabolic_rate_w,metabolic_fraction_of_max:c.metabolic_rate_w/n.max_sustainable_m_w,gravity_factor_applied:c.gravity_factor_applied,pressure_overhead_w:c.pressure_overhead_w,vo2_l_min:h,vco2_l_min:u,heart_rate_bpm:d,hr_fraction_of_max:d/n.hr_max_bpm,stroke_volume_ml:p,cardiac_output_l_min:g,total_time_h:(t.total_time_h||0)+s,total_distance_m:(t.total_distance_m||0)+(i.surface_distance_m||0),t_core_c:M,hydration_deficit_l:w,dehydration_pct_body_mass:C,dose_usv:null,time_to_incapacitation_min:null,flags:{over_sustainable_metabolic:c.metabolic_rate_w>n.max_sustainable_m_w,hr_above_85pct_max:d>.85*n.hr_max_bpm,o2_low:_<n.o2_critical_threshold_l,o2_depleted:_<=0,thermal_warning:M>n.t_core_warning_c,thermal_critical:M>n.t_core_critical_c,dehydration_warning:C>n.dehydration_warning_pct_body_mass,dehydration_critical:C>n.dehydration_critical_pct_body_mass}}}function Lu(i,t){return{member_id:i.id,o2_remaining_l:i.o2_capacity_l_equiv,o2_consumed_l_total:0,energy_kj_total:0,metabolic_rate_w:0,metabolic_fraction_of_max:0,gravity_factor_applied:1,pressure_overhead_w:0,vo2_l_min:0,vco2_l_min:0,heart_rate_bpm:t.hr_rest_bpm,hr_fraction_of_max:t.hr_rest_bpm/t.hr_max_bpm,stroke_volume_ml:t.sv_rest_ml,cardiac_output_l_min:0,total_time_h:0,total_distance_m:0,t_core_c:t.t_core_initial_c,hydration_deficit_l:0,dehydration_pct_body_mass:0,dose_usv:null,time_to_incapacitation_min:null,flags:{over_sustainable_metabolic:!1,hr_above_85pct_max:!1,o2_low:!1,o2_depleted:!1,thermal_warning:!1,thermal_critical:!1,dehydration_warning:!1,dehydration_critical:!1}}}const gv="marswalk_health_mode";function Iu(i={}){const t={...Jc,...i};return t.route_weights&&(t.route_weights={...Jc.route_weights,...i.route_weights}),t.hr_max_bpm==null&&(t.hr_max_bpm=Pu(t.age_years)),t}function Du(i,t,e){const n={...lv,...i,id:i.id||`member_${e}`};return n.hr_max_bpm==null&&(n.hr_max_bpm=Pu(n.age_years)),n.o2_capacity_l_equiv==null&&(n.o2_capacity_l_equiv=t.o2_capacity_l_equiv),n}function Uu(i={},t={}){const e=Iu(i),n=Du({...t,id:t.id||"solo"},e,0);return{mode:"solo",cfg:e,members:[{...n,...Lu(n,e)}],leaderIndex:0,rotationClockMin:0,totalRotations:0,formation:"solo",resourceTopology:"per_suit"}}function vv(i=[],t={}){const e=Iu(t),s=(i.length?i:Array.from({length:e.group_size},(o,r)=>({id:`member_${r}`}))).map((o,r)=>{const a=Du(o,e,r);return{...a,...Lu(a,e)}});return{mode:"group",cfg:e,members:s,leaderIndex:0,rotationClockMin:0,totalRotations:0,formation:e.formation,resourceTopology:e.resource_topology}}function Qc(i,t,e){return i==null||!Number.isFinite(i)?t:i*(1-e)+t*e}function wl(i,t){const e=i.cfg,n=i.mode==="group",s=(t.walking_time_h||0)*60,o=e.health_smoothing_alpha??.12,r=i._smoothed||{slope_deg:0,walk_speed_ms:0},l=(t.surface_distance_m||0)>.01?{...t,slope_deg:Qc(r.slope_deg,t.slope_deg||0,o),walk_speed_ms:Qc(r.walk_speed_ms,t.walk_speed_ms||0,o)}:{...t,slope_deg:0,walk_speed_ms:0},c=i.members.map((p,g)=>{const v=n&&g===i.leaderIndex,m=n?v?e.leader_terrain_factor:e.follower_terrain_factor:e.terrain_factor,_=n?(v?e.leader_extra_hr_bpm:0)+e.group_cognitive_hr_bump_bpm:0,S={...p},y=_v(l,S,p,{...e,terrain_factor:m});return y.heart_rate_bpm=Math.min(e.hr_max_bpm,y.heart_rate_bpm+_),y.hr_fraction_of_max=y.heart_rate_bpm/e.hr_max_bpm,y.flags.hr_above_85pct_max=y.heart_rate_bpm>.85*e.hr_max_bpm,y.role=n?v?"leader":"follower":"solo",{...p,...y}});let h=i.leaderIndex,u=i.rotationClockMin+s,d=i.totalRotations;if(n&&e.leader_rotation_interval_min>0&&c.length>1)for(;u>=e.leader_rotation_interval_min;)h=(h+1)%c.length,u-=e.leader_rotation_interval_min,d+=1;return{...i,members:c,leaderIndex:h,rotationClockMin:u,totalRotations:d,_smoothed:{slope_deg:l.slope_deg,walk_speed_ms:l.walk_speed_ms}}}function Zo(i){var u;const t=i.members;if(!t.length)return null;const e=d=>t.reduce((p,g)=>p[d]>g[d]?p:g),n=d=>t.reduce((p,g)=>p[d]<g[d]?p:g),s=e("metabolic_fraction_of_max"),o=e("hr_fraction_of_max"),r=n("o2_remaining_l"),a=e("t_core_c"),l=e("dehydration_pct_body_mass"),c=d=>t.some(p=>{var g;return(g=p.flags)==null?void 0:g[d]});let h="nominal";return c("o2_depleted")||c("thermal_critical")||c("dehydration_critical")?h="critical":c("over_sustainable_metabolic")?h="at_risk_over_sustainable":c("thermal_warning")||c("dehydration_warning")||c("hr_above_85pct_max")?h="elevated":c("o2_low")&&(h="low_o2"),{mode:i.mode,leaderIndex:i.leaderIndex,leaderId:(u=t[i.leaderIndex])==null?void 0:u.id,totalRotations:i.totalRotations,members:t.map(d=>({id:d.id,role:d.role,o2_remaining_l:d.o2_remaining_l,o2_consumed_l_total:d.o2_consumed_l_total,metabolic_rate_w:d.metabolic_rate_w,heart_rate_bpm:d.heart_rate_bpm,t_core_c:d.t_core_c,dehydration_pct_body_mass:d.dehydration_pct_body_mass,energy_kj_total:d.energy_kj_total,total_distance_m:d.total_distance_m,total_time_h:d.total_time_h,flags:d.flags})),binding_member_metabolic:s.id,binding_member_hr:o.id,binding_member_o2:r.id,binding_member_thermal:a.id,binding_member_hydration:l.id,mean_metabolic_w:t.reduce((d,p)=>d+p.metabolic_rate_w,0)/t.length,max_metabolic_w:Math.max(...t.map(d=>d.metabolic_rate_w)),mean_hr_bpm:t.reduce((d,p)=>d+p.heart_rate_bpm,0)/t.length,max_hr_bpm:Math.max(...t.map(d=>d.heart_rate_bpm)),min_o2_remaining_l:Math.min(...t.map(d=>d.o2_remaining_l)),max_t_core_c:Math.max(...t.map(d=>d.t_core_c)),max_dehydration_pct:Math.max(...t.map(d=>d.dehydration_pct_body_mass)),sum_o2_consumed_l:t.reduce((d,p)=>d+p.o2_consumed_l_total,0),sum_energy_kj:t.reduce((d,p)=>d+p.energy_kj_total,0),flags:{any_over_sustainable_metabolic:c("over_sustainable_metabolic"),any_hr_above_85pct_max:c("hr_above_85pct_max"),any_o2_low:c("o2_low"),any_o2_depleted:c("o2_depleted"),any_thermal_warning:c("thermal_warning"),any_thermal_critical:c("thermal_critical"),any_dehydration_warning:c("dehydration_warning"),any_dehydration_critical:c("dehydration_critical")},status:h}}function xv(){return localStorage.getItem(gv)||"solo"}let es=null,Kn=null,qn=null,gn=null;const yv={base:"Textura Base (CTX/MOLA)",slope:"Pendiente (°)",risk:"Riesgo Terreno",crism:"Mineralogía CRISM (MRO)",themis:"Inercia Térmica THEMIS"};async function Mv(){var l;const t=(new URLSearchParams(window.location.search).get("dataset")||Yt.DEFAULT_DATASET).trim();if(!/^[a-zA-Z0-9_-]+$/.test(t)){To(`ID de dataset inválido: "${t}"`,"Usa solo letras, números, guiones o guiones bajos en ?dataset=");return}f.datasetId=t;const e=`./data/${t}`,n=`${e}/metadata.json`;Ja(`Cargando dataset "${t}"…`,`Leyendo ${n}`);function s(c){return new Promise(h=>{const u=new Image;u.crossOrigin="anonymous";const d=setTimeout(()=>{console.warn("[Marswalk] Timeout cargando imagen de capa:",c),h(null)},1e4);u.onload=()=>{clearTimeout(d),h(u)},u.onerror=()=>{clearTimeout(d),h(null)},u.src=c})}let o;try{const c=await fetch(n,{cache:"no-store"});if(!c.ok)throw new Error(`HTTP ${c.status} al solicitar ${n}`);o=await c.json()}catch(c){console.error("[Marswalk] Error cargando metadata.json:",c),To(`No se pudo cargar metadata.json para el dataset "${t}"`,`Verifica que exista ${n} y que el servidor estático esté activo (${c.message}).`);return}if(!o||!Array.isArray(o.shape)||o.shape.length!==2||!Array.isArray(o.size_m)||o.size_m.length!==2||!Array.isArray(o.elevation_range_m)||o.elevation_range_m.length!==2||!((l=o.heightmap)!=null&&l.file)){console.error("[Marswalk] metadata.json incompleto o inválido:",o),To(`metadata.json inválido en "${t}"`,"Faltan campos obligatorios del contrato 4.1 (shape, size_m, elevation_range_m o heightmap.file).");return}f.metadata=o,o.label&&(document.title=`${o.label} · Marswalk 3D`),ku(t,o);try{const c=await fetch(`${e}/config_fisio.json`,{cache:"no-store"});if(c.ok){const h=await c.json();typeof h.gravity_ms2=="number"&&(f.fisio.gravity_ms2=h.gravity_ms2),typeof h.eye_height_m=="number"&&(f.fisio.eye_height_m=h.eye_height_m),typeof h.walk_speed_ms=="number"&&(f.fisio.walk_speed_ms=h.walk_speed_ms),typeof h.run_speed_ms=="number"&&(f.fisio.run_speed_ms=h.run_speed_ms),typeof h.max_safe_slope_deg=="number"&&(f.fisio.max_safe_slope_deg=h.max_safe_slope_deg),typeof h.o2_reserve_l=="number"&&h.o2_reserve_l>0&&(f.fisio.o2_reserve_l=h.o2_reserve_l),typeof h.o2_base_consumption_l_per_h=="number"&&h.o2_base_consumption_l_per_h>0&&(f.fisio.o2_base_consumption_l_per_h=h.o2_base_consumption_l_per_h),Array.isArray(h.slope_cost_factors)&&h.slope_cost_factors.length>0&&(f.fisio.slope_cost_factors=h.slope_cost_factors),f.hud.o2Remaining_l=f.fisio.o2_reserve_l,console.log(`[Marswalk] config_fisio.json cargado · O₂=${f.fisio.o2_reserve_l} L · base=${f.fisio.o2_base_consumption_l_per_h} L/h · maxSlope=${f.fisio.max_safe_slope_deg}°`)}}catch{}const r=`${e}/${o.heightmap.file}`;Ja(`Cargando ${o.label||t}…`,`Leyendo ${r}`);let a;try{const c=await fetch(r,{cache:"no-store"});if(!c.ok)throw new Error(`HTTP ${c.status} al solicitar ${r}`);const h=await c.arrayBuffer(),[u,d]=o.shape,p=u*d;if(h.byteLength!==p*4)throw new Error(`Tamaño de ${o.heightmap.file} (${h.byteLength} bytes) no coincide con shape ${u}×${d} (${p*4} bytes).`);a=new Float32Array(h)}catch(c){console.error("[Marswalk] Error cargando heightmap.f32:",c),To(`Error cargando heightmap de "${t}"`,c.message);return}f.dem=a,await Nu(o,e,s),Fu(o,a,gn),Vv(),Lv(),await $v(e),await Yv(e)}async function Nu(i,t,e){const[n,s]=i.shape,r=Math.min(1,1024/Math.max(s,n)),a=Math.max(64,Math.round(s*r)),l=Math.max(64,Math.round(n*r));Kn=document.createElement("canvas"),Kn.width=a,Kn.height=l,qn=Kn.getContext("2d"),gn=new Ti(Kn),gn.colorSpace=je,gn.wrapS=gn.wrapT=bn,gn.minFilter=Jn,gn.magFilter=cn,gn.anisotropy=pe.capabilities.getMaxAnisotropy();const c=Array.isArray(i.layers)&&i.layers.length>0?i.layers.slice():[{id:"base",file:"texture.png",type:"base"}];c.some(h=>h.id==="slope")||c.push({id:"slope",file:"slope.png",type:"overlay",unit:"deg",range:[0,45]}),c.some(h=>h.id==="risk")||c.push({id:"risk",file:"risk.png",type:"overlay",unit:"0-1"}),c.some(h=>h.id==="crism")||c.push({id:"crism",file:"",type:"overlay",unit:"index"}),c.some(h=>h.id==="themis")||c.push({id:"themis",file:"",type:"overlay",unit:"ti"}),f.layers=[];for(const h of c){let u=null;h.file&&(u=await e(`${t}/${h.file}`)),u?(h.type==="base"||h.id==="base")&&(u=Sv(u,a,l)):h.id==="slope"?u=bv(a,l,h.range||[0,45]):h.id==="risk"?u=wv(a,l):h.id==="crism"?u=Tv(a,l):h.id==="themis"?u=Cv(a,l):h.type==="base"||h.id==="base"?u=Ev(a,l):u=Av(a,l);const d=h.type==="base"||h.id==="base",p=h.label||yv[h.id]||h.id,g={id:h.id,label:p,type:h.type||(d?"base":"overlay"),unit:h.unit||"",range:h.range||null,enabled:d,opacity:d?1:.65,source:u,enable(){this.enabled=!0,Eo(),On()},disable(){this.enabled=!1,Eo(),On()},setOpacity(v){this.opacity=Gt.clamp(Number(v),0,1),Eo(),On()}};f.layers.push(g)}Eo(),Al()}function Sv(i,t,e){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d");s.drawImage(i,0,0,t,e);const o=s.getImageData(0,0,t,e),r=o.data;for(let a=0;a<r.length;a+=4){const c=.28+(r[a]*.299+r[a+1]*.587+r[a+2]*.114)/255*.85;r[a]=Math.min(255,Math.round(196*c)),r[a+1]=Math.min(255,Math.round(113*c)),r[a+2]=Math.min(255,Math.round(74*c)),r[a+3]=255}return s.putImageData(o,0,0),n}function Ev(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createImageData(i,t),o=s.data,[r,a]=f.metadata.elevation_range_m,l=Math.max(a-r,1e-6),[c,h]=f.metadata.size_m,u=c/Math.max(i-1,1),d=h/Math.max(t-1,1);for(let p=0;p<t;p++){const g=(p/(t-1)-.5)*h;for(let v=0;v<i;v++){const m=(v/(i-1)-.5)*c,_=be(m,g)??0,S=be(Math.min(c*.5,m+u),g)??_,y=be(m,Math.min(h*.5,g+d))??_,M=(S-_)/Math.max(u,1),T=(y-_)/Math.max(d,1),w=Gt.clamp(.68-M*1.4-T*1.1,.25,1.22),P=(.36+Gt.clamp(_/l,0,1)*.72)*w,D=(p*i+v)*4;o[D]=Math.min(255,Math.round(202*P)),o[D+1]=Math.min(255,Math.round(116*P)),o[D+2]=Math.min(255,Math.round(76*P)),o[D+3]=255}}return n.putImageData(s,0,0),e}function bv(i,t,e=[0,45]){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d"),o=s.createImageData(i,t),r=o.data,[a,l]=f.metadata.size_m,c=e[0]??0,h=Math.max((e[1]??45)-c,1);for(let u=0;u<t;u++){const d=(u/(t-1)-.5)*l;for(let p=0;p<i;p++){const g=(p/(i-1)-.5)*a,v=Se(g,d),m=Gt.clamp((v-c)/h,0,1);let _,S,y;if(m<.33){const T=m/.33;_=Math.round(30*(1-T)+46*T),S=Math.round(136*(1-T)+204*T),y=Math.round(229*(1-T)+113*T)}else if(m<.66){const T=(m-.33)/.33;_=Math.round(46*(1-T)+241*T),S=Math.round(204*(1-T)+196*T),y=Math.round(113*(1-T)+15*T)}else{const T=(m-.66)/.34;_=Math.round(241*(1-T)+231*T),S=Math.round(196*(1-T)+35*T),y=Math.round(15*(1-T)+35*T)}const M=(u*i+p)*4;r[M]=_,r[M+1]=S,r[M+2]=y,r[M+3]=255}}return s.putImageData(o,0,0),n}function wv(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createImageData(i,t),o=s.data,[r,a]=f.metadata.size_m,l=f.fisio.max_safe_slope_deg||25;for(let c=0;c<t;c++){const h=(c/(t-1)-.5)*a;for(let u=0;u<i;u++){const d=(u/(i-1)-.5)*r,p=Se(d,h),g=Gt.clamp(p/l,0,1),v=(c*i+u)*4;if(g<.45){const m=g/.45;o[v]=Math.round(40+140*m),o[v+1]=Math.round(200-20*m),o[v+2]=70,o[v+3]=Math.round(70+110*m)}else if(g<.85){const m=(g-.45)/.4;o[v]=Math.round(230+25*m),o[v+1]=Math.round(180-110*m),o[v+2]=25,o[v+3]=Math.round(180+55*m)}else o[v]=255,o[v+1]=32,o[v+2]=68,o[v+3]=250}}return n.putImageData(s,0,0),e}function Av(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");return n.fillStyle="rgba(120, 190, 255, 0.5)",n.fillRect(0,0,i,t),e}function Tv(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createImageData(i,t),o=s.data,[r,a]=f.metadata.size_m,[l,c]=f.metadata.elevation_range_m,h=Math.max(c-l,1);for(let u=0;u<t;u++){const d=(u/(t-1)-.5)*a;for(let p=0;p<i;p++){const g=(p/(i-1)-.5)*r,v=be(g,d)??0,m=Gt.clamp(v/h,0,1),_=Se(g,d),S=Math.exp(-Math.pow((m-.36)/.14,2))*Math.exp(-Math.pow((_-8.5)/7.5,2)),y=Math.exp(-Math.pow((m-.18)/.14,2))*Math.exp(-Math.pow(_/9,2)),M=(u*i+p)*4;if(S>.28&&S>=y){const T=Gt.clamp((S-.22)/.65,0,1);o[M]=Math.round(145+75*T),o[M+1]=Math.round(70+60*T),o[M+2]=255,o[M+3]=Math.round(95+145*T)}else if(y>.22){const T=Gt.clamp((y-.18)/.68,0,1);o[M]=Math.round(20+60*T),o[M+1]=Math.round(190+62*T),o[M+2]=Math.round(195+55*T),o[M+3]=Math.round(85+150*T)}else o[M]=o[M+1]=o[M+2]=o[M+3]=0}}return n.putImageData(s,0,0),e}function Cv(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createImageData(i,t),o=s.data,[r,a]=f.metadata.size_m,[l,c]=f.metadata.elevation_range_m,h=Math.max(c-l,1);for(let u=0;u<t;u++){const d=(u/(t-1)-.5)*a;for(let p=0;p<i;p++){const g=(p/(i-1)-.5)*r,v=be(g,d)??0,m=Gt.clamp(v/h,0,1),_=Se(g,d),S=Gt.clamp(_/24*.65+m*.42,0,1),y=(u*i+p)*4;if(S<.35){const M=1-S/.35;o[y]=Math.round(35-15*M),o[y+1]=Math.round(115-35*M),o[y+2]=Math.round(235+20*M),o[y+3]=Math.round(90+135*M)}else if(S>.58){const M=(S-.58)/.42;o[y]=250,o[y+1]=Math.round(165-55*M),o[y+2]=Math.round(35-15*M),o[y+3]=Math.round(85+145*M)}else o[y]=120,o[y+1]=175,o[y+2]=140,o[y+3]=55}}return n.putImageData(s,0,0),e}function Eo(){if(!qn||!Kn)return;const i=Kn.width,t=Kn.height;qn.globalAlpha=1,qn.fillStyle="#8d5b44",qn.fillRect(0,0,i,t);for(const e of f.layers)!e.enabled||e.opacity<=0||!e.source||(qn.globalAlpha=e.opacity,qn.drawImage(e.source,0,0,i,t));qn.globalAlpha=1,gn&&(gn.needsUpdate=!0)}function Al(){const i=document.getElementById("layers-list");if(i){i.innerHTML="";for(const t of f.layers){const e=document.createElement("div");e.className="layer-item",e.dataset.layerId=t.id;const n=document.createElement("div");n.className="layer-top";const s=document.createElement("label");s.className="layer-toggle";const o=document.createElement("input");o.type="checkbox",o.checked=t.enabled,o.addEventListener("change",()=>{o.checked?t.enable():t.disable()});const r=document.createElement("span");r.textContent=t.label,s.appendChild(o),s.appendChild(r);const a=document.createElement("span");a.className="layer-opacity-val",a.textContent=`${Math.round(t.opacity*100)}%`,n.appendChild(s),n.appendChild(a);const l=document.createElement("div");l.className="layer-slider-row";const c=document.createElement("input");c.type="range",c.min="0",c.max="1",c.step="0.05",c.value=String(t.opacity),c.setAttribute("aria-label",`Opacidad de ${t.label}`),c.addEventListener("input",()=>{t.setOpacity(parseFloat(c.value))}),l.appendChild(c),e.appendChild(n),e.appendChild(l),i.appendChild(e)}}}function On(){const i=document.getElementById("layers-list");if(i)for(const t of f.layers){const e=i.querySelector(`[data-layer-id="${t.id}"]`);if(!e)continue;const n=e.querySelector('input[type="checkbox"]'),s=e.querySelector('input[type="range"]'),o=e.querySelector(".layer-opacity-val");n&&n.checked!==t.enabled&&(n.checked=t.enabled),s&&parseFloat(s.value)!==t.opacity&&(s.value=String(t.opacity)),o&&(o.textContent=`${Math.round(t.opacity*100)}%`)}}function Fu(i,t,e){var g;const n=Yt.SEGMENTS+1,[s,o]=i.shape,[r,a]=i.size_m,[l,c]=i.elevation_range_m,h=new Float32Array(n*n);for(let v=0;v<n;v++){const _=Math.min(s-1,Math.round(v/Yt.SEGMENTS*(s-1)))*o;for(let S=0;S<n;S++){const y=Math.min(o-1,Math.round(S/Yt.SEGMENTS*(o-1))),M=t[_+y];h[v*n+S]=M-l}}f.terrainWidth=r,f.terrainDepth=a;const u=Math.min(Yt.BOUNDS_MARGIN_M,Math.min(r,a)*.02);f.boundsX=f.terrainWidth/2-u,f.boundsZ=f.terrainDepth/2-u,console.log(`[Marswalk] Dataset "${i.dataset_id}" · DEM ${o}×${s} · tamaño ${f.terrainWidth.toFixed(0)}×${f.terrainDepth.toFixed(0)} m · elev [${l}, ${c}] m · ${f.layers.length} capas registradas`),f.dem=t,f.heights=h,f.baseTexture=e||null,f.terrainMesh&&(ae.remove(f.terrainMesh),f.terrainMesh.geometry&&f.terrainMesh.geometry.dispose(),f.terrainMesh.material&&f.terrainMesh.material.dispose(),f.terrainMesh=null),f.terrainGeo=new Ai(f.terrainWidth,f.terrainDepth,Yt.SEGMENTS,Yt.SEGMENTS),f.terrainGeo.rotateX(-Math.PI/2);const d=new Ee({map:e||null,color:16777215,roughness:.96,metalness:.02,side:Pe});f.terrainMesh=new dt(f.terrainGeo,d),f.terrainMesh.name="terrain",ae.add(f.terrainMesh),f.localPatchMesh&&f.localPatchMesh.material&&(f.localPatchMesh.material.map=e||null,f.localPatchMesh.material.needsUpdate=!0),zu(f.exaggeration),f.terrainMesh.updateMatrixWorld(!0);const p=Math.max(f.terrainWidth,f.terrainDepth);Et.near=.2,Et.far=p*12,Et.updateProjectionMatrix(),f.orbitControls&&(f.orbitControls.minDistance=Math.max(50,p*.05),f.orbitControls.maxDistance=p*3,f.orbitControls.target.set(0,0,0)),Et.position.set(0,p*1.4,0),(g=f.orbitControls)==null||g.update(),nn&&nn.scale.setScalar(p*4.5),oi()}function Rv(){const i=f.solar,t=f.weather;if(!i||!t)return;const e=Math.PI/180,n=180/Math.PI,s=1.52368,o=.0934,r=i.ls_deg*e,a=(i.ls_deg-251)*e,l=s*(1-o*o)/(1+o*Math.cos(a));i.distance_au=l;const c=1361;i.toa_irradiance_wm2=c/(l*l);const h=25.19*e,u=Math.sin(h)*Math.sin(r),d=Math.asin(Gt.clamp(u,-1,1)),p=Math.cos(d);i.declination_deg=d*n;const g=i.lat_deg*e,v=Math.sin(g),m=Math.cos(g),_=(i.ltst_h-12)*15*e,S=Gt.clamp(v*u+m*p*Math.cos(_),-1,1),y=Math.asin(S),M=y*n;i.elevation_deg=M;const T=-p*Math.sin(_),w=u*m-p*v*Math.cos(_);let C=Math.atan2(T,w)*n;C<0&&(C+=360),i.azimuth_deg=C;const P=t.dust_tau;if(M>.2){const H=1/(Math.sin(y)+.095*Math.pow(M+3.2,-1.22));i.airmass=Gt.clamp(H,1,14);const Y=i.toa_irradiance_wm2*Math.sin(y)*Math.exp(-P*i.airmass*.68),et=i.toa_irradiance_wm2*Math.sin(y)*.34*(1-Math.exp(-P*i.airmass*.68))*Math.exp(-.18*P);i.surface_irradiance_wm2=Math.max(0,Y+et)}else if(M>-6.5){i.airmass=14;const H=(M+6.5)/6.7;i.surface_irradiance_wm2=12*H*H}else i.airmass=20,i.surface_irradiance_wm2=0;M>7.5?i.phase="DIA":M>-6.5?i.phase="CREPUSCULO_AZUL":i.phase="NOCHE";const D=t.mode==="dust_storm",E=(1.52368/l-1)*95,N=Math.cos((i.ltst_h-14.2)/24*Math.PI*2),U=(D?-68:-56)+E,F=D?14:31;t.temp_c=Math.round(U+F*N);const $=M<0?.14:0;t.thermalPenalty=(D?1.35:1)+$;const V=Math.max(f.terrainWidth||3e4,f.terrainDepth||3e4),z=C*e,O=Math.cos(y),tt=O*Math.sin(z),Q=Math.sin(y),it=-O*Math.cos(z),Rt=Math.max(Q,.05),nt=V*1.35;if(en.position.set(tt*nt,Rt*nt,it*nt),_n.position.set(-tt*nt*.7,Math.max(.25,Math.abs(Q))*nt*.5,-it*nt*.7),ln){const H=V*3.2;ln.position.set(tt*H,Q*H,it*H);const Y=1.524/l*V*.24;ln.scale.setScalar(Y),ln.visible=M>-4}if(rn){const H=(C+138)*e,Y=Math.max(.12,(26+Math.sin(i.ltst_h*.45)*18)*e),et=V*2.85;rn.position.set(Math.cos(Y)*Math.sin(H)*et,Math.sin(Y)*et,-Math.cos(Y)*Math.cos(H)*et),rn.scale.setScalar(V*.045)}}function oi(){var l;Rv();const i=Math.max(f.terrainWidth||3e4,f.terrainDepth||3e4),t=Yt.PATCH_SIZE_M*.5,e=((l=f.weather)==null?void 0:l.mode)==="dust_storm",n=f.mode==="fp",s=f.solar,o=s.elevation_deg,r=s.toa_irradiance_wm2/586,a=o>0?Math.exp(-f.weather.dust_tau*Math.min(s.airmass,8)*.22):0;if(Zt&&(Zt.position.copy(Et.position),Zt.scale.setScalar(i*5),Zt.visible=!0,en)){const c=en.position.clone().normalize();Zt.material.uniforms.sunDirection.value.copy(c)}if(s.phase==="DIA"){const c=Gt.clamp((o-7.5)/55,0,1);if(e)en.color.setHex(16745031),en.intensity=(1.05+.45*c)*r,_n.color.setHex(13198651),_n.intensity=.88*r,De&&(De.color.setHex(14251336),De.groundColor.setHex(3347980),De.intensity=.95),Zt&&(Zt.material.uniforms.bottomColor.value.setHex(7220760),Zt.material.uniforms.topColor.value.setHex(3872267),Zt.material.uniforms.mieColor.value.setHex(16745031),Zt.material.uniforms.mieIntensity.value=.35,Zt.material.uniforms.opacity.value=1),n?(ae.fog=new Mn(7220760,30,320),pe.setClearColor(7220760,1)):(ae.fog=new Mn(6039060,i*.45,i*1.95),pe.setClearColor(3807245,1));else{const h=new Ft(16758144).lerp(new Ft(16771542),c);en.color.copy(h),en.intensity=(1.65+1.25*a)*r,_n.color.setHex(9745663),_n.intensity=(.35+.18*c)*r,De&&(De.color.setHex(14460536),De.groundColor.setHex(4332560),De.intensity=(.95+.45*c)*r),ln&&ln.material&&(ln.material.color.copy(h),ln.material.opacity=.95),Zt&&(Zt.material.uniforms.bottomColor.value.setHex(14460536),Zt.material.uniforms.topColor.value.setHex(6700069),Zt.material.uniforms.mieColor.value.setHex(16772308),Zt.material.uniforms.mieIntensity.value=.85,Zt.material.uniforms.opacity.value=n?1:.65),n?(ae.fog=new Mn(14460536,t*.55,t*1.45),pe.setClearColor(14460536,1)):(ae.fog=new Mn(724240,i*1.1,i*2.8),pe.setClearColor(724240,1))}nn&&nn.material&&(nn.material.opacity=n?.05:.85),rn&&rn.material&&(rn.material.opacity=0),qi&&(qi.intensity=0)}else if(s.phase==="CREPUSCULO_AZUL"){const c=Gt.clamp((o+6.5)/14,0,1),h=new Ft(5938943).lerp(new Ft(16750698),c*.5);en.color.copy(h),en.intensity=(.35+1.15*c)*r,_n.color.setHex(5471172),_n.intensity=(.28+.22*c)*r,De&&(De.color.setHex(5932756),De.groundColor.setHex(1708565),De.intensity=.48+.35*c),ln&&ln.material&&(ln.material.color.setHex(8369919),ln.material.opacity=.92),Zt&&(Zt.material.uniforms.bottomColor.value.setHex(e?5054997:11164492),Zt.material.uniforms.topColor.value.setHex(1710124),Zt.material.uniforms.mieColor.value.setHex(6990079),Zt.material.uniforms.mieIntensity.value=1.35,Zt.material.uniforms.opacity.value=n?.92:.5);const u=e?3873040:2366765;n?(ae.fog=new Mn(u,t*.45,t*1.35),pe.setClearColor(u,1)):(ae.fog=new Mn(856088,i*1,i*2.7),pe.setClearColor(724240,1)),nn&&nn.material&&(nn.material.opacity=.65),rn&&rn.material&&(rn.material.opacity=(1-c)*.65),qi&&(qi.intensity=n?(1-c)*1.8:0)}else en.color.setHex(4479100),en.intensity=n?.08:.32,_n.color.setHex(1910589),_n.intensity=.14,De&&(De.color.setHex(2635343),De.groundColor.setHex(526605),De.intensity=n?.16:.36),Zt&&(e?(Zt.material.uniforms.bottomColor.value.setHex(1379079),Zt.material.uniforms.topColor.value.setHex(525315),Zt.material.uniforms.mieIntensity.value=0,Zt.material.uniforms.opacity.value=.95):(Zt.material.uniforms.bottomColor.value.setHex(395278),Zt.material.uniforms.topColor.value.setHex(131846),Zt.material.uniforms.mieIntensity.value=0,Zt.material.uniforms.opacity.value=n?.22:.1)),ae.fog=n?new Mn(329483,t*.48,t*1.35):new Mn(329483,i*1.1,i*2.8),pe.setClearColor(329483,1),nn&&nn.material&&(nn.material.opacity=e?.05:1),rn&&rn.material&&(rn.material.opacity=e?0:.95),qi&&(qi.intensity=n?3.5:0);Dv()}function Ou(i=null){(i!==null?i:f.weather.mode!=="dust_storm")?(f.weather.mode="dust_storm",f.weather.pressure_hpa=7.1,f.weather.wind_ms=28.5,f.weather.dust_tau=3.85,f.weather.uv_level="ATENUADO (TORMENTA)"):(f.weather.mode="nominal",f.weather.pressure_hpa=7.4,f.weather.wind_ms=5.2,f.weather.dust_tau=.45,f.weather.uv_level="MODERADO"),oi()}function Pv(i){!f.solar||!f.solar.autoCycle||(f.solar.ltst_h=(f.solar.ltst_h+i*1.2)%24,oi())}function Za(){if(!f.pois||f.pois.length===0)return;const i=f.astronautGroup?f.astronautPosition.x:Et.position.x,t=f.astronautGroup?f.astronautPosition.z:Et.position.z;let e=null,n=1/0;for(const s of f.pois){if(s.type!=="shelter"||!Array.isArray(s.position_m))continue;const o=Math.hypot(s.position_m[0]-i,s.position_m[1]-t);o<n&&(n=o,e=s)}e||(e=f.pois[0]),e&&(f.routeStart_m=[Number(i.toFixed(1)),Number(t.toFixed(1))],f.routeGoal_m=e.position_m.slice(),cr())}function Lv(){const i=document.getElementById("weather-storm-btn"),t=document.getElementById("weather-evac-btn"),e=document.getElementById("solar-ltst-slider"),n=document.getElementById("solar-ls-select"),s=document.getElementById("solar-cycle-btn");i&&!i.dataset.bound&&(i.dataset.bound="1",i.addEventListener("click",()=>{Ou(),f.weather.mode==="dust_storm"&&Za()})),t&&!t.dataset.bound&&(t.dataset.bound="1",t.addEventListener("click",()=>{Za()})),e&&!e.dataset.bound&&(e.dataset.bound="1",e.addEventListener("input",()=>{f.solar.ltst_h=parseFloat(e.value),oi()})),n&&!n.dataset.bound&&(n.dataset.bound="1",n.addEventListener("change",()=>{f.solar.ls_deg=parseFloat(n.value),oi()})),s&&!s.dataset.bound&&(s.dataset.bound="1",s.addEventListener("click",()=>{f.solar.autoCycle=!f.solar.autoCycle,s.classList.toggle("active",f.solar.autoCycle),s.textContent=f.solar.autoCycle?"⏸":"▶"})),oi()}function Iv(i){const t=(i%24+24)%24,e=Math.floor(t),n=Math.floor((t-e)*60);return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Dv(){const i=f.weather,t=f.solar;if(!i||!t)return;const e=i.mode==="dust_storm",n=document.getElementById("solar-coords-label"),s=document.getElementById("solar-phase-badge"),o=document.getElementById("solar-ltst-val"),r=document.getElementById("solar-ltst-slider"),a=document.getElementById("wm-dist-au"),l=document.getElementById("wm-irrad"),c=document.getElementById("wm-sun-ang"),h=document.getElementById("wm-temp"),u=document.getElementById("wm-wind"),d=document.getElementById("wm-tau"),p=document.getElementById("weather-storm-btn"),g=document.getElementById("hud-env-line"),v=`${Math.abs(t.lat_deg).toFixed(2)}°${t.lat_deg>=0?"N":"S"}`,m=`${Math.abs(t.lon_deg).toFixed(2)}°${t.lon_deg>=0?"E":"W"}`;n&&(n.textContent=`📍 ${v}, ${m}`),s&&(s.classList.remove("twilight","night"),t.phase==="DIA"?s.textContent="☀ DÍA":t.phase==="CREPUSCULO_AZUL"?(s.textContent="🌅 CREPÚSCULO AZUL",s.classList.add("twilight")):(s.textContent="🌙 NOCHE (LINTERNA)",s.classList.add("night")));const _=Iv(t.ltst_h);o&&(o.textContent=_),r&&document.activeElement!==r&&(r.value=String(Number(t.ltst_h.toFixed(2)))),a&&(a.textContent=`${t.distance_au.toFixed(3)} AU (TOA ${t.toa_irradiance_wm2.toFixed(0)} W/m²)`),l&&(l.textContent=`${t.surface_irradiance_wm2.toFixed(0)} W/m²`,l.style.color=t.surface_irradiance_wm2>300?"#f6c945":t.surface_irradiance_wm2>20?"#8cc2ff":"#9aa6b5"),c&&(c.textContent=`El ${t.elevation_deg.toFixed(1)}° · Az ${t.azimuth_deg.toFixed(0)}°`),h&&(h.textContent=`${i.temp_c} °C`),u&&(u.textContent=`${i.wind_ms.toFixed(1)} m/s`,u.style.color=e?"#ff3855":""),d&&(d.textContent=`τ = ${i.dust_tau.toFixed(2)}`,d.style.color=e?"#f6c945":""),p&&(p.classList.toggle("storm-active",e),p.textContent=e?"☀ Desactivar Tormenta (Volver a Nominal)":"🌪️ Simular Tormenta de Polvo (MEDA)"),g&&(g.textContent=e?`MEDA // TORMENTA · LTST ${_} · ${t.surface_irradiance_wm2.toFixed(0)} W/m² · ${i.temp_c}°C · τ=${i.dust_tau}`:`SOL // LTST ${_} · r=${t.distance_au.toFixed(2)} AU · ${t.surface_irradiance_wm2.toFixed(0)} W/m² (El ${t.elevation_deg.toFixed(0)}°) · ${i.temp_c}°C`,g.style.color=e?"#f6c945":t.phase==="CREPUSCULO_AZUL"?"#8cc2ff":"#66fcf1")}function Uv(){if(es)return es;const i=256,t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=n.data;let o=421337;const r=()=>{o|=0,o=o+1831565813|0;let c=Math.imul(o^o>>>15,1|o);return c=c+Math.imul(c^c>>>7,61|c)^c,((c^c>>>14)>>>0)/4294967296};for(let c=0;c<i;c++)for(let h=0;h<i;h++){const u=Math.sin(h/i*Math.PI*8)*Math.cos(c/i*Math.PI*8)*28+Math.sin((h+c)/i*Math.PI*16)*16,d=(r()-.5)*90,p=Math.max(0,Math.min(255,Math.round(128+u+d))),g=(c*i+h)*4;s[g]=s[g+1]=s[g+2]=p,s[g+3]=255}e.putImageData(n,0,0);const a=new Ti(t);a.wrapS=a.wrapT=us;const l=Yt.PATCH_SIZE_M/4;return a.repeat.set(l,l),a.anisotropy=pe.capabilities.getMaxAnisotropy(),es=a,es}function Nv(){if(f.localPatchMesh)return;const i=Yt.PATCH_SEGMENTS,t=i+1,e=Yt.PATCH_SIZE_M,n=new Ai(e,e,i,i);n.rotateX(-Math.PI/2);const s=new Float32Array(n.attributes.uv.array);n.setAttribute("uv1",new Ue(s,2));const o=Uv();o.channel=1;const r=new Ee({map:f.baseTexture||null,color:16777215,bumpMap:o,bumpScale:.45,roughness:.94,metalness:.02,side:Pe}),a=new dt(n,r);a.name="localTerrainPatch",a.visible=!1,ae.add(a),f.localPatchGeo=n,f.localPatchMesh=a,f.localPatchHeights=new Float32Array(t*t)}function Bu(i,t){if(!f.dem||!f.metadata)return;Nv();const e=Yt.PATCH_SEGMENTS,n=e+1,s=Yt.PATCH_SIZE_M,o=f.terrainWidth,r=f.terrainDepth,a=f.exaggeration;f.localPatchCenter.set(i,t);const l=f.localPatchGeo.attributes.position,c=f.localPatchGeo.attributes.uv,h=f.localPatchHeights,u=s/4;es&&es.offset.set(i/s*u%1,-t/s*u%1);for(let d=0;d<n;d++){const p=(d/e-.5)*s,g=t+p,v=1-Gt.clamp((g+r*.5)/r,0,1);for(let m=0;m<n;m++){const _=d*n+m,S=(m/e-.5)*s,y=i+S,M=Gt.clamp((y+o*.5)/o,0,1),T=be(Gt.clamp(y,-o*.5,o*.5),Gt.clamp(g,-r*.5,r*.5))??0;h[_]=T,l.setXYZ(_,S,T*a,p),c.setXY(_,M,v)}}f.localPatchMesh.position.set(i,0,t),l.needsUpdate=!0,c.needsUpdate=!0,f.localPatchGeo.computeVertexNormals(),f.localPatchGeo.computeBoundingBox(),f.localPatchGeo.computeBoundingSphere(),f.localPatchMesh.updateMatrixWorld(!0)}function Fv(i,t){Bu(i,t),f.localPatchMesh&&(f.localPatchMesh.visible=!0),f.terrainMesh&&(f.terrainMesh.visible=!1),oi(),Cl(),Pl()}function Ov(i,t){if(!f.localPatchMesh||!f.localPatchMesh.visible)return;const e=i-f.localPatchCenter.x,n=t-f.localPatchCenter.y;e*e+n*n>Yt.PATCH_RECENTER_DIST_M*Yt.PATCH_RECENTER_DIST_M&&Bu(i,t)}function Bv(){f.localPatchMesh&&(f.localPatchMesh.visible=!1),f.terrainMesh&&(f.terrainMesh.visible=!0),oi(),Cl(),Pl()}function zu(i){if(f.exaggeration=i,f.terrainGeo&&f.heights){const t=f.terrainGeo.attributes.position,e=t.count;for(let n=0;n<e;n++)t.setY(n,f.heights[n]*i);t.needsUpdate=!0,f.terrainGeo.computeVertexNormals(),f.terrainGeo.computeBoundingBox(),f.terrainGeo.computeBoundingSphere(),f.terrainMesh&&f.terrainMesh.updateMatrixWorld(!0)}if(f.localPatchGeo&&f.localPatchHeights){const t=f.localPatchGeo.attributes.position,e=t.count;for(let n=0;n<e;n++)t.setY(n,f.localPatchHeights[n]*i);t.needsUpdate=!0,f.localPatchGeo.computeVertexNormals(),f.localPatchGeo.computeBoundingBox(),f.localPatchGeo.computeBoundingSphere(),f.localPatchMesh&&f.localPatchMesh.updateMatrixWorld(!0)}Hv(),Kv()}const zv=160;function gs(i,t,e,n){if(!f.dem||!f.metadata)return null;const s=f.terrainWidth,o=f.terrainDepth,r=zv,a=r*r,l=s/(r-1),c=o/(r-1),h=nt=>Gt.clamp(Math.round((nt+s*.5)/s*(r-1)),0,r-1),u=nt=>Gt.clamp(Math.round((nt+o*.5)/o*(r-1)),0,r-1),d=nt=>(nt/(r-1)-.5)*s,p=nt=>(nt/(r-1)-.5)*o,g=h(i),v=u(t),m=h(e),_=u(n),S=v*r+g,y=_*r+m,M=new Float32Array(a),T=new Float32Array(a);for(let nt=0;nt<r;nt++){const H=p(nt),Y=nt*r;for(let et=0;et<r;et++){const ot=d(et);M[Y+et]=be(ot,H)??0,T[Y+et]=Se(ot,H)}}const w=Math.max(f.fisio.walk_speed_ms||1.2,.2),C=(f.fisio.o2_base_consumption_l_per_h||50)/3600,P=f.fisio.max_safe_slope_deg||25,D=new Float64Array(a),x=new Float64Array(a),E=new Int32Array(a),N=new Uint8Array(a);D.fill(1/0),x.fill(1/0),E.fill(-1);const U=(nt,H)=>Math.hypot((m-nt)*l,(_-H)*c)/w*C*.85,F=[],$=(nt,H)=>{F.push({idx:nt,f:H});let Y=F.length-1;for(;Y>0;){const et=Y-1>>1;if(F[et].f<=F[Y].f)break;const ot=F[et];F[et]=F[Y],F[Y]=ot,Y=et}},V=()=>{const nt=F[0],H=F.pop();if(F.length>0){F[0]=H;let Y=0;const et=F.length;for(;;){let ot=2*Y+1,xt=ot+1,ct=Y;if(ot<et&&F[ot].f<F[ct].f&&(ct=ot),xt<et&&F[xt].f<F[ct].f&&(ct=xt),ct===Y)break;const pt=F[Y];F[Y]=F[ct],F[ct]=pt,Y=ct}}return nt};D[S]=0,x[S]=U(g,v),$(S,x[S]);const z=[[-1,0,l],[1,0,l],[0,-1,c],[0,1,c],[-1,-1,Math.hypot(l,c)],[1,-1,Math.hypot(l,c)],[-1,1,Math.hypot(l,c)],[1,1,Math.hypot(l,c)]];for(;F.length>0;){const nt=V().idx;if(nt===y)break;if(N[nt])continue;N[nt]=1;const H=nt%r,Y=nt/r|0,et=M[nt];for(let ot=0;ot<8;ot++){const xt=H+z[ot][0],ct=Y+z[ot][1];if(xt<0||xt>=r||ct<0||ct>=r)continue;const pt=ct*r+xt;if(N[pt])continue;const ht=z[ot][2],I=M[pt]-et,Xt=Math.atan(Math.abs(I)/ht)*(180/Math.PI),It=Math.max(T[pt],Xt),Ht=lr(It,I),At=I/ht,jt=At>0?1+At*4.5:Math.max(.8,1+At*.8),Dt=ht/w,R=C*Ht*jt*Dt;let b=1;if(It>P){const K=It-P;b=45+K*K*8}else if(It>P*.75){const K=(It-P*.75)/(P*.25);b=1+K*K*2.5}const W=D[nt]+R*b;W<D[pt]&&(E[pt]=nt,D[pt]=W,x[pt]=W+U(xt,ct),$(pt,x[pt]))}}const O=[];let tt=y;if(E[tt]!==-1||tt===S){for(;tt!==-1;)O.push(tt),tt=E[tt];O.reverse()}else O.push(S,y);const Q=[];for(let nt=0;nt<O.length;nt++)if(nt===0)Q.push([Number(i.toFixed(1)),Number(t.toFixed(1))]);else if(nt===O.length-1)Q.push([Number(e.toFixed(1)),Number(n.toFixed(1))]);else{const H=O[nt],Y=H%r,et=H/r|0;Q.push([Number(d(Y).toFixed(1)),Number(p(et).toFixed(1))])}const it=Tl(Q),Rt={dataset_id:f.datasetId||Yt.DEFAULT_DATASET,algorithm:"astar",path_m:Q,metrics:it};return f.routeAlgorithm!=="qaoa"&&Hs(Rt),Rt}function Tl(i){const t=Math.max(f.fisio.walk_speed_ms||1.2,.2),e=(f.fisio.o2_base_consumption_l_per_h||50)/3600,n=f.fisio.max_safe_slope_deg||25;let s=0,o=0,r=0,a=0;for(let c=1;c<i.length;c++){const[h,u]=i[c-1],[d,p]=i[c],g=Math.hypot(d-h,p-u);if(g<.001)continue;const v=be(h,u)??0,_=(be(d,p)??0)-v,S=(h+d)*.5,y=(u+p)*.5,M=Math.max(Se(d,p),Se(S,y),Math.atan(Math.abs(_)/g)*(180/Math.PI));M>r&&(r=M);const T=lr(M,_),w=_/g,C=w>0?1+w*4.5:Math.max(.8,1+w*.8),P=g/t,D=e*T*C*P;s+=g,o+=D,a+=Gt.clamp(M/n,0,1)*g}const l=s>0?a/s:0;return{distance_m:Number(s.toFixed(1)),oxygen_l:Number(o.toFixed(2)),max_slope_deg:Number(r.toFixed(1)),risk_score:Number(l.toFixed(2))}}function Jo(i,t,e,n){if(!f.dem||!f.metadata)return null;const s=f.terrainWidth,o=f.terrainDepth,r=Math.max(f.fisio.walk_speed_ms||1.2,.2),a=(f.fisio.o2_base_consumption_l_per_h||50)/3600,l=f.fisio.max_safe_slope_deg||25,c=e-i,h=n-t,u=Math.hypot(c,h);if(u<.01){const z={dataset_id:f.datasetId||Yt.DEFAULT_DATASET,algorithm:"qaoa",path_m:[[Number(i.toFixed(1)),Number(t.toFixed(1))],[Number(e.toFixed(1)),Number(n.toFixed(1))]],metrics:{distance_m:0,oxygen_l:0,max_slope_deg:0,risk_score:0}};return f.qaoaRoute=z,z}const d=c/u,g=-(h/u),v=d,m=Math.max(18,Math.min(48,Math.round(u/Math.max(80,Math.min(s,o)*.015)))),_=25,S=Math.min(Math.max(u*.42,400),Math.min(s,o)*.38),y=z=>Gt.clamp(z,-f.boundsX,f.boundsX),M=z=>Gt.clamp(z,-f.boundsZ,f.boundsZ),T=[];for(let z=0;z<=m;z++){const O=z/m,tt=i+c*O,Q=t+h*O,it=Math.sin(Math.PI*O),Rt=[];if(z===0){const nt=be(i,t)??0,H=Se(i,t);Rt.push({x:i,z:t,elev:nt,slope:H,offsetRatio:0})}else if(z===m){const nt=be(e,n)??0,H=Se(e,n);Rt.push({x:e,z:n,elev:nt,slope:H,offsetRatio:0})}else for(let nt=0;nt<_;nt++){const H=nt/(_-1)*2-1,Y=H*S*it,et=y(tt+g*Y),ot=M(Q+v*Y),xt=be(et,ot)??0,ct=Se(et,ot);Rt.push({x:et,z:ot,elev:xt,slope:ct,offsetRatio:H})}T.push(Rt)}const w=(z,O)=>{const tt=Math.hypot(O.x-z.x,O.z-z.z);if(tt<.001)return 0;const Q=O.elev-z.elev,it=(z.x+O.x)*.5,Rt=(z.z+O.z)*.5,nt=Se(it,Rt),H=Math.max(O.slope,nt,Math.atan(Math.abs(Q)/tt)*(180/Math.PI)),Y=lr(H,Q),et=Q/tt,ot=et>0?1+et*4.5:Math.max(.8,1+et*.8),xt=a*Y*ot*(tt/r);let ct=1+Math.pow(H/l,2)*1.35;if(H>l){const Lt=H-l;ct+=55+Lt*Lt*9.5}else if(H>l*.7){const Lt=(H-l*.7)/(l*.3);ct+=Lt*Lt*3.8}const pt=Math.abs((O.offsetRatio||0)-(z.offsetRatio||0)),ht=1+pt*pt*.45;return xt*ct*ht},C=[{gamma:.45,beta:.65},{gamma:.85,beta:.45},{gamma:1.35,beta:.28},{gamma:2.1,beta:.12}],P=T.map(z=>new Float64Array(z.length).fill(1/z.length));for(let z=0;z<C.length;z++){const{gamma:O,beta:tt}=C[z];for(let Q=1;Q<m;Q++){const it=T[Q],Rt=T[Q-1],nt=T[Q+1],H=P[Q],Y=P[Q-1],et=P[Q+1],ot=new Float64Array(it.length);let xt=1/0;for(let ht=0;ht<it.length;ht++){let Lt=0;for(let Xt=0;Xt<Rt.length;Xt++)Lt+=Y[Xt]*w(Rt[Xt],it[ht]);let I=0;for(let Xt=0;Xt<nt.length;Xt++)I+=et[Xt]*w(it[ht],nt[Xt]);ot[ht]=Lt+I,ot[ht]<xt&&(xt=ot[ht])}const ct=new Float64Array(it.length);for(let ht=0;ht<it.length;ht++){const Lt=(ot[ht]-xt)/Math.max(xt,.5);ct[ht]=H[ht]*Math.exp(-O*Lt)}let pt=0;for(let ht=0;ht<it.length;ht++){const Lt=ht>0?ct[ht-1]:ct[ht],I=ht<it.length-1?ct[ht+1]:ct[ht],Xt=(1-tt)*ct[ht]+tt*.5*(Lt+I);H[ht]=Xt,pt+=Xt}if(pt>0)for(let ht=0;ht<it.length;ht++)H[ht]/=pt}}const D=T.map(z=>new Float64Array(z.length).fill(1/0)),x=T.map(z=>new Int32Array(z.length).fill(-1));D[0][0]=0;for(let z=1;z<=m;z++){const O=T[z],tt=T[z-1],Q=P[z];for(let it=0;it<O.length;it++){const Rt=1/Math.max(.15,Math.pow(Q[it]*O.length,.28));for(let nt=0;nt<tt.length;nt++){const H=D[z-1][nt]+w(tt[nt],O[it])*Rt;H<D[z][it]&&(D[z][it]=H,x[z][it]=nt)}}}const E=[];let N=0;for(let z=m;z>=0;z--){const O=T[z][N];E.push([O.x,O.z]),N=x[z][N],N<0&&(N=0)}E.reverse();const U=E.map(z=>z.slice());for(let z=0;z<2;z++)for(let O=1;O<U.length-1;O++){const tt=.25*U[O-1][0]+.5*U[O][0]+.25*U[O+1][0],Q=.25*U[O-1][1]+.5*U[O][1]+.25*U[O+1][1];Se(tt,Q)<=Se(U[O][0],U[O][1])+1.5&&(U[O][0]=tt,U[O][1]=Q)}const F=U.map(([z,O])=>[Number(z.toFixed(1)),Number(O.toFixed(1))]),$=Tl(F),V={dataset_id:f.datasetId||Yt.DEFAULT_DATASET,algorithm:"qaoa",path_m:F,metrics:$};return f.qaoaRoute=V,f.routeAlgorithm==="qaoa"?Hs(V):f.routeAlgorithm==="compare"&&(ys(),wn()),V}function cr(){var s,o;if(!f.routeStart_m||!f.routeGoal_m)return;const[i,t]=f.routeStart_m,[e,n]=f.routeGoal_m;if(f.routeAlgorithm==="astar"){const r=gs(i,t,e,n);f.route=r}else if(f.routeAlgorithm==="qaoa"){const r=Jo(i,t,e,n);f.route=r}else{const r=gs(i,t,e,n),a=Jo(i,t,e,n);f.route=r,f.qaoaRoute=a}ys(),wn(),(o=(s=f.hooks).onRouteUpdated)==null||o.call(s)}function Hs(i){var t,e;f.route=i,i&&Array.isArray(i.path_m)&&i.path_m.length>=2&&(f.routeStart_m=i.path_m[0].slice(),f.routeGoal_m=i.path_m[i.path_m.length-1].slice()),ys(),wn(),(i==null?void 0:i.algorithm)!=="health"&&((e=(t=f.hooks).onRouteUpdated)==null||e.call(t))}function kv(){f.route=null,f.qaoaRoute=null,f.routeStart_m=null,f.routeGoal_m=null,f.routeSelectMode=null,f.routeGroup&&(ae.remove(f.routeGroup),f.routeGroup.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()}),f.routeGroup=null),wn()}let Qn=null,ti=null;function th(){if(Qn)return Qn;const i=128,t=256,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");n.clearRect(0,0,i,t),n.fillStyle="rgba(102, 252, 241, 0.14)",n.fillRect(14,0,4,t),n.fillRect(i-18,0,4,t);const s=(r,a,l)=>{n.save(),n.globalAlpha=a,n.strokeStyle=l,n.lineWidth=14,n.lineCap="round",n.lineJoin="round",n.shadowColor="#66fcf1",n.shadowBlur=12,n.beginPath(),n.moveTo(26,r+34),n.lineTo(i*.5,r-22),n.lineTo(i-26,r+34),n.stroke(),n.restore()};s(82,.95,"#66fcf1"),s(196,.55,"#f6c945");const o=new Ti(e);return o.colorSpace=je,o.wrapS=bn,o.wrapT=us,o.anisotropy=pe.capabilities.getMaxAnisotropy(),Qn=o,Qn}function Kr(){if(ti)return ti;const i=128,t=256,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");n.clearRect(0,0,i,t),n.fillStyle="rgba(216, 117, 255, 0.18)",n.fillRect(14,0,4,t),n.fillRect(i-18,0,4,t);const s=(r,a,l)=>{n.save(),n.globalAlpha=a,n.strokeStyle=l,n.lineWidth=14,n.lineCap="round",n.lineJoin="round",n.shadowColor="#d875ff",n.shadowBlur=14,n.beginPath(),n.moveTo(26,r+34),n.lineTo(i*.5,r-22),n.lineTo(i-26,r+34),n.stroke(),n.restore()};s(82,.96,"#d875ff"),s(196,.62,"#66fcf1");const o=new Ti(e);return o.colorSpace=je,o.wrapS=bn,o.wrapT=us,o.anisotropy=pe.capabilities.getMaxAnisotropy(),ti=o,ti}function eh(i,t,e,n,s){const o=[];let r=0;for(let v=0;v<i.length-1;v++){const[m,_]=i[v],[S,y]=i[v+1],M=Math.hypot(S-m,y-_);if(M<.01)continue;const T=Math.max(1,Math.ceil(M/e));for(let w=0;w<T;w++){const C=w/T,P=m+(S-m)*C,D=_+(y-_)*C,x=(Le(P,D)??0)+n,E=r+M*C;o.push({x:P,y:x,z:D,d:E})}r+=M}const[a,l]=i[i.length-1];o.push({x:a,y:(Le(a,l)??0)+n,z:l,d:r});const c=o.length;if(c<2)return null;const h=new Float32Array(c*2*3),u=new Float32Array(c*2*2),d=new Uint32Array((c-1)*6),p=t*.5;for(let v=0;v<c;v++){const m=o[Math.max(0,v-1)],_=o[Math.min(c-1,v+1)];let S=_.x-m.x,y=_.z-m.z;const M=Math.hypot(S,y)||1;S/=M,y/=M;const T=-y,w=S,C=o[v],P=C.x-T*p,D=C.z-w*p,x=C.x+T*p,E=C.z+w*p,N=(Le(P,D)??C.y)+n,U=(Le(x,E)??C.y)+n,F=C.d/s,$=v*6;h[$]=P,h[$+1]=N,h[$+2]=D,h[$+3]=x,h[$+4]=U,h[$+5]=E;const V=v*4;if(u[V]=0,u[V+1]=F,u[V+2]=1,u[V+3]=F,v<c-1){const z=v*2,O=v*6;d[O]=z,d[O+1]=z+2,d[O+2]=z+1,d[O+3]=z+1,d[O+4]=z+2,d[O+5]=z+3}}const g=new ze;return g.setAttribute("position",new Ue(h,3)),g.setAttribute("uv",new Ue(u,2)),g.setIndex(new Ue(d,1)),g.computeVertexNormals(),g}function bo(i,t,e,n,s,o=0){if(!Array.isArray(i)||i.length<2)return;const r=Math.max(40,e*.0085),a=eh(i,r,Math.max(40,e*.003),Math.max(4,e*.001)+o*15,r*2.2);if(a){const c=new xe({map:t,transparent:!0,opacity:.95,side:Pe,depthWrite:!1});n.add(new dt(a,c))}const l=eh(i,2.2,4,.08+o,4.5);if(l){const c=new xe({map:t,transparent:!0,opacity:.92,side:Pe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});s.add(new dt(l,c))}}function ys(){f.routeGroup&&(ae.remove(f.routeGroup),f.routeGroup.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.map!==Qn&&s.material.map!==ti&&s.material.dispose()}),f.routeGroup=null);const i=Math.max(f.terrainWidth,f.terrainDepth),t=new de;t.name="orbitalRouteVisuals";const e=new de;e.name="fpRouteVisuals";const n=new de;if(n.name="routeGroup",n.add(t),n.add(e),f.routeStart_m){const[s,o]=f.routeStart_m,r=Le(s,o)??0,a=wo(5632667,i*.008);a.position.set(s,r,o),t.add(a);const l=wo(5632667,1);l.position.set(s,r,o),e.add(l)}if(f.routeGoal_m){const[s,o]=f.routeGoal_m,r=Le(s,o)??0,a=wo(16173381,i*.008);a.position.set(s,r,o),t.add(a);const l=wo(16173381,1.4);l.position.set(s,r,o),e.add(l)}if(f.routeAlgorithm==="compare")f.route&&f.route.path_m&&bo(f.route.path_m,th(),i,t,e,0),f.qaoaRoute&&f.qaoaRoute.path_m&&bo(f.qaoaRoute.path_m,Kr(),i,t,e,.04);else if(f.routeAlgorithm==="qaoa"){const s=f.qaoaRoute||f.route;s&&s.path_m&&bo(s.path_m,Kr(),i,t,e,0)}else if(f.route&&f.route.path_m){const s=f.route.algorithm==="qaoa"?Kr():th();bo(f.route.path_m,s,i,t,e,0)}ae.add(n),f.routeGroup=n,Cl()}function Cl(){if(!f.routeGroup)return;const i=f.mode==="fp",t=f.routeGroup.getObjectByName("orbitalRouteVisuals"),e=f.routeGroup.getObjectByName("fpRouteVisuals");t&&(t.visible=!i),e&&(e.visible=i)}function Gv(i){Qn&&(f.route||f.qaoaRoute)&&(Qn.offset.y=(Qn.offset.y-i*.45)%1),ti&&(f.route||f.qaoaRoute)&&(ti.offset.y=(ti.offset.y-i*.45)%1)}function wo(i,t){const e=new de,n=new xe({color:i}),s=new dt(new Qt(.12,.12,6,8),n);s.position.y=3,e.add(s);const o=new dt(new $s(1.1,0),n);o.position.y=6.5,e.add(o);const r=new dt(new xs(1.2,1.8,24),new xe({color:i,side:Pe,transparent:!0,opacity:.75}));return r.rotation.x=-Math.PI/2,r.position.y=.2,e.add(r),e.scale.setScalar(t),e}function Hv(){f.routeGroup&&ys()}function Ao(i,t,e){i==="start"?f.routeStart_m=[Number(t.toFixed(1)),Number(e.toFixed(1))]:f.routeGoal_m=[Number(t.toFixed(1)),Number(e.toFixed(1))],f.routeStart_m&&f.routeGoal_m?(f.routeSelectMode=null,cr()):(ys(),wn())}function ku(i,t){f.solar&&(Array.isArray(t.coordinates_lat_lon)&&t.coordinates_lat_lon.length>=2?(f.solar.lat_deg=Number(t.coordinates_lat_lon[0]),f.solar.lon_deg=Number(t.coordinates_lat_lon[1])):i==="synth_crater"?(f.solar.lat_deg=-4.58,f.solar.lon_deg=137.44):(f.solar.lat_deg=18.38,f.solar.lon_deg=77.58));const e=document.getElementById("dataset-select");if(e){if(!Array.from(e.options).some(o=>o.value===i)){const o=document.createElement("option");o.value=i,o.textContent=t.label||i,e.appendChild(o)}e.value=i,e.addEventListener("change",()=>{const o=e.value;if(o&&o!==i){const r=new URL(window.location.href);r.searchParams.set("dataset",o),window.location.href=r.toString()}})}const n=document.getElementById("meta-source-line"),s=document.getElementById("meta-uncertainty-note");if(n){const o=typeof t.resolution_m=="number"?`${t.resolution_m} m/px`:"—",r=t.source||"DEM Marciano",a=t.acquisition_date?` · ${t.acquisition_date}`:"";n.textContent=`${r} (${o}${a})`}s&&(s.textContent=t.uncertainty_note||`Pendientes calculadas a escala de celda (${t.resolution_m??"?"} m); obstáculos sub-métricos no resueltos.`)}function Vv(){const i=document.getElementById("route-pick-btn"),t=document.getElementById("route-clear-btn"),e=document.getElementById("route-export-btn"),n=document.getElementById("route-science-tour-btn"),s=document.getElementById("algo-astar"),o=document.getElementById("algo-qaoa"),r=document.getElementById("algo-compare");n&&n.addEventListener("click",()=>{Wv()});const a=l=>{f.routeAlgorithm=l,s&&s.classList.toggle("active",l==="astar"),o&&o.classList.toggle("active",l==="qaoa"),r&&r.classList.toggle("active",l==="compare"),f.routeStart_m&&f.routeGoal_m?cr():wn()};s&&s.addEventListener("click",()=>a("astar")),o&&o.addEventListener("click",()=>a("qaoa")),r&&r.addEventListener("click",()=>a("compare")),i&&i.addEventListener("click",()=>{f.routeSelectMode?f.routeSelectMode=null:f.routeSelectMode="start",wn()}),t&&t.addEventListener("click",()=>{kv()}),e&&e.addEventListener("click",()=>{const l=f.routeAlgorithm==="qaoa"&&f.qaoaRoute||f.route;if(!l)return;const c=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),h=URL.createObjectURL(c),u=document.createElement("a");u.href=h,u.download="route.json",u.click(),URL.revokeObjectURL(h)}),wn()}function wn(){var c,h;const i=document.getElementById("route-pick-btn"),t=document.getElementById("route-status"),e=document.getElementById("rm-dist"),n=document.getElementById("rm-o2"),s=document.getElementById("rm-slope"),o=document.getElementById("rm-risk"),r=document.getElementById("rm-algo"),a=document.getElementById("route-compare-box");if(!t)return;i&&(i.classList.toggle("active",!!f.routeSelectMode),i.textContent=f.routeSelectMode==="start"?"1/2 Clic en Inicio (A)…":f.routeSelectMode==="goal"?"2/2 Clic en Destino (B)…":"📍 Elegir Inicio / Destino");const l=f.routeAlgorithm==="qaoa"&&f.qaoaRoute||f.route;if(t.classList.toggle("picking",!!f.routeSelectMode),f.routeSelectMode==="start")t.textContent="Haz clic en el mapa para situar el punto de INICIO (A).";else if(f.routeSelectMode==="goal")t.textContent="Ahora haz clic en el mapa para situar el DESTINO (B).";else if(f.routeAlgorithm==="compare"&&f.route&&f.qaoaRoute)t.textContent="Comparando A* (cian) vs QAOA cuántico (magenta) en el terreno.";else if(l){const u=l.algorithm==="qaoa"?"QAOA Cuántico":"A* Clásico";t.textContent=`Ruta ${u} activa (${l.path_m.length} nodos).`}else f.routeStart_m&&!f.routeGoal_m?t.textContent="Inicio (A) fijado. Elige un Destino (B) en el mapa.":t.textContent="Elige Inicio y Destino con clic en el mapa.";if(r&&(f.routeAlgorithm==="compare"?(r.textContent="A* + QAOA",r.style.color="#d875ff"):l&&l.algorithm==="qaoa"?(r.textContent="QAOA (p=4)",r.style.color="#d875ff"):(r.textContent="A*",r.style.color="#66fcf1")),l&&l.metrics){const u=l.metrics;e.textContent=u.distance_m>=1e3?`${(u.distance_m/1e3).toFixed(2)} km`:`${u.distance_m.toFixed(0)} m`,n.textContent=`${u.oxygen_l.toFixed(1)} L`,s.textContent=`${u.max_slope_deg.toFixed(1)}°`,s.style.color=u.max_slope_deg>f.fisio.max_safe_slope_deg?"#ff3855":"#55f29b",o.textContent=u.risk_score.toFixed(2)}else e.textContent="—",n.textContent="—",s.textContent="—",s.style.color="",o.textContent="—";if(a)if(f.routeAlgorithm==="compare"&&((c=f.route)!=null&&c.metrics)&&((h=f.qaoaRoute)!=null&&h.metrics)){const u=f.route.metrics,d=f.qaoaRoute.metrics,p=d.oxygen_l-u.oxygen_l,g=d.max_slope_deg-u.max_slope_deg,v=(m,_)=>`${m>=0?"+":""}${m.toFixed(1)}${_}`;a.classList.remove("hidden"),a.innerHTML=`<div><span class="cmp-astar">■ A* (Cian):</span> ${(u.distance_m/1e3).toFixed(2)} km · ${u.oxygen_l.toFixed(1)} L O₂ · máx ${u.max_slope_deg.toFixed(1)}°</div><div><span class="cmp-qaoa">■ QAOA (Magenta):</span> ${(d.distance_m/1e3).toFixed(2)} km · ${d.oxygen_l.toFixed(1)} L O₂ · máx ${d.max_slope_deg.toFixed(1)}°</div><div style="margin-top:2px;color:#b8c0cc;">Δ (QAOA − A*): O₂ ${v(p," L")} · Pend. máx ${v(g,"°")}</div>`}else a.classList.add("hidden"),a.innerHTML="";Xv()}function Wv(){if(!f.pois||f.pois.length<2)return;const i=f.pois.find(a=>a.type==="shelter")||f.pois[0],t=f.pois.filter(a=>a.type==="sampling"&&Array.isArray(a.position_m));if(t.length===0)return;const e=t.slice(),n=[i.position_m.slice()];let s=i.position_m;const o=Math.min(3,e.length);for(let a=0;a<o;a++){let l=0,c=1/0;for(let u=0;u<e.length;u++){const d=e[u].position_m,p=Math.hypot(d[0]-s[0],d[1]-s[1]);p<c&&(c=p,l=u)}const h=e.splice(l,1)[0];n.push(h.position_m.slice()),s=h.position_m}const r=(a,l)=>{const c=[];for(let h=0;h<n.length-1;h++){const[u,d]=n[h],[p,g]=n[h+1],v=a(u,d,p,g);if(v&&Array.isArray(v.path_m))for(let m=h===0?0:1;m<v.path_m.length;m++)c.push(v.path_m[m])}return{dataset_id:f.datasetId||Yt.DEFAULT_DATASET,algorithm:l,path_m:c,metrics:Tl(c)}};f.routeStart_m=n[0].slice(),f.routeGoal_m=n[n.length-1].slice(),f.routeAlgorithm==="qaoa"?(f.qaoaRoute=r(Jo,"qaoa"),f.route=f.qaoaRoute):f.routeAlgorithm==="compare"?(f.route=r(gs,"astar"),f.qaoaRoute=r(Jo,"qaoa")):f.route=r(gs,"astar"),ys(),wn()}function Xv(){var P,D;const i=document.getElementById("route-profile-canvas");if(!i||!f.metadata)return;const t=i.getContext("2d"),e=i.width,n=i.height;t.clearRect(0,0,e,n),t.fillStyle="rgba(6, 14, 18, 0.92)",t.fillRect(0,0,e,n);const s=f.routeAlgorithm==="qaoa"&&f.qaoaRoute||f.route,o=f.routeAlgorithm==="compare"?f.qaoaRoute:null;if(!s||!Array.isArray(s.path_m)||s.path_m.length<2){t.fillStyle="#6c7a89",t.font="10px system-ui, sans-serif",t.textAlign="center",t.fillText("Traza una ruta para ver el perfil 2D",e*.5,n*.54);return}const r=f.metadata.elevation_range_m[0],a=f.fisio.max_safe_slope_deg||25,l=x=>{const E=[];let N=0;for(let U=0;U<x.length;U++){const[F,$]=x[U];U>0&&(N+=Math.hypot(F-x[U-1][0],$-x[U-1][1]));const V=r+(be(F,$)??0),z=Se(F,$);E.push({x:F,z:$,d:N,elev:V,slope:z})}return E},c=l(s.path_m),h=o&&Array.isArray(o.path_m)?l(o.path_m):null;let u=1/0,d=-1/0,p=Math.max(((P=c[c.length-1])==null?void 0:P.d)||1,h&&((D=h[h.length-1])==null?void 0:D.d)||1);for(const x of c)x.elev<u&&(u=x.elev),x.elev>d&&(d=x.elev);if(h)for(const x of h)x.elev<u&&(u=x.elev),x.elev>d&&(d=x.elev);const g=Math.max(d-u,25),v=8,m=8,_=14,S=14,y=e-v-m,M=n-_-S,T=x=>v+x/p*y,w=x=>_+M-(x-u)/g*M;t.strokeStyle="rgba(102, 252, 241, 0.12)",t.lineWidth=1;for(const x of[.25,.5,.75]){const E=_+M*x;t.beginPath(),t.moveTo(v,E),t.lineTo(e-m,E),t.stroke()}const C=s.algorithm==="qaoa"?"#d875ff":"#66fcf1";t.beginPath(),t.moveTo(T(c[0].d),_+M);for(const x of c)t.lineTo(T(x.d),w(x.elev));t.lineTo(T(c[c.length-1].d),_+M),t.closePath(),t.fillStyle=s.algorithm==="qaoa"?"rgba(216, 117, 255, 0.16)":"rgba(102, 252, 241, 0.16)",t.fill();for(let x=1;x<c.length;x++){const E=c[x-1],N=c[x],U=Math.max(E.slope,N.slope);t.strokeStyle=U>a?"#ff3855":U>a*.75?"#f6c945":C,t.lineWidth=2,t.beginPath(),t.moveTo(T(E.d),w(E.elev)),t.lineTo(T(N.d),w(N.elev)),t.stroke()}if(h&&h.length>=2){t.strokeStyle="#d875ff",t.lineWidth=1.8,t.setLineDash([4,3]),t.beginPath();for(let x=0;x<h.length;x++){const E=T(h[x].d),N=w(h[x].elev);x===0?t.moveTo(E,N):t.lineTo(E,N)}t.stroke(),t.setLineDash([])}if(Array.isArray(f.pois))for(const x of f.pois){if(!Array.isArray(x.position_m))continue;let E=null,N=420;for(const U of c){const F=Math.hypot(U.x-x.position_m[0],U.z-x.position_m[1]);F<N&&(N=F,E=U)}if(E){const U=T(E.d),F=w(E.elev);t.fillStyle=x.type==="shelter"?"#55f29b":x.type==="hazard"?"#ff3855":"#f6c945",t.beginPath(),t.arc(U,F,3.2,0,Math.PI*2),t.fill()}}t.fillStyle="#9aa6b5",t.font="9px ui-monospace, SFMono-Regular, Menlo, monospace",t.textAlign="left",t.fillText(`${d.toFixed(0)}m`,6,10),t.fillText(`${u.toFixed(0)}m`,6,n-3),t.textAlign="right",t.fillStyle="#66fcf1",t.fillText(`0 → ${(p/1e3).toFixed(2)} km`,e-6,n-3)}async function $v(i){try{const n=await fetch(`${i}/route.json`,{cache:"no-store"});if(n.ok){const s=await n.json();if(s&&Array.isArray(s.path_m)&&s.path_m.length>=2){Hs(s),console.log(`[Marswalk] route.json cargado (${s.path_m.length} puntos)`);return}}}catch{}const t=f.terrainWidth,e=f.terrainDepth;gs(-t*.14,e*.08,t*.12,-e*.12)}const qv={sampling:6749425,hazard:16726101,shelter:5632667};async function Yv(i){f.pois=[];try{const t=await fetch(`${i}/poi.json`,{cache:"no-store"});if(t.ok){const e=await t.json();e&&Array.isArray(e.points)&&(f.pois=e.points,console.log(`[Marswalk] poi.json cargado (${f.pois.length} puntos de interés)`))}}catch{}if(f.pois.length===0&&(f.pois=Hu(),console.log(`[Marswalk] Generados ${f.pois.length} POIs automáticos desde la topografía del DEM`)),Rl(),!f.layers.some(t=>t.id==="pois")){const t={id:"pois",label:"POIs Ciencia",type:"poi3d",enabled:f.poiLayerEnabled,opacity:f.poiLayerOpacity,source:null,enable(){this.enabled=!0,f.poiLayerEnabled=!0,f.poiGroup&&(f.poiGroup.visible=!0),On()},disable(){this.enabled=!1,f.poiLayerEnabled=!1,f.poiGroup&&(f.poiGroup.visible=!1),On()},setOpacity(e){const n=Gt.clamp(Number(e),0,1);this.opacity=n,f.poiLayerOpacity=n,Gu(n),On()}};f.layers.push(t),Al()}}function jv(i,t,e=1){const n=new de;n.userData={poi:i};const s=qv[i.type]||6749425,o=new xe({color:s,transparent:!0,opacity:.92*e}),r=new xe({color:s,transparent:!0,opacity:.28*e,side:Pe,depthWrite:!1}),a=new dt(new Qt(.14,.14,7.5,8),o);a.position.y=3.75,a.userData={poi:i,baseOpacity:.92},n.add(a);let l;i.type==="hazard"?l=new Xs(1.5,2.6,4):i.type==="shelter"?l=new rr(1.35,0):l=new $s(1.4,0);const c=new dt(l,o);c.position.y=8.2,i.type==="hazard"&&(c.rotation.x=Math.PI),c.userData={poi:i,baseOpacity:.92},n.add(c);const h=new dt(new xs(1.4,2.4,24),r);h.rotation.x=-Math.PI/2,h.position.y=.25,h.userData={poi:i,baseOpacity:.28},n.add(h);const u=new dt(new si(2.8,8,8),new xe({transparent:!0,opacity:0,depthWrite:!1}));return u.position.y=5,u.userData={poi:i,baseOpacity:0},n.add(u),n.scale.setScalar(t),n}function Rl(){if(ev(),f.poiGroup&&(ae.remove(f.poiGroup),f.poiGroup.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),f.poiGroup=null),!f.pois||f.pois.length===0)return;const t=Math.max(f.terrainWidth,f.terrainDepth)*.0085,e=new de;e.name="poiGroup",e.visible=f.poiLayerEnabled;const n=new de;n.name="orbitalPOIs";const s=new de;s.name="fpPOIs";for(let o=0;o<f.pois.length;o++){const r=f.pois[o];if(!Array.isArray(r.position_m)||r.position_m.length<2)continue;const[a,l]=r.position_m,c=Le(a,l)??0,h=jv(r,t,f.poiLayerOpacity);h.position.set(a,c,l),n.add(h);const u=iv(r,o,f.poiLayerOpacity);u.position.set(a,c,l),s.add(u)}e.add(n),e.add(s),ae.add(e),f.poiGroup=e,Pl()}function Pl(){if(!f.poiGroup)return;const i=f.mode==="fp",t=f.poiGroup.getObjectByName("orbitalPOIs"),e=f.poiGroup.getObjectByName("fpPOIs");t&&(t.visible=!i),e&&(e.visible=!0)}function Kv(){f.poiGroup&&Rl()}function Gu(i){f.poiGroup&&f.poiGroup.traverse(t=>{var e;t.isMesh&&t.material&&typeof((e=t.userData)==null?void 0:e.baseOpacity)=="number"&&(t.material.opacity=t.userData.baseOpacity*i)})}function Hu(){const i=f.terrainWidth,t=f.terrainDepth,e=f.fisio.max_safe_slope_deg||25;let n={x:0,z:0,score:1/0},s={x:-i*.15,z:t*.12,elev:1/0},o={x:i*.16,z:-t*.14,score:-1/0},r={x:-i*.22,z:-t*.18,elev:-1/0},a={x:i*.08,z:t*.18,slope:-1/0};const l=24;for(let h=2;h<l-2;h++){const u=(h/(l-1)-.5)*t*.78;for(let d=2;d<l-2;d++){const p=(d/(l-1)-.5)*i*.78,g=Se(p,u),v=be(p,u)??0,m=Math.hypot(p/i,u/t),_=g*2.5+m*8;if(_<n.score&&(n={x:p,z:u,score:_,slope:g}),g<e*.65&&v<s.elev&&Math.hypot(p-n.x,u-n.z)>i*.1&&(s={x:p,z:u,elev:v}),g>=6&&g<=e*.78){const S=g-Math.abs(m-.22)*15;S>o.score&&(o={x:p,z:u,score:S})}g<e*.75&&v>r.elev&&(r={x:p,z:u,elev:v}),g>a.slope&&(a={x:p,z:u,slope:g})}}const c=h=>[Number(h.x.toFixed(0)),Number(h.z.toFixed(0))];return[{id:"auto_poi_shelter",name:"Zona de Aterrizaje & Refugio EVA (Auto-detectada)",position_m:c(n),type:"shelter",description:"Planicie de mínima pendiente e incertidumbre topográfica seleccionada en tiempo real para el módulo hábitat y rover de apoyo.",source:"Análisis Geomorfométrico en Vivo · Criterio NASA Landing Site (< 5°)"},{id:"auto_poi_basin",name:"Cuenca Sedimentaria Primaria",position_m:c(s),type:"sampling",description:"Depresión topográfica de baja energía con potencial de acumulación de filosilicatos y evaporitas hidratadas.",source:"Fusión Topográfica MOLA / CTX + Modelo Hidrológico"},{id:"auto_poi_contact",name:"Contacto Estratigráfico Marginal",position_m:c(o),type:"sampling",description:"Transición de gradiente moderado donde afloran estratos antiguos expuestos para muestreo astrobiológico.",source:"Detección de Gradiente CRISM / HiRISE en Tiempo Real"},{id:"auto_poi_ridge",name:"Mirador y Afloramiento Superior",position_m:c(r),type:"sampling",description:"Unidad elevada transitable con línea de vista despejada y exposición de roca madre consolidada.",source:"Inercia Térmica THEMIS / Altimetría DEM"},{id:"auto_poi_hazard",name:`Escarpe de Alta Pendiente (${(a.slope||28).toFixed(1)}°)`,position_m:c(a),type:"hazard",description:"Ladera escarpada que supera el umbral de estabilidad EVA; riesgo de deslizamiento de regolito y gasto metabólico extremo.",source:"Mapa de Riesgo Derivado del DEM en Vivo"}]}async function Zv({datasetId:i="custom_dem",label:t="DEM Personalizado (En Vivo)",rows:e,cols:n,res_m:s=20,demFloat32:o,source:r="GeoTIFF / Float32 Local",uncertaintyNote:a=""}){let l=1/0,c=-1/0;for(let v=0;v<o.length;v++){const m=o[v];Number.isFinite(m)&&(m<l&&(l=m),m>c&&(c=m))}Number.isFinite(l)||(l=-2500,c=-1500);const h=Number((n*s).toFixed(1)),u=Number((e*s).toFixed(1)),d={dataset_id:i,label:t,source:r,crs:"IAU_2015:49900",size_m:[h,u],resolution_m:s,shape:[e,n],elevation_range_m:[Number(l.toFixed(2)),Number(c.toFixed(2))],heightmap:{file:"heightmap.f32",format:"float32-le",units:"m"},layers:[{id:"base",file:"",type:"base"},{id:"slope",file:"",type:"overlay",unit:"deg",range:[0,45]},{id:"risk",file:"",type:"overlay",unit:"0-1"}],acquisition_date:new Date().toISOString().slice(0,10),uncertainty_note:a||`DEM cargado en tiempo real (${n}×${e} px a ${s} m/px). Capas, POIs y rutas generados al vuelo.`};f.datasetId=i,f.metadata=d,f.dem=o,document.title=`${t} · Marswalk 3D`,ku(i,d),await Nu(d,"",async()=>null),Fu(d,o,gn),f.pois=Hu(),Rl(),f.layers.some(v=>v.id==="pois")||(f.layers.push({id:"pois",label:"POIs Ciencia",type:"poi3d",enabled:f.poiLayerEnabled,opacity:f.poiLayerOpacity,source:null,enable(){this.enabled=!0,f.poiLayerEnabled=!0,f.poiGroup&&(f.poiGroup.visible=!0),On()},disable(){this.enabled=!1,f.poiLayerEnabled=!1,f.poiGroup&&(f.poiGroup.visible=!1),On()},setOpacity(v){const m=Gt.clamp(Number(v),0,1);this.opacity=m,f.poiLayerOpacity=m,Gu(m),On()}}),Al());const p=f.pois.find(v=>v.type==="shelter")||f.pois[0],g=f.pois.find(v=>v.type==="sampling")||f.pois[1];return p&&g&&(f.routeStart_m=p.position_m.slice(),f.routeGoal_m=g.position_m.slice(),cr()),{metadata:d,shelterPos_m:p?p.position_m:[0,0]}}function Ja(i,t){const e=document.getElementById("loading-msg"),n=document.getElementById("loading-sub");e&&i&&(e.textContent=i),n&&t!==void 0&&(n.textContent=t)}function To(i,t=""){const e=document.getElementById("loading");if(!e)return;e.classList.remove("hidden"),e.classList.add("error");const n=e.querySelector(".spinner");n&&(n.style.display="none"),Ja(`⚠ ${i}`,t)}const Ye=document.getElementById("astronaut-dock"),Vu=Ye.querySelector(".dock-label");function Jv(){const i=new de,t=new Ee({color:15921906,roughness:.45,metalness:.1}),e=new Ee({color:2766146,roughness:.25,metalness:.85}),n=new Ee({color:16738877,emissive:16738877,emissiveIntensity:.7,roughness:.15,metalness:.9}),s=new dt(new yl(.35,.9,6,12),t);s.position.y=1,i.add(s);const o=new dt(new si(.45,16,16),e);o.position.y=1.9,i.add(o);const r=new dt(new si(.32,16,16,0,Math.PI,Math.PI*.35,Math.PI*.65),n);r.position.set(0,1.9,.18),r.rotation.y=Math.PI/2,i.add(r);const a=new dt(new ge(.6,.8,.35),t);a.position.set(0,1.05,-.4),i.add(a);const l=new dt(new xs(.85,1.15,32),new xe({color:16738877,side:Pe,transparent:!0,opacity:.65,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.05,i.add(l);const c=new dt(new Qt(.06,.06,18,6),new xe({color:16738877,transparent:!0,opacity:.22,depthWrite:!1}));c.position.y=9,i.add(c);const h=new dt(new si(1.4,12,12),new xe({color:16738877,transparent:!0,opacity:.09,depthWrite:!1}));h.position.y=1.2,i.add(h);const u=Math.max(f.terrainWidth,f.terrainDepth);return i.scale.setScalar(u*.0125),i}function rs(i,t){const e=Le(i,t)??0;if(f.astronautGroup){const n=Math.max(f.terrainWidth,f.terrainDepth);f.astronautGroup.scale.setScalar(n*.0125),f.astronautGroup.position.set(i,e,t),f.astronautPosition.copy(f.astronautGroup.position);return}f.astronautGroup=Jv(),f.astronautGroup.position.set(i,e,t),f.astronautPosition.copy(f.astronautGroup.position),ae.add(f.astronautGroup),Ye.classList.add("placed"),Ye.classList.remove("dragging"),Ye.title="Clic para recuperar el astronauta",Vu.textContent="En el mapa · clic para recuperar"}function Wu(){var i,t;f.astronautGroup&&(ae.remove(f.astronautGroup),f.astronautGroup.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())}),f.astronautGroup=null,Ye.classList.remove("placed"),Ye.title="Arrastra el astronauta al mapa",Vu.textContent="Arrastra al mapa",(t=(i=f.hooks).onRecallAstronaut)==null||t.call(i))}function Zr(i){if(!f.astronautGroup)return;const t=Ru(i);t.length>0&&f.astronautGroup.position.copy(t[0].point)}function nh(){if(!f.astronautGroup)return;const i=f.astronautGroup.position;if(!(Math.abs(i.x)<=f.boundsX&&Math.abs(i.z)<=f.boundsZ)){Wu();return}const e=Le(i.x,i.z);e!==null&&(f.astronautGroup.position.y=e,f.astronautPosition.copy(f.astronautGroup.position))}function Qv(){const i=Array.isArray(f.pois)?f.pois.find(e=>e.type==="shelter"):null;i&&Array.isArray(i.position_m)?rs(i.position_m[0]+6,i.position_m[1]+13):rs(0,0),Ye.addEventListener("pointerdown",e=>{e.button!==0&&e.pointerType!=="touch"||f.terrainMesh&&(f.astronautGroup||(rs(0,0),f.interaction.isDraggingAstronaut=!0,f.orbitControls&&(f.orbitControls.enabled=!1),Ye.classList.add("dragging"),Ye.setPointerCapture(e.pointerId),Zr(e),e.preventDefault()))}),Ye.addEventListener("pointermove",e=>{f.interaction.isDraggingAstronaut&&Zr(e)}),Ye.addEventListener("pointerup",e=>{if(f.interaction.isDraggingAstronaut){f.interaction.isDraggingAstronaut=!1,f.interaction.lastDockDragEnd=performance.now(),f.orbitControls&&(f.orbitControls.enabled=!0),Ye.classList.remove("dragging");try{Ye.releasePointerCapture(e.pointerId)}catch{}nh()}}),Ye.addEventListener("click",()=>{f.astronautGroup&&(performance.now()-f.interaction.lastDockDragEnd<300||Wu())});const t=pe.domElement;t.addEventListener("pointerdown",e=>{f.mode!=="orbit"||e.button!==0&&e.pointerType!=="touch"||!f.astronautGroup||Kc(e).length===0||(e.stopPropagation(),e.preventDefault(),f.interaction.isDraggingAstronaut=!0,f.orbitControls&&(f.orbitControls.enabled=!1),t.style.cursor="grabbing",t.setPointerCapture(e.pointerId))},{capture:!0}),t.addEventListener("pointermove",e=>{if(f.interaction.isDraggingAstronaut){Zr(e);return}if(f.mode==="orbit"&&f.astronautGroup){const n=Kc(e);t.style.cursor=n.length>0?"pointer":"grab"}}),t.addEventListener("pointerup",e=>{if(f.interaction.isDraggingAstronaut){f.interaction.isDraggingAstronaut=!1,f.orbitControls&&(f.orbitControls.enabled=!0),t.style.cursor="grab";try{t.releasePointerCapture(e.pointerId)}catch{}nh()}})}const En=document.getElementById("info-popup"),Co=document.getElementById("info-title"),Yi=document.getElementById("info-poi-badge"),Ro=document.getElementById("info-poi-meta"),ih=document.getElementById("info-poi-desc"),sh=document.getElementById("info-poi-source"),tx=document.getElementById("info-elev"),ex=document.getElementById("info-slope"),nx=document.getElementById("info-dist"),ix=En.querySelector(".info-close"),oh=document.getElementById("popup-set-start"),rh=document.getElementById("popup-set-goal"),ah=document.getElementById("popup-visit-fp"),sx={sampling:"Muestreo",hazard:"Peligro",shelter:"Refugio"};let hr=!1;const He=new L;let Ll=0,an=null;function ox(){ix.addEventListener("click",e=>{e.stopPropagation(),Xu()}),oh&&oh.addEventListener("click",e=>{e.stopPropagation(),Ao("start",He.x,He.z)}),rh&&rh.addEventListener("click",e=>{e.stopPropagation(),Ao("goal",He.x,He.z)}),ah&&ah.addEventListener("click",e=>{var n,s;e.stopPropagation(),(s=(n=f.hooks).onVisitPointFP)==null||s.call(n,He.x,He.z)});const i=document.getElementById("app");let t=null;i.addEventListener("pointerdown",e=>{f.mode==="orbit"&&(f.interaction.isDraggingAstronaut||(t={x:e.clientX,y:e.clientY,t:performance.now()}))}),i.addEventListener("pointerup",e=>{if(f.mode!=="orbit"||!t){t=null;return}if(f.interaction.isDraggingAstronaut){t=null;return}const n=e.clientX-t.x,s=e.clientY-t.y,o=performance.now()-t.t;if(t=null,Math.hypot(n,s)>5||o>400)return;const r=Qg(e);if(r&&!f.routeSelectMode){const[c,h]=r.poi.position_m,u=Le(c,h)??r.point.y;lh(new L(c,u,h),r.poi);return}const a=Ru(e);if(a.length===0)return;const l=a[0].point;if(f.routeSelectMode==="start"){f.routeStart_m=[Number(l.x.toFixed(1)),Number(l.z.toFixed(1))],f.routeSelectMode="goal",Ao("start",l.x,l.z),f.routeSelectMode="goal",wn();return}if(f.routeSelectMode==="goal"){f.routeSelectMode=null,f.routeStart_m?gs(f.routeStart_m[0],f.routeStart_m[1],l.x,l.z):Ao("goal",l.x,l.z);return}lh(l,null)})}function lh(i,t=null){He.copy(i),Ll=f.exaggeration>0?i.y/f.exaggeration:0,an=t,hr=!0,En.classList.add("visible"),En.setAttribute("aria-hidden","false"),$u(),qu()}function rx(){if(!hr)return;const i=Le(He.x,He.z);He.y=i!==null?i:Ll*f.exaggeration}function Xu(){hr=!1,an=null,En.classList.remove("visible"),En.setAttribute("aria-hidden","true")}function $u(){if(!f.metadata)return;an?(Co&&(Co.textContent=an.name||an.id),Yi&&(Yi.hidden=!1,Yi.className=`info-poi-badge ${an.type||"sampling"}`,Yi.textContent=sx[an.type]||an.type||"POI"),Ro&&(Ro.hidden=!1,ih&&(ih.textContent=an.description||""),sh&&(sh.textContent=an.source?`Fuente: ${an.source}`:""))):(Co&&(Co.textContent="Sitio seleccionado"),Yi&&(Yi.hidden=!0),Ro&&(Ro.hidden=!0));const t=f.metadata.elevation_range_m[0]+Ll,e=Se(He.x,He.z),n=He.x-f.astronautPosition.x,s=He.z-f.astronautPosition.z,o=Math.hypot(n,s);tx.textContent=`${t.toLocaleString("es-ES",{maximumFractionDigits:0})} m`,ex.textContent=`${e.toFixed(1)}°`,nx.textContent=o>=1e3?`${(o/1e3).toFixed(2)} km`:`${o.toFixed(0)} m`}function qu(){const i=He.clone().project(Et);if(i.z>1){En.style.opacity="0";return}En.style.opacity="";let t=(i.x*.5+.5)*window.innerWidth,e=(-i.y*.5+.5)*window.innerHeight;const n=260,s=an?220:165;t=Math.max(n/2+8,Math.min(window.innerWidth-n/2-8,t));let o=!1;e-s-18<8&&(o=!0,e+=18),En.style.left=`${t}px`,En.style.top=`${e}px`,En.classList.toggle("below",o)}function ax(){hr&&(qu(),$u())}const ch={type:"change"},Il={type:"start"},Yu={type:"end"},Po=new ir,hh=new Yn,lx=Math.cos(70*Gt.DEG2RAD),we=new L,qe=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jr=1e-6;class cx extends Tu{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Ei,this._lastTargetPosition=new L,this._quat=new Ei().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jc,this._sphericalDelta=new jc,this._scale=1,this._panOffset=new L,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new L,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ux.bind(this),this._onPointerDown=hx.bind(this),this._onPointerUp=dx.bind(this),this._onContextMenu=xx.bind(this),this._onMouseWheel=mx.bind(this),this._onKeyDown=_x.bind(this),this._onTouchStart=gx.bind(this),this._onTouchMove=vx.bind(this),this._onMouseDown=fx.bind(this),this._onMouseMove=px.bind(this),this._interceptControlDown=yx.bind(this),this._interceptControlUp=Mx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ch),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=qe:n>Math.PI&&(n-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=we.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Po.origin.copy(this.object.position),Po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Po.direction))<lx?this.object.lookAt(this.target):(hh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Po.intersectPlane(hh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Jr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jr||this._lastTargetPosition.distanceToSquared(this.target)>Jr?(this.dispatchEvent(ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let o=we.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ux(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yu),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function fx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case ei.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case ei.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Il)}function px(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function mx(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(Il),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Yu))}function _x(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function gx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Il)}function vx(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function xx(i){this.enabled!==!1&&i.preventDefault()}function yx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ji=new yn(0,0,0,"YXZ"),Ki=new L,Sx={type:"change"},Ex={type:"lock"},bx={type:"unlock"},uh=Math.PI/2;class wx extends Tu{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Ax.bind(this),this._onPointerlockChange=Tx.bind(this),this._onPointerlockError=Cx.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;Ki.setFromMatrixColumn(e.matrix,0),Ki.crossVectors(e.up,Ki),e.position.addScaledVector(Ki,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;Ki.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Ki,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Ax(i){if(this.enabled===!1||this.isLocked===!1)return;const t=i.movementX||i.mozMovementX||i.webkitMovementX||0,e=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;ji.setFromQuaternion(n.quaternion),ji.y-=t*.002*this.pointerSpeed,ji.x-=e*.002*this.pointerSpeed,ji.x=Math.max(uh-this.maxPolarAngle,Math.min(uh-this.minPolarAngle,ji.x)),n.quaternion.setFromEuler(ji),this.dispatchEvent(Sx)}function Tx(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Ex),this.isLocked=!0):(this.dispatchEvent(bx),this.isLocked=!1)}function Cx(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Ns="marswalk_llama_key",Qa="marswalk_llama_model",ju="marswalk_copilot_voice",tl="llama-3.3-70b-versatile",Rx="https://api.groq.com/openai/v1/chat/completions";let Zn=localStorage.getItem(ju)==="1",Qr=!1;function Px(){var u,d,p,g,v,m,_,S;const i=f.hud||{},t=f.weather||{},e=f.solar||{},n=f.routeAlgorithm==="qaoa"&&f.qaoaRoute||f.route,s=((u=f.astronautPosition)==null?void 0:u.x)??0,o=((d=f.astronautPosition)==null?void 0:d.z)??0;let r=null,a=null,l=1/0,c=1/0;if(Array.isArray(f.pois))for(const y of f.pois){if(!Array.isArray(y.position_m))continue;const M=Math.hypot(y.position_m[0]-s,y.position_m[1]-o);M<l&&(l=M,r=y),y.type==="shelter"&&M<c&&(c=M,a=y)}const h=y=>{const M=Math.floor(y%24),T=Math.floor((y%24-M)*60);return`${String(M).padStart(2,"0")}:${String(T).padStart(2,"0")}`};return{sitio:((p=f.metadata)==null?void 0:p.label)||f.datasetId||"Jezero Crater",coords:`${e.lat_deg??18.38}° N, ${e.lon_deg??77.58}° E`,traje_plss:{o2_restante_l:Number((i.o2Remaining_l??580).toFixed(1)),o2_pct:Math.round((i.o2Remaining_l??580)/(((g=f.fisio)==null?void 0:g.o2_reserve_l)||580)*100),flujo_o2_l_h:Number((i.o2Rate_l_h??50).toFixed(1)),velocidad_ms:Number((i.speed_ms??0).toFixed(2)),pendiente_actual_deg:Number((i.slope_deg??0).toFixed(1)),elevacion_m:Number((i.elev_m??0).toFixed(0)),alerta_pendiente:(i.slope_deg??0)>(((v=f.fisio)==null?void 0:v.max_safe_slope_deg)||25)},clima_meda:{modo:t.mode||"nominal",temp_c:t.temp_c??-63,viento_ms:t.wind_ms??5.2,polvo_tau:t.dust_tau??.45,presion_hpa:t.pressure_hpa??7.4,alerta_tormenta:t.mode==="dust_storm"},astronomia_solar:{ltst:h(e.ltst_h??10.5),fase:e.phase||"DIA",distancia_sol_au:Number((e.distance_au??1.56).toFixed(3)),irradiancia_sup_wm2:Number((e.surface_irradiance_wm2??400).toFixed(0)),elevacion_solar_deg:Number((e.elevation_deg??45).toFixed(1))},navegacion:{algoritmo_ruta:f.routeAlgorithm||"astar",ruta_activa:!!n,distancia_ruta_m:(m=n==null?void 0:n.metrics)!=null&&m.distance_m?Math.round(n.metrics.distance_m):null,oxigeno_est_l:(_=n==null?void 0:n.metrics)!=null&&_.oxygen_l?Number(n.metrics.oxygen_l.toFixed(1)):null,pendiente_max_deg:(S=n==null?void 0:n.metrics)!=null&&S.max_slope_deg?Number(n.metrics.max_slope_deg.toFixed(1)):null,refugio_cercano_m:a?Math.round(c):null,poi_cercano:r?`${r.name} (${Math.round(l)} m)`:"Ninguno",muestras_completadas:f.completedPOIs?f.completedPOIs.size:0}}}function Lo(i,t){const e=i.toLowerCase(),n=t.traje_plss.o2_pct,s=t.clima_meda.alerta_tormenta,o=t.traje_plss.alerta_pendiente,r=t.clima_meda.polvo_tau,a=t.clima_meda.temp_c,l=t.astronomia_solar.ltst;return e.includes("seguro")||e.includes("estado")||e.includes("viabilidad")||e.includes("riesgo")?s?`🚨 ALERTA CRÍTICA CAPCOM: Tormenta de polvo activa (τ = ${r}, viento ${t.clima_meda.viento_ms} m/s). Visibilidad < 300 m y sobrecosto térmico +35%. Recomiendo abortar travesía de inmediato y dirigirse al Refugio EVA más cercano a ${t.navegacion.refugio_cercano_m??120} m.`:n<25?`⚠️ PRECAUCIÓN PLSS: Nivel de oxígeno en reserva baja al ${n}% (${t.traje_plss.o2_restante_l} L). Tu tasa metabólica actual es ${t.traje_plss.flujo_o2_l_h} L/h. Da la vuelta inmediatamente hacia el domo hábitat para recarga presurizada.`:o?`⚠️ ALERTA GEOTÉCNICA: La ladera actual excede los 25° de inclinación segura (${t.traje_plss.pendiente_actual_deg}°). Riesgo elevado de desprendimiento de regolito y gasto cardíaco. Reajusta tu vector hacia terreno con pendiente menor al 15°.`:`✅ CONDICIONES NOMINALES: Traje PLSS al ${n}% de O₂, hora marciana ${l} LTST e irradiancia ${t.astronomia_solar.irradiancia_sup_wm2} W/m². Temperatura de ${a}°C dentro de los límites de tolerancia de las capas térmicas. La caminata es segura.`:e.includes("clima")||e.includes("tormenta")||e.includes("meda")||e.includes("temperatura")?`📡 TELEMETRÍA MEDA (Mars 2020): Presión atmosférica en ${t.clima_meda.presion_hpa} hPa, vientos de ${t.clima_meda.viento_ms} m/s y opacidad de polvo en τ = ${r}. ${s?"Tormenta de polvo severa en curso.":"Atmósfera diurna despejada; radiación UV nominal."}`:e.includes("poi")||e.includes("ciencia")||e.includes("muestra")||e.includes("perseverance")?`🔬 OFICIAL CIENTÍFICO ARES: El objetivo prioritario detectado es ${t.navegacion.poi_cercano}. Has completado ${t.navegacion.muestras_completadas} objetivos de muestreo. Recomiendo aproximarte al Rover Perseverance para enlace de telemetría por radio o al afloramiento CRISM para espectroscopía de filosilicatos.`:e.includes("retorno")||e.includes("evacuar")||e.includes("refugio")||e.includes("volver")?`🚨 VECTOR DE RETORNO: Tu refugio más próximo se encuentra a ${t.navegacion.refugio_cercano_m??85} metros. He proyectado el corredor de evacuación en tu HUD hacia el domo presurizado. Mantén paso constante sin correr para no disparar el consumo metabólico.`:e.includes("qaoa")||e.includes("ruta")||e.includes("astar")?t.navegacion.ruta_activa?`🗺️ PLANIFICADOR DE NAVEGACIÓN: Ruta activa ${t.navegacion.algoritmo_ruta.toUpperCase()} de ${t.navegacion.distancia_ruta_m} metros. Demanda estimada: ${t.navegacion.oxigeno_est_l} L de O₂ y pendiente máxima ${t.navegacion.pendiente_max_deg}°. El algoritmo cuántico QAOA minimiza la exposición a laderas escarpadas.`:'🗺️ PLANIFICADOR DE NAVEGACIÓN: No hay ruta activa fijada en este momento. Selecciona un punto de Inicio (A) y Destino (B) en el mapa o haz clic en "Travesía Científica" para encadenar los POIs.':`🎙️ ARES-AI (CAPCOM): Recibido, astronauta. Telemetría de vuelo: O₂ al ${n}%, clima ${s?"HOSTIL":"NOMINAL"} (${a}°C), hora ${l} LTST en ${t.sitio}. Mantente atento a los avisos de inclinación en el visor. ¿Deseas análisis de ruta o soporte científico?`}async function Ku(i){var o,r,a,l;const t=Px(),e=(localStorage.getItem(Ns)||"").trim(),n=localStorage.getItem(Qa)||tl;if(!e)return{text:Lo(i,t),source:"offline_heuristic",model:"Motor Experto Aeroespacial (Offline)"};const s=`Eres ARES-AI (Autonomous Reconnaissance & EVA Specialist), la inteligencia artificial integrada en el traje espacial PLSS y centro de control de vuelo de la misión Marswalk (NASA Space Apps Challenge). Tu astronauta está explorando la superficie de Marte en tiempo real. Respondes como un oficial de vuelo CAPCOM de la NASA: técnico, sereno, enfocado en la supervivencia (reserva de oxígeno O2, pendientes peligrosas >25°, tormentas de polvo MEDA) y en el éxito astrobiológico (capas CRISM/THEMIS, Rover Perseverance, tubos de muestras). REGLAS CRÍTICAS: Responde en español, sé directo (máximo 2 a 4 oraciones concisas estilo transmisión de radio espacial), cita números reales de la telemetría actual. TELEMETRÍA EN VIVO DE LA MISIÓN: ${JSON.stringify(t)}`;try{const c=await fetch(Rx,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:n,messages:[{role:"system",content:s},{role:"user",content:i}],temperature:.45,max_tokens:300})});if(!c.ok){const d=await c.json().catch(()=>({}));return console.warn("[ARES-AI] Error de API Llama/Groq:",c.status,d),{text:`${Lo(i,t)} (Aviso: Error en API Llama ${c.status}, respaldo offline activado).`,source:"offline_fallback",model:"Llama Fallback Offline"}}const h=await c.json();return{text:((l=(a=(r=(o=h==null?void 0:h.choices)==null?void 0:o[0])==null?void 0:r.message)==null?void 0:a.content)==null?void 0:l.trim())||Lo(i,t),source:"llama_api",model:n}}catch(c){return console.warn("[ARES-AI] Fallo de conexión con Groq/Llama:",c),{text:Lo(i,t),source:"offline_fallback",model:"Llama Fallback Offline (Sin Conexión)"}}}function Zu(i){if(!Zn||!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=i.replace(/[\u{1F300}-\u{1F6FF}|[\u{2600}-\u{26FF}]/gu,""),e=new SpeechSynthesisUtterance(t),n=window.speechSynthesis.getVoices(),s=n.find(o=>o.lang.startsWith("es"))||n[0];s&&(e.voice=s),e.rate=1.05,e.pitch=.95,window.speechSynthesis.speak(e)}function Lx(){return Zn=!Zn,localStorage.setItem(ju,Zn?"1":"0"),!Zn&&window.speechSynthesis&&window.speechSynthesis.cancel(),Zn}function Ix(){const i=document.getElementById("copilot-send-btn"),t=document.getElementById("copilot-input");document.getElementById("copilot-messages");const e=document.getElementById("copilot-settings-btn"),n=document.getElementById("copilot-voice-btn"),s=document.querySelectorAll(".copilot-quick-btn"),o=document.getElementById("copilot-modal"),r=document.getElementById("copilot-api-key-input"),a=document.getElementById("copilot-model-select"),l=document.getElementById("copilot-save-key-btn"),c=document.getElementById("copilot-close-modal-btn");n&&(n.classList.toggle("active",Zn),n.textContent=Zn?"🔊 Voz Radio":"🔇 Voz Radio",n.addEventListener("click",()=>{const u=Lx();n.classList.toggle("active",u),n.textContent=u?"🔊 Voz Radio":"🔇 Voz Radio"})),e&&o&&e.addEventListener("click",()=>{r&&(r.value=localStorage.getItem(Ns)||""),a&&(a.value=localStorage.getItem(Qa)||tl),o.classList.remove("hidden")}),c&&o&&c.addEventListener("click",()=>{o.classList.add("hidden")}),l&&o&&r&&l.addEventListener("click",()=>{const u=r.value.trim(),d=a?a.value:tl;u?localStorage.setItem(Ns,u):localStorage.removeItem(Ns),localStorage.setItem(Qa,d),o.classList.add("hidden"),Ps("system",u?`Configuración guardada: Modelo ${d} activado con API Key de Groq/Llama.`:"Clave eliminada: Operando en modo Motor Heurístico Aeroespacial Offline (100% gratuito).")});const h=async(u=null)=>{if(Qr)return;const d=(u!==null?u:(t==null?void 0:t.value)||"").trim();if(d){t&&(t.value=""),Ps("user",d),Qr=!0,ta(!0);try{const p=await Ku(d);ta(!1),Ps("ares",p.text,p.model),Zu(p.text),Ho(p.text)}catch{ta(!1),Ps("ares","Fallo temporal en el canal de radio. Mantén protocolos estándar.")}finally{Qr=!1}}};i&&i.addEventListener("click",()=>h()),t&&t.addEventListener("keydown",u=>{u.key==="Enter"&&h()}),s.forEach(u=>{u.addEventListener("click",()=>{const d=u.dataset.prompt||u.textContent.trim();h(d)})}),Ps("ares","ARES-AI en línea. Monitorizando telemetría PLSS, climatología MEDA y navegación A*/QAOA en tiempo real. Pulsa [C] en 1ª persona para radio directa.",localStorage.getItem(Ns)?"Meta Llama 3 Conectado":"Motor Aeroespacial Offline")}function Ps(i,t,e=""){const n=document.getElementById("copilot-messages");if(!n)return;const s=document.createElement("div");s.className=`copilot-msg ${i}`;const o=document.createElement("div");o.className="copilot-msg-header",i==="user"?o.textContent="ASTRONAUTA // CANAL EVA":i==="system"?o.textContent="SISTEMA // COMMS":o.innerHTML=`🎙️ ARES-AI ${e?`<span class="model-badge">${e}</span>`:""}`;const r=document.createElement("div");r.className="copilot-msg-body",r.textContent=t,s.appendChild(o),s.appendChild(r),n.appendChild(s),n.scrollTop=n.scrollHeight}function ta(i){let t=document.getElementById("copilot-typing");const e=document.getElementById("copilot-messages");i?!t&&e&&(t=document.createElement("div"),t.id="copilot-typing",t.className="copilot-typing",t.innerHTML="<span>.</span><span>.</span><span>.</span> Transmitiendo con Llama 3",e.appendChild(t),e.scrollTop=e.scrollHeight):t&&t.remove()}function Ho(i){const t=document.getElementById("hud-radio-toast"),e=document.getElementById("hud-radio-text");!t||!e||(e.textContent=i,t.classList.remove("hidden"),t.classList.add("visible"),clearTimeout(t._hideTimer),t._hideTimer=setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>t.classList.add("hidden"),350)},9500))}const ks=["slope","metabolic","heart_rate","oxygen","thermal","hydration","radiation"],Ju={classic:{slope:!0,metabolic:!1,heart_rate:!1,oxygen:!1,thermal:!1,hydration:!1,radiation:!1},safety:{slope:!0,metabolic:!0,heart_rate:!0,oxygen:!0,thermal:!0,hydration:!0,radiation:!0},balanced:{slope:!0,metabolic:!0,heart_rate:!0,oxygen:!0,thermal:!1,hydration:!1,radiation:!1},science:{slope:!0,metabolic:!1,heart_rate:!1,oxygen:!0,thermal:!1,hydration:!1,radiation:!1}};class Dx{constructor(){this.a=[]}push(t){this.a.push(t),this._up(this.a.length-1)}pop(){if(this.a.length===0)return null;const t=this.a[0],e=this.a.pop();return this.a.length>0&&(this.a[0]=e,this._down(0)),t}get size(){return this.a.length}_up(t){for(;t>0;){const e=t-1>>1;if(this.a[e].f<=this.a[t].f)break;[this.a[e],this.a[t]]=[this.a[t],this.a[e]],t=e}}_down(t){const e=this.a.length;for(;;){let n=t*2+1,s=t*2+2,o=t;if(n<e&&this.a[n].f<this.a[o].f&&(o=n),s<e&&this.a[s].f<this.a[o].f&&(o=s),o===t)break;[this.a[o],this.a[t]]=[this.a[t],this.a[o]],t=o}}}function Qu(i,t,e){const n=new Map,s=t.cfg.max_safe_slope_deg||25,o=ks.reduce((a,l)=>a+(i[l]?t.cfg.route_weights[l]??.15:0),0),r={...t,cfg:{...t.cfg,health_smoothing_alpha:1}};return function(l,c,h){const u=h>=0?1:-1,d=Math.round(l)*u;if(n.has(d))return n.get(d);const p={walking_time_h:c/t.cfg.walk_speed_ms/3600,slope_deg:l,delta_elev_m:h,surface_distance_m:c,walk_speed_ms:t.cfg.walk_speed_ms,ambient_temp_c:e},g=wl(r,p),v=Zo(g),m={slope:l>s?5+(l-s)*.5:1+(l/s)**2,metabolic:(v.max_metabolic_w/t.cfg.max_sustainable_m_w)**2,heart_rate:(v.max_hr_bpm/t.cfg.hr_max_bpm)**2,oxygen:v.max_metabolic_w/600,thermal:Math.max(0,(v.max_t_core_c-37)/1.5),hydration:v.max_dehydration_pct/(t.cfg.dehydration_warning_pct_body_mass||2),radiation:0};let _=0;for(const M of ks)i[M]&&(_+=(t.cfg.route_weights[M]??.15)*m[M]);const y={factor:o>0?1+_/o:1,components:m};return n.set(d,y),y}}function dh(i){const{sampleElevation:t,sampleSlope:e,resolution_m:n,cols:s,rows:o,start_m:r,goal_m:a,group:l,dimensions:c,options:h={}}=i,u=n||20,d=s*u,p=o*u,g=Math.hypot(a[0]-r[0],a[1]-r[1]),v=h.step_m||Math.max(u,Math.min(100,Math.ceil(g/120))),m=Math.max(16,Math.round(d/v)),_=Math.max(16,Math.round(p/v)),S=h.ambient_temp_c??-63,y=(pt,ht)=>[Math.min(m-1,Math.max(0,Math.round((pt+d/2)/v))),Math.min(_-1,Math.max(0,Math.round((ht+p/2)/v)))],M=(pt,ht)=>[pt*v-d/2,ht*v-p/2],[T,w]=y(r[0],r[1]),[C,P]=y(a[0],a[1]);if(T<0||T>=m||w<0||w>=_||C<0||C>=m||P<0||P>=_)return{path_m:[],metrics:{total_distance_m:0},failed:!0,error:"Start/goal fuera del DEM"};const D=h.window_margin_pct??.4,x=Math.max(30,Math.ceil(Math.hypot(C-T,P-w)*D)),E=Math.max(0,Math.min(T,C)-x),N=Math.min(m-1,Math.max(T,C)+x),U=Math.max(0,Math.min(w,P)-x),F=Math.min(_-1,Math.max(w,P)+x),$=Qu(c,l,S);function V(pt,ht,Lt,I){const[Xt,It]=M(pt,ht),[Ht,At]=M(Lt,I),jt=Ht-Xt,Dt=At-It,R=Math.hypot(jt,Dt);if(R<1e-6)return 0;const b=(Xt+Ht)/2,W=(It+At)/2,K=t(Xt,It),Z=t(Ht,At)-K,Tt=e(b,W),ft=$(Tt,R,Z);return R*ft.factor}const z=w*m+T,O=P*m+C,tt=(pt,ht)=>Math.hypot(pt-C,ht-P)*v,Q=new Map([[z,0]]),it=new Map,Rt=new Set,nt=new Dx;nt.push({c:T,r:w,g:0,f:tt(T,w),key:z});const H=[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]],Y=h.max_iter??2e5;let et=0,ot=!1;for(;nt.size>0&&et++<Y;){const pt=nt.pop();if(!Rt.has(pt.key)){if(Rt.add(pt.key),pt.c===C&&pt.r===P){ot=!0;break}for(const[ht,Lt]of H){const I=pt.c+ht,Xt=pt.r+Lt;if(I<E||I>N||Xt<U||Xt>F)continue;const It=Xt*m+I;if(Rt.has(It))continue;const Ht=V(pt.c,pt.r,I,Xt),At=pt.g+Ht,jt=Q.get(It);jt!==void 0&&At>=jt||(Q.set(It,At),it.set(It,pt.key),nt.push({c:I,r:Xt,g:At,f:At+tt(I,Xt),key:It}))}}}if(!ot)return{path_m:[],failed:!0,iterations:et,error:et>=Y?"A* alcanzó el límite de iteraciones":"Sin camino al destino"};const xt=[];let ct=O;for(;ct!=null;){const pt=ct%m,ht=Math.floor(ct/m);xt.push(M(pt,ht)),ct=it.get(ct)}return xt.reverse(),Ux(xt,t,e,l,c,S)}function Ux(i,t,e,n,s,o){const r=Qu(s,n,o);let a=0,l=0,c=0;const h={},u={};for(const p of ks)h[p]=0,u[p]=0;for(let p=0;p<i.length-1;p++){const[g,v]=i[p],[m,_]=i[p+1],S=m-g,y=_-v,M=Math.hypot(S,y);if(M<1e-6)continue;const T=t(g,v),w=t(m,_),C=e((g+m)/2,(v+_)/2),P=r(C,M,w-T);a+=M,l+=M*P.factor,c=Math.max(c,C);for(const D of ks)s[D]&&(h[D]+=P.components[D]*M,u[D]+=M)}const d={};for(const p of ks)d[p]=u[p]>0?h[p]/u[p]:0;return{path_m:i,metrics:{total_distance_m:a,total_cost:l,max_slope_deg:c},components_avg:d,failed:!1}}function fh(i,t,e,n,s=-63){let o={...n,cfg:{...n.cfg,health_smoothing_alpha:1}},r=0,a=0,l=0,c=0,h=37,u=0,d=0,p=0,g=0;for(let m=0;m<i.length-1;m++){const[_,S]=i[m],[y,M]=i[m+1],T=y-_,w=M-S,C=Math.hypot(T,w);if(C<1e-6)continue;const P=t(_,S),D=t(y,M),x=e((_+y)/2,(S+M)/2),E={walking_time_h:C/n.cfg.walk_speed_ms/3600,slope_deg:x,delta_elev_m:D-P,surface_distance_m:C,walk_speed_ms:n.cfg.walk_speed_ms,ambient_temp_c:s};o=wl(o,E);const N=Zo(o);r+=C,a=Math.max(a,x),l=Math.max(l,N.max_metabolic_w),c=Math.max(c,N.max_hr_bpm),h=Math.max(h,N.max_t_core_c),u=Math.max(u,N.max_dehydration_pct),d+=N.max_metabolic_w,p+=N.max_hr_bpm,g++}const v=Zo(o);return{total_distance_m:r,max_slope_deg:a,peak_metabolic_w:l,mean_metabolic_w:g?d/g:0,peak_hr_bpm:c,mean_hr_bpm:g?p/g:0,peak_t_core_c:h,peak_dehydration_pct:u,o2_used_l:v.sum_o2_consumed_l,o2_remaining_min_l:v.min_o2_remaining_l,energy_kj:v.sum_energy_kj,status:v.status,final_group:v}}function Nx(i,t,e,n,s,o=-63){const r=(i==null?void 0:i.length)>1?fh(i,e,n,s,o):null,a=(t==null?void 0:t.length)>1?fh(t,e,n,s,o):null;if(!r||!a)return{classic:r,health:a,deltas:null};const l=(h,u)=>u===0?0:(h-u)/u*100,c={distance_m:a.total_distance_m-r.total_distance_m,distance_pct:l(a.total_distance_m,r.total_distance_m),max_slope_deg:a.max_slope_deg-r.max_slope_deg,peak_metabolic_w:a.peak_metabolic_w-r.peak_metabolic_w,peak_metabolic_pct:l(a.peak_metabolic_w,r.peak_metabolic_w),peak_hr_bpm:a.peak_hr_bpm-r.peak_hr_bpm,peak_hr_pct:l(a.peak_hr_bpm,r.peak_hr_bpm),o2_used_l:a.o2_used_l-r.o2_used_l,o2_used_pct:l(a.o2_used_l,r.o2_used_l),peak_t_core_c:a.peak_t_core_c-r.peak_t_core_c,peak_dehydration_pct:a.peak_dehydration_pct-r.peak_dehydration_pct,status_changed:a.status!==r.status};return{classic:r,health:a,deltas:c}}const td=document.getElementById("mode-btn"),Fx=document.querySelector(".hint"),ph=document.getElementById("h-slider"),Ox=document.getElementById("h-value"),mh=document.getElementById("hud-elev"),_h=document.getElementById("hud-slope"),Bx=document.getElementById("hud-speed"),zx=document.getElementById("hud-o2"),gh=document.getElementById("hud-o2-pct"),kx=document.getElementById("hud-o2-rate"),Io=document.getElementById("hud-o2-bar"),vh=document.getElementById("hud-flux-bar"),Ls=document.getElementById("hud-slope-alert"),Do=document.getElementById("hud-alert-text"),xh=document.getElementById("hud-status-line"),yh=document.getElementById("hud-dataset-tag"),Mh=document.getElementById("hud-reset-o2"),Sh=document.getElementById("hud-timer"),Eh=document.getElementById("hud-compass-track"),ea=document.getElementById("reticle-slope-fill"),bh=document.getElementById("reticle-segments"),wh=document.getElementById("badge-walk"),Ah=document.getElementById("badge-run"),na=document.getElementById("badge-slope"),ia=document.getElementById("badge-o2"),Qo=document.getElementById("hud-minimap"),Nt=Qo?Qo.getContext("2d"):null,Th=document.getElementById("hud-sci-count"),Ch=document.getElementById("hud-sci-list"),Zi=document.getElementById("hud-interact-prompt"),Rh=document.getElementById("hud-interact-text"),Uo=document.getElementById("hud-science-toast"),Ph=document.getElementById("hud-toast-title"),Lh=document.getElementById("hud-toast-spectrum"),Ih=document.getElementById("hud-toast-desc"),Dh=document.getElementById("hud-toast-source");let sa=null,Ji=0,gi=!0,Dl=0,Gx=0;const mi=new L,Uh=new L,Is=new L,oa=new L,Hx=new L(0,1,0);function Vx(){const i=new cx(Et,pe.domElement);i.target.set(0,0,0),i.enableDamping=!0,i.dampingFactor=.08,i.enableRotate=!1,i.enablePan=!0,i.screenSpacePanning=!0,i.minDistance=30,i.maxDistance=600,i.minPolarAngle=0,i.maxPolarAngle=Math.PI,i.mouseButtons={LEFT:ei.PAN,MIDDLE:ei.DOLLY,RIGHT:null},i.update(),f.orbitControls=i,pe.domElement.addEventListener("contextmenu",n=>n.preventDefault());const t=new wx(Et,pe.domElement);f.fpControls=t,t.addEventListener("lock",()=>document.body.classList.add("fp")),t.addEventListener("unlock",()=>{f.mode==="fp"&&ra()}),td.addEventListener("click",()=>{f.mode==="fp"?ra():Nh()}),ph.addEventListener("input",()=>{const n=parseFloat(ph.value);if(Ox.textContent=n.toFixed(2)+"×",zu(n),rx(),f.astronautGroup){const s=Le(f.astronautGroup.position.x,f.astronautGroup.position.z);s!==null&&(f.astronautGroup.position.y=s,f.astronautPosition.y=s)}}),Mh&&Mh.addEventListener("click",()=>{f.hud.o2Remaining_l=f.fisio.o2_reserve_l,Ul()}),window.addEventListener("keydown",n=>{var s;if(f.mode==="fp"&&(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault(),n.code==="KeyE"&&!n.repeat&&(n.preventDefault(),Yx()),n.code==="KeyT"&&!n.repeat&&(n.preventDefault(),Ou(),((s=f.weather)==null?void 0:s.mode)==="dust_storm"&&Za()),n.code==="KeyC"&&!n.repeat&&(n.preventDefault(),e()),n.code==="KeyM"&&!n.repeat)){n.preventDefault();const o=["oxygen","health","balanced"],r=o.indexOf(f.routeCostMode||"oxygen");f.routeCostMode=o[(r+1)%o.length],console.log("[MarsWalk] Modo de coste de ruta:",f.routeCostMode)}Oe.add(n.code)}),window.addEventListener("keyup",n=>Oe.delete(n.code)),window.addEventListener("blur",()=>Oe.clear());async function e(){var a,l,c,h,u,d;const n=((a=f.weather)==null?void 0:a.mode)==="dust_storm",s=(((l=f.hud)==null?void 0:l.slope_deg)??0)>(((c=f.fisio)==null?void 0:c.max_safe_slope_deg)||25),o=Math.round((((h=f.hud)==null?void 0:h.o2Remaining_l)??580)/(((u=f.fisio)==null?void 0:u.o2_reserve_l)||580)*100);let r="Reporte de situación general y seguridad de misión";n?r="Alerta de tormenta de polvo: ¿cuál es el protocolo de evacuación urgente?":o<30?r="Oxígeno bajo: ¿puedo completar la ruta o debo regresar a la base?":s?r="Pendiente empinada peligrosa: ¿cómo evito el riesgo de resbalamiento?":(d=f.nearestPOI)!=null&&d.poi&&(r=`Sitio cercano detectado (${f.nearestPOI.poi.name}): ¿qué ciencia o muestras debo registrar?`),Ho("Sintonizando radio CAPCOM ARES-AI (Llama 3)...");try{const p=await Ku(r);Ho(p.text),Zu(p.text)}catch{Ho("Canal de radio ARES-AI activo. Telemetría de vuelo nominal.")}}f.hooks.onRecallAstronaut=()=>{f.mode==="fp"&&ra(),f.hud.o2Remaining_l=f.fisio.o2_reserve_l,Dl=0},f.hooks.onVisitPointFP=(n,s)=>{rs(n+5.5,s+12.5),Nh({x:n+2,z:s+1.5})},Nl(),Zx()}const Oe=new Set;function Nh(i=null){if(!f.terrainMesh||f.mode==="fp")return;f.astronautGroup||rs(0,0),f.mode="fp",f.orbitControls.enabled=!1,Oe.clear(),Ji=0,gi=!0,Xu(),Et.up.set(0,1,0);const t=f.astronautPosition.x,e=f.astronautPosition.z;Fv(t,e);const n=Le(t,e);Et.position.x=t,Et.position.z=e,Et.position.y=(n!==null?n:f.astronautPosition.y)+f.fisio.eye_height_m;let s=t*.7,o=e*.7-1;if(i&&typeof i.x=="number"&&typeof i.z=="number")s=i.x,o=i.z;else if(Array.isArray(f.pois)){let a=40;for(const l of f.pois){if(!Array.isArray(l.position_m))continue;const c=Math.hypot(l.position_m[0]-t,l.position_m[1]-e);c>.5&&c<a&&(a=c,s=l.position_m[0],o=l.position_m[1])}}const r=Le(s,o)??n??0;Et.lookAt(s,r+1.4,o),f.astronautGroup&&(f.astronautGroup.visible=!1),Nl(),f.fpControls.lock()}function ra(){if(f.mode!=="fp")return;f.mode="orbit",Oe.clear(),f.fpControls.isLocked&&f.fpControls.unlock(),Bv(),Et.up.set(0,0,-1);const i=f.astronautGroup?f.astronautGroup.position.clone():new L(0,0,0);i.y=0;const t=Math.max(f.terrainWidth,f.terrainDepth),e=new L(i.x,t*1.4,i.z+.001);f.transition={t:0,duration:.8,fromPos:Et.position.clone(),toPos:e,fromTarget:f.orbitControls.target.clone(),toTarget:i,fromUp:Et.up.clone(),toUp:new L(0,0,-1)},f.orbitControls.enabled=!1,f.astronautGroup&&(f.astronautGroup.visible=!0),Nl()}function Wx(i){f.mode==="fp"?(Dl+=i,Xx(i)):f.transition?(Kx(i),Fh()):(f.orbitControls.update(),Fh()),Ul()}function Xx(i){var C,P;const t=Et.position.x,e=Et.position.z,n=be(t,e)??0;Oe.has("Space")&&gi&&(Ji=f.fisio.jump_velocity_ms,gi=!1),Et.getWorldDirection(mi),mi.y=0,mi.lengthSq()<1e-8&&mi.set(0,0,-1),mi.normalize(),Uh.crossVectors(mi,Hx).normalize();let s=0,o=0;(Oe.has("KeyW")||Oe.has("ArrowUp"))&&(s+=1),(Oe.has("KeyS")||Oe.has("ArrowDown"))&&(s-=1),(Oe.has("KeyD")||Oe.has("ArrowRight"))&&(o+=1),(Oe.has("KeyA")||Oe.has("ArrowLeft"))&&(o-=1);const r=Oe.has("ShiftLeft")||Oe.has("ShiftRight"),l=f.hud.o2Remaining_l>0?r?f.fisio.run_speed_ms:f.fisio.walk_speed_ms:0;Is.set(0,0,0).addScaledVector(mi,s).addScaledVector(Uh,o),Is.lengthSq()>0&&l>0&&(Is.normalize().multiplyScalar(l*i),Et.position.x+=Is.x,Et.position.z+=Is.z),Et.position.x=Gt.clamp(Et.position.x,-f.boundsX,f.boundsX),Et.position.z=Gt.clamp(Et.position.z,-f.boundsZ,f.boundsZ),Ov(Et.position.x,Et.position.z);const c=Le(Et.position.x,Et.position.z);if(c!==null){const D=c+f.fisio.eye_height_m;if(gi){const x=D-Et.position.y;if(x<-1.2)gi=!1,Ji=0;else{const E=1-Math.exp(-25*i);Et.position.y+=x*E}}gi||(Ji-=f.fisio.gravity_ms2*i,Et.position.y+=Ji*i,Et.position.y<=D&&(Et.position.y=D,Ji=0,gi=!0)),f.astronautPosition.set(Et.position.x,c,Et.position.z),f.astronautGroup&&f.astronautGroup.position.copy(f.astronautPosition)}const h=Et.position.x,u=Et.position.z,d=be(h,u)??0,p=f.metadata?f.metadata.elevation_range_m[0]:0,g=Math.hypot(h-t,u-e),v=i>1e-5?g/i:0,m=d-n,_=Se(h,u),S=g>1e-4,y=f.fisio.o2_base_consumption_l_per_h,M=((C=f.weather)==null?void 0:C.thermalPenalty)||1;let T=y*.45*M;if(S){const D=lr(_,m),x=r?2.2:1,E=g>0?m/g:0,N=E>0?1+E*4.5:Math.max(.8,1+E*.8);T=y*x*D*N*M}const w=T/3600*i;if(f.hud.o2Remaining_l=Math.max(0,f.hud.o2Remaining_l-w),f.hud.elev_m=p+d,f.hud.slope_deg=_,f.hud.speed_ms=v,f.hud.o2Rate_l_h=T,f.hud.slopeWarning=_>f.fisio.max_safe_slope_deg,f.health){const D=g>.01,x={walking_time_h:i/3600,slope_deg:D?_:0,delta_elev_m:D?m:0,surface_distance_m:D?g:0,walk_speed_ms:D?v:0,ambient_temp_c:((P=f.weather)==null?void 0:P.temp_c)??-63};f.health=wl(f.health,x),f.healthLastAggregate=Zo(f.health)}}function Fh(){if(!f.metadata)return;const i=f.metadata.elevation_range_m[0],t=f.astronautGroup?f.astronautPosition.x:0,e=f.astronautGroup?f.astronautPosition.z:0,n=be(t,e)??0,s=Se(t,e);f.hud.elev_m=i+n,f.hud.slope_deg=s,f.hud.speed_ms=0,f.hud.o2Rate_l_h=0,f.hud.slopeWarning=s>f.fisio.max_safe_slope_deg}function $x(i){const t=Math.floor(i*10),e=t%10,n=Math.floor(t/10),s=n%60,o=Math.floor(n/60)%60,r=Math.floor(n/3600),a=l=>String(l).padStart(2,"0");return`${a(r)}:${a(o)}:${a(s)}.${e}`}function Ul(){var c;if(!f.metadata||!mh)return;const i=f.hud,t=Math.max(f.fisio.o2_reserve_l,1),e=Gt.clamp(i.o2Remaining_l/t*100,0,100),n=f.fisio.max_safe_slope_deg||25;if(mh.textContent=`${i.elev_m.toFixed(0)} m`,_h.textContent=`${i.slope_deg.toFixed(1)}°`,_h.style.color=i.slopeWarning?"#ff3855":"",gh&&(gh.textContent=`${e.toFixed(0)}%`),Bx.textContent=`${i.speed_ms.toFixed(1)} m/s`,zx.textContent=`${i.o2Remaining_l.toFixed(1)} L`,kx.textContent=`${i.o2Rate_l_h.toFixed(1)} L/h`,Sh&&(Sh.textContent=$x(Dl)),yh&&f.datasetId&&(yh.textContent=f.datasetId.toUpperCase()),Io&&(Io.style.width=`${e.toFixed(1)}%`,Io.classList.toggle("low",e<=40&&e>15),Io.classList.toggle("critical",e<=15)),vh){const h=Gt.clamp(i.o2Rate_l_h/220*100,6,100);vh.style.width=`${h.toFixed(0)}%`}if(ea){const h=Gt.clamp(i.slope_deg/(n*1.4)*100,4,100);ea.style.width=`${h.toFixed(0)}%`,ea.style.background=i.slopeWarning?"#ff3855":"#66fcf1"}if(bh){const h=bh.children,u=Math.round(Gt.clamp(i.speed_ms/f.fisio.run_speed_ms*h.length,0,h.length));for(let d=0;d<h.length;d++)h[d].classList.toggle("lit",d<u)}const s=i.speed_ms>f.fisio.walk_speed_ms*1.25;wh&&wh.classList.toggle("active",i.speed_ms>.05),Ah&&Ah.classList.toggle("active",s),na&&(na.classList.toggle("active",!i.slopeWarning&&i.slope_deg>8),na.classList.toggle("danger",i.slopeWarning)),ia&&(ia.classList.toggle("active",e>15),ia.classList.toggle("danger",e<=15));const o=e<=15,r=((c=f.weather)==null?void 0:c.mode)==="dust_storm";Ls&&Do&&(i.slopeWarning?(Ls.hidden=!1,Do.textContent=`Pendiente peligrosa (${i.slope_deg.toFixed(1)}° > ${n}°) · Sobrecosto O₂`):o?(Ls.hidden=!1,Do.textContent=`Reserva de O₂ crítica (${e.toFixed(0)}%) · Recarga requerida`):r?(Ls.hidden=!1,Do.textContent=`TORMENTA DE POLVO (τ=${f.weather.dust_tau}) · Visibilidad reducida · Evacuar a Refugio`):Ls.hidden=!0),xh&&(xh.textContent=i.slopeWarning?"Precaución: terreno escarpado detectado":`Estabilidad nominal · Consumo ${i.o2Rate_l_h.toFixed(0)} L/h`),Et.getWorldDirection(oa);const a=Math.atan2(oa.x,-oa.z),l=(a*180/Math.PI+360)%360;if(Eh){const h=-(l/360*260);Eh.style.transform=`translateX(${h.toFixed(1)}px)`}Nt&&++Gx%4===0&&jx(a),qx(),el()}function el(){const i=performance.now();if(i-(el._lastMs||0)<200)return;el._lastMs=i;const t=document.getElementById("group-status-panel"),e=document.getElementById("group-members-list"),n=document.getElementById("group-status-meta"),s=document.getElementById("group-status-extra");if(!t||!e||!n)return;if(f.mode!=="fp"||!f.healthLastAggregate){t.hidden=!0;return}t.hidden=!1;const o=f.healthLastAggregate,r=o.leaderIndex,a=o.mode==="solo"?"SOLO":`GROUP · ${o.members.length} · ROT ${o.totalRotations}`;if(n.textContent=`${a} · leader: ${o.leaderId??"—"}`,e.innerHTML=o.members.map((l,c)=>{const h=c===r,u=l.flags.o2_depleted||l.flags.over_sustainable_metabolic||l.flags.thermal_critical||l.flags.dehydration_critical?"critical":l.flags.hr_above_85pct_max||l.flags.o2_low||l.flags.thermal_warning||l.flags.dehydration_warning?"warn":"nominal",d=l.role==="leader"?"L":l.role==="follower"?"F":"·",p=typeof l.t_core_c=="number"?`${l.t_core_c.toFixed(1)}°C`:"—",g=typeof l.dehydration_pct_body_mass=="number"?`${l.dehydration_pct_body_mass.toFixed(1)}%`:"—";return`<div class="group-member ${u} ${h?"leader":""}">
      <span class="member-role">${d}</span>
      <span class="member-id">${l.id}</span>
      <span class="member-metric">O₂ ${l.o2_remaining_l.toFixed(0)}L · ${l.heart_rate_bpm.toFixed(0)}bpm · ${l.metabolic_rate_w.toFixed(0)}W · ${p} · ${g}</span>
    </div>`}).join(""),s){const l=(f.routeCostMode||"oxygen").toUpperCase(),c=typeof o.max_t_core_c=="number"?`${o.max_t_core_c.toFixed(1)}`:"—",h=typeof o.max_dehydration_pct=="number"?`${o.max_dehydration_pct.toFixed(1)}`:"—";s.textContent=`MODELO: G2 · RUTA: ${l} · TÉRMICA: ${c}°C · DESHID: ${h}%`}}function qx(){const i=Array.isArray(f.pois)?f.pois:[],t=i.length,e=f.completedPOIs?f.completedPOIs.size:0;if(Th&&(Th.textContent=`${e} / ${t} POIs`),f.mode!=="fp"){Zi&&(Zi.hidden=!0),f.nearestPOI=null;return}const n=Et.position.x,s=Et.position.z;let o=null,r=28;for(const a of i){if(!Array.isArray(a.position_m))continue;const l=Math.hypot(a.position_m[0]-n,a.position_m[1]-s);l<r&&(r=l,o={poi:a,dist_m:l})}if(f.nearestPOI=o,Zi&&Rh)if(o){const{poi:a,dist_m:l}=o,c=f.completedPOIs.has(a.id);Zi.hidden=!1,Zi.className=`hud-interact-prompt ${a.type||"sampling"} ${c?"done":""}`;let h="RECOLECTAR MUESTRA & ESCANEAR ESPECTRO";a.type==="shelter"?h="CONECTAR CON PERSEVERANCE & RECARGAR O₂ EN HÁBITAT":a.type==="hazard"&&(h="REGISTRAR ALERTA GEOTÉCNICA DE TERRENO");const u=c?"✓ RE-INSPECCIONAR":h;Rh.textContent=`${u} · ${a.name} (${l.toFixed(1)} m)`}else Zi.hidden=!0}function Yx(){if(f.mode!=="fp"||!f.nearestPOI)return;const{poi:i}=f.nearestPOI;f.completedPOIs.add(i.id);let t="";if(i.type==="shelter")f.hud.o2Remaining_l=f.fisio.o2_reserve_l,t="⚡ ENLACE SUPERCAM / INGENUITY ACTIVO · RESERVA PLSS O₂ RECARGADA AL 100% (580.0 L)";else if(i.type==="hazard")t=`⚠ TELEMETRÍA GEOTÉCNICA: Pendiente local ${f.hud.slope_deg.toFixed(1)}° · Regolito inestable registrado`;else{const e=["🔬 ESPECTRO CRISM/PIXL: Filosilicatos Fe/Mg + Carbonatos hidratados · Biofirma: ALTA","🔬 ESPECTRO SHERLOC/PIXL: Sulfatos hidratados + Sílice amorfa · Tubo de titanio sellado","🔬 ESPECTRO SUPERCAM LIBS: Olivino alterado + Carbonato de magnesio · Muestra #EVA catalogada"],n=Math.abs(i.id.charCodeAt(i.id.length-1)||0)%e.length;t=e[n]}if(Ch){const e=f.pois.filter(n=>f.completedPOIs.has(n.id)).map(n=>`<div class="sci-log-item">✓ ${n.name}</div>`).join("");Ch.innerHTML=e||"Acércate a un Rover o POI y pulsa [E]"}Uo&&(Uo.hidden=!1,Ph&&(Ph.textContent=`✓ ${i.name.toUpperCase()}`),Lh&&(Lh.textContent=t),Ih&&(Ih.textContent=i.description||""),Dh&&(Dh.textContent=`Misión / Instrumento: ${i.source||"NASA Multi-Mission"}`),sa&&clearTimeout(sa),sa=setTimeout(()=>{Uo&&(Uo.hidden=!0)},6500)),Ul()}function jx(i){const t=Qo.width,e=Qo.height;Nt.clearRect(0,0,t,e),Nt.fillStyle="rgba(6, 16, 20, 0.92)",Nt.fillRect(0,0,t,e);const n=f.astronautGroup?f.astronautPosition.x:Et.position.x,s=f.astronautGroup?f.astronautPosition.z:Et.position.z,o=1e3,r=30,a=18,l=t/r,c=e/a,h=f.fisio.max_safe_slope_deg||25;for(let p=0;p<a;p++){const g=(p/(a-1)-.5)*2*o;for(let v=0;v<r;v++){const m=(v/(r-1)-.5)*2*o,_=n+m,S=s+g,y=Se(_,S),M=be(_,S)??0;if(y>h)Nt.fillStyle="rgba(255, 56, 85, 0.68)",Nt.fillRect(v*l,p*c,l+.5,c+.5);else{const T=Math.floor(M/25)%2===0;Nt.fillStyle=T?"rgba(45, 168, 158, 0.22)":"rgba(20, 80, 78, 0.14)",Nt.fillRect(v*l,p*c,l,c)}}}Nt.strokeStyle="rgba(102, 252, 241, 0.12)",Nt.lineWidth=1;for(let p=30;p<t;p+=30)Nt.beginPath(),Nt.moveTo(p,0),Nt.lineTo(p,e),Nt.stroke();for(let p=26;p<e;p+=26)Nt.beginPath(),Nt.moveTo(0,p),Nt.lineTo(t,p),Nt.stroke();if(f.route&&Array.isArray(f.route.path_m)&&f.route.path_m.length>=2){Nt.strokeStyle="#66fcf1",Nt.lineWidth=2,Nt.beginPath();let p=!1;for(let g=0;g<f.route.path_m.length;g++){const[v,m]=f.route.path_m[g],_=((v-n)/(2*o)+.5)*t,S=((m-s)/(2*o)+.5)*e;p?Nt.lineTo(_,S):(Nt.moveTo(_,S),p=!0)}Nt.stroke()}if(f.poiLayerEnabled&&Array.isArray(f.pois))for(let p=0;p<f.pois.length;p++){const g=f.pois[p];if(!Array.isArray(g.position_m))continue;const[v,m]=g.position_m,_=((v-n)/(2*o)+.5)*t,S=((m-s)/(2*o)+.5)*e;_<-4||_>t+4||S<-4||S>e+4||(Nt.fillStyle=g.type==="hazard"?"#ff3855":g.type==="shelter"?"#55f29b":"#66fcf1",Nt.beginPath(),Nt.arc(_,S,3,0,Math.PI*2),Nt.fill())}const u=t*.5,d=e*.5;Nt.save(),Nt.translate(u,d),Nt.rotate(i),Nt.fillStyle="rgba(246, 201, 69, 0.22)",Nt.beginPath(),Nt.moveTo(0,0),Nt.lineTo(-16,-32),Nt.lineTo(16,-32),Nt.closePath(),Nt.fill(),Nt.fillStyle="#f6c945",Nt.beginPath(),Nt.moveTo(0,-8),Nt.lineTo(6,6),Nt.lineTo(0,3),Nt.lineTo(-6,6),Nt.closePath(),Nt.fill(),Nt.restore()}function Kx(i){const t=f.transition;t.t=Math.min(1,t.t+i/t.duration);const e=t.t<.5?2*t.t*t.t:1-Math.pow(-2*t.t+2,2)/2;Et.position.lerpVectors(t.fromPos,t.toPos,e),f.orbitControls.target.lerpVectors(t.fromTarget,t.toTarget,e),Et.up.lerpVectors(t.fromUp,t.toUp,e).normalize(),Et.lookAt(f.orbitControls.target),t.t>=1&&(f.transition=null,f.orbitControls.enabled=!0,f.orbitControls.update())}function Nl(){const i=f.mode==="fp";td.textContent=i?"Volver a Vista Orbital":"Explorar (1ª Persona)",Fx.textContent=i?"WASD = Moverse · Shift = Correr · Space = Saltar · Ratón = Mirar · E = Analizar · C = Radio · T = Tormenta · M = Modo ruta · ESC = Salir":"Arrastra = Mover mapa · Rueda = Zoom · Clic = Info · Arrastra el astronauta al mapa",document.body.classList.toggle("fp",i)}function Zx(){var h,u;const i=document.getElementById("hrc-preset"),t=document.getElementById("hrc-checkboxes"),e=document.getElementById("hrc-recompute-btn"),n=document.getElementById("hrc-apply-health-btn"),s=document.getElementById("hrc-apply-classic-btn");if(console.log("[MarWalk] initHealthRouteComparator:",{presetSel:!!i,cbWrap:!!t}),!i||!t)return;const o=()=>{t.querySelectorAll("input[data-dim]").forEach(d=>{d.checked=!!f.routeCostDimensions[d.dataset.dim]})},r=()=>{for(const d of t.querySelectorAll("input[data-dim]"))f.routeCostDimensions[d.dataset.dim]=d.checked;f.routeCostPreset="custom",i.value="custom"},a=d=>{const p=Ju[d];p&&(f.routeCostDimensions={...p},f.routeCostPreset=d,o())};i.addEventListener("change",()=>{const d=i.value;d!=="custom"&&(a(d),Ds())}),t.addEventListener("change",()=>{r(),Ds()}),e==null||e.addEventListener("click",()=>ed());const l=()=>{n==null||n.classList.toggle("active",!!f.healthRouteActive),s==null||s.classList.toggle("active",!f.healthRouteActive)};n==null||n.addEventListener("click",()=>{var p;if(!((p=f.healthRouteResult)!=null&&p.health))return;f.healthRouteActive=!0;const d=f.healthRouteResult.health.path_m;Hs({dataset_id:f.datasetId||Yt.DEFAULT_DATASET,algorithm:"health",path_m:d,metrics:f.healthRouteResult.health.metrics}),l(),console.log("[MarWalk] Ruta de salud aplicada al mapa")}),s==null||s.addEventListener("click",()=>{var p;if(!((p=f.healthRouteResult)!=null&&p.classic))return;f.healthRouteActive=!1;const d=f.healthRouteResult.classic.path_m;Hs({dataset_id:f.datasetId||Yt.DEFAULT_DATASET,algorithm:"astar",path_m:d,metrics:f.healthRouteResult.classic.metrics}),l(),console.log("[MarWalk] Ruta clásica restaurada al mapa")});const c=document.getElementById("health-route-compare");c==null||c.addEventListener("toggle",()=>{c.open&&!f.routeComparison&&!f.routeComparisonComputing&&Ds()}),f.hooks.onRouteUpdated=()=>{f.healthRouteActive=!1,l(),Ds()},o(),l(),((u=(h=f.route)==null?void 0:h.path_m)==null?void 0:u.length)>=2&&Ds(),console.log("[MarWalk] Comparador inicializado ✓")}let aa=null;function Ds(){aa&&clearTimeout(aa),aa=setTimeout(()=>ed(),250)}async function ed(){var g,v,m,_,S,y,M;if(f.routeComparisonComputing)return;const i=document.getElementById("hrc-status"),t=document.getElementById("hrc-table-wrap");if(!i)return;if(!((g=f.route)!=null&&g.path_m)||f.route.path_m.length<2){i.textContent="⚠ Fija Inicio y Destino primero";return}const e=f.route.path_m[0],n=f.route.path_m[f.route.path_m.length-1],s=f.health||Uu(),o=(T,w)=>be(T,w)??0,r=(T,w)=>Se(T,w)??0,a=((v=f.metadata)==null?void 0:v.resolution_m)||20,l=(_=(m=f.metadata)==null?void 0:m.shape)==null?void 0:_[1],c=(y=(S=f.metadata)==null?void 0:S.shape)==null?void 0:y[0],h=((M=f.weather)==null?void 0:M.temp_c)??-63;if(!l||!c){i.textContent="⚠ metadata del DEM incompleta";return}f.routeComparisonComputing=!0,i.textContent="Calculando clásica…",await new Promise(T=>setTimeout(T,0));const u=dh({sampleElevation:o,sampleSlope:r,resolution_m:a,cols:l,rows:c,start_m:e,goal_m:n,group:s,dimensions:Ju.classic,options:{ambient_temp_c:h}});if(u.failed){i.textContent=`⚠ Clásica: ${u.error}`,f.routeComparisonComputing=!1;return}i.textContent="Calculando salud…",await new Promise(T=>setTimeout(T,0));const d=dh({sampleElevation:o,sampleSlope:r,resolution_m:a,cols:l,rows:c,start_m:e,goal_m:n,group:s,dimensions:f.routeCostDimensions,options:{ambient_temp_c:h}});if(d.failed){i.textContent=`⚠ Salud: ${d.error}`,f.routeComparisonComputing=!1;return}i.textContent="Comparando…",await new Promise(T=>setTimeout(T,0));const p=Nx(u.path_m,d.path_m,o,r,s,h);f.routeComparison=p,f.healthRouteResult={classic:u,health:d},f.routeComparisonComputing=!1,Jx(p),t&&(t.hidden=!1),i.textContent="✓ Listo"}function Jx(i){const t=document.getElementById("hrc-table-body"),e=document.getElementById("hrc-verdict");if(!t)return;const{classic:n,health:s,deltas:o}=i;if(!n||!s||!o){t.innerHTML='<tr><td colspan="4">Sin datos</td></tr>';return}const r=d=>`${d>0?"+":""}${d.toFixed(1)}%`,a=(d,p=0)=>`${d>0?"+":""}${d.toFixed(p)}`,l=(d,p=!1)=>{const g=d>0,v=p?g:!g;return Math.abs(d)<.5?"delta-neutral":v?"delta-good":"delta-bad"},c=[{label:"Distancia (m)",classic:n.total_distance_m.toFixed(0),health:s.total_distance_m.toFixed(0),delta:a(o.distance_m)+" ("+r(o.distance_pct)+")",cls:l(o.distance_m)},{label:"Pendiente máx (°)",classic:n.max_slope_deg.toFixed(1),health:s.max_slope_deg.toFixed(1),delta:a(o.max_slope_deg,1)+"°",cls:l(o.max_slope_deg)},{label:"Peak M (W)",classic:n.peak_metabolic_w.toFixed(0),health:s.peak_metabolic_w.toFixed(0),delta:a(o.peak_metabolic_w)+" ("+r(o.peak_metabolic_pct)+")",cls:l(o.peak_metabolic_w)},{label:"Peak FC (bpm)",classic:n.peak_hr_bpm.toFixed(0),health:s.peak_hr_bpm.toFixed(0),delta:a(o.peak_hr_bpm)+" ("+r(o.peak_hr_pct)+")",cls:l(o.peak_hr_bpm)},{label:"O₂ usado (L)",classic:n.o2_used_l.toFixed(1),health:s.o2_used_l.toFixed(1),delta:a(o.o2_used_l,1)+" ("+r(o.o2_used_pct)+")",cls:l(o.o2_used_l)},{label:"Peak T_core (°C)",classic:n.peak_t_core_c.toFixed(2),health:s.peak_t_core_c.toFixed(2),delta:a(o.peak_t_core_c,2)+"°C",cls:l(o.peak_t_core_c)},{label:"Deshidrat. máx (%)",classic:n.peak_dehydration_pct.toFixed(2),health:s.peak_dehydration_pct.toFixed(2),delta:a(o.peak_dehydration_pct,2)+"%",cls:l(o.peak_dehydration_pct)},{label:"Estado final",classic:n.status,health:s.status,delta:o.status_changed?"cambió":"igual",cls:s.status==="nominal"?"delta-good":s.status==="critical"?"delta-bad":"delta-neutral"}];t.innerHTML=c.map(d=>`
    <tr>
      <td>${d.label}</td>
      <td>${d.classic}</td>
      <td>${d.health}</td>
      <td class="${d.cls}">${d.delta}</td>
    </tr>
  `).join("");const h=o.distance_m>0?"más larga":"más corta",u=o.peak_metabolic_pct<0?`reduce el peak metabólico en ${Math.abs(o.peak_metabolic_pct).toFixed(0)}%`:"no reduce el peak metabólico";e&&(e.textContent=`La ruta de salud es ${Math.abs(o.distance_m).toFixed(0)} m ${h} (${o.distance_pct>=0?"+":""}${o.distance_pct.toFixed(1)}%) y ${u}. Pendiente máxima: ${n.max_slope_deg.toFixed(1)}° → ${s.max_slope_deg.toFixed(1)}°.`)}let as=!1,Oh=0,yi=null;const nl=11.5,Qx=Array.from({length:180},()=>({x:Math.random(),y:Math.random(),r:.6+Math.random()*1.6,a:.25+Math.random()*.75,p:Math.random()*Math.PI*2}));function ty(){const i=document.getElementById("cinematic-skip-btn"),t=document.getElementById("replay-cinematic-btn");i&&i.addEventListener("click",()=>il()),t&&t.addEventListener("click",()=>Bh()),window.addEventListener("keydown",n=>{as&&(n.code==="Space"||n.code==="Escape"||n.code==="Enter")&&(n.preventDefault(),il())}),new URLSearchParams(window.location.search).get("nointro")!=="1"&&Bh()}function Bh(){const i=document.getElementById("intro-cinematic"),t=document.getElementById("cinematic-canvas");if(!i||!t||f.mode==="fp")return;as=!0,Oh=performance.now(),i.classList.remove("hidden","fade-out"),(()=>{const s=Math.min(window.devicePixelRatio||1,2);t.width=Math.floor(window.innerWidth*s),t.height=Math.floor(window.innerHeight*s)})();const n=s=>{if(!as)return;const o=(s-Oh)/1e3,r=Math.min(1,o/nl);if(ny(t,o,r),ey(o),o>=nl){il();return}yi=requestAnimationFrame(n)};yi&&cancelAnimationFrame(yi),yi=requestAnimationFrame(n)}function il(){if(!as)return;as=!1,yi&&(cancelAnimationFrame(yi),yi=null);const i=Math.max(f.terrainWidth||3e4,f.terrainDepth||3e4);Et.position.set(0,i*1.35,i*.18),f.orbitControls&&(f.orbitControls.target.set(0,0,0),f.orbitControls.update());const t=document.getElementById("intro-cinematic");t&&(t.classList.add("fade-out"),setTimeout(()=>{as||t.classList.add("hidden")},550))}function ey(i){const t=Math.max(f.terrainWidth||3e4,f.terrainDepth||3e4),e=Gt.clamp((i-5.5)/(nl-5.5),0,1),n=1-Math.pow(1-e,3),s=t*2.9,o=t*1.35,r=Gt.lerp(s,o,n),a=(1-n)*1.15,l=Gt.lerp(t*.95,t*.18,n);Et.position.set(Math.sin(a)*l,r,Math.cos(a)*l),f.orbitControls&&(f.orbitControls.target.set(0,0,0),f.orbitControls.update())}function ny(i,t,e){var g,v,m,_,S,y;const n=i.getContext("2d"),s=i.width,o=i.height,r=Math.min(window.devicePixelRatio||1,2),a=document.getElementById("cinematic-phase"),l=document.getElementById("cinematic-title"),c=document.getElementById("cinematic-subtitle"),h=document.getElementById("cinematic-missions"),u=document.getElementById("cinematic-progress-fill");u&&(u.style.width=`${(e*100).toFixed(1)}%`);const d=Gt.clamp((t-7.6)/3.2,0,1),p=1-d*.88;if(n.clearRect(0,0,s,o),n.fillStyle=`rgba(6, 9, 14, ${p.toFixed(3)})`,n.fillRect(0,0,s,o),p>.15)for(const M of Qx){const T=.65+.35*Math.sin(t*2.5+M.p);n.fillStyle=`rgba(215, 232, 255, ${(M.a*T*p).toFixed(3)})`,n.beginPath(),n.arc(M.x*s,M.y*o,M.r*r,0,Math.PI*2),n.fill()}if(t<4.2){const M=Gt.clamp(t/4,0,1);a&&(a.textContent="// ACTO I · TRANSFERENCIA INTERPLANETARIA HOHMANN (T+142 DÍAS)"),l&&(l.textContent="DE LA TIERRA A MARTE · MISIÓN ARES EVA-01"),c&&(c.textContent="Durante décadas, los exploradores robóticos de la NASA (MGS, Odyssey, MRO, Curiosity y Perseverance) cartografiaron un mundo extremo. Hoy, la primera tripulación humana se aproxima al Planeta Rojo."),h&&(h.dataset.stage="1");const T=s*.22,w=o*.5,C=Math.min(s,o)*.085*(1-M*.25),P=s*.78,D=o*.44,x=Math.min(s,o)*(.048+M*.045);n.save(),n.strokeStyle="rgba(102, 252, 241, 0.32)",n.lineWidth=2*r,n.setLineDash([8*r,6*r]),n.beginPath(),n.moveTo(T,w),n.quadraticCurveTo(s*.5,o*.2,P,D),n.stroke(),n.restore();const E=Gt.clamp(.12+M*.82,0,1),N=(1-E)*(1-E)*T+2*(1-E)*E*(s*.5)+E*E*P,U=(1-E)*(1-E)*w+2*(1-E)*E*(o*.2)+E*E*D;n.save(),n.strokeStyle="#66fcf1",n.lineWidth=3*r,n.shadowColor="#66fcf1",n.shadowBlur=12*r,n.beginPath();for(let F=0;F<=24;F++){const $=F/24*E,V=(1-$)*(1-$)*T+2*(1-$)*$*(s*.5)+$*$*P,z=(1-$)*(1-$)*w+2*(1-$)*$*(o*.2)+$*$*D;F===0?n.moveTo(V,z):n.lineTo(V,z)}n.stroke(),n.restore(),la(n,T,w,C,"#1b6ca8","#0a2240","#66fcf1","TIERRA · ORIGEN",r,t),la(n,P,D,x,"#d95f38","#4a180c","#ff8c52","MARTE · DESTINO",r,t*1.3),n.save(),n.fillStyle="#f6c945",n.shadowColor="#f6c945",n.shadowBlur=14*r,n.beginPath(),n.arc(N,U,5*r,0,Math.PI*2),n.fill(),n.font=`600 ${Math.round(11*r)}px ui-monospace, SFMono-Regular, Menlo, monospace`,n.fillStyle="#66fcf1",n.fillText(`▲ ARES-1 · ${(E*54.6).toFixed(1)}M KM`,N-45*r,U-14*r),n.restore()}else if(t<8){const M=Gt.clamp((t-4)/4,0,1),T=((g=f.metadata)==null?void 0:g.label)||"Cráter Jezero";a&&(a.textContent="// ACTO II · INSERCIÓN ORBITAL Y SÍNTESIS MULTICAPA NASA"),l&&(l.textContent=`OBJETIVO FIJADO: ${T.toUpperCase()}`),c&&(c.textContent="Integrando altimetría láser MOLA (MGS), estereofotogrametría CTX/HiRISE (MRO), mineralogía CRISM, inercia térmica THEMIS y estaciones ambientales MEDA (Perseverance) en una sola vista EVA."),h&&(h.dataset.stage="2");const w=s*.5,C=o*.45,P=Math.min(s,o)*(.16+M*.14);la(n,w,C,P,"#d8613a","#3d150a","#ff6a3d","",r,t),n.save(),n.strokeStyle="rgba(102, 252, 241, 0.45)",n.lineWidth=1.5*r,n.setLineDash([6*r,5*r]),n.beginPath(),n.ellipse(w,C,P*1.38,P*.48,-.28,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(246, 201, 69, 0.45)",n.beginPath(),n.ellipse(w,C,P*1.22,P*.85,.45,0,Math.PI*2),n.stroke(),n.restore();const D=w+P*.18,x=C-P*.15,E=(28-M*10)*r;n.save(),n.strokeStyle="#66fcf1",n.lineWidth=2*r,n.beginPath(),n.arc(D,x,E,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(D-E*1.5,x),n.lineTo(D+E*1.5,x),n.moveTo(D,x-E*1.5),n.lineTo(D,x+E*1.5),n.stroke(),n.font=`700 ${Math.round(12*r)}px ui-monospace, SFMono-Regular, Menlo, monospace`,n.fillStyle="#66fcf1",n.fillText(`TARGET LOCK // ${T}`,D+E+10*r,x-4*r),n.fillStyle="#f6c945",n.font=`500 ${Math.round(10.5*r)}px ui-monospace, SFMono-Regular, Menlo, monospace`,n.fillText(`RES: ${((v=f.metadata)==null?void 0:v.resolution_m)??20} m/px · ELEV: [${((_=(m=f.metadata)==null?void 0:m.elevation_range_m)==null?void 0:_[0])??-2710}m, ${((y=(S=f.metadata)==null?void 0:S.elevation_range_m)==null?void 0:y[1])??-1515}m]`,D+E+10*r,x+14*r),n.restore()}else{a&&(a.textContent="// ACTO III · DESCENSO ORBITAL Y DESPLIEGUE EVA"),l&&(l.textContent="ATERRIZAJE COMPLETADO · SISTEMAS PLSS Y RUTEO A*/QAOA EN LÍNEA"),c&&(c.textContent="Planifica tu travesía con capas científicas, evalúa el consumo metabólico de O₂ y haz doble clic en el astronauta para caminar en 1ª persona."),h&&(h.dataset.stage="3");const M=s*.5,T=o*.45,w=Math.min(s,o)*.22;n.save(),n.strokeStyle=`rgba(102, 252, 241, ${(1-d*.7).toFixed(2)})`,n.lineWidth=2*r,n.strokeRect(M-w,T-w*.65,w*2,w*1.3),n.restore()}}function la(i,t,e,n,s,o,r,a,l,c){i.save();const h=i.createRadialGradient(t,e,n*.85,t,e,n*1.35);h.addColorStop(0,`${r}55`),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.beginPath(),i.arc(t,e,n*1.35,0,Math.PI*2),i.fill();const u=i.createRadialGradient(t-n*.35,e-n*.35,n*.1,t,e,n);u.addColorStop(0,s),u.addColorStop(1,o),i.fillStyle=u,i.beginPath(),i.arc(t,e,n,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(255, 255, 255, 0.14)",i.lineWidth=1*l;for(let d=-2;d<=2;d++){const p=((d*.32+c*.08)%1+1)%1-.5;i.beginPath(),i.ellipse(t,e,Math.abs(p)*n*1.8,n*.98,0,0,Math.PI*2),i.stroke()}a&&(i.fillStyle="#e8ecf2",i.font=`700 ${Math.round(11*l)}px system-ui, sans-serif`,i.textAlign="center",i.fillText(a,t,e+n+22*l)),i.restore()}function iy(){const i=document.getElementById("upload-dem-btn"),t=document.getElementById("upload-dem-input"),e=document.getElementById("upload-dem-status");i&&t&&(i.addEventListener("click",()=>t.click()),t.addEventListener("change",async n=>{var o;const s=(o=n.target.files)==null?void 0:o[0];s&&(await zh(s,e),t.value="")})),window.addEventListener("dragover",n=>{n.dataTransfer&&Array.from(n.dataTransfer.types).includes("Files")&&n.preventDefault()}),window.addEventListener("drop",async n=>{var r,a;if(!((a=(r=n.dataTransfer)==null?void 0:r.files)!=null&&a.length))return;const s=n.dataTransfer.files[0],o=s.name.toLowerCase();(o.endsWith(".tif")||o.endsWith(".tiff")||o.endsWith(".f32"))&&(n.preventDefault(),await zh(s,e))})}async function zh(i,t){try{t&&(t.hidden=!1,t.textContent=`Procesando "${i.name}" en tiempo real…`);const e=await i.arrayBuffer(),n=i.name.replace(/\.[^.]+$/,""),s=i.name.toLowerCase();let o;if(s.endsWith(".tif")||s.endsWith(".tiff"))o=sy(e);else if(s.endsWith(".f32"))o=oy(e);else throw new Error("Formato no soportado. Usa un archivo .tif (GeoTIFF Float32) o .f32.");const r=performance.now(),{metadata:a,shelterPos_m:l}=await Zv({datasetId:n.replace(/[^a-zA-Z0-9_-]/g,"_")||"custom_dem",label:`${n} (Tiempo Real)`,rows:o.rows,cols:o.cols,res_m:o.res_m,demFloat32:o.demFloat32,source:s.endsWith(".tif")||s.endsWith(".tiff")?"GeoTIFF Cargado en Vivo":"Float32 Cargado en Vivo",uncertaintyNote:`DEM "${i.name}" (${o.cols}×${o.rows} px, ${o.res_m} m/px) procesado en tiempo real en el navegador.`});l&&rs(l[0],l[1]);const c=(performance.now()-r).toFixed(0);t&&(t.hidden=!1,t.textContent=`✓ ${a.shape[1]}×${a.shape[0]} px (${a.resolution_m} m/px) listo en ${c} ms`)}catch(e){console.error("[Marswalk] Error procesando DEM en tiempo real:",e),t&&(t.hidden=!1,t.textContent=`⚠ ${e.message}`)}}function sy(i){const t=new DataView(i);if(i.byteLength<16)throw new Error("Archivo TIFF demasiado pequeño o corrupto.");const e=String.fromCharCode(t.getUint8(0),t.getUint8(1)),n=e==="II";if(!n&&e!=="MM")throw new Error("Encabezado TIFF inválido (no es II ni MM).");const s=t.getUint16(2,n);if(s!==42)throw new Error(`Magic number TIFF no soportado (${s}).`);const o=t.getUint32(4,n),r=t.getUint16(o,n),a={1:1,2:1,3:2,4:4,5:8,11:4,12:8},l={};for(let T=0;T<r;T++){const w=o+2+T*12,C=t.getUint16(w,n),P=t.getUint16(w+2,n),D=t.getUint32(w+4,n),x=a[P]||1,N=D*x<=4?w+8:t.getUint32(w+8,n);if(P===2){let U="";for(let F=0;F<D;F++){const $=t.getUint8(N+F);$!==0&&(U+=String.fromCharCode($))}l[C]=U}else if(P===3){const U=[];for(let F=0;F<D;F++)U.push(t.getUint16(N+F*2,n));l[C]=D===1?U[0]:U}else if(P===4){const U=[];for(let F=0;F<D;F++)U.push(t.getUint32(N+F*4,n));l[C]=D===1?U[0]:U}else if(P===12){const U=[];for(let F=0;F<D;F++)U.push(t.getFloat64(N+F*8,n));l[C]=D===1?U[0]:U}}const c=Number(l[256]||0),h=Number(l[257]||0),u=Array.isArray(l[258])?l[258][0]:Number(l[258]||32),d=Number(l[259]||1);if(!c||!h)throw new Error("No se encontraron dimensiones válidas en el GeoTIFF.");if(d!==1||u!==32)throw new Error(`Se requiere GeoTIFF Float32 sin compresión (recibido: ${u}-bit, compresión=${d}).`);let p=l[273],g=l[279];Array.isArray(p)||(p=[p]),Array.isArray(g)||(g=[g]);let v=20;Array.isArray(l[33550])&&l[33550][0]>0&&(v=Number(l[33550][0].toFixed(2)));let m=null;if(typeof l[42113]=="string"){const T=parseFloat(l[42113]);Number.isNaN(T)||(m=T)}const _=h*c,S=new Float32Array(_);let y=0;for(let T=0;T<p.length;T++){const w=p[T],C=g[T],P=Math.floor(C/4);for(let D=0;D<P&&y<_;D++)S[y++]=t.getFloat32(w+D*4,n)}let M=1/0;for(let T=0;T<_;T++){const w=S[T];!(!Number.isFinite(w)||m!==null&&Math.abs(w-m)<1||w<-1e10||w>1e10)&&w<M&&(M=w)}Number.isFinite(M)||(M=-2500);for(let T=0;T<_;T++){const w=S[T];(!Number.isFinite(w)||m!==null&&Math.abs(w-m)<1||w<-1e10||w>1e10)&&(S[T]=M)}return{rows:h,cols:c,res_m:v,demFloat32:S}}function oy(i){if(i.byteLength%4!==0)throw new Error("El tamaño del archivo .f32 no es múltiplo de 4 bytes.");const t=new Float32Array(i),e=t.length;let n=Math.round(Math.sqrt(e)),s=Math.floor(e/n);return e===1512*1596&&(n=1512,s=1596),{rows:n,cols:s,res_m:20,demFloat32:t}}async function ry(i){try{const t=await fetch(`data/${i}/config_health.json`);return t.ok?await t.json():null}catch{return null}}async function ay(){const i=xv(),t=await ry(f.datasetId||"jezero_test"),e=t?{...t}:{};delete e.members,delete e.dataset_id,delete e.note,i==="group"&&(t!=null&&t.members)?f.health=vv(t.members,e):f.health=Uu(e),f.healthMode=f.health.mode,console.log("[MarsWalk] Health inicializado:",f.health.mode,f.health.members.length,"miembro(s)")}const kh=new qg;(async()=>{Vx(),await Mv(),tv(200),await ay(),Qv(),ox(),Ix();const i=document.getElementById("loading");i.classList.contains("error")||(i.classList.add("hidden"),iy(),ty()),nd()})();function nd(){requestAnimationFrame(nd);const i=Math.min(kh.getDelta(),.05);nn&&(nn.rotation.y+=.015*i),Wx(i),ax(),Gv(i),nv(i,kh.elapsedTime),Pv(i),pe.render(ae,Et)}
