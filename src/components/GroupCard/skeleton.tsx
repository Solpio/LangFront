import React from 'react'
import ContentLoader from 'react-content-loader'

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={600}
      viewBox="0 0 500 600"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="18" y="116" rx="0" ry="0" width="475" height="70" />
      <rect x="20" y="289" rx="0" ry="0" width="463" height="306" />
      <rect x="20" y="29" rx="0" ry="0" width="67" height="67" />
      <rect x="155" y="30" rx="0" ry="0" width="185" height="72" />
      <rect x="422" y="32" rx="0" ry="0" width="64" height="64" />
      <rect x="14" y="201" rx="0" ry="0" width="475" height="71" />
      );
    </ContentLoader>
  )
}

export default Skeleton
