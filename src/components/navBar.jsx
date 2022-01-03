
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (<>
        <div>
            <nav className='navBar'>
                <ul>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/descrition'>descrition</Link>
                </ul>
            </nav>
        </div>
    </>)
}