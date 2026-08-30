import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"
import Preloader from "./components/Preloader"
import ScrollProgress from "./components/ScrollProgress"

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}
