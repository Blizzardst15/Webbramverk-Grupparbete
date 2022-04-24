//Båmi 

import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import utbList from './utbList.json';
import {useState} from 'react';
import SearchResult from './SearchResult';
import HeaderC from './HeaderC';



    const HeaderB = ()=> {
        const [utbs, setUtbs] = useState([])
        console.log(utbs)

        const utbSearch = (searchText, maxCount) => {
            return utbList.filter(({title, keywords})=> {


            return title.includes(searchText) || keywords.includes(searchText)
        })
            .slice(0, maxCount)
    }

    const search = (event) => {
        const searchResult = utbSearch(event.target.value, 2)
        setUtbs(searchResult)
         // console.log(searchResult)
    }

    return (
            <>
            <HeaderC />
            <Search search={search} />
            <SearchResult searchResult={utbs} />


            </>
    )

    }

    export default HeaderB;