import React from 'react';
import { Post } from './Post';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Topbar } from './Topbar';
import { WhoToFollow } from './WhoToFollow';
import { SearchBar } from './SearchBar';
import { About } from './About';
import { Trends } from './Trends';
import { Profile } from './Profile';




class App extends React.Component {
    render() {
        return <MuiThemeProvider > < Topbar / > < SearchBar / > < div >
            <
            Post / > < /div> <div className="follow">< WhoToFollow/ > < / div ><About/ > < Trends / > < Profile / > < /
        MuiThemeProvider >


    }
}

export default App