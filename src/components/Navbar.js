import React from "react";
import logo from "../images/logo.svg";
import { ReactComponent as MenuIcon } from "../images/icon-hamburger.svg";
import { ReactComponent as CloseMenuIcon } from "../images/icon-close.svg";
import { navItems } from "../data";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
    return (
        <nav className="fixed top-0 left-0 right-0 nav-wrapper bg-neutral-white shadow-md z-10 h-nav">
            <div className="container relative  justify-between h-full">
                <img src={logo} alt="logo" />

                <ul className="hidden">
                    {navItems.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>

                <button className="hidden">Request Invite</button>
                {isMenuOpen ? (
                    <CloseMenuIcon onClick={() => setIsMenuOpen(false)} />
                ) : (
                    <MenuIcon onClick={() => setIsMenuOpen(true)} />
                )}
            </div>
        </nav>
    );
}
