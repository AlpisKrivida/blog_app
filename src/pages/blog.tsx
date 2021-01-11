import React from 'react'
import { PostGrid } from '../components/common'
import withTitle from '../components/common/with-title'
import {GET_POSTS_BY_CATEGORIES_QUERY} from '../queries/posts'
import { useQuery} from '@apollo/client';

const catIds = [4]

export default function blog() {
  const { data, error } = useQuery(GET_POSTS_BY_CATEGORIES_QUERY, {
    variables: {
      cat_ids: catIds,
    },
  })

  if(error) {
    return 'Something went wrong'
  }

  return withTitle('Blog', data?.posts ? <PostGrid posts={data.posts}/> : 'Loading')
}