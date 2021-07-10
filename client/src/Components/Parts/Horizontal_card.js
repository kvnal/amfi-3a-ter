import '../../css/hcard.css'
import Like from '@material-ui/icons/FavoriteRounded'
const HCard = ({utID,title,desc,likes,ep}) => {
    const utID_URL = `https://img.youtube.com/vi/${utID}/mqdefault.jpg`
    return (  
        <div className="hcard">
            <div className="img" style={{background:`url(${utID_URL}) center no-repeat`,backgroundSize:'cover'}} >
                {/* <img src={utID_URL} alt="" /> */}
            </div>

            <div className="hcarddetails">
                <div className="htitle">
                    {title.length > 30? title.slice(0,24)+'...':title}
                </div>
                <div className="hdesc">
                    {desc.length > 60? desc.slice(0,60)+'...':desc}
                </div>
                <div className="hextras">
                    <div className="like">
                        {likes}
                        <Like/>
                    </div>
                    <div className="ep">
                        {`Episodes ${ep}`}
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default HCard;