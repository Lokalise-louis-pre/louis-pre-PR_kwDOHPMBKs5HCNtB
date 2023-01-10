"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[818],{"./src/components/Skeleton/Skeleton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TemplateCircle:()=>TemplateCircle,TemplateRectangle:()=>TemplateRectangle,TemplateWithFlex:()=>TemplateWithFlex,__namedExportsOrder:()=>__namedExportsOrder,animatedCircle:()=>animatedCircle,animatedRectangle:()=>animatedRectangle,circle:()=>circle,default:()=>Skeleton_stories,layoutWithFlex:()=>layoutWithFlex,rectangle:()=>rectangle});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./src/utils/theme/modifier.ts");const LoadingAnimation=styled_components_browser_esm.F4`
    0% {
        opacity: .3;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: .3;
    }
`,Container=styled_components_browser_esm.ZP.div`
	width: 100%;
	${(0,modifier.c)("animated",styled_components_browser_esm.iv`
			animation-name: ${LoadingAnimation};
			animation-duration: 1.5s;
			animation-iteration-count: infinite;
		`)}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Skeleton=_ref=>{let{children,animated=!1,description,className}=_ref;return(0,jsx_runtime.jsx)(Container,{animated,"aria-label":description,className,children})};Skeleton.displayName="Skeleton",Skeleton.displayName="Skeleton";try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{animated:{defaultValue:{value:"false"},description:"Toggles the animation.",name:"animated",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Adds accessibility label.",name:"description",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node, including `Rectangle` or `Circle` in the container.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}var excludeProps=__webpack_require__("./src/utils/theme/excludeProps.ts"),color=__webpack_require__("./src/utils/theme/color.ts");const Circle=styled_components_browser_esm.ZP.div.withConfig({shouldForwardProp:(0,excludeProps.L)(["radius","size"])})`
	height: ${_ref=>{let{radius=0,size=2*radius}=_ref;return size}}px;
	width: ${_ref2=>{let{radius=0,size=2*radius}=_ref2;return size}}px;
	border-radius: 50%;
	background-color: ${(0,color.$)("content.disabled")};
`;Circle.displayName="Circle";try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},size:{defaultValue:null,description:"Sets the height and width of the circle.",name:"size",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"**Deprecated:** use size instead.\n@deprecated in favour of `size`.\n@deprecated in favour of `size`.",name:"radius",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"src/components/Skeleton/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}var radius=__webpack_require__("./src/utils/theme/radius.ts");const Rectangle=styled_components_browser_esm.ZP.div.withConfig({shouldForwardProp:(0,excludeProps.L)(["height","width","centered"])})`
	height: ${_ref=>{let{height}=_ref;return height}}px;
	width: ${_ref2=>{let{width}=_ref2;return"string"==typeof width?width:`${width}px`}};
	border-radius: ${(0,radius.q)("md")};
	background-color: ${(0,color.$)("content.disabled")};
	${(0,modifier.c)("centered",styled_components_browser_esm.iv`
			margin: 0 auto;
		`)};
`;Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},height:{defaultValue:null,description:"Set the height of Rectangle.",name:"height",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"Set the width of Rectangle. Can use percentage value.",name:"width",required:!0,type:{name:"string | number"}},centered:{defaultValue:null,description:"Center the Rectangle",name:"centered",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"src/components/Skeleton/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const TemplateCircle=args=>{const{circleProps,...rest}=args;return(0,esm.kt)(Skeleton,_extends({},rest,{mdxType:"Skeleton"}),(0,esm.kt)(Circle,_extends({},circleProps,{mdxType:"Circle"})))};TemplateCircle.displayName="TemplateCircle";const TemplateRectangle=args=>{const{rectangleProps,...rest}=args;return(0,esm.kt)(Skeleton,_extends({},rest,{mdxType:"Skeleton"}),(0,esm.kt)(Rectangle,_extends({},rectangleProps,{mdxType:"Rectangle"})))};TemplateRectangle.displayName="TemplateRectangle";const TemplateWithFlex=args=>{const{circleProps,rectangleProps,...rest}=args;return(0,esm.kt)(Skeleton,_extends({},rest,{mdxType:"Skeleton"}),(0,esm.kt)(Flex.k,{gap:2,align:"center",mdxType:"Flex"},(0,esm.kt)(Circle,_extends({},circleProps,{mdxType:"Circle"})),(0,esm.kt)(Rectangle,_extends({},rectangleProps,{mdxType:"Rectangle"}))))};TemplateWithFlex.displayName="TemplateWithFlex";const layoutProps={TemplateCircle};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Skeleton",component:Skeleton,subcomponents:{Circle,Rectangle},parameters:{controls:{sort:"requiredFirst",exclude:["children","skeletonProps"]}},mdxType:"Meta"}),(0,esm.kt)("h1",{id:"skeleton"},"Skeleton"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Skeleton is used to create loading placeholders."),(0,esm.kt)("p",null,"Skeleton exports 3 components:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"Skeleton"),": main container component."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"Circle"),": circle with variable diameter."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"Rectangle"),": rectangle with variable dimensions.")),(0,esm.kt)("h3",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Circle, Rectangle, Skeleton } from '@lokalise/louis';\n\nexport default () => (\n    <Skeleton description=\"loading\" animated>\n        <Circle size={30} />\n        <Rectangle height={30} width={80} />\n    </Skeleton>\n);\n")),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Skeleton,sort:"requiredFirst",exclude:["as","forwardedAs","ref","theme"],mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)("h3",{id:"default"},"Default"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Circle",args:{description:"Circle",circleProps:{size:30}},mdxType:"Story"},TemplateCircle.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Rectangle",args:{description:"Rectangle",rectangleProps:{height:30,width:80}},mdxType:"Story"},TemplateRectangle.bind({}))),(0,esm.kt)("h3",{id:"animated"},"Animated"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Animated Circle",args:{animated:!0,description:"Animated Circle",circleProps:{size:30}},mdxType:"Story"},TemplateCircle.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Animated Rectangle",args:{animated:!0,description:"Animated Rectangle",rectangleProps:{height:30,width:80}},mdxType:"Story"},TemplateRectangle.bind({}))),(0,esm.kt)("h3",{id:"layout-with-flex"},"Layout with Flex"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Layout with Flex",args:{description:"Layout with Flex",circleProps:{size:30},rectangleProps:{height:30,width:80}},mdxType:"Story"},TemplateWithFlex.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const circle=TemplateCircle.bind({});circle.storyName="Circle",circle.args={description:"Circle",circleProps:{size:30}},circle.parameters={storySource:{source:"TemplateCircle.bind({})"}};const rectangle=TemplateRectangle.bind({});rectangle.storyName="Rectangle",rectangle.args={description:"Rectangle",rectangleProps:{height:30,width:80}},rectangle.parameters={storySource:{source:"TemplateRectangle.bind({})"}};const animatedCircle=TemplateCircle.bind({});animatedCircle.storyName="Animated Circle",animatedCircle.args={animated:!0,description:"Animated Circle",circleProps:{size:30}},animatedCircle.parameters={storySource:{source:"TemplateCircle.bind({})"}};const animatedRectangle=TemplateRectangle.bind({});animatedRectangle.storyName="Animated Rectangle",animatedRectangle.args={animated:!0,description:"Animated Rectangle",rectangleProps:{height:30,width:80}},animatedRectangle.parameters={storySource:{source:"TemplateRectangle.bind({})"}};const layoutWithFlex=TemplateWithFlex.bind({});layoutWithFlex.storyName="Layout with Flex",layoutWithFlex.args={description:"Layout with Flex",circleProps:{size:30},rectangleProps:{height:30,width:80}},layoutWithFlex.parameters={storySource:{source:"TemplateWithFlex.bind({})"}};const componentMeta={title:"Components/Skeleton",parameters:{controls:{sort:"requiredFirst",exclude:["children","skeletonProps"]}},component:Skeleton,subcomponents:{Circle,Rectangle},includeStories:["circle","rectangle","animatedCircle","animatedRectangle","layoutWithFlex"]},mdxStoryNameToKey={Circle:"circle",Rectangle:"rectangle","Animated Circle":"animatedCircle","Animated Rectangle":"animatedRectangle","Layout with Flex":"layoutWithFlex"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Skeleton_stories=componentMeta,__namedExportsOrder=["TemplateCircle","TemplateRectangle","TemplateWithFlex","circle","rectangle","animatedCircle","animatedRectangle","layoutWithFlex"]},"./src/components/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts");const Container=styled_components_browser_esm.ZP.div`
	display: flex;
	gap: ${_ref=>{let{rowGap}=_ref;return(0,spacing.W)(rowGap)}} ${_ref2=>{let{columnGap}=_ref2;return(0,spacing.W)(columnGap)}};
	max-width: 100%;
	align-items: ${_ref3=>{let{alignItems}=_ref3;return alignItems}};
	justify-content: ${_ref4=>{let{justifyContent}=_ref4;return justifyContent}};
	flex-wrap: ${_ref5=>{let{flexWrap}=_ref5;return flexWrap}};
	flex-direction: ${_ref6=>{let{flexDirection}=_ref6;return flexDirection}};
	flex-basis: ${_ref7=>{let{basis}=_ref7;return basis}};
	flex-grow: ${_ref8=>{let{grow}=_ref8;return grow}};
	flex-shrink: ${_ref9=>{let{shrink}=_ref9;return shrink}};
	align-self: ${_ref10=>{let{alignSelf}=_ref10;return alignSelf}};
	${(0,modifier.c)("inline",styled_components_browser_esm.iv`
			display: inline-flex;
		`)}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=(0,react.forwardRef)(((_ref,ref)=>{let{inline=!1,align="flex-start",justify="flex-start",wrap="wrap",direction="row",gap=0,children,as="div",...rest}=_ref;const rowGap="number"==typeof gap?gap:gap[0],columnGap="number"==typeof gap?gap:gap[1];return(0,jsx_runtime.jsx)(Container,{...rest,ref,inline,flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,as,rowGap,columnGap,children})}));Flex.displayName="Flex";try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{inline:{defaultValue:{value:"false"},description:"Toggles inline-flex.",name:"inline",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"flex-start"},description:"Sets align-items.",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:{value:"flex-start"},description:"Sets justify-content.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"wrap"},description:"Sets flex-wrap.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"wrap"'},{value:'"initial"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},direction:{defaultValue:{value:"row"},description:"Sets flex-direction.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"row"'},{value:'"initial"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},gap:{defaultValue:{value:"0"},description:"Sets gap, or row-gap and column-gap, using theme spacing.",name:"gap",required:!1,type:{name:"SpacingLevels | [rowGap: SpacingLevels, columnGap: SpacingLevels]"}},basis:{defaultValue:null,description:"Sets flex-basis when used as a child of another flex container.",name:"basis",required:!1,type:{name:"FlexBasis<string | number>"}},grow:{defaultValue:null,description:"Sets flex-grow when used as a child of another flex container.",name:"grow",required:!1,type:{name:"FlexGrow"}},shrink:{defaultValue:null,description:"Sets flex-shrink when used as a child of another flex container.",name:"shrink",required:!1,type:{name:"FlexShrink"}},alignSelf:{defaultValue:null,description:"Sets align-self when used as a child of another flex container.",name:"alignSelf",required:!1,type:{name:"AlignSelf"}},children:{defaultValue:null,description:"Renders any flex items in the flex container.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:{value:"div"},description:"Sets the HTML element to render for the flex container.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"li"'},{value:'"section"'},{value:'"span"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/excludeProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>excludeProps});const excludeProps=props=>(prop,defaultValidatorFn)=>!props.includes(prop)&&defaultValidatorFn(prop)},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/modifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>modifier});const modifier=(prop,trueCss)=>props=>("function"==typeof prop?prop(props):props[prop])?trueCss:void 0},"./src/utils/theme/radius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>radius});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const radius=radiusPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(radiusPath,theme.radii)))},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}}}]);
//# sourceMappingURL=components-Skeleton-Skeleton-stories-mdx.7912bf6e.iframe.bundle.js.map