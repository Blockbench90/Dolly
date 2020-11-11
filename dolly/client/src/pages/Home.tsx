import React from 'react'
import {createStyles, makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Container, InputAdornment, InputBase, Typography} from "@material-ui/core";
import gray from '@material-ui/core/colors/grey';
import {Story} from "../components/Story";
import {SideMenu} from "../components/SideMenu";


export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: 'red'
                },
            },
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            left: -10,
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 10,
            transition: "background-color 0.15 ease-in-out"
        }
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
        fontSize: 35,
        marginLeft: -5
    },
    story: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)'
        }
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
        padding: '15px 15px',
        '& h6': {
            fontWeight: 800
        },
    },
    storyFooter: {
        display: 'flex',
        position: 'relative',
        left: -14,
        justifyContent: 'space-between',
        width: 450
    },
    storyUserName: {
        color: gray[500]
    },
    storyAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
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
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.storyWrapper} variant="outlined">
                        <Paper variant="outlined" className={classes.storyHeader}>
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                        <Story text={"Небольшая история о главном. Как волк ходил на зайца, но заяц тот еще жучара"}
                               classes={classes} user={{
                            userName: "Ivan",
                            fullName: "rockyboy",
                            avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        }}/>
                        <Story text={"Небольшая история о главном. Как волк ходил на зайца, но заяц тот еще жучара"}
                               classes={classes} user={{
                            userName: "Ivan",
                            fullName: "rockyboy",
                            avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        }}/>
                        <Story text={"Небольшая история о главном. Как волк ходил на зайца, но заяц тот еще жучара"}
                               classes={classes} user={{
                            userName: "Ivan",
                            fullName: "rockyboy",
                            avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        }}/>
                        <Story text={"Небольшая история о главном. Как волк ходил на зайца, но заяц тот еще жучара"}
                               classes={classes} user={{
                            userName: "Ivan",
                            fullName: "rockyboy",
                            avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        }}/>
                        <Story text={"Небольшая история о главном. Как волк ходил на зайца, но заяц тот еще жучара"}
                               classes={classes} user={{
                            userName: "Ivan",
                            fullName: "rockyboy",
                            avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        }}/>
                        <Story text={"Небольшая история о главном. Как волк ходил на зайца, но заяц тот еще жучара"}
                               classes={classes} user={{
                            userName: "Ivan",
                            fullName: "rockyboy",
                            avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        }}/>
                        <Story text={"Небольшая история о главном. Как волк ходил на зайца, но заяц тот еще жучара"}
                               classes={classes} user={{
                            userName: "Ivan",
                            fullName: "rockyboy",
                            avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        }}/>
                        <Story text={"Небольшая история о главном. Как волк ходил на зайца, но заяц тот еще жучара"}
                               classes={classes} user={{
                            userName: "Ivan",
                            fullName: "rockyboy",
                            avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        }}/>
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
                        }} fullWidth/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Home
