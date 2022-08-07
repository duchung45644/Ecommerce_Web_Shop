import { useRef } from 'react';
import classNames from 'classnames/bind';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CheckBox.module.scss';
const cx = classNames.bind(styles);

function CheckBox(props) {
    const inputRef = useRef(null);

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current);
        }
    };

    return (
        <label className={cx('checkbox')}>
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked} />
            <span className={cx('checkbox-checkmark')}>
                <FontAwesomeIcon icon={faCheck} className={cx('checkbox-icon')} />
            </span>
            {props.children}
        </label>
    );
}

export default CheckBox;
