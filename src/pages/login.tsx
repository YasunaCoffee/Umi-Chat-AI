import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { Auth0Provider } from '@auth0/auth0-react';

export default function LoginPage() {
  const { loginWithRedirect } = useAuth0();
  const router = useRouter();

  React.useEffect(() => {
    loginWithRedirect();
  }, []);

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || ""}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ""}
      onRedirectCallback={() => window.location.href = "https://chara-chat-ai.vercel.app/"}
    >
    </Auth0Provider>
  );
}
