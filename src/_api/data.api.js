import axios from "axios";

export function fetchCircuits( ) {
    return axios.get( "http://ergast.com/api/f1/2018/circuits.json" )
        .then( res => res.data.MRData.CircuitTable.Circuits );
}
