import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px;
  width: 100%;
  min-width: 50px;
`

function MainSvg() {
  return (
    <Wrapper>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="100%"
        height="100%"
      >
        <g>
          <path d="m448,0h-320c-44.109,0-80,35.891-80,80v352c0,44.109 35.891,80 80,80h320c8.844,0 16-7.164 16-16v-480c0-8.836-7.156-16-16-16zm-368,432c0-26.469 21.531-48 48-48v96c-26.469,0-48-21.531-48-48zm352,48h-272v-96h272v96zm0-128h-304c-18,0-34.625,5.977-48,16.039v-288.039c0-26.469 21.531-48 48-48h304v320z" />
          <path d="m288,272h-32c-8.844,0-16,7.164-16,16s7.156,16 16,16h32c26.469,0 48-21.531 48-48 0-12.338-4.809-23.488-12.484-32 7.676-8.512 12.484-19.662 12.484-32 0-26.469-21.531-48-48-48-8.828,0-16-7.18-16-16s7.172-16 16-16h32c8.844,0 16-7.164 16-16s-7.156-16-16-16h-32c-26.469,0-48,21.531-48,48 0,12.338 4.809,23.488 12.484,32-7.675,8.512-12.484,19.662-12.484,32 0,26.469 21.531,48 48,48 8.828,0 16,7.18 16,16 0,8.82-7.172,16-16,16zm-16-80c0-8.82 7.172-16 16-16s16,7.18 16,16-7.172,16-16,16-16-7.18-16-16z" />
        </g>
      </svg>
    </Wrapper>
  )
}

export default MainSvg
