import React from 'react';

const Categories = ({filterMenu, categoryItems})=>{
    return(
        <div className='categories'>
            {categoryItems.map((categoryItem, index)=>{
                return(
                    <button key={index} className='btn-category'
                        onClick={()=>filterMenu(categoryItem)}
          
                    >{categoryItem}</button>
                )
            })}
          
        </div>
    )
};

export default Categories;