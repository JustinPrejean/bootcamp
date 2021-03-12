SELECT e.first_name || ' ' || e.last_name as "Employee", m.first_name || ' ' ||
m.last_name as "Emp Manager", d.department_name as "Department", dm.first_name
|| ' ' || dm.last_name as "Dept Manager" FROM employees m INNER JOIN employees e
ON (m.employee_id = e.manager_id) LEFT JOIN departments d ON (e.department_id =
d.department_id) LEFT JOIN employees dm ON (d.manager_id = dm.employee_id);

I assumed nulls in department/manager were okay as long as the employees
existed.

<!-- Correct -->