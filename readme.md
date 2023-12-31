# Newsletter Signup

<img src="public/images/SignUp.png">

This is a Node.js application built with Express that allows users to sign up for your newsletter list. When a user signs up, their email is sent to a Mailchimp email list using the Mailchimp API. The app is deployed on Heroku, and you can visit the live demo [here](https://shrouded-inlet-73275-8436e9e5264b.herokuapp.com).

## Prerequisites

Before running the application, ensure that you have the following prerequisites installed on your machine:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:

```shell
git clone https://github.com/Pan-be/Newsletter-SignUp.git
```

2. Navigate to the project directory:

```shell
cd Newsletter-Signup
```

3. Install the dependencies:

```shell
npm install
```

4. Set up environment variables:

Create a `.env` file in the root directory of the project and add the following variables:

```plaintext
API_KEY=your-mailchimp-api-key
LIST_ID=your-mailchimp-list-id
SERVER=your-mailchimp-server-number
PORT=3000
```

Replace `your-mailchimp-api-key` with your Mailchimp API key, `your-mailchimp-list-id` with the ID of the email list you want to add subscribers to and `your-mailchimp-server-number` with the number of Mailchimp server.

## Usage

To start the application, run the following command:

```shell
npm start
```

The application will be accessible at `http://localhost:3000` by default.

## Styling with Bootstrap
The app is styled using Bootstrap, a popular CSS framework. Bootstrap provides a responsive layout and a variety of UI components, making it easy to create a visually appealing and user-friendly interface.

## Dark and Light Mode
This application offers both dark and light mode options for a personalized user experience. Users can switch between the two modes by clicking on the corresponding mode toggle button located in the bottom right corner.

## Deployment

This application is deployed on Heroku. To deploy your own instance, follow these steps:

1. Create a Heroku account if you don't have one already.

2. Install the Heroku CLI and log in to your Heroku account.

3. Create a new Heroku app:

```shell
heroku create
```

4. Set the environment variables on your Heroku app:

```shell
heroku config:set API_KEY=your-mailchimp-api-key LIST_ID=your-mailchimp-list-id SERVER=21
```

Replace `your-mailchimp-api-key` and `your-mailchimp-list-id` with your Mailchimp API key and list ID.

5. Push the code to Heroku:

```shell
git push heroku main
```

6. Open your app in the browser:

```shell
heroku open
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please feel free to create an issue or submit a pull request.

## License

[MIT License](LICENSE)
