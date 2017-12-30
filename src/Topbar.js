import React from 'react';
import { AccountSetting } from './AccountSetting';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

export class Topbar extends React.Component {
    render() {
        return <div className = "menu" > < div >
            <
            a href = "/" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 18" > < path d = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" / > < /svg>								 Home < /a > <
            a href = "/" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 18" > < path d = "M7 2v11h3v9l7-12h-4l4-8z" / > < /svg>								 Moments < /a > <
            a href = "/" > < svg width = "24"
        height = "24"
        viewBox = "0 0 24 18"
        xmlns = "http://www.w3.org/2000/svg" > < path d = "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" / > < /svg>								Notifications < /a > <
            a href = "/" > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 18" > < path d = "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" / > < /svg>								 Messages < /a >
            <
            a > <
            img id = "twitter"
        src = "https://png.icons8.com/color/26/000000/twitter.png"
        height = "50%" / > < /a> <
        input id = "searchtwitter"
        type = "text"
        placeholder = "Search Twitter" / > < AccountSetting / >
            <
            div className = "tweet" >
            <
            RaisedButton label = "Tweet"
        primary = { true }
        style = { style }
        /> < /
        div > < /
        div >
            <
            /
        div >

    }
}