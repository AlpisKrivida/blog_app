import React from 'react'
import {MasonryPost} from './'
import {Posts} from '../models/posts.model'

export default function PostMasonry({ posts, columns, tagsOnTop }: Posts) {
  return (
    <section
      className='masonry'
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))` }}
    >
        {console.log(posts)}
      {posts.map((post, index) => 
        <MasonryPost {...{ post, index, tagsOnTop, key: index }} />
      )}
    </section>
  )
}
