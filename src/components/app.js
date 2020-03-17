import React from 'react'
import './sass/app.sass'

import List from './Content/list'
import Navigation from './Content/navigation'
import Header from './Content/header'
import Footer from './Content/footer'

const App = ( /*props*/ ) => {
    return (
      <div className="main-container">
          <Navigation></Navigation>

          <Header></Header>
          <List></List>
          <Footer></Footer>
      </div>  
    )
}

export default App