import React, { useState } from 'react'
import data from '../utils/data.json'
import Articles from '../components/articlesComponent';
import { useLocation, useParams } from 'react-router-dom';
import MenArticlesComponent from '../components/menarticles';

const Men = () => {

    const [articles, setArticles] = useState(data)
    
    const location = useLocation()
     
    const category = "men"



   


        //Pass parameter to child composant
    return (
    <div>
        <h1>Articles hommes </h1>

    {/*  <Articles category='men'></Articles> */}

        <Articles category="men"/>

    </div>



  )
}

export default Men