What is AJAX? (Asynchronous Javascript And Xml)
================================================

AJAX is an acronym which stands for Asynchronous JavaScript and XML.
It is a programming technology which is used to create more interactive web pages.
Using AJAX, you can create web pages which can update their content without reloading.
AJAX enables a web page to communicate directly with the server, retrieve information, and update itself.
All this happens without the page actually reloading.

To understand AJAX, there are two things which you need to know from the outset.
First of all, AJAX is not a programming language. Neither is it a software.
AJAX is a programming paradigm – a technique.
It is a technique for using web technologies including CSS, HTML, JavaScript, DOM and XML or JSON.
Basically, to use AJAX in your web applications, you need to have a basic grasp of those technologies.

Secondly, you need a basic understanding of how web browsers interact with a web server.
Traditionally, web browsers interact with a web-server in a synchronous manner.
The interaction mostly takes place in three steps, repeated over and over again:
  1. A Web browser requests a page from the server
  2. The server sends the page to the browser
  3. The browser displays the page to the user

In AJAX model, based on user actions (clicking on a button, or image for example)
JavaScript code sends request to the web server, receives the response and updates the web page.

A good example of AJAX in action is the Facebook or Twitter pages.
When you scroll down to your Facebook page, it keeps fetching your previous news feeds and displaying them.
It does this without reloading the page. You get the impression of scrolling down to one endless, very long web page.

An AJAX request model isn’t as easy to implement as the traditional model.
It requires a web developer to do some JavaScript programming on the web page.
The JavaScript sends a request to the server; reads the response and displays the results by updating the page’s DOM.
This may sound complicated, but it isn’t really. Modern browsers have an inbuilt object called the XMLHttpRequest object.
This object makes it quite easy for a JavaScript to communicate with the server.

## AJAX using Pure JavaScript

  Implementing some sample code using pure JavaScript will help you understand AJAX better.

  We can use the XMLHttpRequest (also referred to as the XHR) object to communicate with the server.
  Using XHR object, a web page can interact with interact with PHP scripts, databases, applications
  and even text files located on the server.
  By “interact” we mean that it can both send and retrieve data from those various sources.
  This interaction is typically driven by JavaScript, and a simple Ajax implementation takes place in four steps:

    1. Create an instance of the XMLHttpRequest object

        To create an instance of XHR, you simply get a variable name,
        and use the new XMLHttpRequest() method to crate the instance.

          var xhr = new XMLHttpRequest();

    2. Use open() method of the XHR to specify what kind of data you want

        The XHR’s open() is used to specify the kind of data an object wants from the server.
        You basically use it to describe what you want from the server.
        It takes three arguments i.e. the type of request, the location of the file on the server, and a synchronous indicator.

        Calling it looks like this:
          xhr.open(request, url, async)

          request ‐ this is the type of request you are sending to the server.
                    It takes one of two values: GET or POST. In simple terms,
                    GET is for retrieving something from the server.
                    POST is for sending something to the server.

          url ‐ this is the URL of the file on the server.
                It is can be static or relative URL or simply the path from the folder which contains the web page.

          async ‐ this is used to determine whether or not the request should be executed asynchronously.
          It takes the value “true” or “false”. True is for asynchronous execution. False is for synchronous execution.

          In our case, we shall call the open() method as follows:

            xhr.open("GET", "ajax_data.txt", true);

    3. Create a function to utilize the results

        An XHR object has many inbuilt variables in which it stores data retrieved from the server.
        One of these variables is called responseText.

        When we call xhr.open(), it will fetch the text information stored “ajax_data.txt”
        and store it in its responseText variable. So, to access the data, we simply have to call xhr.responseText

          function() {
            document.getElementByID("myContent").innerHTML = xhr.responseText;
          }

        This function basically replaces the HTML found in the <div> “myContent” with the text fetched from the server.

    4. Use the XHR’s send() method to send the request

        The send() method is used to send the request to the server.
        It doesn’t take any parameters, so you simply call it as follows:

          xhr.send();

    5. Receive the response

      How do you know when a response has come from the server?
      XHR has two properties are used to indicate a response from the server.
      The first is “readyState”, and the second is “status”.

        The “readyState” property records how the request is progressing.
        It returns a numerical value, numbered 0 to 4 which indicate different states of progress.
        The numbers translate as follows:

          0 ‐ request not initialized
          1 ‐ connection to server established
          2 ‐ request received by server
          3 ‐ server is processing the request
          4 ‐ the request has been processed, and the response is ready

        The “status” property indicates whether or not the request was successfully executed.

          200 ‐ request successfully executed and response delivered
          404 ‐ page not found

      You can access these properties by referencing them from the XHR variable as follows:

        xhr.readyState or xhr.status

      So, our function code has to be rewritten as follows :

        function () {
            if( xhr.readyState==4 && xhr.status==200 ){
                document.getElementById("myContent").innerHTML = xhr.responseText;
            }
        }

      So, how do we know that a response has come from the server?

      Well, XHR has an event has an event which is triggered every time the “readyState” changes.
      This event is called “onreadystatechange” event.
      This event is the perfect way to execute any function designed to utilize the results retrieved from the server.
      You simply assign the function to respond to this event like so: onreadystatechange = function_name;

      Since we are using an anonymous function, we attach it as follows:

        xhr.onreadystatechange = function () {
            if( xhr.readyState==4 && xhr.status==200 ) {
                document.getElementById("myContent").innerHTML = xhr.responseText;
            }
        }

  We have completed the five steps, and our AJAX implementation is ready to go.
  We simply have to bring it all together under a function. So, it all comes together like this:

    document.getElementById('actbutton').onclick = function(){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://codepen.io/prasanthmj/pen/ICgxE.html", true);

      xhr.onreadystatechange = function (){
        if ( xhr.readyState==4 && xhr.status==200 ){
            document.getElementById("myContent").innerHTML = xhr.responseText;
        }
      }
      xhr.send();
    }

  This is how to work with AJAX using pure Javascript.
  You use JavaScript to send requests to the server using an XMLHttpRequest object.
  You still use JavaScript to display the results on the web page.
  In most cases, you use JSON or XML to exchange data between the browser and the server.
  However, irrespective of how complicated your AJAX application is, the steps are as outlined above.


## AJAX using jQuery

Modern Javascript libraries make it much easier to implement AJAX requests. The sample above done with the help of jQuery library will look like this:

  $('#actbutton').click(function() {
      $.ajax('/data/update_info.txt', {
          success: function(data) {
              $('#myContent').html(data);
          }
      }
  );

The ajax function in jQuery has several options and parameters that allows lower level handling of AJAX requests.

The ajax function in jQuery has several options and parameters that allows lower level handling of AJAX requests.

jQuery library also has several short hand methods to do AJAX requests: load(), jQuery.get(), jQuery.post() and jQuery.getJSON are some examples.

Here is another example using AJAX. It is common to have drop-down lists with a big number of items in forms. Often, the items in the list would be duplicates. For example, a ‘country’ drop-down list.

The easy solution for this is to load the list dynamically using AJAX.
Here is the Code:

function loadlist(listid) {
    $(listid).html('');
    $.getJSON('/data/countries.json', function(list) {
      jQuery.each(list, function(i,obj) {
            $(listid).append(
              $('<option></option>')
               .val(obj['value'])
               .html(obj['name']));
       });
    });
}

The function $.getJSON() gets the file from the remote URL. The second parameter to getJSON() is the call back function that receives the data. The function gets the data and appends items to the list.

