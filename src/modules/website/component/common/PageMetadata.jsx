import {useEffect} from 'react'

const PageMetadata = ({title, description}) => {
    useEffect(() => {
        document.title = title

        const descriptionElement = document.querySelector('meta[name="description"]')
        if (descriptionElement) {
            descriptionElement.setAttribute('content', description)
        }
    }, [description, title])

    return null
}

export default PageMetadata
