import {memo} from 'react';
import './styleHeader.scss';
import { FaFacebook,FaInstagramSquare,FaTiktok,FaRegUser,FaTelegram } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { formatter } from 'utils/formater';

const Header = () => {
    return (
        <>
    <div className='header__top'>
    <div className="container">
        <div className="row">
            <div className="col-6 header__top_left">
                <ul>
                    <li><IoIosMail />tmhonggg@gmail.com</li>
                    <li>Miễn phí giao hàng từ {formatter(50000)}</li>
                </ul>
                </div>
            <div className="col-6 header__top_right">
                <ul>
                    <li><Link to={'#'}><FaFacebook /></Link></li>
                    <li><Link to={'#'}><FaInstagramSquare /> </Link></li>
                    <li><Link to={'#'}><FaTiktok /> </Link></li>
                    <li><Link to={'#'}> <FaTelegram /> </Link></li>
                    <li><Link to={'#'}> <FaRegUser /></Link><span>Đăng nhập</span></li>
                </ul>
            </div>
        </div>
    </div>
    </div>

  <div className="container">
  <div className="row">
        <div className="col-lg-3">
            <h1>DoanShop</h1>
        </div>
    </div>
  </div>
    </>
    );
};

export default memo(Header);