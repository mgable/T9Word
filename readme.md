## T9Word Gravity.com coding assignment

### My Process

After reviewing the assignment it was clear to me this was a simple recursion problem. When I get these kinds of problems the first thing I do is make a quick flowchart to diagram the way the resursion should work. The [flowchart](https://github.com/mgable/T9Word/raw/master/flowchart.pdf "My flowchart") went though several iterations before I had a workable structure.

Once I had stepped through the flowchart to make sure my logic was correct, I built out a bare bones prototype. This is done for proof-of-concept only and is not a build towards a production quality app. That comes later.

I have not yet started developing using the TDD/BDD methodology, but in the back of my mind I am keeping a list of javascript tests to be executed in Jasmine. 

##### The Prototype
I always write my javascript in a defensive style working within well researched best practices put forth by such notables as Douglas Crockford and Nicholas Zakas. Such practices include declaring only one global variable; structuring the app using the module pattern; using closure to make private variables and methods; and keeping a clear separation of display logic from business logic (i.e. I use the MVC pattern). In addition, I always write with testability in mind. 

If there are ever any questions of performance, and there always are with recursion, I test parts of my code with tools like [jsperf.com](http://jsperf.com/t9wordloop "My Loop Tests") to make sure I have selected the best method. In this case, I have tested the loop within the resursive function to make sure it was the fastest possible. 

Once I have a working prototype I write the Jasmine javascript tests. I will use these for the production build and as a guide when doing any refractoring. 

To finish the prototype, I place it on my favorite JS online community, which is [Plunkr](http://plnkr.co/edit/xF22yq?p=info "My Prototype") and test on all available browsers and platforms.

The prototype code can be found on [Github](https://github.com/mgable/T9Word "Prototype").

##### The Production Build
Once the prototype is approved, I refractor to make it a production quality app. First, this involves seeding the project using Yeoman. I like Yeoman because it automates many build tasks and enforces standards and insures a certain level of quality. The javascript is improved because jshint is executing and all files are automatically concatenated and minified including all css. The html template is improved as Yeoman uses the HTML5 boilerplate. 

The production code can be found of [Github](https://github.com/mgable/T9Word_production "T9word production").