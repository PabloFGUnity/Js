/* Ejercicio 1*/
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
/* Ejercicio 1 fácil */
select e.firstName as Nombre,p.productline as lineas, ifnull(sum(d.quantityOrdered * priceEach),0) as Total
from employees as e  left join customers as c
on c.salesRepEmployeeNumber = e.employeeNumber
left join orders as o
on o.customerNumber = c.customerNumber
 left join orderdetails as d
on d.orderNumber = o.orderNumber
 left join products as p
on p.productCode = d.productCode
group by 1, 2
order by 1 ;

/* ejercicio2 */
 
-- select o.country, count(*)
select o.country, count(c.customerNumber)
from offices o left join employees e
  on  o.officecode = e.officecode
left join customers c
on c.salesRepEmployeeNumber = e.employeeNumber
group by 1;

select o.country, count(*)
from offices o join employees e
  on  o.officecode = e.officecode
join customers c
on c.salesRepEmployeeNumber = e.employeeNumber
group by 1;

/* ejercicio3*/
select c.customerName as Nombre, ventas.total - pagos.total as Deuda, ventas.total as Ventas,pagos.total as Pagos
from (select o.customerNumber, sum(d.quantityOrdered * d.priceEach) as Total
		from orders as o join orderDetails as d
		on o.orderNumber = d.orderNumber
        group by 1) as Ventas
join (select p.customerNumber, sum(amount) as Total
		from payments as p
        group by 1) as Pagos
on Ventas.customerNumber = Pagos.customerNumber
join customers as c
on c.customerNumber = Ventas.customerNumber
where ventas.total <> pagos.total
order by 1;

/* ejercicio4 */
select city.Name as Ciudad
from city
where city.countryCode in (select code from country where Continent = "Europe");

select city.name, country.name
from city
join country
on city.countrycode = country.code
where country.Continent = 'Europe'
;

/* ejercicio 5*/
select city.Name as Ciudad, city.Population as Población, (select avg(Population) from city where country.Code = "ESP") as MediaPoblación
from city
join country
on city.CountryCode = country.Code
where CountryCode = "ESP" and city.Population > (select avg(Population) from city where country.Code = "ESP");

/* ejercicio 6*/
select city.Name as Ciudad, city.Population as Población, 
(select avg(Population) from city where country.Code = city.CountryCode) as MediaPoblaciónPaís
from city
join country
on city.CountryCode = country.Code
where city.Population > (select avg(Population) from city where country.Code = city.CountryCode)
order by 3 DESC;

/* ejercicio 7 */
select customers.customerName as NombreCliente, orders.orderNumber as NúmPedido
from customers
left join orders
on customers.customerNumber = orders.customerNumber
where orders.orderNumber is null;

select * from customers
where customers.customerNumber not in (select distinct orders.customerNumber from orders);

/* ejercicio 8 */
select country.Name as País, count(countrylanguage.Language) as NúmLenguas
from country
join countrylanguage
on country.Code = countrylanguage.CountryCode
group by 1
having NúmLenguas > 1;

/* ejercicio 9 */
select p.productLine,
p.productCode, p.productName, p.buyPrice, (select max(buyPrice) from products p1 where p1.productLine = p.productLine) as max
from products p 
where p.buyPrice  = (select max(buyPrice) from products p1 where p1.productLine = p.productLine);

