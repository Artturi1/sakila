import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
    
       <nav className="navigointi">
        <div className="max-width">
          <div className="hakemisto">
          
            <ul className="menu" id="menu">
              
              
              
              <li> 
                <img src="./logo_valkoinen_pohja.png " alt="logo" width="45" height="45"></img>
              </li>

              <li>

                <ul className="menu-button"> 
                <Link style={{color:  "black"}} to="/">Home</Link>
                </ul>
              </li>
              <li>
                <Link style={{color:  "black"}}  to="/films">films</Link>
              </li>
              <li>
                <Link style={{color:  "black"}}   to="/actors">actors</Link>

              </li>
              <li>
              </li>

              

         
        
              
              
              
              
          
            </ul>
            </div>
        </div>
    </nav>
    
      
      
      


      <Outlet />
    </>
  )
};

export default Layout;
