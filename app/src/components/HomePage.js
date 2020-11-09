import React from "react";

// imp  ort Contents from './Contents'
import {usePostsOnPage} from '../custom-hooks'
import { useParams } from "react-router-dom";
console.log("here")
export default function HomePage({pageNo}){
    // const page_no = useParams();
    // console.log(page_no)
    // console.log(`page no. is${page_no}`)
    const[articles, isLoading] = usePostsOnPage(pageNo);
    const renderPage = () =>{
        if(isLoading) return <p>Loading...</p>
        // Figure out how to number the articles
        let no = 30*(pageNo-1)
        
        return articles.map((article)=>(
            <div key={article.url}>
                <div className="articleNo">
                    <h1>{no+=1}</h1>
                </div>
                <div className="articleContent">
                    <a target="__blank" href={article.url}><h2 className = "articleTitle">{article.title}</h2></a>
                    <p className="articleInfo">{article.points} point{article.points>1?'s':''} by {article.user} {article.time_ago} | {article.comments_count} comment{article.comments_count==1?'':'s'}</p>
                </div>
            </div>
        ));
    };
    
    return(
        <div>
            {renderPage()}
        </div>
    )
}