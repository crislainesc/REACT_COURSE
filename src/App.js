import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllQuotes from "./pages/AllQuotes";
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {

  const [confirm, setConfirm] = useState(false);
  const [confirmCallback, setConfirmCallback] = useState(null);

  function getConfirmationWithExtraParameters(whateverYouWantToPass) {
    return function getUserConfirmation(message, callback) {
      setConfirmCallback(() => callback);
      setConfirm(true);
    };
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Navigate to='/quotes' />} />
        <Route path="/quotes/" exact element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
