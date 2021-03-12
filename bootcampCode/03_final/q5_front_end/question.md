## Task: 

Please write, test and copy here code that would create a navigation bar and pin it to the top of the viewport (it should not move as you scroll down the page).  If you use a jsbin or similar test environment, please paste its link here.
HTML: 
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Navbar</title>
</head>
<body>
     <nav>
         <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Contact</a></li>
         </ul>
     </nav>
</body>
</html>


CSS: 

*{
    margin: 0;
    padding: 0;

}
body {
    height: 300vh;
}

ul{
    list-style-type: none;
    display: flex;
    background: rgb(53, 53, 53);
    margin: 0;
    top: 0;
    padding-left: 30px;
    position: fixed;
    width: 100%;
}

li {
    padding: 15px;
}

li:hover {
    background: rgb(85, 85, 85)
}

a {
    text-decoration: none;
    color: rgb(220, 220, 220);
    font-weight: 500;
}