import React from "react";
import { navItems } from "../data";

export default function MenuModal() {
    return (
        <div className="fixed inset-0 bg-primary-overlay-blue mt-nav">
            <ul className="flex flex-col gap-4 items-center justify-center bg-neutral-white rounded m-6 py-6 max-w-[330px] mx-auto ">
                {navItems.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}
