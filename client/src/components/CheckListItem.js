import React from 'react';

function CheckListItem(props) {
    return (
        <div className='checklist__item'>
            <input
                type='checkbox'
                defaultChecked={ props.status === 'DONE' ? 'checked' : ''}
                onChange={ props.handleTodoChange }></input>
            <div>{ props.description }</div>
        </div>
    );
}

export default CheckListItem;