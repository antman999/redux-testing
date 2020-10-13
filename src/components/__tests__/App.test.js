import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

test('should render the comment box component', () => {
  const div = document.createElement('div')
 
  ReactDOM.render(<App />, div)
  //When we do this We take our app component and take the html and try to render it in the div we created
  //So below we can write more logic to test certain behavior
    expect(div.innerHTML).toContain('comment box!')
  //  ^          ^             ^              ^
  //function| value inspecting| how to inspect|Value we want to see

  //We should avoid our test to know of the components internal works such as text. 
  //It is fine if it knows that it exist overall
  
  //We will instal enzyme to help us check components a bit easier ^ (Library by Airbnb)


  ReactDOM.unmountComponentAtNode(div)
  //The unmountComponentNode is other wise called cleanup 
  //We take whatever we mounted on it which was the App component and remove it (this helps speed)


  //Why do we do this? ^ 3 above
  //Since we want to test in the command line but react renders on the browser
  //React installs JSDOM which tricks the command line to render a fake DOM to test 
})
