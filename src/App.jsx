import GlobalStyle from "./GlobalStyles";

import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MessageAreaPage from "./pages/MessageAreaPage";
import { MessagesProvider } from "./context/MessagesContext";

function App() {
    return (
        <>
            <MessagesProvider>
                <GlobalStyle />

                <Routes>
                    <Route element={<AppLayout />}>
                        <Route
                            index
                            element={<Navigate replace to={`/chats`} />}
                        />
                        <Route path="/chats" element={<Home />}>
                            <Route
                                path=":userId"
                                element={<MessageAreaPage />}
                            />
                        </Route>
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </MessagesProvider>
        </>
    );
}

export default App;
