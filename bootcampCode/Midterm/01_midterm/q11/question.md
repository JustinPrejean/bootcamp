### Question 11:

Write the jQuery code to set the background color of alternative paragraph elements to light grey color (#ddd). Provide complete sample code, either pasted below or link to a codepen (or similar tool)

<!DOCTYPE html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
    <p>Paragraph 4</p>
    <p>Paragraph 5</p>
    <p>Paragraph 6</p>
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
    $("p:odd").css("background-color", "#ddd");
  </script>
</html>
