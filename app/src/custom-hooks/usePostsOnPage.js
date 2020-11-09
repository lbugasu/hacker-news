import {useEffect, useState} from 'react'

//Access the api here
/*
const getPostsOnPage = (pg_no)=>{
    const url = `http://localhost:2000/news?page=${pg_no}`
    fetch(url)
        .then(response => response.json())
        
}
*/

export default function usePostsOnPage(page_no){
    // const promise = getPostsOnPage(page_no);
    const url = `http://localhost:2000/news?page=${page_no}`
    const promise = fetch(url)
        .then(response => response.json())
    const [posts, setPosts] = useState(null);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        promise.then((result) => {
            const SortedResults = result.sort(function (a, b) {
                console.log(a)
                const date = b.time_ago.split(" ")
                let hours = 0;
                if(date[1].includes('day')){
                    hours=24;
                    if(date[0]!=="a"){
                        hours*=Number(date[0])
                    }
                }
                else{
                    if(date[0]==="an"){
                        hours = 1;
                    }
                    else
                        hours = Number(date[0])
                }
                const date2 = a.time_ago.split(" ")
                let hours2 = 0;
                if(date2[1].includes('day')){
                    hours2=24;
                    if(date2[0]!=="a"){
                        hours2*=Number(date2[0])
                    }
                }
                else{
                    if(date2[0]==="an"){
                        hours2 = 1;
                    }
                    else
                        hours2 = Number(date2[0])
                }
                console.log(hours +" "+hours2)
                if(hours!==hours2)
                    return (hours - hours2);
                else{
                    return (b.comments_count-a.comments_count)
                }
              });
            setPosts(SortedResults)
            setLoading(false)
        });
    },[page_no]);

    return [posts, isLoading]
}