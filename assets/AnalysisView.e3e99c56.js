import{C as u,p as _,a as m,b as h,L as g,c as p,P as C,d as f,e as i,f as o,h as y,_ as b,o as n,g as l,i as r,r as L,j as s,t as N,n as v,k}from"./index.b5a9fbd0.js";u.register(_,m,h,g,p,C,f);u.defaults.color="#C94C48";const w=i({name:"LineChart",components:{Line:o},props:{chartId:{type:String,default:"line-chart"},width:{type:Number,default:700},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},setup(t){const e={labels:["1m","2m","3m","4m","5m","6m","7m","8m","9m","10m"],datasets:[{label:"\u041E\u0442\u043A\u0430\u0437\u0430\u043D\u043E \u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u0435",backgroundColor:"#36F4F0",tension:.1,fill:!1,borderColor:"#36F4F0",data:[0,0,1,2,0,3,0,1,0,2]},{label:"\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043C\u0430\u0440\u0448\u0440\u0443\u0442",backgroundColor:"#C94C48",tension:.1,fill:!1,borderColor:"#C94C48",data:[1,2,0,0,0,1,3,1,2,3]}]},a={responsive:!0,maintainAspectRatio:!1};return()=>y(o,{chartData:e,chartOptions:a,chartId:t.chartId,width:t.width,height:t.height,cssClasses:t.cssClasses,styles:t.styles,plugins:t.plugins})}}),D={name:"line",components:{LineChart:w}},E={class:"analysis-chart"};function $(t,e,a,c,j,O){const d=L("LineChart");return n(),l("div",E,[r(d)])}const A=b(D,[["render",$]]),S={class:"analysis"},x={class:"analysis__container"},B=s("span",{class:"btn__content"},null,-1),F={class:"btn__text"},V=s("span",{class:"btn__glitch"},null,-1),I={key:0,class:"analysis__chart"},T=i({data(){return{loadingNum:0,loadingText:"\u0410\u043D\u0430\u043B\u0438\u0437",isCompleteLoading:!1}},methods:{loading(){setInterval(()=>{this.loadingNum<100&&(this.loadingNum+=1)},50)}},watch:{loadingNum(){this.loadingNum==100&&(this.loadingText="\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E!",this.isCompleteLoading=!0)}}}),z=i({...T,__name:"AnalysisView",setup(t){return(e,a)=>(n(),l("div",S,[s("div",x,[s("button",{class:"analysis__btn btn",onClick:a[0]||(a[0]=c=>e.loading())},[B,s("span",F,N(e.loadingText),1),V,s("span",{class:"btn__loading",style:v({width:e.loadingNum+"%"})},null,4)]),e.isCompleteLoading?(n(),l("div",I,[r(A)])):k("",!0)])]))}});export{z as default};