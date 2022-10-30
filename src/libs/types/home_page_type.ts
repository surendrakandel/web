export interface HomePageType   {
    title: string
    description: string
    keywords: string
    canonical: string
    robots: string
    "og:title": string
    "og:description": string
    "og:url": string
    "og:site_name": string
    "og:type": string
    "og:image": string
    "og:image:secure_url": string
    "og:image:width": string
    "og:image:height": string
    "og:image:type": string
    "og:image:alt": string
    "twitter:card": string
    "twitter:title": string
    "twitter:description": string
    "twitter:image": string
    "twitter:image:alt": string
    "twitter:site": string
    "twitter:creator": string
    "twitter:domain": string
    "twitter:url": string
    introheading: string
    intro: string
    demo: Demo
    "get-started": GetStarted
  }
  
  export interface Demo   {
    heading: string
    subheading: string
    button: string
    url: string
    alt: string
  }
  
  export interface GetStarted   {
    heading: string
    subheading: string
    button: string
  }
  