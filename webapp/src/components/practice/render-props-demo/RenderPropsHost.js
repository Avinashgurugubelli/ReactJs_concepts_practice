import React, { Component } from 'react'
import PageHeader from '../../common/PageHeader'
import Counter from './Components/Counter'
import FirstCounter from './Components/FirstCounter'
import SecondCounter from './Components/SecondCounter'

class RenderPropsHost extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader />
                <div className="jumbotron">
                    Hello
                    <Counter render={(count, incrementCount) => {
                        <FirstCounter count={count} incrementCount={incrementCount} />
                    }} />

                    <Counter render={(count, incrementCount) => {
                        <SecondCounter count={count} incrementCount={incrementCount} />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}

export default RenderPropsHost
