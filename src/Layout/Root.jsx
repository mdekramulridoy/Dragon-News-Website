import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Nav from "../components/Nav"

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <Nav></Nav>
      </header>
      <Outlet></Outlet>
    </div>
  )
}

export default Root
