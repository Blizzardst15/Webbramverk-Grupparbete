//Båmi 

const SearchResult = ({searchResult}) => {

    if(!searchResult || !searchResult.length) {
        return (
            <div>
                <h4 style={{marginLeft:"70px"}}>
                    No Search Utbildningar Results.
                </h4>
            </div>
        )
    }
    return (
        <div>
            <ul>
                {searchResult.map((utb)=>{
                    return (
                        <li>
                            {utb.title} - {utb.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default SearchResult;