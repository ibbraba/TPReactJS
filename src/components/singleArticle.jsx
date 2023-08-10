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

        <div className='single-article'>
            <h1> {selectedArticle.name} </h1>
            <p>
                {selectedArticle.picture[0].length}
            </p>

            <div className='product-infos'>
                <div className="card product-card text-white bg-dark mb-3" >
                  
                    <div className="card-body">
                    <div className="card-header">{selectedArticle.brand}</div>

                        <h5 className="card-title"></h5>
                        <p className="card-text">{selectedArticle.content}</p>

                        <p>Dispoinibilié : {selectedArticle.stock> 0 ? "En stock " : "Rupture de stock"}</p>

                        <p>
                        {selectedArticle.size.map( (taille) => <span className='span-size' key={taille}> {taille} </span>)}
                        </p>

                        <button className='btn btn-light' style={{marginTop: 30}}>  {selectedArticle.price} € </button>
                     
                    </div>
                </div>
            </div>

            


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