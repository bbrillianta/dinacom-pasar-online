import React, { useEffect, useState } from 'react';

const CreateProducts = () => {
    const [sellers, setSellers] = useState([]);
    const [inputs, setInputs] = useState({});
    const prodImg = React.createRef();

    useEffect(() => {
        fetch('http://localhost:3001/seller')
        .then(response => response.json())
        .then(data => {
            const { foundDocs } = data;
            setInputs({ seller: foundDocs[0]._id });
            setSellers(data.foundDocs);
        });
    }, [setSellers, setInputs]);

    //Update state saat pengisian input fields
    const handleInputs = (e) => {
        const key = e.target.name;
        setInputs({...inputs, [key]: e.target.value });
    }


    const handleForm = () => {
        const form = new FormData();
        form.append('img', prodImg.current.files[0]);
        form.append('name', inputs.name);
        form.append('price', inputs.price);
        form.append('seller', inputs.seller);
        form.append('minPrice', inputs.minPrice);
        form.append('stock', inputs.stock);

        return form;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //mengisi form request
        const form = handleForm();

        fetch('http://localhost:3001/product/create', {
            method: 'POST',
            body: form
        })
        .then(response => response.json())
        .then(data => console.log(data));
    } 

    return (
        <div>
            <form  className="d-flex flex-column" method="POST" onSubmit={ handleSubmit } encType="multipart/form-data">
                <select value={ inputs.seller } name="seller" onChange={ handleInputs }>
                    {
                        sellers.map((item, index) => 
                            <option key={ index } value={ item._id }>{ item.name }</option>
                        )
                    }
                </select>
                <input type="text" name="name" onChange={ handleInputs } placeholder="nama product"></input>
                <input type="number" name="price" onChange={ handleInputs } placeholder="harga product"></input>
                <input type="file" name="img" ref={prodImg}></input>
                <input type="number" name="minPrice" onChange={ handleInputs } placeholder="harga min tawaran"></input>
                <input type="number" name="stock" onChange={ handleInputs } placeholder="stock barang"></input>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    );
}

export default CreateProducts;