import { useNavigate } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
   const navigate = useNavigate();

   const addQuoteHandler = quoteData => {
      console.log(quoteData)

      navigate('/quotes');
   }

   return (
      <QuoteForm onAddQuote={addQuoteHandler} />
   )
};

export default NewQuote;