import React from 'react';

// Custom imports
import { getCourses } from '../../api/courseApi'
import CoursesHeader from '../courses/CoursesHeader';
import PageHeader from '../common/PageHeader';

class Courses extends React.Component {
    state = {
        availableCourses: []
    }

    componentDidMount() {
        getCourses().then((courses) => {
            this.setState({ availableCourses: courses })
        })
    }
    renderRow(course) {
        return (
            <tr key = {course.id}>
                <td>{course.title}</td>
                <td>{course.id}</td>
                <td>{course.slug}</td>
            </tr>
        )
    }
    render() {
        return (
            <React.Fragment>
                <PageHeader />
                <div className="jumbotron">
                    <h1>Available Courses</h1>
                    <CoursesHeader/>
                </div>
            </React.Fragment>
        )
    }
}

export default Courses;