let icon=document.querySelector('.icon')
let ul=document.querySelector('ul')

icon.addEventListener('click',()=>{
    ul.classList.toggle("showData")
    
    if(ul.className=="showData"){
        document.getElementById("bar").className="fa-solid fa-xmark";
    }
    else{
        document.getElementById("bar").className="fa-solid a-solid  "
    }
})
let shops=document.querySelector("#shops")
let reviews=document.querySelector("#reviews")
let blogs=document.querySelector("#blogs")
let contacts=document.getElementById("contacts")


shops.addEventListener("click",()=>{
  
    shops.style.color='red'
    reviews.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
   
})

reviews.addEventListener("click",()=>{
    reviews.style.color='red'
    shops.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
   
})
blogs.addEventListener("click",()=>{
    blogs.style.color='red'
    reviews.style.color="white"
    shops.style.color="white"
    contacts.style.color="white"
   
})
contacts.addEventListener('click',()=>{
   
    contacts.style.color='red'
    reviews.style.color="white"
    blogs.style.color="white"
    shops.style.color="white"
   
})
let crd=document.querySelectorAll(".crd")
let container=document.querySelector(".container")
let itempages=document.querySelector(".itempages")
let cross=document.querySelector('.cross')
let buypages=document.querySelector('.buypages')
let buy=document.querySelector('#buy')
let back=document.querySelector('#back')
let subbtn=document.querySelector('#subbtn')
let Name=document.querySelector('#name')
// console.log(itempages)

  crd.forEach((val)=>{
    // console.log(val)
    val.addEventListener("click",()=>{
        itempages.style.display="flex"
        container.style.display="none"
       let srcimg= val.firstElementChild.src;
        itempages.firstElementChild.src=srcimg;

        buy.addEventListener('click',()=>{
            buypages.style.display="flex"
            subbtn.addEventListener('click',()=>{
                if(Name.value==""){
                    alert('Fill you details')

                }
                else{
                    alert('Your respons is sumbited sucessfully')
                    buypages.style.display="none"


                }


            })
        })
       
       back.addEventListener('click',()=>{
        itempages.style.display="none"
        container.style.display="block"

        })

       

        


  
        
       

    })

  });
cross.addEventListener('click',()=>{
    buypages.style.display="none"


})

let text=document.querySelector(".text")

let readmorebtn=document.querySelector('.readmorebtn')



readmorebtn.addEventListener('click',()=>{
    text.classList.toggle("showmore")
    if(readmorebtn.innerHTML=="More"){
        readmorebtn.innerHTML="Less"
    }
    else{
        readmorebtn.innerHTML="More"
    }

    
})
let text2=document.querySelector(".text2")

let readmorebtn2=document.querySelector('.readmorebtn2')



readmorebtn2.addEventListener('click',()=>{
    text2.classList.toggle("showmore2")
    if(readmorebtn2.innerHTML=="More"){
        readmorebtn2.innerHTML="Less"
    }
    else{
        readmorebtn2.innerHTML="More"
    }

    
})
let text3=document.querySelector(".text3")


let readmorebtn3=document.querySelector('.readmorebtn3')



readmorebtn3.addEventListener('click',()=>{
    text3.classList.toggle("showmore3")
    if(readmorebtn3.innerHTML=="More"){
        readmorebtn3.innerHTML="Less"
    }
    else{
        readmorebtn3.innerHTML="More"
    }

    
})
let input1=document.querySelector('.input1')
let input2=document.querySelector('.input2')
let cbtn1=document.querySelector('.cbtn1')
cbtn1.addEventListener('click',()=>{
    if(input1.value=="" || input2.value==""){
        alert('Fill your details')
    }
    else{
        alert('WE WILL CONTACT WITH YOU VERY SOON.')
        input1.value="";
        input2.value="";
    }
})




