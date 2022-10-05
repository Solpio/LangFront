import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface IStarProps {
  isFavorite: boolean

  onClick: () => any
}
const StyledSvg = styled.svg<IStarProps>`
  fill: ${(props) => (props.isFavorite ? '#F2CB00' : '#ffffff')};
`

function Star({ isFavorite, onClick }: IStarProps) {
  const [color, setColor] = useState(false)
  console.log(isFavorite)
  useEffect(() => {
    setColor(isFavorite)
  }, [isFavorite])
  return (
    <StyledSvg
      viewBox="0 0 26 24"
      xmlns="http://www.w3.org/2000/svg"
      isFavorite={color}
      onClick={onClick}
    >
      <path
        d="M12.6671 1.02447C12.7719 0.702011 13.2281 0.702009 13.3329 1.02447L15.8401 8.74093C15.887 8.88514 16.0213 8.98278 16.173 8.98278H24.2865C24.6256 8.98278 24.7666 9.41664 24.4923 9.61593L17.9283 14.385C17.8056 14.4741 17.7543 14.6321 17.8011 14.7763L20.3083 22.4928C20.4131 22.8152 20.044 23.0834 19.7697 22.8841L13.2057 18.115C13.0831 18.0259 12.9169 18.0259 12.7943 18.115L6.23026 22.8841C5.95596 23.0834 5.58689 22.8152 5.69166 22.4928L8.19889 14.7763C8.24575 14.6321 8.19442 14.4741 8.07175 14.385L1.50773 9.61594C1.23343 9.41664 1.3744 8.98278 1.71345 8.98278H9.82703C9.97866 8.98278 10.113 8.88514 10.1599 8.74093L12.6671 1.02447Z"
        stroke="#292D32"
        strokeWidth="1.5"
      />
    </StyledSvg>
  )
}

export default Star
