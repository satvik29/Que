import React from 'react';
import '../App.css';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Center from 'react-center'

class FrontPage extends React.Component {
	render() {
		return (
		<Center>
			<div>
		     	<TextField id="groupId" placeholder="Enter group ID" />
		     	<Button id="enter"> 
		     		Go!
		     	</Button>
	     	</div>
     	</Center>
		);
	}
}

export default FrontPage;
