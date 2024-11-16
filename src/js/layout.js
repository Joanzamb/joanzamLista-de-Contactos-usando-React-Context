import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Contacts } from "./views/Contacts";
import { AddContact } from "./views/AddContact";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { EditContact } from "./views/EditContact";




//create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/add-contact" element={<AddContact />} />
                        <Route path="/edit-contact/:id" element={<EditContact />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);