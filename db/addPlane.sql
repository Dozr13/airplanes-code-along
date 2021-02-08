INSERT INTO airplanes 
(plane_type, passenger_count)
VALUES
($1, $2);
-- !Can run object style as well but also need to change call in controller
-- (${type}, ${passengers})

SELECT * FROM airplanes;