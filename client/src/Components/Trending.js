import { useParams } from "react-router-dom";

const Trending = () => {
    var {id} = useParams();

    return (   
        <div>
            this is trending page
            <h1>{id}</h1>
        </div>
     );
}
 
export default Trending;