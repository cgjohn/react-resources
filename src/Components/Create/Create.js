import React, { Component } from 'react';

class Create extends Component {

  state = {
    inputContent: "",
  }

  handleInput = (event) => {
    this.setState({
      inputContent: event.target.value,
    })
  }


  handleCategorySubmit = (e) => {
    console.log(e)
    if(e.charCode === 13 || !e.charCode){
      this.props.addCategory(this.state.inputContent);

      this.setState({
        inputContent: '',
      })
    }
  }

  render() {

    return (
      <div>
        <input 
              className="inputBox"
              placeholder="Add A URL" 
              value={this.state.inputContent}
              onChange={this.handleInput}
              onKeyPress={this.handleCategorySubmit}/>

            <button 
              onClick={this.handleCategorySubmit}>
              Create category
            </button>
      </div>
    );
  }
}

export default Create;
