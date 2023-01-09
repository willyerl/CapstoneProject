import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            recipe: '',
            ingrediente: '',
            selectedFile: '',
            selectedPath: '',
            image: '',
            name:''

        }
    }

    handleChange = event => {


        if (event.target.type === 'file') {
            this.setState({
                selectedFile: event.target.files[0],
            })
        }
        else if (event.target.id === 'typeTitleX-2') {
            this.setState({
                title: event.target.value,
            })
        }
        else if(event.target.id === 'typeNameX-2') {
            this.setState({
                name: event.target.value,
            })
        }
        else if (event.target.id === 'typeRecipeX-2') {
            this.setState({
                recipe: event.target.value,
            })
        }
        else {
            this.setState({
                ingrediente: event.target.value
            })
        }

    }

    handleUpload = () => {
        console.log()
        const data = new FormData()
        data.append('file', this.state.selectedFile, this.state.selectedFile.name)
        this.setState({
            selectedPath: this.state.selectedFile.name
        })
        console.log(this.state.selectedFile.name)
        
    axios
      .post('http://localhost:3001/upload', data, {
        onUploadProgress: ProgressEvent => {

        },
      })
      .then(res => {
            console.log(res.statusText)
        })
      axios
      .post(`http://localhost:3001/newRecipe?user=${this.state.name}&title=${this.state.title}&recipe=${this.state.recipe}&ingrediente=${this.state.ingrediente}&imagePath=${this.state.selectedFile.name}`)
      .then(res => {
        console.log(res.statusText)
    })
    
    this.setState({
        ingrediente: ''
    })
    this.setState({
        recipe: ''
    })
    this.setState({
        selectedFile: ''
    })
    this.setState({
        title: ' '
    })
    this.setState({
        name: ''
    })
 }


render() {
    const { title, recipe, ingrediente, selectedFile, name } = this.state
    return (

        <div className="App">
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="typeTitleX-2">
                    Title for your recipe:</label><br></br>
                <input type='text' id="typeTitleX-2"
                    value={title}
                    onChange={this.handleChange} />

            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="typeNameX-2">
                    Here the name of the autor:</label><br></br>
                <input type='textarea' id="typeNameX-2"
                    value={name}
                    onChange={this.handleChange} />

            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="typeRecipeX-2">Give some details about your recipe</label>
                <textarea type="text" id="typeRecipeX-2" className="form-control form-control-lg"   
                    value={recipe}
                    onChange={this.handleChange} />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="typeIngredientesX-2">Give some details about your recipe</label>
                <textarea type="text" id="typeIngredientesX-2" className="form-control form-control-lg " rows="3"
                    value={ingrediente}
                    onChange={this.handleChange} />
            </div>
            {this.state.image}

            <input type="file" className="" id="" file={selectedFile}
                onChange={this.handleChange} />
            <button onClick={this.handleUpload}>Upload</button>

        </div>
    )
}
}

export default App;
