import classNames from 'classnames/bind';

import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <h2>Contact page</h2>
        </div>
    );
}

export default Contact;
