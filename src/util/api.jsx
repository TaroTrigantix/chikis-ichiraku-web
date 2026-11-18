export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export const compileUrl = (path, queryParameter = {}) => {
    const search = new URLSearchParams(queryParameter).toString()
    return BACKEND_URL + path + (search ? '?' + search : '')
}

const request = async (method, url, body, signal) => {
    const response = await fetch(url, {
        method,
        signal,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body === undefined ? undefined : JSON.stringify(body),
        credentials: 'include',
    })
    const payload = await response.json()
    if (!response.ok) {
        throw payload
    }
    return payload
}

export const get = (path, queryParameter, signal) => request('GET', compileUrl(path, queryParameter), undefined, signal)
export const post = (path, body, signal) => request('POST', compileUrl(path), body, signal)
