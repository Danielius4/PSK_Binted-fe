import ExerciseListing from "./ExerciseListing";
import LogList from "./LogList";

interface Log {
    id: string;
    date: string;
    weight: number;
    reps: number;
    sets: number;
    comment: string;
}

interface Exercise {
    id: string;
    name: string;
    goal: string;
    records: Log[];
}

interface ExerciseListProps {
    exercises: Exercise[];
}

function ExerciseList(props: ExerciseListProps) {
    return (
        <div className="exercise-list">
            <h1 className="mb-4">My exercises</h1>
            <ul className="ps-0">
                {props.exercises.map((exercise) => (
                    <li key={exercise.id}>
                    <ExerciseListing id={exercise.id} name={exercise.name}/>
                    <LogList logs={exercise.records} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ExerciseList;