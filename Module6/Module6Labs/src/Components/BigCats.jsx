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
            image={cat.image}
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