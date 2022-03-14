import {getDB} from "../db.mjs"
import { ObjectID } from "bson";
import { ConnectionPoolClosedEvent } from "mongodb";

let users = [

];

async function getUsersColletion() {
    const db = await getDB();
    return db.collection("users"); 
  }

export async function getAllUsers() {
    const usersColection = await getUsersColletion();
    return usersColection.find({}).toArray();
}

export async function getUserById(id) {
    const usersColection = await getUsersColletion();
    return usersColection.findOne({_id: ObjectID(id)})
}

export async function addUser(newUser) {
    const usersColection = await getUsersColletion();
    return usersColection.insertOne(newUser);
}

export async function removeUser(id) {
    const usersColection = await getUsersColletion();
    return usersColection.deleteOne({_id: ObjectID(id)});
}

export function editUser(id, user) {
    const editedUser = {
        ...user,
        id,
    };

    users = users.map(user => user.id == id? editedUser : user);
}