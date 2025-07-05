import tienda1 from '../tenants/tienda1/config';
import tienda2 from '../tenants/tienda2/config';
import defaultConfig from '../tenants/default';

export function getTenantConfig(subdomain: string) {
  const sub = subdomain.toLowerCase();
  console.log(`Subdomain: ${sub}`);
  switch (sub) {
    case 'pijamasreinita': return tienda1;
    case 'elenestore': return tienda2;
    default: return defaultConfig;
  }
}
