function AddCatForm({onAddCat}) {
    const [name, setName] = useState('')
    const [latinName, setLatinName] = useState('')
    const [image, setImage] = useState('')    

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat({name, latinName, image})
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
            <p>Image:</p> 
                <input name="file" input type="file" value={image}
                    onChange={(e) => setImage(e.target.value)}/>
                    <button type="submit">Upload</button>
            </label>           
            <button>Add Cat</button>         
        </form>
    </div>
)

}

export default AddCatForm