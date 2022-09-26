This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project root directory, you can run:

### `yarn install`

Installs all project dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

####Display posts

#####Complete

- Display posts page (MainPage.js) should display a maximum of 20 posts in descending order
- Each item should display the title
- Each item should display the description (max 10 words followed by ...)
- Each item should display the total comments
- Each item should display a button that when clicked goes to full post

#####Incomplete

- Pagination to posts page (I have added load more but not fulll pagination)
- Add functionality so a user can delete and or edit their post

####Display post by id

#####Complete

- Display full post along with a list of comments underneath in descending order

#####Incomplete

- Ability to add a comment
- Ability to delete and or edit their comment

####Create post

#####Incomplete

- Page should display a form which allows the user to create a new post

####General

#####Complete

- Navigation at top right with home and create post items

#####Notes

- I have hard coded the id after creating a new post so when you click through to view the invidual post from the main posts page, you won't see your post.
- I would create a separate PostsContext inside src/context/posts-context/PostsContext.js (and move the logic out of App.js).
- I would explore zustand state management instead of context.
- I would add unit tests using jest, enzyme and react testing library if I had more time.
- I would add e2e tests using cypress if I had more time.
