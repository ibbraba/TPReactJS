import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../utils/data.json'
const SingleArticleComponent = (props) => {

    const [articles, setArticles] = useState(data)



    articles.forEach(article => {

        article.id = articles.indexOf(article)

    });

    const selectedArticle = articles.find((article) => article.id == props.articleid)

    const numberPictures = Object.keys(selectedArticle.picture[0]).length;


    return (

        <div>
            <h1> {selectedArticle.name} </h1>
            <p>
                {selectedArticle.picture[0].length}
            </p>

            <div>
                <img src={selectedArticle.picture[0].pic1} alt="First slide" />
            </div>

            <div>
                <img src={selectedArticle.picture[0].pic2} alt="First slide" />
            </div>


            <div>
                <img src={selectedArticle.picture[0].pic3} alt="First slide" />
            </div>

        </div>
    )
}

export default SingleArticleComponent