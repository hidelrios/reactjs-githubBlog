import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme/theme";
import { Home } from "./pages/home";
import { GitContextProvider } from "./contexts/GitProvider";
import { PostDetail } from "./pages/postDetail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GitContextProvider>
        <GlobalStyle />
        <PostDetail />
      </GitContextProvider>
    </ThemeProvider>
  );
}

export default App;
