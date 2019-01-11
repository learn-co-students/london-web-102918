import React from 'react';
import HogTile from './HogTile';
import FilterButtons from './FilterButtons';

class HogTiles extends React.Component {
    constructor(props) {
        super()
        this.state = {
            hogs: props.hogs
        }
    }

    sortFunction = (e) => {
        // console.log(e.target.value);
        let sortKey = e.target.value;
        let sortedHogs = [...this.state.hogs];

        if (sortKey === "greased") {
            sortedHogs = sortedHogs.filter( hog => hog.greased === true )
        } else {
            sortedHogs.sort((a, b) => {
                if (a[sortKey] > b[sortKey]) return 1;
                if (a[sortKey] < b[sortKey]) return -1;
                return 0;
            })
        }

        this.setState({
            hogs: sortedHogs
        });
    }

    render() {
        return (
            <div>
                <FilterButtons sortFunction={this.sortFunction}/>
                {this.state.hogs.map(hog => <HogTile hog={hog}/>)}
            </div>
        )
    }
}

export default HogTiles;