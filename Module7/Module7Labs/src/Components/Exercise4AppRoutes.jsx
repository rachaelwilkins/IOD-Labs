import { Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { BitcoinRatesEx4 } from "./BitcoinRatesEx4"

export function Exercise4AppRoutes(props)

{
    return (

    <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
        <Route path="/BitcoinRates" element={<BitcoinRatesEx4></BitcoinRatesEx4>}></Route>
    </Routes>    
    )


}