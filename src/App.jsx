import { ThemeProvider, createTheme } from "@mui/material";
import GlobalStyle from "./GlobalStyles";

import { Toaster } from "react-hot-toast";

import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MessageAreaPage from "./pages/MessageAreaPage";
import { MessagesProvider } from "./context/MessagesContext";

function App() {
    const theme = createTheme({
        typography: {
            fontSize: 20,
        },
        palette: {
            primary: {
                main: "#85a514",
            },
            secondary: {
                main: "#315259",
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
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

                    <Toaster
                        gutter={12}
                        position="top-center"
                        containerStyle={{ margin: "0px" }}
                        toastOptions={{
                            success: {
                                duration: 3000,
                            },
                            error: {
                                duration: 5000,
                            },

                            style: {
                                fontSize: "16px",
                                maxWidth: "500px",
                                padding: "16px 24px",
                                backgroundColor: "var(--color-grey-0)",
                                color: "var(--color-grey-700)",
                            },
                        }}
                    />
                </MessagesProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
