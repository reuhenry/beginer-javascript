let random=['milk',{name:'sarah'},true,36,]
console.log(random)
console.log(random[1])
console.log(random[2])
console.log(random[random.length-1])

random.forEach((item)=>{
    console.log(item)
})

let statuses=[true,false,false,false,true]
console.log(statuses)
console.log(statuses[0])
console.log(statuses[2])
console.log(statuses.length)
console.log(statuses[statuses.length-1])

statuses.forEach((status)=>{
    console.log(status)
})


let shoppinglist=['milk','sugar','salt','flour','juice']
console.log(shoppinglist[2])
console.log(shoppinglist[4])
console.log(shoppinglist.length)
console.log(shoppinglist[shoppinglist.length-1])

shoppinglist.forEach((item)=>{
   console.log('some ' + item)
})

let ages=[36,60,17,38,70,10,46,30]
console.log(ages)
console.log(ages[4])
console.log(ages[1])
console.log(ages.length)
console.log(ages[ages.length-1])

let people=[{name:'henry', age:36, height:'1.7m'},
             {name:'jane',age:27,height:'1m'},
             {name:'dennis',age:17,height:'5.4m'}]
console.log(people)
console.log(people[1])
console.log(people[0])
console.log(people.length)
console.log(people[people.length-1])
 
people.forEach((person)=>{
    console.log(person.name + ' doe')
    console.log(person.age + 100)
})

    // Loops
    // Looping using forEach
    ages.forEach((age)=> {
    console.log(age+10)
    })