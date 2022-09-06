import React, { Component } from 'react'
import PageHeader from '../../common/PageHeader';


class ConditionalRenderingComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            name: "Avinash"
        }
    }

    noLoggedUserComponent = (props) => {
        return (
            <React.Fragment>
                <PageHeader />
                <div className="Jumbotron">
                    <div>User not logged, welcome guest</div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        //#region  method one - using IF else
        if (this.state.isLoggedIn) {
            return (
                <React.Fragment>
                    <PageHeader />
                    <div className="Jumbotron">
                        <div>User logged, welcome {this.state.name}</div>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (
                <this.noLoggedUserComponent />
            );
        }
        //#endregion method one - using IF else

        //#region using short circuit -> false case show empty
        // return this.state.isLoggedIn && (
        //     <React.Fragment>
        //         <PageHeader />
        //         <div className="Jumbotron">
        //             <div>User not logged, welcome guest</div>
        //         </div>
        //     </React.Fragment>
        // );
        //#endregion using short circuit

    }
}

export default ConditionalRenderingComponent;
