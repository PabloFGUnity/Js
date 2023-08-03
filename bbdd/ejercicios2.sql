/* Grupo de ejercicios 2*/
/* Ejercicio 1*/
SELECT count(*) FROM world.country where population < 10000;
/* Ejercicio 2*/
SELECT count(*) FROM world.country where population between 10000 and 50000;
/* Ejercicio 3 */
SELECT count(distinct continent) from world.country where LifeExpectancy < 50.0;
/* Ejercicio 4*/
SELECT count(lifeexpectancy) from world.country;
/* Ejercicio 5*/
SELECT count(*) - count(lifeexpectancy) from world.country;
SELECT count(*) from world.country where LifeExpectancy is null;
/* Ejercicio 6*/
SELECT distinct CountryCode from world.city where name in ('Cordoba','Sevilla','Cadiz');
/* Ejercicio 7*/
SELECT count(distinct district) FROM world.city where CountryCode = 'ESP';
/* Ejercicio 8*/
SELECT name, population FROM world.city where District like '%Kata%';
/* Ejercicio 9*/
SELECT GovernmentForm, count(*) FROM world.country 
where Continent = 'Europe' and (GovernmentForm like '%public%' or IndepYear < 1500)
group by 1;
/* Ejercicio 10*/
SELECT Continent, count(*) FROM world.country 
where GNP-GNPOld > 0
group by 1
order by 2 desc;
/* Ejercicio 11*/
SELECT Continent, count(*) FROM world.country 
where GNP-GNPOld > 0
group by 1
having count(*) < 10
order by 2 desc;
/* Ejercicio 12*/
SELECT country.name as pais, city.name as capital
FROM world.country join world.city
on city.id = country.Capital
AND city.countryCode = Country.ccountrylanguageode
where Continent = 'Oceania';
/* Ejercicio 13*/
SELECT country.name as pais, city.name as capital
FROM world.country join world.city
on city.id = country.Capital
join world.countrylanguage
on countrylanguage.CountryCode = city.CountryCode 
where countrylanguage.Language = 'Spanish' and Percentage > 70
order by country.Population desc;


select f.firstName as Nombre, f.productline as lineas, coalesce(total,0) as totalOk 
from ( select employeeNumber, firstName, productLine from employees,productLines) as f
left join
     ( select c.salesRepEmployeeNumber, productLine, ifnull(sum(d.quantityOrdered * priceEach),0) as Total
         from customers as c			
         left join orders as o
           on o.customerNumber = c.customerNumber
         left join orderdetails as d
           on d.orderNumber = o.orderNumber
         left join products as p
           on p.productCode = d.productCode
        group by 1, 2
	  ) as t        
on t.salesRepEmployeeNumber = f.employeeNumber
and t.productLine = f.productLine;

