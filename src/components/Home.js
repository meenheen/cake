import { Banner } from '../components/Banner'


const BannerStyle = {
    backgroundImage:"url(Banner.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "50vh",
    color: "white"
}

export function Home( props ) {
    props.items().then( (articles) => {
        console.log(articles)
    } )
    return(
        <main className="home">
            <Banner text="Welcome" style={BannerStyle} />
            <h1>Home</h1>
        </main>
    )
}

export default Home