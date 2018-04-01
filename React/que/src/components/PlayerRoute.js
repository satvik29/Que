import React from 'react';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText } from 'material-ui/List';

import YouTube from 'react-youtube';
import searchYouTube from 'youtube-search-api-with-axios';

import * as playerActions from '../actions/player';
import * as youtubeActions from '../actions/youtube';

import '../common.css'

const API_KEY = "AIzaSyD2dgqvWD4BE3JtFAq3FEIVQpP0JoS_rHc";

class PlayerRoute extends React.Component {
    state = {
        isPlaying: false,
        youtubeVideo: null,
    }

    componentDidMount() {
        if (this.props.groupId === null) {
            alert('Group has not been selected');
            return;
        }

        if (this.props.queue.size === 0) {
            this.props.fetchQueue(this.props.groupId);
        }
    }

    componentWillReceiveProps(nextProps) {
        const queue = nextProps.queue.toArray();
        if (nextProps.queue.size > 0 && this.state.youtubeVideo === null) {
            const query = queue[0].query;
            // nextProps.fetchYoutube(query);
            searchYouTube({
                key: API_KEY,
                maxResults: 1,
                q: query,
            }, (videos) => {
                this.setState({youtubeVideo: videos[0].id.videoId});
            })
        }
    }

    _renderQueue = () => {
        return this.props.queue.toArray()
            .map((item, i) => (
                <ListItem key={item.query}>
                    <ListItemText primary={`${i + 1}. ${item.query}`} />
                </ListItem>
            ))
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <Grid container>
                <Grid item xs={4}>
                    <Paper className="panel">
                        <List component="nav">
                            {this._renderQueue()}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className="panel">
                        <YouTube
                            videoId={this.state.youtubeVideo}
                            opts={opts}
                        />
                    </Paper>
                </Grid>
            </Grid >
        );
    }
}

const mapStateToProps = (state) => ({
    groupId: state.group.id,
    queue: state.player.queue,
    currentSong: state.player.currentSong,
    youtube: state.youtube
});

const mapDispatchToProps = (dispatch) => ({
    fetchQueue: (groupId) => dispatch(playerActions.fetchQueue(groupId)),
    fetchYoutube: (query) => dispatch(youtubeActions.fetchYoutubeVideos(query))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlayerRoute);
