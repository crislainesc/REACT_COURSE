import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
   return (
      <MeetupDetail
         image='https://psiueducacao.com/wp-content/uploads/2018/08/meetup-o-que-e-e-como-utilizar-na-sua-estrategia-de-comunicacao.jpeg'
         title='Meetup title'
         address='Some address meetup'
         description='Meetup description'
      />
   );
}

export async function getStaticPaths() {
   return {
      fallback: false,
      paths: [
         {
            params: {
               meetupId: 'm1'
            },
         },
         {
            params: {
               meetupId: 'm2'
            },
         },
         {
            params: {
               meetupId: 'm3'
            },
         },
      ]
   }
}

export async function getStaticProps(context) {
   // fetch data for a single meetup

   const meetupId = context.params.meetupId;

   console.log(meetupId);

   return {
      props: {
         meetupData: {
            image:
               'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
            id: meetupId,
            title: 'First Meetup',
            address: 'Some Street 5, Some City',
            description: 'This is a first meetup',
         },
      },
   };
}

export default MeetupDetails;