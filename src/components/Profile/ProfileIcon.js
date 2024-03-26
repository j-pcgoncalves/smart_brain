import { useState } from "react";

const ProfileIcon = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="pa4 tc">
            <img 
                src="http://tachyons.io/img/logo.jpg" 
                className="br-100 ba h3 w3 dib" 
                alt="Avatar" 
            />
        </div>
    );
}

export default ProfileIcon;