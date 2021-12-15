# Social_media

 
### Description

Social_media task is a mid project it has backend API by node express and frontend by "React Redux" and CSS for simple style.

### User Stories

*	Signup: As an anon, I can sign up on the platform so that I can start adding my post and comment also like.
*	Login:  As a user, I can login to the platform so that I can start adding my post and comment and editing and deleting them.
*	Logout: As a user, I can logout from the platform. 
*	Edit Post, Comment: As a user, I can update my task.
*	Delete Post, Comment: As a user, I can delete my task.


### Client / Frontend

#### React Router Routes (React App)


| Parameter | Component  | Permissions              | Behavior    |
| :-------- | :----------| :-------------           | :-----------| 
|  /        |   Home     | public <Route>           | Home Page   | 
|  /signup  |   signup   | anon only <AnonRoute>    | Signup form, link to login, navigate to homepage after signup | 
|  /login   |   login    | anon only <AnonRoute>    | Login form, link to signup, navigate to homepage after login |
|  /Nav     |   Nav      | user only <PrivateRoute> | The navbar has a logout button and displays it on all user pages. | 
|  /post    |   post     | user only <PrivateRoute> |The post page has an input label to add a new post and submit button to submit the post. |   


### Components

* homepage

* signup page 

* login page 

* Nav 

* post page 
  
* comment 
  
* like 

### Services
#### Auth Service

* auth.login(user)
* auth.signup(user)
* auth.logout()

#### User Service
* User.getAllTasks(token) // synchronous
* User.addNewPost()// synchronous
* User.updatePost(id)// synchronous
* User.deletePost(id)// synchronous 

### Server / Backend
#### Models

## Scehma 

User model

```bash
 {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordCode: {
      type: String,
    },
    activeCode: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    pic: {
      type: String,
      require: true,
      default:
        "https://thumbs.dreamstime.com/b/female-user-avatar-profile-picture-icon-isolated-vector-illustration-flat-design-people-character-white-background-woman-146472409.jpg",
    },
    // conform:{
    //   type: Boolean,
    // },
    deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
```

Post model

```bash 
{
    description: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    pic: {
      type: String,
      require: true,
      default:
        "https://thumbs.dreamstime.com/b/female-user-avatar-profile-picture-icon-isolated-vector-illustration-flat-design-people-character-white-background-woman-146472409.jpg",
    },
  },
  {
    timestamps: true,
  }
);

``` 
#### Backend routes 



|HTTP Method| URL         | Request Body                              | Success status| 
| :-------- | :---------- | :-------------                            | :-----------| 
|  POST     | /createrole | { role, Permissions }                     | 201      |    
|  GET      |/ role       |                                           | 200      |   
|  POST     |/posts       | {pic , description}  req.body;            | 201      |    
|  GET      |/posts       |                                           | 200      |     
|  PUT      |/posts       | { id } = req.params; { task } = req.body; |201       |     
| Delete    |/posts       | { id }                                    |201       |    


## ERD diagrm:
  
  ![ERD-Page-2 drawio](https://user-images.githubusercontent.com/92248041/145692970-ce704f7d-58a7-4b07-867e-518409133fe7.png)

## Acknowledgements

I would like to express my special thanks of gratitude to our teachers as well as our tuwaiq javaScript bootcamp who gave us the golden opportunity to do this wonderful project on the topic (Social_media), which also helped us in doing a lot of Research and we came to know about so many new things. I am really thankful to them.
