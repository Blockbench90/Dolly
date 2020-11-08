import React from 'react'
import {Button, makeStyles, Typography} from "@material-ui/core";
import ColorLensIcon from '@material-ui/icons/ColorLens';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
//Страница входа

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    colorSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative'
    },
    colorSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color:' white',
            fontWeight: 700}
    },
    colorSideListInfoIcon: {
        fontSize: 34,
        marginRight: 15
    },
    colorSideListInfoItem: {
        marginBottom: 15
    },
    colorSideLogoBackground: {
        position: 'absolute',
        left: '50%',
        top: '58%',
        transform: 'translate(-50%, -50%)',
        width: '150%',
        height: '150%'
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',

    },
    loginSideLogo: {
        fontSize: 100,
        color: 'red'
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 800,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20
    }
}))

const SingIn = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            {/*блок "рекламка"*/}
            <section className={classes.colorSide}>
                <ColorLensIcon className={classes.colorSideLogoBackground}/>
                <ul className={classes.colorSideListInfo}>
                    <li className={classes.colorSideListInfoItem}><Typography variant='h6'><SearchIcon className={classes.colorSideListInfoIcon}/>Читайте о том, что интересно</Typography></li>
                    <li className={classes.colorSideListInfoItem}><Typography variant='h6'><PeopleOutlineIcon className={classes.colorSideListInfoIcon}/> Узнайте о чем говорят</Typography></li>
                    <li className={classes.colorSideListInfoItem}><Typography variant='h6'><ChatBubbleOutlineOutlinedIcon className={classes.colorSideListInfoIcon}/> Делитесь новостями</Typography></li>
                </ul>
            </section>
            {/*блок логинизации*/}
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <ColorLensIcon className={classes.loginSideLogo}/>
                    <Typography className={classes.loginSideTitle} gutterBottom variant='h4'>Узнайте все прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к нам</b></Typography>
                    <br/>
                    <Button style={{marginBottom: 20}} variant={'contained'} color={'primary'} fullWidth>Зарегистрироваться</Button>
                    <Button variant={'outlined'} color={'primary'} fullWidth>Войти</Button>
                </div>
            </section>
        </div>
    )
}
export default SingIn
