import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/Logo-2.png';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/introduction',
    },
    {
        display: 'Liên hệ',
        path: '/contact',
    },
    {
        display: 'Tuyển dụng',
        path: '/introduction',
    },
    {
        display: 'Tin tức',
        path: '/news',
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/introduction',
    },
];

const footerCustomerLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '/introduction',
    },
    {
        display: 'Chính sách chính sách bảo hành',
        path: '/introduction',
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/introduction',
    },
];

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('col')}>
                    <div className={cx('col-title')}>Tổng đài hỗ trợ</div>
                    <ul>
                        <li>
                            Liên hệ đặt hàng <b>0123456789</b>
                        </li>
                        <li>
                            Thắc mắc đơn hàng <b>0123456789</b>
                        </li>
                        <li>
                            Góp ý khiếu nại <b>0123456789</b>
                        </li>
                    </ul>
                </div>
                <div className={cx('col')}>
                    <div className={cx('col-title')}>Về YOLO</div>
                    <ul>
                        {footerAboutLinks.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.display}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('col')}>
                    <div className={cx('col-title')}>Chăm sóc khách hàng</div>
                    <ul>
                        {footerCustomerLinks.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.display}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('col', 'col-4')}>
                    <div className={cx('col-title')}>
                        <img src={logo} alt="heheh"></img>
                    </div>
                    <span>
                        "Hướng đến mục tiêu mang lại niềm vui ăn mặc mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy
                        cùng Yolo hướng đến một cuộc sống năng động tích cực hơn."
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
