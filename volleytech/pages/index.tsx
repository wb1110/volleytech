import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { withSSRSession, useAuth } from '@frontegg/nextjs';
import Dashboard from './Dashboard';

export default function MyPage({ products }) {
  const {user} = useAuth();
  //baseUrl should be your FRONTEGG_APP_URL from .env.local
  const baseUrl = 'http://localhost:3000'
  

  const logout = () => {
    window.location.href = `${baseUrl}/account/logout`;
  };

  return (
    <div>
      <Dashboard />
      <h1>My Page</h1>
      {/* {products} */}
      <div>
        {/* <Image src={user?.profilePictureUrl} alt={user?.name} /> */}
        <p>{user?.name}</p>
      </div>
      <div>
        <span>Logged in as: {user?.name}</span>
      </div>
      <div>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}

// use the Frontegg withSSRSession, for automatically redirecting
// users to the login screen if they are not authenticated.

// in the getServerSideProps method you can get data from an external service to pull relevant data for a logged in user, we used the prop products. 
// See the commented code for an example:

export const getServerSideProps: GetServerSideProps = withSSRSession(
  async (context, session) => {
//     const { data } = await fetch('{external}/product', {
//      headers: {
//        Authorization: 'bearer ' + session.accessToken,
//      },
//    });
    return { props: { } };
  }
);