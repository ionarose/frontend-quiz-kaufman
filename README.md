
# Quiz Kaufman


Lightwight, customisable flashcard quiz app for bootcampers learning with the School of Code.
 <link href="https://quizkaufman.netlify.app/" >Live Demo</link>
## API Reference

#### Get all questions

```http
  GET /api/questions
```


| Method | Path       | Additional Info | Result                                         | Response                                  |
| ------ | ---------- | --------------- | ---------------------------------------------- | ----------------------------------------- |
| GET    | /questions     |                 | all questions                                       | { success: Boolean, payload: questions  Array } |
| GET    | /questions      | ?search=JSX  | all questions  with JSX in the question           | { success: Boolean, payload: questions  Array } |
| GET    | /questions      | ?topic=SQL  | all questions in the topic |SQL { success: Boolean, payload: Question Array } |
| GET    | /questions /:id |                 | questions  with a particular id if it exists        | { success: Boolean, payload: question }       |
| POST   | /questions      | { body }        | create a new question                               | { success: Boolean, payload: question }       |
| PATCH  | /questions /:id | { body }        | updated question                                   | { success: Boolean, payload: question }       |
| DELETE | /questions /:id |                 | question deleted                                   | { success: Boolean, payload: question }       |
| Method | Path         | Additional Info | Result                                    | Response                                    |
| ------ | ------------ | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /topics     |                 | all topics                               | { success: Boolean, payload: topic Array } |
| GET    | /topics     | ?search=SQ  | all topics with “SQ” in their name   | { success: Boolean, payload: topic Array } |
| GET    | /topics/:id |                 | topics with a particular id if it exists | { success: Boolean, payload: topic }       |
| POST   | /topics     | { body }        | create a new topic                      | { success: Boolean, payload: topic }       |
| PATCH  | /topics/:id | { body }        | updated topic                            | { success: Boolean, payload: topic }       |
| DELETE | /topics/:id |                 | topic deleted                            | { success: Boolean, payload: topic }       |



## Appendix

Databases hosted by ElephantSQL and Railway.


## Acknowledgements

 - [CSV file to SQL table converter](https://tableconvert.com/csv-to-sql)
 - [CSS glass effect](https://css.glass/)
 
 


## Authors

- [@ionarose](https://www.github.com/ionarose)
- [@JeremyXZ](https://www.github.com/JeremyXZ)
- [@ksmaldon](https://www.github.com/ksmaldon)
- [@Mali231](https://www.github.com/Mali231)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## Features

- Customisable quiz
- Add and delete your own questions from the database
- Responsive design
- Cross platform


## Feedback

If you have any feedback, please reach out to us.


## Lessons Learned

- Always have a backup database so that you can continue workign on the project if the database server goes down.
- Make and regularly update an accurate componenet tree.
- Handle database queries on the backend for scalability.

## Roadmap

- Feature to edit questions directly inside flashcard.

- Switch data filtering and searching to backend database queries.

- Progress tracker.

- Individual user accounts and personal question databases.


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Run Locally

Clone the backend

```bash
  git clone https://github.com/SchoolOfCode/bc13_w9_project-backend-quiz-kaufman
```

Go to the project directory

```bash
  cd bc13_w9_project-backend-quiz-kaufman
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Clone the frontend

```bash
  git clone https://github.com/SchoolOfCode/bc13_w9_project-frontend-quiz-kaufman
```

Go to the project directory

```bash
  cd bc13_w9_project-frontend-quiz-kaufman
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack

**Client:** React

**Server:** Node, Express

**Databases:** ElephantSQL (postgreSQL), Railway (postgreSQL)