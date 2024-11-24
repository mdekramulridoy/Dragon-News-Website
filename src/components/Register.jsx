import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(result => {
            console.log(result.user);

            //update Profile
            updateProfile(auth.currentUser, {
                displayName : name,
                photoURL : photoURL,
            })
            .then(() => {
                console.log('Profile Updated')
            })
            .catch(error => {
                console.log('The Error is : ', error);
            });

            toast.success('Registration Successful.')
        })
        .catch(error => {
            console.log("The error is : " , error);
        })
    }

    return (
        <div className="flex flex-col max-w-md p-6 mx-auto mt-4 mb-16 rounded-md sm:p-10 bg-gray-900 text-gray-100">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Register</h1>
                <p className="text-sm text-gray-400">Register to access your account</p>
            </div>
            <form onSubmit={handleRegister} noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="block mb-2 text-sm">photoURL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="Enter Your photoURL" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Register</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-400">Already have an account yet?
                        <Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline text-violet-400">log in</Link>.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register
