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

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h2' style={{ margin: '100px 0 100px 0' }}>
            Todo List: MVP
          </Typography>
          <TodoForm />
          <TodoList />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App
