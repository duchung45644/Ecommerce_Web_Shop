import classNames from 'classnames/bind';

import styles from './ErrorLayout.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <h1>Oops</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <span>
                The page you are looking for might have been removed <br /> had its name changed or is temporarily
                unavailable
            </span>
            <Button to="/" large className={cx('bg-blue', 'button')}>
                Go to HomePage
            </Button>
        </div>
    );
}

export default DefaultLayout;
