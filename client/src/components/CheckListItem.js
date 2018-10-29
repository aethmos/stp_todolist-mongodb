import React from 'react';
import { ListGroupItem } from 'reactstrap';

function CheckListItem(props) {
    return (
        <ListGroupItem className='checklist__item'>
            
            <div className='icon'>
                <label className="checkbox" htmlFor={ props._id }>
                    <input type="checkbox" defaultChecked={ props.status === 'DONE' ? 'checked' : ''} value="" id={ props._id } data-toggle="checkbox" className="custom-checkbox" onChange={ () => props.handleChange }/>
                    <span className="icons"><span className="icon-unchecked"></span><span className="icon-checked"></span></span>
                    {/* label text */}
                </label>
            </div>
            <div className='textfield'>{ props.description }</div>
        </ListGroupItem>
    );
}

function CheckListItemTemplate(props) {
    return (
        <ListGroupItem className='checklist__item'>
            <div className='icon'>
                <span className="fui-plus icon"></span>
            </div>
            <input type='text' className='textfield custom-control' placeholder='Add new task'/>
        </ListGroupItem>
    );
}
export { CheckListItem, CheckListItemTemplate };