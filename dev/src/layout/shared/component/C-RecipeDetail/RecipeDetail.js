import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DTORecipeMaster } from "../../dto/DTORecipe"
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import './RecipeDetail.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeCard } from "../C-RecipeCard/RecipeCard";

export function RecipeDetail() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // if(recipes.length == 0 && !isLoading){
    //     return <div style={{width: '100%', height:'750px', display: 'flex', justifyContent:'center', alignItems:'center', fontSize:'20px'}}>"Danh sách trống"</div>
    // }
    
    return (  
        <div className="recipe-detail">
            <div className="recipe-content"></div>
            <div className="recipe-author"></div>
        </div>
        // <div className="recipe-list">

        //     {recipes.map((item, key) => (
        //         // <div className="recipe-block" key={item.Code}>
        //         //     <div className="image-block" onClick={() => handleItemClick(item)}>
        //         //         <img className="img" src={item.PrimaryImage} alt="IMAGE" width={272} height={224} />
        //         //     </div>
        //         //     <div className="information-block">
        //         //         <span className="recipe-title" title={item.RecipeName} onClick={() => handleItemClick(item)}>{item.RecipeName}</span>
        //         //         <span className="recipe-description" title={item.RecipeDescription}>{item.RecipeDescription}</span>
        //         //         <span className="recipe-author" title={item.Author}>Người đăng: {item.Author}</span>
        //         //         <div className="save-block">
        //         //             <span className="num-of-saved">{item.NumOfSaved} người đã lưu</span>
        //         //             <span className={`save-icon ${item.IsSaved ? 'isSaved' : ''}`} onClick={() => handleSaveClick(item)}><FontAwesomeIcon icon={item.IsSaved ? solidBookmark : regularBookmark} /></span>
        //         //         </div>
        //         //     </div>
        //         // </div>
        //         <RecipeCard key={key} data={item} onItemClick={handleSaveClick}/>
        //     ))}
        // </div>
    )
}