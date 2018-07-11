import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import withForm from '../hoc/withForm';

const BookShielfForm = ({ initialData, onChange, errors, onSubmit }) => {
	const { author, title, year } = initialData;
	return (
		<Form onSubmit={onSubmit}>
			<Form.Field>
				<label>Author</label>
				<input name="author" value={author} placeholder="Author" onChange={onChange} />
			</Form.Field>
			<Form.Field>
				<label>Title</label>
				<input name="title" value={title} placeholder="Title" onChange={onChange} />
			</Form.Field>
			<Form.Field>
				<label>Year</label>
				<input name="year" value={year} placeholder="Year" onChange={onChange} />
			</Form.Field>
			<Button color="green">Submit</Button>
		</Form>
	);
};

export default withForm(BookShielfForm);
