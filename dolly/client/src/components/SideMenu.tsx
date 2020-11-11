import React from "react";
import {IconButton, Typography} from "@material-ui/core";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import {useHomeStyles} from "../pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}


export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <div>
                    <IconButton className={classes.logo} color="primary" aria-label="add an alarm">
                        <ColorLensIcon className={classes.logoIcon}/>
                    </IconButton>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchOutlinedIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel}>Поиск</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsActiveOutlinedIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel}>Уведомления</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ChatBubbleOutlineOutlinedIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel}>Сообщения</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel}>Закладки</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListOutlinedIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel}>Список</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <PermIdentityOutlinedIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel}>Профиль</Typography>
                </div>
            </li>
        </ul>
    )
}
