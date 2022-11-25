const scriptURL = 'https://script.google.com/macros/s/AKfycbwUtK_8DCseg8bjNdEH1B5-Maf7oegyjWPAFVAMWm70jXie6KBzcNB7Qit5bndLwu-n/exec'
  const form = document.forms['contact-us']
  const alertbox = document.getElementById('alertbox')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.reset(),
        alertbox.setAttribute('style', 'display: block') })
      .catch(error => console.error('Error!', error.message))
  })

const close = document.querySelector(".close")

close.addEventListener("click",function(){
  alertbox.setAttribute('style', 'display:none')
})
alertbox.addEventListener("click",function(){
  alertbox.setAttribute('style', 'display:none')
})