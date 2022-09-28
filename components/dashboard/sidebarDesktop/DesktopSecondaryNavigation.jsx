
export default function DesktopSecondaryNavigation({data: item}) {

  return (
    <a
      key={item.name}
      href={item.href}
      className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      >
      <item.icon
          className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
      />
      {item.name}
      </a>
  )
}
