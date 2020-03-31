**REST API DOCUMENTATION**
----
* **BaseURL**
http://localhost:3000

**Return List of Todo**

* **URL**

  _/todos_

* **Method:**

  `GET`

* **Success Response:**
  

  * **Code:** 200 <br />
   ```javascript
   {
    "id": 1,
    "title": "Task 1 D1",
    "description": "fancy todo",
    "status": true,
    "due_date": "2020-04-25T00:00:00.000Z",
    "createdAt": "2020-03-30T10:10:10.711Z",
    "updatedAt": "2020-03-30T23:21:22.838Z"
   }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{...}` <br /> <br />





**Return List of Todo By Id**

* **URL**

  _/todos/:id_

* **Method:**

  `GET`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
```javascript
   {
    "id": 1,
    "title": "Task 1 D1",
    "description": "fancy todo",
    "status": true,
    "due_date": "2020-04-25T00:00:00.000Z",
    "createdAt": "2020-03-30T10:10:10.711Z",
    "updatedAt": "2020-03-30T23:21:22.838Z"
   }
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{...}` <br /> <br />




**Create Todo**

* **URL**

  _/todos/:id_

* **Method:**

  `POST`

* **Data Params**
```javascript
    title=[integer],
    description=[integer],
    status=[boolean],
    due_date=[date]
```

* **Success Response:**

  * **Code:** 201 <br />
```javascript
   {
    "id": 1,
    "title": "Task 1 D1",
    "description": "fancy todo",
    "status": true,
    "due_date": "2020-04-25T00:00:00.000Z",
    "createdAt": "2020-03-30T10:10:10.711Z",
    "updatedAt": "2020-03-30T23:21:22.838Z"
   }
```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "SequelizeValidationError" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{...}` <br /> <br />




**Delete Todo**

* **URL**

  _/todos/:id_

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
```javascript
   {
    "id": 1,
    "title": "Task 1 D1",
    "description": "fancy todo",
    "status": true,
    "due_date": "2020-04-25T00:00:00.000Z",
    "createdAt": "2020-03-30T10:10:10.711Z",
    "updatedAt": "2020-03-30T23:21:22.838Z"
   }
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{...}` <br /> <br />




**Update Todo**

* **URL**

  _/todos/:id_

* **Method:**

  `DELETE`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   `id=[integer]`

* **Data Params**
```javascript
    title=[integer],
    description=[integer],
    status=[boolean],
    due_date=[date]
```

* **Success Response:**

  * **Code:** 200 <br />
```javascript
   {
    "id": 1,
    "title": "Task 1 D1",
    "description": "fancy todo",
    "status": true,
    "due_date": "2020-04-25T00:00:00.000Z",
    "createdAt": "2020-03-30T10:10:10.711Z",
    "updatedAt": "2020-03-30T23:21:22.838Z"
   }
```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "SequelizeValidationError" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{...}` <br /> <br />
