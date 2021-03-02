import { TextField } from '@material-ui/core'
import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import PageHeader from '../../common/PageHeader';

export default class SampleForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            dob: "",
            country: "",
            address: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onsubmit = (event) => {
        console.log("submitted form values: "+ JSON.stringify(this.state));
        alert(JSON.stringify(this.state))
        event.preventDefault();
    }

    render() {
        const { firstName, lastName, gender, dob, country, address } = this.state;
        return (
            <React.Fragment>
                <PageHeader></PageHeader>
                <div className="jumbotron">
                    <form onSubmit={this.onsubmit}>
                        <div className="form-group">
                            <TextField required
                                id="filled-required"
                                label="First name"
                                defaultValue={firstName}
                                onChange={this.changeHandler}
                                name="firstName"
                                variant="filled" />
                        </div>
                        <div className="form-group">
                            <TextField required
                                id="filled-required"
                                label="Last name"
                                defaultValue={lastName}
                                onChange={this.changeHandler}
                                name="lastName"
                                variant="filled" />
                        </div>
                        <div className="form-group">
                            <RadioGroup aria-label="quiz" name="gender" value={gender} onChange={this.changeHandler}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </div>
                        <div className="form-group">
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue={dob}
                                onChange={this.changeHandler}
                                name="dob"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={country}
                                name="country"
                                onChange={this.changeHandler}>
                                <MenuItem value="India">India</MenuItem>
                                <MenuItem value="US">US</MenuItem>
                                <MenuItem value="UK">UK</MenuItem>
                            </Select>
                        </div>
                        <div className="form-group">
                            <TextField
                                id="outlined-multiline-static"
                                label="Address"
                                multiline
                                rows={4}
                                defaultValue={address}
                                onChange={this.changeHandler}
                                name="address"
                                variant="outlined"
                            />
                        </div>
                        <button className="btn btn-success" type="submit">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
