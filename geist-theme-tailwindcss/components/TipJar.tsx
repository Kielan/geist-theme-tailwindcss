import * as React from 'react';
import { SVGButton } from '../pages/dashboard';

const pageText = {
  "en-US": {
    "locale": "en-US",
    "Support Dame's future work": "Support Dame's future work",
    "Show your support for this passionate creator": "Show your support for this passionate creator",
    "Make this message private": "Make this message private",
    "Support": "Support",
    "$": "$",
    "image": "https://source.unsplash.com/GnvurwJsKaY/1600x900",
  },
  "ja": {
  },
  "it-IT": {
  },
  "es-ES": {
  },
}

type Props = {
  children?: React.ReactNode;
};

export const TipJar: React.FC<Props> = () => {
  return (
    <div id="tip-jar" className="border border-black-300 mt-6 rounded-md md:w-96 sm:w-full" style={{ borderRadius: "5px" }}>
      <div className="block outline-none">
        <div className="pt-6 flex flex-col items-stretch justify-start text-black-800">
          <h4 className="font-bold mx-6 text-lg">Support Dames future work</h4>
          <h6 className="pt-2 mx-6 text-sm">Show your support for this passionate creator</h6>
          <div className="flex mx-6 px-6 py-6 border border-black-300 bg-gray-300 mb-4 mt-8 rounded" style={{borderRadius: "5px"}}>
            <SVGButton /> {/* Animated SVG money stack after $200 becomes a plane flying around globe icon */}
            <span className="flex items-center justify-center w-9">x</span>
            <input className="max-w-16  min-w-16 w-16 placeholder:text-black-100 bg-black-500 border border-black-300 h-10 inline-flex outline-hidden px-3 white-100 text-white-100" placeholder="1" type="search" aria-invalid="false" autoComplete="off" autoCorrect="off" style={{ borderRadius: "5px" }}></input>
            <div className="w-full flex items-center justify-evenly">
              <div className="bg-black border border-black-300 hover:border-white-100 hover:text-white-100 text-black-100 cursor-pointer max-w-8 max-h-8 flex top-px left-px items-center justify-center w-8 h-8" style={{borderRadius: "100%", zIndex: 1000}}>1</div>
              <div className="bg-black border border-black-300 hover:border-white-100 hover:text-white-100 text-black-100 cursor-pointer max-w-8 max-h-8 flex top-px left-px items-center justify-center w-8 h-8" style={{borderRadius: "100%", zIndex: 1000}}>3</div>
              <div className="bg-black border border-black-300 hover:border-white-100 hover:text-white-100 text-black-100 cursor-pointer max-w-8 max-h-8 flex top-px left-px items-center justify-center w-8 h-8" style={{borderRadius: "100%", zIndex: 1000}}>5</div>
            </div>
          </div>
          <input className="placeholder:text-black-100 bg-black-500 border border-black-300 h-10 inline-flex mb-4 mx-6 min-w-0 outline-hidden px-3 white-100 text-white-100" placeholder="Name or @yourshuffleID" type="search" aria-invalid="false" autoComplete="off" autoCorrect="off" style={{ borderRadius: "5px" }}></input>
          <div className="align-middle bg-black-400 border border-5 inline-flex items-center mb-8 mx-6 relative" style={{ borderColor: "#333" }}>
            <textarea className="bg-black-500 block leading-7 h-full min-h-full min-w-full px-2 py-3 resize-none shadow-none text-sm white" 
              style={{ borderRadius: "5px" /*paddingLeft: "7px", paddingRight: "7px", paddingTop: "10px", paddingBottom: "10px"*/}}
              aria-label="Feedback input"
              data-gramm-editor="false"
              placeholder="Message (optional)"
              width="100%"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              type="text"
              ></textarea>
          </div>
          <div id="private-checkbox" className="mb-6 mx-6 text-sm">
            <label className="flex align-center ml-2">
              <input type="checkbox" value={''} />
              <span className="mb-0.5 ml-3">Make this message private</span>
            </label>
          </div>
          <div className="flex justify-center items-center mb-6 mx-6">
            <button className="bg-black border-1 border-solid border border-black-300 hover:text-white-100 cursor-pointer flex h-10 justify-center items-center leading-5 min-w-full m-0 border-box relative rounded text-sm" style={{ borderRadius: "5px" }}>
              <span className="cursor-pointer inline-block hover:text-white-100 text-black-800 text-overflow-ellipsis whitespace-nowrap overflow-hidden text-sm pr-2">
              Support
              </span>
              <span className="cursor-pointer inline-block hover:text-white-100 text-black-800 text-overflow-ellipsis whitespace-nowrap overflow-hidden text-sm">
              $
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}