import React, { Component } from "react";
import axios from 'axios'
import RecipesCards from "./hooks/CardsNewRecipes.js";

class AddNewRecipe extends Component {
    constructor() {
        super()
        this.state = {
            Cuisines: 'African',
            Diet: 'Gluten Free',
            Intolerances: 'Dairy',
            Types: 'main Course',
            Data: ''
        }
    }
    handleChange = event => {
        if (event.target.id === 'Cuisines') {
            this.setState({
                Cuisines: event.target.value
            })
        } else if (event.target.id === 'Diet') {
            this.setState({
                Diet: event.target.value
            })
        } else if (event.target.id === 'Intolerances') {
            this.setState({
                Intolerances: event.target.value
            })
        } else if (event.target.id === 'Types') {
            this.setState({
                Types: event.target.value
            })
        }
    }
    handleSubmit = event => {
        event.preventDefault()
        const { Cuisines, Diet, Intolerances, Types} = this.state
        axios
            .get(`http://localhost:3001/getRecipes?cuisine=${Cuisines}&diet=${Diet}&intolerances=${Intolerances}&type=${Types}`)
            .then(res => {
                console.log(res.data[0])
                this.setState({
                    Data: res.data[0]
                })
            })
            .catch(err => {
                console.log(err)
            })


    }
    render() {
        return (
            <div className="newRecipe">
                
                <form className="d-flex flex-column" id='form' onSubmit={this.handleSubmit}>
                    <label htmlFor="Cuisines">-Which uisine eat today?</label>
                    <select className="" name="Cuisines" id="Cuisines" value={this.state.Cuisines} onChange={this.handleChange}>
                        <option value=''>do not specify</option>
                        <option value="African">African</option>
                        <option value="American">American</option>
                        <option value="British">British</option>
                        <option value="Cajun">Cajun</option>
                        <option value="Caribbean">Caribbean</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Eastern European">Eastern European</option>
                        <option value="European">European</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Greek">Greek</option>
                        <option value="Indian">Indian</option>
                        <option value="Irish">Irish</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Jewish">Jewish</option>
                        <option value="Korean">Korean</option>
                        <option value="Latin American">Latin American</option>
                        <option value="Mediterranean">Mediterranean</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Middle Eastern">Middle Eastern</option>
                        <option value="Nordic">Nordic</option>
                        <option value="Southern">Southern</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Thai">Thai</option>
                        <option value="Vietnamese">Vietnamese</option>
                    </select><br /><br />
                    <label htmlFor='Diet'>-Do you have any specific diet?</label>
                    <select name='Diet' id='Diet' value={this.state.Diet} onChange={this.handleChange}>
                        <option value=''>do not specify</option>
                        <option value="Gluten Free">Gluten Free</option>
                        <option value="Ketogenic">Ketogenic</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                        <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Pescetarian">Pescetarian</option>
                        <option value="Paleo">Paleo</option>
                        <option value="Primal">Primal</option>
                        <option value="Low FODMAP">Low FODMAP</option>
                        <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                        <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Whole30">Whole30</option>
                    </select><br /><br />
                    <label htmlFor='Intolerances'>-Do you have any Intolerances?</label>
                    <select name='Intolerances' id='Intolerances' value={this.state.Intolerances} onChange={this.handleChange}>
                        <option value=''>do not specify</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Egg">Egg</option>
                        <option value="Gluten">Gluten</option>
                        <option value="Grain">Grain</option>
                        <option value="Peanut">Peanut</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Sesame">Sesame</option>
                        <option value="Shellfish">Shellfish</option>
                        <option value="Soy">Soy</option>
                        <option value="Sulfite">Sulfite</option>
                        <option value="Tree Nut">Tree Nut</option>
                        <option value="Wheat">Wheat</option>
                    </select><br /><br />
                    <label htmlFor='Types'>-Wich meal type you wanna see?</label>
                    <select name='Types' id='Types' value={this.state.Types} onChange={this.handleChange}>
                        <option value=''>Do not specify</option>
                        <option value="main course">Main course</option>
                        <option value="side dish">Side dish</option>
                        <option value="dessert">Dessert</option>
                        <option value="appetizer">Appetizer</option>
                        <option value="salad">Salad</option>
                        <option value="bread">Bread</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="soup">Soup</option>
                        <option value="sauce">Sauce</option>
                        <option value="marinade">Marinade</option>
                        <option value="fingerfood">Fingerfood</option>
                        <option value="snack">Snack</option>
                        <option value="drink">Drink</option>
                    </select><br /><br />
                    <button className="btn btn-primary mt-2" variant="primary" type="submit">See the recipes we find for you</button>
                </form>
                <RecipesCards data={this.state.Data[0]}/>
            </div>

        )
    }

}
export default AddNewRecipe