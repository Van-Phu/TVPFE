import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faBox, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export function Navbar() {
    const listModule = [
        { id: 0, text: 'CÔNG THỨC', icon: faBook, routeLink: '/' },
        { id: 1, text: 'ĐÃ LƯU', icon: faBox, routeLink: '/comunicate'  },
        { id: 2, text: 'CỘNG ĐỒNG', icon: faAddressBook, routeLink: '/stogare'  },
        { id: 3, text: 'Module 1', icon: faAddressBook },
        { id: 4, text: 'Module 1', icon: faAddressBook },
    ]
    const [moduleActive, setModuleActive] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        setModuleActive(listModule[0])
    },[])

    const handleModuleClick = (module) => {
        setModuleActive(module)
        navigate(module.routeLink)
    }

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
                    <div onClick={() => handleModuleClick(item)} className={moduleActive?.id == item?.id ? 'item-module-active' : 'item-module'} key={item.id}>
                        <div className='btn-module'>
                            <FontAwesomeIcon icon={item.icon} />
                            <li>{item.text}</li>
                        </div>
                    </div>
                ))}
            </div>
            <div className="footer">
                <div className='btn-logout'>Đăng xuất</div>
            </div>
        </div>
    )
}