const SearchBar = ({searchTerm}) => {
    
    return ( 
        <div className="searchbar">
            <input type="text"  placeholder="Search" className="searchinput"
            onChange={(e)=>searchTerm(e.target.value)}
            />
        </div>
     );
}
 
export default SearchBar;