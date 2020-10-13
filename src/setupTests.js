import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

//This is a necessary configure that allows enzyme to run before any other test files which will utilize it, Always have the file name to 'setupTests.js'
