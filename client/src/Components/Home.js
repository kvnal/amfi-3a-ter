import { useState } from "react";
import HCard from "./Parts/Horizontal_card";
import SearchBar from "./Parts/SearchBar";

const data = [
    {
        title: "hello this is the title 1",
        utID: "rQs6HjTw0VE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 20,
        episodes: ["rQs6HjTw0VE","",""],
        creator: ['one', 'two']
    },
    {
        title: "world sok3",
        utID: "rQs6HjTw0VE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 2,
        episodes: ["rQs6HjTw0VE","",""],
        creator: ['one', 'two']
    },
    {
        title: "title 3 hello this is the title 1",
        utID: "rQs6HjTw0VE",
        description: "loreum ahdfoeowanf ",
        likes: 100,
        episodes: ["rQs6HjTw0VE","",""],
        creator: ['one', 'two']
    },
    {
        title: "Title 2hello this is the title 1",
        utID: "rQs6HjTw0VE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 2,
        episodes: ["rQs6HjTw0VE","",""],
        creator: ['one', 'two']
    },
];
const Home = ({ search, title }) => {
    // useeffect fetch

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="home">

            { search &&
                <div className="search">
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
                    return (element.title.toLowerCase().includes(searchTerm.toLowerCase().trim()))
                    
                }).map(element => (
                    // {utID,title,desc,likes,ep}
                    <HCard
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