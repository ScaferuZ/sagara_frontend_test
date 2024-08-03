import { Routes, Route } from "react-router-dom"
import { Suspense } from 'react'
import PublicRoutes from "./PublicRoutes"

export const AppRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>} >
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </Suspense>
  )
}
