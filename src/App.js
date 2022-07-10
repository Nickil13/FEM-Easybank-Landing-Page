import Article from "./components/Article";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { articleData, cardData } from "./data";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="hero">
                <h1>Next generation digital banking</h1>
                <p>
                    Take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </p>
                <button>Request Invite</button>
            </div>
            <main>
                <section>
                    <h2>Why choose Easybank?</h2>
                    <p>
                        We leverage Open Banking to turn your bank account into
                        your financial hub. Control your finances like never
                        before.
                    </p>
                    <div>
                        {cardData.map((card, index) => {
                            return <Card key={index} {...card} />;
                        })}
                    </div>
                </section>
                <section>
                    <h2>Latest Articles</h2>
                    {articleData.map((article, index) => {
                        return <Article key={index} {...article} />;
                    })}
                </section>
            </main>
            <footer>
                About Us Contact Blog Careers Support Privacy Policy Request
                Invite © Easybank. All Rights Reserved
                <div className="attribution">
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by <a href="#">Your Name Here</a>.
                </div>
            </footer>
        </div>
    );
}

export default App;
