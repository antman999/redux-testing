import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types'

test('should handle the actions of the type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New comment'
  }
  const newState = commentsReducer([], action)
  expect(newState).toEqual(['New comment'])
})

test('should handle actions with unknown type', () => {
  const newState = commentsReducer([], { type: 'HDHSDWHE' })
  expect(newState).toEqual([])
})

