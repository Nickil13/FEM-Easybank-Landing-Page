import React, { useState } from "react";
import Article from "./components/Article";
import Card from "./components/Card";
import Footer from "./components/Footer";
import MenuModal from "./components/MenuModal";
import Navbar from "./components/Navbar";
import { articleData, cardData } from "./data";
import phones from "./images/image-mockups.png";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="App">
            <header>
                <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
                {/* Hero */}
                <div className="relative bg-intro-mobile bg-no-repeat w-full pt-[320px] bg-[center_top_-65px] mb-20">
                    <div className="container">
                        <div className="absolute -top-[122px] left-4 right-4 ">
                            <img
                                className="w-full h-full object-cover"
                                src={phones}
                                alt="phones"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-h1 leading-tight mb-4">
                                Next generation digital banking
                            </h1>
                            <p className="mb-8">
                                Take your financial life online. Your Easybank
                                account will be a one-stop-shop for spending,
                                saving, budgeting, investing, and much more.
                            </p>
                            <button className="btn">Request Invite</button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="text-center py-16 bg-neutral-light-grayish-blue">
                    {/* flex flex-col items-center justify-center */}
                    <div className="container flex-col">
                        <h2 className="text-h2 leading-tight mb-4">
                            Why choose Easybank?
                        </h2>
                        <p className="mb-16">
                            We leverage Open Banking to turn your bank account
                            into your financial hub. Control your finances like
                            never before.
                        </p>
                        <div className="">
                            {cardData.map((card, index) => {
                                return <Card key={index} {...card} />;
                            })}
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Latest Articles</h2>
                    {articleData.map((article, index) => {
                        return <Article key={index} {...article} />;
                    })}
                </section>
                {isMenuOpen && <MenuModal />}
            </main>
            <Footer />
        </div>
    );
}

export default App;
