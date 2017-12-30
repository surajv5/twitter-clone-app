import React from 'react';
import IconButton from 'material-ui/IconButton';

export class Profile extends React.Component {
    render() {
        return <div className = "container" >
            <
            div className = "first" > < div className = "pic" > < IconButton > < img id = "pic"
        src = "https://wallpapercave.com/wp/zBmEUTj.jpg"
        alt = "wolverine"
        height = "68"
        width = "68" / > < /IconButton></div > < /div> <
        div className = "second" > < div className = "name" >
            <
            b > Suraj Vishwakarma < /b>@SurajVi69804532 </div > < /div > <
        table >
            <
            tr >
            <
            th > Tweets < /th> <
        th > Following < /th> <
        th > Followers < /th> < /
            tr >
            <
            tr id = "number" >
            <
            td > 0 < /td> <
            td > 120 < /td> <
            td > 1 < /td> <
            /tr> <
            /table> < /
            div >
    }
}