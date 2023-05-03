type SVGProps = React.SVGProps<SVGSVGElement>

export const Search = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" {...props}>
    <line x1="15" y1="15" x2="9.5" y2="9.5" stroke-linecap="round" stroke-width="2" stroke="currentColor"/>
    <path
      d="M6,11A5,5,0,0,1,1,6,5,5,0,0,1,6,1a5,5,0,0,1,5,5,5,5,0,0,1-5,5"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
    />
  </svg>
)
