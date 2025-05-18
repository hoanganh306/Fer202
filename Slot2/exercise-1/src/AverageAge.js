export default function AverageAges(props) {
    const occuList = {};
    props.people.forEach(person => {
        const key = person.occupation;
        if (!occuList[key]) {
            occuList[key] = [];
        }
        occuList[key].push(Number(person.age));
    });

    const averageAges = {};
    const keys = Object.keys(occuList);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const ages = occuList[key];
        let sum = 0;
        for (let j = 0; j < ages.length; j++) {
            sum += ages[j];
        }
        averageAges[key] = (sum / ages.length).toFixed(2);
    }

    return (
            <ul>
                {Object.entries(averageAges).map(([occupation, avgAge]) => (
                    <li key={occupation}>
                        {occupation}: {avgAge} tuổi
                    </li>
                ))}
            </ul>
    );
}
