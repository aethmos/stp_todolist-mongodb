import React from 'react';

function CheckListItem(props) {
    return (
        <div className='checklist__item'>
            <input
                type='checkbox'
                onChange={ props.onChange }></input>
                defaultChecked={ props.status === 'DONE' ? 'checked' : ''}
            <div>{ props.description }</div>
        </div>
    );
}

export default CheckListItem;