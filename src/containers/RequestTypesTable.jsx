import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class RequestTypes extends Component {
    render() {
        return (
            <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client</th>
                        <th>Network</th>
                        <th>Service</th>
                        <th>Filters</th>
                        <th>Paging</th>
                        <th>Intervals</th>
                        <th>Run</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.renderRows()} */}
                </tbody>
            </table>
            {/* <Link to='/add/'>Add</Link> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        requestTypes: state.requestTypes
    };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         addRequest
//     }, dispatch);
// }


export default connect(mapStateToProps)(RequestTypes);