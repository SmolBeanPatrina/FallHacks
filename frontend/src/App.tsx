import { useState } from "react"
import { Routes, Route, Outlet } from "react-router-dom"
// import imgsrc from '[./assets]/path'
import "./App.css"
import NavBar from "./components/NavBar"
import Goals from "./pages/Goals"
import Profile from "./pages/Profile"
import Explore from "./pages/Explore"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="goals" element={<Goals />} />
        <Route path="explore" element={<Explore />} />
        <Route path="profile" element={<Profile />} />
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
