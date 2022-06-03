import Layout from "../components/Layout"
import About from "./About"
import DAO from "./DAO";
import Marketplace from "./Marketplace";
import Roadmap from "./Roadmap";
import Subscribe from "./Subscribe";
import Team from "./Team";
import Extra from "./Extra";

const Home = () => {
    return (
        <div>
            <Layout>
                <About />
                <Extra/>
                <DAO />
                <Marketplace />
                <Roadmap />
                <Team />
                <Subscribe />
            </Layout>
        </div>
    )
}

export default Home;