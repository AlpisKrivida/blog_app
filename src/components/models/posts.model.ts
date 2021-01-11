export interface Posts {
    posts: {
      title: string
      date: string
      categories: string[]
      link: string
      image: string
      style: { gridArea: string; }
    }[]
    columns: number
    tagsOnTop: boolean
  }