import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'


const PixabayState = (props) => {
    const [imageData, setImageData] = useState([])
    const [query, setQuery] = useState('london')

    const api_key = "47951311-4063dd1722b5b5dc69b8fb601";


    useEffect(() => {
const fetchData = async()=>{
    const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&per_page=20`);
    const data = await api.json();
    // console.log(data.hits)
    setImageData(data.hits);
}
fetchData();
    }, [query]);

    const fetchImageByCategory = async(cat) =>{
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&per_page=50`);
        const data = await api.json();
        // console.log(data.hits)
        setImageData(data.hits);
    }

    return (
        <PixabayContext.Provider value={{
            imageData,
            fetchImageByCategory,
            setQuery,
        }}>{props.children}</PixabayContext.Provider>
    )
}

export default PixabayState