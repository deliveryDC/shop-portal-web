import Image from 'next/image';

export default function Home({ tenant }: any) {
  return (
    <div className="p-10" style={{ backgroundColor: tenant.primaryColor }}>
      <h1 className="text-white text-4xl font-bold mb-4">Bienvenido a {tenant.name}</h1>
      <Image src={tenant.logo} alt="Logo" width={200} height={200} />
    </div>
  );
}
