import React from 'react';
import { Link } from 'gatsby';

const sidebar = () => {
    return (
        <section class="sidebar">
            <div class="inner">
                <div class="clipper">
                    <h2>Featured</h2>
                </div>
                <div class="anim-panel">
                    <p>lorem ipsum </p>
                    <Link to="/about" class="read-btn">About Me</Link>
                </div>
            </div>
        </section>
    );
}

export default sidebar;
