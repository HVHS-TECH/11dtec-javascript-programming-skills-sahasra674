<!DOCTYPE html>
<html>
<head>
  <title>For Loop Total</title>
</head>
<body>
  <script>
    alert("Welcome to the program!");

    let total = 0;
    let number = 0;

    for (let count = 0; count < 5; count++) {
      number = Number(prompt("Enter a number:"));
      total = total + number;
    }

    alert("The total is: " + total);
  </script>
</body>
</html>