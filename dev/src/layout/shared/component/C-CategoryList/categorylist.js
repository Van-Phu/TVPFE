import { useCallback, useEffect, useRef, useState } from 'react';
import './categorylist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export function CategoryList({onItemClick, data}) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

    const handleCateItemClick = useCallback((category) => {
        console.log(category);
        console.log(categories);
        if(category == categories){
            setCategories(null)
        }
        setSelectedCategory(category);
        
        if (onItemClick) {
            onItemClick(category);
        }
    }, [onItemClick]);

    useEffect(() => {
        setCategories(data);
    }, [data]);
    
    

    return (
        <div className='category-container'>
            {categories.map((category, index) => (
                <li
                    onClick={() => handleCateItemClick(category)}
                    key={index}
                    className={`categories-item`}
                    >
                    <div className="image-container">
                        <img src={category.image} alt={category.name} className={`categories-image ${selectedCategory.id === category.id ? 'selected' : ''}`} />
                        {selectedCategory.id === category.id && (
                            <div className="tick-overlay">
                               <FontAwesomeIcon icon={faCheck}/>
                            </div>
                        )}
                    </div>
                    <h2>{category.name}</h2>
                </li>
            ))}
        </div>
    )
}