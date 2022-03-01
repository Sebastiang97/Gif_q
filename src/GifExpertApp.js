import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['Evangelion', 'Shingeki No Kiojin', 'Gintama' ];

    const [categories, setCategories] = useState(['Gintama']);

    /*const handleAdd = () => {
        //setCategories(categories => [...categories, "Gintama The Final" ]);
        setCategories([...categories, "Gintama The Final"]);
    }*/
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {
                    categories.map(category => (
                            <GifGrid 
                                key={category}
                                category={category}
                            />
                        )
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp