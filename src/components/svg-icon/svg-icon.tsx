import React from "react";

const SVGIcon = ({
  name = "",
  style = {},
  fill = "transparent",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%",
  stroke = '#4D586D'
}) => {
  switch (name) {
    case 'Users': {
      return <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" fill={fill}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.56372 5.17968C6.56372 3.42386 8.07383 2 9.93601 2C11.7982 2 13.3083 3.42386 13.3083 5.17968C13.3083 6.9355 11.7982 8.9953 9.93601 8.9953C8.07383 8.9953 6.56372 6.9355 6.56372 5.17968Z" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.86634 17.762C3.57729 15.9905 4.29997 12.0386 10.3701 12.0386C14.519 12.0386 15.819 14.3782 16.0289 16.3626C16.1175 17.2003 15.4581 17.8798 14.624 17.9971C13.02 18.2226 10.6859 18.4123 8.63575 18.1708" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
    case 'Sessions': {
      return <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
        <rect width="20" height="20" fill={fill} />
        <path d="M15.1379 8.05714L15.5801 8.30573C17.1116 9.16683 17.1511 11.3577 15.6516 12.2735L6.49877 17.8633C4.96614 18.7993 3 17.6962 3 15.9004V5.02872C3 3.24825 4.93604 2.14296 6.46927 3.04811L11.2759 5.88571" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    }
    case 'Analytics': {
      return <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" fill={fill}/>
        <rect width="20" height="20" fill={fill}/>
        <path d="M11.6 13.7647V17C11.6 17.5523 11.1523 18 10.6 18H9.39998C8.84769 18 8.39998 17.5523 8.39998 17V3C8.39998 2.44772 8.84769 2 9.39998 2H10.6C11.1523 2 11.6 2.44772 11.6 3V9.52941" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="14.8" y="5.76465" width="3.2" height="12.2353" rx="1" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="9.52942" width="3.2" height="8.47059" rx="1" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
    case 'Messages': {
      return <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" fill={fill} />
        <path d="M15 16L16 16C17.1046 16 18 15.1046 18 14L18 6C18 4.89543 17.1046 4 16 4L4 4C2.89543 4 2 4.89543 2 6L2 14C2 15.1046 2.89543 16 4 16L10 16" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.7417 5.5625L14.6393 7.6505L11.5368 9.7385C11.0962 10.0351 10.5559 10.1959 10 10.1959C9.44413 10.1959 8.90385 10.0351 8.46325 9.7385L2.2583 5.5625" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
    case 'Chats': {
      return <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H20V20H0V0Z" fill={fill}/>
        <path d="M18 8.80851L18 5C18 3.89543 17.1046 3 16 3L4 3C2.89543 3 2 3.89543 2 5L2 13.6383C2 14.7429 2.89543 15.6383 4 15.6383L13.0071 15.6383C13.3308 15.6383 13.6498 15.7169 13.9365 15.8674L18 18L18 15.6383L18 12.383" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
    case 'Help center': {
      return <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill={fill}/>
        </mask>
        <g mask="url(#mask0)">
        <rect width="20" height="20" fill={fill}/>
        <path d="M15.5517 3.86101C17.9208 6.23009 18.4479 9.74362 17.1331 12.622C16.7568 13.4457 19.0034 16.5028 18.3254 17.1808C17.6944 17.8118 14.2085 16.0268 13.4488 16.3964C10.5397 17.8119 6.93333 17.3116 4.51723 14.8955C1.47015 11.8484 1.47015 6.90809 4.51723 3.861C7.56431 0.813923 12.5046 0.813923 15.5517 3.86101Z" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 11.2994C9.86739 11.2994 9.74021 11.2468 9.64645 11.153C9.55268 11.0592 9.5 10.9321 9.5 10.7994V10.6288C9.5 10.3185 9.59616 10.0159 9.77525 9.76257C9.95433 9.50923 10.2075 9.31762 10.5 9.21411C10.7922 9.11039 11.0452 8.91882 11.2242 8.66566C11.4032 8.41251 11.4996 8.11017 11.5 7.80011C11.5 7.40011 11.344 7.02344 11.06 6.74011C10.9213 6.60022 10.7561 6.48928 10.5741 6.41375C10.3922 6.33822 10.197 6.29959 10 6.30011C9.59933 6.30011 9.22267 6.45611 8.93933 6.73944C8.79956 6.87823 8.68875 7.04341 8.61333 7.22537C8.53791 7.40734 8.49939 7.60247 8.5 7.79944C8.5 7.93205 8.44732 8.05923 8.35355 8.153C8.25978 8.24676 8.13261 8.29944 8 8.29944C7.86739 8.29944 7.74022 8.24676 7.64645 8.153C7.55268 8.05923 7.5 7.93205 7.5 7.79944C7.50088 7.13673 7.76458 6.50143 8.23325 6.03289C8.70192 5.56434 9.33729 5.30082 10 5.30011C10.668 5.30011 11.296 5.56011 11.768 6.03278C12.0008 6.26449 12.1853 6.54004 12.311 6.8435C12.4366 7.14697 12.5009 7.47233 12.5 7.80078C12.4993 8.31756 12.3388 8.82149 12.0404 9.24342C11.742 9.66536 11.3204 9.98463 10.8333 10.1574C10.7359 10.1921 10.6515 10.2561 10.5918 10.3406C10.5321 10.4251 10.5001 10.526 10.5 10.6294V10.8001C10.4998 10.9326 10.4471 11.0596 10.3533 11.1532C10.2596 11.2469 10.1325 11.2994 10 11.2994Z" fill={stroke} stroke={stroke} strokeWidth="0.3"/>
        <path d="M10 13.7991C10.4142 13.7991 10.75 13.4633 10.75 13.0491C10.75 12.6349 10.4142 12.2991 10 12.2991C9.58579 12.2991 9.25 12.6349 9.25 13.0491C9.25 13.4633 9.58579 13.7991 10 13.7991Z" fill={stroke} stroke={stroke} strokeWidth="0.3"/>
        </g>
      </svg>
    }
    case 'Settings': {
      return <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H20V20H0V0Z" fill={fill}/>
        <path d="M14.23 9.53946V2.77148" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.23 17.9994V14.6154" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.768 12.0774C16.768 12.5794 16.6191 13.0701 16.3403 13.4874C16.0614 13.9048 15.665 14.2301 15.2013 14.4222C14.7375 14.6143 14.2272 14.6646 13.7349 14.5666C13.2425 14.4687 12.7903 14.227 12.4354 13.872C12.0804 13.5171 11.8387 13.0649 11.7408 12.5726C11.6429 12.0802 11.6931 11.5699 11.8852 11.1062C12.0773 10.6424 12.4026 10.246 12.82 9.96716C13.2373 9.68828 13.728 9.53943 14.23 9.53943C14.9031 9.53943 15.5487 9.80682 16.0246 10.2828C16.5006 10.7588 16.768 11.4043 16.768 12.0774Z" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.77002 11.6346V17.9997" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.30804 5.30948C8.30804 4.80751 8.15919 4.31681 7.88031 3.89944C7.60143 3.48207 7.20505 3.15677 6.74129 2.96468C6.27754 2.77258 5.76723 2.72232 5.27491 2.82025C4.78259 2.91818 4.33036 3.1599 3.97542 3.51485C3.62047 3.86979 3.37875 4.32202 3.28082 4.81434C3.18289 5.30666 3.23316 5.81696 3.42525 6.28072C3.61734 6.74448 3.94265 7.14086 4.36002 7.41974C4.77739 7.69862 5.26808 7.84747 5.77005 7.84747C6.44316 7.84747 7.08871 7.58007 7.56468 7.10411C8.04064 6.62814 8.30804 5.98259 8.30804 5.30948V5.30948Z" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
    default: {
      return null
    }
     
  }
}
  



export default SVGIcon;