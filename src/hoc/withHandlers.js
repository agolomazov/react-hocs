import React from 'react';

export default function withHandlers(handlers) {
	return function(Component) {
		return class WithHandlers extends React.Component {
			handlers = Object.keys(handlers).reduce((acc, h) => {
				const handler = handlers[h];

				if (typeof handler !== 'function') {
					throw new Error('Handler should be a function');
				}

				acc[h] = handler(this.props);
				return acc;
			}, {});

			render() {
				return <Component {...this.props} {...this.handlers} />;
			}
		};
	};
}
