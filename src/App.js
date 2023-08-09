import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Home from './component/home'
import AboutUs from './component/about-us'
import Blog from './component/blog'
import Contact from './component/contact'
const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/about-us' element={<AboutUs/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<h1>Not found...!</h1>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default App