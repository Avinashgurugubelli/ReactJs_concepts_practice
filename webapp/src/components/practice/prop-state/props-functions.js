import { useContext, useState } from "react";
import PageHeader from "../../common/PageHeader";

function GreetComponent(props) {

    return (
        <>
            <div className="row">
                <h3>Message from the props (value passed as a variable):
                    <span style={{ color: "red" }}> {props.message}</span>
                </h3>
            </div>

            <div className="row">
                <h3>Message from the props (value passed as a function):
                    <span style={{ color: "red" }}> {props.greet()}</span>
                </h3>
            </div>

            <div className="row">
                <h3>Message from the props (value passed as a function with parameters):
                    <span style={{ color: "red" }}> {props.greetPerson()}</span>
                </h3>
            </div>

            <div className="row">
                <h3>Message from the props (value passed as a function with parameters):
                    <span style={{ color: "red" }}> {props.greetPerson("Avinash")}</span>
                </h3>
            </div>

            <div className="row">
                <h3>Message from the props (value passed as a function with multiple parameters):
                    <span style={{ color: "red" }}> {props.signUp(true, "Avinash")}</span>
                </h3>
            </div>
        </>
    );

}

function PropFunctionsHostComponent(props) {
    const [message, setMessage] = useState("Hello")

    const signUpGreetHandler = (isSignedUp, userName) => {
        if (isSignedUp) {
            return "Hi " + userName + ", Thank you for signing up !"
        }
        else {
            return "set isSignedUp as true to check the difference";
        }

    }
    return (
        <>
            <PageHeader />

            <div className="jumbotron">
                {/* 
                    prop message: This is just passing value to props
                    prop greet: value passed as a function
                    greetPerson: value as a function with args
                 */}
                <GreetComponent
                    message={message} greet={() => "Welcome"}
                    greetPerson={(name) => { return !name ? "Guest" : "Welcome back " + name }}
                    signUp={signUpGreetHandler}
                />

            </div>

        </>
    )
}

export default PropFunctionsHostComponent;