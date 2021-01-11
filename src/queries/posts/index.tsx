import { gql } from '@apollo/client';

export const GET_POSTS_BY_CATEGORIES_QUERY = gql`
    query GetBlogPostsByCategories($cat_ids: [Int]) {
        posts: GetPostsByCategories(cat_ids: $cat_ids) {
            id
            title
            description
            updated_at
            author
            image
            categories
        }
    }
`