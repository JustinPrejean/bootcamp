## Question A (30% credit): 

Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

Hint: you may put it in a sample page, load it and check out the network tab in the Devtools.

Case 1:
    `<img src="dog.jpg" style="visibility: hidden" alt="my dog">`

Case 2:
    `<img src="dog.jpg" style="display:none" alt="my dog">`


## Question B (30% credit)

1. What are `data-` attributes good for? (100 words max)

2. Describe the differences between a cookie, sessionStorage and localStorage and when would you use each of them. Please make it your answer, and not a copy and paste from somwhere (150 words max)


Question A:

Case 1: 
Yes it does because the space is still allocated to the image but not shown

Case 2:
No because the image can be manipulated in the DOM but otherwise is not rendered at all

Question B:

1. data-* attributes are used to store data in HTML elements that is private to the page. Good for situations where the data changes while the page/application is being used because it easily referenced in JS through the dom. 

2. localStorage and sessionStorage are both stored locally, only read on the client-side and both have around 5mb of storage. localStorage does not expire whereas sessionStorage expires once the browser is closed. Cookies expiration can be given a set duration, typically read on server-side and very limited storage. Cookies are good for information that you will want to use if the user can use when they return to the page(ID/email) but are often cleared. sessionStorage is good for one session use where it's meant to restart each time the user comes back(throwback: addictinggames.com). localStorage is less often cleared, good for likely reusability, search bar history/autofill