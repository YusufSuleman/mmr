import { createEffect, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import PocketBase from 'pocketbase';

function Login() {
    const [fields, setFields] = createStore();
    const pb = new PocketBase('http://127.0.0.1:8090');

    //@ts-expect-error
    function login(e) {
        e.preventDefault();
    
        pb.collection('users').authWithPassword(fields.email, fields.password);
    
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model?.id);
    }
    return(
        <div class="content-body">
        <div class="content-body register">
            <form onSubmit={login}>
                Email: <br />
                <input type="text" name="email" placeholder="Email" onInput={(e) => {setFields("email", e.target.value)}} /> <br />
                Password <br />
                <input type="password" name="password" placeholder="Password" minlength="10" onInput={(e) => {setFields("password", e.target.value)}}  /> <br />
                {/* Password Confirm: <br /> */}
                {/* <input type="password" name="passwordConfirm" placeholder="Password Confirm" minlength="10" onInput={(e) => {setPasswordConfirm(e.currentTarget.value)}} /> <br /> */}
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login