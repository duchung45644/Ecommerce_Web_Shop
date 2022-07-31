import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Policy.module.scss';
const cx = classNames.bind(styles);

function Policy({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner', 'section')}>
                <div className={cx('section-body grid col-4 col-md-2 col-sm-1')}>
                    {data.map((item, index) => (
                        <Link to="/policy" key={index} className={cx('policy-item')}>
                            <div className={cx('icon')}>{item.icon}</div>
                            <div className={cx('infor')}>
                                <h2 className={cx('title')}>{item.name}</h2>
                                <div className={cx('description')}>{item.description}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Policy;
