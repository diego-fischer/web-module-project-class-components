import React from 'react'
import { Typography, CssBaseline, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      items: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        },
      ],
    }
  }

  addItem = (newItem, clearInputText) => {
    const newObj = {
      task: newItem,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      items: [...this.state.items, newObj],
    })
    clearInputText()
  }

  markItemCompleted = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          }
        } else {
          return item
        }
      }),
    })
  }

  clearCompleted = () => {
    this.setState({
      items: this.state.items.filter((item) => !item.completed),
    })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant='h2'
            style={{ margin: '100px 0 100px 0', fontWeight: 'bold' }}
          >
            Todo List: MVP
          </Typography>
          <TodoForm
            items={this.state.items}
            addItem={this.addItem}
            clearCompleted={this.clearCompleted}
          />
          <TodoList
            items={this.state.items}
            markItemCompleted={this.markItemCompleted}
          />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App
