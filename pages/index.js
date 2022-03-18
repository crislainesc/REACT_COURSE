import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
  const client = await MongoClient.connect(
    "[MONGO DATABASE URL]"
  );

  const db = client.db();

  const meetupsColletction = db.collection("meetups");

  const meetups = await meetupsColletction.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
