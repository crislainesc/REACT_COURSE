import { Fragment, useEffect } from 'react';
import { useParams, Routes, Route, Link, useMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

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

   const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

   const params = useParams();

   const { quoteId } = params;

   const match = useMatch(`*`);
   console.log(match);


   useEffect(() => {
      sendRequest(quoteId);
   }, [quoteId, sendRequest])

   if (status === 'pending') {
      return (
         <div className="centered">
            <LoadingSpinner />
         </div>
      )
   }

   if (error) {
      return (
         <p className="centered focused">{error}</p>
      )
   }

   if (!loadedQuote.text) {
      return <p>No quote found!</p>
   }

   return (
      <Fragment>
         <HighlightedQuote
            text={loadedQuote.text}
            author={loadedQuote.author}
         />

         <Routes>
            <Route path={`/comments`} element={<Comments />} />
            <Route path={`/`} exact element={<LoadCommentsButton to={`${match.pathname}/comments`} />} />
         </Routes>
      </Fragment>
   );
};

export default QuoteDetail;