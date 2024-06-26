import React, { useEffect, useState } from 'react'
import poster from './assets/poster.jpg'

const Newsboard = ({category}) => {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)

 const handleFetch= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_KEY}`;

setLoading(true)
 const data=await fetch(url);
 const response=await data.json()
 setArticles(response.articles)
 
 setLoading(false)
 }
  useEffect(()=>{
 handleFetch();
  },[category])
  return (
    <>
      <h2 className='text-center heading' >Latest <span className='badge bg-danger'>News</span></h2>
      {
      loading?<p className='load'>Loading...</p>:''
      }
    <div className='news-container'>
      
      {articles.map((news,index)=>{
        const {title,url,urlToImage,description}=news;
        return <div className="card">
  <img src={urlToImage?urlToImage:poster} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0.50)}</h5>
    <p className="card-text">{description?description.slice(0,50):"News is related to our country lorem ipusm zent and ourt llslfl hfllfsljl"
    }</p>
    <a href={url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      })}
    </div>
    </>
  )
}

export default Newsboard
