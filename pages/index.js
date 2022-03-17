import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
   {
      id: 'm1',
      image: 'https://psiueducacao.com/wp-content/uploads/2018/08/meetup-o-que-e-e-como-utilizar-na-sua-estrategia-de-comunicacao.jpeg',
      title: 'A First Meetup',
      address: 'Some adress 5, 12345 Some City',
      description: 'This is a first meetup!'
   },
   {
      id: 'm2',
      image: 'https://psiueducacao.com/wp-content/uploads/2018/08/meetup-o-que-e-e-como-utilizar-na-sua-estrategia-de-comunicacao.jpeg',
      title: 'A Second Meetup',
      address: 'Some adress 10, 12345 Some City',
      description: 'This is a second meetup!'
   },
   {
      id: 'm3',
      image: 'https://psiueducacao.com/wp-content/uploads/2018/08/meetup-o-que-e-e-como-utilizar-na-sua-estrategia-de-comunicacao.jpeg',
      title: 'A Third Meetup',
      address: 'Some adress 15, 12345 Some City',
      description: 'This is a third meetup!'
   }
]

function HomePage(props) {
   return (
      <MeetupList meetups={props.meetups} />
   )
}

// export async function getServerSideProps(context) {
//    const req = context.req;
//    const res = context.res;

//    // fetch data from an API
//    return {
//       props: {
//          meetups: DUMMY_MEETUPS
//       },
//    }
// }

export async function getStaticProps() {
   // fetch data from an API
   return {
      props: {
         meetups: DUMMY_MEETUPS
      },
      revalidate: 10
   };
}

export default HomePage;