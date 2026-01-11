import React from 'react';
import ReactDOM from 'react-dom/client';

const NestedHeader = React.createElement('div',{className:'title'},
    [React.createElement('h1',{},'I am H1'),
    React.createElement('h2',{},'I am H2'),
    React.createElement('h3',{},'I am H3')
    ])
const ReactElement = (<div>
    <h1>I am react element h1</h1>
    <h2>I am react element h2</h2>
    <h3>I am react element h3</h3>
</div>)
const FunctionalComponent = ()=>(
    <div className='title'>
    <h1>I am functional component h1</h1>
    <h2>I am functional component h2</h2>
    <h3>I am react element h3</h3>
</div>
)
const Root = ReactDOM.createRoot(document.querySelector('body'));
//Root.render(NestedHeader);
//Root.render(ReactElement);
Root.render(<FunctionalComponent/>)