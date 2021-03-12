Take a look at this code snippet

https://jsbin.com/yohivodobe/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 

2. Why can I not set the margin-top on the img with the id "pic" in the head section?


ANSWERS: 

1. Because spans are an inline-element, they only have horizontal margins and you cannot add vertical margins to them. 

2. There is already an inline styling setting the margin-top to 50px. Inline styling takes priority over internall CSS. 