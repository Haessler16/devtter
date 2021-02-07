import * as React from "react"

function SvgComponent(props, svgRef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      ref={svgRef}
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#2A2E3B"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.5 6.497l-4 4.002 4 4M16.5 10.5h-13" />
      </g>
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgComponent)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
