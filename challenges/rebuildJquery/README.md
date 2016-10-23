# Rebuild Jquery Challenge

### What's being done

- Create modular code in Javascript
- Implement a CSS selector library in Javascript
- Implement a DOM manipulation library in Javascript
- Implement an event dispatch library in Javascript
- Implement an HTTP request library in Javascript
- Understand and reimplement jQuery as a toolbelt of various individual libraries

### Modular Pattern

 ["module pattern" chapter of Javascript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)


##### Release 0: A CSS selector library

Create a module called `SweetSelector` that allows us to do the following:

> Hint: you'll need to do this using [vanilla javascript](http://www.w3schools.com/js/js_htmldom_elements.asp)

- select by `id`:
```javascript
SweetSelector.select('#eyed');
// should return <div id="eyed">eyed</div>
```

- select by `class`:
```javascript
SweetSelector.select('.klass');
// should return [<div class="klass">klass</div>, <div class="klass">klass</div>]
```

- select by `tag name`:
```javascript
SweetSelector.select('a');
// should return [<a href="#hello">click me</a>, <a href="#hello">click me</a>]
```

##### Release 1: DOM manipulation

Create a module called `DOM` that allows us to do the following:

- hide and show elements:
```javascript
DOM.hide('.klass') // hides the div
DOM.show('.klass') // shows the div
```

> Hint: What does hide actually do? Try it in jQuery, hide an element and inspect it. See anything different? Styling maybe?

- add and remove classes to/from elements:
```javascript
DOM.addClass('.klass', 'shadi')
// div.klass should look like this: <div class="klass shadi">klass</div>

DOM.removeClass('.klass', 'shadi')
// div.klass should look like this: <div class="klass">klass</div>
```

##### Release 2: Event dispatching

Create a module called `EventDispatcher` that allows us to do the following:

> Hint: Read about [events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)

Implement the following functionalities:

```javascript
EventDispatcher.on('.klass', 'fakeEvent', function() { console.log('awesome') });
EventDispatcher.trigger('.klass', 'fakeEvent');
// this should print "awesome" in the console.
```

##### Release 3: AJAX

Create a module called `AjaxWrapper` that allows us to do the following:

Hints:
  * [using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  * [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

```javascript
// this should an ajax request to the url and call the success callback if successful and fail callback if unsuccessful.
AjaxWrapper.request({
 url: 'someurl',
 type: 'GET'
}).then(function(data, textStatus, xhr) {
  // Handle data returned from the Promise
}).fail(function(errorMessage, textStatus, xhr) {
  // Handle data returned from the Promise
});
```

##### Release 4: miniQuery

Let's namespace all of our tools/libraries into one awesome toolbelt: miniQuery. We want to be able to do the following:

```javascript
// selectors:
miniQuery('.klass')
miniQuery('#eyed')
miniQuery('a')

// DOM manipulation
miniQuery('.klass').hide();
miniQuery('.klass').show();
miniQuery('.klass').addClass('shadi');
miniQuery('.klass').removeClass('shadi');

// Event Dispatching
miniQuery('.klass').on('fakeEvent', function() { console.log('awesome') });
miniQuery('.klass').trigger('fakeEvent');

// AJAX
miniQuery.ajax({
 url: 'someurl',
 type: 'GET',
 success: function() {
   //do something
 },
 fail: function() {
  //do something
 }
});
```

- Start by creating a `miniQuery` module and move everything under it. You'll have a something like:

```javascript
miniQuery.DOM.hide('.klass');
miniQuery.AjaxWrapper.request({...});
```

- Move the selectors so they work directly from the `miniQuery` namespace. Don't move all of the functions straight under miniQuery module, think of a clean way to use them under the hood.
- Continue with the rest of the libraries and make sure you're not repeating yourself. Can the libraries use each other?
- Take small steps! Don't attempt to solve this all at once.

##### Release 5: Use $

`miniQuery` is too long to write; can we use `$` as well? Nothing should change, we'll just give the user the option to use `miniQuery` or `$`.

##### Dive Deeper
- [Bonzo](https://github.com/ded/bonzo)
- [reqwest](https://github.com/ded/reqwest)
- [Bean](https://github.com/fat/bean)
