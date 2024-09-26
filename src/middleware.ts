import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  console.log(`pathname: ${pathname}`)	

  const response = NextResponse.next()

  const data = {
    instructionRedeemGiftCashback: "Get 50% off now!"
  }

  response.cookies.set({
    name: 'controle-rules',
    value: JSON.stringify(data),
    maxAge: 60 * 1,
    secure: process.env.NODE_ENV === 'production',
  })

  return response
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
}