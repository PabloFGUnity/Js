export default function Navbar ({element, end})
{
    

    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">LELELE</a> 

            <div className={`collapse navbar-collapse d-flex ${end ? "justify-content-end" : "justify-content-start" }`} id="navbarSupportedContent">

            
            
            <div className="navbar-nav">
                {element.map(item => 
                    (   
                        
                            <a  key={item.name} className="nav-link" aria-current="page" href={item.link}>{item.name} </a>
                        
                    ))
                }
            
            </div>
            </div>
        </div>
    </nav>
    )
}