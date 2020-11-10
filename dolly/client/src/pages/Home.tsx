import React from 'react'
import {createStyles, makeStyles, withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import {Avatar, Container, IconButton, InputAdornment, InputBase, Typography} from "@material-ui/core";
import gray from '@material-ui/core/colors/grey';

const useHomeStyles = makeStyles(() => ({
    wrapper: {
        height: '100vh'
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center'
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 42
    },
    sideMenuListItemIcon: {
        fontSize: 35
    },
    storyWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0'
    },
    storyHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: '0',
        padding: '10px 15px',
        '& h6': {
          fontWeight: 800
        },
    },
    storyUserName: {
        color: gray[500]
    }
}))
const SearchTextField = withStyles(() =>
   createStyles({
       input: {
           borderRadius: 30,
           backgroundColor: '#E6ECF0',
           height: 40,
           padding: 0
       }
                })
)(InputBase);

const Home = () => {
const classes = useHomeStyles()
    return (
        <Container maxWidth="lg" className={classes.wrapper}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton className={classes.logo} color="primary" aria-label="add an alarm">
                                <ColorLensIcon className={classes.logoIcon}/>
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="add an alarm">
                                <SearchOutlinedIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>Поиск</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="add an alarm">
                                <NotificationsActiveOutlinedIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>Уведомления</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="add an alarm">
                                <ChatBubbleOutlineOutlinedIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>Сообщения</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="add an alarm">
                                <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>Закладки</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="add an alarm">
                                <ListOutlinedIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>Список</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="add an alarm">
                                <PermIdentityOutlinedIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>Профиль</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.storyWrapper} variant="outlined">
                        <Paper variant="outlined" className={classes.storyHeader}>
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                        <Paper variant="outlined" className={classes.storyHeader}>
                            <Grid container spacing={3}>
                                <Grid item xs={1}>
                                    <Avatar alt="Avatar" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography><b>ivan</b> <span className={classes.storyUserName}>test.prog@rockyboy</span></Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Only the main shades need be provided (unless you wish to further customize light,
                                        dark or contrastText), as the other colors will be calculated by createMuiTheme(),
                                        as described in the Theme customization section.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField
                        placeholder="Поиск по рассказам"
                        inputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon/>
                            </InputAdornment>
                        )
                    }} fullWidth />
                </Grid>
            </Grid>
        </Container>
    )
}
export default Home