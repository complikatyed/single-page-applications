# NSS Exercise: WYSIWYG

### Description:

- Using vanilla JavaScript, dynamically add cards for each person (object) in the people array
- Dynamically add event listeners to each card
- When a card is clicked
  - change border to purple dotted
  - shift focus to text box
  - when user types in box, change biography text of selected card

For specific project requirements, see [requirements.md](https://github.com/complikatyed/single-page-applications/blob/master/wysiwyg/requirements.md) 

### Final Result:

![Screenshot 1: No selection](https://github.com/complikatyed/single-page-applications/blob/master/images/WYSIWYG.png)

### Lessons Learned:

- The biggest challenge of this project was figuring out where and when to dynamically add the event listeners. My first attempts caused the user-input to also be captured by any cards that had been clicked before.  In fact, the way I structured this initially stumped two instructors and a TA.  Appending a new DIV turned out to be the best way to add the cards without breaking the event listener sequence.
- Work on the single-page-applications quiz went a long way toward cementing my knowledge about how to add elements dynamically.  That project also allowed me to refactor and improve on a number of strategies I had first attempted to use in this exercise.