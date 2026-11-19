import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Redirect /services/* → / with true 301, single hop, before Next.js
 * trailing-slash normalisation fires.
 */
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url), { status: 301 });
}

export const config = {
  matcher: ["/services/:path*"],
};
