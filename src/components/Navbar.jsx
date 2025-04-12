import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
  return <nav className="nav">
   <Link to="/" className="site-title"><img src="src/assets/mentalitea-main-logo.svg" alt="multicolor main logo for mentalitea brand with leaf design" /></Link>
    <ul className="pages">
      <li><Link to="/shop">shop</Link></li>
      <li><Link to="/explore">explore</Link></li>
      <li><Link to="/about">our story</Link></li>
    </ul>
  </nav>
}
 function customLink({to, children, ...props}) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({path:resolvedPath.pathname, end:true})
return (
  <li className={path === to ? "active" : ""}>
  <Link to={to} {...props}>{children}</Link>
  </li>
)
 }