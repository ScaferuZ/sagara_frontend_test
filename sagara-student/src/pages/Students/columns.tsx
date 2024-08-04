"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { TrashIcon, PencilIcon, ArrowsUpDownIcon } from "@heroicons/react/20/solid"


export type Student = {
  id?: number
  name: string
  email: string
  phoneNumber: number
  instance: string
  createdAt?: Date
}

// These functions should be defined in your component or passed as props
const handleEdit = (student: Student) => {
  console.log("Edit student:", student)
  // Implement your edit logic here
}

const handleDelete = (id: number) => {
  console.log("Delete student with id:", id)
  // Implement your delete logic here
}

const createSortableHeader = (label: string) => {
  return ({ column }: { column: any }) => (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="hover:bg-transparent -ml-4"
    >
      <span className="font-semibold">{label}</span>
      <ArrowsUpDownIcon className="ml-2 h-4 w-4" />
    </Button>
  )
}

export const columns = (handleDelete: (id: number) => void): ColumnDef<Student>[] => [
  {
    accessorKey: "name",
    header: createSortableHeader("Name"),
    cell: ({ row }) => <div className="text-left pl-0">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: createSortableHeader("Email"),
    cell: ({ row }) => <div className="text-left pl-0">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phoneNumber",
    header: createSortableHeader("Phone Number"),
    cell: ({ row }) => <div className="text-left pl-0">{row.getValue("phoneNumber")}</div>,
  },
  {
    accessorKey: "instance",
    header: createSortableHeader("Instance"),
    cell: ({ row }) => <div className="text-left pl-0">{row.getValue("instance")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: createSortableHeader("Created At"),
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt") as Date
      const formatted = createdAt.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      return <div className="text-left font-medium">{formatted}</div>
    }
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      const student = row.original
      return (
        <div className="flex justify-end space-x-2">
          <Button variant="ghost" size="icon" onClick={() => handleEdit(student)}>
            <PencilIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleDelete(student.id)}>
            <TrashIcon className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  },
]
