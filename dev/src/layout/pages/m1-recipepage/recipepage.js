import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faBox, faAddressBook, faMagnifyingGlass, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import './recipepage.css'
export function RecipePage() {
    return (
        <div className='recipeContainer'>
            <div className="recipteHeader">
                <div className="searchArea">
                    <div className="search">
                        <input className='inputSearch' placeholder="Tìm kiếm theo công thức theo món ăn yêu thích" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className='btnRightArea'>
                    <div style={{fontWeight: 'bold'}}>Bạn muốn thêm món ăn ở danh mục này?</div>
                    <div className='btnAddRecipe'>
                        <FontAwesomeIcon icon={faCirclePlus} />
                        <div>Công thức mới</div>
                    </div>
                </div>
            </div>
        </div>
    )
}