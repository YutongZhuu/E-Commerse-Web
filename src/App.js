import Home from './Router/Home/home.component'
import Navigation from './Router/Navigation/navigation.component'
import SignIn from './Router/SignIn/sign-in.component'
import Shop from './Router/Shop/shop.component'
import { Routes, Route } from 'react-router-dom'
import CheckOut from './Router/CheckOut/checkout.component'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="check-out" element={<CheckOut/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
