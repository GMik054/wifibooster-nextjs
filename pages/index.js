import Main from "../Components/Main/Main";

export const APICallUrl = "https://www.prorepeater.com";

export const filterId = (arr, id) => arr.filter(el => Number(el.theme) === id)[0];

function Home({data}) {

    return (
        <div>
            <Main data={data}/>
        </div>
    )
}

export async function getServerSideProps() {

    const all = await fetch(`${APICallUrl}/api/content/6`);
    const reviews = await fetch(`${APICallUrl}/api/reviews?page=1&per_page=15`);
    const questions = await fetch(`${APICallUrl}/api/reviews?page=1&per_page=15&type=question`);

    const data = {
        homeAll: await all.json(),
        reviews: await reviews.json(),
        questions: await questions.json()
    }
    return {props: {data}}

}

export default Home
