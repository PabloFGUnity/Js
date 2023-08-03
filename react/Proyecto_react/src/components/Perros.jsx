export default function Perros ({perros})
{

    return(
        <>
        <ul>
        
        {perros.map(item => 
            (
                <li key={item} >{item}</li>
            ))}

        </ul>
        </>
    )
}