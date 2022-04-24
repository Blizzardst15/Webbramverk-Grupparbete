//Båmi 

import React from "react";
import { useState } from "react";
import { get, post, put, taBort} from './utility/apib';


const Header = (props) => {

  const [infos, setInfos] = useState([])
  // const [apiid, setApiId] = useState(0)
  const [counter, setCounter] = useState(0)


  console.log("props", props, props.title);

  return (
    <header>
      <h3 style={{ textAlign: "center" }}>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChange();
          }}
        >
          {props.title}
        </a>
      </h3>
    </header>
  );
};

const Nav = (props) => {
  const lists = [];

  for (let i = 0; i < props.topics.length; i++) {
    let to = props.topics[i];
    lists.push(
      <li key={to.id}>
        <a
          style={{ textAlign: "center" }}
          id={to.id}
          href={"/read" + to.id}
          onClick={(event) => {

          get('./api/read').then((response)=>
          setInfos(response.data)
      
            )

        
            event.preventDefault();
            props.onChange(Number(event.target.id));
          }}
        >
          {/* title:{to.title} , FirstName : {to.firstname}, LastName :{" "}
          {to.lastname}, Email :{to.email}, Major: {to.major} */}
          {to.title}, {to.firstname}, {to.firstname}, {to.lastname}, {to.email},{" "}
          {to.major}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lists}</ol>
    </nav>
  );
};

const Article = (props) => {
  return (
    <article style={{ textAlign: "center" }}>
      <h5>{props.title}</h5>
      <h5>{props.firstname}</h5>
      <h5>{props.lastname}</h5>
      <h5>{props.email}</h5>
      <h5>{props.major}</h5>
    </article>
  );
};

const Create = (props) => {
  return (
    <article>
      <h5>Så här fyller du i en ansökan om Jensen YH utbildning</h5>
      <form
        // style={{ display: "flex" }}
        onSubmit={(event) => {
          event.preventDefault();

          const title = event.target.title.value;
          const firstname = event.target.firstname.value;
          const lastname = event.target.lastname.value;
          const email = event.target.email.value;
          const major = event.target.major.value;

          props.onCreate(title, firstname, lastname, email, major);
      
          post('/api/create',{
        
          // title:"",
          // firstname:"",
          // lastname:"",
          // email:"",
          // major:"",

          title: counter,
          firstname:"Create" + counter,
          lastname:"React" + counter,
          email: "email@yahoo.com" + counter,
          major: "FrontendWebb/App" + counter,
        
        })
        setCounter((previous)=> previous + 1)
      
      
        }}
      >
        <p>
          <input
            style={{ marginLeft: "20px", width: "300px", size: "5" }}
            type="text"
            name="title"
            placeholder="Kista JensenYH eller Göteborg  JensenYH ?..."
          />
        </p>
        <p>
          <input
            style={{ marginLeft: "20px" }}
            type="text"
            name="firstname"
            placeholder="Write FirstName..."
          />
        </p>
        <p>
          <input
            style={{ marginLeft: "20px" }}
            type="text"
            name="lastname"
            placeholder="Write LastName..."
          />
        </p>
        <p>
          <input
            style={{ marginLeft: "20px" }}
            type="text"
            name="email"
            placeholder="Write Email..."
          />
        </p>
        <p>
          <input
            style={{ marginLeft: "20px" }}
            type="text"
            name="major"
            placeholder="Write Major..."
          />
        </p>
        <p>
          <input
            style={{ marginLeft: "20px" }}
            type="submit"
            value="Create ansökan"
          ></input>
        </p>

  
      </form>

    </article>
  );
};

const Update = (props) => {
  const [title, setTitle] = useState(props.title);
  const [firstname, setFirstname] = useState(props.firstname);
  const [lastname, setLastname] = useState(props.lastname);
  const [email, setEmail] = useState(props.email);
  const [major, setMajor] = useState(props.major);

  return (
    <article>
      <h6>Update om ansökan</h6>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const title = event.target.title.value;
          const firstname = event.target.firstname.value;
          const lastname = event.target.lastname.value;
          const email = event.target.email.value;
          const major = event.target.major.value;

          props.onUpdate(title, firstname, lastname, email, major);

          put(`./api/update/${id}`,{
            firstname : "Jensen",
            lastname: "Yh",
            email: "Jensen@email.com",
            major: "Updated major",
          }).then((response)=> console.log(response))

        }}
      >
        <p>
          <input
            style={{ textAlign: "left", width: "300px", size: "5" }}
            type="text"
            name="title"
            placeholder="Kista JensenYH eller Göteborg  JensenYH ?..."
            value={title}
            onChange={(event) => {

              console.log(event.target.value);
              setTitle(event.target.value);
            }}
          />
        </p>
        <p>
          <input
            type="text"
            name="firstname"
            placeholder="Write FirstName..."
            value={firstname}
            onChange={(event) => {
              // put(`/api/update/${firstname}`)
              console.log(event.target.value);
              setFirstname(event.target.value);
            }}
            // .then((response)=>console.log(response))
          />
        </p>
        <p>
          <input
            type="text"
            name="lastname"
            placeholder="Write LastName..."
            value={lastname}
            onChange={(event) => {
        
              console.log(event.target.value);
              setLastname(event.target.value);
            }}
          />
        </p>
        <p>
          <input
            type="text"
            name="email"
            placeholder="Write Email..."
            value={email}
            onChange={(event) => {
          
              console.log(event.target.value);
              setEmail(event.target.value);
            }}
          />
        </p>
        <p>
          <input
            type="text"
            name="major"
            placeholder="Write Major..."
            value={major}
            onChange={(event) => {
          
              console.log(event.target.value);
              setMajor(event.target.value);
            }}
          />
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
};

const Students = () => {
  const [uimode, setUimode] = useState("Welcome");
  console.log(uimode);

  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(3);

  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "Jensen Yh i Göteborg",
      firstname: "Rafunzel",
      lastname: "Picasso",
      email: "email@com",
      major: "FrontendWebb Säkerhet",
    },
    {
      id: 2,
      title: "Jensen Yh i Kista",
      firstname: "Alfons",
      lastname: "Longlongstrum",
      email: "email@com",
      major: "AWS Test",
    },
  ]);

  let index = null;

  let updateControl = null;

  if (uimode === "Welcome") {
    index = (
      <Article
        title="Welcome"
        firstname="1.FirstName: Lorem 🤹‍♀️ 🌾"
        lastname="2.LastName: Ipsum"
        email="3.Email: roliglorem@gmail.com"
        major="4.Major: Frontend Webbsäkerhet"
      ></Article>
    );
  } else if (uimode === "Read") {
    let title,
      firstname,
      lastname,
      email,
      major = null;

    for (let i = 0; i < topics.length; i++) {
      // console.log(submitlists[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        firstname = topics[i].firstname;
        lastname = topics[i].lastname;
        email = topics[i].email;
        major = topics[i].major;
      }
    }

    index = (
      <Article
        title={title}
        firstname={firstname}
        lastname={lastname}
        email={email}
        major={major}
      ></Article>
    );

    updateControl = (
      <>
        <li>
          {" "}
          <a
            href={"/update/" + id}
            onClick={(event) => {
              
            put(`/api/update/${id}`,{
            firstname : "Updated Jensen",
            lastname: "Updated Yh",
            email: "Jensen@email.com",
            major: "Updated major",
            }).then((response)=>console.log(response))

              event.preventDefault();
              setUimode("UPDATE");
            
            }}
          >
            {" "}
            Update{" "}
          
          </a>{" "}
        </li>
        <li>
          <input
            type="button"
            value="Delete"
            onClick={() => {
            
            taBort(`/api/delete/${id}`)

        

              const newTopics = [];
              for (let i = 0; i < topics.length; i++) {
                if (topics[i].id !== id) {
                  newTopics.push(topics[i]);
                }
              }
              setTopics(newTopics);
              setUimode("Welcome");
            }}
          />
        </li>
      </>
    );
  } else if (uimode === "CREATE") {
    index = (
      <Create
        onCreate={(_title, _firstname, _lastname, _email, _major) => {
          const newTopic = {
            id: nextId,
            title: _title,
            firstname: _firstname,
            lastname: _lastname,
            email: _email,
            major: _major,
          };

          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);

          setUimode("Read");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (uimode === "UPDATE") {
    let title,
      firstname,
      lastname,
      email,
      major = null;

    for (let i = 0; i < topics.length; i++) {
      // console.log([i]topics.id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        firstname = topics[i].firstname;
        lastname = topics[i].lastname;
        email = topics[i].email;
        major = topics[i].major;
      }
    }

    index = (
      <Update
        title={title}
        firstname={firstname}
        lastname={lastname}
        email={email}
        major={major}
        onUpdate={(title, firstname, lastname, email, major) => {
          console.log(title, firstname, lastname, email, major);

          const newTopics = [...topics];
          const updatedTopic = {

            id: id,
            title: title,
            firstname: firstname,
            lastname: lastname,
            email: email,
            major: major,
          };
          for (let i = 0; i < newTopics.length; i++) {
            if ((newTopics[i].id = id)) {
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);
          setUimode("Read");
        }}
      ></Update>
    
    );
  }

  return (

    <>
    <div>
      <h3 style={{ textAlign: "center" }} title="Jensen YH">
        Välkommen Jensen YH!
      </h3>
      <h5 style={{ textAlign: "center" }}>
        (Ny utbildning 2022: IT 💻 & music ♩♪♫♬♭♮♯ & 🍰☕🌮 eating broadcasting!
        Comming soon! )
      </h5>
      <Header
        title="Jensen Yh Ansökan"
        onChange={() => {
          alert(
            "(🌻🎬  (\\__/)(=’.’=☆(”)_(”)☆ Hej !");
          setUimode("Welcome");
        }}
      ></Header>
      <p style={{ textAlign: "center" }}> Ansökans expemel 🌷 💻 📑 </p>
      <Nav
        topics={topics}
        onChange={(_id) => {
          // alert(id);
          setUimode("Read");
          setId(_id);
        }}
      ></Nav>
      {index}

      <ul>
        <li>
          {" "}
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setUimode("CREATE");
            }}
          >
            {" "}
            Click! Add Ansökan !{" "}
          </a>{" "}

  
        </li>

        {updateControl}

      </ul>
    

    </div>
    

    </>

  );
};

export default Students;
