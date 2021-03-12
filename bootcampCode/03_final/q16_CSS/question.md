## Question A (40% credit):

In CSS3, how would you select:

  - Every `<a>` element whose `href` attribute value begins with “https”.
  - Every `<a>` element whose `href` attribute value ends with “.pdf”.
  - Every `<a>` element whose `href` attribute value contains the substring “css”.

## Question B (30% credit):

What is the purpose of the z-index and how is it used? What possible values does the z-index take (e.g. one of those is "auto")?

Question A:
a[href^="https"]
a[href$=".pdf"]
a[href*="css"]

Question B:
the z-index specifies the order of the elements on the z-axis. It takes integers, typically use ones around zero. The lower the integer, the farther from "front"/observer it will be. 
an element with -3 will be behind an element with a z-index of 0. 