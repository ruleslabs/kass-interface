type SVGProps = React.SVGProps<SVGSVGElement>

export const Search = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" {...props}>
    <line x1="15" y1="15" x2="9.5" y2="9.5" strokeLinecap="round" strokeWidth="2" stroke="currentColor"/>
    <path
      d="M6,11A5,5,0,0,1,1,6,5,5,0,0,1,6,1a5,5,0,0,1,5,5,5,5,0,0,1-5,5"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
    />
  </svg>
)

export const Logo = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1594 1594" {...props}>
    <path
      fill="currentColor"
      d="M767,1221.5h614c117.6-.1,212.9-95.4,213-213v-636H1387v642H710v-114H877c119.3-1,215.5-97.7,216-217v-47c.1-145.7-117.8-263.9-263.5-264H222C99.4,372.6.1,471.9,0,594.5v627H207v-643H887v114H720c-119.7-.1-216.9,96.9-217,216.6h0v47.4C502.8,1102.6,620.9,1221.2,767,1221.5Z"
    />
  </svg>
)

export const Close = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <line x1="13" y1="3" x2="3" y2="13" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/>
    <line x1="3.2" y1="2.8" x2="12.8" y2="13.2" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/>
  </svg>
)

export const Starknet = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path
      d="M20.5,20.9,17,31.4a1.1,1.1,0,0,1-1.5.5,1.2,1.2,0,0,1-.5-.5L11.5,20.9a.8.8,0,0,0-.4-.4L.6,17a1.1,1.1,0,0,1-.5-1.5L.6,15l10.5-3.5a.8.8,0,0,0,.4-.4L15,.6A1.1,1.1,0,0,1,16.5.1l.5.5,3.5,10.5.4.4L31.4,15a1.1,1.1,0,0,1,.5,1.5,1.2,1.2,0,0,1-.5.5L20.9,20.5Z"
    />
  </svg>
)

export const Ethereum = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M25.8,16.3,16,0h0L6.2,16.3,16,22.1h0ZM15.2,20.8,7.2,16l8-13.2Z"/>
    <path d="M25.8,18.2,16,24,6.2,18.2,16,32m-.8-2.4L8.9,20.7l6.3,3.7Z"/>
  </svg>
)
