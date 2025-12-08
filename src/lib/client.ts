import { treaty } from '@elysiajs/eden'
import type { App } from '../app/api/[[...slugs]]/route'

const baseURL =
    typeof window === "undefined"
        ? process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        : window.location.origin;

export const client = treaty<App>(baseURL).api;
