import React from 'react';
import CheckListItem from './CheckListItem';

function CheckList(props) {
    return (
        <div className='checklist'>
            <h1>{ props.title }</h1>
            <div>{
                props.items.map((item, i) => 
                <CheckListItem
                        key={item._id}
                        description={ item.description }
                        status={ item.status }
                        handleChange={ () => props.handleTodoChange(item._id) }
                      />
                )
            }</div>
        </div>
    );
}

export default CheckList;