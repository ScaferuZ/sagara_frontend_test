import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const currentPage = table.getState().pagination.pageIndex + 1
  const totalPages = table.getPageCount()

  const getPageNumbers = () => {
    const pageNumbers = []
    const ellipsis = <span className="px-2">...</span>

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, 5, ellipsis, totalPages)
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, ellipsis, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pageNumbers.push(1, ellipsis, currentPage - 1, currentPage, currentPage + 1, ellipsis, totalPages)
      }
    }

    return pageNumbers
  }

  return (
    <div className="flex items-center justify-between space-x-2 py-4">
      <Button
        className="bg-white-background dark:bg-background"
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      <div className="flex flex-row items-center justify-center space-x-4">
        {getPageNumbers().map((pageNumber, index) => (
          <Button
            className={`${pageNumber === currentPage ? 'bg-red text-white-background' : 'bg-white-background dark:bg-background'} dark:text-white`}
            key={index}
            variant={pageNumber === currentPage ? "destructive" : "outline"}
            size="sm"
            onClick={() => typeof pageNumber === 'number' && table.setPageIndex(pageNumber - 1)}
            disabled={typeof pageNumber !== 'number'}
          >
            {pageNumber}
          </Button>
        ))}
      </div>
      <Button
        className="bg-white-background dark:bg-background"
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  )
}
