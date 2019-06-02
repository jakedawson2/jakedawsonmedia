import React from 'react';
import { Link } from 'gatsby'

const subscribe = () => {
    return (
        <section class="subscribe">
            <div class="inner">
                <div class="clipper">
                    <h2>Subscribe</h2>
                </div>
                <div class="anim-panel">
                    <p>Get the latest info about my work</p>
                    <input type="text" name="email" placehlder="Email Address"></input>
                    <Link to="/about" class="cta">Subscribe Now</Link>
                </div>
            </div>
        </section>
    );
}

export default subscribe;
