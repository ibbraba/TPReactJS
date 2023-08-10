import React from 'react'
import Articles from '../components/articlesComponent'
import { useParams } from 'react-router-dom'
import SingleArticleComponent from '../components/singleArticle'

const SingleArticle = () => {
  
    
    const params = useParams()
    const { id }  = params
    console.log(id);

  
    return (
    <div>
      <SingleArticleComponent selctedarticle={id} />
    </div>
  )
}

export default SingleArticle