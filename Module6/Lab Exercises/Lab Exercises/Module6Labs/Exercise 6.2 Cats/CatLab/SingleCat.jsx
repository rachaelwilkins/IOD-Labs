function SingleCat({ name }) {
    let catImage = '';

    switch (name) {
        case 'Cheetah':
            catImage = '../CatImages/cheetah.png';

        case 'Cougar':
            catImage = '../CatImages/cougar.png';

        case 'Jaguar':
            catImage = '../CatImages/jaguar.png';

        case 'Leopard':
            catImage = '../CatImages/leopard.png';

        case 'Lion':
            catImage = '../CatImages/lion.png';

        case 'Snow leopard':
            catImage = '../CatImages/snow leopard.png';

        case 'Tiger':
            catImage = '../CatImages/tiger.png';
    }

    return (
        <li>
            <h1>
                {name}
            </h1>
            <div>
                <img src={catImage} alt={`Photo of a ${name}`} />
            </div>
        </li>
    )
}

export default SingleCat;