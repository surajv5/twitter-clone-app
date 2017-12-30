import React from 'react';
import { MobileTearSheet } from './MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
    marginTop: 40,
    marginRight: 90,
};

export class WhoToFollow extends React.Component {
        render() {
                return <MobileTearSheet >
                    <
                    List >
                    <
                    Subheader > < span id = "text" > Who to follow. < /span>refresh.view all < /Subheader > <
                    ListItem
                primaryText = "Ben Affleck"
                leftAvatar = { < Avatar src = "https://pbs.twimg.com/profile_images/3782523511/fc6c9a4523187aaf21d31c354f3a5638_400x400.jpeg" / > }
                rightIcon = { <
                        RaisedButton label = "follow"
                        primary = { true }
                        style = { style }
                        /> } / >
                        <
                        ListItem
                        primaryText = "9GAG"
                        leftAvatar = { < Avatar src = "https://pbs.twimg.com/profile_images/852355177260621824/UsIvWpWX_400x400.jpg" / > }
                        rightIcon = { <
                            RaisedButton label = "follow"
                            primary = { true }
                            style = { style }
                            />
                        }
                        / > <
                        ListItem
                        primaryText = "sarcasm"
                        leftAvatar = { < Avatar src = "https://pbs.twimg.com/profile_images/892950334510833664/gE7wharM_400x400.jpg" / > }
                        rightIcon = { < RaisedButton label = "follow"
                            primary = { true }
                            style = { style }
                            /> } / >
                            <
                            ListItem
                            primaryText = "Sunburn Festival"
                            leftAvatar = { < Avatar src = "https://pbs.twimg.com/profile_images/378800000762901606/6a5ad0c46fa78a98157a0faa1e8815ac_400x400.jpeg" / > }
                            rightIcon = { < RaisedButton label = "follow"
                                primary = { true }
                                style = { style }
                                /> }  / >
                                <
                                ListItem
                                primaryText = "Coldplay"
                                leftAvatar = { < Avatar src = "https://pbs.twimg.com/profile_images/876385108961497088/eQL7OlX3_400x400.jpg" / > }
                                rightIcon = { < RaisedButton label = "follow"
                                    primary = { true }
                                    style = { style }
                                    /> } / >

                                    <
                                    /
                                    List >

                                    <
                                    /MobileTearSheet>
                                }
                            }