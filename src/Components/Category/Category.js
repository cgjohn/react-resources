import React, { Component } from 'react'


import Aux from '../../hoc/Aux/Aux'

class Category extends Component {
	
	state = {
		show: this.props.show
	}

	clickHandler =(props) => {
		this.setState((state) => ({ show: !state.show}))
	}


	render() {
		console.log(this.props.items)
		let items = null
		items = this.props.items.map((item, index) => {
			// console.log(item.link)
			const link = "http://" + item.link
			return (
				<div key={index}>
					<p>{item.description}</p>
					<p style={{display: 'block'}}><a target="_blank"  href={link}>{item.link}</a></p>
				</div>
			)
		})

		let displayedCategory = <Aux><h1 onClick={this.clickHandler}>{this.props.title}</h1></Aux>
		if(this.state.show){
			console.log('show')
			displayedCategory = (<Aux>
									<h4>{this.props.title}</h4>
									{ items }
								</Aux>)
							}
		
		return (
			<div >
				{ displayedCategory }
			</div>
			
		);
	}
}

export default Category;