import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

class TodoForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      newItem: '',
    }
  }

  handleInputTextChange = (e) => {
    this.setState({ newItem: e.target.value })
  }

  clearInputText = () => {
    this.setState({ newItem: '' })
  }

  render() {
    console.log('TODO FORM PROPS', this.props)
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
            value={this.state.newItem}
            style={{ width: '60%', margin: '0 30px 0 0' }}
            onChange={this.handleInputTextChange}
          />
          <Button
            variant='contained'
            name='addBtn'
            style={{ margin: '0 30px 0 0 ', width: '250px' }}
            onClick={() =>
              this.props.addItem(this.state.newItem, this.clearInputText)
            }
          >
            Add Todo
          </Button>

          <Button
            variant='contained'
            name='clearCompletedBtn'
            style={{ margin: '0 30px 0 0 ', width: '250px' }}
            onClick={this.props.clearCompleted}
          >
            Clear Completed
          </Button>
        </Box>
      </Box>
    )
  }
}

export default TodoForm
