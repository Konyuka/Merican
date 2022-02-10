import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Products & Services', href: '#', current: false },
  { name: 'About & Contacts', href: '#', current: false },
  { name: 'Projects & Clients', href: '#', current: false },
  { name: 'Blog & Media', href: '#', current: false },
  { name: 'Care & Careers', href: '#', current: false },
]


function classNames(...classes)
{
  return classes.filter(Boolean).join(' ')
}

export default function Example()
{
  return (
    <Disclosure as="header" className="bg-blue-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-white lg:px-8">
            <div className="relative h-16 flex justify-between">

              <div className="relative z-10 px-2 flex lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
              </div>

              <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-white border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <a href="tel:0740 174 448" className="mr-8">
                  <i className="fas fa-phone text-white m-1 "></i> <h1 className="text-white font-bold text-md">0740 174 448</h1>
                </a>
                <a href="mailto:0740 174 448">
                  <i className="fas fa-paper-plane text-white m-1"> </i> <h1 className="text-white font-bold text-md">sales@mericanltd.com</h1>
                </a>
              </div>

            </div>

            <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
              {navigation.map((item) => (
                
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white hover:text-black hover:font-bold',
                      'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                
              ))}
            </nav>

          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="pt-2 pb-3 px-2 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md py-2 px-3 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="px-4 flex items-center">
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
