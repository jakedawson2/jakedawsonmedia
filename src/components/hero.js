import React from 'react';
import { Link } from "gatsby"

const hero = () => {
    return (
        <section class="hero">
            <div class="inner">
                <div class="clipper">
                    <h1>Jake Dawson Media</h1>
                </div>
                <div class="anim-panel">
                    <p>Web Design and social media marketing</p>
                    <Link to="/about" class="read-btn primary">Contact Me</Link>
                </div>
            </div>
        </section>
    );
}

export default hero;
