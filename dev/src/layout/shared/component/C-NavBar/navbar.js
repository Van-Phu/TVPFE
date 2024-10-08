import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Navbar() {
    const listModule = [
        { id: 0, text: 'Module 1', icon: 'fa-house' },
        { id: 0, text: 'Module 1', icon: 'fa-house' },
        { id: 0, text: 'Module 1', icon: 'fa-house' },
        { id: 0, text: 'Module 1', icon: 'fa-house' },
        { id: 0, text: 'Module 1', icon: 'fa-house' },
    ]


    return (
        <div className='container'>
            <div className="header">
                <div className='title-head'>
                    LET'SCOOK
                </div>
                <div className='avatar'>
                    <img className='imgAvatar' src='https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg' />
                </div>
                <div className='name-user'>
                    LUONG VAN PHU
                </div>
            </div>
            <div className="body">
                {listModule.map((item) => (
                    <div className='item-module' key={item.id}>
                        <FontAwesomeIcon icon="fa-solid fa-house" />
                        <li>
                            {item.text}
                        </li>
                        
                    </div>
                ))}
            </div>

            <div className="footer">

            </div>
        </div>
    )
}