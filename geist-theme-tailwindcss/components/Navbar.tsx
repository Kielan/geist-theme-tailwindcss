import * as React from 'react';
import Image from 'next/image';
import { SVGButton } from '../pages/dashboard';
import { Popover } from './Popover';

type Props = {
  children?: {
    content?: React.ReactNode;
  };
  className?: string;
};

export const Navbar: React.FC<Props> = ({children, className}: Props) => {
  const classNameInternal = className ? className : "focus:text-gray-700 h-16 hover:text-gray-700 items-center justify-center w-full md:max-w-screen-lg md:w-screen py-4 relative text-gray-500 shadow-lg flex sm:ml-0 md:mx-auto";
  const content = children && children.content ? children.content : null;
  return (
    <div>
    <nav className={classNameInternal}>
      <div className="max-w-full w-full flex items-center">
        <div className="pr-6 flex flex-1 items-center justify-between">
          <ol className="items-center list-none max-w-full m-0 p-0 flex">
            <li className="basis-auto min-w-0 flex grow-0 shrink-0">
              <a className="block w-7 h-6 p-2 m-[-2] box-content relative">
                <svg height="26" viewBox="0 0 75 65" fill="#fff">
                  <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                </svg>
              </a>
            </li>
            <li className="flex grow-0 shrink-0 basis-auto ml-2 my-0">
              <svg fill="none" height="32" width="32" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" style={{color:"#333"}}>
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
            </li>
            <li className="flex grow-0 shrink-1 basis-auto text-sm">
              <div className="flex flex-col items-stretch justify-start max-w-full">
                <div className="flex items-center">
                  <a className="max-w-full no-underline" href="/dashboard">
                    <div className="list-none flex items-center justify-start">
                      <p className="cursor-pointer font-medium inline-block overflow-visible whitespace-nowrap max-w-full min-w-48 w-full text-sm m-0 px-2 py-0 text-white-100">All accounts</p>
                      <div className="bg-black-800 border border-black-800 h-5 hidden rounded-4xl w-full md:flex md:visible ">
                        <span className="font-medium h-5 inline-block leading-4 px-2 py-0 text-xs text-white-100">Hobby</span>
                      </div>
                    </div>
                  </a>
                  <Popover>
                    <Popover.Button>
                      <div className="bg-gradient-to-r border-1 border-solid dark:from-black h-10 hover:bg-black-300 ml-0 md:ml-1.5 opacity-75 px-2 py-0 rounded-4xl shrink-0 flex items-center">
                        <span className="opacity-100">
                          <svg color="#fff" fill="none" height="16" stroke="#fff" strokeWidth="1.5" viewBox="0 0 16 24"><path d="M13 8.517L8 3 3 8.517M3 15.48l5 5.517 5-5.517"></path></svg>
                        </span>
                      </div>
                    </Popover.Button>
                    <Popover.Panel>
                      <div className="absolute top-0 left-0 border border-black-300 bg-black-500 rounded text-white-100 z-50 flex flex-col" role="listbox" style={{transform: "translate3d(80px, 58px, 0px)", borderRadius: "5px"}}>
                        <div className="input-container border-b border-black-300 max-w-full min-w-full w-full flex">
                          <input className="placeholder:text-black-100 bg-black-500 h-10 inline-flex min-w-0 order-1 outline-hidden px-3 w-full white-100 text-white-100" placeholder="Search..." type="search" aria-invalid="false" autoComplete="off" autoCorrect="off" style={{ borderRadius: "5px" }}></input>
                          <span className="bg-black-500 black-100 flex h-10 active:border-black-800 focus:border-black-800 items-center -mr-3 relative px-3" style={{ borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }}>
                            <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{color: "#666"}}>
                              <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                              <path d="M16 16l4.5 4.5"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="list-first h-8 mt-4 mx-2 px-2 flex w-content items-center text-black-800">
                          <span className="text-xs">Personal Account</span>
                        </div>
                        <ul data-command-group="" role="group">
                          <li className="cursor-pointer hover:bg-black-300 rounded-4xl h-10 mx-2 px-2 w-content flex items-center justify-evenly">
                            <div className="tw-li-left w-full flex">
                              <div className="max-w-6 min-w-6 max-h-6 w-6 h-6 flex rounded-4xl">
                                <Image className="bg-white-100 block border-box cursor-pointer inset-0 h-full hover:text-white-100 max-w-full max-h-8 min-w-8 m-auto p-0 ml-2 w-full text-black-800" async="" decoding="async" importance="low" alt="kielan" height={36} width={36} style={{minWidth: "2rem", width: "100%", height: "100%", inset: "0px"}} title="kielan" src="/assets/placeholder.svg" data-nimg="intrinsic"></Image>
                              </div>
                              <span className="select-git-respository font-normal ml-2">kielan</span>
                            </div>
                            <div className="w-content flex items-center">
                              <span className="pl-2 flex items-center">
                                <svg data-testid="tw-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{marginLeft: "8px", color: "currentcolor"}}>
                                  <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                              </span>
                            </div>
                          </li>
                        </ul>
                        <div className="list-items mt-4 mx-2 pt-2 px-2 h-8 max-w-full min-w-full text-black-800 w-full flex">
                          <span className="text-xs">Teams</span>
                        </div>
                        <ul className="pt-2">
                          <li className="cursor-pointer hover:bg-black-300 hover:text-white-100 h-10 mx-2 px-2 rounded-4xl text-black-800 w-content flex items-center justify-evenly">
                            <div className="tw-li-left w-full flex">
                              <div className="max-w-6 min-w-6 max-h-6 w-6 h-6 flex rounded-4xl">
                                <Image className="bg-white-100 block border-box cursor-pointer inset-0 h-full w-full max-w-full max-h-8 min-w-8 m-auto p-0 " async="" decoding="async" importance="low" alt="kielan" height={36} width={36} style={{minWidth: "2rem", width: "100%", height: "100%", inset: "0px"}} title="kielan" src="/assets/placeholder.svg" data-nimg="intrinsic"></Image>
                              </div>
                              <span className="select-git-respository font-normal ml-2">kielan</span>
                            </div>
                            <div className="w-content flex items-center">
                              <span className="pl-2 flex items-center">
                                <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{marginLeft: "8px", color: "currentcolor"}}>
                                  <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                              </span>
                            </div>
                          </li>
                        </ul>
                        <div className="tw-add-team cursor-pointer h-10 hover:bg-black-300 hover:text-white-100 text-black-800 mx-2 px-2 rounded-4xl w-content flex items-center">
                          <svg data-testid="tw-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" style={{color:"currentColor"}}><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
                          <span className="ml-2">Create Team</span>
                        </div>
                        <div className="m-4 bg-black-800" style={{height: "1px"}}></div>
                      </div>
                    </Popover.Panel>
                  </Popover>
                </div>
              </div>
            </li>
          </ol>
          <div className="flex grow-0 shrink-0 basis-auto items-center justify-end min-w-0">
            <div className="flex items-center">
              <div className="inline-block p-0 relative">
                <form className="bg-black border border-black-300 hidden leading-6 hover:border-white-100 outline-0 overflow-hidden relative resize-none rounded-lg w-24 h-8 md:flex" style={{ borderRadius: "5px"}}>
                  <div className="absolute cursor-pointer bg-black text-black-800 z-50 left-px items-center justify-center w-24 h-8 top-px md:flex"
                        style={{left: "-1px", top: "-1px", zIndex: 99999}}>
                    Feedback
                  </div>
                  <div id="feedback-input_input-wrapper" className="portrait:hidden border border-solid border-gray-10000 hover:border-white-100 text-sm leading-6" style={{ display: "none" }}>
                    <h5>Feedback</h5>
                    <div className="align-middle bg-black border border-5 inline-flex items-center relative w-full" style={{ borderColor: "#333" }}>
                      <textarea className="bg-transparent block leading-7 h-full min-h-full rounded-none border-none resize-none shadow-none px-2 py-3 text-sm w-full" 
                                style={{paddingLeft: "7px", paddingRight: "7px", paddingTop: "10px", paddingBottom: "10px", }}
                                aria-label="Feedback input"
                                data-gramm-editor="false"
                                placeholder="Your feedback..."
                                width="100%"
                                autoCapitalize="none"
                                autoComplete="off"
                                autoCorrect="off"
                                type="text"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
              <div className="hidden mx-2 my-0 text-black-800 md:flex">
                <a className="text-black-800 hover:text-white-100 no-underline px-2 py-0 text-sm" href="/support" rel="noopener" target="_blank">Support</a>
                <a className="text-black-800 hover:text-white-100 no-underline px-2 py-0 text-sm" href="/docs" rel="noopener" target="_blank">Docs</a>
              </div>
              <div className="popover-responsive-layout">
              <div className="md:responsive cursor-pointer h-8 hidden rounded-full md:block w-8">
              <Popover>
              <Popover.Button>
              <div className="cursor-pointer list-none">
                <span className="bg-black box-border cursor-pointer inline-block list-none overflow-hidden" style={{WebkitMaskImage:"-webkit-radial-gradient(circle,#fff,#000)"}}>
                  <span className="border-none border-box cursor-pointer inline-block max-w-full m-0 overflow-hidden p-0 relative w-8 h-8" style={{ borderRadius: "50%", boxShadow: "0 0 0 1px white" }}>
                    <span className="border-box border-none max-w-full m-0 p-0 relative rounded-full">
                      <Image className="block bg-white-100 max-w-full border-none m-0 p-0" alt="" aria-hidden="true" height={28} src="/assets/placeholder.svg" width={28}></Image>
                    </span>
                    <Image className="absolute bg-white-100 inset-0 border-box cursor-pointer p-0 m-auto block w-0 h-0 max-w-full max-h-full min-h-full min-w-full" async="" decoding="async" importance="low" alt="kielan" style={{ inset: "0px"}} title="kielan" src="/assets/placeholder.svg" data-nimg="intrinsic" height={28} width={28}></Image>
                  </span>
                </span>
              </div>
              </Popover.Button>
              <Popover.Panel>
              <div className="absolute bg-black-500 border border-black-300 py-2 right-6 rounded top-16 w-56 text-black-800 transition-opacity ease-in duration-700 opacity-100 text-sm z-50 flex flex-col" role="menu" hidden={false} style={{ borderRadius: "5px", animation: ".1s ease-in forwards" }}>
                <div className="item-box bg-black-500 border-b border-black-300 h-10 hover:text-white-100 text-black-800">
                  <a className="cursor-pointer px-5 py-2 text-medium flex items-center pt-2">Dashboard</a>
                </div>
                <div className="line border-t border-black-300 my-2"></div>
                <div className="item cursor-pointer h-10 px-5 flex items-center">
                  New Team
                  <svg data-testid="tw-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" style={{color:"currentColor"}}><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
                </div>
                <div className="item cursor-pointer h-10 px-5 flex items-center">
                  Settings
                </div>
                <div className="line border-black-300 border-t h-8 my-2 px-5 py-2 "></div>
                <div className="item cursor-pointer h-8 py-2 px-5 flex items-center">
                  Theme
                  <label for="select=:r1s:">
                    <div className="select-container flex">
                      <span className="absolute inline black-800 text-sm">
                        <svg data-testid="geist-icon" fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" style={{color:"currentcolor"}}><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
                      </span>
                      <select id="select-:r1s:">
                        <option value="system">System</option>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                      </select>
                      <span className="select-suffix">
                        <svg color="#fff" fill="none" height="16" stroke="#fff" strokeWidth="1.5" viewBox="0 0 16 24"><path d="M13 8.517L8 3 3 8.517M3 15.48l5 5.517 5-5.517"></path></svg>
                      </span>
                    </div>
                  </label>
                </div>
                <div className="line border-t border-black-300 my-2 flex"></div>
                <div className="item cursor-pointer h-8 py-2 px-5 flex items-center">
                  Command Menu
                  <div className="icon">
                    <kbd className="px-1 flex items-center">
                      <span>Ctrl</span>
                    </kbd>
                    <kbd className="px-1 flex items-center">
                      <span>K</span>
                    </kbd>
                  </div>
                </div>
                <div className="line border-t border-black-300 my-2"></div>
                <div className="item cursor-pointer h-8 py-2 px-5 flex items-center">
                  Logout
                </div>
              </div>
              </Popover.Panel>
              </Popover>
              </div>
              <div className="portrait:responsive md:hidden visible flex items-center">
              <Popover>
              <Popover.Button className="flex items-center">
              <div className="">
                <div className="mobile-menu_indicator cursor-pointer list-none h-9 w-6 flex align-center items-center justify-center bg-transparent ease-in-out duration-200" data-testid="mobile-menu/trigger">
                  <div aria-label="open menu-toggle_wrap" className="menu-toggle_wrap origin-center"></div>
                </div>
              </div>
              </Popover.Button>
              <Popover.Panel>
              <nav className="focus:text-gray-700 h-16 hover:text-gray-700 items-center justify-between min-w-full max-w-screen px-6 py-4 relative text-gray-500 w-full shadow-lg sm:ml-0 flex">
              <div className="absolute bottom-20 left-0 border border-black-300 bg-black-500 md:invisible sm:visible rounded text-black-800 w-content z-50 flex flex-col text-sm" role="menu" hidden={false} style={{ borderRadius: "5px" }}>
              <div className="input-container border-b border-black-300 max-w-full min-w-full w-full flex">
                <input className="placeholder:text-black-300 bg-black-500 h-10 inline-flex min-w-0 order-1 outline-hidden px-3 w-full white-100 text-white-100" placeholder="Search..." type="search" aria-invalid="false" autocomplete="off" autocorrect="off" style={{borderRadius:"5px"}}></input>
                <span className="bg-black-500 black-100 flex h-10 active:border-black-300 focus:border-black-800 items-center -mr-3 relative px-3" style={{borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>
                  <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{color: "rgb(102, 102, 102)"}}>
                    <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                    <path d="M16 16l4.5 4.5"></path>
                  </svg>
                </span>
              </div>
              </div>
              <div className="list-first h-8 mt-4 mx-2 px-2 flex w-content items-center text-black-800">
                <span className="text-xs">Personal Account</span>
              </div>
              <ul data-command-group="" role="group">
                <li className="cursor-pointer hover:bg-black-300 rounded-4xl h-10 mx-2 px-2 w-content flex items-center justify-evenly">
                  <div className="tw-li-left w-full flex">
                    <div className="max-w-6 min-w-6 max-h-6 w-6 h-6 flex rounded-4xl">
                      <Image className="bg-white-100 block border-box cursor-pointer inset-0 h-full hover:text-white-100 max-w-full max-h-8 min-w-8 m-auto p-0 ml-2 w-full text-black-800" async="" decoding="async" importance="low" alt="kielan" height={36} width={36} style={{minWidth: "2rem", width: "100%", height: "100%", inset: "0px"}} title="kielan" src="/assets/placeholder.svg" data-nimg="intrinsic"></Image>
                    </div>
                    <span className="select-git-respository font-normal ml-2">kielan</span>
                  </div>
                  <div className="w-content flex items-center">
                    <span className="pl-2 flex items-center">
                      <svg data-testid="tw-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{marginLeft: "8px", color: "currentcolor"}}>
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                  </div>
                </li>
              </ul>
              <div className="list-items mt-4 mx-2 pt-2 px-2 h-8 max-w-full min-w-full text-black-300 w-full flex">
                <span className="text-xs">Teams</span>
              </div>
              <ul className="pt-2">
                <li className="cursor-pointer hover:bg-black-300 hover:text-white-100 h-10 mx-2 px-2 rounded-4xl text-black-300 w-content flex items-center justify-evenly">
                  <div className="tw-li-left w-full flex">
                    <div className="max-w-6 min-w-6 max-h-6 w-6 h-6 flex rounded-4xl">
                      <Image className="bg-white-100 block border-box cursor-pointer inset-0 h-full w-full max-w-full max-h-8 min-w-8 m-auto p-0 " async="" decoding="async" importance="low" alt="kielan" height={36} width={36} style={{minWidth: "2rem", width: "100%", height: "100%", inset: "0px"}} title="kielan" src="/assets/placeholder.svg" data-nimg="intrinsic"></Image>
                    </div>
                    <span className="select-git-respository font-normal ml-2">kielan</span>
                  </div>
                  <div className="w-content flex items-center">
                    <span className="pl-2 flex items-center">
                      <button className="mobile-menu_indicator h-9 w-6 flex align-center justify-center bg-transparent ease-in-out duration-200" data-testid="mobile-menu/trigger">
                        <div aria-label="open menu-toggle_wrap" className="menu-toggle_wrap origin-center"></div>
                      </button>
                    </span>
                  </div>
                </li>
              </ul>
              </nav>
              </Popover.Panel>
              </Popover>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {content && content}
  </div>
  )
}