import React, { 
  PropsWithChildren,
  HTMLProps
} from 'react'

import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { UrlObject } from 'url'

/**
 * Adds active / current state support to Next's Link
 */
const Link: React.FC<
  { 
    activeClassName?: string
      // This is next's signature for Url's
    isActiveRoute?: (route: UrlObject | string) => boolean
  } &
  PropsWithChildren &
  LinkProps & 
  HTMLProps<HTMLAnchorElement> 
> = ({
  href,
  activeClassName,
  isActiveRoute,
  children,
  ...rest
}) => {

  const router = useRouter()

  const isMatchFunction = isActiveRoute ? isActiveRoute : (url: UrlObject | string) => {
    const toTest = (typeof url === 'string' ) ? url as string : (url as UrlObject).pathname as string
    const myHRef = (typeof href === 'string' ) ? href as string : (href as UrlObject).pathname as string
      // TODO :aa add better support for keys and subroutes
    return (myHRef === toTest)
  }

  const isActive = isMatchFunction(router.pathname)
  const activeClazz = activeClassName ? activeClassName : 'active-link'

  const toSpread: any = {...rest}
  if (isActive) {
    if (toSpread.className) {
      toSpread.className += ' ' + activeClazz
    }
    else {
      toSpread.className = activeClazz
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div // just to achieve centering
        style={{
          fontSize: '0.7rem', 
          visibility: 'hidden'
        }}
      >&#9660;</div>

      <NextLink href={href} {...toSpread}>
        {children}
      </NextLink>
      <div 
        style={{
          fontSize: '0.7rem', 
          visibility: isActive ? 'visible' : 'hidden'
        }}
      >&#9660;</div>
    </div>
  )
}

export default Link
