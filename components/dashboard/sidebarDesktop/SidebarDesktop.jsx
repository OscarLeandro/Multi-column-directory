import SidebarDesktopNavigation from "./DesktopNavigation";
import DesktopSecondaryNavigation from "./DesktopSecondaryNavigation";


export default function SidebarDesktop({data:user, navigation1:navigation, navigation2:secondaryNavigation}) {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex w-64 flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                  alt="Your Company"
                />
            </div>
            <nav className="mt-5 flex-1" aria-label="Sidebar">
                <div className="space-y-1 px-2">
                {navigation.map((item) => (
                    <SidebarDesktopNavigation data={item} key={item.name} />
                ))}
                </div>

                <hr className="my-5 border-t border-gray-200" aria-hidden="true" />
                <div className="flex-1 space-y-1 px-2">
                {secondaryNavigation.map((item) => (
                    <DesktopSecondaryNavigation data={item} key={item.name} />
                ))}
                </div>
            </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                <div>
                    <img className="inline-block h-9 w-9 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{user.name}</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                </div>
                </div>
            </a>
            </div>
        </div>
        </div>
    </div>
  )
}
