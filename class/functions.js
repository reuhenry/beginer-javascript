function getSum () {
    let num1=20
    let num2=30
    let sum=num1 + num2
    return sum
    
}
 console.log(getSum())

 function getDifference ()  {
    let num3=50
    let num4=10
    let difference=num3 - num4
    return difference
    
 }
   console.log(getDifference())

   const getProduct =()=>  {
     let num1=40
     let num3=38
     let product=num1 * num3

     console.log(product)
   }
    getProduct ()

   const getQuotient =()=>  {
     let num2=96
     let num1=12
     let quotient=num2 / num1

     console.log(quotient)
   }
    getQuotient ()

    const checkifAdult =() =>{
        let yob=2003
        let age=2024-yob
        if (age >17) {
        return 'the person is an adult'
      } else {
        return'the person is an underage'
       }
    }
       console.log(checkifAdult())

       const checkifPerson =() => {
        let yob=2009
        let age=2024-yob
        if(age >17)  {
            return'the person is an adult'
         } else {
            return'the person is underage'
       }
    }
        console.log(checkifPerson())

        const checkGrade =()=> {
         let marks=70

         if (  marks >= 85 && marks <= 100) {
            return 'A'
         } else if (marks >=80 && marks <= 84){
            return 'A-'
         } else if (marks >=75 && marks <= 79){
            return 'B+'
         } else if (marks >=70 && marks <= 74){
            return 'B plain' 
         } else if (  marks >= 65 && marks <= 69){
            return 'B-'
        } else if (marks >=60 && marks <= 64){
            return 'C+'
        } else if (marks >=55 && marks <= 59){
            return 'C plain'
        } else if (marks >=50 && marks <= 54){
            return 'C-'    
        } else if (marks >=45 && marks <= 49){
            return 'D+'
         } else if (marks >=40 && marks <= 44){
            return 'D plain' 
         } else if (  marks >= 35 && marks <= 39){
            return 'D-'
        } else if (marks >=0 && marks <= 34){
            return 'E'  
        }
     }
         console.log(checkGrade())

          const checkGuidelines =()=> {
            let temperature=29
            
          if (temperature >30){
            return'wear shorts and t-shirts'
          } else if(temperature >=20 && temperature <= 29){
            return'wear pants and long-sleeve shirt'
          } else if(temperature <20){
            return'wear jacket or sweater'
          }
        }
    

        console.log(checkGuidelines())
     
    