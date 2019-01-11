import React, { Fragment } from 'react';

const FilterButtons = (props) => {
    return (
    <Fragment>
        <button value="name" onClick={props.sortFunction}>Sort By Name</button>
        <button value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water" onClick={props.sortFunction}>Sort By Weight</button>
        <button value="greased" onClick={props.sortFunction}>Hide Greased Hogs</button>
    </Fragment>
    )
}

export default FilterButtons;