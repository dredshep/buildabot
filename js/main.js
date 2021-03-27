$('.t-day').click(() => {
  // Turn to light mode
  $('.logo img').attr("src", "/images/buildabot-logo-light-mode.png")
})

$('.t-night').click(() => {
  // Turn to dark mode
  $('.logo img').attr("src", "/images/buildabot-logo.png")
})
