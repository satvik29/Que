import React from 'react';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import * as groupActions from '../actions/groups';

import '../common.css';

class FrontPage extends React.Component {
    state = {
        groupId: null,
    };

    _handleGroupIdChange = (value) => {
        this.setState({ groupId: value });
    }

    _handleSubmitClick = () => {
        if (this.state.groupId != null) {
            this.props.setGroupId(this.state.groupId);
        }
    }
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
                    onChange={this._handleGroupIdChange}
                />
                <Button id="enter" onClick={this._handleSubmitClick}>
                    Go!
                </Button>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    setGroupId: (groupId) => dispatch(groupActions.setGroupId(groupId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FrontPage);
