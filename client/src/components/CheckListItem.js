import React from 'react';
import { CustomInput, ListGroupItem } from 'reactstrap';

function CheckListItem(props) {
    return (
        <ListGroupItem className='checklist__item'>
            
            <label class="checkbox" for={ props._id }>
                <input type="checkbox" defaultChecked={ props.status === 'DONE' ? 'checked' : ''} value="" id={ props._id } data-toggle="checkbox" className="custom-checkbox" onChange={ () => props.handleChange }/>
                <span class="icons"><span class="icon-unchecked"></span><span class="icon-checked"></span></span>
                {/* label text */}
                </label>
            <div className='textfield'>{ props.description }</div>
        </ListGroupItem>
    );
}

export default CheckListItem;