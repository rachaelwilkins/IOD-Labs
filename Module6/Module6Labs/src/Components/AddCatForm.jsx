import { useState } from "react"
    
function AddCatForm({addCat, cats}) {
    
    const [name, setName] = useState('')
    const [latinName, setLatinName] = useState('')
    const [image, setImage] = useState('')    

    const handleSubmit = (e) => {
        e.preventDefault();
        addCat([...cats,{name, latinName, image}])
        console.log(image);
        //onAddCat({name, latinName, image})
    }

return (
    <div className="AddCatForm componentBox">
        <form onSubmit={handleSubmit}>
            <label>Name: 
                <input name="name" value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>Latin Name: 
                <input name="latinName" value={latinName}
                    onChange={(e) => setLatinName(e.target.value)}/>
            </label>   
            <label>   
            <p>Image:</p> 
                <input name="file" input type="file" value={image}
                    onChange={(e) => setImage(e.target.value)}/>
            </label>           
            <button>Add Cat</button>         
        </form>
    </div>
)

}

export default AddCatForm