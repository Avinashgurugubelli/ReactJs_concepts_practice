import React from 'react';

function CoursesHeader() {
    return (
        <>
            <ul className="list-group list-group-horizontal">
                <a href="/CoursesViaClassComponent" className="list-group-item list-group-item-action">Class component view using life cycle hooks</a>
                <a href="/CoursesViaFunctionComponent" className="list-group-item list-group-item-action">Function component view using HooksSuccess item</a>
            </ul>
        </>
    );
}

export default CoursesHeader;