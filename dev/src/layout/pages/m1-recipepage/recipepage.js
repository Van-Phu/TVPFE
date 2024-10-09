import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faBox, faAddressBook, faMagnifyingGlass, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import './recipepage.css'
import { RecipeList } from '../../shared/component/C-RecipeList/RecipeList'
import { useEffect, useState } from 'react';
import { CategoryList } from '../../shared/component/C-CategoryList/categorylist';
export function RecipePage() {

    const listTest = [
        { Code: 1, RecipeName: "Mì Ý Carbonara", RecipeDescription: "Món mì Ý cổ điển với trứng, phô mai, pancetta và tiêu.", Category: ["monnuoc", "Bữa tối"], IsSaved: true, NumOfSaved: 120, Author: "Đầu bếp Mario", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' }, 
        { Code: 2, RecipeName: "Bánh Burger Chay", RecipeDescription: "Bánh burger chay với nguyên liệu từ thực vật, rất ngon miệng và bổ dưỡng.", Category: ["Chay", "Ăn nhanh"], IsSaved: false, NumOfSaved: 85, Author: "Đầu bếp An", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' }, 
        { Code: 3, RecipeName: "Canh Chua Cá Lóc", RecipeDescription: "Món canh chua đậm đà với cá lóc và rau ngót, đặc sản miền Nam.", Category: ["monca", "Bữa trưa"], IsSaved: true, NumOfSaved: 150, Author: "Đầu bếp Thanh", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' },
        { Code: 4, RecipeName: "Bánh Xèo", RecipeDescription: "Món bánh xèo giòn tan với tôm, thịt và giá đỗ, ăn kèm với rau sống và nước mắm.", Category: ["Việt Nam", "Ăn vặt"], IsSaved: true, NumOfSaved: 200, Author: "Đầu bếp Hương", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' }, 
        { Code: 5, RecipeName: "Phở Bò", RecipeDescription: "Món phở truyền thống của Việt Nam với nước dùng thơm ngon và thịt bò.", Category: ["Việt Nam", "Bữa sáng"], IsSaved: true, NumOfSaved: 300, Author: "Đầu bếp Hoàng", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' }, 
        { Code: 6, RecipeName: "Sushi Cá Hồi", RecipeDescription: "Sushi với cá hồi tươi, ăn kèm với gừng ngâm và wasabi.", Category: ["Nhật Bản", "Bữa tối"], IsSaved: false, NumOfSaved: 95, Author: "Đầu bếp Kenji", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' },
        { Code: 7, RecipeName: "Lẩu Thái", RecipeDescription: "Món lẩu Thái cay nồng với hải sản và nấm, ăn kèm với rau và bún.", Category: ["Thái Lan", "Bữa tối"], IsSaved: true, NumOfSaved: 180, Author: "Đầu bếp Somchai", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' }, 
        { Code: 8, RecipeName: "Cơm Tấm Sườn Nướng", RecipeDescription: "Cơm tấm với sườn nướng thơm lừng, ăn kèm với nước mắm pha đậm đà.", Category: ["Việt Nam", "Bữa trưa"], IsSaved: true, NumOfSaved: 250, Author: "Đầu bếp Lâm", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' },
        { Code: 9, RecipeName: "Bún Chả Hà Nội", RecipeDescription: "Món bún chả nổi tiếng của Hà Nội với thịt nướng và nước mắm chua ngọt.", Category: ["Việt Nam", "Bữa trưa"], IsSaved: false, NumOfSaved: 175, Author: "Đầu bếp Mai", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' },
        { Code: 10, RecipeName: "Pizza Margherita", RecipeDescription: "Pizza Ý cổ điển với phô mai mozzarella, sốt cà chua và lá húng quế.", Category: ["Ý", "Bữa tối"], IsSaved: true, NumOfSaved: 140, Author: "Đầu bếp Luca", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' }
    ];

    const categories = [
        { id: 1, category: 'monnuoc', name: "Món nước", image: "https://hafoodtours.com/wp-content/uploads/2017/05/vegan_tour_2-1024x768.jpg" },
        { id: 2, category: 'moncom', name: "Món cơm", image: "https://img.lovepik.com/free-png/20210919/lovepik-curry-rice-png-image_401007985_wh1200.png" },
        { id: 3, category: 'monca', name: "Món cá", image: "https://capalaba.aussieseafoodhouse.com.au/wp-content/uploads/sites/8/2020/10/Basa-Steaks-cooking-33-6x6-1.jpg" },
        { id: 4, category: 'monthit', name: "Món thịt", image: "https://th.bing.com/th/id/OIP.zZjzaKV5nn91uipbulr3UQHaE8?pid=ImgDet&w=474&h=316&rs=1" },
        { id: 5, category: 'monnuoc', name: "Món nước", image: "https://hafoodtours.com/wp-content/uploads/2017/05/vegan_tour_2-1024x768.jpg" },
        { id: 6, category: 'moncom', name: "Món cơm", image: "https://img.lovepik.com/free-png/20210919/lovepik-curry-rice-png-image_401007985_wh1200.png" },
        { id: 7, category: 'monca', name: "Món cá", image: "https://capalaba.aussieseafoodhouse.com.au/wp-content/uploads/sites/8/2020/10/Basa-Steaks-cooking-33-6x6-1.jpg" },
    ];
    
    const [gridData, setGridData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setsearchTerm] = useState({});
    const [selectedCategory, setSelectedCategory] = useState({})
    const [categoryTerm, setCategoryTerm] = useState({ value: "", fields: ['Category'] })

    const handleGetCategory = (category) => {
        setSelectedCategory(category)
        console.log(selectedCategory)
        // setCategoryTerm({ value: categoryTerm?.category, fields: ['Category'] })
        loadFilter()
    }

    function handleFilterChange(value, fields) {
        const filter = { value: value, fields: fields }
        setsearchTerm(filter); // Update filtered data
        loadFilter();
        // return searchFields
    }

    function loadFilter() {
        const searchFilter = []

        // Include category filter if it exists
        if (categoryTerm && categoryTerm.value) {
            searchFilter.push(categoryTerm);
        }

        // Include search filter if it exists
        if (searchTerm && searchTerm.value) {
            searchFilter.push(searchTerm);
        }
        // console.log(categoryTerm)
        let filtered = [...gridData]
        searchFilter.forEach(filter => {
            const normalizedValue = filter.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

            filtered = filtered.filter(item => {
                return filter.fields.some(field => {
                    const fieldValue = item[field];
                    if (typeof fieldValue === 'string'){
                        const normalizedFieldValue = fieldValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                        return normalizedFieldValue.includes(normalizedValue);
                    }

                    if (Array.isArray(fieldValue)) {
                        return fieldValue.some(arrayItem => {
                            const normalizedArrayItem = arrayItem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f']/g, '');
                            return normalizedArrayItem.includes(normalizedValue);
                        });
                    }
                    return false;
                });
            });
        });

        setFilteredData(filtered); // Update filtered data

    }

    useEffect(() => {
        setGridData(listTest);
        setFilteredData(listTest);
    }, []);

    useEffect(() =>{
        handleGetCategory({});
    }, [])

    return (
        <div className='recipeContainer'>
            <div className="recipteHeader">
                <div className="searchArea">
                    <div className="search">
                        <input className='inputSearch' placeholder="Tìm kiếm theo công thức theo món ăn yêu thích"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.target.blur();
                                }
                            }}
                            onBlur={(e) => handleFilterChange(e.target.value, ['RecipeName', 'Author'])} />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className='btnRightArea'>
                    <div style={{ fontWeight: 'bold' }}>Bạn muốn thêm món ăn ở danh mục này?</div>
                    <div className='btnAddRecipe'>
                        <FontAwesomeIcon icon={faCirclePlus} />
                        <div>Công thức mới</div>
                    </div>
                </div>
            </div>

            <div className='recipe-category'>
                <CategoryList onItemClick={handleGetCategory} data={categories} />
            </div>

            <div className='recipeList'>
                <RecipeList data={filteredData}></RecipeList>
            </div>
        </div>
    )
}