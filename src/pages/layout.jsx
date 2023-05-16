import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
    
       <nav className="navigointi">
        <div className="max-width">
            <ul className="menu" id="menu">
              <li> 

              <p>SAKILA</p>
              </li>
              <li>
                <Link style={{color:  "black"}} to="/">Home</Link>
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
    </nav>
    
      
      
      


      <Outlet />
    </>
  )
};

export default Layout;
