import { Link} from "react-router-dom"
export default function Footer() {
  return <footer>

<ul className="pages">
  <li><Link to="/shop">shop</Link></li>
  <li><Link to="/explore">explore</Link></li>
  <li><Link to="/about">our story</Link></li>
</ul>
<p className="copyright">© 2025 Emily Seafoot</p>
</footer> 
}