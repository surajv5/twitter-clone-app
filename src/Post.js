import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

export class Post extends React.Component {
    render() {
        return <Card className = "profile" >

            <
            CardHeader
        title = "Mumbai Indians&nbsp;@mipaltal . 3m"
        subtitle = "Congratulations @krunalpandya24 & Pankhuri on beginning a new innings! We wish you lots of love 💙 & prosperity 🙌"
        avatar = "https://pbs.twimg.com/profile_images/866357971772731393/c66Dfil6_400x400.jpg" /
            >
            <
            div className = "media" >
            <
            CardMedia >
            <
            img src = "https://pbs.twimg.com/media/DSHG9mwUQAELiux.jpg"
        alt = "image" / >
            <
            /CardMedia>   <
        CardActions > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "18"
        height = "18"
        viewBox = "0 0 18 18" > < path d = "M17 3c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11.5l3.5 3V3z" / > < /svg>						</IconButton > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" / > < /svg>110								</IconButton >

            <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" / > < /svg>2.2k								< /IconButton > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" / > < /svg>								< /IconButton >

            <
            /CardActions></div > < hr / >

            <
            CardHeader
        title = "Riteish Deshmukh&nbsp; @Riteishd . 3h"
        subtitle = "Some pictures make you happy... this is one of them. 
        Wishing Sonia ji happiness and best of health.
        "
        avatar = "https://pbs.twimg.com/profile_images/935501079147630592/B6-7FIO8_400x400.jpg" /
            >
            <
            div className = "media" >
            <
            CardMedia >
            <
            img src = "https://pbs.twimg.com/media/DSGPG-RUEAAqGyO.jpg"
        alt = "image" / >
            <
            /CardMedia>   <
        CardActions > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "18"
        height = "18"
        viewBox = "0 0 18 18" > < path d = "M17 3c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11.5l3.5 3V3z" / > < /svg>						</IconButton > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" / > < /svg>110								</IconButton >

            <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" / > < /svg>2.2k								< /IconButton > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" / > < /svg>								< /IconButton >

            <
            /CardActions></div > < hr / >

            <
            CardHeader
        title = "Filmfare&nbsp;@filmfare . 4h"
        subtitle = ".@priyankachopra now wants to settle down and have kids. Read on to know more!"
        avatar = "https://pbs.twimg.com/profile_images/944165412706467841/i-vrYkQq_400x400.jpg" /
            >
            <
            div className = "media" >
            <
            CardMedia >
            <
            img src = "https://pbs.twimg.com/card_img/946025583376568320/2fRxqikJ?format=jpg&name=600x314"
        alt = "image" / >
            <
            /CardMedia>  <
        CardActions > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "18"
        height = "18"
        viewBox = "0 0 18 18" > < path d = "M17 3c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11.5l3.5 3V3z" / > < /svg>								</IconButton >
            <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" / > < /svg>								</IconButton >

            <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" / > < /svg>								< /IconButton > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" / > < /svg>								< /IconButton >

            <
            /CardActions></div > < hr / >

            <
            CardHeader
        title = "FC&nbsp;barcelona&nbsp;@FCbarcelona . 6h"
        subtitle = "🎉🎊Can't wait for 2018 to begin! 🎊🎉 "
        avatar = "https://pbs.twimg.com/profile_images/899584358041956353/LpYAYxjB_400x400.jpg" /
            >
            <
            div className = "media" >
            <
            CardMedia >
            <
            img src = "https://pbs.twimg.com/media/DSGcLKHVwAAChyE.jpg"
        alt = "image" / >
            <
            /CardMedia>  <
        CardActions > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "18"
        height = "18"
        viewBox = "0 0 18 18" > < path d = "M17 3c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11.5l3.5 3V3z" / > < /svg>								</IconButton >
            <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" / > < /svg>								</IconButton >

            <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" / > < /svg>								< /IconButton > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" / > < /svg>								< /IconButton >

            <
            /CardActions></div > < hr / >

            <
            CardHeader
        title = "Yogendra Yadav&nbsp;@_YogendraYadav . 7h
        "
        subtitle = "Finally, Akhil Gogoi released today, defying many attempts by Assam Govt to keep him in jail despite HC order quashing use of NSA against him. 
        Satyamev Jayate!"
        avatar = "https://pbs.twimg.com/profile_images/899587907861626880/y26CFiyr_400x400.jpg" /
            >
            <
            div className = "media" >
            <
            CardMedia >
            <
            img src = "https://pbs.twimg.com/media/DSDkpguU8AERF2P.jpg"
        alt = "image" / >
            <
            /CardMedia> <
        CardActions > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "18"
        height = "18"
        viewBox = "0 0 18 18" > < path d = "M17 3c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11.5l3.5 3V3z" / > < /svg>								</IconButton >
            <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" / > < /svg>								</IconButton >

            <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" / > < /svg>								< /IconButton > <
            IconButton > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" > < path d = "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" / > < /svg>								< /IconButton >

            <
            /CardActions></div >

            <
            /
        Card >
    }
}