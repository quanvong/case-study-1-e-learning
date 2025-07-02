const express = require('express');
const courseRouter = require('./routes/course.routes.js');
const instructorRouter = require('./routes/instructor.routes.js');
const userRouter = require('./routes/user.routes.js');
const enrollmentRouter = require('./routes/enrollment.routes.js');
const quizRouter = require('./routes/quizz.routes.js');
const authRouter = require('./routes/auth.routes.js');

require('dotenv').config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

//Router
app.use('/courses', courseRouter);
app.use('/instructors', instructorRouter);
app.use('/users', userRouter);
app.use('/enrollments', enrollmentRouter);
app.use('/quizzes', quizRouter);
app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
