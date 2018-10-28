import React from 'react';
import { CustomInput, ListGroupItem } from 'reactstrap';

function CheckListItem(props) {
    return (
        <ListGroupItem className='checklist__item'>
            <CustomInput 
                id={ props._id }
                type='checkbox'
                defaultChecked={ props.status === 'DONE' ? 'checked' : ''}
                onChange={ () => props.handleChange }/>
            <div className='textfield'>{ props.description }</div>
        </ListGroupItem>
    );
}

export default CheckListItem;