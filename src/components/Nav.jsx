/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Nav = () => {

    const {users, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            toast.error("user logged out");
        })
        .catch(error => {
            console.log('The Error is : ', error);
        })
    }

    return (
        <div>

            <div className='max-w-[90%] xl:max-w-[1150px] mx-auto bg-gray-300 py-3 px-3 rounded-md mt-4 mb-4 flex'>
                <button className='bg-orange-600 py-2 px-5 rounded-md'>Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link to='/'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</Link>
                    <Link to='/'>Bayern Slams Authorities Over Flight Delay to Club World Cup</Link>
                </Marquee>
            </div>

            <nav className="max-w-[90%] xl:max-w-[1150px] mx-auto grid grid-cols-4 items-center">

                <div  className="col-span-2">

                </div>

                <div>
                    <ul className="flex gap-8 font-semibold">
                        <NavLink className={({isActive}) => isActive ? 'underline underline-offset-8' : 'no-underline'} to='/'>Home</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'underline underline-offset-8' : 'no-underline'} to='/about'>About</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'underline underline-offset-8' : 'no-underline'} to='/career'>Career</NavLink>
                    </ul>
                </div>

                <div className="flex gap-2 justify-end items-center">
                    <div className="h-10 w-10 rounded-full">
                        <img className="h-full rounded-full" src={users ? `${users?.photoURL}` : `https://img.icons8.com/?size=64&id=rrtYnzKMTlUr&format=png`} alt="" />
                    </div>

                    {users ? 
                    <button onClick={handleLogOut} className="bg-blue-500 text-white text-right font-semibold py-2 px-8 rounded-md">log out</button>
                        : 
                    <Link to='/login'>
                        <button className="bg-blue-500 text-white text-right font-semibold py-2 px-8 rounded-md">log in</button>
                    </Link>}
                    
                </div>
            </nav>
        </div>
    )
}

export default Nav
