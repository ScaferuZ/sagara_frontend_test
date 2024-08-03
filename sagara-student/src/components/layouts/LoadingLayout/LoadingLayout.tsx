import { Skeleton } from '@/components/ui/skeleton'

const SidebarSkeleton = () => (
  <div className="flex h-full flex-col">
    <div className="flex h-16 items-center justify-center mt-11 mb-12">
      <Skeleton className="h-20 w-40" /> {/* Logo */}
    </div>
    <Skeleton className="h-4 w-16 mx-4 mb-4" /> {/* "MENU" text */}
    <nav className="flex-1 space-y-2 px-4 py-4">
      {[1, 2].map((_, index) => (
        <Skeleton key={index} className="h-10 w-full" /> /* Menu items */
      ))}
    </nav>
  </div>
);

const LoadingLayout = () => {
  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar skeleton for larger screens */}
      <aside className="hidden w-80 flex-shrink-0 border-r border-border bg-background dark:bg-background lg:block">
        <SidebarSkeleton />
      </aside>

      {/* Main content area skeleton */}
      <main className="flex flex-1 flex-col overflow-hidden bg-white-background dark:bg-background">
        <header className="flex items-center justify-end px-6 py-4 space-x-4">
          <Skeleton className="h-10 w-40 rounded-full" /> {/* User dropdown */}
          <Skeleton className="h-10 w-10 rounded-full" /> {/* Mode toggle */}
          <Skeleton className="h-10 w-10 rounded-full lg:hidden" /> {/* Mobile menu button */}
        </header>
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

export default LoadingLayout
