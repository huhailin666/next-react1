import '../styles/globals.less'
import { Provider } from 'mobx-react'
import store from '../store'
 
export default function App({ Component, pageProps }) {  
    console.log(111);
    
   return (    
      <Provider store={store}>      
         <Component {...pageProps} />    
      </Provider>  
    )
}