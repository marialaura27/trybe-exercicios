import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image} = this.props.data;
        return (
            <section>
                <h3>{name}</h3>
                <p>{type}</p>
                <p>{averageWeight.value}</p>
                <p>{averageWeight.measurementUnit}</p>
                <img src={image}/>
            </section>
        );
    }
}


export default Pokemon;