When does React's Virtual DOM update the real DOM?

ANSWER: 

The virtual DOM waits until the changes have been made completely in the virtual DOM before updating the real DOM. Event at that point it compares the difference between the current version and the previous version and sends a batch update to make the real DOM match the current virutal DOM. 