import { Fragment } from 'react';
import { useParams, Routes, Route, Link, useMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
   { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
   { id: 'q2', author: 'Jackie', text: 'Learning React is great!' }
]

const LoadCommentsButton = (props) => {
   return (
      <div className='centered'>
         <Link className='btn--flat'
            to={`${props.to}`}>Load Comments
         </Link>
      </div>
   )
}

const QuoteDetail = () => {

   const params = useParams();

   const match = useMatch(`*`);
   console.log(match);


   const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

   if (!quote) {
      return <p>No quote found!</p>
   }

   return (
      <Fragment>
         <HighlightedQuote
            text={quote.text}
            author={quote.author}
         />

         <Routes>
            <Route path={`/comments`} element={<Comments />} />
            <Route path={`/`} exact element={<LoadCommentsButton to={`${match.pathname}/comments`} />} />
         </Routes>
      </Fragment>
   );
};

export default QuoteDetail;