import React, {
  ReactElement,
  useEffect,
  useState
} from 'react'

import dynamic from 'next/dynamic'
import { paths } from '@reservoir0x/reservoir-sdk'
import { useMediaQuery } from '@react-hookz/web'

import ConnectWallet from './ConnectWallet'
import HamburgerMenu from './HamburgerMenu'
import setParams from 'lib/params'
import Logo from 'components/navbar/LogoSimple'
import ThemeSwitcher from './ThemeSwitcher'
import CartMenu from './CartMenu'
import SearchMenu from './SearchMenu'
import Link from './Link'
import useMounted from 'hooks/useMounted'
import type { NavLink } from 'uiTypes'

const SearchCollections = dynamic(() => import('./SearchCollections'))
const CommunityDropdown = dynamic(() => import('./CommunityDropdown'))
const NAVBAR_LINKS = process.env.NEXT_PUBLIC_NAVBAR_LINKS || null
const COLLECTION = process.env.NEXT_PUBLIC_COLLECTION
const COMMUNITY = process.env.NEXT_PUBLIC_COMMUNITY
const COLLECTION_SET_ID = process.env.NEXT_PUBLIC_COLLECTION_SET_ID
const DEFAULT_TO_SEARCH = process.env.NEXT_PUBLIC_DEFAULT_TO_SEARCH

function getInitialSearchHref() {
  const PROXY_API_BASE = process.env.NEXT_PUBLIC_PROXY_API_BASE
  const pathname = `${PROXY_API_BASE}/search/collections/v1`
  const query: paths['/search/collections/v1']['get']['parameters']['query'] =
    {}

  if (COLLECTION_SET_ID) {
    query.collectionsSetId = COLLECTION_SET_ID
  } else {
    if (COMMUNITY) query.community = COMMUNITY
  }

  return setParams(pathname, query)
}

const Navbar: React.FC = () => {
  const isMounted = useMounted()
  //const [showLinks, setShowLinks] = useState(true)
  const [filterComponent, setFilterComponent] = useState<ReactElement | null>(null)

    // TODO :aa consolidate these into util hooks that have predefined params
  const isMobile = useMediaQuery('(max-width: 770px)')
  const showDesktopSearch = useMediaQuery('(min-width: 1200px)')

  const [hasCommunityDropdown, setHasCommunityDropdown] = useState<boolean>(false)
  const [navbarLinks, setNavbarLinks] = useState<NavLink[] | undefined>(undefined)


  useEffect(() => {
    const result: NavLink[] = []
    if (typeof NAVBAR_LINKS === 'string') {
      const linksArray = NAVBAR_LINKS.split(',')

      linksArray.forEach((link) => {
        let values = link.split('::')
        result.push({
          name: values[0],
          url: values[1],
        })
      })
    }
    setNavbarLinks(result)
  }, [NAVBAR_LINKS])


  const isGlobal = !COMMUNITY && !COLLECTION && !COLLECTION_SET_ID
  const filterableCollection = isGlobal || COMMUNITY || COLLECTION_SET_ID

  useEffect(() => {
    if (filterableCollection) {
      const href = getInitialSearchHref()

      fetch(href).then(async (res) => {
        let initialResults = undefined

        if (res.ok) {
          initialResults =
            (await res.json()) as paths['/search/collections/v1']['get']['responses']['200']['schema']
        }

        const smallCommunity =
          initialResults?.collections &&
          initialResults.collections.length >= 2 &&
          initialResults.collections.length <= 10

        const hasCommunityDropdown =
          !DEFAULT_TO_SEARCH &&
          (COMMUNITY || COLLECTION_SET_ID) &&
          smallCommunity

        if (hasCommunityDropdown) {
          setFilterComponent(
            <CommunityDropdown
              collections={initialResults?.collections}
              defaultCollectionId={COLLECTION}
            />
          )
          setHasCommunityDropdown(true)
        } else {
          setHasCommunityDropdown(false)
          !showDesktopSearch
            ? setFilterComponent(
                <SearchMenu
                  communityId={COMMUNITY}
                  initialResults={initialResults}
                />
              )
            : setFilterComponent(
                <SearchCollections
                  communityId={COMMUNITY}
                  initialResults={initialResults}
                />
              )
        }
      })
    }
  }, [filterableCollection, showDesktopSearch])

  if (!isMounted) {
    return null
  }

  return (
    <nav className="sticky top-0 z-[1000] col-span-full flex items-center justify-between gap-2 border-b border-[#D4D4D4] bg-white px-6 py-4 dark:border-neutral-600 dark:bg-black md:gap-3 md:py-3 md:px-16">
      <Logo className="text-[22px]" />
      {navbarLinks && (
      <div className="ml-8 mr-8 hidden items-center gap-11 md:flex">
          {navbarLinks.map(({ name, url }) => (
            <Link key={url} href={url} className="navlink text-base" >
              {name}
            </Link>
          ))}
        </div>
      )}
      {(hasCommunityDropdown || showDesktopSearch) && (
        <div className="flex h-full w-full items-center">
          {filterComponent && filterComponent}
        </div>
      )}
      {isMobile ? (
        <div className="ml-auto flex gap-x-5">
          {!hasCommunityDropdown && filterComponent && filterComponent}
          <CartMenu />
          <HamburgerMenu navbarLinks={navbarLinks} />
        </div>
      ) : (
        <div className="z-10 ml-auto shrink-0 gap-2 md:flex xl:gap-4">
          {!hasCommunityDropdown && !showDesktopSearch && (
            <div className="ml-auto flex">
              {filterComponent && filterComponent}
            </div>
          )}
          <CartMenu />
          <ConnectWallet />
          <ThemeSwitcher />
        </div>
      )}
    </nav>
  )
}

export default Navbar
