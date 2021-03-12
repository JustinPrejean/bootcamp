The following questions have equal weightage. The 2nd question has a choice. Each answer MUST be completed within 150 words:

1. Describe pseudo-elements and discuss what are they used for?


2. What does * { box-sizing: border-box; } do? What are its advantages?
or
2. What’s the difference between inline and inline-block?


3. What are the differences between a relative, fixed, absolute and statically positioned element?

4. What are the different ways to visually hide content (and make it available only for screen readers)?


1. a pseudo-element is used to style specific sections of an element. A common are :hover, so when the mouse is over something, it will change colors. Another is nth-of-child when styling a list, it is easier to read if every other line is a different color. 

2. inline-block is able to add width/height while inline will not change. Similar to span vs block element. 

3. Static will be positioned in the flow of the document, so it will take the other elements into account when added and cannot be affected by top/bottom/right/left/z-index. 
Relative will also be positioned in the flow but can be moved, although it's movement will not affect other elements. 
Absolute will be positioned near it's closest ancestor meaning it will not be in the flow, and will be moved relative to the container it is in. 
Fixed, the item will not be in the normal flow and will not move from where it is positioned, even when scrolling. 

4. display: none;
visibility: hidden;
opacity: 0;
