export interface Options {
  timeout?: number
  method: string
  headers?: Record<string, string>
  data?: Record<string, any>
}

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
};

export class HTTPTransport {
  public get = async (url: string, options: Options) => {
    return await this.request(url, { ...options, method: METHODS.GET }, options.timeout)
  }

  public post = async (url: string, options: Options) => {
    return await this.request(url, { ...options, method: METHODS.POST }, options.timeout)
  }

  public put = async (url: string, options: Options) => {
    return await this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
  }

  public delete = async (url: string, options: Options) => {
    return await this.request(url, { ...options, method: METHODS.DELETE }, options.timeout)
  }

  private queryStringify (data: Record<string, any>) {
    if (typeof data !== 'object') {
      throw new Error('Тело запроса должно быть объектом')
    }

    const keys = Object.keys(data)

    return keys.reduce((result, key, index) => {
      return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`
    }, '?')
  }

  private readonly request = async (url: string, options: Options, timeout = 5000) => {
    const { headers = {}, method, data } = options

    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      const isGet = (method === METHODS.GET)

      xhr.open(
        method,
        isGet && (data != null)
          ? `${url}${this.queryStringify(data)}`
          : url
      )

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.timeout = timeout

      xhr.onload = () => resolve(xhr)
      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject

      if (isGet || (data == null)) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }
    })
  }
}
