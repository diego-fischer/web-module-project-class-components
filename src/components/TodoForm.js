import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h4'>Add a new item to your Todo list</Typography>

        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '30px 0 30px 0',
          }}
        >
          <TextField
            id='new-item'
            label='New Item'
            defaultValue=''
            style={{ width: '60%', margin: '0 30px 0 0' }}
          />
          <Button
            variant='contained'
            style={{ margin: '0 30px 0 0 ', width: '250px' }}
          >
            Add Todo
          </Button>
          <Button
            variant='contained'
            style={{ margin: '0 30px 0 0 ', width: '250px' }}
          >
            Clear Completed
          </Button>
        </Box>
      </Box>
    )
  }
}

export default TodoForm
