function SingleCat({ name, image, latinName }) {
    console.log(name);
    let catImage = '';

    switch (name) {
        case 'Cheetah':
            catImage = 'https://en.wikipedia.org/wiki/Cheetah#/media/File:Cheetah_at_Working_with_Wildlife.jpg';

        case 'Cougar':
            catImage = '../../CatImages/cougar.png';

        case 'Jaguar':
            catImage = '../../CatImages/jaguar.png';

        case 'Leopard':
            catImage = '../../CatImages/leopard.png';

        case 'Lion':
            catImage = '../../CatImages/lion.png';

        case 'Snow leopard':
            catImage = '../../CatImages/snow leopard.png';

        case 'Tiger':
            catImage = '../../CatImages/tiger.png';
    }

    return (
        <li>
            <h2>
                {name} ({latinName})
            </h2>
            <div>
                <img src={image} alt={`Photo of a ${name}`} />
            </div>
        </li>
    )
}

export default SingleCat;