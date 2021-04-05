$('.t-day').click(() => {
  // Turn to light mode
  $('.logo img').attr("src", "/images/buildabot-logo-light-mode.png")
})

$('.t-night').click(() => {
  // Turn to dark mode
  $('.logo img').attr("src", "/images/buildabot-logo.png")
})

const theme = localStorage.getItem('nk_theme')
let display = theme || "night"

switch (display) {
  case "night":
    $('.logo img').attr('src', "/images/buildabot-logo.png")
    break;
  case "day":
    $('.logo img').attr('src', "/images/buildabot-logo-light-mode.png")
    break;
}

$('#news2 .button').click(() => {
  // User clicked "subscribe"
  const email = $('#news2 input').val()
  console.log(email)
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
  }
  fetch('https://emails.dred.sh/api', opts)
    .then(console.log)
    .catch(console.error)
})