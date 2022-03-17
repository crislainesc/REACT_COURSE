import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
   return (
      <MeetupDetail
         image={meetupData.image}
         title={meetupData.title}
         address={meetupData.address}
         description={meetupData.description}
      />
   );
}

export async function getStaticProps(context) {
   // fetch data for a single meetup

   const meetupId = context.params.meetupId
   console.log(meetupId)

   return {
      props: {
         meetupData: {
            id: meetupId,
            image: 'https://psiueducacao.com/wp-content/uploads/2018/08/meetup-o-que-e-e-como-utilizar-na-sua-estrategia-de-comunicacao.jpeg',
            title: 'Meetup title',
            address: 'Some address meetup',
            description: 'Meetup description'
         }
      }
   }
}

export default MeetupDetails;