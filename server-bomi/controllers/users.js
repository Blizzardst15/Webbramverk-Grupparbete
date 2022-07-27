import { v4 as uuid} from "uuid"

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser =(req, res)=>{
    const user = req.body;
    users.push({...user, id: uuid()});
    res.send("Students added successfully")
};

export const getUser = (req, res) => {
    const singleUser = users.filter((user) => user.id === res.params.id);
    res.send(singleUser);
};

export const deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);
    res.send("Student deleted successfully")
};

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.major = req.body.major;

    res.send("Student Updated Successfully");

};