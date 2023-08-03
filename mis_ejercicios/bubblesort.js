let a=[];


for (let i=0;i<100000;i++)
{
    a.push(Math.floor(Math.random()* 100000000000)+1)
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

