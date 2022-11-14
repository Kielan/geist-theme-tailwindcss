import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';

type Props = {
  
};

const NewRepo: React.FC<Props> = ({}: Props) => {
  return (
    <>
      <Head>
        <title className="text-gray-100" style={{fontFamily: "Roboto Mono"}}>New Project Geist</title>
      </Head>
      <style global jsx>{`
        html {
          height:100%
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
      <Navbar>
      {{
        content: <div id="sub-menu" className="white">
        <nav id="sub-menu_nav">
          <div id="sub-menu_wrap" className="h-12 relative overflow-hidden">
            <div id="sub-menu" className="flex flex-grow items-center font-medium h-12 items-center max-w-full mt-auto mr-auto ml-auto overflow-auto px-0 py-6 -mb-1" style={{ width: "1048px" }}>
              <h2>Let's build something new</h2>
              <span>To deploy a new Project, import an existing Git Repository or get started with one of our Templates.</span>
            </div>
          </div>
        </nav>
        </div>
      }}
      </Navbar>
      <div className="geist-container w-full flex justify-start items-start">
        <div className="geist-card w-full p-8 min-w-16 border border-black-300 flex flex-col" style={{ borderRadius: "8px", width: "480px"}}>
          <h1 className="font-semibold text-2xl text-white-100">Import Git Repository</h1>
          <div className="mt-3 w-full flex">
            <a className="border border-black-300 cursor-pointer flex flex-shrink-0 h-10 justify-center items-center hover:text-white-100 text-black-800 w-48 rounded black bg-white text-sm">
              <span className="mr-2 w-5 flex">
                <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{color: "#888"}}><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
              </span>
              <span className="inline-block overflow-hidden selection:white selection:bg-purple-100 text-overflow-ellipsis whitespace-nowrap">New Project</span>
            </a>
            <div className="input-container ml-2.5 w-full flex">
              <input className="placeholder:text-black-100 bg-black-500 border border-black-300 border-l-0 h-10 inline-flex min-w-0 order-1 outline-hidden px-3 w-full white-100 text-white-100" placeholder="Search..." type="search" aria-invalid="false" autoComplete="off" autoCorrect="off" style={{ borderRadius: "5px" }}></input>
              <span className="bg-black-500 black-100 border border-black-300 border-r-0 flex h-10 active:border-black-800 focus:border-black-800 items-center -mr-3 relative px-3" style={{ borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }}>
                <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{color: "#666"}}>
                  <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                  <path d="M16 16l4.5 4.5"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="border border-black-300 mt-3 p-4 w-full">
            <div className="border w-full flex items-center justify-evenly">
              <div className="max-w-16 min-w-16 max-h-8 w-16 h-8 flex">
                <Image className="bg-white-100 block border-box cursor-pointer inset-0 h-full w-full max-w-full max-h-8 min-w-8 m-auto p-0 " async="" decoding="async" importance="low" alt="kielan" height={36} width={36} style={{minWidth: "2rem", width: "100%", height: "100%", inset: "0px"}} title="kielan" src="/assets/placeholder.svg" data-nimg="intrinsic"></Image>
              </div>
              <div className="flex items-center">
                <span className="select-git-respository font-semibold text-white-100">blog.kielanlemons.com</span>
                <span className="pl-2 flex items-center">
                  <svg fill="none" height="14" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" style={{color:"#888"}}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0110 0v4"></path>
                  </svg>
                </span>
                <div className="ml-2 text-black-800 flex items-center">
                  <span>.</span>
                </div>
                <div className="inline-flex ml-2">
                  <span className="text-black-800 text-sm whitespace-nowrap inline-flex">226d ago</span>
                </div>
                  <div>
                    <div>{/* rounded-4x works but roudned-2xl does not*/}
                      <form className="bg-blue-200 border-blue-200 border-1 border-solid cursor-pointer ml-4 rounded-4xl shadow text-white-100 flex justify-center">
                        <div className="p-2 font-medium text-sm">Feedback</div>
                      </form>
                      <a className="" href="" role="button" type="submit"></a>
                    </div>
                  </div>
                </div>
              <div>
            </div>
          </div>
          </div>
        </div>
        <div className="geist-card w-full min-w-16 border border-black-300 flex flex-col" style={{ borderRadius: "8px" }}></div>
      </div>
    </>    
  )
}

export default NewRepo;