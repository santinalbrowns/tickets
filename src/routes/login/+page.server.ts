import type { PageServerLoad } from './$types';
import { auth } from '$lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { redirect } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request }) => {

        const data = await request.FormData();
        const email = data.get("email").toString();
        const password = data.get("password").toString();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            throw redirect(302, "/tickes");
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    }
}