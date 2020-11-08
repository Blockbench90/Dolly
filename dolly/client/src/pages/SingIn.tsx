import React from 'react';
import {makeStyles, Typography, Button} from '@material-ui/core';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {ModalBlock} from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#71C9F8',
        overflow: 'hidden',
    },
    leftSide: {
        flex: '0 0 50%',
        position: 'relative',
    },
    leftSideBigIcon: {
        position: 'absolute',
        left: 0,
        top: 0,
        transform: 'translate(-14%, -14%)',
        width: '197%',
        height: '197%',
        color: 'aqua'
    },
    // leftSideListInfo: {
    //     position: 'relative',
    //     listStyle: 'none',
    //     padding: 0,
    //     margin: 0,
    //     maxWidth: 380,
    //     '& h6': {
    //         display: 'flex',
    //         alignItems: 'center',
    //         color: 'white',
    //         fontWeight: 700,
    //         fontSize: 20,
    //     },
    // },
    // leftSideListInfoItem: {
    //     marginBottom: 40,
    // },
    // leftSideListInfoIcon: {
    //     fontSize: 32,
    //     marginRight: 15,
    // },
    loginSide: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        maxWidth: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20,
    },
    loginSideField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },
}));

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();
    //установка видимости модального окна
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();
    //для входа
    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };
    //для регистрации
    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };
    //для закрытия
    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.leftSide}>
                <ColorLensIcon color="primary" className={classes.leftSideBigIcon}/>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <ColorLensIcon color="primary" className={classes.loginSideTwitterIcon}/>
                    <Typography className={classes.loginSideTitle} gutterBottom variant="h4">
                        Услышал от деда, мамы, дяди, тети...
                    </Typography>
                    <Typography>
                        <b>Не храни это в себе, поделись!</b>
                    </Typography>
                    <br/>
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom: 20}}
                            variant="contained" color="primary" fullWidth>
                        Зарегистрироваться</Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined"
                            color="primary" fullWidth>
                        Войти</Button>
                    <ModalBlock visible={visibleModal === 'signIn'} onClose={handleCloseModal}
                        classes={classes} title="Войти в аккаунт">
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField className={classes.loginSideField} autoFocus id="email"
                                    label="E-Mail" InputLabelProps={{ shrink: true }} variant="filled"
                                    type="email" fullWidth/>
                                <TextField className={classes.loginSideField} autoFocus id="password"
                                    label="Пароль" InputLabelProps={{ shrink: true }} variant="filled"
                                    type="password" fullWidth/>
                                <Button onClick={handleCloseModal} variant="contained"
                                        color="primary" fullWidth>Войти</Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                    <ModalBlock visible={visibleModal === 'signUp'} onClose={handleCloseModal}
                                classes={classes} title="Создайте учетную запись">
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField className={classes.registerField} autoFocus
                                    id="name" label="Имя" InputLabelProps={{ shrink: true }}
                                    variant="filled" type="name" fullWidth />
                                <TextField className={classes.registerField} autoFocus
                                    id="email" label="E-Mail" InputLabelProps={{ shrink: true }}
                                    variant="filled" type="email" fullWidth />
                                <TextField className={classes.registerField} autoFocus
                                    id="password" label="Пароль" InputLabelProps={{ shrink: true }}
                                    variant="filled" type="password" fullWidth />
                                <Button variant="contained" color="primary" fullWidth>
                                    Далее
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
};
export default SignIn
