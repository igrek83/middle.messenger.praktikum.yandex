export const closeForm = (element: HTMLElement, form: HTMLFormElement): void => {
  element.classList.remove('form_is_opened')
  element.querySelectorAll('.input-error').forEach((item) => {
    item.textContent = ''
  })
  form.reset()
  setTimeout(() => {
    element.classList.remove('form_theme_opacity')
  }, 1)
}
