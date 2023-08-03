import ItemList from "./components/Item.list/ItemList"
export default function Dog ({dog})
{
    return (
        <ul>
            {dog.map((item) => {
                if (typeof item =="string")
                {   
                    return(
                        <div key={item}>
                        <ItemList> {item} </ItemList>  
                        </div>
                    )
                    
                }   else
                    {   
                        return(
                            <div key={item}>
                                <ItemList>{item.name}</ItemList>
                                <ItemList>{item.age}</ItemList>
                            </div>
                        )
                    }
                
            })}
        </ul>
    )
}