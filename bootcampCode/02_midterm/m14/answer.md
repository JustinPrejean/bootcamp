1. undefined 'Julia Roberts'
<!-- Correct -->

why: starsName is only assigned the function getName and there is no "knownAs"
for this.knownAs to return. star.getName() specifically calls the function
getName() while also having knownAs in the star object for this.knownAs to refer
to/return

<!-- Correct it has to do with the scoping of "this"-->