import React, { Component } from 'react';
import axios from 'axios'

export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    return axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          studentInfo: res.data
        })
      })
  }


  render() {
    let student = this.state.studentInfo
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{student.first_name} {student.last_name}</h1>
        <h3>Grade: {student.grade}</h3>
        <h3>Email: {student.email}</h3>
      </div>
    )
  }
}