const header = document.getElementsByTagName('header')

document.addEventListener(
  'scroll',
  (evt) => {
    console.log(evt)
    console.log(document.body.scrollTop)
    console.log(document.scrollingElement.scrollTop || document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 90) {
      document.body.classList.add('shrink')
    } else {
      document.body.classList.remove('shrink')
    }
  },
  { capture: false, passive: true }
)
