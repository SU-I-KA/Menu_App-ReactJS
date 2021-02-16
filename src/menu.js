import React from 'react';

const Menu = ({items})=>{
    return(
        <div className='menu'>
            {items.map((item)=>{
                const {id, title, category, price, img, desc} = item;
                return(
                    <div key={id} className='menu-item'>
                        <div className='img-container'>
                            <img src={img} alt={title} />
                        </div>
                        <div className='text-container'>
                            <div className='title-head'>
                                <div className='head'>{title}</div>
                                <div className='price'>${price}</div>
                            </div>
                            <div className='info'>
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                )

            })}
          
        </div>
    )
};

export default Menu;