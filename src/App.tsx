import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./styles/themes/global";
import { ProductProvider } from "./context/ProductContext";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ProductProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}


