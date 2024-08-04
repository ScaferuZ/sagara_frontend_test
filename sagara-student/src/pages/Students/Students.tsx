import { useEffect, useState } from 'react'
import { columns, Student } from './columns'
import { DataTable } from './data-table'
import { students } from './constant'
import DataLoading from '@/components/elements/DataLoading'
import { StudentEditForm } from '@/components/forms/StudentEditForm/StudentEditForm'

function StudentsContent() {
  const [data, setData] = useState<Student[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingStudent, setEditingStudent] = useState<Student | null>(null)

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

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student)
  }

  const handleUpdateStudent = (updatedStudent: Student) => {
    setData(prevData => prevData.map(student =>
      student.id === updatedStudent.id ? updatedStudent : student
    ))
    setEditingStudent(null)
  }

  return (
    <>
      <h1 className='text-2xl font-bold text-left mb-6'>Data Student</h1>
      <DataTable
        columns={columns(handleEditStudent, handleDeleteStudent)}
        data={data}
        onAddStudent={handleAddStudent}
      />
      {editingStudent && (
        <StudentEditForm
          student={editingStudent}
          onSuccess={handleUpdateStudent}
          open={!!editingStudent}
          onOpenChange={(open) => !open && setEditingStudent(null)}
        />
      )}
    </>
  )
}

export default StudentsContent
