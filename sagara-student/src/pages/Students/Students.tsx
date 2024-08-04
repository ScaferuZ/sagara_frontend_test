import { useEffect, useState } from 'react'
import { columns, Student } from './columns'
import { DataTable } from './data-table'
import { students } from './constant'
import DataLoading from '@/components/elements/DataLoading'

function StudentsContent() {
  const [data, setData] = useState<Student[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setData(students)
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <DataLoading />
  }


  const handleAddStudent = (newStudent: Student) => {
    setData(prevData => [...prevData, { ...newStudent, id: prevData.length + 1, createdAt: new Date() }])
  }

  const handleDeleteStudent = (id: number) => {
    setData(prevData => prevData.filter(student => student.id !== id))
  }

  return (
    <>
      <h1 className='text-2xl font-bold text-left mb-6'>Data Student</h1>
      <DataTable columns={columns(handleDeleteStudent)} data={data} onAddStudent={handleAddStudent} />
    </>
  )
}

export default StudentsContent
