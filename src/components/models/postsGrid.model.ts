export interface PostsGrid {
    posts: {
      title: string
      date: string
      categories: string[]
      link: string
      image: string
      style: { gridArea: string; }
      author?: string
      description?: string
    }[]
  }