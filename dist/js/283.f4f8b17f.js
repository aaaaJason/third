"use strict";(self["webpackChunksecond"]=self["webpackChunksecond"]||[]).push([[283],{8366:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n=function(){var e=this,t=e._self._c;return t("MyLeave")},l=[],s=a(5365),r=a(1308),i=a(2919),o=a(5786),c=a(4636),d=a(490),m=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("我要請假")]),t(o.A,{attrs:{items:e.categoryOptions,label:"類別"},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}),t(i.A,{attrs:{"max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function({on:a}){return[t(c.A,e._g({ref:"startDT",attrs:{label:"開始時間",readonly:""},model:{value:e.startDateTime,callback:function(t){e.startDateTime=t},expression:"startDateTime"}},a))]}}]),model:{value:e.startDialog,callback:function(t){e.startDialog=t},expression:"startDialog"}},[t(r.A,{model:{value:e.startdate,callback:function(t){e.startdate=t},expression:"startdate"}}),t(d.A,{model:{value:e.starttime,callback:function(t){e.starttime=t},expression:"starttime"}}),t(s.A,{attrs:{color:"primary"},on:{click:e.saveStartDateTime}},[e._v("儲存")])],1),t(i.A,{attrs:{"max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function({on:a}){return[t(c.A,e._g({ref:"endDT",attrs:{label:"結束時間",readonly:""},model:{value:e.endDateTime,callback:function(t){e.endDateTime=t},expression:"endDateTime"}},a))]}}]),model:{value:e.endDialog,callback:function(t){e.endDialog=t},expression:"endDialog"}},[t(r.A,{model:{value:e.enddate,callback:function(t){e.enddate=t},expression:"enddate"}}),t(d.A,{model:{value:e.endtime,callback:function(t){e.endtime=t},expression:"endtime"}}),t(s.A,{attrs:{color:"primary"},on:{click:e.saveEndDateTime}},[e._v("儲存")])],1),t(o.A,{attrs:{items:e.agentOptions,label:"代理人"},model:{value:e.agent,callback:function(t){e.agent=t},expression:"agent"}}),t(c.A,{attrs:{label:"備註","multi-line":"",rows:"3"},model:{value:e.remarks,callback:function(t){e.remarks=t},expression:"remarks"}}),t(s.A,{attrs:{color:"primary"},on:{click:e.submit}},[e._v("確認送出")]),t(s.A,{attrs:{color:"error"},on:{click:e.clear}},[e._v("清空")])],1)},u=[],v={name:"NewPage",data(){return{category:null,categoryOptions:["類別1","類別2","類別3"],startDialog:!1,endDialog:!1,agent:null,agentOptions:["代理人1","代理人2","代理人3"],remarks:""}},methods:{submit(){},clear(){this.category=null,this.startdate="",this.starttime="",this.startdateTime="",this.enddate="",this.endtime="",this.enddateTime="",this.agent=null,this.remarks="",this.$refs.startDT.clearableCallback(),this.$refs.endDT.clearableCallback()},saveStartDateTime(){this.startDateTime=`${this.startdate} ${this.starttime}`,this.startDialog=!1},saveEndDateTime(){this.endDateTime=`${this.enddate} ${this.endtime}`,this.endDialog=!1}}},f=v,h=a(1656),k=(0,h.A)(f,m,u,!1,null,null,null),g=k.exports,p={name:"myleave",components:{MyLeave:g}},D=p,b=(0,h.A)(D,n,l,!1,null,null,null),T=b.exports}}]);
//# sourceMappingURL=283.f4f8b17f.js.map