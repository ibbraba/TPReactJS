import React, { useState } from 'react'
import data from '../utils/data.json'
import { Link, useLocation } from 'react-router-dom'


const Articles = (props) => {

    const [articles, setArticles] = useState(data)

    const category = props.category

    // GET ALL, MEN ARTICLES OR WOMEN ARTICLES DEPENDING ON STATE
    
    const menArticles = articles.filter(article =>{
        return  article.category === "h" || article.category === "mixe"
    })

    const womenArticles = articles.filter(article =>{
        return  article.category === "f" || article.category === "mixe"
    })

    let selectedCategory = []

    if(category == "men"){
        selectedCategory = menArticles
    }else if(category ==="women"){
        selectedCategory = womenArticles
    }else{
        selectedCategory = articles
    }

    /*
    const getMenArticles = () => { 
        
        
    }

    const getWomenArticles = () => {

        const womenArticles = articles.filter(article =>{
            return article.category === "f"
        })

        return womenArticles
    }
*/

      /*  
        
        const filtered = getArticleByCategory(category)
 
        setArticles(filtered)
        console.log(articles);
    
        */



    return (

        


        <div>
           

            <div className="list">

                {selectedCategory.map(article => <div key={article.name}>


                    <div className="card">
                    <div className="card-header" style={{color : 'black'}}> {article.category} 
                     </div>
                        
                        <img src={article.picture[0].pic1} className="card-img-top" alt="Card image cap" />

                        <div className="card-body">
                            <h5 className="card-title">{article.name}</h5>
                            <p className="card-text">{article.desc}</p>
                            <Link to="article/}">{article.price} €</a>
                        </div>
                    </div>

                </div>
                )}
            </div>
        </div>
    )

}



export default Articles