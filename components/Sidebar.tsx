import * as Accordion from '@radix-ui/react-accordion'
import { FC, MutableRefObject } from 'react'
import AttributeSelector from './filter/AttributeSelector'
import { SWRResponse } from 'swr'
import { SWRInfiniteResponse } from 'swr/infinite/dist/infinite'
import { FiChevronDown } from 'react-icons/fi'
<<<<<<< HEAD
import { useAttributes } from '@reservoir0x/reservoir-kit-ui'
import { styled } from '@stitches/react'

const StyledChevron = styled(FiChevronDown, {
  transition: 'transform',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})

type Props = {
  attributes: ReturnType<typeof useAttributes>['data'] | undefined
  refreshData: () => void
  scrollToTop: () => void
}

const Sidebar: FC<Props> = ({ attributes, refreshData, scrollToTop }) => {
  if (attributes && attributes.length === 0) return null
=======
import { paths } from '@reservoir0x/reservoir-kit-client'

type Props = {
  attributes: SWRResponse<
    paths['/collections/{collection}/attributes/all/v1']['get']['responses']['200']['schema']
  >
  setTokensSize: SWRInfiniteResponse['setSize']
}

const Sidebar: FC<Props> = ({ attributes, setTokensSize }) => {
  const router = useRouter()
>>>>>>> 96757b6 (Update look and feel)

  return (
    <Accordion.Root
      type="multiple"
<<<<<<< HEAD
      className="sticky top-[91px] mr-4 hidden max-h-[calc(100vh-+91px)] w-min min-w-[300px] max-w-sm overflow-auto border-r-[1px] border-gray-300 pb-12 dark:border-neutral-600 md:block md:w-1/3 "
    >
      <div className="border-b-[1px] border-gray-300 px-6 py-5 text-left text-lg font-semibold transition dark:border-neutral-600 dark:text-white">
        Filters
=======
<<<<<<< HEAD
      className="col-span-3 hidden border-r-[1px] border-gray-300 dark:border-neutral-600 md:block "
=======
      className="col-span-3 hidden border-r-[1px] border-gray-300 dark:border-neutral-600 md:block"
>>>>>>> d73def8 (initial commit)
    >
      <div className="overflow-hidden">
        <button
          onClick={() => {
            router.query?.attribute_key === ''
              ? toggleOffItem(router, 'attribute_key')
              : toggleOnAttributeKey(router, 'attribute_key', '')
          }}
<<<<<<< HEAD
          className={`w-full border-b-[1px] border-gray-300 px-6 py-5 text-left transition dark:border-neutral-600 dark:text-white ${
=======
          className={`reservoir-label-l w-full border-b-[1px] border-gray-300 px-6 py-5 text-left transition dark:border-neutral-600 dark:text-white ${
>>>>>>> d73def8 (initial commit)
            router.query.attribute_key &&
            router.query.attribute_key.toString() === ''
              ? 'bg-primary-100 hover:bg-primary-300 dark:hover:bg-primary-900'
              : 'hover:bg-primary-100 dark:hover:bg-primary-900'
          }`}
        >
          Explore All
        </button>
>>>>>>> 183137d (initial commit)
      </div>
      {attributes.data?.attributes?.map((attribute) => (
        <Accordion.Item
          value={`item-${attribute.key}`}
          key={attribute.key}
          className="overflow-hidden"
        >
<<<<<<< HEAD
          <Accordion.Header className="flex w-full justify-between border-b-[1px] border-gray-300 dark:border-neutral-600">
            <Accordion.Trigger className="flex w-full items-center justify-between p-5 transition hover:bg-primary-100 dark:hover:bg-primary-900">
=======
          <Accordion.Header
<<<<<<< HEAD
            className={`flex w-full justify-between border-b-[1px] border-gray-300 dark:border-neutral-600  ${
=======
            className={`flex w-full justify-between border-b-[1px] border-gray-300 dark:border-neutral-600 ${
>>>>>>> d73def8 (initial commit)
              router.query.attribute_key &&
              router.query.attribute_key.toString() === attribute.key
                ? 'divide-gray-800 dark:divide-gray-300'
                : 'divide-gray-300 dark:divide-gray-800'
            }`}
          >
            <button
              onClick={() => {
                if (attribute.key) {
                  router.query?.attribute_key === attribute.key
                    ? toggleOffItem(router, 'attribute_key')
                    : toggleOnAttributeKey(
                        router,
                        'attribute_key',
                        attribute.key
                      )
                }
              }}
<<<<<<< HEAD
              className={`w-full py-5 px-6 text-left capitalize transition dark:text-white ${
=======
              className={`reservoir-label-l w-full py-5 px-6 text-left capitalize transition dark:text-white ${
>>>>>>> d73def8 (initial commit)
                router.query.attribute_key &&
                router.query.attribute_key.toString() === attribute.key
                  ? 'bg-primary-100 hover:bg-primary-300  dark:bg-primary-900 dark:hover:bg-primary-900'
                  : 'hover:bg-primary-100 dark:hover:bg-primary-900'
              }`}
            >
>>>>>>> 183137d (initial commit)
              {attribute.key}
              <StyledChevron className="h-5 w-5" aria-hidden />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <AttributeSelector
              attribute={attribute}
<<<<<<< HEAD
              refreshData={refreshData}
              scrollToTop={scrollToTop}
=======
              setTokensSize={setTokensSize}
>>>>>>> 96757b6 (Update look and feel)
            />
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default Sidebar
