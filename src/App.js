import React, { Component } from 'react';
import './App.css';
import BookShielfForm from './components/BookShielfForm';
import withHandlers from './hoc/withHandlers';

const enhancer = withHandlers({
	onFuck: props => message => console.log('smack my bitch up!', message),
	onEvent: props => () => console.log('event to click form', props),
});

class App extends Component {
	state = {
		author: '',
		title: '',
		year: '',
		description: '',
	};

	onChange = event => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	render() {
		return (
			<div className="App" onClick={this.props.onEvent}>
				<BookShielfForm initialData={this.state} onSubmit={data => this.props.onFuck(data)} />
			</div>
		);
	}
}

export default enhancer(App);
