import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { getTenantConfig } from '../lib/tenant';

function MyApp({ Component, pageProps }: AppProps) {
  const [tenant, setTenant] = useState<any>(null);

  useEffect(() => {
    const subdomain = window.location.hostname.split('.')[0];
    setTenant(getTenantConfig(subdomain));
  }, []);

  if (!tenant) return <div>Loading...</div>;

  return <Component {...pageProps} tenant={tenant} />;
}

export default MyApp;
