import logo from '../assets/logo.png'
import moment from 'moment'


const Header = () => {
    return (
        <div className='mx-auto max-w-[90%] xl:max-w-[1150px] pb-4 pt-5'>
            <img className='mx-auto text-center' src={logo} alt="" />
            <p className='text-gray-500 mt-2 mb-2 text-center'>Journalism Without Fear or Favour</p>
            <p className='text-center'>{moment().format("dddd, MMMM D YYYY")}</p>

            
        </div>
    )
}

export default Header
