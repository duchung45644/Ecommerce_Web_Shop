import classNames from 'classnames/bind';
import { useRef } from 'react';
import Button from '../Button';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, setModal }) {
    const modalRef = useRef();

    // const closeModal = () => modalRef.current.classList.add(cx('remove'));
    const closeModal = () => setModal(false);

    return (
        <div ref={modalRef} className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('btn-close')}>
                    <Button className="bg-blue" onClick={closeModal}>
                        Đóng
                    </Button>
                </div>

                {children}
            </div>
        </div>
    );
}

export default Modal;
