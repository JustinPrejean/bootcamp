-- select first_name, last_name from employees;

-- INSERT INTO employees (employee_id, first_name, last_name, email, phone_numeric,
--                        hire_date, job_id, salary, commission_pct, manager_id, department_id)
--     VALUES (nextval('employees_seq'), 'Rahul', 'Mehta', 'RAHULM', 5125551212, CURRENT_DATE, 'AD_PRES', 100000,
--     0.3, NULL, 10);



SELECT employee_id, first_name, last_name
-- emps that make more than company average salary
FROM hr.employees WHERE salary > (
    SELECT avg(salary) FROM employees
);

SELECT employee_id, first_name, last_name, department_id
-- correlated subquery
-- emps that make more than departmental average salary
FROM hr.employees e1 WHERE salary > (
    SELECT avg(salary) FROM employees e2
    WHERE e1.department_id = e2.department_id 
);

