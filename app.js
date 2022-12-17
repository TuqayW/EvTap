function generateRandomNumber(i) {
    return Math.floor(Math.random() * i) + 1;
}
let box = document.querySelector('.box1')

box.addEventListener('click',()=>{
    let a = generateRandomNumber(10)
    if(a == 1){
        gsap.fromTo('.box1',{opacity:0, y:0, x:0, scale:0.5},{opacity:1, y:250, x:300,scale:1})
    }
    if(a == 2){
        gsap.fromTo('.box1',{opacity:0, y:0, x:0, scale:0.5},{opacity:1, y:-100, x:-500,scale:1})
    }
    if(a == 3){
        gsap.fromTo('.box1',{opacity:0, y:0, x:0, scale:0.5},{opacity:1, y:320, x:-600,scale:1})
    }
    if(a == 4){
        gsap.fromTo('.box1',{opacity:0, y:0, x:0, scale:0.5},{opacity:1, y:-100, x:700,scale:1})
    }
    if(a == 5){
        gsap.fromTo('.box1',{opacity:0, y:0, x:0, scale:0.5},{opacity:1, y:-200, x:300,scale:1})
    }
    if(a == 6){
        gsap.fromTo('.box1',{opacity:0, y:0, x:0, scale:0.5},{opacity:1, y:100, x:100,scale:1})
    }
    if(a == 7){
        gsap.fromTo('.box1',{opacity:0, y:0, x:0, scale:0.5},{opacity:1, y:200, x:-500,scale:1})
    }
    if(a == 8){
        gsap.fromTo('.box1',{opacity:0, y:0, x:0, scale:0.5},{opacity:1, y:200, x:-400,scale:1})
    }
    if(a == 9){
        gsap.fromTo('.box1',{opacity:0, y:0, x:0, scale:0.5},{opacity:1, y:350, x:500,scale:1})
    }
    if(a == 10){
        gsap.fromTo('.box1',{opacity:0, y:0, x:0, scale:0.5},{opacity:1, y:-100, x:-100,scale:1})
    }
    console.log(a)
})

let main = document.querySelector('.shaping')
let bald = document.querySelector('.bald')
let kvadrat = document.querySelector('.box')

bald.addEventListener('click',()=>{
    gsap.fromTo('.shaping',{opacity:1, width:"200px" ,borderRadius:"0%" ,scale:1},{opacity:1, width:"200px" ,borderRadius:"50%" ,scale:1})
})
kvadrat.addEventListener('click',()=>{
    gsap.fromTo('.shaping',{opacity:1,borderRadius:"0%", width:"200px" ,scale:1},{opacity:1,borderRadius:"0%", width:"300px" ,scale:1})
})

let wheel = document.querySelector('.wheel')
let btns = document.querySelector('.btn-sur')
btns.addEventListener('click',()=>{
    gsap.fromTo('.wheel',{opacity:1,rotation:'0deg',scale:1},{opacity:1,rotation:'1440deg' ,scale:1})
    setTimeout(()=>{
        gsap.fromTo('.wheel',{opacity:1,rotation:'360deg',x:0,scale:1},{opacity:1,rotation:'0deg',x:1200 ,scale:1})
    },500)
})