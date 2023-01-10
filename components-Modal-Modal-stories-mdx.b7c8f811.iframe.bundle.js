"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[8180],{"./src/components/Modal/Modal.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TemplateConfirmModal:()=>TemplateConfirmModal,TemplateDangerModal:()=>TemplateDangerModal,TemplateModal:()=>TemplateModal,__namedExportsOrder:()=>__namedExportsOrder,confirmModal:()=>confirmModal,dangerModal:()=>dangerModal,default:()=>Modal_stories,defaultStory:()=>defaultStory});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),zIndex=__webpack_require__("./src/utils/theme/zIndex.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),variants=__webpack_require__("./src/utils/theme/variants.ts");const Header=styled_components_browser_esm.ZP.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: ${(0,spacing.W)(5)};

	@media (min-width: 768px) {
		padding: ${(0,spacing.W)(7)};
	}
`,Title=styled_components_browser_esm.ZP.h2`
	font-family: ${(0,fontFamily.I)("default")};
	${(0,typography.c)("heading4")}
	color: ${(0,color.$)("content.primary")};
	width: 100%;
	margin: 0;
`,Section=styled_components_browser_esm.ZP.div`
	padding: ${(0,spacing.W)(0,5,5,5)};

	@media (min-width: 768px) {
		padding: ${(0,spacing.W)(0,7,7,7)};
	}
`,Actions=styled_components_browser_esm.ZP.div`
	padding-top: ${(0,spacing.W)(6)};

	@media (min-width: 768px) {
		padding-top: ${(0,spacing.W)(7)};
	}
`,DialogOverlay=styled_components_browser_esm.ZP.div`
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
	z-index: ${(0,zIndex.W)("modal")};
`,StyledDialog=styled_components_browser_esm.ZP.dialog`
	background-color: ${(0,color.$)("background.primary")};
	border-radius: ${(0,radius.q)("md")};
	border: none;
	box-sizing: border-box;
	font-family: ${(0,fontFamily.I)("default")};
	${(0,typography.c)("description")}
	color: ${(0,color.$)("content.primary")};
	margin: revert; // ensure that browser can determine the correct margins to position the dialog
	margin-top: ${(0,spacing.W)(3)};
	padding: 0;
	overflow: ${_ref=>{let{overflow}=_ref;return overflow}};

	@media (min-width: 768px) {
		margin-top: ${(0,spacing.W)(7)};
	}

	width: 100%;

	${(0,variants.o)("size",{small:styled_components_browser_esm.iv`
				max-width: calc(100% - ${24}px);
				@media (min-width: ${344}px) {
					max-width: ${320}px;
				}
			`,wide:styled_components_browser_esm.iv`
				max-width: calc(100% - ${24}px);
				@media (min-width: ${864}px) {
					max-width: ${840}px;
				}
			`,default:styled_components_browser_esm.iv`
				max-width: calc(100% - ${24}px);
				@media (min-width: ${664}px) {
					max-width: ${640}px;
				}
			`},"default")}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalBody=_ref=>{let{children,className}=_ref;return(0,jsx_runtime.jsx)(Section,{className,children})};ModalBody.displayName="ModalBody";try{ModalBody.displayName="ModalBody",ModalBody.__docgenInfo={description:"",displayName:"ModalBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/components/ModalBody.tsx#ModalBody"]={docgenInfo:ModalBody.__docgenInfo,name:"ModalBody",path:"src/components/Modal/components/ModalBody.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}var Close=__webpack_require__("./src/foundations/icons/Close.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),noop=__webpack_require__("./src/utils/noop/index.ts");const Context=(0,react.createContext)({onClose:noop.Z}),{Provider}=Context;try{Provider.displayName="Provider",Provider.__docgenInfo={description:"",displayName:"Provider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/context.tsx#Provider"]={docgenInfo:Provider.__docgenInfo,name:"Provider",path:"src/components/Modal/context.tsx#Provider"})}catch(__react_docgen_typescript_loader_error){}const ModalCloseButton=_ref=>{let{className}=_ref;const{onClose}=(0,react.useContext)(Context);return(0,jsx_runtime.jsx)(IconButton.h,{ariaLabel:"Close dialog",onClick:onClose,className,children:(0,jsx_runtime.jsx)(Close.x,{})})};ModalCloseButton.displayName="ModalCloseButton";try{ModalCloseButton.displayName="ModalCloseButton",ModalCloseButton.__docgenInfo={description:"",displayName:"ModalCloseButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/components/ModalCloseButton.tsx#ModalCloseButton"]={docgenInfo:ModalCloseButton.__docgenInfo,name:"ModalCloseButton",path:"src/components/Modal/components/ModalCloseButton.tsx#ModalCloseButton"})}catch(__react_docgen_typescript_loader_error){}const ModalHeader=_ref=>{let{children,className}=_ref;return(0,jsx_runtime.jsxs)(Header,{className,children:[(0,jsx_runtime.jsx)(Title,{children}),(0,jsx_runtime.jsx)(ModalCloseButton,{})]})};ModalHeader.displayName="ModalHeader";try{ModalHeader.displayName="ModalHeader",ModalHeader.__docgenInfo={description:"",displayName:"ModalHeader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/components/ModalHeader.tsx#ModalHeader"]={docgenInfo:ModalHeader.__docgenInfo,name:"ModalHeader",path:"src/components/Modal/components/ModalHeader.tsx#ModalHeader"})}catch(__react_docgen_typescript_loader_error){}var dialog_polyfill_esm=__webpack_require__("./node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js"),es2015=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),Combination=__webpack_require__("./node_modules/react-remove-scroll/dist/es2015/Combination.js"),Portal=__webpack_require__("./src/components/Portal/Portal.tsx");const ModalShell=_ref=>{let{children,opened,title,onClose,size="default",overflow="auto",inPortal=!0,className}=_ref;const overlayRef=(0,react.useRef)(null),dialogRef=(0,react.useRef)(null);if((0,react.useEffect)((()=>{const overlayNode=overlayRef.current,dialogNode=dialogRef.current;if(!opened||!dialogNode||!overlayNode||dialogNode.open)return;dialog_polyfill_esm.Z.registerDialog(dialogNode);const handleMouseClose=event=>{event.target===event.currentTarget&&dialogNode.close()},handleEscapeClose=event=>{event.defaultPrevented||"Escape"!==event.key||dialogNode.close()};return dialogNode.show(),overlayNode.addEventListener("click",handleMouseClose),document.addEventListener("keydown",handleEscapeClose),()=>{overlayNode.removeEventListener("click",handleMouseClose),document.removeEventListener("keydown",handleEscapeClose),dialogNode.close()}}),[opened]),!opened)return null;const innerModal=(0,jsx_runtime.jsx)(es2015.ZP,{children:(0,jsx_runtime.jsx)(Combination.Z,{children:(0,jsx_runtime.jsx)(DialogOverlay,{ref:overlayRef,children:(0,jsx_runtime.jsx)(StyledDialog,{ref:dialogRef,"aria-label":title??"Dialog","aria-modal":"true",size,overflow,onClose,className,children:(0,jsx_runtime.jsx)(Provider,{value:{onClose},children:(0,jsx_runtime.jsx)("div",{children})})})})})});return inPortal?(0,jsx_runtime.jsx)(Portal.h,{children:innerModal}):innerModal};try{ModalShell.displayName="ModalShell",ModalShell.__docgenInfo={description:"",displayName:"ModalShell",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:{value:"default"},description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"wide"'}]}},overflow:{defaultValue:{value:"auto"},description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:{value:"true"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user hits "Escape" or clicks outside the modal.',name:"onClose",required:!0,type:{name:"ReactEventHandler<Element>"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/components/ModalShell.tsx#ModalShell"]={docgenInfo:ModalShell.__docgenInfo,name:"ModalShell",path:"src/components/Modal/components/ModalShell.tsx#ModalShell"})}catch(__react_docgen_typescript_loader_error){}const Modal=_ref=>{let{children,title,...restProps}=_ref;return(0,jsx_runtime.jsxs)(ModalShell,{title,...restProps,children:[(0,jsx_runtime.jsx)(ModalHeader,{children:title}),(0,jsx_runtime.jsx)(ModalBody,{children})]})};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"wide"'}]}},overflow:{defaultValue:null,description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user hits "Escape" or clicks outside the modal.',name:"onClose",required:!0,type:{name:"ReactEventHandler<Element>"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx"),Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx");const ModalActions=_ref=>{let{children,className}=_ref;return(0,jsx_runtime.jsx)(Actions,{className,children:(0,jsx_runtime.jsx)(Flex.k,{justify:"flex-end",gap:2,children})})};ModalActions.displayName="ModalActions";try{ModalActions.displayName="ModalActions",ModalActions.__docgenInfo={description:"",displayName:"ModalActions",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/components/ModalActions.tsx#ModalActions"]={docgenInfo:ModalActions.__docgenInfo,name:"ModalActions",path:"src/components/Modal/components/ModalActions.tsx#ModalActions"})}catch(__react_docgen_typescript_loader_error){}const ConfirmModal=_ref=>{let{children,confirmText,closeText="Close",loading=!1,onClose,onConfirm,tooltipTitle,...restProps}=_ref;return(0,jsx_runtime.jsxs)(Modal,{onClose,...restProps,children:[children,(0,jsx_runtime.jsxs)(ModalActions,{children:[(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"outline",onClick:onClose,children:closeText}),(0,jsx_runtime.jsx)(Tooltip.u,{tooltip:tooltipTitle,show:!!tooltipTitle,children:(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"solid",loading,onClick:onConfirm,children:confirmText})})]})]})};ConfirmModal.displayName="ConfirmModal";try{ConfirmModal.displayName="ConfirmModal",ConfirmModal.__docgenInfo={description:"",displayName:"ConfirmModal",props:{confirmText:{defaultValue:null,description:"Renders text content in the confirm button.",name:"confirmText",required:!0,type:{name:"string"}},closeText:{defaultValue:{value:"Close"},description:"Renders text content in the close button.",name:"closeText",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading state for the confirm button.",name:"loading",required:!1,type:{name:"boolean"}},tooltipTitle:{defaultValue:null,description:"Renders a tooltip on the confirm button when passed.",name:"tooltipTitle",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Function executed when the confirm button is clicked.",name:"onConfirm",required:!0,type:{name:"() => void"}},opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"wide"'}]}},overflow:{defaultValue:null,description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user hits "Escape" or clicks outside the modal.',name:"onClose",required:!0,type:{name:"ReactEventHandler<Element>"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/facades/ConfirmModal.tsx#ConfirmModal"]={docgenInfo:ConfirmModal.__docgenInfo,name:"ConfirmModal",path:"src/components/Modal/facades/ConfirmModal.tsx#ConfirmModal"})}catch(__react_docgen_typescript_loader_error){}const DangerModal=_ref=>{let{children,confirmText,closeText="Close",loading=!1,onClose,onConfirm,tooltipTitle,...restProps}=_ref;return(0,jsx_runtime.jsxs)(Modal,{onClose,...restProps,children:[children,(0,jsx_runtime.jsxs)(ModalActions,{children:[(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"outline",onClick:onClose,children:closeText}),(0,jsx_runtime.jsx)(Tooltip.u,{tooltip:tooltipTitle,show:!!tooltipTitle,children:(0,jsx_runtime.jsx)(Button.z,{appearance:"danger",variant:"solid",loading,onClick:onConfirm,children:confirmText})})]})]})};DangerModal.displayName="DangerModal";try{DangerModal.displayName="DangerModal",DangerModal.__docgenInfo={description:"",displayName:"DangerModal",props:{confirmText:{defaultValue:null,description:"Renders text content in the confirm button.",name:"confirmText",required:!0,type:{name:"string"}},closeText:{defaultValue:{value:"Close"},description:"Renders text content in the close button.",name:"closeText",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading state for the confirm button.",name:"loading",required:!1,type:{name:"boolean"}},tooltipTitle:{defaultValue:null,description:"Renders a tooltip on the confirm button when passed.",name:"tooltipTitle",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Function executed when the confirm button is clicked.",name:"onConfirm",required:!0,type:{name:"() => void"}},opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"wide"'}]}},overflow:{defaultValue:null,description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user hits "Escape" or clicks outside the modal.',name:"onClose",required:!0,type:{name:"ReactEventHandler<Element>"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/facades/DangerModal.tsx#DangerModal"]={docgenInfo:DangerModal.__docgenInfo,name:"DangerModal",path:"src/components/Modal/facades/DangerModal.tsx#DangerModal"})}catch(__react_docgen_typescript_loader_error){}var hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),Toast=__webpack_require__("./src/components/Toast/index.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),DatePicker=__webpack_require__("./src/components/DatePicker/DatePicker.tsx"),Select=__webpack_require__("./src/components/Select/Select.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const TemplateModal=args=>{const{onClose,...restArgs}=args,[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(react.Fragment,null,(0,esm.kt)(Button.z,{variant:"outline",onClick:()=>updateArgs({opened:!0}),mdxType:"Button"},"Open Modal"),(0,esm.kt)(Modal,_extends({onClose:()=>updateArgs({opened:!1})},restArgs,{mdxType:"Modal"}),"This is a simple modal that has heading, close button and some spacing on the sides. ".repeat(10)))},TemplateConfirmModal=args=>{const{onClose,inputValue,dateValue,onConfirm,...restArgs}=args,[_,updateArgs]=(0,hooks.D8)(),selectEl=(0,react.useRef)(null);return(0,react.useEffect)((()=>{null!==selectEl.current&&selectEl.current.focus()}),[args.opened]),(0,esm.kt)(react.Fragment,null,(0,esm.kt)(Button.z,{variant:"outline",onClick:()=>updateArgs({opened:!0}),mdxType:"Button"},"Open ConfirmModal"),(0,esm.kt)(Button.z,{onClick:()=>{(0,Toast.CF)({type:"success",title:"System-wide notification",autoClose:!1})},variant:"outline",style:{marginLeft:"5px"},mdxType:"Button"},"Trigger toast notification"),(0,esm.kt)(ConfirmModal,_extends({onClose:()=>updateArgs({opened:!1}),onConfirm:()=>updateArgs({opened:!1})},restArgs,{mdxType:"ConfirmModal"}),(0,esm.kt)(Button.z,{onClick:()=>{(0,Toast.CF)({type:"success",title:"Modal notification",autoClose:!1})},variant:"outline",mdxType:"Button"},"Trigger toast notification"),(0,esm.kt)("p",null,"This is a modal that already provides all the necessary action buttons, and can take any other content or form fields."),(0,esm.kt)(Input.I,{key:"textinput",value:inputValue,onChange:event=>updateArgs({inputValue:event.target.value}),placeholder:"Enter text",mdxType:"Input"}),(0,esm.kt)("p",null,"For example, a DatePicker, using the positioning prop to ensure it can overlap outside of the Modal."),(0,esm.kt)(DatePicker.M,{onChange:selectedDate=>updateArgs({dateValue:selectedDate}),value:dateValue,positioning:"fixed",mdxType:"DatePicker"}),(0,esm.kt)("p",null,"Or a Select menu that gets focus through useRef and useEffect, and uses the menuPosition prop to overlap outside of the Modal."),(0,esm.kt)(Select.P,{options:[...Array(41).keys()].slice(1).map((e=>({value:"option"+e,label:"Option "+e}))),ref:selectEl,openMenuOnFocus:!0,isMulti:!0,menuPosition:"fixed",mdxType:"Select"})))},TemplateDangerModal=args=>{const{onClose,onConfirm,...restArgs}=args,[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(react.Fragment,null,(0,esm.kt)(Button.z,{variant:"outline",onClick:()=>updateArgs({opened:!0}),mdxType:"Button"},"Open DangerModal"),(0,esm.kt)(DangerModal,_extends({onClose:()=>updateArgs({opened:!1}),onConfirm:()=>updateArgs({opened:!1})},restArgs,{mdxType:"DangerModal"}),"This is a modal that already provides all the necessary action buttons. ".repeat(50)))},layoutProps={TemplateModal,TemplateConfirmModal,TemplateDangerModal};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Modal",component:Modal,subcomponents:{ConfirmModal,DangerModal,ModalShell},parameters:{controls:{sort:"requiredFirst",exclude:["children"]},docs:{source:{excludeDecorators:!0}}},argTypes:{overflow:{control:{type:"text"}}},decorators:[Story=>(0,esm.kt)(react.Fragment,null,(0,esm.kt)(Toast.Ix,{mdxType:"ToastContainer"}),Story())],mdxType:"Meta"}),(0,esm.kt)("h1",{id:"modal"},"Modal"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal is inert, meaning that users cannot interact with it."),(0,esm.kt)("p",null,"Modal exports 3 facade components that are used for common modal use cases:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"Modal"),": Opinionated facade component that provides reasonable defaults for most situations."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ConfirmModal"),": Used to quickly create a confirmation modal with a primary confirm button and a secondary close button."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"DangerModal"),": Used to quickly create a danger modal with a primary danger button and a secondary close button.")),(0,esm.kt)("p",null,"Modal exports 5 components to help you create any modal dialog:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ModalShell"),": A modal with all the functionality but without header, close button, and paddings."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ModalCloseButton"),": Button that closes the modal."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ModalHeader"),": Component that wraps modal heading and close button."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ModalBody"),": Wrapper for the content that adds spacing from the sides."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ModalActions"),": Wrapper that houses the modal actions.")),(0,esm.kt)("h3",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Modal, Button } from '@lokalise/louis';\n\nexport default () => {\n    const [opened, setOpened] = useState(false);\n    return (\n        <>\n            <Button onClick={() => setOpened(true)}>Open Modal</Button>\n            <Modal opened={opened} title=\"Modal title\" onClose={() => setOpened(false)}>\n                'This is a simple modal that has heading, close button and some spacing on the sides.'\n            </Modal>\n        </>\n    );\n};\n")),(0,esm.kt)("h3",{id:"testing"},"Testing"),(0,esm.kt)("p",null,"Modal is based on the ",(0,esm.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",target:"_blank"},(0,esm.kt)("inlineCode",{parentName:"p"},"<dialog>")," element"),". Currently this element is not supported in jsdom.\nFor this purpose, Modal includes ",(0,esm.kt)("a",{href:"https://www.npmjs.com/package/dialog-polyfill",target:"_blank"},"dialog-polyfill")," until jsdom adds support for dialog. You may encounter console warnings from dialog-polyfill when running tests, these can safely be suppressed."),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A36149",target:"_blank"},"Figma Source File | Modal"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Modal,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)("h3",{id:"default"},"Default"),(0,esm.kt)(dist_esm.Xz,{withSource:"none",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Default",args:{opened:!1,title:"Default modal"},mdxType:"Story"},TemplateModal.bind({}))),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Modal, Button } from '@lokalise/louis';\n\nexport default () => {\n    const [opened, setOpened] = useState(false);\n    return (\n        <>\n            <Button onClick={() => setOpened(true)}>Open Modal</Button>\n            <Modal opened={opened} title=\"Default modal\" onClose={() => setOpened(false)}>\n                'This is a simple modal that has heading, close button and some spacing on the sides.'\n            </Modal>\n        </>\n    );\n};\n")),(0,esm.kt)("h3",{id:"confirmmodal"},"ConfirmModal"),(0,esm.kt)(dist_esm.Xz,{withSource:"none",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"ConfirmModal",args:{opened:!1,title:"Confirm modal",closeText:"Cancel",confirmText:"Confirm",onClose:()=>{},onConfirm:()=>{},loading:!1,tooltipTitle:"Click here to confirm",inputValue:"",dateValue:""},mdxType:"Story"},TemplateConfirmModal.bind({}))),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from \'react\';\nimport { ConfirmModal, Button } from \'@lokalise/louis\';\n\nexport default () => {\n    const [opened, setOpened] = useState(false);\n    const selectEl = useRef(null);\n    useEffect(() => {\n        if (selectEl.current !== null) {\n            selectEl.current.focus();\n        }\n    }, opened);\n    return (\n        <>\n            <Button onClick={() => setOpened(true)}>Open ConfirmModal</Button>\n            <ConfirmModal\n                opened={opened}\n                title="Confirm modal"\n                onClose={() => setOpened(false)}\n                onConfirm={() => setOpened(false)}\n            >\n                <p>\n                    This is a modal that already provides all the necessary action buttons, and can take any other\n                    content or form fields.\n                </p>\n                <Input key="textinput" placeholder="Enter text" value={inputValue} onChange={handleInputChange} />\n                <p>\n                    For example, a DatePicker, using the positioning prop to ensure it can overlap outside of the Modal.\n                </p>\n                <DatePicker onChange={handleDateChange} value={dateValue} positioning="fixed" />\n                <p>\n                    Or a Select menu that gets focus through useRef and useEffect, and uses the menuPosition prop to\n                    overlap outside of the Modal.\n                </p>\n                <Select\n                    options={[...Array(41).keys()].slice(1).map((e) => {\n                        return { value: \'option\' + e, label: \'Option \' + e };\n                    })}\n                    ref={selectEl}\n                    openMenuOnFocus\n                    isMulti\n                    menuPosition="fixed"\n                />\n            </ConfirmModal>\n        </>\n    );\n};\n')),(0,esm.kt)("h3",{id:"dangermodal"},"DangerModal"),(0,esm.kt)(dist_esm.Xz,{withSource:"none",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"DangerModal",args:{opened:!1,title:"Danger modal",closeText:"Cancel",confirmText:"Delete",onClose:()=>{},onConfirm:()=>{},loading:!1,tooltipTitle:"Click here to delete"},mdxType:"Story"},TemplateDangerModal.bind({}))),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { DangerModal, Button } from '@lokalise/louis';\n\nexport default () => {\n    const [opened, setOpened] = useState(false);\n    return (\n        <>\n            <Button onClick={() => setOpened(true)}>Open DangerModal</Button>\n            <DangerModal\n                opened={opened}\n                title=\"Danger modal\"\n                onClose={() => setOpened(false)}\n                onConfirm={() => setOpened(false)}\n            >\n                'This is a modal that already provides all the necessary action buttons.'\n            </DangerModal>\n        </>\n    );\n};\n")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const defaultStory=TemplateModal.bind({});defaultStory.storyName="Default",defaultStory.args={opened:!1,title:"Default modal"},defaultStory.parameters={storySource:{source:"args => {\n  const {\n    onClose,\n    ...restArgs\n  } = args;\n  const [_, updateArgs] = useArgs();\n  return <>\n\t\t\t<Button variant=\"outline\" onClick={() => updateArgs({\n      opened: true\n    })}>\n\t\t\t\tOpen Modal\n\t\t\t</Button>\n\t\t\t<Modal onClose={() => updateArgs({\n      opened: false\n    })} {...restArgs}>\n\t\t\t\t{'This is a simple modal that has heading, close button and some spacing on the sides. '.repeat(10)}\n\t\t\t</Modal>\n\t\t</>;\n}"}};const confirmModal=TemplateConfirmModal.bind({});confirmModal.storyName="ConfirmModal",confirmModal.args={opened:!1,title:"Confirm modal",closeText:"Cancel",confirmText:"Confirm",onClose:()=>{},onConfirm:()=>{},loading:!1,tooltipTitle:"Click here to confirm",inputValue:"",dateValue:""},confirmModal.parameters={storySource:{source:"args => {\n  const {\n    onClose,\n    inputValue,\n    dateValue,\n    onConfirm,\n    ...restArgs\n  } = args;\n  const [_, updateArgs] = useArgs();\n  const selectEl = useRef(null);\n  const handleDateChange = selectedDate => updateArgs({\n    dateValue: selectedDate\n  });\n  useEffect(() => {\n    if (selectEl.current !== null) {\n      selectEl.current.focus();\n    }\n  }, [args.opened]);\n  return <>\n\t\t\t<Button variant=\"outline\" onClick={() => updateArgs({\n      opened: true\n    })}>\n\t\t\t\tOpen ConfirmModal\n\t\t\t</Button>\n\t\t\t<Button onClick={() => {\n      showToast({\n        type: 'success',\n        title: 'System-wide notification',\n        autoClose: false\n      });\n    }} variant=\"outline\" style={{\n      marginLeft: '5px'\n    }}>\n\t\t\t\tTrigger toast notification\n\t\t\t</Button>\n\t\t\t<ConfirmModal onClose={() => updateArgs({\n      opened: false\n    })} onConfirm={() => updateArgs({\n      opened: false\n    })} {...restArgs}>\n\t\t\t\t<Button onClick={() => {\n        showToast({\n          type: 'success',\n          title: 'Modal notification',\n          autoClose: false\n        });\n      }} variant=\"outline\">\n\t\t\t\t\tTrigger toast notification\n\t\t\t\t</Button>\n\t\t\t\t<p>\n\t\t\t\t\tThis is a modal that already provides all the necessary action buttons, and can take any other\n\t\t\t\t\tcontent or form fields.\n\t\t\t\t</p>\n\t\t\t\t<Input key=\"textinput\" value={inputValue} onChange={event => updateArgs({\n        inputValue: event.target.value\n      })} placeholder=\"Enter text\" />\n\t\t\t\t<p>\n\t\t\t\t\tFor example, a DatePicker, using the positioning prop to ensure it can overlap outside of the Modal.\n\t\t\t\t</p>\n\t\t\t\t<DatePicker onChange={handleDateChange} value={dateValue} positioning=\"fixed\" />\n\t\t\t\t<p>\n\t\t\t\t\tOr a Select menu that gets focus through useRef and useEffect, and uses the menuPosition prop to\n\t\t\t\t\toverlap outside of the Modal.\n\t\t\t\t</p>\n\t\t\t\t<Select options={[...Array(41).keys()].slice(1).map(e => {\n        return {\n          value: 'option' + e,\n          label: 'Option ' + e\n        };\n      })} ref={selectEl} openMenuOnFocus isMulti menuPosition=\"fixed\" />\n\t\t\t</ConfirmModal>\n\t\t</>;\n}"}};const dangerModal=TemplateDangerModal.bind({});dangerModal.storyName="DangerModal",dangerModal.args={opened:!1,title:"Danger modal",closeText:"Cancel",confirmText:"Delete",onClose:()=>{},onConfirm:()=>{},loading:!1,tooltipTitle:"Click here to delete"},dangerModal.parameters={storySource:{source:"args => {\n  const {\n    onClose,\n    onConfirm,\n    ...restArgs\n  } = args;\n  const [_, updateArgs] = useArgs();\n  return <>\n\t\t\t<Button variant=\"outline\" onClick={() => updateArgs({\n      opened: true\n    })}>\n\t\t\t\tOpen DangerModal\n\t\t\t</Button>\n\t\t\t<DangerModal onClose={() => updateArgs({\n      opened: false\n    })} onConfirm={() => updateArgs({\n      opened: false\n    })} {...restArgs}>\n\t\t\t\t{'This is a modal that already provides all the necessary action buttons. '.repeat(50)}\n\t\t\t</DangerModal>\n\t\t</>;\n}"}};const componentMeta={title:"Components/Modal",parameters:{controls:{sort:"requiredFirst",exclude:["children"]},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,esm.kt)(react.Fragment,null,(0,esm.kt)(Toast.Ix,null),Story())],component:Modal,subcomponents:{ConfirmModal,DangerModal,ModalShell},argTypes:{overflow:{control:{type:"text"}}},includeStories:["defaultStory","confirmModal","dangerModal"]},mdxStoryNameToKey={Default:"defaultStory",ConfirmModal:"confirmModal",DangerModal:"dangerModal"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Modal_stories=componentMeta,__namedExportsOrder=["TemplateModal","TemplateConfirmModal","TemplateDangerModal","defaultStory","confirmModal","dangerModal"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),inputStyle=__webpack_require__("./src/utils/styles/inputStyle.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),variants=__webpack_require__("./src/utils/theme/variants.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),transitionTime=__webpack_require__("./src/utils/theme/transitionTime.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const appearanceToColorCode=appearance=>({default:"primary",primary:"primary",danger:"red",warning:"yellow"}[appearance]),getOutlineStyles=function(colorType,appearance){let transparent=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("default"===appearance)return styled_components_browser_esm.iv`
			background-color: transparent;
			color: ${(0,color.$)("content.primary")};
			border-color: ${(0,color.$)("content.primary")};
		`;const appearanceColorCode=appearanceToColorCode(appearance);return styled_components_browser_esm.iv`
		background-color: ${transparent?"transparent":(0,color.$)(`surface.${appearanceColorCode}50`)};
		border-color: ${(0,color.$)(`interactive.${appearanceColorCode}.${colorType}`)};
		color: ${(0,color.$)(`interactive.${appearanceColorCode}.${colorType}`)};
	`},getColorStyles=(appearance,colorCode)=>{if("default"===appearance)return;const appearanceColorCode=appearanceToColorCode(appearance);return styled_components_browser_esm.iv`
		background-color: ${(0,color.$)(`interactive.${appearanceColorCode}.idle`)};
		border-color: ${(0,color.$)(`interactive.${appearanceColorCode}.idle`)};
		color: ${(0,color.$)(`content.${colorCode}`)};

		// hover
		&:hover:not([disabled]):not([aria-expanded='true']) {
			background-color: ${(0,color.$)(`interactive.${appearanceColorCode}.hover`)};
			border-color: ${(0,color.$)(`interactive.${appearanceColorCode}.hover`)};
			color: ${(0,color.$)(`content.${colorCode}`)};
		}

		// pressed
		&:active:not([disabled]):not([aria-expanded='true']),
		&:focus:active:not([disabled]):not([aria-expanded='true']) {
			background-color: ${(0,color.$)(`interactive.${appearanceColorCode}.pressed`)};
			border-color: ${(0,color.$)(`interactive.${appearanceColorCode}.pressed`)};
		}

		// activated
		${(0,modifier.c)("active",styled_components_browser_esm.iv`
				background-color: ${(0,color.$)(`interactive.${appearanceColorCode}.pressed`)};
				border-color: ${(0,color.$)(`interactive.${appearanceColorCode}.pressed`)};
			`)}
	`},variantColorStyles=styled_components_browser_esm.iv`
	${(0,variants.o)("appearance",{default:styled_components_browser_esm.iv`
			background-color: ${(0,color.$)("content.white")};
			color: ${(0,color.$)("primary.400")};
			border-color: transparent;

			&:hover:not([disabled]):not([aria-expanded='true']) {
				color: ${(0,color.$)("primary.500")};
			}
		`,primary:styled_components_browser_esm.iv`
			${getColorStyles("primary","white")}
		`,warning:styled_components_browser_esm.iv`
			${getColorStyles("warning","black")}
		`,danger:styled_components_browser_esm.iv`
			${getColorStyles("danger","white")}
		`})}

	${(0,variants.o)("variant",{solid:styled_components_browser_esm.iv``,outline:styled_components_browser_esm.iv`
			border-width: 1px;
			${_ref=>{let{appearance}=_ref;return styled_components_browser_esm.iv`
				${getOutlineStyles("idle",appearance,!0)}

				// hover
                &:hover:not([disabled]):not([aria-expanded='true']) {
					${getOutlineStyles("hover",appearance,!0)}
				}

				// pressed
				&:active:not([disabled]):not([aria-expanded='true']),
				&:focus:active:not([disabled]):not([aria-expanded='true']) {
					${getOutlineStyles("pressed",appearance)}
				}

				// activated
				${(0,modifier.c)("active",getOutlineStyles("pressed",appearance))}
			`}}
		`})}
`,Container=(0,styled_components_browser_esm.ZP)(Pressable.s)`
	display: inline-flex;
	align-items: center;
	background-color: transparent;
	border: 1px solid transparent;
	text-decoration: none;
	vertical-align: middle;
	border-radius: ${(0,radius.q)("md")};
	cursor: pointer;
	position: relative;
	transition: all ${(0,transitionTime.Y)()};
	box-sizing: border-box;
	font-family: ${(0,fontFamily.I)("default")};

	${(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
			font-size: 11px;
			padding: ${(0,spacing.W)(0,2)};
			height: 20px;
			line-height: 12px;
		`,sm:styled_components_browser_esm.iv`
			font-size: 12px;
			padding: ${(0,spacing.W)(0,3)};
			height: ${inputStyle.dC}px;
			line-height: 12px;
		`,md:styled_components_browser_esm.iv`
			font-size: 14px;
			padding: ${(0,spacing.W)(0,3)};
			height: ${inputStyle.WC}px;
			line-height: 14px;
		`,lg:styled_components_browser_esm.iv`
			font-size: 18px;
			padding: ${(0,spacing.W)(0,4)};
			height: 45px;
			line-height: 18px;
		`})}

	${variantColorStyles}

    // disabled
    &:disabled {
		cursor: not-allowed;
		background-color: ${(0,color.$)("surface.secondary")};
		color: ${(0,color.$)("content.disabled")};
		border-color: ${(0,color.$)("content.disabled")};

		${(0,modifier.c)("isLoading",variantColorStyles)}
	}
`,Content=styled_components_browser_esm.ZP.span`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	width: 100%;

	${(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
			gap: ${(0,spacing.W)(1)};
		`,sm:styled_components_browser_esm.iv`
			gap: ${(0,spacing.W)(2)};
		`,md:styled_components_browser_esm.iv`
			gap: ${(0,spacing.W)(2)};
		`,lg:styled_components_browser_esm.iv`
			gap: ${(0,spacing.W)(2)};
		`})}

	${(0,modifier.c)("isHidden",styled_components_browser_esm.iv`
			opacity: 0;
		`)}
`,Text=styled_components_browser_esm.ZP.span`
	position: relative;
	align-items: center;
	display: inline-flex;
	white-space: nowrap;

	${(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
			top: 0;
		`,sm:styled_components_browser_esm.iv`
			top: -1px; // Make text visually centered
		`,md:styled_components_browser_esm.iv`
			top: 0;
		`,lg:styled_components_browser_esm.iv`
			top: -1px; // Make text visually centered
		`})}
`,StyledLoadingSign=(0,styled_components_browser_esm.ZP)(LoadingSign.X)`
	font-size: 1.3em;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{size="md",variant="solid",type="button",appearance="default",loading=!1,active=!1,children,leftIcon,rightIcon,...rest}=_ref;return(0,jsx_runtime.jsxs)(Container,{ref,type:rest.href?void 0:type,size,variant,appearance,isLoading:loading,active,...rest,disabled:"disabled"in rest&&rest.disabled||loading,"aria-expanded":active,children:[(0,jsx_runtime.jsxs)(Content,{isHidden:loading,size,children:[leftIcon,(0,jsx_runtime.jsx)(Text,{size,children}),rightIcon]}),loading&&(0,jsx_runtime.jsx)(StyledLoadingSign,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"})]})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"md"},description:"Changes button scale in padding and font size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"default"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"default"'},{value:'"primary"'},{value:'"danger"'}]}},variant:{defaultValue:{value:"solid"},description:"Enables the outline style for the button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'}]}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"Enables the type attribute for the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},leftIcon:{defaultValue:null,description:"Renders an icon on the left side of the button through a provided child element.",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"Renders an icon on the right side of the button through a provided child element.",name:"rightIcon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DatePicker/DatePicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>DatePicker});var react=__webpack_require__("./node_modules/react/index.js"),Calendar=__webpack_require__("./src/foundations/icons/Calendar.tsx"),useLocalisation=__webpack_require__("./src/utils/hooks/useLocalisation.ts"),useErrorId=__webpack_require__("./src/utils/hooks/useErrorId.ts"),BaseDatePicker=__webpack_require__("./src/components/InlineDatePicker/BaseDatePicker.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InlineDatePicker=_ref=>{let{onDayClick,...props}=_ref;return(0,jsx_runtime.jsx)(BaseDatePicker._,{mode:"single",onDayClick:(day,activeModifiers,e)=>{onDayClick&&(day.setHours(12),onDayClick(day,activeModifiers,e))},...props})};InlineDatePicker.displayName="InlineDatePicker";try{InlineDatePicker.displayName="InlineDatePicker",InlineDatePicker.__docgenInfo={description:"",displayName:"InlineDatePicker",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InlineDatePicker/InlineDatePicker/InlineDatePicker.tsx#InlineDatePicker"]={docgenInfo:InlineDatePicker.__docgenInfo,name:"InlineDatePicker",path:"src/components/InlineDatePicker/InlineDatePicker/InlineDatePicker.tsx#InlineDatePicker"})}catch(__react_docgen_typescript_loader_error){}var InputErrorMessage=__webpack_require__("./src/components/InputErrorMessage/InputErrorMessage.tsx"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),styles=__webpack_require__("./src/components/DatePicker/styles.ts");const DatePicker=_ref=>{let{name,value,disabledDays,onChange,error,inPortal=!1,positioning,className}=_ref;const[opened,setOpened]=(0,react.useState)(!1),{formatDate}=(0,useLocalisation.G)(),errorId=(0,useErrorId.P)();return(0,jsx_runtime.jsx)(Popover.J,{placement:"bottom-start",offset:1,inPortal,positioning,visibleCallback:setOpened,popoverContent:setVisible=>(0,jsx_runtime.jsx)(styles.sc,{children:(0,jsx_runtime.jsx)(InlineDatePicker,{disabled:disabledDays,selected:value,onDayClick:(day,modifiers)=>{modifiers.disabled||(onChange(day),setOpened(!1),setVisible(!1))}})}),children:(0,jsx_runtime.jsxs)(styles.W2,{className,children:[(0,jsx_runtime.jsxs)(styles.L9,{name,"aria-label":"Select Date",opened,children:[(0,jsx_runtime.jsx)(styles.sJ,{children:value?formatDate(value,"PP"):(0,jsx_runtime.jsx)(styles.Vm,{children:"Select date..."})}),(0,jsx_runtime.jsx)(styles.a1,{children:(0,jsx_runtime.jsx)(Calendar.f,{size:"17px"})})]}),!!error&&"boolean"!=typeof error&&(0,jsx_runtime.jsx)(InputErrorMessage.f,{id:errorId,children:error})]})})};DatePicker.displayName="DatePicker";try{DatePicker.displayName="DatePicker",DatePicker.__docgenInfo={description:"",displayName:"DatePicker",props:{name:{defaultValue:null,description:"Sets the `name` attribute of the DatePicker button element.",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Sets a preselected date in the input field.",name:"value",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Function executed when a date is selected.",name:"onChange",required:!0,type:{name:"(date: Date) => void"}},disabledDays:{defaultValue:null,description:'Sets the day(s) that should appear as disabled using "matching days modifiers": https://react-day-picker.js.org/basics/modifiers#disabling-days.',name:"disabledDays",required:!1,type:{name:"Matcher | Matcher[]"}},error:{defaultValue:null,description:"Renders a form validation `InputErrorMessage` when passed as `string | string[]`.",name:"error",required:!1,type:{name:"string | boolean | string[]"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DatePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},positioning:{defaultValue:null,description:"Sets the positioning of the DatePicker popover, uses the `Popover` defaults when not set.",name:"positioning",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"fixed"'}]}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DatePicker/DatePicker.tsx#DatePicker"]={docgenInfo:DatePicker.__docgenInfo,name:"DatePicker",path:"src/components/DatePicker/DatePicker.tsx#DatePicker"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DatePicker/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L9:()=>DateBox,Vm:()=>Placeholder,W2:()=>Container,a1:()=>IconWrapper,sJ:()=>DateBoxLabel,sc:()=>DrawerContent});var _utils_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/styles/inputStyle.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/transitionTime.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/typography.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/theme/spacing.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/theme/radius.ts");const Container=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
	position: relative;
	width: 100%;
	display: grid;
	gap: 4px;
`,IconWrapper=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
	background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("background.secondary")};
	width: 36px;
	border-left: 1px solid ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("border.primary")};
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 0;
	height: 100%;
	top: 0;
	transition: border-color ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.Y)()}, background-color ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.Y)()}, color ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.Y)()};
`,DateBox=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.button`
	${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_3__.c)("description")};
	border: 1px solid ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("border.primary")};
	height: ${_utils_styles__WEBPACK_IMPORTED_MODULE_4__.WC}px;
	width: fit-content;
	color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("content.primary")};
	padding: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.W)(1,3)};
	padding-right: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.W)(8)};
	border-radius: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_6__.q)("md")};
	overflow: hidden;
	background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("background.primary")};
	position: relative;
	align-items: center;
	text-align: left;
	transition: border-color ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.Y)()};
	cursor: pointer;

	// condition to avoid hover over writing style whe opened
	${_ref=>{let{opened}=_ref;return opened?_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
					border-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("primary.500")};

					${IconWrapper} {
						border-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("primary.500")};
						background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("primary.500")};
						color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("content.white")};
					}
			  `:_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
					&:hover {
						border-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("primary.300")};

						${IconWrapper} {
							border-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("primary.300")};
							background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("primary.200")};
							color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("primary.500")};
						}
					}
			  `}}
`,DrawerContent=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
	margin: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.W)(4)};
`,Placeholder=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.span`
	${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_3__.c)("description")}
	color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.$)("content.secondary")};
`,DateBoxLabel=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.span`
	padding-right: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.W)(2)};
	white-space: nowrap;
`},"./src/components/InlineDatePicker/BaseDatePicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>BaseDatePicker});__webpack_require__("./node_modules/react/index.js");var useLocalisation=__webpack_require__("./src/utils/hooks/useLocalisation.ts"),index_esm=__webpack_require__("./node_modules/react-day-picker/dist/index.esm.js"),LessThan=__webpack_require__("./src/foundations/icons/LessThan.tsx"),MoreThan=__webpack_require__("./src/foundations/icons/MoreThan.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),color=__webpack_require__("./src/utils/theme/color.ts");const Wrapper=styled_components_browser_esm.ZP.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${(0,spacing.W)(0,1,2,1)};
`,Title=styled_components_browser_esm.ZP.div`
	${(0,typography.c)("descriptionMedium")};
	color: ${(0,color.$)("content.primary")};
	cursor: default;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DatePickerNav=_ref=>{let{displayMonth}=_ref;const{goToMonth,nextMonth,previousMonth}=(0,index_esm.HJ)(),{formatDate}=(0,useLocalisation.G)();return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(IconButton.h,{ariaLabel:"Previous month",disabled:!previousMonth,onClick:()=>{previousMonth&&goToMonth(previousMonth)},children:(0,jsx_runtime.jsx)(LessThan.o,{})}),(0,jsx_runtime.jsx)(Title,{role:"heading","aria-live":"polite",children:formatDate(displayMonth,"LLLL y")}),(0,jsx_runtime.jsx)(IconButton.h,{ariaLabel:"Next month",disabled:!nextMonth,onClick:()=>nextMonth&&goToMonth(nextMonth),children:(0,jsx_runtime.jsx)(MoreThan.p,{})})]})};DatePickerNav.displayName="DatePickerNav";try{DatePickerNav.displayName="DatePickerNav",DatePickerNav.__docgenInfo={description:"",displayName:"DatePickerNav",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InlineDatePicker/DatePickerNav/DatePickerNav.tsx#DatePickerNav"]={docgenInfo:DatePickerNav.__docgenInfo,name:"DatePickerNav",path:"src/components/InlineDatePicker/DatePickerNav/DatePickerNav.tsx#DatePickerNav"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/react-day-picker/dist/style.css");var fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts");const StyledDatePicker=(0,styled_components_browser_esm.ZP)(index_esm._W)`
	font-family: ${(0,fontFamily.I)("default")};

	&.rdp {
		--rdp-cell-size: 36px;
		--rdp-accent-color: ${(0,color.$)("interactive.primary.idle")}; // selected day
		--rdp-background-color: ${(0,color.$)("surface.primary50")};
		margin: 0;
	}

	// days of the week
	.rdp-head_cell {
		text-transform: capitalize;
		${(0,typography.c)("caption2")};
		color: ${(0,color.$)("content.secondary")};
		cursor: default;
	}

	// days in the currently viewed month
	.rdp-day {
		${(0,typography.c)("captionMedium")};
		border-radius: ${(0,radius.q)("md")};
		color: ${(0,color.$)("content.primary")};
	}

	// days outside the currently viewed month
	.rdp-day_outside {
		color: ${(0,color.$)("content.secondary")};
	}

	// selected day
	.rdp-day_selected:not(.rdp-day_disabled) {
		&:not(.rdp-day_range_middle) {
			color: ${(0,color.$)("content.white")};
		}
		&:hover {
			background-color: ${(0,color.$)("surface.primary50")};
		}
	}

	// today
	.rdp-day_today:not(.rdp-day_selected) {
		color: ${(0,color.$)("interactive.primary.idle")};
	}

	// disabled days
	.rdp-day_disabled,
	.rdp-button[disabled]:not(.rdp-day_selected) {
		background-color: inherit;
		color: ${(0,color.$)("content.disabled")};
		cursor: not-allowed;
		opacity: 1;
	}

	/* Classes for date range selections */

	// days between selected start and end date
	.rdp-day_range_middle {
		background-color: ${(0,color.$)("surface.primary50")};
		color: ${(0,color.$)("content.primary")};
		border-radius: 0;
	}

	// days between selected start and end date, before selecting an end date
	.rdp-range_entered:not(.rdp-day_range_start):not(.rdp-day_range_end) {
		background-color: ${(0,color.$)("surface.primary50")};
		color: ${(0,color.$)("content.primary")};
		border-radius: 0;
	}

	// start date
	.rdp-day_range_start {
		border-radius: ${(0,radius.q)("md")} 0 0 ${(0,radius.q)("md")};
	}

	// end date
	.rdp-day_range_end:not(.rdp-range_first_day) {
		border-radius: 0 ${(0,radius.q)("md")} ${(0,radius.q)("md")} 0;
	}

	// start and end date on the same date
	.rdp-day_range_start.rdp-day_range_end:not(.rdp-range_first_day) {
		border-radius: ${(0,radius.q)("md")};
	}
`,BaseDatePicker=_ref=>{let{...props}=_ref;const{firstDayOfWeek}=(0,useLocalisation.G)(),currentMonth="single"===props.mode?props.selected:props.selected?.from;return(0,jsx_runtime.jsx)(StyledDatePicker,{weekStartsOn:firstDayOfWeek,showOutsideDays:!0,defaultMonth:currentMonth,components:{Caption:DatePickerNav},...props})};BaseDatePicker.displayName="BaseDatePicker";try{BaseDatePicker.displayName="BaseDatePicker",BaseDatePicker.__docgenInfo={description:"",displayName:"BaseDatePicker",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InlineDatePicker/BaseDatePicker.tsx#BaseDatePicker"]={docgenInfo:BaseDatePicker.__docgenInfo,name:"BaseDatePicker",path:"src/components/InlineDatePicker/BaseDatePicker.tsx#BaseDatePicker"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Toast/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ix:()=>ToastContainer,Xd:()=>dismissToast,A_:()=>isToastActive,CF:()=>showToast,es:()=>updateToast});__webpack_require__("./node_modules/react/index.js");var react_toastify_esm=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs"),CircleCheck=__webpack_require__("./src/foundations/icons/CircleCheck.tsx"),Error=__webpack_require__("./src/foundations/icons/Error.tsx"),Info=__webpack_require__("./src/foundations/icons/Info.tsx"),Close=__webpack_require__("./src/foundations/icons/Close.tsx"),styles=__webpack_require__("./src/components/Toast/styles.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CloseButton=_ref=>{let{closeToast}=_ref;return(0,jsx_runtime.jsx)(styles.hs,{ariaLabel:"Close",onClick:closeToast,children:(0,jsx_runtime.jsx)(Close.x,{})})};CloseButton.displayName="CloseButton";try{CloseButton.displayName="CloseButton",CloseButton.__docgenInfo={description:"",displayName:"CloseButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/CloseButton.tsx#CloseButton"]={docgenInfo:CloseButton.__docgenInfo,name:"CloseButton",path:"src/components/Toast/CloseButton.tsx#CloseButton"})}catch(__react_docgen_typescript_loader_error){}const Toast=_ref=>{let{title,description}=_ref;return(0,jsx_runtime.jsxs)(styles.VY,{children:[(0,jsx_runtime.jsx)(styles.Dx,{children:title}),description&&(0,jsx_runtime.jsx)(styles.dk,{children:description})]})};Toast.displayName="Toast";try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}const render=_ref=>{let{closeToast,data}=_ref;if(!data)return null;const{title,description}=data;return(0,jsx_runtime.jsx)(Toast,{title,description:description instanceof Function?description({closeToast}):description})};render.displayName="render";const iconType={success:CircleCheck.y,error:Error.j,warning:Error.j,info:Info.k},getTypeIcon=type=>{const ToastIcon=iconType[type];return(0,jsx_runtime.jsx)(styles.Pt,{children:(0,jsx_runtime.jsx)(ToastIcon,{size:"20px"})})};getTypeIcon.displayName="getTypeIcon";const showToast=_ref2=>{let{type,title,description,onClick,autoClose=5e3,closeVisible=!0,draggable=!0,toastId,containerId}=_ref2;return(0,react_toastify_esm.Am)(render,{type,icon:getTypeIcon(type),closeButton:!!closeVisible&&CloseButton,autoClose,hideProgressBar:!0,closeOnClick:"function"==typeof onClick,pauseOnHover:!0,draggable,onClick,toastId,containerId,data:{title,description}})},dismissToast=toastId=>{react_toastify_esm.Am.dismiss(toastId)},isToastActive=toastId=>react_toastify_esm.Am.isActive(toastId),updateToast=(toastId,_ref3)=>{let{title,description,...props}=_ref3;react_toastify_esm.Am.update(toastId,{..."onClick"in props?{closeOnClick:"function"==typeof props.onClick}:{},..."closeVisible"in props?{closeButton:!!props.closeVisible&&CloseButton}:{},..."type"in props&&props.type?{icon:getTypeIcon(props.type)}:{},...void 0!==title?{data:{title,description},render}:{},...props})},ToastContainer=_ref4=>{let{containerId,position="top-right",className="toast-container"}=_ref4;return(0,jsx_runtime.jsx)(styles.FG,{enableMultiContainer:!!containerId,containerId,position,limit:5,className})};ToastContainer.displayName="ToastContainer";try{ToastContainer.displayName="ToastContainer",ToastContainer.__docgenInfo={description:"",displayName:"ToastContainer",props:{containerId:{defaultValue:null,description:"Enables multiple toast containers and sets the container id.",name:"containerId",required:!1,type:{name:"Id"}},position:{defaultValue:{value:"top-right"},description:"Position in which to render the toasts.",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-center"'},{value:'"bottom-left"'}]}},className:{defaultValue:{value:"toast-container"},description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"ToastClassName"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#ToastContainer"]={docgenInfo:ToastContainer.__docgenInfo,name:"ToastContainer",path:"src/components/Toast/index.tsx#ToastContainer"})}catch(__react_docgen_typescript_loader_error){}try{showToast.displayName="showToast",showToast.__docgenInfo={description:"",displayName:"showToast",props:{type:{defaultValue:null,description:"Changes the toast type.",name:"type",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},title:{defaultValue:null,description:"Sets the toast title text.",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Renders text content and / or any HTML node in the toast.",name:"description",required:!1,type:{name:"ReactNode | DescriptionFn"}},onClick:{defaultValue:null,description:"Function executed when clicking inside the toast notification.",name:"onClick",required:!1,type:{name:"(() => void)"}},autoClose:{defaultValue:{value:"5000"},description:"Delay in ms to close the toast. If set to false, the toast needs to be closed manually.",name:"autoClose",required:!1,type:{name:"number | false"}},closeVisible:{defaultValue:{value:"true"},description:"Toggles the visibility of the close button in the toast.",name:"closeVisible",required:!1,type:{name:"boolean"}},draggable:{defaultValue:{value:"true"},description:"Toggles whether the toast can be dragged.",name:"draggable",required:!1,type:{name:"boolean"}},toastId:{defaultValue:null,description:"Sets a custom id for the toast.",name:"toastId",required:!1,type:{name:"Id"}},containerId:{defaultValue:null,description:"Specify the container id when using multiple toast containers.",name:"containerId",required:!1,type:{name:"Id"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#showToast"]={docgenInfo:showToast.__docgenInfo,name:"showToast",path:"src/components/Toast/index.tsx#showToast"})}catch(__react_docgen_typescript_loader_error){}try{dismissToast.displayName="dismissToast",dismissToast.__docgenInfo={description:"",displayName:"dismissToast",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#dismissToast"]={docgenInfo:dismissToast.__docgenInfo,name:"dismissToast",path:"src/components/Toast/index.tsx#dismissToast"})}catch(__react_docgen_typescript_loader_error){}try{isToastActive.displayName="isToastActive",isToastActive.__docgenInfo={description:"",displayName:"isToastActive",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#isToastActive"]={docgenInfo:isToastActive.__docgenInfo,name:"isToastActive",path:"src/components/Toast/index.tsx#isToastActive"})}catch(__react_docgen_typescript_loader_error){}try{ToastAnchor.displayName="ToastAnchor",ToastAnchor.__docgenInfo={description:"",displayName:"ToastAnchor",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#ToastAnchor"]={docgenInfo:ToastAnchor.__docgenInfo,name:"ToastAnchor",path:"src/components/Toast/index.tsx#ToastAnchor"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Toast/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>Title,FG:()=>StyledToastContainer,Pt:()=>TypeIcon,VY:()=>Content,b2:()=>ToastAnchor,dk:()=>Description,hs:()=>CloseIconButton});var react_toastify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs"),_utils_styled__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react-toastify/dist/ReactToastify.css"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/spacing.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/theme/typography.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/theme/transitionTime.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/utils/theme/modifier.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/utils/theme/fontFamily.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/utils/theme/zIndex.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/utils/theme/radius.ts"),_IconButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/IconButton/IconButton.tsx"),_Pressable__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Pressable/index.tsx");const CloseIconButton=(0,_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP)(_IconButton__WEBPACK_IMPORTED_MODULE_3__.h)`
	opacity: 0;
	transition: opacity 0.2s;
`,TypeIcon=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
	flex-basis: 16px;
	flex-shrink: 0;
	flex-grow: 0;
	height: 20px;
	display: flex;
	align-items: center;
`,Content=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
	width: 100%;
	flex-shrink: 1;
	flex-grow: 1;
	display: grid;
	grid-template-columns: 1fr;
	gap: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.W)(1)};
`,Title=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
	${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.c)("captionMedium")};
	display: -webkit-box;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	word-break: break-word;
	overflow: hidden;
`,Description=_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
	${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.c)("caption2")};
	display: block;
`,ToastAnchor=(0,_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP)(_Pressable__WEBPACK_IMPORTED_MODULE_6__.s)`
	text-decoration: underline;
	cursor: pointer;
	transition: opacity ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_7__.Y)()};
	font-weight: inherit;

	${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_8__.c)((_ref=>{let{href}=_ref;return!href}),_utils_styled__WEBPACK_IMPORTED_MODULE_2__.iv`
			background-color: transparent;
			border: none;
			font-family: inherit;
			padding: 0;
		`)}

	&:hover {
		opacity: 0.7;
	}
`,StyledToastContainer=(0,_utils_styled__WEBPACK_IMPORTED_MODULE_2__.ZP)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.Ix)`
	transform: translate3d(0, 0, 9999px);
	position: fixed;
	font-family: inherit;
	width: 332px;
	min-height: 44px;
	box-sizing: border-box;
	padding: 0;

	--toastify-color-light: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("content.primary")};
	--toastify-color-dark: var(--toastify-color-light);
	--toastify-color-info: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("surface.primary50")};
	--toastify-color-success: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("surface.green50")};
	--toastify-color-warning: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("surface.yellow50")};
	--toastify-color-error: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("surface.red50")};
	//--toastify-color-transparent: rgba(255, 255, 255, 0.7);

	--toastify-icon-color-info: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("primary.600")};
	--toastify-icon-color-success: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("green.600")};
	--toastify-icon-color-warning: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("yellow.800")};
	--toastify-icon-color-error: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("red.600")};

	//--toastify-toast-width: 320px;
	//--toastify-toast-background: #fff;
	//--toastify-toast-min-height: 64px;
	//--toastify-toast-max-height: 800px;
	--toastify-font-family: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_10__.I)("default")};
	--toastify-z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_11__.W)("toast")};

	--toastify-text-color-light: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("content.primary")};
	--toastify-text-color-dark: var(--toastify-text-color-light);

	--toastify-text-color-info: var(--toastify-text-color-light);
	--toastify-text-color-success: var(--toastify-text-color-light);
	--toastify-text-color-warning: var(--toastify-text-color-light);
	--toastify-text-color-error: var(--toastify-text-color-light);

	//--toastify-spinner-color: #616161;
	//--toastify-spinner-color-empty-area: #e0e0e0;

	// Used when no type is provided
	// toast("**hello**")
	//--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
	// Used when no type is provided
	--toastify-color-progress-dark: var(--toastify-color-progress-light);
	--toastify-color-progress-info: var(--toastify-icon-color-info);
	--toastify-color-progress-success: var(--toastify-icon-color-success);
	--toastify-color-progress-warning: var(--toastify-icon-color-warning);
	--toastify-color-progress-error: var(--toastify-icon-color-error);

	.Toastify__toast {
		box-sizing: border-box;
		padding: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.W)(4,2)};
		width: 100%;
		display: flex;
		align-items: flex-start;
		color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_9__.$)("content.primary")};
		box-shadow: none;
		cursor: default;
		min-height: 44px;
		overflow: hidden;
		border-radius: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_12__.q)("md")};
		margin-bottom: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.W)(2)};

		&:hover ${CloseIconButton} {
			opacity: 1;
		}
	}

	.Toastify__toast-icon {
		margin: 0;
	}

	.Toastify__toast.Toastify__toast--success {
		background-color: var(--toastify-color-success);

		.Toastify__toast-icon {
			color: var(--toastify-icon-color-success);
		}
	}

	.Toastify__toast.Toastify__toast--error {
		background-color: var(--toastify-color-error);

		.Toastify__toast-icon {
			color: var(--toastify-icon-color-error);
		}
	}

	.Toastify__toast.Toastify__toast--warning {
		background-color: var(--toastify-color-warning);

		.Toastify__toast-icon {
			color: var(--toastify-icon-color-warning);
		}
	}

	.Toastify__toast.Toastify__toast--info {
		background-color: var(--toastify-color-info);

		.Toastify__toast-icon {
			color: var(--toastify-icon-color-info);
		}
	}

	.Toastify__toast-body {
		width: 100%;
		display: flex;
		align-items: flex-start;
		gap: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.W)(2)};
		padding: 0;
	}
`},"./src/foundations/icons/Calendar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Calendar});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Calendar=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"M15.8259 3.3352V1.6676h-1.6787v1.6676H5.82036V1.6676H4.16381v1.6676c-.45278 0-.87245.18773-1.18167.48591-.30922.29818-.48592.71784-.48592 1.18167V15.8366c0 .4528.18774.8724.48592 1.1816.29818.3093.71784.486 1.18167.486H15.8259c.4638 0 .8724-.1878 1.1816-.486.3093-.2981.486-.7178.486-1.1816V5.00278c.011-.46383-.1767-.88349-.486-1.18167-.3092-.29818-.7288-.48591-1.1816-.48591Zm0 12.5014H4.15276V7.49864H15.8148l.0111 4.16346v4.1745Zm-5.0028-5.0028h3.3352v3.3352h-3.3352v-3.3352Z"})})};Calendar.displayName="Calendar";try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Calendar.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"src/foundations/icons/Calendar.tsx#Calendar"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/CircleCheck.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>CircleCheck});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CircleCheck=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{fillRule:"evenodd",clipRule:"evenodd",d:"M15.6171 4.37411c3.1068 3.10676 3.1068 8.14379 0 11.25059-3.1068 3.1068-8.14383 3.1068-11.25059 0-3.10676-3.1068-3.10676-8.14383 0-11.25059 3.10676-3.10676 8.14379-3.10676 11.25059 0ZM7.02387 9.5026l1.97469 1.99 4.49264-4.47745.9839.99396-5.47654 5.47649-2.98-2.98 1.00531-1.003Z"})})};CircleCheck.displayName="CircleCheck";try{CircleCheck.displayName="CircleCheck",CircleCheck.__docgenInfo={description:"",displayName:"CircleCheck",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/CircleCheck.tsx#CircleCheck"]={docgenInfo:CircleCheck.__docgenInfo,name:"CircleCheck",path:"src/foundations/icons/CircleCheck.tsx#CircleCheck"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Error.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Error});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Error=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"M17.4384 15.0524 11.011 3.93144c-.4307-.73993-1.49085-.73993-1.92155 0L2.67311 15.0524c-.41966.7399.11043 1.6565.96079 1.6565h12.8437c.8504 0 1.3805-.9166.9608-1.6565Zm-6.5599-.0221H9.21093v-1.6676h1.66757v1.6676Zm0-3.3242H9.21093V6.70338h1.66757v5.00272Z"})})};Error.displayName="Error";try{Error.displayName="Error",Error.__docgenInfo={description:"",displayName:"Error",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Error.tsx#Error"]={docgenInfo:Error.__docgenInfo,name:"Error",path:"src/foundations/icons/Error.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Info.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Info});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Info=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"M9.99443 1.66751c-4.60519 0-8.33794 3.73275-8.33794 8.33789 0 4.6052 3.74379 8.3269 8.33794 8.3269 4.59417 0 8.33797-3.7327 8.33797-8.3269 0-4.5941-3.7328-8.33789-8.33797-8.33789Zm.83927 12.50139H9.16616V9.16613h1.66754v5.00277Zm0-6.67035H9.16616V5.83097h1.66754v1.66758Z"})})};Info.displayName="Info";try{Info.displayName="Info",Info.__docgenInfo={description:"",displayName:"Info",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Info.tsx#Info"]={docgenInfo:Info.__docgenInfo,name:"Info",path:"src/foundations/icons/Info.tsx#Info"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/LessThan.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>LessThan});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LessThan=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"m5.79001 10.0386 1.17063-1.17062 4.66036-4.6604 1.1817 1.17062-4.6604 4.6604 4.6604 4.6604-1.1817 1.1817-4.66036-4.6715-1.17063-1.1706Z"})})};LessThan.displayName="LessThan";try{LessThan.displayName="LessThan",LessThan.__docgenInfo={description:"",displayName:"LessThan",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LessThan.tsx#LessThan"]={docgenInfo:LessThan.__docgenInfo,name:"LessThan",path:"src/foundations/icons/LessThan.tsx#LessThan"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/MoreThan.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>MoreThan});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MoreThan=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{d:"m14.2129 10.0386-1.1706 1.1706-4.66044 4.6604L7.2002 14.699l4.6604-4.6604-4.6604-4.66042L8.38186 4.1965l4.66044 4.67146 1.1706 1.17064Z"})})};MoreThan.displayName="MoreThan";try{MoreThan.displayName="MoreThan",MoreThan.__docgenInfo={description:"",displayName:"MoreThan",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/MoreThan.tsx#MoreThan"]={docgenInfo:MoreThan.__docgenInfo,name:"MoreThan",path:"src/foundations/icons/MoreThan.tsx#MoreThan"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/hooks/useLocalisation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>useLocalisation});const formatCurrency=(number,currency,options)=>number.toLocaleString("en-US",{style:"currency",currency,minimumFractionDigits:0,maximumFractionDigits:2,...options});var esm_format=__webpack_require__("./node_modules/date-fns/esm/format/index.js");const formatDate=(date,format)=>(0,esm_format.Z)(date,format),useLocalisation=()=>({firstDayOfWeek:1,formatCurrency,formatDate})},"./src/utils/noop/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>noop});const noop=()=>{}}}]);
//# sourceMappingURL=components-Modal-Modal-stories-mdx.b7c8f811.iframe.bundle.js.map