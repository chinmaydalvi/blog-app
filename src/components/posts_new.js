import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
	renderField(field){
		return(
			<div className="form-group">
				<label>{field.label}</label>
				<input
				  className="form-control"
				  type="text"
				  {...field.input}
				/>
				{field.meta.error}
			</div>
		)
	}

	render(){
		return(
			<form onSubmit={}>
				<Field
					label="Title"
					name="title"
					component={this.renderField}
				/>

				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>

				<button type="submit" className="btn btn-primary" submit</button>
			</form>
		)
	}
}

function validate(values) {
	// body...

	const error = {};

	if(values.title.length > 3){
		error.title = "Title can not be blank";
	}
	if(values.title == ""){
		error.title = "Title can not be blank";
	}

	if(values.categories ==""){
		error.values="Categories can not be blank";
	}

	if(values.content == ""){
		error.content = "Content can not be blank";
	}

	return error;
}

// reduxForm is helper which gives you an ability to connect 
//the compoenent to the reucer of the form
export default reduxForm({ 
	validate: validate,
	form: 'PostsNewForm' // name of the form which should be unique in project
})(PostsNew)