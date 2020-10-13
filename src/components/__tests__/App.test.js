import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

test('should render the comment box component', () => {
  const div = document.create('div')
 
  ReactDOM.render(<App />, div)
  //When we do this We take our app component and take the html and try to render it in the div we created
  //So below we can write more logic to test certain behavior



  ReactDOM.unmountComponentAtNode(div)
  //The unmountComponentNode is other wise called cleanup 
  //We take whatever we mounted on it which was the App component and remove it (this helps speed)


  //Why do we do this? ^ 3 above
  //Since we want to test in the command line but react renders on the browser
  //React installs JSDOM which tricks the command line to render a fake DOM to test 
})
