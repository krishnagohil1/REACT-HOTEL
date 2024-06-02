import { Link } from "react-router-dom"

function Header(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container">
        <div class="text-container">
          <a class="navbar-brand ocean animated-text">ocean</a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"><i class="bi bi-list-nested"></i></span> 
          <i class="fa-solid  mt-3 fa-bars-staggered navbar-toggler-icon"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <Link to={"/"}> <li class="nav-item overdata">
             <a class="nav-link  text-white" >Home</a> 
            </li> 
          </Link>
          <Link to={"/about"}>
            <li class="nav-item overdata">
              <a class="nav-link  text-white" >About Us</a>
            </li>
            </Link>
            <li class="nav-item dropdown overdata">
              <a class="nav-link dropdown-toggle  text-white" href="#" id="aboutDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </a>
              <ul class="dropdown-menu dropdownData" aria-labelledby="aboutDropdown">
            <Link to={"/servicies"}>     <li><a class="dropdown-item change_background" >Our Services</a></li></Link>
            <Link to={"/restaurent"}>     <li><a class="dropdown-item change_background" >Restaurant</a></li></Link>
            <Link to={"/pricing"}>    <li><a class="dropdown-item change_background" >Pricing</a></li> </Link>
            <Link to={"/ourGallery"}>     <li><a class="dropdown-item change_background" >Our Gallery</a></li></Link>
            <Link to={"/team"}>    <li><a class="dropdown-item change_background" >Team</a></li> </Link>
            <Link to={"/spa"}>     <li><a class="dropdown-item change_background" >SPA</a></li> </Link>
            <Link to={"/spafaq"}>     <li><a class="dropdown-item change_background">SPA FAQ</a></li> </Link>
              </ul>
            </li>
            <li class="nav-item dropdown overdata">
              <a class="nav-link dropdown-toggle  text-white" href="#" id="blogDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Blog
              </a>
              <ul class="dropdown-menu dropdownData" aria-labelledby="blogDropdown">
             <Link to={"/blog"}>  <li><a class="dropdown-item change_background" >Blog</a></li> </Link> 
             <Link to={"/bloglist"}>   <li><a class="dropdown-item change_background" >Blog List</a></li> </Link>
              </ul>
            </li>
            <li class="nav-item dropdown overdata">
              <a class="nav-link dropdown-toggle  text-white" href="#" id="roomsDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Rooms & Suites
              </a>
              <ul class="dropdown-menu dropdownData" aria-labelledby="roomsDropdown">
              <Link  to={"/Singalroom"}>  <li><a class="dropdown-item change_background">Single Room</a></li> </Link>
              <Link to={"/doubalroom"}> <li><a class="dropdown-item change_background" >Double Room</a></li> </Link> 
              </ul>
            </li>
            <Link to={"/contact"}>
            <li class="nav-item overdata">
              <a class="nav-link  text-white" >Contact</a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
    )
}
export default Header