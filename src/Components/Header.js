import '../css/Header.css'
import Home from './Home'

const Header = () => {
    return (
        <div className='big-parent-div'>
            <ul class="nav">
                <li><a href={<Home />}>Home</a></li>
                <li><a href={<Home />}>About</a></li>
                <li><a href={<Home />}>Search</a></li>
                <li><a href={<Home />}>Contact</a></li>
                <li><a href={<Home />}>Work</a></li>
            </ul>
        </div>
    )
}

export default Header