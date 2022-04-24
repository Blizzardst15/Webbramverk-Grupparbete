//Båmi

const Search = ({search}) => {



    return(
        <input style ={{marginLeft:"30px", 
        borderRadius:"4px", fontSize:"15px", 
        width:"50%" }} 
        placeholder= " Search Jesen YH Utbildningar..."
        onChange ={search} 
        
        />
        )
    }


    export default Search;