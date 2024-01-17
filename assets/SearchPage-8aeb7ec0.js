import{j as e,U as o,q as p,r as c,z as g,m as u,l as x}from"./index.es-43e4d52f.js";import{C as i,a as j}from"./ArticleMetadata-84243316.js";import{D as N}from"./Divider-2fbe3d1f.js";import{N as f}from"./NewsletterBlock-f4cbd3dd.js";import{N as _}from"./NotFoundBlock-5ac1e322.js";import"./ProgressBar-c7f75d54.js";import"./SeparatorCircle-52950513.js";import"./BackLink-ffbe155a.js";import"./TutoTag-d8b13573.js";const m=({introBlock:t,choiceCategoryLabel:s,choiceCategories:l})=>e.jsx(o,{bg:"azure",color:"white",className:"sub-header",children:e.jsx(p,{flexDirection:"column",pt:{xs:"s"},pb:{xs:"l"},justifyContent:{md:"center"},alignItems:{md:"center"},children:e.jsxs(o,{children:[e.jsxs(o,{px:"m",children:[e.jsx(c,{as:"p",size:"m",children:t.title}),e.jsx(c,{as:"p",mt:"xxs-3",size:"xl",className:"sub-header__description",children:t.description}),e.jsx(c,{as:"p",mt:{xs:"s",md:"l"},size:"m",children:s})]}),e.jsx(p,{gap:{xs:"xs",md:"xl"},alignItems:"center",mt:{xs:"s",md:"m"},px:"m",width:"full",className:"sub-header__choice-chip-group",children:l.map(({label:n,isActive:r,...a},d)=>e.jsx(g,{isChoiceChip:!0,variant:r?"primary":"secondary",...a,"data-internal-link":"category",children:n},d))})]})})});try{m.displayName="SubHeader",m.__docgenInfo={description:"",displayName:"SubHeader",props:{introBlock:{defaultValue:null,description:"",name:"introBlock",required:!0,type:{name:"{ title: ReactNode; description: ReactNode; }"}},choiceCategoryLabel:{defaultValue:null,description:"",name:"choiceCategoryLabel",required:!0,type:{name:"ReactNode"}},choiceCategories:{defaultValue:null,description:"",name:"choiceCategories",required:!0,type:{name:'({ label: ReactNode; isActive?: boolean | undefined; } & Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; })[]'}}}}}catch{}const h=({subHeader:t,title:s,postPreviewList:l,newsletterBlock:n,highlightedPost:r,highlightedPostTitle:a})=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t}),e.jsxs(i,{variant:"global",mt:{xs:"l",md:"xl"},children:[e.jsxs(i,{variant:"content",children:[r&&e.jsxs(o,{mb:"xl",children:[e.jsx(u,{size:"m",my:"s",fontWeight:"medium",children:a}),e.jsx(j,{...r,isHighlighted:!0})]}),e.jsx(u,{size:"m",my:"m",fontWeight:"medium",children:s}),l]}),e.jsx(i,{children:e.jsx(f,{my:{xs:"xl",md:"xxl"},...n})})]})]});try{h.displayName="PostListPage",h.__docgenInfo={description:"",displayName:"PostListPage",props:{subHeader:{defaultValue:null,description:"",name:"subHeader",required:!0,type:{name:"SubHeaderProps"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},postPreviewList:{defaultValue:null,description:"",name:"postPreviewList",required:!0,type:{name:"ReactNode"}},newsletterBlock:{defaultValue:null,description:"",name:"newsletterBlock",required:!0,type:{name:"NewsletterBlockProps"}},highlightedPost:{defaultValue:null,description:"",name:"highlightedPost",required:!1,type:{name:"PostPreviewProps"}},highlightedPostTitle:{defaultValue:null,description:"",name:"highlightedPostTitle",required:!1,type:{name:"string"}}}}}catch{}const y=({backLink:t,title:s,description:l,postPreviewList:n,newsletterBlock:r,searchNotFound:a,isLoading:d=!1})=>e.jsx(i,{variant:"global",children:!d&&a?e.jsx(_,{...a}):e.jsxs(e.Fragment,{children:[e.jsxs(i,{variant:"content",className:"search-page",children:[t,e.jsx(x,{isLoading:d,children:e.jsx(c,{as:"p",mt:"s",size:"l",children:s})}),e.jsx(x,{isLoading:d,children:e.jsx(u,{size:"s",children:l})}),e.jsx(N,{mt:"xs",mb:"l",size:"l",mx:"0",bg:"yellow"}),n]}),e.jsx(i,{children:e.jsx(f,{my:{xs:"xl",md:"xxl"},...r})})]})});try{y.displayName="SearchPage",y.__docgenInfo={description:"",displayName:"SearchPage",props:{backLink:{defaultValue:null,description:"",name:"backLink",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"ReactNode"}},postPreviewList:{defaultValue:null,description:"",name:"postPreviewList",required:!0,type:{name:"ReactNode"}},newsletterBlock:{defaultValue:null,description:"",name:"newsletterBlock",required:!0,type:{name:"NewsletterBlockProps"}},searchNotFound:{defaultValue:null,description:"",name:"searchNotFound",required:!1,type:{name:"NotFoundBlockProps"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}export{h as P,y as S};
//# sourceMappingURL=SearchPage-8aeb7ec0.js.map
