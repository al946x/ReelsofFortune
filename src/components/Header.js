import React from 'react';
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import {BsSuitHeart} from 'react-icons/bs';
import {RiContactsBook2Line} from 'react-icons/ri';
import Search from '../components/Search';




function Header () { 
    const [movies, setMovies] = useState();

    // const [searchMovie, setSearchMovie] = useState('');
    const [randomMovie, setRandomMovie] = useState({});

    const getMovieRequest = async () => {
        
        const movieArray = ['movie', 'you', 'about', 'all', 'kill', 'horror', 'night', 'run', 'take', 'drive', 'animal', 'brain', 'mystery', 'dead', 'lost', 'park', 'swim', 'claim', 'plane', 'train', 'space', 'quest', 'fly', 'catch', 'hide', 'pride', 'children', 'kids', 'get', 'out', 'search', 'car', 'spy', 'lake', 'log', 'tree', 'grass', 'home', 'total', 'text', 'phone', 'react', 'island', 'ocean', 'sea', 'find', 'web', 'day', 'hero', 'walk', 'drink', 'galaxy', 'love', 'name', 'murder', 'escape', 'common', 'fatal', 'cat', 'dog', 'clock', 'bird', 'book', 'dream', 'photo', 'online', 'best', 'money', 'heist', 'year', 'date', 'funny', 'comic', 'outside', 'screen', 'water', 'party', 'fast', 'deep', 'race', 'spot', 'spray', 'down', 'up', 'dance'];
        
        const randomSelector = movieArray[Math.floor(Math.random() * movieArray.length)];

        const url = `http://www.omdbapi.com/?s=${randomSelector}&apikey=91ef3dfe`;

        const response = await fetch(url);
        const responseJson = await response.json();



        setMovies(responseJson);
        console.log(responseJson);

        const newRandomMovie =
        responseJson.Search[Math.floor(Math.random() * responseJson.Search.length)];

  

        setRandomMovie(newRandomMovie);
        console.log(randomMovie);
    };

    useEffect(() => {
        getMovieRequest();
    }, []);


    return (
        <header>
            <div className='header-container'>

            <h1>Reels of Fortune</h1> 

            <Search movieRequest={getMovieRequest} />
   
            <nav className= 'nav-bar'>
                <NavLink to="/"><AiOutlineHome/></NavLink>
                <NavLink to="/favourites"><BsSuitHeart/></NavLink>
                <NavLink to="/contact"><RiContactsBook2Line/></NavLink>
            </nav>
            </div>
        </header>
    );
}


export default Header;