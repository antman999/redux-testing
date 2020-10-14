import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapper;
//Below we are abstracting wrapper which we use every single time beforeEach will run every single time before a test 
//we init it before because of scope 
beforeEach(() => {
  wrapper = shallow(<App />);
})

test('should render the comment box component', () => {
  // const div = document.createElement('div')
  // ReactDOM.render(<App />, div)
  // //When we do this We take our app component and take the html and try to render it in the div we created
  // //So below we can write more logic to test certain behavior
  //   expect(div.innerHTML).toContain('comment box!')
  // //  ^          ^             ^              ^
  // //function| value inspecting| how to inspect|Value we want to see

  // //We should avoid our test to know of the components internal works such as text. 
  // //It is fine if it knows that it exist overall
  
  // //We will install enzyme to help us check components a bit easier ^ (Library by Airbnb)

  // //Check readme screenshot for what Shallow,Static and fullDOM do 
  // //We will use shallow to find that CommentBox is there and atleast has a length of 1 


  // ReactDOM.unmountComponentAtNode(div)
  // //The unmountComponentNode is other wise called cleanup 
  // //We take whatever we mounted on it which was the App component and remove it (this helps speed)


  // //Why do we do this? ^ 3 above
  //Since we want to test in the command line but react renders on the browser
  //React installs JSDOM which tricks the command line to render a fake DOM to test 

  
  expect(wrapper.find(CommentBox).length).toEqual(1)
 // ^ this is all enzyme  what we do here is wrap our component in shallow which renders the parent component. using enzyme makes it so much easier to run test 
})

test('should render comment list component', () => {
  expect(wrapper.find(CommentList).length).toEqual(1)
})

