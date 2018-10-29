import React from 'react';
import { CheckListItem, CheckListItemTemplate } from './CheckListItem';
import { ListGroup } from 'reactstrap';

function CheckList(props) {
    return (
        <div className='checklist'>
            <h2>{ props.title }</h2>
            <ListGroup>{
                props.items.map((item, i) => 
                    <CheckListItem
                        key={item._id}
                        {...item}
                        handleChange={ () => props.handleTodoChange(item._id) }
                    />
                )
            }</ListGroup>
        </div>
    );
}

function CheckListMutable(props) {
    return (
        <div className='checklist mutable'>
            <h2>{ props.title }</h2>
            <ListGroup>{
                props.items.map((item, i) => 
                <CheckListItem
                        key={item._id}
                        {...item}
                        handleChange={ () => props.handleTodoChange(item._id) } /> )
                }<CheckListItemTemplate handleKeyPress={ (e) => props.handleKeyPress(e) } />
            </ListGroup>
        </div>
    );
}

export { CheckList, CheckListMutable };