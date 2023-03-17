import Home from './Router/Home/home.component'
import Navigation from './Router/Navigation/navigation.component'
import SignIn from './Router/SignIn/sign-in.component'
import Shop from './Router/Shop/shop.component'
import { Routes, Route } from 'react-router-dom'
import CheckOut from './Router/CheckOut/checkout.component'
import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./Utili/firebase.component";
import { setcurrentUser } from './Store/user/user.action'
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocuments } from './Utili/firebase.component'
import { setProducts } from './Store/products/products.action'
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const undescribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user)
      }
      dispatch(setcurrentUser(user))
    })

    return undescribe
  }, [])


  useEffect(() => {
    const getCategories = async () => {
      const product = await getCategoriesAndDocuments()
      dispatch(setProducts(product))
    }
    getCategories()
  }, [])


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="check-out" element={<CheckOut />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
