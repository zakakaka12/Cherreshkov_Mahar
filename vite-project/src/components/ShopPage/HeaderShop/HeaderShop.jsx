import { Link } from 'react-router-dom'
import './HeaderShop.css'

export default function HeaderShop() {
    return (
        <>
            <div className='upper_header'>
                <p>Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</p>
                <div className='inviting'>
                    <a href="">Sign In</a> / <a href="">Register</a>
                    <img src="../public/img/Line.png" alt="" />
                    <div className='select_block'>
                        <img src="../public/img/Group.png" alt="" /> <select name="" id="">
                            <option>En</option>
                            <option>Rus</option>
                            <option>Ch</option>
                        </select>
                    </div>
                </div>
            </div>
            <header className='header'>
                <img src="../public/img/Logo.svg" alt="" />
                <nav>
                    <ul>
                        <Link to="/">HOME</Link>
                        <a href=""><li>SHOP</li></a>
                        <a href=""><li>FAQ'S</li></a>
                        <a href=""><li>STOCKISTS</li></a>
                        <a href=""><li>WHOLESALE</li></a>
                        <a href=""><li>CONTACT</li></a>
                    </ul>
                </nav>
                <div className='log_box'>
                    <a href=""><img src="../public/img/loupe.svg" alt="" /></a>
                    <a href=""><img src="../public/img/Group_2.svg" alt="" /></a>
                </div>
            </header>
        </>
    )
}
