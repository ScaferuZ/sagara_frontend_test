import { Routes, Route } from "react-router-dom"
import { Suspense } from 'react'
import PublicRoutes from "./PublicRoutes"
import LoadingLayout from "@/components/layouts/LoadingLayout"

export const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingLayout />} >
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </Suspense>
  )
}
