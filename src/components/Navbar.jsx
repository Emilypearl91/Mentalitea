export default function Navbar() {
  return <nav className="nav">
   <a href="/" className="site-title"><img src="src/assets/mentalitea-main-logo.svg" alt="multicolor main logo for mentalitea brand with leaf design" /></a>
    <ul className="pages">
      <li><a href="/shop">shop</a></li>
      <li><a href="/explore">explore</a></li>
      <li><a href="/about">our story</a></li>
    </ul>
  </nav>
}