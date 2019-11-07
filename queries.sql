-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select c.CategoryName as Category, p.ProductName as Product
from [Product] as p
join Category as c on p.CategoryId= c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.Id as "Order ID", o.OrderDate as "Date Placed", s.CompanyName as "Shippers"
from Shipper as s 
join [Order] as o on s.Id = o.ShipVia
where o.OrderDate < '2012-08-09' order by o.OrderDate;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select o.Id, p.ProductName as "Product Name", od.Quantity as "Quantity"
from [Order] as o
join OrderDetail as od on od.OrderId = o.Id
join [Product] as p on od.ProductId = p.Id
where o.Id = '10251'
order by p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
Select o.Id as "Order Id"
  , c.CompanyName as "Customer Company Name"
  , e.LastName as "Employee Last Name"
from [Order] as o
join Employee as e on e.Id = o.EmployeeId
join Customer as c on c.Id = o.CustomerId;
