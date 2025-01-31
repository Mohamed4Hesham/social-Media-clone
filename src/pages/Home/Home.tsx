import { Helmet } from 'react-helmet-async';
import CreatePost from './Posts/CreatePost';

const Home = () => {


  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="News feed to your account on our social media platform, have fun mi amigo" />
      </Helmet>
      <CreatePost/>

    </>
  );
};

export default Home;
