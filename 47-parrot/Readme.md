# Mod4 BYOChallenge

Hi Class! You've been working really hard this week, as a last "lab" before you go into the code challenge tomorrow morning, we want to offer you a self-build project that combines many of the concepts we've been learning this mod.

Feel free to change this to me something that feels more exciting, but this should be a great start.

We'll be building a clone of a Facebook/Twitter feed with posts and comments or tweets and replies.

## Setup

- Set up a new app using `create-react-app`.
  - If you didn't use CRA before, `npm install -g create-react app` (you only need to do this once)
  - `create-react-app parrot` (name it whatever you like)
  - Follow the instructions, cd into the directory, open atom/your editor of choice.
  - Wait to start the CRA dev server until you set up your json server below.
- In a separate terminal window, set up your JSON-SErver
  - There's some starter-data in [db.json](db.json) in this repo. Move it into your project directory.
  - start json-server. `json-server -w db.json`
  - You should now have json-server run on port 3000
- now go back to the first terminal window and run `npm start` to start the CRA dev server.
  - it'll ask you if you want to run the server on a different port, becasue json-server is already using port 3000. Say yes (y).
- You should now have two servers, the CRA dev server (:3001) and the json server (:3000).

## V1 - Fetch and Render

- Take some time to sketch out what the app will look like and which components you might need.
  - You'll have a list of posts/chatter/tweets, each will have an author avatar and some content
  - Under each post you'll have some comments. Each comment will have a user/avatar on the left and a comment text to the right.

- Can you create one component that can re-use to render both the post and the comments?
  - There's a UX pattern called `Media Object` that's used a lot, read about it [here](https://philipwalton.github.io/solved-by-flexbox/demos/media-object/)

- Which components need to hold state?
- Where do you fetch the data?

## V2 - Add comments

- Add a form under each post/tweet/chatter to add a new comment
- Hard-code the user that adds the comment for now.
- Decide if you want to use optimistic rendering or not. Add a comment to your code why.
- Add the comment to the end of the list of comments.
- Post the comment to the API, save it to state.

## V3 - Routes and Users

- `npm install -s react-router-dom`
- add routes to your app, `/` shows the posts/chatter and `/profile` displays a simple form to set username and avatar.
- If the user adds data to the ProfileForm and submits, it should save the user to the Database and set it as the current user in your app state.
- Comments added now will have the current user as their author.

## V4 - Any other features

Pick your own features. Thety might be:

- add the ability to edit a post/comment
- only allow edit if the current user is the same as the author of the post/comment
- add a `/admin` route that lets you impersonate any other user. (Render a dropdown of all available users to choose)
- add a `/chatter/:id` route that displays just one post with it's comments, so we can share it.
- ... go wild
