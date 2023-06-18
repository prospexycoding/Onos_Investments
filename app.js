
window.onload = (()=>{

    setTimeout(()=>{
        document.querySelector('.welcome-page').classList.add('wel')
    },3000)

})




let avatar = document.querySelector('.avatar')
let file = document.querySelector('.file')
let uploaded_img = ''


file.addEventListener('change',(event)=>{
    event.preventDefault()

    let chosenfile = file.files[0]

    if(chosenfile){
        let reader = new FileReader()

        reader.addEventListener('load',(event)=>{
            event.preventDefault()

            avatar.src = reader.result

            uploaded_img = reader.result
        })

        reader.readAsDataURL(chosenfile)
    }

})


let form = document.querySelector('form')
let front_page = document.querySelector('.front-page')
let second_page = document.querySelector('.second-page')








form.addEventListener('submit',(event)=>{
    event.preventDefault()

    let username = document.querySelector('.username').value
    let email = document.querySelector('.email').value
    let phone = document.querySelector('.phone').value
    let password = document.querySelector('.password').value

    document.querySelector('.name').innerHTML = username

    document.querySelector('.profile').src = uploaded_img

    document.querySelector('.picture').src = uploaded_img

    document.querySelector('.my-name').innerHTML = username

    if(username.length < 1){
        document.querySelector('.username').classList.add('error')
    
        setTimeout(()=>{
           document.querySelector('.username').classList.remove('error')
    
        },1000)
    }else if(email.length < 1){
        document.querySelector('.email').classList.add('error')

        setTimeout(()=>{
            document.querySelector('.email').classList.remove('error')
        },1000)
    }else if(phone.length < 1){
        document.querySelector('.phone').classList.add('error')

        setTimeout(()=>{
            document.querySelector('.phone').classList.remove('error')
        },1000);
    }else if(password.length < 1){
        document.querySelector('.password').classList.add('error')

        setTimeout(() => {
            document.querySelector('.password').classList.remove('error')
        }, 1000);
    }else{
        front_page.style.display = "none"
        second_page.style.display = "flex" 

    }
       
})

let main_page = document.querySelector('.main-page')

document.querySelector('.submit-btn').addEventListener('click',()=>{

    let input_btn = document.querySelector('.input-btn')
    let password = document.querySelector('.password')


    if(input_btn.value !== (password.value)){
        document.querySelector('.input-btn').classList.add('error')

        setTimeout(()=>{
            document.querySelector('.input-btn').classList.remove('error')
        },1000)
    }else{
        document.querySelector('.second-page').style.display = "none"
        document.querySelector('.main-page').style.display = "flex"
    }

    
})

document.querySelector('.close-btn').addEventListener('click',()=>{
    front_page.style.display = "flex"
    second_page.style.display = "none" 
})


document.querySelector('.top-up').addEventListener('click',()=>{
    document.querySelector('.main-page').style.display = "none"
    document.querySelector('#deposit-page').style.display = " flex"

})

document.querySelector('.add-money-close').addEventListener('click',()=>{
    document.querySelector('.main-page').style.display = "flex"
    document.querySelector('#deposit-page').style.display = "none"
})

document.querySelector('.cash-deposit-btn-1').addEventListener('click',()=>{
    document.querySelector('#deposit-page').style.display = "none"
    document.querySelector('.transfer-page').style.display = "flex"

})

document.querySelector('.account-name-close-btn').addEventListener('click',()=>{
    document.querySelector('#deposit-page').style.display = "flex"
    document.querySelector('.transfer-page').style.display = "none"
})

document.querySelector('.cash-deposit-btn-2').addEventListener('click',()=>{
    document.querySelector('#deposit-page').style.display = "none"
    document.querySelector('.put-money').style.display = "flex"

    document.querySelector('.enter-amount').value = ''



})

document.querySelector('.deposit-close-btn').addEventListener('click',()=>{
    document.querySelector('#deposit-page').style.display = "flex"
    document.querySelector('.put-money').style.display = "none"
})



document.querySelector('.deposit-btn').addEventListener('click',()=>{

    let amount = document.querySelector('.amount')
    let enter_amount = document.querySelector('.enter-amount').value
    amount.innerHTML = enter_amount



    if(enter_amount === ''){
        document.querySelector('.enter-amount').classList.add('error')

        setTimeout(() => {
            document.querySelector('.enter-amount').classList.remove('error')
            
        }, 1000);
    }else{
        document.querySelector('.put-money').style.display = "none"
        document.querySelector('.main-page').style.display = " flex"
    }

    

})


