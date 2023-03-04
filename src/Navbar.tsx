import PocketBase from 'pocketbase';
import { createResource, Show } from 'solid-js';

function Navbar() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const pocketbaseAuth:any = localStorage.getItem('pocketbase_auth');
    console.log(pocketbaseAuth)
    const authData = createResource(async () => { await pb.collection('users').authWithPassword(
        JSON.parse(pocketbaseAuth).model.email,
        JSON.parse(pocketbaseAuth).model.password,
    );})//Ok for some reason, auth is empty
    pb.collection('users').authRefresh()
    console.log("veri", pb.authStore.isValid)

    return (
        <div class="navbar">
            <div class="main">
                <a href="/" class="item active">Home</a>
                <a href="/post/latest" class="item">Post</a>

            </div>

            <div class="secondary">
                <Show
                    when={pb.authStore.isValid}
                >
                    <a href="/login" class="item">User</a>
                </Show>
                <Show
                    when={!pb.authStore.isValid}
                >
                    <a href="/register" class="item">Register</a>
                    <a href="/login" class="item">Login</a>
                </Show>
            </div>
        </div>
    )
}

export default Navbar;