import React from 'react'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class Index extends React.Component {
  render() {
    return (
      <div className='index'>
        {/* <Header /> */}
        <main>
          <button onClick={() => store.addCount()}>+</button>
          <h1>{store.count}</h1>
          <button onClick={() => store.reduceCount()}>-</button>
        </main>
      </div>
    )
  }
}

export default Index
