import{j as e,U as c,q as u,r as o,z as j,m as y,l as p}from"./index.es-43e4d52f.js";import{C as r}from"./ArticleMetadata-ddc82c35.js";import{D as g}from"./Divider-2fbe3d1f.js";import{N as f}from"./NewsletterBlock-f4cbd3dd.js";import{N}from"./NotFoundBlock-5ac1e322.js";import"./ProgressBar-c7f75d54.js";import"./SeparatorCircle-52950513.js";import"./BackLink-ffbe155a.js";import"./TutoTag-00d291b9.js";const m=({introBlock:t,choiceCategoryLabel:a,choiceCategories:s})=>e.jsx(c,{bg:"azure",color:"white",className:"sub-header",children:e.jsx(u,{flexDirection:"column",pt:{xs:"s"},pb:{xs:"l"},justifyContent:{md:"center"},alignItems:{md:"center"},children:e.jsxs(c,{children:[e.jsxs(c,{px:"m",children:[e.jsx(o,{as:"p",size:"m",children:t.title}),e.jsx(o,{as:"p",mt:"xxs-3",size:"xl",className:"sub-header__description",children:t.description}),e.jsx(o,{as:"p",mt:{xs:"s",md:"l"},size:"m",children:a})]}),e.jsx(u,{gap:{xs:"xs",md:"xl"},alignItems:"center",mt:{xs:"s",md:"m"},px:"m",width:"full",className:"sub-header__choice-chip-group",children:s.map(({label:i,isActive:d,...n},l)=>e.jsx(j,{isChoiceChip:!0,variant:d?"primary":"secondary",...n,"data-internal-link":"category",children:i},l))})]})})});try{m.displayName="SubHeader",m.__docgenInfo={description:"",displayName:"SubHeader",props:{introBlock:{defaultValue:null,description:"",name:"introBlock",required:!0,type:{name:"{ title: ReactNode; description: ReactNode; }"}},choiceCategoryLabel:{defaultValue:null,description:"",name:"choiceCategoryLabel",required:!0,type:{name:"ReactNode"}},choiceCategories:{defaultValue:null,description:"",name:"choiceCategories",required:!0,type:{name:'({ label: ReactNode; isActive?: boolean | undefined; } & Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; })[]'}}}}}catch{}const x=({subHeader:t,title:a,postPreviewList:s,newsletterBlock:i})=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t}),e.jsxs(r,{variant:"global",mt:{xs:"l",md:"xl"},children:[e.jsxs(r,{variant:"content",children:[e.jsx(y,{size:"m",my:"m",fontWeight:"medium",children:a}),s]}),e.jsx(r,{children:e.jsx(f,{my:{xs:"xl",md:"xxl"},...i})})]})]});try{x.displayName="PostListPage",x.__docgenInfo={description:"",displayName:"PostListPage",props:{subHeader:{defaultValue:null,description:"",name:"subHeader",required:!0,type:{name:"SubHeaderProps"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},postPreviewList:{defaultValue:null,description:"",name:"postPreviewList",required:!0,type:{name:"ReactNode"}},newsletterBlock:{defaultValue:null,description:"",name:"newsletterBlock",required:!0,type:{name:"NewsletterBlockProps"}}}}}catch{}const h=({backLink:t,title:a,description:s,postPreviewList:i,newsletterBlock:d,searchNotFound:n,isLoading:l=!1})=>e.jsx(r,{variant:"global",children:!l&&n?e.jsx(N,{...n}):e.jsxs(e.Fragment,{children:[e.jsxs(r,{variant:"content",className:"search-page",children:[t,e.jsx(p,{isLoading:l,children:e.jsx(o,{as:"p",mt:"s",size:"l",children:a})}),e.jsx(p,{isLoading:l,children:e.jsx(y,{size:"s",children:s})}),e.jsx(g,{mt:"xs",mb:"l",size:"l",mx:"0",bg:"yellow"}),i]}),e.jsx(r,{children:e.jsx(f,{my:{xs:"xl",md:"xxl"},...d})})]})});try{h.displayName="SearchPage",h.__docgenInfo={description:"",displayName:"SearchPage",props:{backLink:{defaultValue:null,description:"",name:"backLink",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"ReactNode"}},postPreviewList:{defaultValue:null,description:"",name:"postPreviewList",required:!0,type:{name:"ReactNode"}},newsletterBlock:{defaultValue:null,description:"",name:"newsletterBlock",required:!0,type:{name:"NewsletterBlockProps"}},searchNotFound:{defaultValue:null,description:"",name:"searchNotFound",required:!1,type:{name:"NotFoundBlockProps"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}export{x as P,h as S};
//# sourceMappingURL=SearchPage-3a215bdc.js.map
