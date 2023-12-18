import './assets/css/global.css';
import MyRoutes from './MyRoutes';
import { MyProvider } from './provider/myContext';

function App() {
  return (
    <>
      <MyProvider>
        <MyRoutes />
      </MyProvider>
    </>
  );
}

export default App;
