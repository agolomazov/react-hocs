import React from 'react';

export default function withForm(Component) {
	class WithForm extends React.Component {
		constructor(props) {
			super(props);
			this.state = { ...props.initialData };
		}

		onChange = event => {
			this.setState({
				[event.currentTarget.name]: event.currentTarget.value,
			});
		};

		onSubmit = event => {
			event.preventDefault();
			if (this.props.onSubmit) {
				this.props.onSubmit(this.state);
			}
		};

		render() {
			return (
				<Component {...this.props} initialData={this.state} onSubmit={this.onSubmit} onChange={this.onChange} />
			);
		}
	}

	WithForm.displayName = `withForm(${Component.displayName || Component.name || 'Component'})`;
	return WithForm;
}
