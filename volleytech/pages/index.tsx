import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { withSSRSession, useAuth } from '@frontegg/nextjs';
import Dashboard from './Dashboard';

export default function MyPage() {

  return (
    <div>
      <Dashboard />
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