import React from 'react';

function CheckListItem(props) {
    return (
        <div className='checklist__item'>
            <input
                type='checkbox'
                defaultChecked={ props.state === 'done' ? 'checked' : ''}
                onChange={ props.onChange }></input>
            <div>{ props.description }</div>
        </div>
    );
}

export default CheckListItem;