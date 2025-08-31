// loading.js
export default function Loading() {
    return (
      <div className="grid grid-cols-12 gap-4 p-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="col-start-2 col-span-10 odd:sm:col-start-2 sm:col-span-5 lg:col-span-4 odd:lg:col-start-auto xl:col-span-3 rounded-2xl w-full h-84 sm:h-86 md:h-90 lg:h-98 bg-gray-200 animate-pulse"
          >
            <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="flex justify-between items-center">
                <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }