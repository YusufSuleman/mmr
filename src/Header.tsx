//@ts-nocheck
import { Component } from "solid-js";
import Navbar from "./Navbar";
import PocketBase from 'pocketbase';

function Header() {
    return(
        <div class="header">
            <div class="title">Lorem</div>
            <Navbar></Navbar>
        </div>
    )
}

export default Header;