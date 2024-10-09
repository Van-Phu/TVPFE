import { useRef, useState } from 'react';
import './categorylist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export function CategoryList({onItemClick}) {
    const [selectedCategory, setSelectedCategory] = useState([]);
    
    const categories = [
        { id: 1, category: 'monnuoc', name: "Món nước", image: "https://hafoodtours.com/wp-content/uploads/2017/05/vegan_tour_2-1024x768.jpg" },
        { id: 2, category: 'moncom', name: "Món cơm", image: "https://img.lovepik.com/free-png/20210919/lovepik-curry-rice-png-image_401007985_wh1200.png" },
        { id: 3, category: 'monca', name: "Món cá", image: "https://capalaba.aussieseafoodhouse.com.au/wp-content/uploads/sites/8/2020/10/Basa-Steaks-cooking-33-6x6-1.jpg" },
        { id: 4, category: 'monthit', name: "Món thịt", image: "https://th.bing.com/th/id/OIP.zZjzaKV5nn91uipbulr3UQHaE8?pid=ImgDet&w=474&h=316&rs=1" },
        { id: 5, category: 'monnuoc', name: "Món nước", image: "https://hafoodtours.com/wp-content/uploads/2017/05/vegan_tour_2-1024x768.jpg" },
        { id: 6, category: 'moncom', name: "Món cơm", image: "https://img.lovepik.com/free-png/20210919/lovepik-curry-rice-png-image_401007985_wh1200.png" },
        { id: 7, category: 'monca', name: "Món cá", image: "https://capalaba.aussieseafoodhouse.com.au/wp-content/uploads/sites/8/2020/10/Basa-Steaks-cooking-33-6x6-1.jpg" },
    ];

    const handleCateItemClick = (category) =>{
        setSelectedCategory(category)

        if(onItemClick){
            onItemClick(selectedCategory)
   
        }
    }

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