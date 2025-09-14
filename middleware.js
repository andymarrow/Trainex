import { NextRequest,NextResponse } from "next/server";
import i18nConfig from "./i18nConfig"; 

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    // Check if the pathname is already prefixed with a locale
    const pathnameIsMissingLocale = i18nConfig.locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        // Detect user locale (you might need a more sophisticated detector here)
        // For simplicity, this example uses the accept-language header
        const locale = request.headers.get('accept-language')?.split(',')[0] || i18nConfig.defaultLocale;

        // Check if the detected locale is supported
        const matchedLocale = i18nConfig.locales.find(supportedLocale => locale.startsWith(supportedLocale)) || i18nConfig.defaultLocale;

        // Redirect to the detected locale path
        // e.g. redirect '/about' to '/en/about'
        // Add the localePrefix check
        if (matchedLocale === i18nConfig.defaultLocale && i18nConfig.localePrefix === 'never') {
             // No redirect needed for default locale if prefix is never
             return NextResponse.next();
        }

        const newUrl = new URL(`/${matchedLocale}${pathname}`, request.url);
        // Ensure query parameters and hash are preserved
        newUrl.search = request.nextUrl.search;
        if (request.nextUrl.hash) {
            newUrl.hash = request.nextUrl.hash;
        }
        
        return NextResponse.redirect(newUrl);
    }

    // Continue for paths already with a locale or other handled paths
    return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}