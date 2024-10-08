import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DTORecipeMaster } from "../../dto/DTORecipe"
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import './RecipeList.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RecipeList({data}) {
    
    const test = new DTORecipeMaster()
    const listTest = [
        { Code: 1, RecipeName: "Bún Real", RecipeDescription: "Món ăn đơn giản các bạn nên giản các bạn nên giản các bạn nên nấu để ăn vào ngày mưa Món ăn đơn giản các bạn nên nấu để ăn vào ngày mưa", Category: ["monnuoc"], IsSaved: true, NumOfSaved: 50, Author: "Heo con nấu ăn" },
        { Code: 2, RecipeName: "Bún Real", RecipeDescription: "Test for test for test for", Category: ["monnuoc"], IsSaved: false, NumOfSaved: 10, Author: "Heo con nấu ăn" },
        { Code: 3, RecipeName: "Bún Real", RecipeDescription: "Test for test for test for", Category: ["monnuoc"], IsSaved: false, NumOfSaved: 20, Author: "Heo con nấu ăn" },
        { Code: 4, RecipeName: "Bún Real", RecipeDescription: "Test for test for test for", Category: ["monnuoc"], IsSaved: true, NumOfSaved: 80, Author: "Heo con nấu ăn" },
        { Code: 5, RecipeName: "Bún Real", RecipeDescription: "Test for test for test for", Category: ["monnuoc"], IsSaved: true, NumOfSaved: 80, Author: "Heo con nấu ăn" },
        { Code: 6, RecipeName: "Bún Real", RecipeDescription: "Test for test for test for", Category: ["monnuoc"], IsSaved: true, NumOfSaved: 80, Author: "Heo con nấu ăn" }


    ]
    const [recipes, setRecipes] = useState(listTest);
    const navigate = useNavigate();

    const handleSaveClick = (recipe) =>{
        const updatedRecipes = recipes.map((item) => {
            if (item.Code === recipe.Code) {
                return { ...item, IsSaved: !item.IsSaved }; // Toggle IsSaved state
            }
            return item;
        });

        setRecipes(updatedRecipes); // Update state
    }

    const handleItemClick = (recipe) =>{
        localStorage.setItem('DTORecipe', JSON.stringify(recipe))
        navigate('/detail')
    }

    return (
        <div className="recipe-list">
            {recipes.map((item, key) => (
                <div className="recipe-block" key={item.Code}>
                    <div className="image-block" onClick={() => handleItemClick(item)}>
                        <img className="img" src="https://cdn.tgdd.vn/2021/02/CookProductThumb/BeFunky-collage-2021-02-01T112858.687-620x620.jpg" width={272} height={224} />
                    </div>
                    <div className="information-block">
                        <span className="recipe-title" title={item.RecipeName} onClick={() => handleItemClick(item)}>{item.RecipeName}</span>
                        <span className="recipe-description" title={item.RecipeDescription}>{item.RecipeDescription}</span>
                        <span className="recipe-author" title={item.Author}>Người đăng: {item.Author}</span>
                        <div className="save-block">
                            <span className="num-of-saved">{item.NumOfSaved} người đã lưu</span>
                            <span className={`save-icon ${item.IsSaved ? 'isSaved' : ''}`} onClick={() => handleSaveClick(item)}><FontAwesomeIcon icon={item.IsSaved ? solidBookmark : regularBookmark} /></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}