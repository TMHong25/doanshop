import {memo, useState} from 'react';
import './styleHeader.scss';
import { FaFacebook,FaInstagramSquare,FaTiktok,FaRegUser,FaTelegram,FaPhone } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {Link} from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { formatter } from 'utils/formater';
import { ROUTERS } from 'utils/router';

const Header = () => {
    const [isProductList, setProductList] = useState(true);
    const [menus] = useState([
        {
            name: 'Trang chủ',
            path: ROUTERS.USER.HOME,
        },
        {
            name: 'Sản phẩm',
            path: ROUTERS.USER.PRODUCT,
        },
        {
            name: 'Gấu Teddy',
            path: ROUTERS.USER.HOME,//
            isShowSubMenu: false,
            child: [
                {
                    name: 'Gấu Teddy cao cấp',
                    path: '#'
                },
                {
                    name: 'Gấu Teddy cỡ nhỏ',
                    path: '#',
                },
                {
                    name: 'Gấu Teddy cỡ to',
                    path: '#',
                }
            ]
        },
        {
            name: 'Gấu hoạt hình',
            path: ROUTERS.USER.HOME,//
            isShowSubMenu:false,
            child: [
                {
                    name: 'Gấu bông cho bé',
                    path: ''
                },
                {
                    name: 'Gấu bông chính hãng MEETOO',
                    path: ''
                },
                {
                    name: 'Gấu bông HOT',
                    path: ''
                },
            ]
        },
        {
            name: 'Thú bông',
            path: ROUTERS.USER.HOME,//
            isShowSubMenu: false,
            child:[
                {
                    name: 'Các loài vật',
                    path: ''
                },
                {
                    name: 'Thú bông khác',
                    path: ''
                }
            ]
        },

        {
            name: 'Thông Tin',
            path: ROUTERS.USER.HOME,//
        }
    ])
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
        <div className="col-xl-3 ">
           <div className="header__logo">
            <h1>Góc Nhà Gấu</h1>
           </div>
        </div>
        <div className="col-xl-6 ">
        <nav className="header__menu">
            <ul>
                {menus?.map((menu, menuKey) => (
                    <li key={menuKey} className="active">
                        <Link to={menu?.path}>{menu?.name}</Link>
                        {
                            menu.child && (
                                <ul className='header__menu_child'>
                                    {menu.child.map((child, childKey) =>(

                                        <li key={`${menuKey}-${childKey}`}>
                                        <Link to={child.path}>{child.name}</Link>
                                        </li>
                                    ))}
                                    
                                </ul>
                            )
                        }
                    </li>
                ))}
            
            </ul>
        </nav>
        </div>
        <div className="col-xl-3 ">
            <div className="header__cart">
                <ul>
                    <li><Link to = '#'><AiOutlineShoppingCart /><span>0</span></Link></li>
                </ul>
                <div className="header__cart_price">
                    <span>{formatter(0)}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div className="container">
    <div className="row header__bottom">
        <div className="col-lg-3 product__list"> 
            <div className='product__list_all' onClick = {() => setProductList(!isProductList)}> <IoMenuOutline />Danh sách sản phẩm</div>
            {
                isProductList && (
                <ul >
                <li><Link to='#'>Gấu Teddy</Link></li>
                <li><Link to='#'>Gấu Hoạt hình</Link></li>
                <li><Link to='#'>Thú bông</Link></li>
                </ul>
                )
            }
            
             </div>
        <div className="col-lg-9 header__bottom_search">
            <div className="search">
                <div className="search__form">
                    <form >
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                    <button type="submit">Tìm kiếm</button>
                    </form>
                </div>
                <div className="bottom__phone">
                    <div className="phone__icon"><FaPhone /></div>
                    <div className="phone__text">
                        <p>096-562-4836</p>
                        <span>Hỗ trợ 24/7</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    </>
    );
};

export default memo(Header);