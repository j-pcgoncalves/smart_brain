import { useState } from "react";
import { 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from "reactstrap";

const ProfileIcon = ({ onRouteChange, toggleModal }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleSignOut = () => {
        window.sessionStorage.removeItem("token");
        onRouteChange("signout");
    }

    return (
        <div className="pa4 tc">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                >
                    <img 
                        src="https://i.pravatar.cc/300" 
                        className="br-100 ba h3 w3 dib" 
                        alt="Avatar" 
                    />
                </DropdownToggle>
                <DropdownMenu
                    end
                    className="b--transparent shadow-5" 
                    style={{ marginTop: "20px", backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                >
                    <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>
                    <DropdownItem onClick={handleSignOut}>Sign Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default ProfileIcon;