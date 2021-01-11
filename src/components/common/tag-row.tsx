import React from 'react'
import { categoryColors } from './styles'
import { Categories } from '../models/categories.model'

export  default function TagRow ({tags}:Categories) {
    return (
        <div className='tags-container'>
        {tags.map((tag:any, ind:number) => (
          <span
            key={ind}
            className='tag'
            style={{ backgroundColor: categoryColors[tag] }}
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>
    )
}