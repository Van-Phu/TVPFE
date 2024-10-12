import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function RecipeCard({data, onItemClick}){
    const navigate = useNavigate();
    const [itemData, setItemData] = useState({});
    const handleItemClick = (recipe) =>{
        localStorage.setItem('DTORecipe', JSON.stringify(recipe))
        navigate('/detail')
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