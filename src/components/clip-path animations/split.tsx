import React from 'react'
import Clipboard from '../clipboard';

const Split = () => {

  return (
   <div className='relative'>
       <Clipboard code={code} />

     <span className="split">split</span>
   </div>
)
}

export default Split


const code =`
import React from 'react'

const Split = () => {
  return (
    <span className="split">split</span>
)
}

export default Split

/////////////////// css code //////////////////
.split {
  display: block;
  width: 100%;
  position: relative;
  cursor: pointer;
  transition: color 0.5s ease-in-out;
  color: transparent;
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.split::before,
.split::after {
  content: "Split";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) ;
  color: var(--secondary-color);
  transition: color 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.split::before {
  clip-path: polygon(0 0, 100% 0%, 100% 50%, 0 50%);
}

.split::after {
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
}

.split:hover::before,
.split:hover::after {
  color: var(--tertiary-color);
}
.split:hover::before {
  transform: translate(-48%, -2px);
}
.split:hover::after {
  transform: translate(-52%, 2px);
}`