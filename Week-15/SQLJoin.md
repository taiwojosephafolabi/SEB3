- SQL INNER JOIN - selects records that have matching values in both tables.

Example:
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

- SQL LEFT JOIN - returns all records from the left table (table1), and the matching records from the right table (table2).

- SQL RIGHT JOIN - returns all records from the right table (table2), and the matching records from the left table (table1).
Note: In some databases RIGHT JOIN is called RIGHT OUTER JOIN.

- SQL FULL OUTER JOIN - returns all records when there is a match in left (table1) or right (table2) table records

- SQL SELF JOIN - table is joined with itself

Example:
SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;