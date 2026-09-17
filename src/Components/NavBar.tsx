
import { BsCoin } from 'react-icons/bs';
import Logo from '../../Resource/logo.png'

const NavBar = ({coin}:{coin: number}) => {
    return (
        <div className="px-3 sm:px-4">
            <div className="
                container mx-auto
                flex items-center justify-between
                gap-2 sm:gap-4
                py-3
            ">

                {/* Logo */}
                <div className="nav-logo shrink-0">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-10 sm:w-11 md:w-12"
                    />
                </div>

                {/* Menu */}
                <div className="nav-menu">
                    <ul className="
                        flex items-center
                        justify-center
                        gap-2 sm:gap-4 md:gap-6
                        text-xs sm:text-sm md:text-base
                        text-[#5A5A5A]
                        font-medium
                        whitespace-nowrap
                    ">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Fixture</a>
                        </li>
                        <li>
                            <a href="">Teams</a>
                        </li>
                        <li>
                            <a href="">Schedules</a>
                        </li>
                    </ul>
                </div>

                {/* Coin Button */}
                <div className="coin shrink-0">
                    <button className="
                        btn btn-soft btn-primary
                        btn-sm sm:btn-md
                        gap-1
                    ">
                        <span className="hidden sm:inline">{coin}</span>
                        <BsCoin />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default NavBar;