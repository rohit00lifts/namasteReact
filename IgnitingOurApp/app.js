import React from 'react';
import ReactDOM from 'react-dom/client';

const mainElement = React.createElement
('div',{id:'mainDiv'},
    [React.createElement('div',{id:'child'},[React.createElement('h1',{},'I am h1 tag'),React.createElement('h2',{},'I am h2 tag')]),
    React.createElement('div',{id:'child2'},[React.createElement('h1',{},'I am h1 tag'),React.createElement('h2',{},'I am h2 tag')])]
    ,);
const body = ReactDOM.createRoot(document.querySelector('body'));
body.render(mainElement);