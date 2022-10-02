interface formData {
  [key: string]: string
}

export const submittingForm = (
  event: Event | undefined,
  form: {
    name: string
    querySelectorAll: (arg0: string) => NodeListOf<any>
    elements: {
      phone: { value: string | undefined }
      second_name: { value: string | undefined }
      first_name: { value: string | undefined }
      login: { value: string | undefined }
      email: { value: string | undefined }
      password: { value: string | undefined }
    }
    reset: () => void
  },
  inputValidity: (arg0: HTMLInputElement) => void,
  closeForm: () => void
): void => {
  // @ts-expect-error
  event.preventDefault()
  // @ts-expect-error
  const arrayInput: NodeListOf<HTMLElementTagNameMap[string]> = form.querySelectorAll('input')
  let isValidate: boolean = true
  const formData: formData = {}
  arrayInput.forEach((element: HTMLInputElement) => {
    inputValidity(element)
    if (!element.checkValidity()) {
      isValidate = false
    }
  })
  if (isValidate) {
    if (form.name === 'auth') {
      Object.assign(formData, {
        login: form.elements.login.value,
        password: form.elements.password.value
      })
    }
    if (form.name === 'register') {
      Object.assign(formData, {
        email: form.elements.email.value,
        login: form.elements.login.value,
        first_name: form.elements.first_name.value,
        second_name: form.elements.second_name.value,
        phone: form.elements.phone.value,
        password: form.elements.password.value
      })
    }
    if (form.name === 'putForm') {
      Object.assign(formData, {
        email: form.elements.email.value,
        login: form.elements.login.value,
        first_name: form.elements.first_name.value,
        second_name: form.elements.second_name.value,
        phone: form.elements.phone.value
      })
    }
    if (form.name === 'passForm') {
      Object.assign(formData, {
        password: form.elements.password.value
      })
    }
    console.log(formData)
    form.reset()
    closeForm()
  } else {
    console.log('false')
  }
}
