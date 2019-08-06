// React imports
import React from 'react';

class AboutPage extends React.Component {
    render() {
        return(
            // React.Fragment similar to ng-container/ng-template in angular
            // Short cut for React.Fragment -> <> </> - recommend way
            <React.Fragment> 
                <h1>About us</h1>
                <p>We are here to help the students to develop their own web app</p>
            </React.Fragment>
        );
    }
}

export default AboutPage;