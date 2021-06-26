import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import { Home } from "./pages/Home/index";
import { Room } from "./pages/Room/index";
import { NewRoom } from "./pages/Room/NewRoom/index";
import { AdminRoom } from "./pages/Room/AdminRoom/index";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
