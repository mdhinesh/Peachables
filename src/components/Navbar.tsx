import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="navbar flex flex-row justify-between p-4 ">
            <h1 className='text-4xl font-bold'>BrainBuster</h1>
            <ul className='flex flex-row  text-2xl pt-1 sm:mr-1'>
                {/* <li className='mr-4 ml-4'><Link className='hover:underline' to={'/createquiz'}>Create quiz</Link></li> */}
                <li className='mr-4 ml-4'><Link className='hover:underline' to={'/profile'}>Profile</Link></li>
            </ul>
    </div>

     );
}
 
export default Navbar;