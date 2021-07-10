import HCard from "./Parts/Horizontal_card";

const Home = ({title}) => {
    // useeffect fetch
    const data= [
        {
            title : "hello this is the title 1",
            utID: "rQs6HjTw0VE",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            likes : 20,
            episodes: 5
        },
        {
            title : "Title 2hello this is the title 1",
            utID: "rQs6HjTw0VE",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            likes : 2,
            episodes: 1
        },
        {
            title : "title 3 hello this is the title 1",
            utID: "rQs6HjTw0VE",
            description : "m id est laborum.",
            likes : 100,
            episodes: 10
        }
    ]

    return (  
        <div className="home">

        <div className="home_title">
            {title}
        </div>
        <div className="home_display">
            {data.map(element =>(
                // {utID,title,desc,likes,ep}
                <HCard 
                    utID={element.utID}
                    title= {element.title}
                    desc= {element.description}
                    likes={element.likes}
                    ep={element.episodes}
                />
            )
            )}
        </div>
        </div>
    );
}
 
export default Home;