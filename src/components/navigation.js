import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

const Navigation =  () => (
  <nav className="navigation"> 
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)

export default Navigation;