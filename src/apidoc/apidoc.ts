/**
 * @api {get} /api/v1/students List all students
 * @apiName GetStudents
 * @apiGroup Students
 *
 * @apiSuccess {Object[]} students List of students.
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 404 Not Found
 *   {
 *     "message": "No students found"
 *   }
 */

/**
 * @api {post} /api/v1/students Create a new student
 * @apiName CreateStudent
 * @apiGroup Students
 *
 * @apiDescription Create a new student using a multipart/form-data request. Include student_name and birthdate fields.
 *
 * @apiParam {String} student_name Student's name.
 * @apiParam {Date} birthdate Student's birthdate (YYYY-MM-DD).
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Student created successfully",
 *     "id": 123
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "message": "Invalid value: student_name, Invalid value: birthdate"
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "message": "file not valid"
 *   }
 */

/**
 * @api {get} /api/v1/students/:id Get a student by ID
 * @apiName GetStudent
 * @apiGroup Students
 *
 * @apiParam {Number} id Student's unique ID.
 *
 * @apiSuccess {Object} student Student object.
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 404 Not Found
 *   {
 *     "message": "No students found"
 *   }
 */

/**
 * @api {put} /api/v1/students/:id Update a student by ID
 * @apiName UpdateStudent
 * @apiGroup Students
 *
 * @apiDescription Update a student using a JSON request (Content-Type: application/json).
 *
 * @apiParam {Number} id Student's unique ID.
 * @apiParam {String} [student_name] Updated student's name.
 * @apiParam {Date} [birthdate] Updated student's birthdate (YYYY-MM-DD).
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Student updated successfully",
 *     "id": 123
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "message": "Invalid value: student_name, Invalid value: birthdate"
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "message": "No students updated"
 *   }
 */

/**
 * @api {delete} /api/v1/students/:id Delete a student by ID
 * @apiName DeleteStudent
 * @apiGroup Students
 *
 * @apiParam {Number} id Student's unique ID.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Student deleted successfully",
 *     "id": 123
 *   }
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 404 Not Found
 *   {
 *     "message": "No students found"
 *   }
 */

/**
 * @api {get} /uploads/:filename Get an uploaded file
 * @apiName GetFile
 * @apiGroup Uploads
 *
 * @apiParam {String} filename File name to retrieve.
 *
 * @apiSuccess {File} file Retrieved file.
 *
 * @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 404 Not Found
 *   {
 *     "message": "File not found"
 *   }
 */
