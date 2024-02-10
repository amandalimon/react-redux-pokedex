import { Button } from "antd";
import { StarFilled, StarOutlined } from '@ant-design/icons';
import './StarButton.css'

function StarButton({ isFavorite, onClick }) {
    const Icon = isFavorite ? StarFilled : StarOutlined;

    return <Button
        className='StarButton'
        icon={
            <Icon
                style={{ color: '#EDB825', fontSize: '20px' }}
            />
        }
        onClick={onClick} />
}

export { StarButton }