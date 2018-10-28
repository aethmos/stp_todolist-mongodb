import React from 'react';
import CheckListItem from './CheckListItem';

function CheckList(props) {
    return (
        <div className='checklist'>
            <h1>{ props.title }</h1>
            <div>{
                props.items.map((item, i) => 
                <CheckListItem
                        key={i}
                        description={ item.description }
                        status={ item.status }
                        handleChange={ () => props.handleChange(item.id) }
                      />
                )
            }</div>
        </div>
    );
}

export default CheckList;