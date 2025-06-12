import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  const res = NextResponse.next();
  res.headers.set('x-tenant-id', subdomain);
  return res;
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
