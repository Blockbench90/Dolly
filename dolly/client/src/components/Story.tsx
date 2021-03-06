import React from "react";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import {Avatar, IconButton, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/RateReview";
import RepostIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SheareIcon from "@material-ui/icons/OpenInBrowserOutlined";
import Paper from "@material-ui/core/Paper";
import {useHomeStyles} from "../pages/Home";

interface StoryProps {
    text: string,
    classes: ReturnType<typeof useHomeStyles>
    user: {
        fullName: string,
        userName: string,
        avatarUrl: string
    }
}

export const Story: React.FC<StoryProps> = ({text, user, classes}: StoryProps): React.ReactElement => {
    return (<Paper variant="outlined" className={classNames(classes.story, classes.storyHeader)}>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar className={classes.storyAvatar} alt={`Аватарка пользователя ${user.fullName}`} src={user.avatarUrl}/>
                </Grid>
                <Grid item xs={11}>
                    <Typography><b>{user.fullName}</b>&nbsp;
                        <span className={classes.storyUserName}>@{user.userName}</span>&nbsp;
                        <span className={classes.storyUserName}>.</span>&nbsp;
                        <span className={classes.storyUserName}>1 ч</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.storyFooter}>
                        <div>
                            <IconButton color='primary'>
                                <CommentIcon style={{fontSize: 20}}/>
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <RepostIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <LikeIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <SheareIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

