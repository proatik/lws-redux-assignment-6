import { Provider } from "react-redux";
import store from "./redux/app/store";

import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
};

export default App;
