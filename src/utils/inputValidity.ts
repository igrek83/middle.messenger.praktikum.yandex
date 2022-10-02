export const inputValidity = (element: HTMLInputElement): void => {
  const booleanValidate: boolean = element.checkValidity()
  const name: string = element.name
  const errorElement: Element = element.nextElementSibling!

  if (booleanValidate) {
    errorElement.textContent = ''
  } else {
    switch (name) {
      case 'email': {
        errorElement.textContent = 'Неверный формат email'
        break
      }
      case 'login': {
        errorElement.textContent = 'Неверный формат логина'
        break
      }
      case 'phone': {
        errorElement.textContent = 'Неверный формат телефона'
        break
      }
      case 'password': {
        errorElement.textContent = 'Неверный формат пароля'
        break
      }
      case 'first_name': {
        errorElement.textContent = 'неверный формат имени'
        break
      }
      case 'second_name': {
        errorElement.textContent = 'неверный формат фамилии'
        break
      }
    }
  }
}
