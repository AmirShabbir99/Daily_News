import React, { useEffect, useState } from 'react';
import Card from './Card';
import NewsLogo from './images/news.png';
import './News.css';
import { Link } from 'react-router-dom';

const News = () => {

    const api_key = '7157d03845cd40379e72ff19d356b499';
    const url = 'https://newsapi.org/v2/everything?q=';
   
    const [Article, setArticle] = useState([]);
    const [query, setQuery] = useState('pakistan'); // State to handle search query
    const [searchTerm, setSearchTerm] = useState(''); // State to handle input field
   
    useEffect(() => {
        fetchNews(query);
    }, [query]);

    async function fetchNews(query) {
        const res = await fetch(`${url}${query}&apiKey=${api_key}`);
        let data = await res.json();
        const filteredArticles = data.articles.filter((element) => element.urlToImage);
        setArticle(filteredArticles);
    }

    function handleCategoryClick(category) {
        setQuery(category);
    }

    function handleInputChange(e) {
        setSearchTerm(e.target.value);
    }

    function handleSearch() {
        if (searchTerm) {
            setQuery(searchTerm);
        }
    }

    return (
        <>
            <div className="News">
                <Link to='/' className="news-logo">
                    <img  className="news-img" src={NewsLogo} alt="" />
                </Link>
                <div className="news-nav">
                    <div className={query==='psl' ? 'active': ''} onClick={() =>(handleCategoryClick('psl'))}>PSL</div>
                    <div className={query==='finance' ? 'active': ''} onClick={() => handleCategoryClick('finance')}>Finance</div>
                    <div className={query==='politics' ? 'active': ''} onClick={() => handleCategoryClick('politics')}>Politics</div>
                    <div className={query==='technalogy' ? 'active': ''} onClick={() => handleCategoryClick('technology')}>Technology</div>
                </div>
                <div className="news-search">
                    <input 
                        type="text" 
                        className='news-input' 
                        value={searchTerm} 
                        onChange={handleInputChange} 
                        placeholder='Search news' 
                    />
                    <button className='news-btn' onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="Api">
                {Article.map((item, index) => {
                    return (
                        <Card 
                            key={index}
                            img={item.urlToImage}
                            title={item.title}
                            detail={item.description}
                            url={item.url}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default News;
