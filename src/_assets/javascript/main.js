const header = document.getElementById('js-header')
const menuToggle = document.getElementById('js-nav-toggle')
const nav = document.getElementById('js-nav-menu')
const navMenu = document.getElementById('js-menu')
const headerClasses = ['bg-gray-900', 'bg-header', 'h-full']
const navClasses = ['flex-wrap']
const navMenuClasses = [
  'hidden',
  'flex',
  'flex-col',
  'items-center',
  'space-between',
  'w-full',
  'pt-4',
  'oh-4',
]
// const menuOpen = false
const toggleCSSclasses = (el, ...cls) => cls.map((cl) => el.classList.toggle(cl))

function adjustHeader() {
  const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop

  if (scrollHeight > 90) {
    document.body.classList.add('shrink')
  } else {
    document.body.classList.remove('shrink')
  }
}

function toggleMenu() {
  document.body.classList.toggle('reveal')
}

// toggleCSSclasses(header, ...headerClasses)
// toggleCSSclasses(nav, ...navClasses)
// toggleCSSclasses(navMenu, ...navMenuClasses)

menuToggle.addEventListener('click', toggleMenu)

document.addEventListener('scroll', adjustHeader, { capture: false, passive: true })
