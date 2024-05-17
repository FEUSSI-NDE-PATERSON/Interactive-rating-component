let valueChose 
let valueToHoldHtml 
let displayHtml = document.querySelector('#changeResult')
let buttons = document.querySelectorAll('.buttons')
let submit = document.querySelector('#submitButton')
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        submit.addEventListener('click',()=>{
        valueChose = button.textContent
        displayHtml.innerHTML = ''
          

        valueToHoldHtml = `
        <div class="flex flex-col justify-center items-center w-[230px]  p-5 rounded-lg">
           <img src="images/illustration-thank-you.svg" class="w-[100px] h-fit" />
           <p class="p-3 rounded-full text-orange-400 my-3">You selected ${valueChose} out of 5</p>
           <p class="text-white font-bold text-xl my-3">Thank you!</p>
           <p class="text-[#121417]">We appreciate you taking the time to give a rating if you ever need more support.don't hesilate to get in touch</p>
        </div>
        
        
        `
        displayHtml.innerHTML = valueToHoldHtml
        })
    })
})
