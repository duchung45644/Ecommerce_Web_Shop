import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import logo from '~/assets/images/Logo-2.png';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faBagShopping, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';
import { useRef } from 'react';

const cx = classNames.bind(styles);

const mainNav = [
    {
        display: 'Trang chủ',
        path: '/',
    },
    {
        display: 'Sản phẩm',
        path: '/catalog',
    },
    {
        display: 'Phụ kiện',
        path: '/accessories',
    },
    {
        display: 'Liên hệ',
        path: '/contact',
    },
];

function Header() {
    const headerRef = useRef();
    const menuRef = useRef();
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex((e) => e.path === pathname);

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                headerRef.current.classList.add(cx('shrink'));
            } else {
                headerRef.current.classList.remove(cx('shrink'));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const menuToggle = () => menuRef.current.classList.toggle(cx('active'));

    return (
        <header ref={headerRef} className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu-icon-on')} onClick={menuToggle}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div ref={menuRef} className={cx('left')}>
                    <div className={cx('menu')}>
                        <div className={cx('menu-icon-off')} onClick={menuToggle}>
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </div>
                        {mainNav.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={cx('menu-item', {
                                        active: index === activeNav,
                                    })}
                                    onClick={menuToggle}
                                >
                                    {item.display}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className={cx('logo')}>
                    <img src={logo}></img>
                </div>

                <div className={cx('actions')}>
                    <Link to="/search">
                        <div className={cx('actions-item')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </Link>
                    <Link to="/cart">
                        <div className={cx('actions-item')}>
                            <FontAwesomeIcon icon={faBagShopping} />
                        </div>
                    </Link>
                    <Link to="/user">
                        <div className={cx('actions-item')}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
