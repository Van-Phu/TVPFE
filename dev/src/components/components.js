import React from 'react';
// import { RecipePage } from './pages/m1-recipepage/recipepage';
import { useCallback, useEffect, useRef, useState } from 'react';
import './components.css'
export function AppRoutes() {
    return (
        <div>
            <div className='container-app'>
                <div className='layout-app'>
                    <div className='navbar-area'>
                        <Navbar />
                    </div>

                    <div className='rightContent'>
                        <div className='titleApp'>
                            Hello world
                        </div>
                        <div className='route-area'>
                            <RecipePage />
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export function Navbar() {
    const listModule = [
        { id: 0, text: 'CÔNG THỨC', icon: 'cion', routeLink: '/' },
        { id: 1, text: 'ĐÃ LƯU', icon: 'cion', routeLink: '/comunicate' },
        { id: 2, text: 'CỘNG ĐỒNG', icon: 'cion', routeLink: '/stogare' },
        { id: 3, text: 'Module 1', icon: 'cion' },
        { id: 4, text: 'Module 1', icon: 'cion' },
    ]
    const [moduleActive, setModuleActive] = useState()

    useEffect(() => {
        setModuleActive(listModule[0])
    }, [])

    const handleModuleClick = (module) => {
        setModuleActive(module)
        // navigate(module.routeLink)
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
                            <div>icon</div>
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

export function CategoryList({ onItemClick, data }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});
    const defaultItem = { id: -1, category: '', name: "", image: "" }

    const handleCateItemClick = useCallback((category) => {
        if (category.id == selectedCategory.id) {
            setSelectedCategory(defaultItem)
            if (onItemClick) {
                onItemClick(defaultItem);
            }
        } else {
            setSelectedCategory(category);
            if (onItemClick) {
                onItemClick(category);
            }
        }

        // if (onItemClick) {
        //     onItemClick(selectedCategory);
        // }
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
                                <div>icon</div>
                            </div>
                        )}
                    </div>
                    <h2>{category.name}</h2>
                </li>
            ))}
        </div>
    )
}



export function RecipeList({data}) {
    const [recipes, setRecipes] = useState(data || []);
    const [isLoading, setIsLoading] = useState(false);

    const handleSaveClick = (recipe) =>{
        console.log(recipe)
        const updatedRecipes = recipes.map((item) => {
            if (item.Code === recipe.Code) {
                return { ...item, IsSaved: item.IsSaved }; // Toggle IsSaved state
            }
            return item;
        });

        setRecipes(updatedRecipes); // Update state
    }

    // const handleItemClick = (recipe) =>{
    //     localStorage.setItem('DTORecipe', JSON.stringify(recipe))
    //     navigate('/detail')
    // }

    useEffect(() => {
        setRecipes(data);
    }, [data]);


    // if (isLoading) {
    //     console.log(isLoading)
    //     return <div style={{ textAlign: 'center', fontSize: '20px' }}>Loading...</div>; // Loading indicator
    // }

    if(recipes.length == 0 && !isLoading){
        return <div style={{width: '100%', height:'750px', display: 'flex', justifyContent:'center', alignItems:'center', fontSize:'20px'}}>"Danh sách trống"</div>
    }
    
    return (
        <div className="recipe-list">
            {recipes.map((item, key) => (
                // <div className="recipe-block" key={item.Code}>
                //     <div className="image-block" onClick={() => handleItemClick(item)}>
                //         <img className="img" src={item.PrimaryImage} alt="IMAGE" width={272} height={224} />
                //     </div>
                //     <div className="information-block">
                //         <span className="recipe-title" title={item.RecipeName} onClick={() => handleItemClick(item)}>{item.RecipeName}</span>
                //         <span className="recipe-description" title={item.RecipeDescription}>{item.RecipeDescription}</span>
                //         <span className="recipe-author" title={item.Author}>Người đăng: {item.Author}</span>
                //         <div className="save-block">
                //             <span className="num-of-saved">{item.NumOfSaved} người đã lưu</span>
                //             <span className={`save-icon ${item.IsSaved ? 'isSaved' : ''}`} onClick={() => handleSaveClick(item)}><FontAwesomeIcon icon={item.IsSaved ? solidBookmark : regularBookmark} /></span>
                //         </div>
                //     </div>
                // </div>
                <RecipeCard key={key} data={item} onItemClick={handleSaveClick}/>
            ))}
        </div>
    )
}

export function RecipePage() {

    const listTest = [
        { Code: 1, RecipeName: "Mì Ý Carbonara", RecipeDescription: "Món mì Ý cổ điển với trứng, phô mai, pancetta và tiêu.", Category: [7], IsSaved: true, NumOfSaved: 120, Author: "Đầu bếp Mario", PrimaryImage: 'https://nguyenhafood.vn/uploads/files/cong-thuc-spaghetti-carbonara-don-gian-cung-nguyen-ha-food%20%286%29.jpg' },
        { Code: 2, RecipeName: "Bánh Burger Chay", RecipeDescription: "Bánh burger chay với nguyên liệu từ thực vật, rất ngon miệng và bổ dưỡng.", Category: [6], IsSaved: false, NumOfSaved: 85, Author: "Đầu bếp An", PrimaryImage: 'https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg' },
        { Code: 3, RecipeName: "Canh Chua Cá Lóc", RecipeDescription: "Món canh chua đậm đà với cá lóc và rau ngót, đặc sản miền Nam.", Category: [1, 3], IsSaved: true, NumOfSaved: 150, Author: "Đầu bếp Thanh", PrimaryImage: 'https://nghikitchen.edu.vn/wp-content/uploads/2023/01/canh-chua-ca-loc-1280x1000-368f.jpg' },
        { Code: 4, RecipeName: "Bánh Xèo", RecipeDescription: "Món bánh xèo giòn tan với tôm, thịt và giá đỗ, ăn kèm với rau sống và nước mắm.", Category: [4], IsSaved: true, NumOfSaved: 200, Author: "Đầu bếp Hương", PrimaryImage: 'https://cdn.tgdd.vn/Files/2017/02/24/953891/3-cach-lam-banh-xeo-mien-tay-thom-ngon-gion-rum-202303031501527280.jpg' },
        { Code: 5, RecipeName: "Phở Bò", RecipeDescription: "Món phở truyền thống của Việt Nam với nước dùng thơm ngon và thịt bò.", Category: [1], IsSaved: true, NumOfSaved: 300, Author: "Đầu bếp Hoàng", PrimaryImage: 'https://image.baophapluat.vn/w840/Uploaded/2024/hfobhvwbucqaow/2022_10_19/pho-8658.jpg' },
        { Code: 6, RecipeName: "Sushi Cá Hồi", RecipeDescription: "Sushi với cá hồi tươi, ăn kèm với gừng ngâm và wasabi.", Category: [3], IsSaved: false, NumOfSaved: 95, Author: "Đầu bếp Kenji", PrimaryImage: 'https://blog.onelife.vn/wp-content/uploads/2023/11/a32af133-cover.jpg' },
        { Code: 7, RecipeName: "Lẩu Thái", RecipeDescription: "Món lẩu Thái cay nồng với hải sản và nấm, ăn kèm với rau và bún.", Category: [1], IsSaved: true, NumOfSaved: 180, Author: "Đầu bếp Somchai", PrimaryImage: 'https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/n%E1%BA%A5u%20%C4%83n/nau-lau-thai-chuan-vi-ngon-nhu-the-nao.jpg' },
        { Code: 8, RecipeName: "Cơm Tấm Sườn Nướng", RecipeDescription: "Cơm tấm với sườn nướng thơm lừng, ăn kèm với nước mắm pha đậm đà.", Category: [2], IsSaved: true, NumOfSaved: 250, Author: "Đầu bếp Lâm", PrimaryImage: 'https://tongkhothitheo.vn/wp-content/uploads/2021/12/com-tam.jpg' },
        { Code: 9, RecipeName: "Bún Chả Hà Nội", RecipeDescription: "Món bún chả nổi tiếng của Hà Nội với thịt nướng và nước mắm chua ngọt.", Category: [4], IsSaved: false, NumOfSaved: 175, Author: "Đầu bếp Mai", PrimaryImage: 'https://tiki.vn/blog/wp-content/uploads/2023/10/bun-cha-bao-nhieu-calo.jpg' },
        { Code: 10, RecipeName: "Pizza Margherita", RecipeDescription: "Pizza Ý cổ điển với phô mai mozzarella, sốt cà chua và lá húng quế.", Category: [5], IsSaved: true, NumOfSaved: 140, Author: "Đầu bếp Luca", PrimaryImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6jONKGIT4J-tBAzmZsP0sP9PU7oVV2Oc7Q&s' }
    ];

    const categories = [
        { id: 1, category: 'monnuoc', name: "Món nước", image: "https://hafoodtours.com/wp-content/uploads/2017/05/vegan_tour_2-1024x768.jpg" },
        { id: 2, category: 'moncom', name: "Món cơm", image: "https://img.lovepik.com/free-png/20210919/lovepik-curry-rice-png-image_401007985_wh1200.png" },
        { id: 3, category: 'monca', name: "Món cá", image: "https://capalaba.aussieseafoodhouse.com.au/wp-content/uploads/sites/8/2020/10/Basa-Steaks-cooking-33-6x6-1.jpg" },
        { id: 4, category: 'monthit', name: "Món thịt", image: "https://th.bing.com/th/id/OIP.zZjzaKV5nn91uipbulr3UQHaE8?pid=ImgDet&w=474&h=316&rs=1" },
        { id: 5, category: 'monpizza', name: "Món Pizza", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6jONKGIT4J-tBAzmZsP0sP9PU7oVV2Oc7Q&s" },
        { id: 6, category: 'monchay', name: "Món chay", image: "https://img.lovepik.com/free-png/20210919/lovepik-curry-rice-png-image_401007985_wh1200.png" },
        { id: 7, category: 'monmi', name: "Món mì", image: "https://nguyenhafood.vn/uploads/files/cong-thuc-spaghetti-carbonara-don-gian-cung-nguyen-ha-food%20%286%29.jpg" },
    ];

    const [gridData, setGridData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setsearchTerm] = useState({});
    const [categoryTerm, setCategoryTerm] = useState({ value: "", fields: ['Category'] })

    const handleGetCategory = (category) => {
        setCategoryTerm({ value: category?.id, fields: ['Category'] })
    }

    function handleFilterChange(value, fields) {
        const filter = { value: value, fields: fields }
        setsearchTerm(filter);
    }

    function loadFilter() {
        const searchFilter = []

        // Include category filter if it exists
        if (categoryTerm && categoryTerm.value && categoryTerm.value != -1) {
            searchFilter.push(categoryTerm);
        }

        // Include search filter if it exists
        if (searchTerm && searchTerm.value) {
            searchFilter.push(searchTerm);
        }
        // console.log(categoryTerm)
        let filtered = [...gridData]
        searchFilter.forEach(filter => {
            let normalizedValue = ''
            if (typeof filter.value === 'string') {
                normalizedValue = filter.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
            }

            filtered = filtered.filter(item => {
                return filter.fields.some(field => {
                    const fieldValue = item[field];
                    if (typeof fieldValue === 'string') {
                        const normalizedFieldValue = fieldValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                        return normalizedFieldValue.includes(normalizedValue);
                    }

                    if (Array.isArray(fieldValue)) {
                        return fieldValue.some(arrayItem => {
                            if (typeof arrayItem === 'number') {
                                return arrayItem.toString().includes(filter.value);
                            }

                            // If it's a string, normalize and check the inclusion
                            if (typeof arrayItem === 'string') {
                                const normalizedArrayItem = arrayItem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                                return normalizedArrayItem.includes(normalizedValue);
                            }

                            return false;
                        });
                    }
                    return false;
                });
            });
        });

        setFilteredData(filtered);

    }

    useEffect(() => {
        setGridData(listTest);
        setFilteredData(listTest);
    }, []);

    useEffect(() => {
        if (categoryTerm.value) {
            loadFilter();
        }
        if (searchTerm.value) {
            loadFilter();
        }
    }, [categoryTerm, searchTerm]);

    return (
        <div className='recipeContainer'>
            <div className="recipteHeader">
                <div className="searchArea">
                    <div className="search">
                        <input className='inputSearch' placeholder="Tìm kiếm theo công thức theo món ăn, đầu bếp yêu thích"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.target.blur();
                                }
                            }}
                            onBlur={(e) => handleFilterChange(e.target.value, ['RecipeName', 'Author'])} />
                        <div>icon</div>
                    </div>
                </div>
                <div className='btnRightArea'>
                    <div>Bạn muốn thêm món ăn ở danh mục này?</div>
                    <div className='btnAddRecipe'>
                        <div>icon</div>
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

export function RecipeCard({data, onItemClick}){

    const [itemData, setItemData] = useState({});
    const handleItemClick = (recipe) =>{
        localStorage.setItem('DTORecipe', JSON.stringify(recipe))
    }

    const handleSaveClick = useCallback((item) => {
            item.IsSaved = !item.IsSaved
            setItemData(item)
            if (onItemClick) {
                onItemClick(item);
            }
    }, [onItemClick]);

    useEffect(() =>{
        setItemData(data)
    }, [data])

    return (
        <div className="recipe-block" key={itemData.Code}>
            <div className="image-block" onClick={() => handleItemClick(itemData)}>
                <img className="img" src={itemData.PrimaryImage} alt="IMAGE" width={272} height={224} />
            </div>
            <div className="information-block">
                <span className="recipe-title" title={itemData.RecipeName} onClick={() => handleItemClick(itemData)}>{itemData.RecipeName}</span>
                <span className="recipe-description" title={itemData.RecipeDescription}>{itemData.RecipeDescription}</span>
                <span className="recipe-author" title={itemData.Author}>Người đăng: {itemData.Author}</span>
                <div className="save-block">
                    <span className="num-of-saved">{itemData.NumOfSaved} người đã lưu</span>
                    {/* <span className={`save-icon ${itemData.IsSaved ? 'isSaved' : ''}`} onClick={() => handleSaveClick(itemData)}><FontAwesomeIcon icon={itemData.IsSaved ? solidBookmark : regularBookmark} /></span> */}
                    <input className="icon save-icon" type="checkbox" checked={itemData.IsSaved} onChange={() => handleSaveClick(itemData)}/>
                </div>
            </div>
        </div>
    )
}