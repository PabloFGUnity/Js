export default function User({user})
{

    return (
        
             <>
             <ul>
                 <li>
                     {user.name}  
                 </li>
                 <li>
                     {user.surname}
                 </li>
                 <li>
                     {user.age}
                 </li>
                 
             </ul>
             </>
    );
}