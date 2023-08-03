let a=[4,3,12,1,8,9];


for (let i=0;i<a.length;i++)
{
    
    for (let j=0;j<a.length -1;j++)
    {
        if (a[j]>a[j+1])
        {
        
            let b = a[j];
            b = a[j];
            a[j] = a[j+1];
            a[j+1] = b;
        } 
    }
   
}

console.log(a);