import{j as e,U as r,q as d,x as R,m as u,z,r as D,V as y,u as W,A as C}from"./index.es-43e4d52f.js";import{a as B}from"./chunk-AY7I2SME-c7b6cf8a.js";import{R as b}from"./index-76fb7be0.js";import T,{AutocompleteFieldWithResult as P}from"./AutocompleteField.stories-27f677d8.js";import{A as $}from"./ArticleMetadata-84243316.js";import"./Divider-2fbe3d1f.js";import"./NewsletterBlock-f4cbd3dd.js";import"./NotFoundBlock-5ac1e322.js";import"./ProgressBar-c7f75d54.js";import"./SeparatorCircle-52950513.js";import"./BackLink-ffbe155a.js";import"./TutoTag-d8b13573.js";import{G as v}from"./constants-0b04ede2.js";import{g as k}from"./assetHelper-ae8c4375.js";const w=({introBlock:a,elevenLabsSiteLink:{label:o,...s},contact:l,socialLinks:c,languageLinks:m})=>e.jsxs(r,{as:"footer",bg:"navy",color:"white",textAlign:{xs:"center",md:"left"},textSize:"s",className:"footer",children:[e.jsxs(d,{flexDirection:{xs:"column",md:"row"},justifyContent:"around",alignItems:"center",pt:{md:"xl"},pb:{md:"xl"},mb:"xl",mx:"s",children:[e.jsxs(r,{mb:"xl",children:[e.jsx(d,{justifyContent:{xs:"center",md:"start"},alignItems:"center",pt:{xs:"l",md:"0"},mb:"xxs",children:e.jsx(R,{name:"website",size:"2.5em"})}),e.jsx(u,{children:a.title}),e.jsx(u,{fontWeight:"bold",mb:"s",children:a.description}),e.jsx(z,{...s,children:o})]}),e.jsxs(r,{children:[e.jsx(D,{as:"p",size:"l",mb:"s",children:l.title}),e.jsx(d,{flexDirection:{xs:"column",md:"row"},gap:{md:"xl"},children:l.list.map((n,t)=>e.jsxs(r,{mb:"m",children:[n.title&&e.jsx(u,{fontWeight:"bold",mb:"xxs-2",children:n.title}),n.description]},t))}),e.jsx(d,{gapY:"s",alignItems:"center",children:c.map(({as:n="a",iconName:t,...i},p)=>e.jsx(n,{...i,target:"_blank",...t==="rss"?{"data-rss-link":!0}:{"data-social-link":t},children:e.jsx(y,{name:t,size:"2.5em",color:"white",mx:"xxs-2",className:"footer__social-icon"})},p))})]})]}),e.jsxs(d,{py:"s",justifyContent:"center",alignItems:"center",className:"footer__language-links-container",children:[e.jsx(r,{mr:"xxs",children:e.jsx(y,{name:"language"})}),m.map(({label:n,isActive:t,...i},p)=>e.jsxs(b.Fragment,{children:[t?e.jsx(u,{fontWeight:"bold",children:n}):e.jsx(W,{...i,"data-internal-link":"home",children:n}),m.length-1!==p&&e.jsx(r,{mx:"s"})]},p))]})]});try{w.displayName="Footer",w.__docgenInfo={description:"",displayName:"Footer",props:{introBlock:{defaultValue:null,description:"",name:"introBlock",required:!0,type:{name:"{ title: ReactNode; description: ReactNode; }"}},elevenLabsSiteLink:{defaultValue:null,description:"",name:"elevenLabsSiteLink",required:!0,type:{name:'{ label: ReactNode; } & Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; }'}},contact:{defaultValue:null,description:"",name:"contact",required:!0,type:{name:"{ title: ReactNode; list: { title?: ReactNode; description: ReactNode; }[]; }"}},socialLinks:{defaultValue:null,description:"",name:"socialLinks",required:!0,type:{name:'({ iconName: "twitter" | "linkedin" | "facebook" | "rss" | "welcometothejungle"; } & Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; })[]'}},languageLinks:{defaultValue:null,description:"",name:"languageLinks",required:!0,type:{name:'({ label: ReactNode; isActive?: boolean | undefined; } & Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; })[]'}}}}}catch{}const f=({homeLink:a,autocomplete:o,autocompleteIsDisplayed:s=!1,onToggleSearch:l})=>{const c=C("aboveTablet");return e.jsx(r,{as:"header",bg:"azure",className:"header",children:e.jsxs(d,{justifyContent:"between",alignItems:"center",py:"s",px:{xs:"m",md:"l"},children:[!c&&s?e.jsx(r,{as:"button",className:"header__icon-button",color:"white",onClick:l,"data-internal-link":"home",children:e.jsx(y,{name:"arrow-back",color:"white",size:"28px"})}):e.jsx(r,{...a,color:"white",children:e.jsx(R,{name:"blog",className:"header__logo"})}),c||s?e.jsx($,{...o}):e.jsx(r,{as:"button",className:"header__icon-button",onClick:l,"aria-label":"Open search",children:e.jsx(y,{name:"search",color:"white",size:"28px"})})]})})};try{f.displayName="Header",f.__docgenInfo={description:"",displayName:"Header",props:{homeLink:{defaultValue:null,description:"",name:"homeLink",required:!0,type:{name:'AsProps<"a">'}},autocomplete:{defaultValue:null,description:"",name:"autocomplete",required:!0,type:{name:"AutocompleteFieldProps"}},autocompleteIsDisplayed:{defaultValue:{value:"false"},description:"",name:"autocompleteIsDisplayed",required:!1,type:{name:"boolean"}},onToggleSearch:{defaultValue:null,description:"",name:"onToggleSearch",required:!1,type:{name:"(() => void)"}}}}}catch{}const _="application/ld+json",L=a=>a==null?void 0:a.map(({text:o,...s},l)=>e.jsx("script",{...s,dangerouslySetInnerHTML:o?{__html:o}:void 0},l)),S=({lang:a,title:o,content:s,metas:l,links:c,styles:m,scripts:n})=>e.jsxs("html",{lang:a,children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"UTF-8"}),e.jsx("meta",{name:"robots",content:"index, follow, noarchive"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e.jsx("meta",{name:"mobile-web-app-capable",content:"yes"}),e.jsx("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),l==null?void 0:l.map((t,i)=>e.jsx("meta",{...t},i)),e.jsx("link",{rel:"shortcut icon",type:"image/x-icon",href:k("/favicon.ico")}),e.jsx("link",{rel:"manifest",href:k("/web-app-manifest.json")}),c==null?void 0:c.map((t,i)=>e.jsx("link",{...t},i)),m==null?void 0:m.map(({text:t,...i},p)=>e.jsx("style",{...i,dangerouslySetInnerHTML:t?{__html:t}:void 0},p)),L(n==null?void 0:n.filter(t=>t.critical&&![_].includes(t.type))),e.jsx("title",{children:o}),L(n==null?void 0:n.filter(t=>_===t.type)),e.jsx("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];"}}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${v}');`}})]}),e.jsxs("body",{children:[e.jsx("noscript",{dangerouslySetInnerHTML:{__html:`<iframe src="https://www.googletagmanager.com/ns.html?id=${v}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}),e.jsx("div",{id:"root",dangerouslySetInnerHTML:{__html:s}}),L(n==null?void 0:n.filter(t=>!t.critical&&![_].includes(t.type)))]})]});try{S.displayName="HtmlTemplate",S.__docgenInfo={description:"",displayName:"HtmlTemplate",props:{lang:{defaultValue:null,description:"",name:"lang",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},metas:{defaultValue:null,description:"",name:"metas",required:!1,type:{name:"MetaHTMLAttributes<HTMLMetaElement>[]"}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"LinkHTMLAttributes<HTMLLinkElement>[]"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"(StyleHTMLAttributes<HTMLStyleElement> & { text: string; })[]"}},scripts:{defaultValue:null,description:"",name:"scripts",required:!1,type:{name:"(ScriptHTMLAttributes<HTMLScriptElement> & { critical?: boolean; text?: string; })[] | undefined"}}}}}catch{}const j=({header:a,footer:o,children:s})=>e.jsxs(d,{flexDirection:"column",minHeight:"screen",children:[a,e.jsx(r,{as:"main",flex:"1",children:s}),e.jsx(w,{...o})]});try{j.displayName="LayoutTemplate",j.__docgenInfo={description:"",displayName:"LayoutTemplate",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!0,type:{name:"FooterProps"}}}}}catch{}const G={title:"Templates/LayoutTemplate",component:j,args:{header:b.createElement(f,{homeLink:{href:"#"},autocomplete:T.args,onToggleSearch:B("toggleSearch")}),footer:{introBlock:{title:"Découvrez Eleven Labs",description:"Notre site pour mieux nous connaître"},elevenLabsSiteLink:{label:"J'y vais"},contact:{title:"Contact",list:[{title:"Eleven Labs - Paris",description:e.jsxs(e.Fragment,{children:["15 avenue de la grande armée",e.jsx("br",{}),"75116"," ",e.jsx(u,{as:"span",textTransform:"uppercase",children:"Paris"})]})},{title:"Eleven Labs - Nantes",description:e.jsxs(e.Fragment,{children:["24 mail des chantiers",e.jsx("br",{}),"844200"," ",e.jsx(u,{as:"span",textTransform:"uppercase",children:"Nantes"})]})},{description:e.jsx(z,{as:"a",href:"https://eleven-labs.com/contact/",children:"Contact"})}]},socialLinks:[{iconName:"rss"},{iconName:"facebook"},{iconName:"twitter"},{iconName:"linkedin"},{iconName:"welcometothejungle"}],languageLinks:[{isActive:!0,label:"Français"},{label:"English"}]},children:e.jsx(r,{textAlign:"center",p:"l",flex:"1",style:{minHeight:"250px"},children:"Content"})},parameters:{layout:"full",viewport:{defaultViewport:"extraSmallScreen"}}},N=a=>e.jsx(j,{...a}),g=N.bind({}),h=N.bind({});h.args={header:b.createElement(f,{homeLink:{href:"#"},autocompleteIsDisplayed:!0,autocomplete:{...T.args,...P.args}})};const x=N.bind({});x.args={header:b.createElement(f,{homeLink:{href:"#"},autocompleteIsDisplayed:!0,autocomplete:{...T.args,...P.args}})};var A,H,I;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:"args => <LayoutTemplate {...args} />",...(I=(H=g.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var V,q,M;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:"args => <LayoutTemplate {...args} />",...(M=(q=h.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var F,E,O;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:"args => <LayoutTemplate {...args} />",...(O=(E=x.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const J=["Overview","LayoutTemplateWithAutocompleteIsOpen","LayoutTemplateWithAutocompleteAndResultNotFound"],ie=Object.freeze(Object.defineProperty({__proto__:null,LayoutTemplateWithAutocompleteAndResultNotFound:x,LayoutTemplateWithAutocompleteIsOpen:h,Overview:g,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{j as L,G as a,ie as b};
//# sourceMappingURL=LayoutTemplate.stories-dab1bd74.js.map
