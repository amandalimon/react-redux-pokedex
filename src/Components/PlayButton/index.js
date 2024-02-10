import { Button } from "antd";
import { PlaySquareOutlined } from '@ant-design/icons';
import './PlayButton.css'

function PlayButton({ onClick }) {
    return <Button
        className='PlayButton'
        icon={<PlaySquareOutlined style={{color: 'black', fontSize: '18px'}}/>}
        onClick={onClick}
    />
}

export { PlayButton }
