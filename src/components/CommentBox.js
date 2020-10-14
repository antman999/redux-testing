import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

export class CommentBox extends Component {
  state = {
    comment:''
  }
  handleChange = e => {
    this.setState({comment: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({comment:''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Add a comment</h5>
          <textarea onChange ={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit the comment</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null,actions) (CommentBox)

