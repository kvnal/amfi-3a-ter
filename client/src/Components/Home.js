import { useEffect, useState } from "react";
import Creator from "./Parts/Creator";
import HCard from "./Parts/Horizontal_card";
import SearchBar from "./Parts/SearchBar";
import axios from 'axios'
import { useParams } from "react-router-dom";


const Home = ({ search, title, creatorCard }) => {
    // useeffect fetch // check title == Trending

    const [searchTerm, setSearchTerm] = useState("");
    const [data,setData] = useState(null)
    const params = useParams()
    useEffect(()=>{
        setSearchTerm("")
        window.scrollTo(0,0)
        
        if(title.toLowerCase().includes("popular"))
            var CONTENT = 'popular'
        else if (title.toLowerCase().includes("trending"))
            var CONTENT = 'trending'

        else if (title.toLowerCase().includes("all videos"))
            {   
                var CONTENT = `creator/allvideos/${params.id}`
        }

        axios.get(`/api/${CONTENT}`)
        .then(response=>{
            console.log(response.status);
            setData(response.data)
            console.log(response.data);
        })            
    },[title])

    if (!data) return null
    return (
        <div className="home">
            {creatorCard && <Creator/>}
            
            { search &&
                <div  className="search">
                    <SearchBar searchTerm={setSearchTerm} />
                    
                </div>
            }

            <div className="home_title">
                {title}
            </div>


            <div className="home_display">
                {
                data.filter(element=>{
                    if(searchTerm === "")
                        return element
                    return (element.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) || 
                            element.creator.join().toLowerCase().includes(searchTerm.toLowerCase().trim()))
                    
                }).map(element => (
                    // {utID,title,desc,likes,ep}
                    <HCard
                        key={element._id}
                        id={element._id}
                        utID={element.utID}
                        title={element.title}
                        desc={element.description}
                        likes={element.likes}
                        ep={element.episodes.length}
                    />
                )
                )}
            </div>
        </div>
    );
};

export default Home;