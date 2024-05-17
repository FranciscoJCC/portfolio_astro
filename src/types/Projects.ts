
export interface Projects {
    id: string,
    title: string,
    slug: string,
    description: string,
    photo: string,
    urlProject?: string,
    urlGithub?: string,
    tags: string[],
    main: boolean
}