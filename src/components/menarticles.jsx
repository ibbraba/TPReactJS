import React, { useState } from 'react'
import data from '../utils/data.json'


const MenArticlesComponent = () => {

    const [articles, setArticles] = useState(data)

    const menArticles = articles.filter(article =>{
        return  article.category === "h" || article.category === "mixe"
    })

    console.log(menArticles);

  return (
    <div>
           

    <div className="list">

        {menArticles.map(article => <div key={article.name}>


            <div className="card">
            <div className="card-header" style={{color : 'black'}}> {article.category} 
             </div>
                
                <img src={article.picture[0].pic1} className="card-img-top" alt="Card image cap" />

                <div className="card-body">
                    <h5 className="card-title">{article.name}</h5>
                    <p className="card-text">{article.desc}</p>
                    <a href="#" className="btn btn-primary">{article.price} €</a>
                </div>
            </div>

        </div>
        )}
    </div>
    </div>
  )
}

export default MenArticlesComponent