import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const auth = req.headers.get("authorization");

    if (auth) {
      const [, encoded] = auth.split(" ");
      const decoded = atob(encoded);

      const [user, pass] = decoded.split(":");

      if (
        user === process.env.ADMIN_USER &&
        pass === process.env.ADMIN_PASS
      ) {
        return NextResponse.next();
      }
    }

    return new NextResponse("Giriş gerekli", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Admin"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};