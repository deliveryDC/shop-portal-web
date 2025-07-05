import tienda1 from '../tenants/tienda1/config';
import tienda2 from '../tenants/tienda2/config';
import defaultConfig from '../tenants/default';

export function getTenantConfig(subdomain: string) {
  switch (subdomain) {
    case 'PijamasReinita': return tienda1;
    case 'EleneStore': return tienda2;
    default: return defaultConfig;
  }
}
