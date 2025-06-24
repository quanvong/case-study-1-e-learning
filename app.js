const express = require('express');
const coursesRoutes = require('./src/routes/courses.routes');
const instructorRoutes = require('./src/routes/instructors.routes');
const quizzesRoutes = require('./src/routes/quizzes.routes');
const enrollmentsRoutes = require('./src/routes/enrollments.routes');
const authsRoutes = require('./src/routes/auth.routes');
const usersRoutes = require('./src/routes/users.routes');

const app = express();

//Thiet lap middleware
app.use(express.json()); //Middleware de phan tich du lieu JSON

//Thiet lap router
app.use('/courses', coursesRoutes);
app.use('/instructors',instructorRoutes);
app.use('/quizzes', quizzesRoutes);
app.use('/enrollments', enrollmentsRoutes);
app.use('/auth', authsRoutes);
app.use('/users', usersRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});