import NavigationMobile from "./NavigationMobile";
import SecondaryNavigationMobile from "./SecondaryNavigationMobile";

export default function SidebarMobile({navigation1:navigation, navigation2: secondaryNavigation}) {

  return (

    <nav aria-label="Sidebar" className="mt-5">
        <div className="space-y-1 px-2">
            {navigation.map((item) => (
                <NavigationMobile data={item} key={item.name} />
            ))}
        </div>
        <hr className="my-5 border-t border-gray-200" aria-hidden="true" />
        <div className="space-y-1 px-2">
            {secondaryNavigation.map((item) => (
                <SecondaryNavigationMobile data={item} key={item.name}  />
            ))}
        </div>
    </nav>

      
  )
}
