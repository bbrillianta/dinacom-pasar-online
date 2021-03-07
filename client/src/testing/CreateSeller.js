import React, { useState } from 'react';

const CreateSeller = () => {
    const [inputs, setInputs] = useState({});
    const sellerImg = React.createRef();

    //Update state saat pengisian input fields
    const handleInputs = (e) => {
        const key = e.target.name;
        setInputs({...inputs, [key]: e.target.value });
    }

    const handleForm = () => {
        const form = new FormData();
        form.append('img', sellerImg.current.files[0]);
        form.append('name', inputs.name);

        return form;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = handleForm();  

        fetch('http://localhost:3001/seller/create', {
            method: 'POST',
            body: form
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    return (
        <div>
            <form className="d-flex flex-column" method="POST" onSubmit={ handleSubmit } encType="multipart/form-data">
                <input onChange={ handleInputs } type="text" name="name" placeholder="Nama penjual"></input>
                <input ref={sellerImg} type="file" name="img"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default CreateSeller;