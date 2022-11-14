import * as React from 'react';

type Props = {
  children?: React.ReactNode;
};

/* add to config
font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
*/
const ProjectCard: React.FC<Props> = () => {
  return (
    <div id="project-card">
      <a className="block cursor-pointer outline-none" href="">
        <div className="cursor-pointer flex flex-col items-stretch justify-start">
          <div className="cursor-pointer flex flex-col items-stretch justify-start">
            <div className="cursor-pointer flex flex-col items-stretch justify-start">
              <span className="bg-white border-none flex-shrink-0 overflow-hidden h-8 inline-block w-8">
                <span className="inline-block border-none m-0 p-0 relative max-w-full">
                  <span className="block border-none m-0 p-0 max-w-full">
                    <img className="absolute bg-white cursor-pointer inset-0 box-border border-x border-y-0 m-auto max-w-full max-h-full min-w-full min-h-full p-0 w-0 h-0" src="" alt="logo"/>
                  </span>
                  <img className="absolute cursor-pointer" src=""></img>
                </span>
              </span>
              <div className="flex flex-col items-stretch justify-start">
                <p className="inline-block font-medium overflow-hidden text-overflow-hidden whitespace-nowrap word-wrap-normal max-w-full min-w-0 m-0 white text-base">blog-kielanlemons-com</p>
                <p className="font-normal text-sm">No Production Deployment</p>
              </div>
            </div>
          <span className="ml-4 inline-flex items-center outline-none">
      <div>
        <svg viewBox="0 0 120 120" fill="none" stroke-width="2" width="32" height="32">
          <circle r="53" cx="60" cy="60" stroke-dashoffset="0" stroke="var(--accents-2)" stroke-width="12" data-geist-progress-circle-bg=""></circle>
          <circle className="progress-circle_arc__odcne" transform="rotate(-90 60 60)" stroke-dasharray="0 340" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" stroke="transparent" r="53" cx="60" cy="60" data-geist-progress-circle-fg=""></circle>
        </svg>
        <div>
          <span id="analytics">
            <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="18" style={{color:"var(--accents-3);"}}>
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </span>
        </div>
      </div>
      </span>
    </div>
    <div className="flex items-center px-0 py-0 border border-gray bg-gray-900 mt-8" style={{color: "#888"}}>
      No Git Repository connected.
    </div>
    <div className="mt-4">
      <p className="text-sm m-0" style={{color: "#888"}}>198d ago</p>
    </div>
    </div>
    </a>

  </div>
  )
}

export default ProjectCard;