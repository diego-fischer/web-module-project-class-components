import React from 'react'
import { Typography } from '@mui/material'

class Todo extends React.Component {
  render() {
    return (
      <Typography
        style={{
          textDecoration:
            this.props.completed === true ? 'line-through' : 'none',
        }}
        onClick={() => this.props.markItemCompleted(this.props.id)}
      >
        {this.props.task}
      </Typography>
    )
  }
}

export default Todo
