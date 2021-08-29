import { useEffect } from 'react';
import Facebook from '../components/Facebook';

import './Home.css';

const Home = () => {
  const height = window.innerWidth > 480 ? window.innerHeight - 68 - 56 : window.innerHeight - 110 - 56;
  const width = window.innerWidth;

  useEffect(() => {
    document.addEventListener('fb_init', e => FB.XFBML.parse());

    const handleResize = () => {
      window.location.reload();
    };
    window.addEventListener('resize', handleResize);
  }, [])

  return (
      <Facebook height={height} width={width}/>
  );
};

export default Home;
