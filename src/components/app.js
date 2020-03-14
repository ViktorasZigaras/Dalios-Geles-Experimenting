import React from 'react'
import './sass/app.sass'

import List from './List/list'

const App = ( /*props*/ ) => {
    return (
      <div className="main-container">
          <List></List>
      </div>  
    )
}

export default App