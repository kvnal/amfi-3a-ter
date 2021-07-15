import '../../css/creator.css';
import Instagram from "@material-ui/icons/Instagram";
import Youtube from "@material-ui/icons/YouTube";
import Share from "@material-ui/icons/ShareRounded";
import Verify from "@material-ui/icons/CheckCircleRounded";
import toast , {Toaster} from 'react-hot-toast';

const data = {
    id: "",
    name: "creator name",
    pass: " ",
    youtube: "www.google.com",
    instagram: "www.google.com",
    youtube_channel_id: "this is channel id",
    about: "hello this is my account about how are you all??"
};
const Creator = () => {
    // use effect fetch details
    const handleShare = ()=>{
        const url = window.location.href
        var inp = document.body.appendChild(document.createElement("input"))
        inp.value = url
        inp.focus()
        inp.select()
        inp.setSelectionRange(0,1000)
        document.execCommand('copy')
        inp.parentNode.removeChild(inp)
        window.scrollTo(0,0)
        return toast.success("Copied")

    }
    return (
        <div className="creator">
            <div className="profilepic" >
                {/* <Verify /> */}
            </div>
            <div className="creatorextra">


                <span className="name">@{data.name} <Verify/> </span>
                {/* <span className="verify"> Verified account</span> */}
                <span className="about">{data.about}</span>
            </div>

            <div className="socials">
                <a href={data.instagram}>
                    <Instagram />
                </a>
                <a href={data.instagram}>
                <Youtube />
                </a>
                <a onClick={handleShare}>
                <Share />
                </a>

            </div>
            <a className="subs" href={""}>Subscribe</a>
            <Toaster 
            position="bottom-center"
            reverseOrder={false}
            toastOptions={{
                success:{
                    duration: 1500
                }}
            }
            />
        </div>
    );
};

export default Creator;