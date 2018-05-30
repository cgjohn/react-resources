import React, { Component } from 'react';
import './Resources.css';
import Create from '../../Components/Create/Create';
import Category from '../../Components/Category/Category';
import plusIcon from '../../assets/images/Plus.png'

import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      categories: [],
      addCategory: false
    }
  }

  componentDidMount() {
  	this.handleLoadData()
  }

	
  handleLoadData = (props) => {
  	axios.get('https://my-resources-f3803.firebaseio.com/categories.json')
		.then(resp => {
			console.log(resp.data, ' - resp.data')
			let loadedCategories = null
			if(resp.data) {
				loadedCategories = Object.keys(resp.data).map(function(key) {
				  return resp.data[key]
				});
			}
			console.log(loadedCategories)
			this.setState({categories: loadedCategories})
		})
  }  

  handleInput = (event) => {
    this.setState({
      inputContent: event.target.value,
    })
  }

  handleCategorySubmit = (input) => {
    const category = {
    	title: input,
    	items: [
    		{
    			link: 'www.google.com',
    			description: 'Icon resource'
    		},
    		{
    			link: 'www.google.com',
    			description: 'item 2'
    		}
    	]
    }

	axios.post('https://my-resources-f3803.firebaseio.com/categories.json', category)
		.then(resp => {
			this.handleLoadData()
		})
  }


  render() {
    let categories = null;

    if(this.state.categories){

    	categories = this.state.categories.map((category, index) => 
	        // console.log(category, " ", index)
	        (<div key={index} className='category'>
	        	<Category 
	        		title={category.title} 
	        		items={category.items}/>
	        </div>)
	    )
    }

    let addCat = (
        <img className="plusIcon" 
          src={plusIcon}
          alt='plus' 
          onKeyPress={() => this.handleKeyPress}
          onClick={() => this.setState({addCategory: true})}/>
      )

    if(this.state.addCategory){
      addCat = (
        <Create addCategory={this.handleCategorySubmit}  />
      )
    }
   
    return (
      <div className="container">
        <div className="itemContainer">
          { categories }
        </div>
        <div className="inputContainer">
          {addCat}
        </div>
      </div>
    );
  }
}

export default App;
