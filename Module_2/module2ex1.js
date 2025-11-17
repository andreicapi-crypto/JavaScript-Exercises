    const number1= prompt("Add first number:")
    const number2=prompt("Add second number:")
    const number3=prompt("Add third number:")
    const number4=prompt("Add fourth number:")
    const number5=prompt("Add fifth number:")
    const list =[]
    list.push(number1)
    list.push(number2)
    list.push(number3)
    list.push(number4)
    list.push(number5)
    for(let i=5;i>=0;i--)
    {
        console.log(list[i])
    }