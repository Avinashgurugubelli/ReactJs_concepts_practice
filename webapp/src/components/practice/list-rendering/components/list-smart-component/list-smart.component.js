import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';

export default class ListSmartComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { courses } = this.props;
        return (
            courses.map(course => (
                <tr key={course.id}>
                    <td scope="col">{course.id}</td>
                    <td scope="col">{course.title}</td>
                    <td scope="col">{course.slug}</td>
                    <td scope="col">{course.authorId}</td>
                    <td scope="col">{course.category}</td>
                    <td scope="col"><Rating  value={course.rating}  precision={0.5} disabled/></td>
                </tr>
            ))
        )
    }
}
