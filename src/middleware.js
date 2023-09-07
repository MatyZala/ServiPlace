export { default } from 'next-auth/middleware'

export const config = {
    matcher: ['/dashboard/:path*'] //all routes into dashboard
}