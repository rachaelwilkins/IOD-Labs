import { useState } from "react";
import SingleCat from './SingleCat'
import AddCatForm from "./AddCatForm";
const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '../../CatImages/cheetah.png' },
    { name: 'Jaguar', latinName: 'Panthera onca', image: '../../CatImages/jaguar.png' },
    { name: 'Leopard', latinName: 'Panthera pardus', image: '../../CatImages/leopard.png' },
    { name: 'Lion', latinName: 'Panthera leo', image: '../../CatImages/lion.png' },
    { name: 'Snow Leopard', latinName: 'Panthera uncia', image: '../../CatImages/snow leopard.png' },
    { name: 'Cougar', latinName: 'Puma concolor', image: '../../CatImages/cougar.png' },
    { name: 'Tiger', latinName: 'Panthera tigris', image: '../../CatImages/tiger.png' },
   ];

function BigCats() {
    const [currentCats, setCurrentCats] = useState(cats);
       
    const catItems = currentCats.map(cat => (
        <SingleCat
            latinName={cat.latinName}
            name={cat.name}
            image={cat.image}/>
    ))

    const handleSortCats = () => { 
        let newCats = [...cats];
        newCats.sort(); 
        setCurrentCats(newCats); 
        console.log(newCats);
        }
    
    const handleReverseCats = () => { 
        let newCats = [...cats];
        newCats.reverse(); 
        setCurrentCats(newCats); 
        console.log(newCats);
        }       
        
    const handleFilterCats = () => { 
        let newCats = [...cats];
        let filteredCats = cats.filter(cat=>cat.latinName.startsWith("Panthera"));
        console.log(filteredCats);
        setCurrentCats(filteredCats); 
        }     

    return (
        <div className="BigCats componentBox">
            <h1>Exercises 2, 4 and 5 - Big Cats</h1>
                <button onClick={handleSortCats}>Sort A-Z</button>
                <button onClick={handleReverseCats}>Sort Z-A</button>
                <button onClick={handleFilterCats}>Panthera Only</button>
                <button onClick="formReset()">Reset</button>
                    <ul>
                        {catItems}
                    </ul>
            <AddCatForm addCat={setCurrentCats} cats={currentCats}/>       
        </div>
    )
}   

export default BigCats;