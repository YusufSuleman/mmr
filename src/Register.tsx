// @ts-nocheck
import { Component, createSignal } from "solid-js";
import { onMount, writeSignal } from "solid-js/types/reactive/signal";
import { createStore } from "solid-js/store";
import PocketBase from 'pocketbase';

function Register() {

    const [fields, setFields] = createStore();

    const pb = new PocketBase('http://127.0.0.1:8090');
    const register = async (e) => {
        const data = {
            "username": fields.username,
            "email": fields.email,
            "emailVisibility": false,
            "password": fields.password,
            "passwordConfirm": fields.password,
        };

        console.log(data)
        const record = await pb.collection('users').create(data);

        const authData = await pb.collection('users').authWithPassword(fields.email, fields.password);
        e.preventDefault();
        
        await pb.collection('users').authWithPassword(fields.email, fields.password);
        
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model?.id);
    }

    return (
        <div class="content-body register">
            <form onSubmit={register}>
                Email: <br />
                <input type="text" name="email" placeholder="Email" onInput={(e) => {setFields("email", e.target.value)}} /> <br />
                Name: <br />
                <input type="text" name="username" placeholder="Username" onInput={(e) => {setFields("username", e.target.value)}}  /> <br />
                Password <br />
                <input type="password" name="password" placeholder="Password" minlength="10" onInput={(e) => {setFields("password", e.target.value)}}  /> <br />
                {/* Password Confirm: <br /> */}
                {/* <input type="password" name="passwordConfirm" placeholder="Password Confirm" minlength="10" onInput={(e) => {setPasswordConfirm(e.currentTarget.value)}} /> <br /> */}
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;