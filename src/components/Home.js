import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../_actions";
import Helmet from "react-helmet";

class Home extends React.Component {

    render( ) {
        const { circuits } = this.props;
        return (
            <div>
                <Helmet
                    title="My Title"
                    meta={ [
                        { name: "description", content: "Helmet application" },
                    ] }
                />
                <h2>F1 2018 Season Calendar</h2>
                <ul>
                    { circuits.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={ circuitId } >{ circuitName } - { Location.locality }, { Location.country }</li>
                    ) ) }
                </ul>
            </div>
        );
    }
}
Home.serverFetch = fetchData;

const mapStateToProps = ( state ) => ( {
    circuits: state.data,
} );

export default connect( mapStateToProps )( Home );
