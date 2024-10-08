import {memo} from 'react';
import './styleFooter.scss';
import { FaLocationDot,FaPhone,FaUser, FaCheck, FaCalendar  } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdAccountBalance } from "react-icons/md";

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                      <div className="footer__about">
                        <h3 className="footer__about_logo"> Thông tin Liên hệ</h3>
                        <ul>
                            <li><FaLocationDot /> Địa chỉ: Tân Lập - Đan Phượng - Hà Nội</li>
                            <li><FaPhone />Phone: 096-562-4836</li>
                            <li> <IoIosMail />Email: tmhonggg@gmail.com</li>
                            <li><FaCalendar />Thời gian: 8h30 - 22h các ngày trong tuần.</li>
                            
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer__widget">
                            <h3 className='footer__widget_logo'>Chuyển khoản online</h3>
                            <ul>
                                <li>Ngân hàng BIDV</li>
                                <li><FaUser /> Chủ tài khoản: Thế Minh Hồng</li>
                                <li><MdAccountBalance />Số tài khoản: 116-041-6114</li>
                              
                            </ul>
                           </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer__title">
                            <h3 className="footer__title_logo">Những lý do lên chọn Góc nhà gấu</h3>
                            <ul>
                                <li><FaCheck />Hàng ngàn mẫu có sẵn tại
                                Showroom Hà Nội</li>
                                <li> <FaCheck />Giá bán lẻ luôn luôn thấp</li>
                                <li> <FaCheck />Cam kết nhồi 100% bông sạch, độ đàn hồi cao</li>
                                <li> <FaCheck />Bảo hành gấu 1 năm</li>
                                <li> <FaCheck />Miễn phí ship khi mua hàng lần 3.</li>
                            </ul>
                        </div>
                        </div>
                </div>
            </div>
        </div>

        <div className="footer__bottom">
        <p>© 2024 Thế Minh Hồng</p>
        </div>
        </>
    
      );
};

export default memo(Footer); 