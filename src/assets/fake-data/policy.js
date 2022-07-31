import { faCreditCard, faGem } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const policy = [
    {
        name: 'Miễn phí giao hàng',
        description: 'Miễn phí ship với đơn hàng > 239K',
        icon: <FontAwesomeIcon icon={faBagShopping} />,
    },
    {
        name: 'Thanh toán COD',
        description: 'Thanh toán khi nhận hàng (COD)',
        icon: <FontAwesomeIcon icon={faCreditCard} />,
    },
    {
        name: 'Khách hàng VIP',
        description: 'Ưu đãi dành cho khách hàng VIP',
        icon: <FontAwesomeIcon icon={faGem} />,
    },
    {
        name: 'Hỗ trợ bảo hành',
        description: 'Đổi, sửa đồ tại tất cả store',
        icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
    },
];

export default policy;
