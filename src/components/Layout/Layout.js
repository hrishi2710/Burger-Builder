import React from 'react';
import Auxiliary from '../../higherordercomponents/Auxiliary';
import classes from './Layout.css';

const layout = (props) => (
    <Auxiliary>
        <div> Toolbar, Side drawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;