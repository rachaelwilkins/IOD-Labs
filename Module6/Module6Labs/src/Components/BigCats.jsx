import SingleCat from './SingleCat';

function BigCats() {
    
    const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '../../CatImages/cheetah.png' },
    { name: 'Cougar', latinName: 'Puma concolor', image: '../../CatImages/cougar.png' },
    { name: 'Jaguar', latinName: 'Panthera onca', image: '../../CatImages/jaguar.png' },
    { name: 'Leopard', latinName: 'Panthera pardus', image: '../../CatImages/leopard.png' },
    { name: 'Lion', latinName: 'Panthera leo', image: '../../CatImages/lion.png' },
    { name: 'Snow Leopard', latinName: 'Panthera uncia', image: '../../CatImages/snow leopard.png' },
    { name: 'Tiger', latinName: 'Panthera tigris', image: '../../CatImages/tiger.png' },
   ];
   
    const catItems = cats.map(cat => (
        <SingleCat
            latinName={cat.latinName}
            name={cat.name}
            image={cat.image}/>
    ))

    const handleSortCats = () => { 
        let newCats = [...cats];
        newCats.sort(); 
        setCurrentCats(newCats); 
        }
    
    const handleReverseCats = () => { 
        let newCats = [...cats];
        newCats.reverse(); 
        setCurrentCats(newCats); 
        }       
        
    const handleFilterCats = () => { 
        let result = text.startsWith("Panthera");
        document.getElementById().innerHTML = result;
        }     

    return (
        <div className="BigCats componentBox">
            <h2>Exercises 2, 4 and 5 - Big Cats</h2>
                <button onClick={handleSortCats}>Sort A-Z</button>
                <button onClick={handleReverseCats}>Sort Z-A</button>
                <button onClick={handleFilterCats}>Panthera Only</button>
                <button onClick="formReset()">Reset</button>
                    <ul>
                        {catItems}
                    </ul>
        </div>
    )
}   

export default BigCats;