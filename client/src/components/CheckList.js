import React from 'react';
import CheckListItem from './CheckListItem';
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

export default CheckList;