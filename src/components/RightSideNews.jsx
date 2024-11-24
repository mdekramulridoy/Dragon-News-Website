/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import img1 from '../assets/qZone1.png'
import img2 from '../assets/qZone2.png'
import img3 from '../assets/qZone3.png'
import { AuthContext } from '../provider/AuthProvider';


const RightSideNews = () => {

    const [google, setGoogle] = useState(null)

    const {signInWithGoogle} = useContext(AuthContext);

    const handleSignInGoogle = () => {
        signInWithGoogle()
        .then(result => {
            setGoogle(result.user);
        })
        .catch(error => {
            console.log('The Error is : ', error);
        })
    }

    return (
        <div>
            <h1 className="font-bold text-xl mb-4">Login with</h1>
            <button onClick={handleSignInGoogle} className="flex items-center text-center border-2 border-blue-500 w-full py-2 px-3 rounded-lg">
                <img className="h-5 mx-auto" src="https://img.icons8.com/?size=96&id=17949&format=png" alt="" />
                <h3 className="text-blue-500 font-bold">Login With Google</h3>
            </button>
            <button className="flex items-center text-center border-2 border-black w-full py-2 px-3 rounded-lg mt-3 mb-6">
                <img className="h-5 mx-auto" src="https://img.icons8.com/?size=96&id=uLWV5A9vXIPu&format=png" alt="" />
                <h3>Login With Facebook</h3>
            </button>

            <h3 className="font-bold text-xl mb-4">Find Us On</h3>

            <div className="border border-gray-300 p-3 rounded-lg">
                <button className="flex items-center gap-2 border-b border-gray-300 pb-3 w-full">
                    <img className="h-5" src="https://img.icons8.com/?size=96&id=uLWV5A9vXIPu&format=png" alt="" />
                    <h3>Facebook</h3>
                </button>
                <button className="flex items-center gap-2 border-b border-gray-300 py-3 w-full">
                    <img className="h-5" src="https://img.icons8.com/?size=96&id=13963&format=png" alt="" />
                    <h3>Twitter</h3>
                </button>
                <button className="flex items-center gap-2 pt-3 w-full">
                    <img className="h-5" src="https://img.icons8.com/?size=128&id=119026&format=png" alt="" />
                    <h3>Instagram</h3>
                </button>
            </div>

            <h3 className="font-bold text-xl mt-4 mb-4">Q-Zone</h3>

            <div>
                <img className='mb-4' src={img1} alt="" />
                <img className='mb-4' src={img2} alt="" />
                <img className='mb-4' src={img3} alt="" />
            </div>
        </div>
    )
}

export default RightSideNews
