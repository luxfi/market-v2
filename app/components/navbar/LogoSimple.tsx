import React from 'react'

import Link from 'next/link'

const SOURCE_ID = process.env.NEXT_PUBLIC_SOURCE_ID
const SOURCE_NAME = process.env.NEXT_PUBLIC_SOURCE_NAME
const NAVBAR_LOGO_LINK = process.env.NEXT_PUBLIC_NAVBAR_LOGO_LINK

const logoAlt = (SOURCE_NAME) ? SOURCE_NAME :
  (SOURCE_ID) ? SOURCE_ID : 'Logo'


const NavbarLogo: React.FC<{
  className?: string 
}> = ({ 
  className 
}) => {

  return (
    <Link href={NAVBAR_LOGO_LINK || '/'} legacyBehavior={true}>
      <a className={`relative inline-flex flex-none items-center ${className}`} >
        &#9660;
      </a>
    </Link>
  )
}

export default NavbarLogo
