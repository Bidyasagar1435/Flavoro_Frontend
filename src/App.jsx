import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error'
import ProtectedRoute from './components/ProtectedRoute'
import FoodDetails from './Pages/FoodDetails'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<ProtectedRoute element={<Success />} />} />
        <Route path="/*" element={<Error />} />
        <Route path="/food-details/:id" element={<FoodDetails />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
