let num1 = 3009

console.log(num1)
let age = 16000000000000000000000000000000000000000000000000000000n
console.log("Мне " + age + " лет")

let num2 = "Hello"
console.log(num1 * num2)

let number1 = 2
let number2 = 3
// console.log(number2 % number1)
// console.log(number2**number1)
// console.log(number2 < number1)
// console.log(number2 >= number1)
// console.log(number2 != number1)
// console.log(number2 == 1 || number1 == 2)
// console.log(number2 == 1 && number1 == 2)

if(number1 > num1){
    console.log("Yes")
}

else if(num1 == number2){
    console.log("No")
}

else{
    console.log("...")
}
//let num = prompt("Введите номер вашего билета")


// switch(num){
    
//     case "1" : 
//         console.log("Проигрыш, вам повезёт в другой раз")
//         break
//     case "2" : 
//         console.log("Проигрыш, вам повезёт в другой раз")
//         break
//     case "3" : 
//         console.log("Вы выиграли приз!!!")
//         break
//     case "4" : 
//         console.log("Проигрыш, вам повезёт в другой раз")
//         break
//}

// let num4 = prompt("Введите температуру")

// if(num4 >= 1){
//     console.log("Нужна летняя резина")
// }

// else if(num4 <= 0){
//     console.log("Нужна зимняя резина")
// }

// else{
//     console.log("Введите температуру в числовом формате")
// }
 
// let i = 0

// while (i <= 10){
//     console.log(i)
//     i++
// }

for(let i = 0; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i)

    }
}

let array = [1, 12, 32, 129]

console.log(array[0])

// array[1] = 13
// console.log(array)
// array.push(150)
// console.log(array)
// array.pop()
// console.log(array)
// array.unshift(0)
// console.log(array)
// array.shift()
// console.log(array)
// delete array[2]
// console.log(array)
// array.splice(2, 3)
// console.log(array)

let arrayOne = [21, 234, 321, 433, 31, 90]

let array2 = array.concat(arrayOne)

console.log(array2)

let userAnswer = 1000
function convert(){
    let result = userAnswer * 100 / 1920
    console.log(result)
}

convert()
arrayOne.forEach(function (num, index){
    arrayOne[index] = num + 1
    console.log(arrayOne)
})


let userData = {
    userName: "Александр",
    userLastName: "Петров",
    userAge: 35

}

console.log(userData)

// let petNameInput = prompt("Введите имя питомца")
// let petAgeInput = prompt("Введите возраст питомца")
// let userAdresInput = prompt("Введите ваш город")
// let streetInput = prompt("Введите вашу улицу")
// let homeInput = prompt("Введите номер вашего дома")

let petData = {
    petName: "Кузя" ,
    petAge: "4" ,
    userAdres: {
        cite:"",
        street:"Ple",
        home:"12"

    },
    sayHello : function(){
        console.log("Привет, мне ", this.petAge, "года")
    }
}
petData.sayHello()


// petData.petName = petNameInput
// petData.petAge = petAgeInput
// petData.userAdres.cite = userAdresInput

// petData.userAdres.home = homeInput
// petData.userAdres.street = streetInput

console.log(petData)
console.log(petData.userAdres.home)

// let weight1 = prompt("Введите ваш вес")
// let height1 = prompt("Введите ваш рост")

// let sizeClothing = {
//     height : "",
//     weight : "",
//     size : ""
// }

// sizeClothing.height = height1
// sizeClothing.weight = weight1

// console.log(sizeClothing)

// if(60 <= weight1 <= 50 && height1 <= 164){
    
//     sizeClothing.size = "XS"
//     console.log(sizeClothing.size)
// }

// else if(61 <= weight1 <= 66 && 164 <= height1 <= 173){
//     sizeClothing.size = "S"
    
//     console.log(sizeClothing.size)
// }

// else if(67 <= weight1 <= 77 && 173 <= height1 <= 178){
//     sizeClothing.size = "M"
//     console.log(sizeClothing.size)
// }

// else if(76 <= weight1 <= 85 && 178 <= height1 <= 184){
//     sizeClothing.size = "L"
//     console.log(sizeClothing.size)
// }

// else if(85 <= weight1 <= 95 && 184 <= height1 <= 194){
//     sizeClothing.size = "XL"
//     console.log(sizeClothing.size)
// }

// else if(95 <= weight1 <= 105 && 189 <= height1 <= 194){
//     sizeClothing.size = "XXL"
//     console.log(sizeClothing.size)
// }

// else if(106 <= weight1 <= 112 && 194 <= height1 <= 198){
//     sizeClothing.size = "2XL"
//     console.log(sizeClothing.size)
// }

// else{
//     console.log("Неизвестный ввод")
// }

let car = {
    model : "Mersedez class S",
    tank : {
        volume : 90,
        gas : 0
    },
    consumption : 15 / 100,

    fillUp (count){
        if (count <= this.tank.volume){
            this.tank.gas += count
        }
        else {
            console.log("Количестыо бензина превышает объём бака")
        }
        return `Заправлено ${this.tank.gas} литров бензина` 
    },

    drive (km){
        if (km * this.consumption > this.tank.gas){
            let result = this.tank.gas / this.consumption
            this.tank.gas = 0
            return `Не хватило бензина. Оставшийся путь: ${km - result} `
        }

        else{
            this.tank.gas = this.tank.gas - km * this.consumption
            return `Проехали ${km} км, осталось ${this.tank.gas} литров бензина.`
        }
    }

}

console.log(car.fillUp(10))
console.log(car.drive(100))
//Создать объект воин с параметрами здоровье и выносливость, написать методы, которые ведут подсчёт колличества нанесённых и пропущеных ударов и вызвать методы вне объекта.
let rand1 = Math.random(1,10)
let swordman = {
    hp: 110,
    endurance: 100,

    struck (count){
        this.endurance = this.endurance - 5 * count
        if (this.endurance <= 0){
            return `Было нанесено ${count}, персонаж в критической усталости`
        }
        else{
            return `Удар был нанесён, ${this.endurance} выносливости`
        }
        },

    playerShot (count){
        this.hp = this.hp - 10 * count
        if (this.hp <= 0){
            return `Было нанесено ${count}, персонаж погиб`
        }
        else{
            return `Удар был получен, ${this.hp} здоровья`
        }

        // осталось ${this.swordman.hp} здоровья,
    
}
}
console.log(swordman.struck(12))
console.log(swordman.playerShot(12))

let themeWhiteBlack = document.getElementById("themeWhiteBlack")
let themeWhiteBlack1 = document.getElementById("themeWhiteBlack1")
let ourProject = document.getElementById("ourProject")
let project = document.getElementById("project")
let ourPr = document.getElementById("ourPr")
let getAcquainted = document.getElementById("getAcquainted")
let PrInfo = document.getElementById("PrInfo")
let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let card4 = document.getElementById("card4")
let body = document.querySelector("#body")
let body1 = document.querySelector("#body1")
let reg = document.querySelector(".reg")
let footer = document.querySelector("footer")
let about = document.querySelector(".about")
let aboutAs = document.querySelector(".aboutAs")
let textAboutAs = document.querySelector(".textAboutAs")
let as = document.querySelector(".as")
let our = document.querySelector(".our")
let srel = document.querySelector(".srel")
let srel1 = document.querySelector(".srel1")

let button1 = document.querySelector(".but1")
let button2 = document.querySelector(".but2")
let button3 = document.querySelector(".but3")
let button4 = document.querySelector(".but4")
let people1 = document.querySelector(".people1")
let people2 = document.querySelector(".people2")
let people3 = document.querySelector(".people3")
let people4 = document.querySelector(".people4")
let people5 = document.querySelector(".people5")
let sliderLine = document.querySelector(".sliderLine")
let sliderLine1 = document.querySelector(".sliderLine1")
let serv1 = document.querySelector(".serv1")
let serv2 = document.querySelector(".serv2")
let serv3 = document.querySelector(".serv3")
let serv4 = document.querySelector(".serv4")
let serv5 = document.querySelector(".serv5")
let serv6 = document.querySelector(".serv6")
let fotterLogo = document.querySelector(".fotterLogo")
let sr = document.querySelector("#serv")
let info = document.querySelector(".info")
let email = document.querySelector(".email")
let servis1 = document.querySelector(".servis1")


themeWhiteBlack.addEventListener("click", function(){
    console.log("klick")
    ourProject.style.backgroundColor = "#D9D9D9"
    project.style.background = "rgb(41, 41, 41)"
    ourPr.style.color = "white"
    getAcquainted.style.color = "black"
    PrInfo.style.color = "black"
    body.style.background = "#D9D9D9"
    reg.src = "./img/Frame 16 (1).svg"
    footer.style.background = "rgb(41, 41, 41)"
    about.style.background = "rgb(41, 41, 41)"
    textAboutAs.style.color = "white"
    aboutAs.style.background = "rgb(41, 41, 41)"
    as.style.color = "black"
    our.style.color = "black"
    button1.style.background = "rgb(41, 41, 41)"
    button2.style.background = "rgb(41, 41, 41)"
    srel.src = "./img/Arrow 6 (2).svg"
    srel1.src = "./img/Arrow 6 (2).svg"
    info.style.color = "white"
    fotterLogo.src = "./img/Group 4.svg"
    sr.style.color = "white"
    email.style.color = "white"
    servis1.style.color = "white"
    people1.style.background = url("./img/Frame 26.svg")

    
})

themeWhiteBlack1.addEventListener("click", function(){
    console.log("klick")
    ourProject.style.backgroundColor = "rgb(41, 41, 41)"
    project.style.background = "#D9D9D9"
    ourPr.style.color = "black"
    getAcquainted.style.color = "white"
    PrInfo.style.color = "white"
    body.style.background = "rgb(41, 41, 41)"
    reg.src = "./img/Frame 16.svg"
    footer.style.background = "#D9D9D9"
    about.style.background = "rgb(41, 41, 41)"
    textAboutAs.style.color = "black"
    aboutAs.style.background = "#D9D9D9"
    as.style.color = "white"
    our.style.color = "white"
    button1.style.background = "#D9D9D9"
    button2.style.background = "#D9D9D9"
    info.style.color = "black"
    fotterLogo.src = "./img/Frame 17.svg"
    sr.style.color = "black"
    srel.src = "./img/Arrow 6.svg"
    srel1.src = "./img/Arrow 6.svg"
})

let offset = 0
let offset1 = 0

button2.addEventListener("click", function(){
    console.log("click")
    offset += 560
    if (offset > 560*3){
        console.log(offset)
        offset = 0
    }
    sliderLine.style.left = - offset + "px"
})

button1.addEventListener("click", function(){
    console.log("click")
    offset -= 560
    if (offset < 0){
        console.log(offset)
        offset = 560*3
    }
    sliderLine.style.left = - offset + "px"
})

button3.addEventListener("click", function(){
    offset1 += 337
    if (offset1 > 1348){
        offset1 = 0
    }
    sliderLine1.style.left = - offset1 + "px"
})

button4.addEventListener("click", function(){
    offset1 -= 337
    if (offset1 < 0){
        offset1 = 1348
    }
    sliderLine1.style.left = - offset1 + "px"
})


