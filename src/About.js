import React from 'react';
import IconButton from 'material-ui/IconButton';

export class About extends React.Component {
    render() {
        return <div className = "About" > < p > ©2017 Twitter <
            a target = "_blank" > About < /a> <
        a target = "_blank" > Help Center < /a> <
        a target = "_blank" > Terms < /a> <
        a target = "_blank" > Privacy policy < /a> <
        a target = "_blank" > Cookies < /a> <
        a target = "_blank" > Ads info < /a> <
        a target = "_blank" > Brand < /a>  <
        a target = "_blank" > Blog < /a> <
        a target = "_blank" > Status < /a> <
        a target = "_blank" > Apps < /a> <
        a target = "_blank" > Jobs < /a> <
        a target = "_blank" > Marketing < /a> <
        a target = "_blank" > Businesses < /a> <
        a target = "_blank" > Developers < /a><br/ > < br / > < hr / >
            <
            IconButton tooltip = "Advertise with Twitter"
        tooltipPosition = "top-center" > < svg
        xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" / > < /svg>								 < /IconButton > <
            a target = "_blank" > Advertise with Twitter < /a> < /
        p >


            <
            /div>
    }
}