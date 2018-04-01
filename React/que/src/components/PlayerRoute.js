import React from 'react';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import '../common.css'

class PlayerRoute extends React.Component {
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

export default PlayerRoute;
