function solve(array, uniqueNum)
{
    for(let i = 0; i < array.length; i++)
    {
        for(let j = i + 1; j <array.length; j++)
        {
            let num1 = array[i];
            let num2 = array[j];

            if(num1 + num2 === uniqueNum)
            {
                console.log(`${num1} ${num2}`);
            }
        }
    
    }
}

solve([1, 7, 6, 2, 19, 23], 8)