import { useParams } from "react-router-dom"

function ExploreGoal() {
    const params = useParams();
    return (<h1>{params.goalId}</h1>)
}

export default ExploreGoal
