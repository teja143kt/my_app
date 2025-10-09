import React from 'react'

function Skills() {
    return (
        <div>
            <div class="container bg-white p-4 p-md-5 mt-5 rounded shadow-sm">
                <h2 class="text-center mb-4">My Skills</h2>
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="text-center fs-4">Soft Skills</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item list-group-item-action">Team Work</li>
                            <li class="list-group-item list-group-item-action">Time Management</li>
                            <li class="list-group-item list-group-item-action">Communication</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h3 class="text-center fs-4">Technical Skills</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item list-group-item-action">HTML</li>
                            <li class="list-group-item list-group-item-action">CSS</li>
                            <li class="list-group-item list-group-item-action">python</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
