import { Skeleton } from '@/components/ui/skeleton'

const DataLoading = () => {
  return (
    <div className="flex h-screen w-full bg-background">

      {/* Main content area skeleton */}
      <main className="flex flex-1 flex-col overflow-hidden bg-white-background dark:bg-background">
        <div className="flex-1 overflow-auto dark:bg-background bg-white-grey p-6">
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/4" /> {/* Page title */}
            <Skeleton className="h-64 w-full" /> {/* Main content area */}
            <Skeleton className="h-64 w-full" /> {/* Additional content */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default DataLoading 
