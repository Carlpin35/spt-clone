import React from 'react';
import Head from 'next/head';
import { getProviders, signIn } from 'next-auth/react'

export default function login({ providers }) {
	return (
		<div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">

      <Head>
        <title>Login to Spotify</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/2111/2111624.png" />
      </Head>



			<img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />


 {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="p-5 bg-[#18D860] rounded-full text-white" onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
            Login in with {provider.name}
          </button>
        </div>
      ))}


		</div>
	)
}

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers
		}
	}
}