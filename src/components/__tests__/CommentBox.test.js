import React from "react";
import CommentBox from 'components/CommentBox'
import {mount} from 'enzyme'

describe('Test for Component box rendering', () => {
  //If we use full DOM rendering in enzyme it is using the same JSDOM from react so After use make sure to unmount. Shallow on the other hand doesnt need this function.

  let wrapper; 
  beforeEach(() => {
     wrapper = mount(<CommentBox />)
  })

  afterEach(() => {
    wrapper.unmount(); 
  //This will unmount after each test, cleaning our code 
  })

  test('should have a text area and a button', () => {

    expect(wrapper.find('textarea').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1);  
  })

  test('should allow a user to input text into the text area', () => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' }
      //^^^ the second value is a mock event,  needs those 2 objects 
    })
    wrapper.update()
    //^^We have to force react to update because state is async and will sometimes not update
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
  })
  
  
})
