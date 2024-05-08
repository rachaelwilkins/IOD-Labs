import SingleCat from './SingleCat';

function BigCats() {
    
    const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { name: 'Cougar', latinName: 'Puma concolor' },
    { name: 'Jaguar', latinName: 'Panthera onca' },
    { name: 'Leopard', latinName: 'Panthera pardus' },
    { name: 'Lion', latinName: 'Panthera leo' },
    { name: 'Snow Leopard', latinName: 'Panthera uncia' },
    { name: 'Tiger', latinName: 'Panthera tigris' },
   ];
   
    const catItems = cats.map(cat => (
        <SingleCat
            key={cat.latinName}
            name={cat.name}
        />
    ))

    return (
        <div className="BigCats componentBox">
            <ul>
                {catItems}
            </ul>
        </div>
    )
}   

export default BigCats;