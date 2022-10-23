SELECT * FROM Product p
WHERE
p.name LIKE concat('%', :name, '%');