import Share from "@material-ui/icons/ShareRounded";
import toast , {Toaster} from 'react-hot-toast';

const ShareLink = () => {
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
        return toast.success("Link Copied")

    }
    return (<>
              <span onClick={handleShare}>
                    <Share />
                    <Toaster 
            position="bottom-center"
            reverseOrder={false}
            toastOptions={{
                success:{
                    duration: 1500
                }}
            }
            />
                  </span>
    </>);
};

export default ShareLink;