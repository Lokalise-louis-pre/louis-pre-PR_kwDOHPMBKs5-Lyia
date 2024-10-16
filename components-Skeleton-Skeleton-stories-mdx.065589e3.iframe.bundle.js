"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[4337],{"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,di:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.di,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Skeleton/Skeleton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TemplateCircle:()=>TemplateCircle,TemplateRectangle:()=>TemplateRectangle,TemplateWithFlex:()=>TemplateWithFlex,__namedExportsOrder:()=>__namedExportsOrder,animatedCircle:()=>animatedCircle,animatedRectangle:()=>animatedRectangle,circle:()=>circle,default:()=>Skeleton_stories,layoutWithFlex:()=>layoutWithFlex,rectangle:()=>rectangle});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Skeleton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Skeleton/Skeleton.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Skeleton_module.A,options);const Skeleton_Skeleton_module=Skeleton_module.A&&Skeleton_module.A.locals?Skeleton_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Skeleton=({children,animated=!1,description,className,style})=>(0,jsx_runtime.jsx)("div",{"aria-label":description,className:(0,clsx.A)(Skeleton_Skeleton_module.container,{[Skeleton_Skeleton_module.animated]:animated},className),style,children});Skeleton.displayName="Skeleton",Skeleton.displayName="Skeleton";try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{animated:{defaultValue:{value:"false"},description:"Toggles the animation.",name:"animated",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Adds accessibility label.",name:"description",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node, including `Rectangle` or `Circle` in the container.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}const Circle=({size,className,style,...props})=>(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)(Skeleton_Skeleton_module.circleContainer,className),style:{height:`${size}px`,width:`${size}px`,...style},...props});Circle.displayName="Circle",Circle.displayName="Circle";try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{size:{defaultValue:null,description:"Sets the height and width of the circle.",name:"size",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"src/components/Skeleton/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}const Rectangle=({centered,height,width,className,style,...props})=>(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)(Skeleton_Skeleton_module.rectangleContainer,{[Skeleton_Skeleton_module.centered]:centered},className),style:{height:`${height}px`,width:"string"==typeof width?width:`${width}px`,...style},...props});Rectangle.displayName="Rectangle",Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{centered:{defaultValue:null,description:"Center the Rectangle",name:"centered",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"Set the height of Rectangle.",name:"height",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"Set the width of Rectangle. Can use percentage value.",name:"width",required:!0,type:{name:"string | number"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"src/components/Skeleton/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}const TemplateCircle=args=>{const{circleProps,...rest}=args;return(0,jsx_runtime.jsx)(Skeleton,{...rest,children:(0,jsx_runtime.jsx)(Circle,{...circleProps})})},TemplateRectangle=args=>{const{rectangleProps,...rest}=args;return(0,jsx_runtime.jsx)(Skeleton,{...rest,children:(0,jsx_runtime.jsx)(Rectangle,{...rectangleProps})})},TemplateWithFlex=args=>{const{circleProps,rectangleProps,...rest}=args;return(0,jsx_runtime.jsx)(Skeleton,{...rest,children:(0,jsx_runtime.jsxs)(Flex.s,{gap:2,align:"center",children:[(0,jsx_runtime.jsx)(Circle,{...circleProps}),(0,jsx_runtime.jsx)(Rectangle,{...rectangleProps})]})})};const circle=TemplateCircle.bind({});circle.storyName="Circle",circle.args={description:"Circle",circleProps:{size:30}},circle.parameters={storySource:{source:"args => {\n  const {\n    circleProps,\n    ...rest\n  } = args;\n  return <Skeleton {...rest}>\n\t\t\t<Circle {...circleProps} />\n\t\t</Skeleton>;\n}"}};const rectangle=TemplateRectangle.bind({});rectangle.storyName="Rectangle",rectangle.args={description:"Rectangle",rectangleProps:{height:30,width:80}},rectangle.parameters={storySource:{source:"args => {\n  const {\n    rectangleProps,\n    ...rest\n  } = args;\n  return <Skeleton {...rest}>\n\t\t\t<Rectangle {...rectangleProps} />\n\t\t</Skeleton>;\n}"}};const animatedCircle=TemplateCircle.bind({});animatedCircle.storyName="Animated Circle",animatedCircle.args={animated:!0,description:"Animated Circle",circleProps:{size:30}},animatedCircle.parameters={storySource:{source:"args => {\n  const {\n    circleProps,\n    ...rest\n  } = args;\n  return <Skeleton {...rest}>\n\t\t\t<Circle {...circleProps} />\n\t\t</Skeleton>;\n}"}};const animatedRectangle=TemplateRectangle.bind({});animatedRectangle.storyName="Animated Rectangle",animatedRectangle.args={animated:!0,description:"Animated Rectangle",rectangleProps:{height:30,width:80}},animatedRectangle.parameters={storySource:{source:"args => {\n  const {\n    rectangleProps,\n    ...rest\n  } = args;\n  return <Skeleton {...rest}>\n\t\t\t<Rectangle {...rectangleProps} />\n\t\t</Skeleton>;\n}"}};const layoutWithFlex=TemplateWithFlex.bind({});layoutWithFlex.storyName="Layout with Flex",layoutWithFlex.args={description:"Layout with Flex",circleProps:{size:30},rectangleProps:{height:30,width:80}},layoutWithFlex.parameters={storySource:{source:'args => {\n  const {\n    circleProps,\n    rectangleProps,\n    ...rest\n  } = args;\n  return <Skeleton {...rest}>\n\t\t\t<Flex gap={2} align="center">\n\t\t\t\t<Circle {...circleProps} />\n\t\t\t\t<Rectangle {...rectangleProps} />\n\t\t\t</Flex>\n\t\t</Skeleton>;\n}'}};const componentMeta={title:"Components/Skeleton",parameters:{controls:{sort:"requiredFirst",exclude:["children","skeletonProps"]}},component:Skeleton,subcomponents:{Circle,Rectangle},tags:["stories-mdx"],includeStories:["circle","rectangle","animatedCircle","animatedRectangle","layoutWithFlex"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Components/Skeleton",component:Skeleton,subcomponents:{Circle,Rectangle},parameters:{controls:{sort:"requiredFirst",exclude:["children","skeletonProps"]}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"skeleton",children:"Skeleton"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Skeleton is used to create loading placeholders."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Skeleton exports 3 components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Skeleton"}),": main container component."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Circle"}),": circle with variable diameter."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Rectangle"}),": rectangle with variable dimensions."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Circle, Rectangle, Skeleton } from '@lokalise/louis';\n\nexport default () => (\n\t<Skeleton description=\"loading\" animated>\n\t\t<Circle size={30} />\n\t\t<Rectangle height={30} width={80} />\n\t</Skeleton>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.uY,{of:Skeleton,sort:"requiredFirst",exclude:["as","forwardedAs","ref","theme"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsxs)(dist.Hl,{withSource:"open",children:[(0,jsx_runtime.jsx)(dist.gG,{name:"Circle",args:{description:"Circle",circleProps:{size:30}},children:TemplateCircle.bind({})}),(0,jsx_runtime.jsx)(dist.gG,{name:"Rectangle",args:{description:"Rectangle",rectangleProps:{height:30,width:80}},children:TemplateRectangle.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"animated",children:"Animated"}),"\n",(0,jsx_runtime.jsxs)(dist.Hl,{withSource:"open",children:[(0,jsx_runtime.jsx)(dist.gG,{name:"Animated Circle",args:{animated:!0,description:"Animated Circle",circleProps:{size:30}},children:TemplateCircle.bind({})}),(0,jsx_runtime.jsx)(dist.gG,{name:"Animated Rectangle",args:{animated:!0,description:"Animated Rectangle",rectangleProps:{height:30,width:80}},children:TemplateRectangle.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"layout-with-flex",children:"Layout with Flex"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Layout with Flex",args:{description:"Layout with Flex",circleProps:{size:30},rectangleProps:{height:30,width:80}},children:TemplateWithFlex.bind({})})})]})}}};const Skeleton_stories=componentMeta,__namedExportsOrder=["TemplateCircle","TemplateRectangle","TemplateWithFlex","circle","rectangle","animatedCircle","animatedRectangle","layoutWithFlex"]},"./src/components/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Flex});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"Flex__Container",componentId:"sc-1rxy4x6-0"})(["display:flex;gap:"," ",";max-width:100%;width:",";align-items:",";justify-content:",";flex-wrap:",";flex-direction:",";flex-basis:",";flex-grow:",";flex-shrink:",";align-self:",";",""],(({$rowGap})=>(0,theme.YK)($rowGap)),(({$columnGap})=>(0,theme.YK)($columnGap)),(({$fullWidth})=>$fullWidth?"100%":"inherit"),(({$alignItems})=>$alignItems),(({$justifyContent})=>$justifyContent),(({$flexWrap})=>$flexWrap),(({$flexDirection})=>$flexDirection),(({$basis})=>$basis),(({$grow})=>$grow),(({$shrink})=>$shrink),(({$alignSelf})=>$alignSelf),(0,modifier.W)("$inline",styled_components_browser_esm.AH`
			display: inline-flex;
		`));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=(0,react.forwardRef)((({inline=!1,fullWidth=!1,align="flex-start",justify="flex-start",wrap="wrap",direction="row",gap=0,basis,grow,shrink,alignSelf,children,as="div",...rest},ref)=>{const rowGap="number"==typeof gap?gap:gap[0],columnGap="number"==typeof gap?gap:gap[1];return(0,jsx_runtime.jsx)(Container,{...rest,ref,$inline:inline,$fullWidth:fullWidth,$flexDirection:direction,$alignItems:align,$justifyContent:justify,$flexWrap:wrap,$rowGap:rowGap,$columnGap:columnGap,$basis:basis,$grow:grow,$shrink:shrink,$alignSelf:alignSelf,as,children})}));Flex.displayName="Flex";try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{inline:{defaultValue:{value:"false"},description:"Toggles inline-flex.",name:"inline",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"flex-start"},description:"Sets align-items.",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:{value:"flex-start"},description:"Sets justify-content.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"wrap"},description:"Sets flex-wrap.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},direction:{defaultValue:{value:"row"},description:"Sets flex-direction.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"row"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},gap:{defaultValue:{value:"0"},description:"Sets gap, or row-gap and column-gap, using theme spacing.",name:"gap",required:!1,type:{name:"SpacingLevels | [rowGap: SpacingLevels, columnGap: SpacingLevels]"}},basis:{defaultValue:null,description:"Sets flex-basis when used as a child of another flex container.",name:"basis",required:!1,type:{name:"FlexBasis<0 | (string & {})>"}},grow:{defaultValue:null,description:"Sets flex-grow when used as a child of another flex container.",name:"grow",required:!1,type:{name:"FlexGrow"}},shrink:{defaultValue:null,description:"Sets flex-shrink when used as a child of another flex container.",name:"shrink",required:!1,type:{name:"FlexShrink"}},alignSelf:{defaultValue:null,description:"Sets align-self when used as a child of another flex container.",name:"alignSelf",required:!1,type:{name:"AlignSelf"}},fullWidth:{defaultValue:{value:"false"},description:"Fills the width available in the parent.",name:"fullWidth",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Renders any flex items in the flex container.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:{value:"div"},description:"Sets the HTML element to render for the flex container.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"li"'},{value:'"section"'},{value:'"span"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Skeleton/Skeleton.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@keyframes feuHQnQSuIRm5vFeSPvv {\n\t0% {\n\t\topacity: 0.3;\n\t}\n\n\t50% {\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\topacity: 0.3;\n\t}\n}\n\n.eZuWANpHsEZ6HHbzP09z {\n\tanimation-duration: 1.5s;\n\tanimation-iteration-count: infinite;\n\n\t&.zgWBq5SEDi8SfmM4cPUQ {\n\t\tanimation-name: feuHQnQSuIRm5vFeSPvv;\n\t\tanimation-duration: 1.5s;\n\t\tanimation-iteration-count: infinite;\n\t}\n}\n\n.flcqVIbwrZRXd7UgFguN {\n\tborder-radius: 50%;\n\tbackground-color: var(--lok-color-background-disabled);\n}\n\n.VgA_5tKdXHaUPBrgwkLA {\n\tborder-radius: var(--lok-radius-m);\n\tbackground-color: var(--lok-color-background-disabled);\n\n\t.mK4br5Xr3za1X1nb6vds {\n\t\tmargin: 0 auto;\n\t}\n}\n","",{version:3,sources:["webpack://./src/components/Skeleton/Skeleton.module.css"],names:[],mappings:"AAAA;CACC;EACC,YAAY;CACb;;CAEA;EACC,UAAU;CACX;;CAEA;EACC,YAAY;CACb;AACD;;AAEA;CACC,wBAAwB;CACxB,mCAAmC;;CAEnC;EACC,oCAAiC;EACjC,wBAAwB;EACxB,mCAAmC;CACpC;AACD;;AAEA;CACC,kBAAkB;CAClB,sDAAsD;AACvD;;AAEA;CACC,kCAAkC;CAClC,sDAAsD;;CAEtD;EACC,cAAc;CACf;AACD",sourcesContent:["@keyframes loading-animation {\n\t0% {\n\t\topacity: 0.3;\n\t}\n\n\t50% {\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\topacity: 0.3;\n\t}\n}\n\n.container {\n\tanimation-duration: 1.5s;\n\tanimation-iteration-count: infinite;\n\n\t&.animated {\n\t\tanimation-name: loading-animation;\n\t\tanimation-duration: 1.5s;\n\t\tanimation-iteration-count: infinite;\n\t}\n}\n\n.circleContainer {\n\tborder-radius: 50%;\n\tbackground-color: var(--lok-color-background-disabled);\n}\n\n.rectangleContainer {\n\tborder-radius: var(--lok-radius-m);\n\tbackground-color: var(--lok-color-background-disabled);\n\n\t.centered {\n\t\tmargin: 0 auto;\n\t}\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"eZuWANpHsEZ6HHbzP09z","loading-animation":"feuHQnQSuIRm5vFeSPvv",animated:"zgWBq5SEDi8SfmM4cPUQ",circleContainer:"flcqVIbwrZRXd7UgFguN",rectangleContainer:"VgA_5tKdXHaUPBrgwkLA",centered:"mK4br5Xr3za1X1nb6vds"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);