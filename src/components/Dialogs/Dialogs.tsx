import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props: any) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: "Valera"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Ira"},
        {id: 5, name: "Egor"},
    ]
    let messages = [
        {id: 1, message:"Hi"},
        {id: 2, message:"How is your it-kamasutra?"},
        {id: 3, message:"Yo"},
    ]

    let dialogsElements = dialogs.map((d)=>{
        return(<DialogItem name={d.name} id={d.id}/>)
    });
    let messagesElements = messages.map((m)=>{
        return(<Message message={m.message}/>)
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;