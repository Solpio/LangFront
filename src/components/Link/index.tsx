import { Link } from 'react-router-dom'
import React from 'react'

export const DecorationLink = ({ className, children, to }: any) => (
  <Link to={to} className={className}>
    {children}
  </Link>
)
