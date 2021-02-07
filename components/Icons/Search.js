import * as React from "react"

function SvgComponent(props, svgRef) {
  return (
    <svg
      height="1em"
      viewBox="0 0 21 21"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      stroke="#2a2e3b"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={8.5} cy={8.5} r={5} />
        <path d="M17.571 17.5L12 12" />
      </g>
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgComponent)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
