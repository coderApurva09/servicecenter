import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from 'src/utils/hooks/useScrollTop';

import 'nprogress/nprogress.css';
import { Provider } from 'react-redux';
import store from 'src/store';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <SidebarProvider>
        <BrowserRouter>
          <ScrollTop />
            <App />
        </BrowserRouter>
      </SidebarProvider>
    </Provider>
    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <script type="text/javascript">  function preventBack() {window.history.forward()}  setTimeout("preventBack()", 0);  window.onunload = function () {null};</script>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.register();
