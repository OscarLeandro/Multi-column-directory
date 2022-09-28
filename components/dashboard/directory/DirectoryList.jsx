

export default function DirectoryList({data:directory}) {
  return (
    <nav className="min-h-0 flex-1 overflow-y-auto" aria-label="Directory">
        {Object.keys(directory).map((letter) => (
            <div key={letter} className="relative">
            <div className="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                <h3>{letter}</h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
                {directory[letter].map((person) => (
                <li key={person.id}>
                    <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <a href="#" className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">{person.name}</p>
                        <p className="truncate text-sm text-gray-500">{person.role}</p>
                        </a>
                    </div>
                    </div>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </nav>
  )
}
