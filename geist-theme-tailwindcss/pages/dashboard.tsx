import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { Navbar } from '../components/Navbar';
import { TipJar } from '../components/TipJar';
//import { ChartDonut } from '../components/Chart';

/*
  inline style jsx not globals.css is where css vars
  and root css styles are being read 
  submenu border is not found
  has --accents-2: #333;
  backup color #fff
  https://www.npmjs.com/package/tailwind-content-placeholder
*/

/*
  <ReactPlaceholder type='media' rows={7} ready={this.state.ready}>
    <MyComponent />
  </ReactPlaceholder>
  https://abstack.pk/post/how-to-add-a-placeholder-image-in-nextjs
  https://jsonplaceholder.typicode.com/posts
*/

export const joinClassNames = (...classNames: (string | undefined)[]) =>
classNames.filter(c => c).join(' ');

const urlList = [
  "/dashboard:overview",
  "/integrations",
  "/activity",
  "/domains",
  "/usage",
  "/settings",
  "/docs",
  "/git",
]
type ContentPlaceholderProps = {
  children?: React.ReactNode;
  className?: string;
  // we have a default color, so we can set this as optional
  color?: string;
  /** delay in millis to wait when passing from ready to NOT ready */
  delay?: number;
  /** if true, the placeholder will never be rendered again once ready becomes true, even if it becomes false again */
  firstLaunchOnly?: boolean;
  /** pass `true` when the content is ready and `false` when it's loading */
  ready: boolean;
  // we have a default number of rows, so we can set this as optional
  rows?: number;
  showLoadingAnimation?: boolean;
  style?: React.CSSProperties;
  customPlaceholder?: undefined | React.ReactElement;
  type?: undefined;
}

const ContentPlaceholder: React.FC<ContentPlaceholderProps> = ({
  children,
  className,
  color = '#CDCDCD',
  customPlaceholder,
  delay = 0,
  firstLaunchOnly,
  ready: readyProp,
  rows = 3,
  showLoadingAnimation,
  type = 'text',
  ...props
}) => {
  const [ready, setReady] = React.useState(readyProp);
  const timeout = React.useRef<null | number>(null);

  const getFiller = (): React.ReactElement | null => {
    const classes = showLoadingAnimation
      ? joinClassNames('animate-pulse', className)
      : className;

    return (
      <div {...props} color={color} className={classes} />
    );
  };

  React.useEffect(() => {
    if (!firstLaunchOnly && ready && !readyProp) {
      if (delay && delay > 0) {
        timeout.current = window.setTimeout(() => {
          setReady(false);
        }, delay);
      } else {
        setReady(false);
      }
    } else if (readyProp) {
      if (timeout.current) {
        window.clearTimeout(timeout.current);
      }

      if (!ready) {
        setReady(true);
      }
    }
  }, [firstLaunchOnly, ready, readyProp, delay]);

  // clear the timeout when the component unmounts
  React.useEffect(
    () => () => {
      if (timeout.current) {
        window.clearTimeout(timeout.current);
      }
    },
    []
  );

  // Casting - workaround for DefinitelyTyped/react issue with
  // FunctionComponents returning ReactElement, where they should be able to
  // return ReactNode. Casting also doesn't introduce another layer in the
  // component tree like another `<>children</>` workaround does.
  //
  // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33006
  // and https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
  return ready ? children as React.ReactElement : getFiller();
}

type Props = {
};

type SVGBUttonProps = {
};

export const SVGButton: React.FC<SVGBUttonProps> = ({}: SVGBUttonProps) => {
  return (
    <button className="cursor-pointer list-none">
      <span className="bg-black box-border cursor-pointer inline-block list-none overflow-hidden rounded-full" style={{ width: "30px", height: "30px", WebkitMaskImage: "-webkit-radial-gradient(circle,#fff,#000)" }}>
        <span className="bg-white border-box cursor-pointer inline-block overflow-hidden bg-black border-none max-w-full m-0 p-0 relative w-8 h-8" style={{ borderRadius: "50%", boxShadow: "0 0 0 1px white" }}>
          <span className="border-box border-none max-w-full m-0 p-0 relative rounded-full">
            <Image className="block bg-white-100 max-w-full border-none m-0 p-0" alt="" aria-hidden="true" layout="fill" src="/assets/placeholder.svg"></Image>
          </span>
          <Image className="absolute bg-white-100 inset-0 border-box cursor-pointer p-0 m-auto block w-0 h-0 max-w-full max-h-full min-h-full min-w-full" async="" decoding="async" importance="low" alt="kielan" layout="fill" style={{ inset: "0px"}} title="kielan" src="/assets/placeholder.svg" data-nimg="intrinsic"></Image>
        </span>
      </span>
    </button>
  )
}
/*"content: "";*/
const Dashboard: React.FC<Props> = ({}: Props) => {
  const [contentLoaded, setContentLoaded] = React.useState(false);
  // This will run one time after the component mounts
  React.useEffect(() => {
    const onPageLoad = () => {
      urlList.forEach(url => {
        //console.log('urls.foreach ', url, window.location.href, window.location.href.indexOf(url))
        var urlParts = window.location.href.split('/');
        var urlSubdirectory = urlParts.pop();
        var data = url.split(":");
        var keyUrl = data[0];
        var valueLink = data[1];
        var tabLinkId = valueLink ? valueLink : keyUrl;
        //console.log('tabLinkId ', tabLinkId);
        if(window.location.href.indexOf('/'+keyUrl) > -1) {
          var target = document.querySelector("sub-menu_menu-tab-link_"+tabLinkId);
          target && (target.className = "before:block before:absolute before:height-0 before:left-2 before:right-2 before:bottom-0 before:border-b-2")
          //&& target.setAttribute("style", "display: block; position: absolute; height: 0; left: 9px; right: 9px; bottom: 0; border-bottom: 2px solid;");
        };
      });
      setContentLoaded(true);
    }
    //check if the page has already loaded
    if(document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  /*
    From a page speed standpoint, @import from a CSS file should almost never be used,
    as it can prevent stylesheets from being downloaded concurrently. For instance, if
    stylesheet A contains the text:
  */
  return (
    <>
      <Head>
        <title className="text-gray-100" style={{fontFamily: "Roboto Mono"}}>Dashboard</title>
      </Head>
      <style global jsx>{`
        @import 'docsearch.css';
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
        .menu-toggle_wrap {
          transform: translateY(4px) rotate(0deg);
        }
        .menu-toggle_wrap::after {
          transform: translateY(4px) rotate(0deg);
        }
        .menu-toggle_wrap::after, .menu-toggle_wrap::before {
          content: "";
          display: block;
          height: 1px;
          width: 22px;
          background-color: #fff;
          transition: transform .15s ease;
          transform: translateY(-4px) rotate(0deg);
        }
        ::selection {
          background-color:#fff;
          color:#fff;
        }
        ::-moz-selection {
          background-color:var(--geist-selection);
          color:#fff;
        }
    `}</style>
    <Navbar>
      {{
        content: <div id="sub-menu" className="white">
        <nav id="sub-menu_nav">
          <div id="sub-menu_wrap" className="h-12 relative overflow-hidden">
            <div id="sub-menu">
              <div id="sub-menu_inner" className="flex font-medium h-12 items-center max-w-full mt-auto mr-auto ml-auto overflow-auto px-0 py-6 -mb-1" style={{ width: "1048px" }}>
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
      <div id="reach-skip-nav" className="bg-purple white" data-reach-skip-nav-content=""></div>
      <div id="dashboard-container" className="bg-black-400 border-t border-black-300 min-h-full text-sm" >
        <div className="max-w-full ml-auto mr-auto px-0">
          <div className="flex flex-col max-w-full min-w-1 justify-start items-start">
            <div id="content-wrapper" className="max-w-full mx-auto px-6" style={{ minHeight: "calc(100vh - 84px)", width: "1048px" }}>
              <div id="content-container" className="flex flex-col pt-6 relative min-w-1 max-w-full justify-start items-start">
                <div className="items-stretch justify-start w-full flex flex-row flex-1">
                  <ContentPlaceholder type='media' rows={1} ready={contentLoaded}>
                    <div className="input-container inline-flex w-full">
                      <input className="placeholder:text-black-100 bg-black-500 border border-black-300 border-l-0 h-10 inline-flex min-w-0 order-1 outline-hidden px-3 w-full white-100 text-white-100" placeholder="Search..." type="search" aria-invalid="false" autoComplete="off" autoCorrect="off" style={{ borderRadius: "5px" }}></input>
                      <span className="bg-black-500 black-100 border border-black-300 border-r-0 flex h-10 active:border-black-800 focus:border-black-800 items-center -mr-3 relative px-3" style={{ borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }}>
                        <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{color: "#666"}}>
                          <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                          <path d="M16 16l4.5 4.5"></path>
                        </svg>
                      </span>
                    </div>
                  </ContentPlaceholder>
                  <a className="bg-white-100 border cursor-pointer md:hidden ml-2 px-4 rounded-4xl flex align-center">
                    <span className="flex align-center">
                      <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="my-auto" style={{color: "currentcolor"}}><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                    </span>
                  </a>
                  <button className="bg-black border-1 border-solid border border-black-300 hover:text-white-100 cursor-pointer hidden md:flex h-10 justify-center items-center leading-5 ml-4 m-0 border-box relative rounded text-sm" style={{ borderRadius: "5px", maxWidth: "180px" , minWidth: "180px" }}>
                      <span className="flex mr-2 text-black-800">
                        <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path>
                        </svg>
                      </span>
                      <span className="cursor-pointer inline-block hover:text-white-100 text-black-800 text-overflow-ellipsis whitespace-nowrap overflow-hidden text-sm">
                      Create a Team
                      </span>
                  </button>
                  <a className="border border-black-300 cursor-pointer hidden ml-4 md:flex flex-shrink-0 h-10 justify-center items-center hover:text-white-100 text-black-800 w-48 rounded black bg-white text-sm" style={{ borderRadius: "5px" }}>
                    <span className="flex mr-2">
                      <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{color: "#888"}}><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                    </span>
                    <span className="inline-block overflow-hidden selection:white selection:bg-purple-100 text-overflow-ellipsis whitespace-nowrap">New Project</span>
                  </a>
                </div>
                <div id="projects-list" className="projects-list w-full">
                  {/*<ProjectCard />*/}
                  {/*<ChartDonut />*/}
                  <TipJar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;