import { useState } from "react"
// import imgsrc from '[./assets]/path'
import "./App.css"
import NavBar from "./components/NavBar"
import { Routes, Route, Outlet } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="goals" element={<h1 className="text-3xl">Goals!</h1>} />
        <Route path="explore" element={<h1 className="text-3xl">Explore!</h1>} />
        <Route path="profile" element={<h1 className="text-3xl">Profile!</h1>} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  )
}

export default App
