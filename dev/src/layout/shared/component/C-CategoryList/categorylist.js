import { useRef, useState } from 'react';
import './categorylist.css'


export function CategoryList(){
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = [
        { id: 1, name: "Món nước", image: "https://hafoodtours.com/wp-content/uploads/2017/05/vegan_tour_2-1024x768.jpg" },
        { id: 2, name: "Món cơm", image: "https://img.lovepik.com/free-png/20210919/lovepik-curry-rice-png-image_401007985_wh1200.png" },
        { id: 3, name: "Món cá", image: "https://capalaba.aussieseafoodhouse.com.au/wp-content/uploads/sites/8/2020/10/Basa-Steaks-cooking-33-6x6-1.jpg"},
        { id: 4, name: "Món thịt", image: "https://th.bing.com/th/id/OIP.zZjzaKV5nn91uipbulr3UQHaE8?pid=ImgDet&w=474&h=316&rs=1" },
        { id: 5, name: "Món nước", image: "https://hafoodtours.com/wp-content/uploads/2017/05/vegan_tour_2-1024x768.jpg" },
        { id: 6, name: "Món cơm", image: "https://img.lovepik.com/free-png/20210919/lovepik-curry-rice-png-image_401007985_wh1200.png" },
        { id: 7, name: "Món cá", image: "https://capalaba.aussieseafoodhouse.com.au/wp-content/uploads/sites/8/2020/10/Basa-Steaks-cooking-33-6x6-1.jpg"},
        
    ];
    const listRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
        isDown = true;
        listRef.current.classList.add('active');
        startX = e.pageX - listRef.current.offsetLeft;
        scrollLeft = listRef.current.scrollLeft;
    };

    const mouseLeaveHandler = () => {
        isDown = false;
        listRef.current.classList.remove('active');
    };

    const mouseUpHandler = () => {
        isDown = false;
        listRef.current.classList.remove('active');
    };

    const mouseMoveHandler = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - listRef.current.offsetLeft;
        const walk = (x - startX) * 2; 
        listRef.current.scrollLeft = scrollLeft - walk;
    };
    const handleClick = (id) => {
        setSelectedCategory(id); 
    };
    return(
        <div>
            <ul
                className='categories-list'
                ref={listRef}
                onMouseDown={mouseDownHandler}
                onMouseLeave={mouseLeaveHandler}
                onMouseUp={mouseUpHandler}
                onMouseMove={mouseMoveHandler}>
                {categories.map((category, index) => (
                    <li 
                        key={index} 
                        className={`categories-item ${selectedCategory === category.id ? 'selected' : ''}`}
                        onClick={() => handleClick(category.id)}>

                        <div className="image-container">
                            <img src={category.image} alt={category.name} className='categories-image' />
                            {selectedCategory === category.id && (
                                <div className="tick-overlay">
                                    &#10003; {}
                                </div>
                            )}
                        </div>
                        <h2>{category.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}