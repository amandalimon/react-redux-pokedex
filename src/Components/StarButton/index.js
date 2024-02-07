import { Button } from "antd";
import { StarFilled, StarOutlined } from '@ant-design/icons';

function StarButton({ isFavorite, onClick }) {
    const Icon = isFavorite ? StarFilled : StarOutlined;

    return <Button icon={<Icon />} onClick={onClick} />
}

export { StarButton }