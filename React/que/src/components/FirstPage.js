import React from 'react';
import '../common.css';
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

class FrontPage extends React.Component {
    render() {
        return (
            <Grid
                container
                justify="center"
                className="container"
            >
                <TextField
                    id="groupId"
                    placeholder="Enter group ID"
                />
                <Button id="enter">
                    Go!
                </Button>
            </Grid>
        );
    }
}

export default FrontPage;
