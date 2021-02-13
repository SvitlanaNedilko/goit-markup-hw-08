;(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]')
  const menuCloseRef = document.querySelector('[data-menu-close]')
  const mobileMenuRef = document.querySelector('[data-menu]')

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open')
  })

  menuCloseRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open')
  })
})()
