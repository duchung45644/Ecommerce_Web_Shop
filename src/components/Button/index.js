import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    small = false,
    large = false,
    disable = false,
    children,
    className,
    icon,
    onClick,
    ...passProps
}) {
    let TagName = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        TagName = Link;
    } else if (href) {
        props.href = href;
        TagName = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        withIcon: icon,
        primary,
        small,
        large,
        disable,
    });

    return (
        <TagName className={classes} {...props}>
            <div className={cx('inner')}>
                {icon && (
                    <span className={cx('icon-wrapper')}>
                        <div className={cx('icon')}>{icon}</div>
                    </span>
                )}
                <span className={cx('title')}>{children}</span>
            </div>
        </TagName>
    );
}

export default Button;
