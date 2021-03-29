switch (localStorage.getItem('nk_theme')) {
  case "night":
    // User has night mode cookies
    $('.morelogo img').attr("src", "/images/buildabot-logo.png")
    break;
  case "day":
    // User has day mode cookies
    $('.morelogo img').attr("src", "/images/buildabot-logo-light-mode.png")
    break;
  default:
    // User has no theme cookies
    $('.morelogo img').attr("src", "/images/buildabot-logo-light-mode.png")      
}

$('.t-day').click(() => {
  // Turn to light mode
  $('.morelogo img').attr("src", "/images/buildabot-logo-light-mode.png")
})

$('.t-night').click(() => {
  // Turn to dark mode
  $('.morelogo img').attr("src", "/images/buildabot-logo.png")
})