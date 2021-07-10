
import { NavLink } from "react-router-dom";
import Home from '@material-ui/icons/WeekendRounded';
import Fire from '@material-ui/icons/WhatshotRounded';
import Info from '@material-ui/icons/Info';


const BottomNav = () => {
    return (
        <div className="btmnav">
            <NavLink to="/" exact className="des" activeClassName="selected_navlink">
                <div>
                    <Home />
                </div>
            </NavLink>
            <NavLink to="/trending" exact className="des" activeClassName="selected_navlink">
                <div>
                    <Fire />
                </div>
            </NavLink>
            <NavLink to="/info" exact className="des" activeClassName="selected_navlink">
                <div>
                    <Info />
                </div>
            </NavLink>
        </div>
    );
};

export default BottomNav;