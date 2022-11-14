import * as React from 'react';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { AlgoliaSearchButton, SearchProvider } from '../components/AlgoliaSearch/AlgoliaSearch'

export const MAX_QUERY_SIZE = 64;

type PropsDocs = {
}
type PropsDocsInstallation = {
}
const Installation: React.FC<PropsDocsInstallation> = ({}: PropsDocsInstallation) => {
  return (
    <>
      <Head>
        <title className="text-gray-100" style={{fontFamily: "Roboto Mono"}}>Dashboard</title>
      </Head>
      <style global jsx>{`
        html {
          height:100%
          min-width: 1050px;
          width: 100%;
        }
        *,
        :after,
        :before,
        html {
          box-sizing:border-box
        }
        :root {
          --font-sans: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
          --geist-console-purple: #8a63d2;
        }
        a,
        details summary {
          -webkit-tap-highlight-color:rgba(0,0,0,0)
        }
        body {
          position:relative;
          min-height:100%;
          max-width:100vw;
          margin:0
        }
        body,
        html {
          font-family:var(--font-sans);
          text-rendering:optimizeLegibility;
          -webkit-font-smoothing:antialiased;
          -moz-osx-font-smoothing:grayscale;
          background-color:var(--geist-background);
          color:var(--geist-foreground);
          scroll-padding-top:var(--header-height)
        }
        #__next {
          position:relative;
          z-index:0
        }
        svg {
          shape-rendering:crispEdges
        }
        svg circle,
        svg line,
        svg path,
        svg polygon,
        svg rect {
          shape-rendering:geometricprecision
        }
    `}</style>
    <div className="">
    <SearchProvider>
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end" style={{ width: "108rem" }}>
        <picture>
          <source srcSet="/_next/static/media/docs@30.beeb08605f12f699c5abc3814763b65e.avif" type="image/avif"></source>
          <img src="/_next/static/media/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png" alt="" className="w-[71.75rem] flex-none max-w-none dark:hidden"></img>
        </picture>
        <picture>
          <source srcSet="/_next/static/media/docs-dark@30.77f062b5fd90f0d2cd4752cd9a8649c8.avif" type="image/avif"></source>
          <img src="/_next/static/media/docs-dark@tinypng.a8984b7fb44a4f8232d04de50220ab31.png" alt="" className="w-[90rem] flex-none max-w-none hidden dark:block"></img>
        </picture>
      </div>
    </div>
    <Navbar className="focus:text-gray-700 h-16 hover:text-gray-700 items-center justify-center md:min-w-screen md:max-w-screen md:w-screen w-screen md:max-w-screen-lg py-4 relative text-gray-500 shadow-lg flex sm:mx-auto mx-auto max-w-full">
    {{
       content: <div id="sub-menu" className="">
      <nav id="sub-menu_nav">
         <div id="sub-menu_wrap" className="h-12 relative overflow-hidden">
         <div id="sub-menu" className="sm:mx-auto mx-auto max-w-full md:min-w-screen md:max-w-screen md:w-screen w-screen md:max-w-screen-lg">
            {/* style={{ width: "1048px" }} */}
            <div id="sub-menu_inner" className="flex font-medium h-12 items-center max-w-full mt-auto mr-auto ml-auto overflow-auto px-0 py-6 min-w-full -mb-1">
              <div id="sub-menu_menu-content" className="flex flex-1 flex-grow items-center" style={{ height: "49px", marginLeft: "-9px" }}>
              <div id="sub-menu_menu-tabs" className="flex">
              <div id="sub-menu_menu-tabs_highlight" className="opacity-0 contain-strict bg-black absolute t-3 l-0 leading-web-mdn-normal radius-2 h-8 text-base "></div>
              <a id="sub-menu_menu-tab-link_overview" className="cursor-pointer font-normal hover:text-white-100 min-w-12 relative inline-block no-underline outline-none px-4 py-3 text-sm text-black-800" href="/dashboard">Overview</a>
              <a id="sub-menu_menu-tab-link_integrations" className="cursor-pointer font-normal hover:text-white-100 min-w-12 relative inline-block no-underline outline-none px-4 py-3 text-sm text-black-800" href="/integrations">Integrations</a>
              <a id="sub-menu_menu-tab-link_activity" className="cursor-pointer font-normal hover:text-white-100 min-w-12 relative inline-block no-underline outline-none px-4 py-3 text-sm text-black-800" href="/activity">Activity</a>
              <a id="sub-menu_menu-tab-link_domains" className="cursor-pointer font-normal hover:text-white-100 min-w-12 relative inline-block no-underline outline-none px-4 py-3 text-sm text-black-800" href="/domains">Domains</a>
              <a id="sub-menu_menu-tab-link_usage" className="cursor-pointer font-normal hover:text-white-100 min-w-12 relative inline-block no-underline outline-none px-4 py-3 text-sm text-black-800" href="/usage">Usage</a>
              <a id="sub-menu_menu-tab-link_settings" className="cursor-pointer font-normal hover:text-white-100 min-w-12 relative inline-block no-underline outline-none px-4 py-3 text-sm text-black-800" href="/settings">Settings</a>
              <a id="sub-menu_menu-tab-link_docs" className="cursor-pointer font-normal hover:text-white-100 min-w-12 relative inline-block no-underline outline-none px-4 py-3 text-sm text-black-800" href="/docs">Docs</a>
              <a id="sub-menu_menu-tab-link_git" className="cursor-pointer font-normal hover:text-white-100 min-w-12 relative inline-block no-underline outline-none px-4 py-3 text-sm text-black-800" href="/git">Git</a>
            </div>
          </div>
        </div>
        </div>
        </div>
       </nav>
      </div>
    }}
    </Navbar>
    <div className="max-w-screen mx-auto px-0 sm:px-0 md:px-0 flex md:min-w-screen md:max-w-screen md:w-screen w-screen md:max-w-screen-lg">
      <div className="hidden lg:block relative z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 pr-8 overflow-y-auto" style={{ width: "19.5rem" }}>
        <nav className="lg:text-sm lg:leading-6 relative">
          <div className="sticky top-0 -ml-0.5 pointer-events-none">
          <div className="h-10 bg-black-900"></div>
            <div className="bg-gradient-to-b from-white from-black-800 mb-10 relative pointer-events-auto">
              {/* <button className="text-black-800 tw-black-800 hidden w-full lg:flex items-center leading-6 text-sm rounded-md ring-1 ring-black-300 shadow-sm py-1.5 pl-2 pr-3 bg-black-300 highlight-white/5 hover:bg-black-200" style={{ borderRadius: "5px" }}>
              <AlgoliaSearchButton style={{ display: "flex", alignItems: "center" }}>
                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none"><path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
                Quick search...
                <span className="ml-auto pl-3 flex-none font-semibold text-black-800 text-xs">Ctrl K</span>
              </AlgoliaSearchButton>
              </button> */}
            </div>
          </div>
          <ul>
            <li><a className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-black-800" href="/docs/installation">
              <div className="white-100 bg-black-300 group-hover:shadow group-hover:highlight-white-100/10 group-hover:bg-black-300 highlight-white-100/10 mr-4 rounded-md shadow-sm">
                <svg stroke="currentColor" className="h-6 w-6" viewBox="0 0 24 24" fill="none" style={{ color: "#fff" }}><path fillRule="evenodd" clipRule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z" className="fill-black-800 group-hover:fill-white-100"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z" className="fill-black-800 group-hover:fill-black-800"></path></svg>
              </div>
              Documentation
            </a></li>
            {/* <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-sm text-black-800">Getting Started</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/installation">Installation</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/editor-setup">Editor Setup</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/using-with-preprocessors">Using with Preprocessors</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/optimizing-for-production">Optimizing for Production</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/browser-support">Browser Support</a></li>
              </ul>
            </li> */}
            {/* <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Core Concepts</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300 dark:border-black-800">
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/browser-support">Utility-First Fundamentals</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/browser-support">Hover, Focus, and Other States</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/browser-support">Responsive Design</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/dark-mode">Dark Mode</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/reusing-styles">Reusing Styles</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/adding-custom-styles">Adding Custom Styles</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-sm text-black-800" href="/docs/functions-and-directives">Functions Directives</a></li>
              </ul>
            </li> */}
            {/*<li>
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Customization</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300 text-sm" href="/docs/functions-and-directives">Configuration</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300 text-sm" href="/docs/functions-and-directives">Content</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300 text-sm" href="/docs/functions-and-directives">Theme</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300 text-sm" href="/docs/functions-and-directives">Screens</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300 text-sm" href="/docs/functions-and-directives">Colors</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300 text-sm" href="/docs/functions-and-directives">Spacing</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300 text-sm" href="/docs/functions-and-directives">Plugins</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300 text-sm" href="/docs/functions-and-directives">Presets</a></li>
              </ul>
            </li>
            <li>
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Base Styles</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300 text-black-800">
                <li><a className="block border-l pl-4 -ml-px text-sky-500 border-current font-semibold text-black-800" href="/docs/preflight">Preflight</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Layout</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300 text-black-800">
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/aspect-ratio">Aspect Ratio</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/container">Container</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/columns">Columns</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/break-after">Break After</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/break-before">Break Before</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/break-inside">Break Inside</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/box-decoration-break">Box Decoration Break</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/box-sizing">Box Sizing</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/display">Display</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/floats">Floats</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/clear">Clear</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/isolation">Isolation</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/object-fit">Object Fit</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/object-position">Object Position</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/overflow">Overflow</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/overscroll">Overscroll Behavior</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/position">Position</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/top-right-bottom-left">Top / Right / Bottom / Left</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/visibility">Visibility</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/z-index">Z-Index</a></li>
              </ul>
            </li> */}
            {/* <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Flexbox Grid</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/flex-basis">Flex Basis</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/flex-direction">Flex Direction</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/flex-wrap">Flex Wrap</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/flex">Flex</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/flex-grow">Flex Grow</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/flex-shrink">Flex Shrink</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/order">Order</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/grid-template-columns">Grid Template Columns</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/grid-column-start-end">Grid Column Start/End</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/grid-template-rows">Grid Template Rows</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/grid-row-start-end">Grid Row Start/End</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/grid-auto-flow">Grid Auto Flow</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/grid-auto-columns">Grid Auto Columns</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/flex-basis">Grid Auto Rows</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/gap">Gap</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/justify-content">Justify Content</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/justify-items">Justify Items</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/justify-self">Justify Self</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/align-content">Aligh Content</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/align-items">Align Items</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/align-self">Align Self</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/place-content">Place Content</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/place-items">Place Items</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/place-self">Place Self</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Spacing</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/padding">Padding</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/padding">Padding</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/padding">Padding</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Sizing</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/width">Width</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/min-width">Min-Width</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/max-width">Max-Width</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/height">Height</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/min-height">Min-Height</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/max-height">Max-Height</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Typography</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/font-family">Font Family</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/font-size">Font Size</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/font-smoothing">Font Smoothing</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/font-style">Font Style</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/font-weight">Font Weight</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/font-variant-numeric">Font Variant Numeric</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/letter-spacing">Letter Spacing</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/line-height">Line Height</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/list-style-type">List Style Type</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/list-style-position">List Style Position</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/text-align">Text Align</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/text-color">Text Color</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/text-decoration">Text Decoration</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/text-decoration-color">Text Decoration Color</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/font-variant-numeric">Text Decoration Style</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/font-variant-numeric">Text Decoration Thickness</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/text-underline-offset">Text Underline Offset</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/text-transform">Text Transform</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/text-overflow">Text Overflow</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/text-indent">Text Indent</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/vertical-align">Vertical Align</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/whitespace">Whitespace</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/word-break">Word Break</a></li>
                <li><a className="block border-l pl-4 -ml-px text-black-800 border-black-300" href="/docs/content">Content</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Backgrounds</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/background-attachment">Background Attachment</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/background-clip">Background Clip</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/background-color">Background Color</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/background-origin">Background Origin</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/background-position">Background Position</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/background-repeat">Background Repeat</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/background-size">Background Size</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/background-image">Background Image</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/gradient-color-stops">Gradient Color Stops</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Borders</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/border-radius">Border Radius</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/border-width">Border Width</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/border-color">Border Color</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/border-style">Border Style</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/border-width">Divide Width</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/divide-color">Divide Color</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/divide-style">Divide Style</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/outline-width">Outline Width</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/outline-color">Outline Color</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/outline-style">Outline Style</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/outline-offset">Outline Offset</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/ring-width">Ring Width</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/ring-color">Ring Color</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/ring-offset-width">Ring Offset Width</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/ring-offset-color">Ring Offset Color</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Effects</h5>
              <ul className="space-y-6 lg:space-y-2 border-l">
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/box-shadow">Box Shadow</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/box-shadow-color">Box Shadow Color</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/opacity">Opacity</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/mix-blend-mode">Mix Blend Mode</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/background-blend-mode">Background Blend Mode</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Filters</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/blur">Blur</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/brightness">Brightness</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/contrast">Contrast</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/drop-shadow">Drop Shadow</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Grayscale</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Hue Rotate</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Invert</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Saturate</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Sepia</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Backdrop Blur</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Backdrop Brightness</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Backdrop Contrast</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Backdrop Contrast</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Backdrop Contrast</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Backdrop Contrast</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Backdrop Contrast</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Backdrop Contrast</a></li>
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/grayscale">Backdrop Contrast</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Tables</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-semibold" href="/docs/blur">Blur</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800 dark:text-slate-200">Transitions Animation</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/blur">Blur</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Transforms</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px border-black-300 font-semibold text-black-800" href="/docs/blur">Blur</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Interactivity</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/blur">Blur</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">SVG</h5>
              <ul className="space-y-6 lg:space-y-2 border-l text-black-800">
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/svg">SVG</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Accessibility</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/blur">Screen Readers</a></li>
              </ul>
            </li>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-black-800">Official Plugins</h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-black-300">
                <li><a className="block border-l pl-4 -ml-px border-black-300 text-black-800" href="/docs/blur">Typography</a></li>
              </ul>
            </li> */}
          </ul>
        </nav>
      </div>
      <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
          <header className="header mb-10 md:flex md:items-start">
            <div className="flex-auto max-w-4xl">
            <p className="mb-4 text-sm leading-6 font-semibold text-black-800">Installation</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black-800 tracking-tight">Get started with Tailwind CSS</h1>
            <p className="mt-4 text-lg text-black-800">Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>
            <p className="mt-4 text-lg text-black-800">It's fast, flexible, and reliable — with zero-runtime.</p>
            </div>
          </header>
          <section className="text-sm leading-6 mt-16">
            <div className="relative z-10">
              <h2 className="text-xl tracking-tight font-bold mb-3 text-black-300" data-docsearch-ignore="true">Installation</h2>
              <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
                <div className="flex-none min-w-full px-4 sm:px-6">
                  <ul className="border-b border-black-300 space-x-6 flex whitespace-nowrap border-black-300/5">
                    <li><h2>
                      <a className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-black-800 border-black-300" href="/docs/installation">Tailwind CLI</a>  
                    </h2></li>
                    <li><h2>
                      <a className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-black-800 border-transparent hover:border-black-300" href="/docs/installation/using-postcss">Using PostCSS</a>
                    </h2></li>
                    <li><h2>
                      <a className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-black-800 border-transparent hover:border-black-300" href="/docs/installation/framework-guides">Framework Guides</a>
                    </h2></li>
                    <li><h2>
                      <a className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-black-800 border-transparent hover:border-black-300" href="/docs/installation/play-cdn">Play CDN</a>
                    </h2></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
    </div>
    {/* <div className="lg:pl-[19.5rem]" style={{paddingLeft: "19.5rem"}}> */}
    {/* </div> */}
    {/* </div>
    </div> */}
    </SearchProvider>
    </div>
    </>
  )
}

const Docs: React.FC<PropsDocs> = ({}: PropsDocs) => {
  return (
    <>
      <Installation />
    </>
  )
}

export default Docs;