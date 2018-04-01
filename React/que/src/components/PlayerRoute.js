import React from 'react';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import * as playerActions from '../actions/player';

import '../common.css'

class PlayerRoute extends React.Component {

    componentDidMount() {
        if (this.props.groupId === null) {
            alert('Group has not been selected');
            return;
        }

        if (this.props.queue.length === 0) {
            this.props.fetchQueue(this.props.groupId);
        }
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={4}>
                    <Paper className="panel">
                        Panel Here
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className="panel">
                        Video here
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    groupId: state.group.id,
    queue: state.player.queue,
    currentSong: state.player.currentSong,
});

const mapDispatchToProps = (dispatch) => ({
    fetchQueue: (groupId) => dispatch(playerActions.fetchQueue(groupId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlayerRoute);
