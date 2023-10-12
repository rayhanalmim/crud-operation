import { useLoaderData } from "react-router-dom";

const UpdateData = () => {

    const data = useLoaderData();

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        console.log(user)

        fetch(`http://localhost:3000/user/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.name.value = '';
                e.target.email.value = '';
            })
    }

    return (
        <div>
            <h3>update data for: {data.name}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={data.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={data.email} id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateData;