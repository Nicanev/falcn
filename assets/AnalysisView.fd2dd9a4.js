import{d as a,_ as e,o,c as l,a as s,n as i}from"./index.45296421.js";const _=a({data(){return{loadingNum:0}},methods:{loading(){setInterval(()=>{this.loadingNum<100&&(this.loadingNum+=1)},60)}}});const c={class:"analysis"},d={class:"analysis__container"},u=s("span",{class:"btn__content"},null,-1),r=s("span",{class:"btn__text"},"\u0410\u041D\u0410\u041B\u0418\u0417",-1),p=s("span",{class:"btn__glitch"},null,-1);function m(n,t,g,h,y,f){return o(),l("div",c,[s("div",d,[s("button",{class:"analysis__btn btn",onClick:t[0]||(t[0]=b=>n.loading())},[u,r,p,s("span",{class:"btn__loading",style:i({width:n.loadingNum+"%"})},null,4)])])])}const N=e(_,[["render",m]]);export{N as default};