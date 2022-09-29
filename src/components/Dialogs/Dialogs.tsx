import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props:any)=>{
    let path = "/dialogs/" + props.id

    return(
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:any)=>{
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimyсh" id="1"/>
                <DialogItem name="Valera" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Ira" id="4"/>
                <DialogItem name="Egor" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
};

export default Dialogs;