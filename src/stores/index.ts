import { createStore } from 'redux'  
import reducers from './reducers'


// Create a store with our reducer
const store = createStore(reducers)

export default store