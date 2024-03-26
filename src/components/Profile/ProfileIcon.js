import { useState } from "react";
import { 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from "reactstrap";

const ProfileIcon = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => {
        setDropdownOpen(!dropdownOpen);
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
                        src="https://avatar.iran.liara.run/public/42g" 
                        className="br-100 ba h3 w3 dib" 
                        alt="Avatar" 
                    />
                </DropdownToggle>
                <DropdownMenu 
                    className="b--transparent shadow-5" 
                    style={{ marginTop: "20px", backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                >
                    <DropdownItem>View Profile</DropdownItem>
                    <DropdownItem>Sign Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default ProfileIcon;