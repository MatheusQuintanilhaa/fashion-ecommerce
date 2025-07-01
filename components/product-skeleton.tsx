export function ProductSkeleton() {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
      {/* Image Skeleton */}
      <div className="relative aspect-[3/4] bg-gray-200" />

      <div className="p-6 flex flex-col flex-1">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-200 rounded mb-2" />

        {/* Description Skeleton */}
        <div className="space-y-2 mb-4 flex-1">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>

        {/* Price Skeleton */}
        <div className="mb-4 h-12 flex flex-col justify-end">
          <div className="h-4 bg-gray-200 rounded w-24 mb-1" />
          <div className="h-6 bg-gray-200 rounded w-32" />
        </div>

        {/* Button Skeleton */}
        <div className="h-9 bg-gray-200 rounded w-full" />
      </div>
    </div>
  )
}
