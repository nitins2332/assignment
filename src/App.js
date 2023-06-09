import { useEffect, useState } from "react";
import Users from "./Users";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_num, setMobile_num] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const addUser = async () => {
    await addDoc(usersCollectionRef, {
      name: name,
      age: age,
      email: email,
      mobile_num: mobile_num,
    });
    setName("");
    setAge("");
    setEmail("");
    setMobile_num("");
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [addUser, deleteUser]);

  // const addUser = async () => {};

  return (
    <div>
      <Users
        users={users}
        setName={setName}
        name={name}
        setAge={setAge}
        age={age}
        setEmail={setEmail}
        email={email}
        setMobile_num={setMobile_num}
        mobile_num={mobile_num}
        addUser={addUser}
        deleteUser={deleteUser}
      />
      {/* <h1>hello</h1> */}
    </div>
  );
}

export default App;
