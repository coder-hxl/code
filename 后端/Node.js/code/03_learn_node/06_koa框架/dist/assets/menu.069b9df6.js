import{u as n,p as i,_ as p}from"./use-page-modal.53da0862.js";import{r}from"./reactive-width.78941a43.js";import{_ as d,d as s,o as c,c as f,e as u,f as e}from"./index.38f45ce1.js";const m={title:{text:"\u83DC\u5355\u5217\u8868",btnText:"\u521B\u5EFA\u83DC\u5355"},showFooter:!1,propList:[{label:"\u83DC\u5355\u540D\u79F0",prop:"name",minWidth:"100"},{label:"\u7C7B\u578B",prop:"type",minWidth:"100"},{label:"\u83DC\u5355url",prop:"url",minWidth:"100"},{label:"\u6309\u94AE\u6743\u9650",prop:"permission",minWidth:"100"},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createAt",minWidth:"250",slotName:"createAt"},{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateAt",minWidth:"250",slotName:"updateAt"},{label:"\u64CD\u4F5C",minWidth:"130",slotName:"handle"}],childrenProps:{rowKey:"id",treeProps:{children:"children"}}},C={title:"\u83DC\u5355",formConfig:{labelWidth:r("90px","120px"),itemStyle:{},colLayout:{},formItems:[{field:"name",type:"input",label:"\u83DC\u5355\u540D",placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D"},{field:"type",type:"input",label:"\u7C7B\u578B",placeholder:"\u8BF7\u8F93\u5165\u7C7B\u578B"},{field:"url",type:"input",label:"\u8DEF\u5F84",placeholder:"\u8BF7\u8F93\u5165\u8DEF\u5F84"},{field:"sort",type:"input",label:"\u79CD\u7C7B",placeholder:"\u8BF7\u8F93\u5165\u79CD\u7C7B"},{field:"parentId",type:"input",label:"\u4E0A\u7EA7\u83DC\u5355Id",placeholder:"\u8BF7\u8F93\u5165\u4E0A\u7EA7\u83DC\u5355Id"}]}};const _={class:"menu"},F=s({setup(h){const{pageModalRef:t,defaultInfo:l,handleEditData:a,handleNewData:o}=n();return(B,D)=>(c(),f("div",_,[u(e(i),{ref:"pageContentRef",contentTableConfig:e(m),pageName:"menu",onEditBtnClick:e(a),onNewBtnClick:e(o)},null,8,["contentTableConfig","onEditBtnClick","onNewBtnClick"]),u(e(p),{ref_key:"pageModalRef",ref:t,pageName:"menu",defaultInfo:e(l),modalConfig:e(C)},null,8,["defaultInfo","modalConfig"])]))}});var E=d(F,[["__scopeId","data-v-67b29c12"]]);export{E as default};
