export interface Post {
    post: {
      title: string
      date: string
      categories: string[]
      link: string
      image: string
      style: { gridArea: string }
    }
    tagsOnTop: boolean
  }