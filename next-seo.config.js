const title = 'Ganning Xu - Developer, Student, Aviation Enthusiast.'
const description =
    'Personal website for Ganning Xu, a high school junior at the North Carolina School of Science and Mathematics.'

const SEO = {
    title,
    description,
    canonical: 'https://www.ganning.me',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.ganning.me',
        title,
        description,
        images: [
            {
                url: 'https://benjamincarlson.io/images/favicon.png',
                alt: title
            }
        ]
    }
}

export default SEO