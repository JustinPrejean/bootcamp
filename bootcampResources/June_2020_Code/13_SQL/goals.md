<center>

### AUSTIN COMMUNITY COLLEGE 
#### Web Software Bootcamp 
</center>

# LEARNING GOALS
For the next few classes, we will be learning relational databases and working with SQL.

### Tutorial
<h3>TIME REQUIRED - 1 hour 30 min</h3>

<b>`NOTE:`</b> You will NOT have a database to write queries along with the tutorial, BUT you may want to take really good notes!!

He is using `pgadmin` to query his database, we will be using a built in extension for VSC that will allow us to do almost exactly the same functionalities.

<center>

### [Querying Data from PostgreSQL](https://app.pluralsight.com/library/courses/querying-data-postgresql/table-of-contents)

</center>


### [Quiz 17 - Basic SQL queries from Tutorial](https://docs.google.com/forms/d/e/1FAIpQLSd_-PrWb2f-ntSGUpu1RdJyhpxucoos-nm3dgsA9JacKj6T8g/viewform)

## Lectures 
Below are the slides we will be using as a basis for learning SQL. There may be changes as we progress based on where the class is as a whole. Lectures WILL NOT necessarily be in the order of the slides, so please use these as reference materials.

We will connect to the PG database during the first class.

1. [SQL - Intro/Design](https://docs.google.com/presentation/d/16Xz3VQhCJy86E9GkAPIEN4I_jK0mbINvUeRLL0sxUI0/edit?usp=sharing)
2. [SQL - Queries](https://docs.google.com/presentation/d/1ZrX2FvKO8SnxA-6Mvi0ay8S_IX7-8qsOu6P05OYMEI0/edit?usp=sharing)
<!-- 3. [SQL - ToDo App](https://docs.google.com/presentation/d/1XDJTqnDUcyWne_vJg3_y-B_p80tHMzcERQ0JLmXv-w8/edit?usp=sharing) -->

## Self Learning Suggestions

If you would like to get more experience with basic SQL queries, please take a look at the following:

1. [W3Schools SQL tutorial](https://www.w3schools.com/sql/)

    This is an excellent intro the basics of SQL. 

1. [SQL Tutorial on Khan Academy](https://www.khanacademy.org/computing/computer-programming/sql)

    This gives you more hands on practice.  If you finish reviewing the above two, start with this one.

<!-- 1. [Youtube Learn Postgres for Beginners](https://www.youtube.com/playlist?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN)

    This training is designed and demonstrated on a Mac.  So if you are on a Mac, you would be able to follow along.  If you are on Windows or Linux, you may have to adapt to the Corey Schafer (instructor)'s steps.  For example, you may use the Postgres DB provided by the Bootcamp instructors and specified in the first slide deck above. -->




#  PROJECTS
SQL is best learned by practice, practice, practice.  Learning concepts from secondary sources is necessary to start, but to grasp the underlying concepts you must write the queries and check the output of those while fine-tuning the results until you can get exactly what you are looking for (or asked for).

## Project 1
Try the following questions on the database provided in class and add the queries to a file in your github repository. You can add individually or add to one text file and save to your repo.

#### Task 1:

1. Please find all employees that have a salary greater than 30000 and less than 40000
- using AND operator
- using BETWEEN operator

#### Task 2:

1. List the employees whose last name is longer than 6 characters.  
2. In this query, return the first 6 characters of their last names, the jobs they perform and their salary.

**Hint:** find appropriate string functions that would help you get this done.

#### Task 3:

1. Please find all employees that have a salary greater than 8000, and those hired after 1996 (use implicit conversion of a date as a string to the DATE type).  
2. Create a separate query to find the lowest salary in the company (look for a SQL math function from references or Google search which allows you find the minimum in a set or a column).
3. In the first query you wrote above, please also report the employee's total compensation (salary + commission, if any) as a percentage of the minimum salary in the company from the #2 above.

#### Task 4: 

  List the full names and their department names of the all employees in the "bootcamp" database.  Do the same for the employees
  that work for department "Sales".  Order the results by hiring date with the most recent hires at the top.
  
  Hint: you may NOT look up the department_id of "Sales", but use the text "Sales" in the query.  Do something like `... WHERE department_name = 'Sales'`  
  
  
  What you would expect to see is somthing like this:

```
         Full Name     |    Department    
    -------------------+------------------
     Lex De Haan       | Executive
     Susan Mavris      | Human Resources
     William Gietz     | Accounting
     Hermann Baer      | Public Relations
     Shelley Higgins   | Accounting
     Daniel Faviet     | Finance
     ...
 ```
 
 #### Task 5: 
 
   List the first, last, email, department name and city of all employees that are Execs.
   
   Hint: Join between EMPLOYEES, DEPARTMENTS and LOCATIONS using DEPARTMENT_NAME = 'appropriate department name'.
   
   What you would expect to see is something similar to this:
   ```
   FIRST      LAST       EMAIL      DEPT       CITY
   ---------- ---------- ---------- ---------- ------------
   Steven     King       SKING      Executive  Seattle
   Neena      Kochhar    NKOCHHAR   Executive  Seattle
   Lex        De Haan    LDEHAAN    Executive  Seattle
   Seely      Bruce      bman       Executive  Seattle
   Stephen    Noyce      snoyce     Executive  Seattle
   ...
   ```

#### Task 6: 

  To the above query, add the manager's first name to the column list.
  
  Hint: add a self join to the EMPLOYEES table all over again giving it a different alias.   
  
  Make changes so that all 22 employees are listed (for this requirement, think about using outer joins.  You may wait till we have covered outer joins in class.)  
  
  What you would expect to see is something similar to this:
  
  ```
  FIRST      LAST       EMAIL      MANAGER    DEPT       CITY
  ---------- ---------- ---------- ---------- ---------- ----------
  Neena      Kochhar    nkocchar   Steven     Executive  Seattle
  Lex        De Haan    ldehaan    Steven     Executive  Seattle
  Seely      Bruce      bman       Steven     Executive  Seattle
  Stephen    Noyce      snoyce     Steven     Executive  Seattle
  ...
  ```


#### Task 7: 

  Find out how many employees were hired in each year.  List years and counts of employees hired in those years.  See sample output below.  
  
  Hint: use grouping after extracting the year of hire.
  
  Then leave out those who years where less than 2 employees were hired, while ordering the results chronologically.

  You should see something smiliar to this:
    
  ```
     year_of_hiring | count 
    ----------------+-------
               1997 |     2
               2004 |     2
               2006 |     3
               2007 |     3
               2008 |     3
               2009 |     2
    (6 rows)
  ```
<hr>

## Project #2

We will rebuild our Mongo Todo App in class. In order to truly understand this, researching the following before the class where we build the ToDo App:

[NPM PG and documentation](https://node-postgres.com/)

