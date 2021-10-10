import React from 'react'
import { Box, Typography } from '@mui/material'
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    return (
      <Box>
        <Typography variant='h4'>TodoList</Typography>

        {this.props.items.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            task={item.task}
            completed={item.completed}
            markItemCompleted={this.props.markItemCompleted}
          />
        ))}
      </Box>
    )
  }
}

export default TodoList
