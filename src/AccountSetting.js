import React from 'react';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

export class AccountSetting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleClick = (event) => {

        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return ( <
            div className = "AccountSetting" >
            <
            IconButton onClick = { this.handleClick }
            label = "Setting" >
            <
            svg xmlns = "http://www.w3.org/2000/svg"
            width = "42"
            height = "42"
            viewBox = "0 0 18 18" > < path d = "M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z" / > < /svg>								 < /
            IconButton > <
            Popover open = { this.state.open }
            anchorEl = { this.state.anchorEl }
            anchorOrigin = {
                { horizontal: 'left', vertical: 'bottom' }
            }
            targetOrigin = {
                { horizontal: 'left', vertical: 'top' }
            }
            onRequestClose = { this.handleRequestClose } >
            <
            Menu >
            <
            MenuItem primaryText = "Suraj Vishwakarma" / >
            <
            MenuItem primaryText = "Profile" / >
            <
            MenuItem primaryText = "Lists" / >
            <
            MenuItem primaryText = "Moments" / >
            <
            MenuItem primaryText = "Twitter Ads" / >
            <
            MenuItem primaryText = "Analytics" / >
            <
            MenuItem primaryText = "Setting and Privacy" / >
            <
            MenuItem primaryText = "Help Center" / >
            <
            MenuItem primaryText = "Keyboard Shortcuts" / >
            <
            MenuItem primaryText = "Log out" / >
            <
            MenuItem primaryText = "Night mode" / >

            <
            /Menu> < /
            Popover > <
            /div>
        );
    }
}