import React from "react";
import CommentBox from 'components/CommentBox'
import {mount} from 'enzyme'

describe('Test for Component box rendering', () => {

  //If we use full DOM rendering in enzyme it is using the same JSDOM from react so After use make sure to unmount. Shallow on the other hand doesnt need this function.
  let wrapper; 
  beforeEach(() => {
     wrapper = mount(<CommentBox />)
  })

  test('should have a text area and a button', () => {

    expect(wrapper.find('textarea').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1);  
  })
  
})
