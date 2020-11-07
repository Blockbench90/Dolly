import React from 'react'
import {makeStyles} from "@material-ui/core";
//Страница входа

const useStyles = makeStyles( (theme) => ({
    button: {
        fontWeight: 700
    },
    lightBulb: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1)
    }
}))

const SingIn = () => {
    return (
        <div>Страница входа</div>
    )
}
export default SingIn