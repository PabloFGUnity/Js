/*Ejercicio 1 */
select count(*)
from world.city
where CountryCode = 'ESP'
  and Population > 100000;
/*Ejercicio 2 */
select count(indepyear)
from world.country;
/*Ejercicio 3*/
select avg(population)
from world.country;
/*Ejercicio 4*/
select avg(population)
from world.country
where continent = 'Europe';
/*Ejercicio 5*/
select distinct(indepyear)
from world.country
where IndepYear > 1990;
/*Ejercicio 6*/
select count(*)
from world.city
where countrycode = 'ITA'
  and (
    name like '%a%'
    or name like '%e%'
    or name like '%o%'
  );
/*Ejercicio 7*/
select sum(quantityOrdered * priceEach)
from classicmodels.orderdetails;
/*Ejercicio 8*/
select count(*)
from classicmodels.orderdetails
where orderdetails.quantityOrdered * orderdetails.priceEach between 10000 and 20000;
/*Ejercicio 9*/
select count(*)
from world.country
where IndepYear is null;
/*Ejercicio 10*/
select count(*)
from world.country
where IndepYear between 1920 and 1950;
/*Ejercicio 11*/
select count(*)
from world.city
where CountryCode = 'FRA'
  and name like '%is';
/*Ejercicio 12*/
select avg(IndepYear),
  max(IndepYear),
  min(IndepYear)
FROM world.country;
/*Ejercicio 13*/
select distinct continent
from world.country
where IndepYear is not null;
/*Ejercicio 14*/
select count(*)
from world.country
where Continent = 'Africa';
/*Ejercicio 15*/
select IndepYear,
  count(*)
from world.country
where IndepYear > 1980
group by IndepYear;
/*Ejercicio 16*/
select IndepYear,
  count(*)
from world.country
where IndepYear > 1980
group by IndepYear
having count(*) > 1;
/*Ejercicio 17*/
select name,
  count(*)
from world.city
group by name
having count(*) > 1;
/*Ejercicio 18*/
select count(*)
from world.city,
  world.countrylanguage
where Population > 1000000
  and Language = 'Spanish'
  and city.countrycode = countrylanguage.countrycode;
/*Ejercicio 18 con join*/
select *
from country
  join city on country.code = city.countrycode
  join countrylanguage l on country.code = l.CountryCode
where city.population > 1000000
  and l.language = 'Spanish';
/*Ejercicio 19*/
select count(distinct customers.customerNumber)
from classicmodels.customers,
  classicmodels.orders,
  classicmodels.orderdetails
where orderdetails.productCode = 'S24_1937'
  and orderdetails.orderNumber = orders.orderNumber
  and orders.customerNumber = customers.customerNumber;
/*Ejercicio 20*/
select productlines.textDescription,
  max(products.buyPrice) as maximo,
  min(products.buyPrice) as minimo,
  avg(products.buyPrice) as media
from classicmodels.products,
  classicmodels.productlines
where productlines.productLine = products.productLine
group by 1;
/*Ejercicio 21*/
select concat(empleado.firstName, ' ', empleado.lastName) as empleado,
  concat(jefe.firstName, ' ', jefe.lastName) as jefe
from classicmodels.employees as empleado
  join classicmodels.employees as jefe on empleado.reportsTo = jefe.employeeNumber;
/*Ejercicio 22*/
select concat(employees.firstName, ' ', employees.lastName) as empleado,
  extract(
    YEAR_MONTH
    from orders.orderDate
  ) as aniomes,
  sum(
    orderdetails.quantityOrdered * orderdetails.priceEach
  ) as ventas
from classicmodels.customers,
  classicmodels.orders,
  classicmodels.orderdetails,
  classicmodels.employees
where customers.customerNumber = orders.customerNumber
  and orders.orderNumber = orderdetails.orderNumber
  and customers.salesRepEmployeeNumber = employees.employeeNumber
group by 1,
  2;
/* Ejercicio 22 con join */
select concat(employees.firstName, ' ', employees.lastName) as empleado,
  extract(
    YEAR_MONTH
    from orders.orderDate
  ) as aniomes,
  sum(
    orderdetails.quantityOrdered * orderdetails.priceEach
  ) as ventas
from classicmodels.customers
  join classicmodels.orders on customers.customerNumber = orders.customerNumber
  join orderdetails on orders.orderNumber = orderdetails.orderNumber
  join classicmodels.employees on customers.salesRepEmployeeNumber = employees.employeeNumber
group by 1,
  2;
  /*Ejercicio 23*/
select concat(empleado.firstName, ' ', empleado.lastName) as empleado,
  concat(jefe.firstName, ' ', jefe.lastName) as jefe
from classicmodels.employees as empleado
  left join classicmodels.employees as jefe on empleado.reportsTo = jefe.employeeNumber;