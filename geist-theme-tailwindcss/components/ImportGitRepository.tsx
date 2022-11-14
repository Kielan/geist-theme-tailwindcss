import * as React from 'react';
type Props = {
  children?: React.ReactNode;
};
export const ImportGitRepository: React.FC<Props> = () => {
  return (
    <div id="import-git-repository" className="border border-black-300 mt-6 rounded-md">
      <div id="input-container" className="flex inline-flex max-w-full min-w-full w-full">
        <input className="placeholder:text-black-100 bg-black-500 border border-black-300 border-l-0 h-10 inline-flex min-w-0 order-1 outline-hidden px-3 w-full white-100 text-white-100" placeholder="Search..." type="search" aria-invalid="false" autoComplete="off" autoCorrect="off" style={{ borderRadius: "5px" }}></input>
        <span className="bg-black-500 black-100 border border-black-300 border-r-0 flex h-10 active:border-black-800 focus:border-black-800 items-center -mr-3 relative px-3" style={{ borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }}>
          <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{color: "#666"}}>
            <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
            <path d="M16 16l4.5 4.5"></path>
          </svg>
        </span>
      </div>

    </div>
  )
}