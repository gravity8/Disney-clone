/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({genreId, index:index_}) {
    const [movieList, setMovieList] = useState([])
    useEffect(()=>{
        getMovieByGenreId();

    },[])

    const getMovieByGenreId = () =>{
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            setMovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

    const elementRef = useRef(null)
  return (
    
    <div className='relative'>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[70px]':'mt-[150px]'} `}/>
        <div ref={elementRef} className='flex overflow-x-auto gap-8 scroll-smooth scrollbar-hide
        mt-5 py-5 px-3 '>
        {movieList.map((item,index)=>(
            <>
                {index_%3==0? <HrMovieCard movie={item} />:<MovieCard movie={item}/>}
            </>
                
        ))}
        </div> 
        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[70px]':'mt-[150px]'}`}/> 
    </div>
    
  )
}

export default MovieList
