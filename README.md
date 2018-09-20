orionframework-ts
=======

The sources for this package are in the https://github.com/theorionframework/orionframework-ts repo.

Instructions on how to build can be found at scripts/release.sh

License: MIT

## Classes

<dl>
<dt><a href="#Arrays">Arrays</a></dt>
<dd></dd>
<dt><a href="#Browser">Browser</a></dt>
<dd></dd>
<dt><a href="#Dates">Dates</a></dt>
<dd></dd>
<dt><a href="#Cursor">Cursor</a></dt>
<dd></dd>
<dt><a href="#Dates">Dates</a></dt>
<dd></dd>
<dt><a href="#E4J">E4J</a></dt>
<dd></dd>
<dt><a href="#Events">Events</a></dt>
<dd></dd>
<dt><a href="#Cursor">Cursor</a></dt>
<dd></dd>
<dt><a href="#GUID">GUID</a></dt>
<dd></dd>
<dt><a href="#HTML">HTML</a></dt>
<dd></dd>
<dt><a href="#LocalStorage">LocalStorage</a></dt>
<dd></dd>
<dt><a href="#Numbers">Numbers</a></dt>
<dd></dd>
<dt><a href="#Objects">Objects</a></dt>
<dd></dd>
<dt><a href="#Strings">Strings</a></dt>
<dd></dd>
<dt><a href="#Template">Template</a></dt>
<dd></dd>
<dt><a href="#Timer">Timer</a></dt>
<dd></dd>
<dt><a href="#UI">UI</a></dt>
<dd></dd>
<dt><a href="#URLs">URLs</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#Arrays">Arrays</a> ⇒</dt>
<dd><p>Create a copy of the given array copying from the given start and end index.
This means that calling this method with the given arguments:
<code>subArray([0, 1, 2, 3, 4, 5], 2, 4)</code> you will end-up with the
given result: <code>[2,3]</code>.</p>
</dd>
<dt><a href="#Browser">Browser</a> ⇒</dt>
<dd><p>Plug-in that enable quick access for reading and writing browser cookies.</p>
</dd>
<dt><a href="#GUID">GUID</a> ⇒</dt>
<dd><p>Generate and return the next ID number</p>
</dd>
<dt><a href="#Keyboard">Keyboard</a></dt>
<dd><p>Verify if the given keyCode points to any of the meta keys including: enter,
tab, backspace and escape.</p>
</dd>
<dt><a href="#Keyboard">Keyboard</a></dt>
<dd><p>Verify if the given keyCode points to any of the arrow keyboard keys</p>
</dd>
<dt><a href="#Keyboard">Keyboard</a> ⇒</dt>
<dd><p>Check if the given Keyboard&#39;s code represents a digit (number) from 0 to 9.</p>
</dd>
<dt><a href="#LocalStorage">LocalStorage</a> ⇒ <code>Any</code></dt>
<dd><p>Look-up for for the content stored under the given property name</p>
</dd>
<dt><a href="#Numbers">Numbers</a> ⇒</dt>
<dd><p>Generate a random number between two given numbers</p>
</dd>
<dt><a href="#Objects">Objects</a> ⇒</dt>
<dd><p>Perform a deep clone of the given Object, be it a single-value based type
such as String, Number, int, Date or be it a complex Hash object or Array or
even mixed returning a completely independent object as a result.</p>
<p>
For simple Hash object copy, use #extend(target, source...) instead.
</p></dd>
<dt><a href="#Strings">Strings</a> ⇒ <code>String</code></dt>
<dd><p>Capitalize the first character of the given String</p>
</dd>
<dt><a href="#Strings">Strings</a> ⇒</dt>
<dd><p>UN-Capitalize the first character of the given String</p>
</dd>
<dt><a href="#UI">UI</a></dt>
<dd></dd>
<dt><a href="#UI">UI</a></dt>
<dd><p>Patch that simulates focus within input boxes by adding the
<code>focus</code> class whenever the input is focused and by removing it
when the focus is lost.</p>
<p>
This is useful for browsers that do not support :focus CSS selector such as
Internet Explorer 7 or older.
</p></dd>
<dt><a href="#URLs">URLs</a> ⇒</dt>
<dd><p>Join the given url to the given arguments.</p>
</dd>
<dt><a href="#XML">XML</a> ⇒</dt>
<dd><p>Encode the given XML replacing encoded characters per the proper XML
characters.</p>
</dd>
<dt><a href="#XML">XML</a> ⇒</dt>
<dd><p>Encode the given XML document replacing XML keywords by their encoded
characters.</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#Ajax">Ajax</a> : <code>object</code></dt>
<dd><p>Default ajax settings and properties under.</p>
<ul class="import">
<li>import orion.reflect.Reflection;</li>
<li>import org.jQuery;</li>
</ul></dd>
<dt><a href="#Printer">Printer</a> : <code>object</code></dt>
<dd><p>Default settings used by the jQuery.fn.print plugin</p>
<ul class="import">
<li>import org.jQuery;</li>
<li>import orion.utils.Timer;</li>
<li>import orion.reflect.Package;</li>
</ul></dd>
</dl>

## Functions

<dl>
<dt><a href="#update">update(value, triggerEvent)</a></dt>
<dd><p>Update browser hash url</p>
</dd>
<dt><a href="#Character">Character()</a></dt>
<dd><p>Utilities related to accents/special characters.</p>
<ul class="import">
<li>import orion.reflect.Package;</li>
</ul></dd>
<dt><a href="#jQuery">jQuery(clazz, name)</a> ⇒ <code><a href="#jQuery">jQuery</a></code></dt>
<dd><p>Detaches the instance of the given class&#39;s plugin from this jQuery
element.</p>
</dd>
<dt><a href="#Keyboard">Keyboard()</a></dt>
<dd><p>Contains constants and utility functions to work with keyboard events</p>
<ul class="import">
<li>import orion.reflect.Package;</li>
</ul></dd>
<dt><a href="#Language">Language()</a></dt>
<dd><p>Orion Language utilities and tricks.</p>
<ul class="import">
<li>import orion.reflect.Reflection;</li>
<li>import orion.utils.Objects;</li>
<li>import orion.language.ComparisonOperator;</li>
<li>import com.orion.language.Float;</li>
<li>import com.orion.language.Long;</li>
<li>import com.orion.language.Double;</li>
</ul></dd>
<dt><a href="#Timer">Timer(callback, delay, args)</a> ⇒</dt>
<dd><p>Register a callback to be called forever every given number of
milliseconds. The callback function is called passing the given arguments</p>
<p>
The Timer#forever() method calls a function or evaluates an expression at
specified intervals (in milliseconds).
</p>

<p>
The Timer#forever() method will continue calling the function until
Timer#stop() is called, or the window is closed.
</p>

<p>Tip: 1000 ms = 1 second.</p>
</dd>
<dt><a href="#Timer">Timer()</a> ⇒</dt>
<dd><p>The Timer#stop(callback) method clears a timer set with the
Timer#forever(callback, delay) method.</p>
<p><p>
The function value passed to Timer#forever(callback) is used as the
parameter for the Timer#stop(callback) method.</p>
<p></dd>
<dt><a href="#Timer">Timer(callback, delay, args)</a> ⇒</dt>
<dd><p>Register a callback function to be called once within the given number of
milliseconds. The callback function is called only once and passes the
given arguments.</p>
<p>
The Timer#once() method calls a function or evaluates an expression at
specified intervals (in milliseconds).
</p>
p&gt;

Tip: 1000 ms = 1 second.

<p>
The Timer#once() method will call the given function only once.
</p></dd>
<dt><a href="#Timer">Timer()</a> ⇒</dt>
<dd><p>The Timer#stopOnce(callback) method clears a timer set with the
Timer#once(callback, delay) method.</p>
<p><p>
The callback value passed to Timer#once(callback) is used as the
parameter for the Timer#stopOnce(callback) method.</p>
<p></dd>
<dt><a href="#XMLs">XMLs()</a></dt>
<dd><p>XML related components and utilities</p>
<ul class="import">
<li>import orion.utils.Strings;</li>
</ul></dd>
</dl>

<a name="Arrays"></a>

## Arrays
**Kind**: global class  
****: 1.0

<ul class="import">
<li>import orion.reflect.Reflection;</li>
<li>import orion.utils.Prototype;</li>
</ul>  


* [Arrays](#Arrays)
    * [new Arrays()](#new_Arrays_new)
    * [.EMPTY](#Arrays.EMPTY)
    * [.copy(array)](#Arrays.copy) ⇒ <code>Array</code>
    * [.range(from, to, callback)](#Arrays.range) ⇒ <code>Array</code>
    * [.toArray(value)](#Arrays.toArray) ⇒
    * [.contains(array, value, caseSensitive)](#Arrays.contains) ⇒ <code>Boolean</code>
    * [.containsAll(list, items, caseSensitive)](#Arrays.containsAll)
    * [.unique(array, field)](#Arrays.unique) ⇒ <code>Array</code>
    * [.last(the)](#Arrays.last) ⇒ <code>Object</code>
    * [.remove(array, value)](#Arrays.remove)
    * [.removeAt(array, index)](#Arrays.removeAt)
    * [.addAll(array, values)](#Arrays.addAll)
    * [.clear(array)](#Arrays.clear)
    * [.removeAll(array, values)](#Arrays.removeAll)
    * [.addAt(array, item, index)](#Arrays.addAt)
    * [.moveAt(array, from, to)](#Arrays.moveAt)
    * [.moveAll(elements, index)](#Arrays.moveAll) ⇒ <code>Array</code>
    * [.isEmpty(value)](#Arrays.isEmpty) ⇒
    * [.getLength(value)](#Arrays.getLength) ⇒ <code>Number</code>
    * [.isLast(array, value)](#Arrays.isLast) ⇒ <code>Boolean</code>
    * [.toMultiValueObject(items)](#Arrays.toMultiValueObject) ⇒
    * [.toPropertyArray(array, property)](#Arrays.toPropertyArray) ⇒
    * [.sort(array, sorts, parser)](#Arrays.sort) ⇒ <code>Array</code>
    * [.sum(arguments)](#Arrays.sum) ⇒ <code>Array</code>
    * [.substract(arguments)](#Arrays.substract) ⇒ <code>Array</code>

<a name="new_Arrays_new"></a>

### new Arrays()
Array utility class

<a name="Arrays.EMPTY"></a>

### Arrays.EMPTY
An empty array

**Kind**: static property of [<code>Arrays</code>](#Arrays)  
<a name="Arrays.copy"></a>

### Arrays.copy(array) ⇒ <code>Array</code>
Copy the entire given array into a new one and return it.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - the copied array instance.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array being copied |

<a name="Arrays.range"></a>

### Arrays.range(from, to, callback) ⇒ <code>Array</code>
Create a range between two numbers (including both) and return it as an
array.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - the generated range  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Number</code> | the initial number |
| to | <code>Number</code> | the final number |
| callback | <code>function</code> | function invoked for each item in the range so the            result returned can be formatted instead of simply used as is. |

<a name="Arrays.toArray"></a>

### Arrays.toArray(value) ⇒
Validate the given value against an <code>Array</code> instance. If so,
return as is, otherwise, wrap its content as an array.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: value as an array  

| Param | Description |
| --- | --- |
| value | the value being converted |

<a name="Arrays.contains"></a>

### Arrays.contains(array, value, caseSensitive) ⇒ <code>Boolean</code>
Check rather the given array contains the given value

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Boolean</code> - true if present, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| array |  | the array being verified |
| value |  | the value being checked |
| caseSensitive | <code>Boolean</code> | flag indicating if case-sensitive comparison should be            applied. (Defaults to true) |

<a name="Arrays.containsAll"></a>

### Arrays.containsAll(list, items, caseSensitive)
Check if the given Array contains all the items within second array

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | the list being verified |
| items | <code>Array</code> | the items that should exists within the first list |
| caseSensitive | <code>Boolean</code> | flag indicating if case-sensitive comparison should be            applied. (Defaults to true) |

<a name="Arrays.unique"></a>

### Arrays.unique(array, field) ⇒ <code>Array</code>
Filter the content of the given array into a second array without any
duplicate values.

<p>
When dealing with complex hash types, a field can be provided so that a field
shall be evaluated for uniqueness instead of the value itself.
</p>

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - filtered array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array being filtered/transformed |
| field | <code>String</code> | the field name (may be in E4J format, for more, see            [#orion.utils.E4J](#orion.utils.E4J)) |

<a name="Arrays.last"></a>

### Arrays.last(the) ⇒ <code>Object</code>
Retrieve the last item in this array

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Object</code> - the last item of the given array  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>Array</code> | array we are retrieving the last item from |

<a name="Arrays.remove"></a>

### Arrays.remove(array, value)
Remove the given item from the given array

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Description |
| --- | --- |
| array | the array being manipulated |
| value | the value being removed |

<a name="Arrays.removeAt"></a>

### Arrays.removeAt(array, index)
Remove an item represented by the given <code>index</code>

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Description |
| --- | --- |
| array | the array being manipulated |
| index | the index representing the element being removed |

<a name="Arrays.addAll"></a>

### Arrays.addAll(array, values)
Add all given elements into the given array

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array we are adding to |
| values | <code>Array</code> | the values being added |

<a name="Arrays.clear"></a>

### Arrays.clear(array)
Remove all elements from the given array that are present in the second
array. However, if a second array is not informed, then the first array is
cleared.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array being cleared |

<a name="Arrays.removeAll"></a>

### Arrays.removeAll(array, values)
Remove all elements from the given array that are present in the second
array.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array being |
| values | <code>Array</code> |  |

<a name="Arrays.addAt"></a>

### Arrays.addAt(array, item, index)
Add an item to the given array within the given position

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Description |
| --- | --- |
| array | the array being manipulated |
| item | the item being added |
| index | the position of the item being added |

<a name="Arrays.moveAt"></a>

### Arrays.moveAt(array, from, to)
Move an item from one index position to another index position

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Description |
| --- | --- |
| array | the array being manipulated |
| from | the current index position |
| to | the new index position |

<a name="Arrays.moveAll"></a>

### Arrays.moveAll(elements, index) ⇒ <code>Array</code>
Move the given single element to a new position on this collection. *

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - the updated array with the moved items  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array</code> | the elements being moved |
| index | <code>int</code> | the new index for the moved element |

<a name="Arrays.isEmpty"></a>

### Arrays.isEmpty(value) ⇒
Check if the given array is null, undefined or empty.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>true</code> if currently empty, <code>false</code>
        otherwise.  

| Param | Description |
| --- | --- |
| value | the array being checked |

<a name="Arrays.getLength"></a>

### Arrays.getLength(value) ⇒ <code>Number</code>
Safe Array's length retrieval with fall back to 0 if not defined/null.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Number</code> - array's length  

| Param | Description |
| --- | --- |
| value | the array being checked |

<a name="Arrays.isLast"></a>

### Arrays.isLast(array, value) ⇒ <code>Boolean</code>
Compares if the given value is the last item of the given array

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Boolean</code> - true if so, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array used being compared |
| value | <code>Object</code> | the value being compared |

<a name="Arrays.toMultiValueObject"></a>

### Arrays.toMultiValueObject(items) ⇒
Convert the given array of objects into an Object. This object will contain
the same common properties from the objects in the given list. Each value
will contain instead a array from each object of the given list.

<pre>
[ {
	key : 1
}, {
	key : 2
} ]
</pre>

would be converted into:

<pre>
{
	key : [ 1, 2 ]
}
</pre>

This method is useful for converting a list of objects to a compatible
multi-value object used to submit to a remote server via AJAX (similar to
multi-value field forms).

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: object containing all properties as array  

| Param | Description |
| --- | --- |
| items | the list of objects to be converted |

<a name="Arrays.toPropertyArray"></a>

### Arrays.toPropertyArray(array, property) ⇒
Convert an array of hash objects to an array of properties. We extract the
property name from each hash object in the given array returning them as part
of a new array on the same order of the original one.

I.E.:

<pre>
var array = [{name : &quot;John&quot;},{ name : &quot;Mary&quot;
var result = arrayToPropertyArray(array, &quot;name&quot;);

Where result should be: [&quot;John&quot;, &quot;Mary&quot;]
</pre>

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: array of properties from each hash object in the given array  

| Param | Description |
| --- | --- |
| array | of hash objects |
| property | the property name |

<a name="Arrays.sort"></a>

### Arrays.sort(array, sorts, parser) ⇒ <code>Array</code>
Sort the given array by the given property in the given direction.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - sorted array (same instance of the given one)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array we want to sort |
| sorts | <code>Array</code> | the list of hash objects for the sorted fields. Each            object may contain            <code>{ field : "name", order : "asc|desc", valueFunction : ...}</code>            where.            <ul>            <li><b>property - {String or Function}</b>: the property name we            are sorting by. When not defined, use the value directly defined            in the array. You're also allowed to pass a function that accepts            one parameter and returns the value used to sort by. I.E.:            function(a){ return a.state.country.name } enabling you to            navigate through multiple objects.</li>            <li><b>asc - {String}</b> : the order in which sorting should            happen.</li>            <li><b>valueFunction - {Function}</b> : The function used to            extra items being sorted.</li>            </ul> |
| parser | <code>function</code> | function used to parse the extracted value before we            can run the comparison |

<a name="Arrays.sum"></a>

### Arrays.sum(arguments) ⇒ <code>Array</code>
Concatenate all the given arrays into a new single Array. Arguments that are
not arrays are just appended as is.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - array containing all subtracted sub-entries.  

| Param | Description |
| --- | --- |
| arguments | 0...x |

<a name="Arrays.substract"></a>

### Arrays.substract(arguments) ⇒ <code>Array</code>
Subtract all sequence values from the first array passed as an argument and
returned it as a new array.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - array containing all added sub-entries.  

| Param | Description |
| --- | --- |
| arguments | 0...x |

<a name="Browser"></a>

## Browser
**Kind**: global class  


* [Browser](#Browser)
    * [new Browser()](#new_Browser_new)
    * [.user](#Browser.user)
    * [.support](#Browser.support)
        * [.touch](#Browser.support.touch)
        * [.mobile](#Browser.support.mobile)
        * [.ipad](#Browser.support.ipad)
        * [.iphone](#Browser.support.iphone)
        * [.ipod](#Browser.support.ipod)
    * [.hash](#Browser.hash) : <code>object</code>
        * [.delay](#Browser.hash.delay)
        * [.enabled](#Browser.hash.enabled)
        * [.get()](#Browser.hash.get) ⇒
        * [.handler()](#Browser.hash.handler)
    * [.openUrl(url, data, method, target, encType, charsetName)](#Browser.openUrl)

<a name="new_Browser_new"></a>

### new Browser()
Browser related components and utilities

<ul class="import">
<li>import orion.utils.Timer;</li>
<li>import org.jQuery;</li>
<li>import orion.reflect.Package;</li>
</ul>

<a name="Browser.user"></a>

### Browser.user
Information about the currently logged user on the application.

<p>
For that, refer to orion.security.User model.
</p>

**Kind**: static property of [<code>Browser</code>](#Browser)  
<a name="Browser.support"></a>

### Browser.support
Browser support

**Kind**: static property of [<code>Browser</code>](#Browser)  

* [.support](#Browser.support)
    * [.touch](#Browser.support.touch)
    * [.mobile](#Browser.support.mobile)
    * [.ipad](#Browser.support.ipad)
    * [.iphone](#Browser.support.iphone)
    * [.ipod](#Browser.support.ipod)

<a name="Browser.support.touch"></a>

#### support.touch
Indicate if the browser supports touch events

**Kind**: static property of [<code>support</code>](#Browser.support)  
<a name="Browser.support.mobile"></a>

#### support.mobile
Indicate if the browser is running on a mobile device

**Kind**: static property of [<code>support</code>](#Browser.support)  
<a name="Browser.support.ipad"></a>

#### support.ipad
Indicate if the browser is running on a iPad device

**Kind**: static property of [<code>support</code>](#Browser.support)  
<a name="Browser.support.iphone"></a>

#### support.iphone
Indicate if the browser is running on a iPhone device

**Kind**: static property of [<code>support</code>](#Browser.support)  
<a name="Browser.support.ipod"></a>

#### support.ipod
Indicate if the browser is running on a iPod device

**Kind**: static property of [<code>support</code>](#Browser.support)  
<a name="Browser.hash"></a>

### Browser.hash : <code>object</code>
Browser history utilities functions.

The default location.hash provides access to the hash URL but this component
gives you the ability to know when the hash URL has changed via event "hash"
dispatched within any jQuery component. It also give you the ability to
update the hash value without dispatching a change event or even
enable/disable the hash URL update for a certain period (during load time for
example while you parse the hash URL and load your internal components to
restore their state).

**Kind**: static namespace of [<code>Browser</code>](#Browser)  


* [.hash](#Browser.hash) : <code>object</code>
    * [.delay](#Browser.hash.delay)
    * [.enabled](#Browser.hash.enabled)
    * [.get()](#Browser.hash.get) ⇒
    * [.handler()](#Browser.hash.handler)

<a name="Browser.hash.delay"></a>

#### hash.delay
The time delay in milliseconds used to verify if the browser's hash URL
has changed

**Kind**: static property of [<code>hash</code>](#Browser.hash)  
<a name="Browser.hash.enabled"></a>

#### hash.enabled
Flag that indicates if hash is currently enabled. By setting this flag to
false, the hash value can't be updated via <code>update()</code>
method.

**Kind**: static property of [<code>hash</code>](#Browser.hash)  
<a name="Browser.hash.get"></a>

#### hash.get() ⇒
Retrieve the hash value from the location.hre. Remove the '#' symbol from
the value if defined.

**Kind**: static method of [<code>hash</code>](#Browser.hash)  
**Returns**: hash value  
<a name="Browser.hash.handler"></a>

#### hash.handler()
Handler invoked when by time to time to verify if the hash variable has
changed. If so, dispatch a hash event

**Kind**: static method of [<code>hash</code>](#Browser.hash)  
<a name="Browser.openUrl"></a>

### Browser.openUrl(url, data, method, target, encType, charsetName)
Open the given URL on the browser passing the given parameter using the given
HTTP method. If a target is not defined, opens a new window otherwise uses
given client to open the URL.

This method simulates a form submit, so the URL is the form action, the data
are the fields the form holds, the target is the submit target window and the
method is the HTTP method (post, get, etc.).

**Kind**: static method of [<code>Browser</code>](#Browser)  

| Param | Type | Description |
| --- | --- | --- |
| url |  | the URL you want the new window to open |
| data |  | the parameters you want to send across |
| method |  | the HTTP method (get or post). Default is "get". |
| target |  | the target you want the |
| encType | <code>String</code> | the form's enctype (as in multipart/form-data String if            pushing multipart documents). Defaults to            <code>application/x-www-form-urlencoded</code> |
| charsetName | <code>String</code> | the charset encoding used. Defaults to browser's encoding |

<a name="Dates"></a>

## Dates
**Kind**: global class  


* [Dates](#Dates)
    * [new Dates()](#new_Dates_new)
    * [new Dates()](#new_Dates_new)
    * [.LOCALE_PREFIX](#Dates.LOCALE_PREFIX) : <code>String</code>
    * [.DEFAULT_FORMAT](#Dates.DEFAULT_FORMAT) : <code>String</code>
    * [.YEAR](#Dates.YEAR) : <code>String</code>
    * [.DATE](#Dates.DATE) : <code>String</code>
    * [.TIME](#Dates.TIME) : <code>String</code>
    * [.DATETIME](#Dates.DATETIME) : <code>String</code>
    * [.getDate(year, month, day, defaultValue)](#Dates.getDate) ⇒ <code>Date</code>
    * [.getDateTime(date, time)](#Dates.getDateTime) ⇒ <code>Date</code>
    * [.isSameDay(d1, d2)](#Dates.isSameDay) ⇒ <code>Boolean</code>
    * [.getDays(year, month)](#Dates.getDays) ⇒ <code>Number</code>
    * [.addDays(date, days)](#Dates.addDays)
    * [.now()](#Dates.now) ⇒ <code>Number</code>
    * [.getDaysBetween(left, right)](#Dates.getDaysBetween) ⇒ <code>Number</code>
    * [.addFormat(name, format, locale)](#Dates.addFormat)

<a name="new_Dates_new"></a>

### new Dates()
Currency utilities

<ul class="import">
<li>import orion.utils.Objects;</li>
<li>import orion.core.Locales;</li>
</ul>

<a name="new_Dates_new"></a>

### new Dates()
Date utilities

<ul class="import">
<li>import orion.utils.Objects;</li>
<li>import orion.core.Locales;</li>
TODO: remove when js imports have been refactored
<li>import orion.utils.E4J;</li>
</ul>

<a name="Dates.LOCALE_PREFIX"></a>

### Dates.LOCALE_PREFIX : <code>String</code>
Prefix path used for storing locale messages

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;com.orion.utils.Dates&quot;</code>  
<a name="Dates.DEFAULT_FORMAT"></a>

### Dates.DEFAULT_FORMAT : <code>String</code>
The default formatter mask.

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;date&quot;</code>  
<a name="Dates.YEAR"></a>

### Dates.YEAR : <code>String</code>
The mask name used for formatting year

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;year&quot;</code>  
<a name="Dates.DATE"></a>

### Dates.DATE : <code>String</code>
The mask name used for formatting date

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;date&quot;</code>  
<a name="Dates.TIME"></a>

### Dates.TIME : <code>String</code>
The mask name used for formatting time.

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;time&quot;</code>  
<a name="Dates.DATETIME"></a>

### Dates.DATETIME : <code>String</code>
The mask for the default year format to the bound locale

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;datetime&quot;</code>  
<a name="Dates.getDate"></a>

### Dates.getDate(year, month, day, defaultValue) ⇒ <code>Date</code>
Create a new date to match the given year, month and day from String values.
If the given values do not match a proper date, then the default value is
returned instead.

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Date</code> - the created date if the parameters valid or defaultValue
        instead  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>String</code> | the year (required) |
| month | <code>String</code> | the month (required) |
| day | <code>String</code> | the day (fall back to 1 if not defined) |
| defaultValue | <code>Date</code> | the default value returned if the given parameters do not            match a valid date |

<a name="Dates.getDateTime"></a>

### Dates.getDateTime(date, time) ⇒ <code>Date</code>
Translate the date and time properties of both given Date values to a single
merged one.

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Date</code> - new date holding both date and time properties for the given
        date objects  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | the date object we are keeping the date properties |
| time | <code>Date</code> | the date object we are keeping the time properties |

<a name="Dates.isSameDay"></a>

### Dates.isSameDay(d1, d2) ⇒ <code>Boolean</code>
Check if both given dates match the same exact year, month and date

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Boolean</code> - true if both match, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| d1 | <code>Date</code> | the first date for the comparison |
| d2 | <code>Date</code> | the second date for the comparison |

<a name="Dates.getDays"></a>

### Dates.getDays(year, month) ⇒ <code>Number</code>
Retrieve the number of days within the given month of the given year

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Number</code> - number of days of the month within the given year  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>Number</code> | the year |
| month | <code>Number</code> | the month |

<a name="Dates.addDays"></a>

### Dates.addDays(date, days)
Add the given number of days to the given date

**Kind**: static method of [<code>Dates</code>](#Dates)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | the date being processed |
| days | <code>Number</code> | the number of days being added to the given date |

<a name="Dates.now"></a>

### Dates.now() ⇒ <code>Number</code>
Retrieve the current timestamp in milliseconds

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Number</code> - current timestamp  
<a name="Dates.getDaysBetween"></a>

### Dates.getDaysBetween(left, right) ⇒ <code>Number</code>
Retrieve the number of days passed between the two given dates

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Number</code> - number of days  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Date</code> | the first date being calculated |
| right | <code>Date</code> | the second date being calculated |

<a name="Dates.addFormat"></a>

### Dates.addFormat(name, format, locale)
Register a new format name (or replace if already exists) for the given
locale

**Kind**: static method of [<code>Dates</code>](#Dates)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | the format name used while using [Dates#format()](Dates#format())            with a format name instead of a format pattern |
| format | <code>String</code> | the format pattern being registered |
| locale | <code>String</code> | the locale in which this format is registered |

<a name="Cursor"></a>

## Cursor
**Kind**: global class  


<ul class="import">
<li>import orion.utils.JQuery;</li>
</ul>  

* [Cursor](#Cursor)
    * [new Cursor()](#new_Cursor_new)
    * [new Cursor()](#new_Cursor_new)
    * [.y](#Cursor.y)
    * [.x](#Cursor.x)
    * [.touch](#Cursor.touch)
    * [.eventStart](#Cursor.eventStart) : <code>String</code>
    * [.eventEnd](#Cursor.eventEnd)
    * [.eventMove](#Cursor.eventMove)
    * [.eventTarget(element)](#Cursor.eventTarget) ⇒
    * [.hover(element)](#Cursor.hover) ⇒
    * [.getLocal(element)](#Cursor.getLocal) ⇒ <code>Object</code>
    * [.getX(event, local)](#Cursor.getX) ⇒ <code>Number</code>
    * [.getY(event, local)](#Cursor.getY) ⇒ <code>Number</code>
    * [.diff(x, y)](#Cursor.diff) ⇒ <code>Object</code>
    * [.diffY(y)](#Cursor.diffY) ⇒ <code>Number</code>
    * [.diffX(x)](#Cursor.diffX) ⇒ <code>Number</code>
    * [.moved(x, y)](#Cursor.moved) ⇒ <code>Boolean</code>
    * [.update(event)](#Cursor.update)

<a name="new_Cursor_new"></a>

### new Cursor()
Cursor/Mouse/Touch utilities

<a name="new_Cursor_new"></a>

### new Cursor()
Effect utilities and tricks

<a name="Cursor.y"></a>

### Cursor.y
Current <code>y<code> coordinate of the cursor in the screen.

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.x"></a>

### Cursor.x
Current <code>x<code> coordinate of the cursor in the screen.

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.touch"></a>

### Cursor.touch
Indicate if the browser supports touch events

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.eventStart"></a>

### Cursor.eventStart : <code>String</code>
Event name used to define when touch has started

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.eventEnd"></a>

### Cursor.eventEnd
Event name used to define when touch has ended

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.eventMove"></a>

### Cursor.eventMove
Event name used to define when mouse/finger is moving

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.eventTarget"></a>

### Cursor.eventTarget(element) ⇒
Translate the given element to its target area depending on touch support or
not.

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: if touch support, returns the given element, if not, return the root
        document allowing touch to be used outside the element  

| Param | Description |
| --- | --- |
| element | the element dispatching the event |

<a name="Cursor.hover"></a>

### Cursor.hover(element) ⇒
Check if the cursor (touch or mouse) is currently over the given element

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: true if cursor is currently over, false otherwise  

| Param | Description |
| --- | --- |
| element | the jQuery object of the element we are checking against |

<a name="Cursor.getLocal"></a>

### Cursor.getLocal(element) ⇒ <code>Object</code>
Translate the current global cursor's position to the offset coordinates of
the cursor within the given element, as in the position of the cursor in the
given element itself.

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Object</code> - hash containing both x and y position of the cursor within
        the given element.  

| Param | Type | Description |
| --- | --- | --- |
| element | [<code>jQuery</code>](#jQuery) | the jQuery element we want the local cursor's position |

<a name="Cursor.getX"></a>

### Cursor.getX(event, local) ⇒ <code>Number</code>
Retrieve the local/global X coordinate for the given mouse event. If using
touch devices, use the first touch item instead

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Number</code> - the x coordinate  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>jQuery.Event</code> | the event being containing the position |
| local | <code>Boolean</code> | flag that indicate if we want the local or global            coordinates. Defaults to false returning global position |

<a name="Cursor.getY"></a>

### Cursor.getY(event, local) ⇒ <code>Number</code>
Retrieve the local/global Y coordinate for the given mouse event. If using
touch devices, use the first touch item instead

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Number</code> - the x coordinate  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>jQuery.Event</code> | the event being containing the position |
| local | <code>Boolean</code> | flag that indicate if we want the local or global            coordinates. Defaults to false returning global position |

<a name="Cursor.diff"></a>

### Cursor.diff(x, y) ⇒ <code>Object</code>
Calculate the difference between the the current cursor's position and the
given position (AKA current.x - position.x, ...).

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Object</code> - hash containing the position difference between the given
        position and the current position (may contain negative values)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | the previous X position |
| y | <code>Number</code> | the previous Y position |

<a name="Cursor.diffY"></a>

### Cursor.diffY(y) ⇒ <code>Number</code>
Calculate the difference between the current cursor's Y to the given Y
coordinate

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Number</code> - the difference between current cursor's Y and given Y
        coordinate  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>Number</code> | the previous Y position |

<a name="Cursor.diffX"></a>

### Cursor.diffX(x) ⇒ <code>Number</code>
Calculate the difference between the current cursor's X to the given X
coordinate

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Number</code> - the difference between current cursor's X and given X
        coordinate  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | the previous X position |

<a name="Cursor.moved"></a>

### Cursor.moved(x, y) ⇒ <code>Boolean</code>
Check if the cursor once pointed to the given position has moved relative to
the current cursor's position.

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Boolean</code> - true if the cursor is no longer i the same position as the
        given one, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | the previous X position |
| y | <code>Number</code> | the previous Y position |

<a name="Cursor.update"></a>

### Cursor.update(event)
Perform an update on both x and y positions of the cursor based on the given
mouse event. This method is rarely necessary to be called manually, unless
you need a very accurate position of the mouse for touch devices as the
default mechanism involves touchstart on the document and that is only
propagated after touchstart has been dispatched within a target element,
therefore a VERY small gap where the coordinates may not be accurate enough.

**Kind**: static method of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>jQuery.Event</code> | the event used to update the coordinates |

<a name="Dates"></a>

## Dates
**Kind**: global class  


* [Dates](#Dates)
    * [new Dates()](#new_Dates_new)
    * [new Dates()](#new_Dates_new)
    * [.LOCALE_PREFIX](#Dates.LOCALE_PREFIX) : <code>String</code>
    * [.DEFAULT_FORMAT](#Dates.DEFAULT_FORMAT) : <code>String</code>
    * [.YEAR](#Dates.YEAR) : <code>String</code>
    * [.DATE](#Dates.DATE) : <code>String</code>
    * [.TIME](#Dates.TIME) : <code>String</code>
    * [.DATETIME](#Dates.DATETIME) : <code>String</code>
    * [.getDate(year, month, day, defaultValue)](#Dates.getDate) ⇒ <code>Date</code>
    * [.getDateTime(date, time)](#Dates.getDateTime) ⇒ <code>Date</code>
    * [.isSameDay(d1, d2)](#Dates.isSameDay) ⇒ <code>Boolean</code>
    * [.getDays(year, month)](#Dates.getDays) ⇒ <code>Number</code>
    * [.addDays(date, days)](#Dates.addDays)
    * [.now()](#Dates.now) ⇒ <code>Number</code>
    * [.getDaysBetween(left, right)](#Dates.getDaysBetween) ⇒ <code>Number</code>
    * [.addFormat(name, format, locale)](#Dates.addFormat)

<a name="new_Dates_new"></a>

### new Dates()
Currency utilities

<ul class="import">
<li>import orion.utils.Objects;</li>
<li>import orion.core.Locales;</li>
</ul>

<a name="new_Dates_new"></a>

### new Dates()
Date utilities

<ul class="import">
<li>import orion.utils.Objects;</li>
<li>import orion.core.Locales;</li>
TODO: remove when js imports have been refactored
<li>import orion.utils.E4J;</li>
</ul>

<a name="Dates.LOCALE_PREFIX"></a>

### Dates.LOCALE_PREFIX : <code>String</code>
Prefix path used for storing locale messages

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;com.orion.utils.Dates&quot;</code>  
<a name="Dates.DEFAULT_FORMAT"></a>

### Dates.DEFAULT_FORMAT : <code>String</code>
The default formatter mask.

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;date&quot;</code>  
<a name="Dates.YEAR"></a>

### Dates.YEAR : <code>String</code>
The mask name used for formatting year

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;year&quot;</code>  
<a name="Dates.DATE"></a>

### Dates.DATE : <code>String</code>
The mask name used for formatting date

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;date&quot;</code>  
<a name="Dates.TIME"></a>

### Dates.TIME : <code>String</code>
The mask name used for formatting time.

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;time&quot;</code>  
<a name="Dates.DATETIME"></a>

### Dates.DATETIME : <code>String</code>
The mask for the default year format to the bound locale

**Kind**: static property of [<code>Dates</code>](#Dates)  
**Default**: <code>&quot;datetime&quot;</code>  
<a name="Dates.getDate"></a>

### Dates.getDate(year, month, day, defaultValue) ⇒ <code>Date</code>
Create a new date to match the given year, month and day from String values.
If the given values do not match a proper date, then the default value is
returned instead.

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Date</code> - the created date if the parameters valid or defaultValue
        instead  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>String</code> | the year (required) |
| month | <code>String</code> | the month (required) |
| day | <code>String</code> | the day (fall back to 1 if not defined) |
| defaultValue | <code>Date</code> | the default value returned if the given parameters do not            match a valid date |

<a name="Dates.getDateTime"></a>

### Dates.getDateTime(date, time) ⇒ <code>Date</code>
Translate the date and time properties of both given Date values to a single
merged one.

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Date</code> - new date holding both date and time properties for the given
        date objects  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | the date object we are keeping the date properties |
| time | <code>Date</code> | the date object we are keeping the time properties |

<a name="Dates.isSameDay"></a>

### Dates.isSameDay(d1, d2) ⇒ <code>Boolean</code>
Check if both given dates match the same exact year, month and date

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Boolean</code> - true if both match, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| d1 | <code>Date</code> | the first date for the comparison |
| d2 | <code>Date</code> | the second date for the comparison |

<a name="Dates.getDays"></a>

### Dates.getDays(year, month) ⇒ <code>Number</code>
Retrieve the number of days within the given month of the given year

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Number</code> - number of days of the month within the given year  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>Number</code> | the year |
| month | <code>Number</code> | the month |

<a name="Dates.addDays"></a>

### Dates.addDays(date, days)
Add the given number of days to the given date

**Kind**: static method of [<code>Dates</code>](#Dates)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | the date being processed |
| days | <code>Number</code> | the number of days being added to the given date |

<a name="Dates.now"></a>

### Dates.now() ⇒ <code>Number</code>
Retrieve the current timestamp in milliseconds

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Number</code> - current timestamp  
<a name="Dates.getDaysBetween"></a>

### Dates.getDaysBetween(left, right) ⇒ <code>Number</code>
Retrieve the number of days passed between the two given dates

**Kind**: static method of [<code>Dates</code>](#Dates)  
**Returns**: <code>Number</code> - number of days  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Date</code> | the first date being calculated |
| right | <code>Date</code> | the second date being calculated |

<a name="Dates.addFormat"></a>

### Dates.addFormat(name, format, locale)
Register a new format name (or replace if already exists) for the given
locale

**Kind**: static method of [<code>Dates</code>](#Dates)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | the format name used while using [Dates#format()](Dates#format())            with a format name instead of a format pattern |
| format | <code>String</code> | the format pattern being registered |
| locale | <code>String</code> | the locale in which this format is registered |

<a name="E4J"></a>

## E4J
**Kind**: global class  


<ul class="import">
<li>import orion.reflect.Accessor;</li>
</ul>  

* [E4J](#E4J)
    * [new E4J()](#new_E4J_new)
    * [.write](#E4J.write) ⇒ <code>Boolean</code>
    * [.read(source, expression)](#E4J.read) ⇒ <code>Object</code>
    * [.extend(target, object)](#E4J.extend)

<a name="new_E4J_new"></a>

### new E4J()
E4J

<a name="E4J.write"></a>

### E4J.write ⇒ <code>Boolean</code>
Write the given value under the given source object within the given
expression.

**Kind**: static property of [<code>E4J</code>](#E4J)  
**Returns**: <code>Boolean</code> - true if written the given value, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Object</code> | the object we are writing to |
| expression | <code>String</code> | the expression pointing to the property we are writing to |
| value | <code>Object</code> | the value being set |
| initialize | <code>Boolean</code> | flag indicating if we should create objects necessary to            satisfy the existence of the objects pointed by the expression to            write the given value |

<a name="E4J.read"></a>

### E4J.read(source, expression) ⇒ <code>Object</code>
Extract the value for the given expression. Similar to E4X on XML (XPath)
where you can use <code>.</code> to navigate through the objects.

<pre>
&lt;b&gt;Sample:&lt;/b&gt;

var person = {
	address : {
		street : &quot;Av. Brasil&quot;
};

E4J.read(&quot;address.street&quot;, person ); // returns &quot;Av. Brasil&quot;
</pre>

Note that the syntax also applies for proper setters/getter convention where
your source object could be a class and the properties could be wrapped
around getters and setter methods.

**Kind**: static method of [<code>E4J</code>](#E4J)  
**Returns**: <code>Object</code> - value found within the given expression  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Object</code> | the object we are reading from |
| expression | <code>String</code> | the expression we are evaluating |

<a name="E4J.extend"></a>

### E4J.extend(target, object)
Extend each given property of the given object into the given target but
instead of simply copying its value to, use E4J expressions to write the
values. This means that if you have a property name defined as
"application.label" then it will write on the target object as
<code>object.application.label=...</code>.

**Kind**: static method of [<code>E4J</code>](#E4J)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | the object receiving the copied properties |
| object | <code>Object</code> | the object being copied |

<a name="Events"></a>

## Events
**Kind**: global class  


<ul class="import">
<li>import orion.reflect.Package;</li>
</ul>  

* [Events](#Events)
    * [new Events()](#new_Events_new)
    * [.stop(event)](#Events.stop) ⇒ <code>Boolean</code>

<a name="new_Events_new"></a>

### new Events()
Event utility class

<a name="Events.stop"></a>

### Events.stop(event) ⇒ <code>Boolean</code>
Stops both immediate and regular propagation for the given event. This is a
utility useful to cancel an event execution by simply calling and returning
it inside of a handler

**Kind**: static method of [<code>Events</code>](#Events)  
**Returns**: <code>Boolean</code> - false, always false  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Object</code> | the event object |

<a name="Cursor"></a>

## Cursor
**Kind**: global class  


<ul class="import">
<li>import orion.utils.Objects;</li>
<li>import org.jQuery;</li>
<li>import orion.reflect.Package;</li>
</ul>  

* [Cursor](#Cursor)
    * [new Cursor()](#new_Cursor_new)
    * [new Cursor()](#new_Cursor_new)
    * [.y](#Cursor.y)
    * [.x](#Cursor.x)
    * [.touch](#Cursor.touch)
    * [.eventStart](#Cursor.eventStart) : <code>String</code>
    * [.eventEnd](#Cursor.eventEnd)
    * [.eventMove](#Cursor.eventMove)
    * [.eventTarget(element)](#Cursor.eventTarget) ⇒
    * [.hover(element)](#Cursor.hover) ⇒
    * [.getLocal(element)](#Cursor.getLocal) ⇒ <code>Object</code>
    * [.getX(event, local)](#Cursor.getX) ⇒ <code>Number</code>
    * [.getY(event, local)](#Cursor.getY) ⇒ <code>Number</code>
    * [.diff(x, y)](#Cursor.diff) ⇒ <code>Object</code>
    * [.diffY(y)](#Cursor.diffY) ⇒ <code>Number</code>
    * [.diffX(x)](#Cursor.diffX) ⇒ <code>Number</code>
    * [.moved(x, y)](#Cursor.moved) ⇒ <code>Boolean</code>
    * [.update(event)](#Cursor.update)

<a name="new_Cursor_new"></a>

### new Cursor()
Cursor/Mouse/Touch utilities

<a name="new_Cursor_new"></a>

### new Cursor()
Effect utilities and tricks

<a name="Cursor.y"></a>

### Cursor.y
Current <code>y<code> coordinate of the cursor in the screen.

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.x"></a>

### Cursor.x
Current <code>x<code> coordinate of the cursor in the screen.

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.touch"></a>

### Cursor.touch
Indicate if the browser supports touch events

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.eventStart"></a>

### Cursor.eventStart : <code>String</code>
Event name used to define when touch has started

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.eventEnd"></a>

### Cursor.eventEnd
Event name used to define when touch has ended

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.eventMove"></a>

### Cursor.eventMove
Event name used to define when mouse/finger is moving

**Kind**: static property of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.eventTarget"></a>

### Cursor.eventTarget(element) ⇒
Translate the given element to its target area depending on touch support or
not.

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: if touch support, returns the given element, if not, return the root
        document allowing touch to be used outside the element  

| Param | Description |
| --- | --- |
| element | the element dispatching the event |

<a name="Cursor.hover"></a>

### Cursor.hover(element) ⇒
Check if the cursor (touch or mouse) is currently over the given element

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: true if cursor is currently over, false otherwise  

| Param | Description |
| --- | --- |
| element | the jQuery object of the element we are checking against |

<a name="Cursor.getLocal"></a>

### Cursor.getLocal(element) ⇒ <code>Object</code>
Translate the current global cursor's position to the offset coordinates of
the cursor within the given element, as in the position of the cursor in the
given element itself.

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Object</code> - hash containing both x and y position of the cursor within
        the given element.  

| Param | Type | Description |
| --- | --- | --- |
| element | [<code>jQuery</code>](#jQuery) | the jQuery element we want the local cursor's position |

<a name="Cursor.getX"></a>

### Cursor.getX(event, local) ⇒ <code>Number</code>
Retrieve the local/global X coordinate for the given mouse event. If using
touch devices, use the first touch item instead

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Number</code> - the x coordinate  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>jQuery.Event</code> | the event being containing the position |
| local | <code>Boolean</code> | flag that indicate if we want the local or global            coordinates. Defaults to false returning global position |

<a name="Cursor.getY"></a>

### Cursor.getY(event, local) ⇒ <code>Number</code>
Retrieve the local/global Y coordinate for the given mouse event. If using
touch devices, use the first touch item instead

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Number</code> - the x coordinate  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>jQuery.Event</code> | the event being containing the position |
| local | <code>Boolean</code> | flag that indicate if we want the local or global            coordinates. Defaults to false returning global position |

<a name="Cursor.diff"></a>

### Cursor.diff(x, y) ⇒ <code>Object</code>
Calculate the difference between the the current cursor's position and the
given position (AKA current.x - position.x, ...).

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Object</code> - hash containing the position difference between the given
        position and the current position (may contain negative values)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | the previous X position |
| y | <code>Number</code> | the previous Y position |

<a name="Cursor.diffY"></a>

### Cursor.diffY(y) ⇒ <code>Number</code>
Calculate the difference between the current cursor's Y to the given Y
coordinate

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Number</code> - the difference between current cursor's Y and given Y
        coordinate  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>Number</code> | the previous Y position |

<a name="Cursor.diffX"></a>

### Cursor.diffX(x) ⇒ <code>Number</code>
Calculate the difference between the current cursor's X to the given X
coordinate

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Number</code> - the difference between current cursor's X and given X
        coordinate  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | the previous X position |

<a name="Cursor.moved"></a>

### Cursor.moved(x, y) ⇒ <code>Boolean</code>
Check if the cursor once pointed to the given position has moved relative to
the current cursor's position.

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>Boolean</code> - true if the cursor is no longer i the same position as the
        given one, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | the previous X position |
| y | <code>Number</code> | the previous Y position |

<a name="Cursor.update"></a>

### Cursor.update(event)
Perform an update on both x and y positions of the cursor based on the given
mouse event. This method is rarely necessary to be called manually, unless
you need a very accurate position of the mouse for touch devices as the
default mechanism involves touchstart on the document and that is only
propagated after touchstart has been dispatched within a target element,
therefore a VERY small gap where the coordinates may not be accurate enough.

**Kind**: static method of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>jQuery.Event</code> | the event used to update the coordinates |

<a name="GUID"></a>

## GUID
**Kind**: global class  

* [GUID](#GUID)
    * [new GUID()](#new_GUID_new)
    * [.prefix](#GUID.prefix)
    * [.get(item)](#GUID.get) ⇒

<a name="new_GUID_new"></a>

### new GUID()
GUID helper class

<ul class="import">
<li>import orion.reflect.Package;</li>
</ul>

<a name="GUID.prefix"></a>

### GUID.prefix
Prefix prepended between each generated GUID

**Kind**: static property of [<code>GUID</code>](#GUID)  
<a name="GUID.get"></a>

### GUID.get(item) ⇒
Look up for the GUID of the given item by checking for a property named
<code>GUID</code> declared directly within the given item. If not defined,
a new GUID is assigned and returned.

**Kind**: static method of [<code>GUID</code>](#GUID)  
**Returns**: GUID from the given item  

| Param | Description |
| --- | --- |
| item | the item we want the GUID from |

<a name="HTML"></a>

## HTML
**Kind**: global class  


<ul class="import">
<li>import orion.utils.URLs;</li>
<li>import orion.reflect.Reflection;</li>
<li>import orion.reflect.ClassLoader;</li>
<li>import orion.utils.Arrays;</li>
<li>import orion.utils.Objects;</li>
<li>import orion.utils.JQuery;</li>
</ul>  

* [HTML](#HTML)
    * [new HTML()](#new_HTML_new)
    * [.DIV](#HTML.DIV)
    * [.escape](#HTML.escape) ⇒ <code>String</code>
    * [.is()](#HTML.is) ⇒
    * [.get(markup)](#HTML.get) ⇒ [<code>jQuery</code>](#jQuery)
    * [.getElement(object)](#HTML.getElement) ⇒
    * [.join(hash, arguments)](#HTML.join) ⇒ <code>String</code>
    * [.getForm(encType, charsetName)](#HTML.getForm) ⇒

<a name="new_HTML_new"></a>

### new HTML()
HTML utility class

<a name="HTML.DIV"></a>

### HTML.DIV
Markup for a plain div tag

**Kind**: static property of [<code>HTML</code>](#HTML)  
<a name="HTML.escape"></a>

### HTML.escape ⇒ <code>String</code>
Escape the given value making it ready for HTML

**Kind**: static property of [<code>HTML</code>](#HTML)  
**Returns**: <code>String</code> - HTML escaped String  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the value to be escaped |

<a name="HTML.is"></a>

### HTML.is() ⇒
Check if the given string content represents a HTML code.

**Kind**: static method of [<code>HTML</code>](#HTML)  
**Returns**: true if the given value represents one of the HTML tags  
**Value**: the string value we are checking on  
<a name="HTML.get"></a>

### HTML.get(markup) ⇒ [<code>jQuery</code>](#jQuery)
Transform the given HTML (STring) mark-up into a HTML element

**Kind**: static method of [<code>HTML</code>](#HTML)  
**Returns**: [<code>jQuery</code>](#jQuery) - HTML element  

| Param | Type | Description |
| --- | --- | --- |
| markup | <code>String</code> | the HTML mark-up |

<a name="HTML.getElement"></a>

### HTML.getElement(object) ⇒
Transform the given object into a jQuery HTML Element node set.

<ul>
<li> <b>orion.ui.Component</b> : return Component.getElement() result</li>
<li> <b>String</b> : construct using default JQuery constructor</li>
<li> <b>jQuery</b> : return as is </li>
</ul>

**Kind**: static method of [<code>HTML</code>](#HTML)  
**Returns**: jQuery stack  

| Param | Description |
| --- | --- |
| object | the object being transformed |

<a name="HTML.join"></a>

### HTML.join(hash, arguments) ⇒ <code>String</code>
Join all given arguments together without any space or special characters.

<p>
If the first argument passed is a Hash object, use it as a tag template where
all properties are properties directly mapped for the produced HTML element,
excluding the special reserved properties:
</p>

<ul>
<li><b>tag</b>: The tag name being created </li>
<li><b>text</b>: The node's text </li>
<li><b>children</b>: Array of child elements (hash or string) </li>
</ul>

You can always pass a set of infinite arguments as plain String which then
are simply joined instead.

**Kind**: static method of [<code>HTML</code>](#HTML)  
**Returns**: <code>String</code> - joined HTML mark-up  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>Object</code> | used as a HTML template |
| arguments | <code>Arguments</code> | (0..x) list of arguments being joined |

<a name="HTML.getForm"></a>

### HTML.getForm(encType, charsetName) ⇒
Create a form with mapped for the given URL, method, target type and encoding
type including a hidden field for every single value in the given data
parameter.

**Kind**: static method of [<code>HTML</code>](#HTML)  
**Returns**: new form instance  

| Param | Type | Description |
| --- | --- | --- |
| encType | <code>String</code> | the form's enctype (as in multipart/form-data String if            pushing multipart documents). Defaults to            <code>application/x-www-form-urlencoded</code> |
| charsetName | <code>String</code> | the charset encoding used. Defaults to browser's encoding |

<a name="LocalStorage"></a>

## LocalStorage
**Kind**: global class  


* [LocalStorage](#LocalStorage)
    * [new LocalStorage()](#new_LocalStorage_new)
    * [.linkToUser](#LocalStorage.linkToUser) : <code>Boolean</code>
    * [.set(name, value)](#LocalStorage.set)
    * [.contains()](#LocalStorage.contains) ⇒ <code>Boolean</code>
    * [.remove(the)](#LocalStorage.remove)
    * [.getType()](#LocalStorage.getType) ⇒ <code>String</code>
    * [.setType(type)](#LocalStorage.setType)
    * [.isCookie()](#LocalStorage.isCookie) ⇒ <code>Boolean</code>

<a name="new_LocalStorage_new"></a>

### new LocalStorage()
API that wrappers <code>localStorage</code> falling back to regular browser
cookies when the same is not available.

<p>
Another important aspect of this API is that it allows you to storage
full-complex Javascript Object instances (including arrays, numbers, etc). In
other words, JSON-based data.
</p>

<ul class="import">
<li>import orion.utils.Browser;</li>
<li>import orion.utils.Objects;</li>
</ul>

<a name="LocalStorage.linkToUser"></a>

### LocalStorage.linkToUser : <code>Boolean</code>
Flag that indicates if stored data should be automatically linked to logged
user, whenever possible.

**Kind**: static property of [<code>LocalStorage</code>](#LocalStorage)  
**Default**: <code>true</code>  
<a name="LocalStorage.set"></a>

### LocalStorage.set(name, value)
Set/update the given value under the given name. The same can now be
retrieved via [LocalStorage#get()](LocalStorage#get())

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | the name of the property |
| value | <code>Any</code> | the data to be stored |

<a name="LocalStorage.contains"></a>

### LocalStorage.contains() ⇒ <code>Boolean</code>
Verify if the local storage has a property of the given name

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  
**Returns**: <code>Boolean</code> - true if exists, false otherwise  
<a name="LocalStorage.remove"></a>

### LocalStorage.remove(the)
Discard the content of stored under the given property name

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>String</code> | name of the property being discarded |

<a name="LocalStorage.getType"></a>

### LocalStorage.getType() ⇒ <code>String</code>
Look up for the storage type currently being used.

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  
**Returns**: <code>String</code> - either "local" if using <code>localStorage</code> or
        <code>cookie</code> if localStorage is not available.  
<a name="LocalStorage.setType"></a>

### LocalStorage.setType(type)
Alter the storage type utilizing from now-on the given storage type
discarding the previous storage being used.

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | the new storage type to be used |

<a name="LocalStorage.isCookie"></a>

### LocalStorage.isCookie() ⇒ <code>Boolean</code>
Verify if currently using a local storage type

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  
**Returns**: <code>Boolean</code> - true if currently using cookies a local storage, false
        otherwise  
<a name="Numbers"></a>

## Numbers
**Kind**: global class  


* [Numbers](#Numbers)
    * [new Numbers()](#new_Numbers_new)
    * [.ceilDecimal(value)](#Numbers.ceilDecimal) ⇒ <code>Number</code>
    * [.is(value)](#Numbers.is) ⇒ <code>Boolean</code>

<a name="new_Numbers_new"></a>

### new Numbers()
Static class used as a place-holder for <code>Number</code> based utility
methods.

<ul class="import">
<li>import orion.reflect.Package;</li>
</ul>

<a name="Numbers.ceilDecimal"></a>

### Numbers.ceilDecimal(value) ⇒ <code>Number</code>
Round up the given decimal value from 1 decimal after comma.

**Kind**: static method of [<code>Numbers</code>](#Numbers)  
**Returns**: <code>Number</code> - number rounded up  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | the number being rounded up |

<a name="Numbers.is"></a>

### Numbers.is(value) ⇒ <code>Boolean</code>
Check if the given String value is a Number value or not

**Kind**: static method of [<code>Numbers</code>](#Numbers)  
**Returns**: <code>Boolean</code> - true if a number, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the String value being tested |

<a name="Objects"></a>

## Objects
**Kind**: global class  


* [Objects](#Objects)
    * [new Objects()](#new_Objects_new)
    * [.flatten](#Objects.flatten) ⇒ <code>Object</code>
    * [.parse](#Objects.parse) ⇒ <code>Object</code>
    * [.copy(data)](#Objects.copy) ⇒
    * [.isEmpty(object)](#Objects.isEmpty) ⇒ <code>Boolean</code>
    * [.clean(data)](#Objects.clean)
    * [.extend(deep, skipInvalid, deepArray, target, arguments)](#Objects.extend) ⇒
    * [.extendIf(target, source, deep, filter, skipInvalid, deepArray)](#Objects.extendIf) ⇒
    * [.extendIfNot(target, source, deep, filter)](#Objects.extendIfNot) ⇒ <code>Object</code>
    * [.toggle(value, opt1, opt2)](#Objects.toggle) ⇒
    * [.each(object, callback, scope)](#Objects.each)
    * [.toArray(object)](#Objects.toArray) ⇒
    * [.get(object, name)](#Objects.get) ⇒ <code>Object</code>
    * [.getNames(object)](#Objects.getNames) ⇒ <code>Array</code>
    * [.getLength(object)](#Objects.getLength) ⇒ <code>Number</code>
    * [.isDefined(object)](#Objects.isDefined) ⇒ <code>Boolean</code>
    * [.isValid(object)](#Objects.isValid) ⇒
    * [.equal(a, b, caseSensitive)](#Objects.equal) ⇒ <code>Boolean</code>
    * [.notEqual(a, b, caseSensitive)](#Objects.notEqual) ⇒ <code>Boolean</code>
    * [.match(source, target)](#Objects.match) ⇒ <code>Boolean</code>
    * [.compare(a, b)](#Objects.compare) ⇒
    * [.diff()](#Objects.diff) ⇒
    * [.propertyNames(hash)](#Objects.propertyNames) ⇒
    * [.sum(arguments)](#Objects.sum) ⇒ <code>Object</code>
    * [.subtract(arguments)](#Objects.subtract) ⇒ <code>Object</code>

<a name="new_Objects_new"></a>

### new Objects()
Static class used as a place-holder for <code>Object</code> based utility
methods.

<ul class="import">
<li>import orion.reflect.Reflection;</li>
<li>import orion.utils.Numbers;</li>
<li>import com.orion.language.Number;</li>
</ul>

<a name="Objects.flatten"></a>

### Objects.flatten ⇒ <code>Object</code>
Flatten the given object properties encoding them in n-level into a
single-level object where all property paths are separated by a dot (.).

**Kind**: static property of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - flattened object  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object to be flattened |

<a name="Objects.parse"></a>

### Objects.parse ⇒ <code>Object</code>
Parse the given plain String value to its corresponding type in Javascript
according to the following table of rules:

<ul>
<li><b>"true"</b> => true</li>
<li><b>"false"</b> => false</li>
<li><b>"1"</b> => 1. This is valid for any numeral (even negative)</li>
<li><b>"null"</b> => null</li>
<li><b>"undefined"</b> => undefined</li>
<li><b>"{\"name\" : \"..\"}"</b> => { name : "..." }. This is for any valid
JSON expression (even arrays)</li>
</ul>

**Kind**: static property of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - parsed String  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string being parsed or the String itself if it is            just a plain old String |

<a name="Objects.copy"></a>

### Objects.copy(data) ⇒
Copy all properties of the given object to a new object

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: copied object  

| Param | Description |
| --- | --- |
| data | the object to be copied |

<a name="Objects.isEmpty"></a>

### Objects.isEmpty(object) ⇒ <code>Boolean</code>
Check rather the given object contains at least one property

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Boolean</code> - <code>true</code> if no properties are defined in the
        given object, <code>false</code> otherwise  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object being mapped |

<a name="Objects.clean"></a>

### Objects.clean(data)
Remove all blank, null or NaN properties from the given object

**Kind**: static method of [<code>Objects</code>](#Objects)  

| Param | Description |
| --- | --- |
| data | the object to be cleaned |

<a name="Objects.extend"></a>

### Objects.extend(deep, skipInvalid, deepArray, target, arguments) ⇒
Low-level API for copying all properties defined within the given hash
objects into the given target hash object.

<p>
The target object will receive the properties from each defined hash argument
given in its sequential order. This means that if 2 objects are given, and
they both contain the same property with different value, only the last
object's property will be kept overriding all previously extended ones.
</p>

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: target with extended properties  

| Param | Type | Description |
| --- | --- | --- |
| deep | <code>Boolean</code> | If true, the merge becomes recursive (AKA. deep copy). |
| skipInvalid | <code>Boolean</code> | Flag that indicates if we should skip undefined/invalid            properties. Default is <code>true</code> |
| deepArray | <code>Boolean</code> | deep copy array items as well. Default is            <code>true</code> |
| target |  | the object receiving the copied properties |
| arguments |  | (1..x) arguments as hash objects where all properties shall be            copied to. |

<a name="Objects.extendIf"></a>

### Objects.extendIf(target, source, deep, filter, skipInvalid, deepArray) ⇒
Low-level API for copying all properties defined within the given hash
objects into the given target hash object.

<p>
An additional filter is applied via a callback function that will determine
if a field should be copied or not.
</p>

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: target with extended properties  

| Param | Type | Description |
| --- | --- | --- |
| target |  | the object receiving the copied properties |
| source |  | the object being copied over the given target hash |
| deep |  | If true, the merge becomes recursive (AKA. deep copy). |
| filter |  | callback function using the signature            <code>function(name, target, source)</code> that must return a            boolean to signal if the property should be copied or not. If not            defined, all properties are copied. |
| skipInvalid |  | Flag that indicates if we should skip undefined/invalid            properties. Default is <code>true</code> |
| deepArray | <code>Boolean</code> | deep copy array items as well. Default is            <code>true</code> |

<a name="Objects.extendIfNot"></a>

### Objects.extendIfNot(target, source, deep, filter) ⇒ <code>Object</code>
Similar to Objects.extend() but only works with a single source hash and only
copy properties that are not yet defined.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - target  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | the target object where properties are copied to |
| source | <code>Object</code> | the source object being copied |
| deep | <code>Boolean</code> | If true, the merge becomes recursive (AKA. deep copy). |
| filter |  | callback function using the signature            <code>function(name, target, source)</code> that must return a            boolean to signal if the property should be copied or not. If not            defined, all properties are copied. |

<a name="Objects.toggle"></a>

### Objects.toggle(value, opt1, opt2) ⇒
Toggle the given value returning option 1 if currently defined as option 2
and vice versa.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: opt1 or opt2 according to the above described rules.  

| Param | Description |
| --- | --- |
| value | the base value for comparison |
| opt1 | the option one returned if given value is equal opt2 or null. |
| opt2 | the option two returned if given value is equal opt1. |

<a name="Objects.each"></a>

### Objects.each(object, callback, scope)
Enables object/array navigation by visiting members of the given object using
a callback function as a way of looping through properties defined in a Hash
Object or elements of an Array.

**Kind**: static method of [<code>Objects</code>](#Objects)  

| Param | Description |
| --- | --- |
| object | the object being looped. |
| callback | function called for every encountered member of the given            object/array. The callback uses the signature            <code>(name, value)</code> for visited properties of a hash            object and <code>(index, value)</code> for array elements. |
| scope | the scope used while calling the callback function. If not            provided, the object being visited is used instead. |

<a name="Objects.toArray"></a>

### Objects.toArray(object) ⇒
Translate the given object into an array. If already an array, just return as
is. If a <code>Object</code> return the values defined in the given object
as an array. Anything else is wrapped into an array instance.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: values in the given object as an array.  

| Param | Description |
| --- | --- |
| object | the object object to be converted |

<a name="Objects.get"></a>

### Objects.get(object, name) ⇒ <code>Object</code>
Look-up for a single property value within the given object

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - the property's value  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object we want the property from |
| name | <code>String</code> | the property name being looked-up |

<a name="Objects.getNames"></a>

### Objects.getNames(object) ⇒ <code>Array</code>
Look-up for all the defined property names under the given object and return
it as an array.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Array</code> - array of property names  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object we want the property names from |

<a name="Objects.getLength"></a>

### Objects.getLength(object) ⇒ <code>Number</code>
Return the number of properties defined by the given Object.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Number</code> - the number of properties under this object  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object being scanned |

<a name="Objects.isDefined"></a>

### Objects.isDefined(object) ⇒ <code>Boolean</code>
Check if the given object is a defined value by comparing against
<code>null</code> and <code>undefined</code> returning <code>true</code>
when neither or <code>false</code> otherwise.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Boolean</code> - true if neither null or undefined, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object being validated |

<a name="Objects.isValid"></a>

### Objects.isValid(object) ⇒
Simply check if the given object is a valid object value. Primitive types
auto-evaluate to false when matching their default values.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: true if a valid value, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object being evaluated. |

<a name="Objects.equal"></a>

### Objects.equal(a, b, caseSensitive) ⇒ <code>Boolean</code>
Perform a deep comparison checking if the given two objects match completely.
Does not imply that both need to hold the same memory reference/instance.

<p>
Compare arrays to match the exact same order. Hash objects need to contain
the same properties and other values to match on type/value (simple
comparison using <code>==</code>).
</p>

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Boolean</code> - true if both values are equal, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Object</code> | the first value to be compared |
| b | <code>Object</code> | the second value to be compared |
| caseSensitive | <code>Boolean</code> | flag that indicates if the comparison if case sensitive |

<a name="Objects.notEqual"></a>

### Objects.notEqual(a, b, caseSensitive) ⇒ <code>Boolean</code>
Deep compare two objects returning the inverse result of
[Objects#equal()](Objects#equal()).

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Boolean</code> - true if both values are different, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Object</code> | the first value to be compared |
| b | <code>Object</code> | the second value to be compared |
| caseSensitive | <code>Boolean</code> | flag that indicates if the comparison if case sensitive |

<a name="Objects.match"></a>

### Objects.match(source, target) ⇒ <code>Boolean</code>
Check if the given source contains all the properties (with the same value)
defined in the given target object. If at least one property does not match,
returns false.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Boolean</code> - true if source has all properties of target with the same
        value, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Object</code> | the source object that should contain all target            properties |
| target | <code>Object</code> | the target object holding the properties compared against            source |

<a name="Objects.compare"></a>

### Objects.compare(a, b) ⇒
Compare the two given parameters to each other.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: 1 if a > b, 0 if equal or -1 if a < b  

| Param | Description |
| --- | --- |
| a | the first value in the comparison |
| b | the second value in the comparison |

<a name="Objects.diff"></a>

### Objects.diff() ⇒
Compare each property of the first object to the the property of the second
object. The result is an array of objects holding properties name for field
name, oldValue holding the value from the first parameter and newValue for
the second parameter. Only changed properties are included.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: array with object comparison of changed properties  
<a name="Objects.propertyNames"></a>

### Objects.propertyNames(hash) ⇒
Retrieve an array of property names stored within the given hash object. Each
element of the array represents a property name of the given hash object.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: array of property names stored in the given hash  

| Param | Description |
| --- | --- |
| hash | the hash we want the property names from |

<a name="Objects.sum"></a>

### Objects.sum(arguments) ⇒ <code>Object</code>
Concatenate all the given objects into a new single Object. Arguments that
are not objects are just appended as is.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - object containing all added sub-entries.  

| Param | Description |
| --- | --- |
| arguments | 0...x |

<a name="Objects.subtract"></a>

### Objects.subtract(arguments) ⇒ <code>Object</code>
Subtract all properties within all given objects from the first object passed
as an argument and returned it as a new object.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - object containing subtracted properties.  

| Param | Description |
| --- | --- |
| arguments | 0...x |

<a name="Strings"></a>

## Strings
**Kind**: global class  


<ul class="import">
<li>import orion.utils.Objects;</li>
</ul>  

* [Strings](#Strings)
    * [new Strings()](#new_Strings_new)
    * [.LINE_SEPARATOR](#Strings.LINE_SEPARATOR)
    * [.TRIM_LEFT](#Strings.TRIM_LEFT)
    * [.TRIM_RIGHT](#Strings.TRIM_RIGHT)
    * [.format(value, parameters)](#Strings.format) ⇒ <code>String</code>
    * [.startsWith(string, prefix, caseSensitive)](#Strings.startsWith) ⇒
    * [.endsWith(string, value, caseSensitive)](#Strings.endsWith) ⇒ <code>Boolean</code>
    * [.contains(string, prefix, caseSensitive)](#Strings.contains) ⇒ <code>Boolean</code>
    * [.replaceAll(string, oldValue, newValue, regex)](#Strings.replaceAll) ⇒
    * [.replace(string, key, value, index)](#Strings.replace) ⇒ <code>String</code>
    * [.trim(string)](#Strings.trim) ⇒ <code>String</code>
    * [.camelCaseByToken()](#Strings.camelCaseByToken) ⇒
    * [.substringAfter(str, delimiter)](#Strings.substringAfter) ⇒ <code>String</code>
    * [.substringBefore(str, delimiter)](#Strings.substringBefore) ⇒ <code>String</code>
    * [.trimLeft(string)](#Strings.trimLeft) ⇒
    * [.trimRight(string)](#Strings.trimRight) ⇒ <code>String</code>
    * [.padLeft(str, size, padChar)](#Strings.padLeft) ⇒ <code>String</code>
    * [.padRight(str, size, padChar)](#Strings.padRight) ⇒ <code>String</code>
    * [.truncate(value, length)](#Strings.truncate) ⇒ <code>String</code>
    * [.getLabel(string)](#Strings.getLabel) ⇒ <code>String</code>
    * [.getClosestWord(string, cursor)](#Strings.getClosestWord) ⇒ <code>Object</code>
    * [.tokenizeByCamelCase(string, token)](#Strings.tokenizeByCamelCase) ⇒ <code>String</code>
    * [.slugfy(the)](#Strings.slugfy) ⇒ <code>String</code>
    * [.tagfy(value)](#Strings.tagfy) ⇒ <code>Array</code>

<a name="new_Strings_new"></a>

### new Strings()
String utility class

<a name="Strings.LINE_SEPARATOR"></a>

### Strings.LINE_SEPARATOR
The default character used to separate lines (line-break);

**Kind**: static property of [<code>Strings</code>](#Strings)  
<a name="Strings.TRIM_LEFT"></a>

### Strings.TRIM_LEFT
RegExp expression used to trim the left side of a String

**Kind**: static property of [<code>Strings</code>](#Strings)  
**See**: Strings#trimLeft()  
<a name="Strings.TRIM_RIGHT"></a>

### Strings.TRIM_RIGHT
RegExp expression used to trim right left side of a String

**Kind**: static property of [<code>Strings</code>](#Strings)  
**See**: Strings#trimRight()  
<a name="Strings.format"></a>

### Strings.format(value, parameters) ⇒ <code>String</code>
Format the given String injecting the indexed parameters based on the
arguments of the given parameters array.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - formatted string;  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string being formatted |
| parameters | <code>String</code> | the parameters to be injected |

<a name="Strings.startsWith"></a>

### Strings.startsWith(string, prefix, caseSensitive) ⇒
Check rather the given String value starts with the given prefix value
returning <code>true</code> if so, or <code>false</code> otherwise

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>true</code> if the given String value has the same initial
        prefix, or <code>false</code> otherwise  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being evaluated |
| prefix | <code>String</code> | the prefix String value checked against the given String |
| caseSensitive | <code>Boolean</code> | flag that indicates if we should perform comparison            using case sensitive |

<a name="Strings.endsWith"></a>

### Strings.endsWith(string, value, caseSensitive) ⇒ <code>Boolean</code>
Verify if the given string ends with the given value

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Boolean</code> - true if the given string ends with the given value, false
        otherwise  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string we are verifying |
| value | <code>String</code> | the value used while comparing |
| caseSensitive |  | flag that indicates if we should perform comparison using case            sensitive |

<a name="Strings.contains"></a>

### Strings.contains(string, prefix, caseSensitive) ⇒ <code>Boolean</code>
Check rather the given String value contains the given prefix value returning
<code>true</code> if so, or <code>false</code> otherwise

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Boolean</code> - <code>true</code> if the given String value contains the
        given prefix, or <code>false</code> otherwise  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being evaluated |
| prefix | <code>String</code> | the prefix String value checked against the given String |
| caseSensitive | <code>Boolean</code> | flag that indicates if we should perform comparison            using case sensitive |

<a name="Strings.replaceAll"></a>

### Strings.replaceAll(string, oldValue, newValue, regex) ⇒
Replace within the given String value, all occurrences of the existing value
with the given new String value.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: formatted value containing the replaced values  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being parsed |
| oldValue | <code>String</code> | the existing value to be replaced |
| newValue | <code>String</code> | the new value to be replaced |
| regex | <code>Boolean</code> | flag that indicates if we should use regex 'g' to            replace all or not. If you're replacing characters that may            conflict with regex, you might not want to use this as true.            Defaults to false |

<a name="Strings.replace"></a>

### Strings.replace(string, key, value, index) ⇒ <code>String</code>
Method similar to String.replace() used to replace a certain string
value/regex expression within a given string.

<p>
It adds the ability to start replacing from a given starting index (in which
is used to substring before we can do the replace).
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - replaced/merged string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the main string template |
| key | <code>String</code> | the key we want to replace |
| value | <code>String</code> | the replacing the given key |
| index | <code>int</code> | the starting index in the given string where we want to            start replacing from (not required) |

<a name="Strings.trim"></a>

### Strings.trim(string) ⇒ <code>String</code>
Trim both left and right sides of the given string removing trailing and
white space characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - trimmed string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being processed |

<a name="Strings.camelCaseByToken"></a>

### Strings.camelCaseByToken() ⇒
Camel-case the given String value on every occurrence of the given token;

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: camel-cased String by a given tokentoken the token being used as a separatorthe given String camel-cased  
<a name="Strings.substringAfter"></a>

### Strings.substringAfter(str, delimiter) ⇒ <code>String</code>
<p>
Gets the substring after the first occurrence of a delimiter. The delimiter
is not returned.
</p>

<p>
A <code>null</code> string input will return <code>null</code>. An empty
("") string input will return the empty string. A <code>null</code>
delimiter will return the empty string if the input string is not
<code>null</code>.
</p>

<p>
If nothing is found, the empty string is returned.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - the substring after the first occurrence of the delimiter,
        null if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to get a substring from, may be null |
| delimiter | <code>String</code> | the String to search for, may be null |

<a name="Strings.substringBefore"></a>

### Strings.substringBefore(str, delimiter) ⇒ <code>String</code>
<p>
Gets the substring before the first occurrence of a delimiter. The delimiter
is not returned.
</p>

<p>
A <code>null</code> string input will return <code>null</code>. An empty
("") string input will return the empty string. A <code>null</code>
delimiter will return the empty string if the input string is not
<code>null</code>.
</p>

<p>
If nothing is found, the empty string is returned.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - the substring before the first occurrence of the delimiter,
        null if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to get a substring from, may be null |
| delimiter | <code>String</code> | the String to search for, may be null |

<a name="Strings.trimLeft"></a>

### Strings.trimLeft(string) ⇒
Trim the left side of the given string removing trailing and white space
characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: trimmed string  

| Param | Description |
| --- | --- |
| string | the String value being processed |

<a name="Strings.trimRight"></a>

### Strings.trimRight(string) ⇒ <code>String</code>
Trim the right sides of the given string removing trailing and white space
characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - trimmed string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being processed |

<a name="Strings.padLeft"></a>

### Strings.padLeft(str, size, padChar) ⇒ <code>String</code>
<p>
Left pad a String with a specified String.
</p>

<p>
Pad to a size of <code>size</code>.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - left padded String or original String if no padding is
        necessary, <code>null</code> if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to pad out, may be null |
| size | <code>Number</code> | the size to pad to |
| padChar | <code>String</code> | the String to pad with, null or empty treated as single            space |

<a name="Strings.padRight"></a>

### Strings.padRight(str, size, padChar) ⇒ <code>String</code>
<p>
Left pad a String with a specified String.
</p>

<p>
Pad to a size of <code>size</code>.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - left padded String or original String if no padding is
        necessary, <code>null</code> if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to pad out, may be null |
| size | <code>Number</code> | the size to pad to |
| padChar | <code>String</code> | the String to pad with, null or empty treated as single            space |

<a name="Strings.truncate"></a>

### Strings.truncate(value, length) ⇒ <code>String</code>
Truncate the given string value appending "..." to the substring extracted
with the given length if the given string's length is greater than the the
given length value (number) + 3.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - truncated string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string value to be truncated |
| length | <code>int</code> | the max length allowed |

<a name="Strings.getLabel"></a>

### Strings.getLabel(string) ⇒ <code>String</code>
<p>
Parse the given String into the most human-readable possible String.
</p>

<p>
This method transforms a field name or path into a readable string.
</p>

<p>
We tokenize upper case fields to a space character. We remove any "@" chars
and also replace "_", "-" or "." for a blank/space character.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - the label  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string to be transformed |

<a name="Strings.getClosestWord"></a>

### Strings.getClosestWord(string, cursor) ⇒ <code>Object</code>
Find the closest word within the given string, based on the given cursor
index position being a required parameter used to find out the closest word
from that location.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Object</code> - hash object containing closest word from the given index
        location and the starting index from where the word was retrieved:
        <code><{ value : '', index : 000}</code>  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string value containing the words |
| cursor | <code>int</code> | the index position of the cursor within the given string            (usually obtained from a text input selection) |

<a name="Strings.tokenizeByCamelCase"></a>

### Strings.tokenizeByCamelCase(string, token) ⇒ <code>String</code>
Tokenize the given String by camel case replacing upper case characters by
the given token.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - text  

| Param | Type |
| --- | --- |
| string | <code>String</code> | 
| token | <code>String</code> | 

<a name="Strings.slugfy"></a>

### Strings.slugfy(the) ⇒ <code>String</code>
Generate a slug for the given String value replacing spaces and special
characters per valid slug characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - generated slug for the given value  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>String</code> | value used to generate the slug |

<a name="Strings.tagfy"></a>

### Strings.tagfy(value) ⇒ <code>Array</code>
Split the given value by comma creating a list of anchor (<a>) for each one
of the given values.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Array</code> - list of tags for each value int he comma separated string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the value to be tagged |

<a name="Template"></a>

## Template
**Kind**: global class  


<ul class="import">
<li>import orion.utils.E4J;</li>
</ul>  

* [Template](#Template)
    * [new Template(template, pattern)](#new_Template_new)
    * _instance_
        * [.Template(context)](#Template+Template)
        * [.Template()](#Template+Template) ⇒
        * [.Template()](#Template+Template) ⇒
    * _static_
        * [.PATTERN](#Template.PATTERN)
        * [.TAG](#Template.TAG)
        * [.OPERATORS](#Template.OPERATORS)
        * [.parse(template, context, pattern)](#Template.parse)
        * [.is(value)](#Template.is) ⇒
    * _inner_
        * [~cache](#Template..cache)
        * [~parse(block, context)](#Template..parse) ⇒ <code>String</code>
        * [~parseBlock(block, context)](#Template..parseBlock) ⇒ <code>String</code>

<a name="new_Template_new"></a>

### new Template(template, pattern)
String-Template parsing utilities.


| Param | Description |
| --- | --- |
| template | the String template being processed |
| pattern | the pattern used to identify the variables being replaced within            the given template. If not given, <code>Template#PATTERN</code>            is used instead. |

<a name="Template+Template"></a>

### template.Template(context)
Parse the given Template string against the given context variables and
variable declaration pattern.

**Kind**: instance method of [<code>Template</code>](#Template)  

| Param | Description |
| --- | --- |
| context | the context object where variables are declared (may be an            array with multiple template objects in which case are used in            the given sequence skipping through items that don't have the            declared merging properties) |

<a name="Template+Template"></a>

### template.Template() ⇒
The String template being processed

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: template  
<a name="Template+Template"></a>

### template.Template() ⇒
The pattern used to identify the variables being replaced within the
given template.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: pattern  
<a name="Template.PATTERN"></a>

### Template.PATTERN
Constant for official template pattern used to parse String templates
replacing String variable declarations against a Object template variables
and functions.

**Kind**: static property of [<code>Template</code>](#Template)  
**See**: Template#parse()  
<a name="Template.TAG"></a>

### Template.TAG
Character used to mark the template tag

**Kind**: static property of [<code>Template</code>](#Template)  
<a name="Template.OPERATORS"></a>

### Template.OPERATORS
Available operator used to execute blocks

**Kind**: static property of [<code>Template</code>](#Template)  
<a name="Template.parse"></a>

### Template.parse(template, context, pattern)
Parse the given Template string against the given context variables and
variable declaration pattern.

**Kind**: static method of [<code>Template</code>](#Template)  

| Param | Description |
| --- | --- |
| template | the String template being processed (or the <code>Template</code>            itself). |
| context | the context object where variables are declared (may be an array            with multiple template objects in which case are used in the given            sequence skipping through items that don't have the declared            merging properties) |
| pattern | the pattern used to identify the variables being replaced within            the given template. If not given, <code>Template#PATTERN</code>            is used instead. |

<a name="Template.is"></a>

### Template.is(value) ⇒
Check if the given value has potential embedded template variables and
function calls.

**Kind**: static method of [<code>Template</code>](#Template)  
**Returns**: true if the given String can be parsed as a Template, false otherwise  

| Param | Description |
| --- | --- |
| value | the String value being checked |

<a name="Template..cache"></a>

### Template~cache
Cached parser functions

**Kind**: inner property of [<code>Template</code>](#Template)  
<a name="Template..parse"></a>

### Template~parse(block, context) ⇒ <code>String</code>
Parse the given block holding the given context of variables

**Kind**: inner method of [<code>Template</code>](#Template)  
**Returns**: <code>String</code> - parsed template  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>String</code> | the template block being parsed |
| context | <code>Object</code> | object holding variables used while parsing |

<a name="Template..parseBlock"></a>

### Template~parseBlock(block, context) ⇒ <code>String</code>
Parse the given block as a full-template processing sub-blocks and
variable/method declarations using the given object as context for
variables and methods.

**Kind**: inner method of [<code>Template</code>](#Template)  
**Returns**: <code>String</code> - parsed template  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>String</code> | the template block being parsed |
| context | <code>Object</code> | object holding variables used while parsing |

<a name="Timer"></a>

## Timer
**Kind**: global class  


* [Timer](#Timer)
    * [new Timer()](#new_Timer_new)
    * [.running](#Timer.running)
    * [.deferred](#Timer.deferred)
    * [.defer](#Timer.defer)
    * [.undefer(callback)](#Timer.undefer)

<a name="new_Timer_new"></a>

### new Timer()
Encapsulate time-utility functions into a single static class.

<p>
Timer utilities used to call a function every # of milliseconds making usage
of setInterval Javascript function but enabling functions to be called within
specified parameter values only once or forever and also stopping the
callback function from being called by using its function reference rather
than the setInterval's generated id.
</p>

<p>
Sinon (used for testing purposes) overwrite the global time-utilities and
there seems to be some problems with its own implementation. We keep a
reference of the native implementation as we don't want our API to be
affected by Sinon.
</p>

<ul class="import">
<li>import orion.utils.GUID;</li>
</ul>

<a name="Timer.running"></a>

### Timer.running
Storage for registered callback UIDs currently running

**Kind**: static property of [<code>Timer</code>](#Timer)  
<a name="Timer.deferred"></a>

### Timer.deferred
Deferred callback invoked in bulk.

**Kind**: static property of [<code>Timer</code>](#Timer)  
<a name="Timer.defer"></a>

### Timer.defer
Defer a callback to be invoked later in a bulk-sequence.

**Kind**: static property of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function being invoked whenever possible |

<a name="Timer.undefer"></a>

### Timer.undefer(callback)
Cancel a deferred callback function preventing it from being executed.

**Kind**: static method of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function being cancelled |

<a name="UI"></a>

## UI
**Kind**: global class  


<ul class="import">
<li>import orion.utils.JQuery;</li>
<li>import orion.reflect.Package;</li>
</ul>  

* [UI](#UI)
    * [new UI()](#new_UI_new)
    * [.TOP](#UI.TOP) : <code>String</code>
    * [.RIGHT](#UI.RIGHT)
    * [.BOTTOM](#UI.BOTTOM)
    * [.LEFT](#UI.LEFT)
    * [.CENTER](#UI.CENTER)
    * [.INSIDE](#UI.INSIDE)
    * [.OUTSIDE](#UI.OUTSIDE)
    * [.simulateChildrenPosition()](#UI.simulateChildrenPosition)
    * [.contains(element, dimension)](#UI.contains) ⇒
    * [.getAlignPosition(element, target, valign, halign, policy, type)](#UI.getAlignPosition) ⇒ <code>Object</code>
    * [.getBestAlignPosition(element, target, valign, halign, policy, type)](#UI.getBestAlignPosition) ⇒ <code>Object</code>
    * [.toPixel(value)](#UI.toPixel) ⇒ <code>Number</code>

<a name="new_UI_new"></a>

### new UI()
jQuery utility plug-ins

<a name="UI.TOP"></a>

### UI.TOP : <code>String</code>
Constant used to define the vertical alignment of a drop-down to
<code>"top"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.RIGHT"></a>

### UI.RIGHT
Constant used to define the horizontal alignment of a drop-down to
<code>"right"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.BOTTOM"></a>

### UI.BOTTOM
Constant used to define the vertical alignment of a drop-down to
<code>"bottom"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.LEFT"></a>

### UI.LEFT
Constant used to define the horizontal alignment of a drop-down to
<code>"left"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.CENTER"></a>

### UI.CENTER
Constant used to define the vertical/horizontal alignment of a drop-down to
<code>"center"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.INSIDE"></a>

### UI.INSIDE
Constant used to define the attachment policy aligning this drop-down inside
the boundaries of the target element.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.OUTSIDE"></a>

### UI.OUTSIDE
Constant used to define the attachment policy aligning this drop-down outside
the boundaries of the target element.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.simulateChildrenPosition"></a>

### UI.simulateChildrenPosition()
Patch that simulates first-child and last-child for first and last child
elements for each of the elements selected in the given jQuery object list.

<p>
This is useful to fix the :first-child and :last-child incompatibility with
Internet Explorer
</p>

**Kind**: static method of [<code>UI</code>](#UI)  
<a name="UI.contains"></a>

### UI.contains(element, dimension) ⇒
Check if the given element is under the given dimension

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: true if dimension matches, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | the element we want to check against |
| dimension | <code>Object</code> | hash holding coordinates and size |

<a name="UI.getAlignPosition"></a>

### UI.getAlignPosition(element, target, valign, halign, policy, type) ⇒ <code>Object</code>
Look-up for the alignment position to move the given element attaching it to
the given target using the given vertical, horizontal and attachment policy.

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: <code>Object</code> - the start and ending position according to the current
        visibility of the given element  

| Param | Type | Description |
| --- | --- | --- |
| element | [<code>jQuery</code>](#jQuery) | the element we want to align against a given target |
| target | [<code>jQuery</code>](#jQuery) | the target element we are bound to |
| valign | <code>String</code> | the vertical alignment |
| halign | <code>String</code> | the horizontal alignment |
| policy | <code>String</code> | the attachment policy |
| type | <code>String</code> | flag that indicate if the returned position should be            fixed, absolute or relative. Default is "relative" |

<a name="UI.getBestAlignPosition"></a>

### UI.getBestAlignPosition(element, target, valign, halign, policy, type) ⇒ <code>Object</code>
Look-up for the best alignment position for the given element against the
given target, vertical and horizontal alignment and attachment policy.

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: <code>Object</code> - the start and ending position according to the current
        visibility of the given element  

| Param | Type | Description |
| --- | --- | --- |
| element | [<code>jQuery</code>](#jQuery) | the element we want to align against a given target |
| target | [<code>jQuery</code>](#jQuery) | the target element we are bound to |
| valign | <code>String</code> | the vertical alignment |
| halign | <code>String</code> | the horizontal alignment |
| policy | <code>String</code> | the attachment policy |
| type | <code>String</code> | flag that indicate if the returned position should be            fixed, absolute or relative. Default is "relative" |

<a name="UI.toPixel"></a>

### UI.toPixel(value) ⇒ <code>Number</code>
Convert the given String value to a number in pixels

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: <code>Number</code> - the given value as a Number converted to pixels  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string being converted |

<a name="URLs"></a>

## URLs
**Kind**: global class  


<ul class="import">
<li>import orion.utils.Strings;</li>
</ul>  

* [URLs](#URLs)
    * [new URLs()](#new_URLs_new)
    * [.toQueryString(params)](#URLs.toQueryString) ⇒ <code>String</code>
    * [.getQueryString(query, ignore)](#URLs.getQueryString) ⇒
    * [.fromQueryString(query, ignore)](#URLs.fromQueryString) ⇒

<a name="new_URLs_new"></a>

### new URLs()
URL utility class

<a name="URLs.toQueryString"></a>

### URLs.toQueryString(params) ⇒ <code>String</code>
Transform the given hash object into a valid URL query string

**Kind**: static method of [<code>URLs</code>](#URLs)  
**Returns**: <code>String</code> - valid query String for a URL  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | parameters to be converted |

<a name="URLs.getQueryString"></a>

### URLs.getQueryString(query, ignore) ⇒
Parse the given query string into a JavaScript hash object holding the query
string key -> value.

**Kind**: static method of [<code>URLs</code>](#URLs)  
**Returns**: hash object containing the query string values  

| Param | Description |
| --- | --- |
| query | the HTTP URL/query string |
| ignore | indicates if we should ignore the query string question mark and            simply replace the variables in it. Pass true if you are sure            you're only providing the query string and not the complete url |

<a name="URLs.fromQueryString"></a>

### URLs.fromQueryString(query, ignore) ⇒
Parse the given query string into a JavaScript hash object holding the query
string key -> value.

**Kind**: static method of [<code>URLs</code>](#URLs)  
**Returns**: hash object containing the query string values  

| Param | Description |
| --- | --- |
| query | the HTTP URL/query string |
| ignore | indicates if we should ignore the query string question mark and            simply replace the variables in it. Pass true if you are sure            you're only providing the query string and not the complete url |

<a name="Arrays"></a>

## Arrays ⇒
Create a copy of the given array copying from the given start and end index.
This means that calling this method with the given arguments:
<code>subArray([0, 1, 2, 3, 4, 5], 2, 4)</code> you will end-up with the
given result: <code>[2,3]</code>.

**Kind**: global variable  
**Returns**: sub-array containing the given range  

| Param | Description |
| --- | --- |
| array | the array being copied |
| start | the starting index |
| end | the end index (if not given, assumes the array's length). |


* [Arrays](#Arrays) ⇒
    * [new Arrays()](#new_Arrays_new)
    * [.EMPTY](#Arrays.EMPTY)
    * [.copy(array)](#Arrays.copy) ⇒ <code>Array</code>
    * [.range(from, to, callback)](#Arrays.range) ⇒ <code>Array</code>
    * [.toArray(value)](#Arrays.toArray) ⇒
    * [.contains(array, value, caseSensitive)](#Arrays.contains) ⇒ <code>Boolean</code>
    * [.containsAll(list, items, caseSensitive)](#Arrays.containsAll)
    * [.unique(array, field)](#Arrays.unique) ⇒ <code>Array</code>
    * [.last(the)](#Arrays.last) ⇒ <code>Object</code>
    * [.remove(array, value)](#Arrays.remove)
    * [.removeAt(array, index)](#Arrays.removeAt)
    * [.addAll(array, values)](#Arrays.addAll)
    * [.clear(array)](#Arrays.clear)
    * [.removeAll(array, values)](#Arrays.removeAll)
    * [.addAt(array, item, index)](#Arrays.addAt)
    * [.moveAt(array, from, to)](#Arrays.moveAt)
    * [.moveAll(elements, index)](#Arrays.moveAll) ⇒ <code>Array</code>
    * [.isEmpty(value)](#Arrays.isEmpty) ⇒
    * [.getLength(value)](#Arrays.getLength) ⇒ <code>Number</code>
    * [.isLast(array, value)](#Arrays.isLast) ⇒ <code>Boolean</code>
    * [.toMultiValueObject(items)](#Arrays.toMultiValueObject) ⇒
    * [.toPropertyArray(array, property)](#Arrays.toPropertyArray) ⇒
    * [.sort(array, sorts, parser)](#Arrays.sort) ⇒ <code>Array</code>
    * [.sum(arguments)](#Arrays.sum) ⇒ <code>Array</code>
    * [.substract(arguments)](#Arrays.substract) ⇒ <code>Array</code>

<a name="new_Arrays_new"></a>

### new Arrays()
Array utility class

<a name="Arrays.EMPTY"></a>

### Arrays.EMPTY
An empty array

**Kind**: static property of [<code>Arrays</code>](#Arrays)  
<a name="Arrays.copy"></a>

### Arrays.copy(array) ⇒ <code>Array</code>
Copy the entire given array into a new one and return it.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - the copied array instance.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array being copied |

<a name="Arrays.range"></a>

### Arrays.range(from, to, callback) ⇒ <code>Array</code>
Create a range between two numbers (including both) and return it as an
array.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - the generated range  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Number</code> | the initial number |
| to | <code>Number</code> | the final number |
| callback | <code>function</code> | function invoked for each item in the range so the            result returned can be formatted instead of simply used as is. |

<a name="Arrays.toArray"></a>

### Arrays.toArray(value) ⇒
Validate the given value against an <code>Array</code> instance. If so,
return as is, otherwise, wrap its content as an array.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: value as an array  

| Param | Description |
| --- | --- |
| value | the value being converted |

<a name="Arrays.contains"></a>

### Arrays.contains(array, value, caseSensitive) ⇒ <code>Boolean</code>
Check rather the given array contains the given value

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Boolean</code> - true if present, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| array |  | the array being verified |
| value |  | the value being checked |
| caseSensitive | <code>Boolean</code> | flag indicating if case-sensitive comparison should be            applied. (Defaults to true) |

<a name="Arrays.containsAll"></a>

### Arrays.containsAll(list, items, caseSensitive)
Check if the given Array contains all the items within second array

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | the list being verified |
| items | <code>Array</code> | the items that should exists within the first list |
| caseSensitive | <code>Boolean</code> | flag indicating if case-sensitive comparison should be            applied. (Defaults to true) |

<a name="Arrays.unique"></a>

### Arrays.unique(array, field) ⇒ <code>Array</code>
Filter the content of the given array into a second array without any
duplicate values.

<p>
When dealing with complex hash types, a field can be provided so that a field
shall be evaluated for uniqueness instead of the value itself.
</p>

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - filtered array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array being filtered/transformed |
| field | <code>String</code> | the field name (may be in E4J format, for more, see            [#orion.utils.E4J](#orion.utils.E4J)) |

<a name="Arrays.last"></a>

### Arrays.last(the) ⇒ <code>Object</code>
Retrieve the last item in this array

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Object</code> - the last item of the given array  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>Array</code> | array we are retrieving the last item from |

<a name="Arrays.remove"></a>

### Arrays.remove(array, value)
Remove the given item from the given array

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Description |
| --- | --- |
| array | the array being manipulated |
| value | the value being removed |

<a name="Arrays.removeAt"></a>

### Arrays.removeAt(array, index)
Remove an item represented by the given <code>index</code>

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Description |
| --- | --- |
| array | the array being manipulated |
| index | the index representing the element being removed |

<a name="Arrays.addAll"></a>

### Arrays.addAll(array, values)
Add all given elements into the given array

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array we are adding to |
| values | <code>Array</code> | the values being added |

<a name="Arrays.clear"></a>

### Arrays.clear(array)
Remove all elements from the given array that are present in the second
array. However, if a second array is not informed, then the first array is
cleared.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array being cleared |

<a name="Arrays.removeAll"></a>

### Arrays.removeAll(array, values)
Remove all elements from the given array that are present in the second
array.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array being |
| values | <code>Array</code> |  |

<a name="Arrays.addAt"></a>

### Arrays.addAt(array, item, index)
Add an item to the given array within the given position

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Description |
| --- | --- |
| array | the array being manipulated |
| item | the item being added |
| index | the position of the item being added |

<a name="Arrays.moveAt"></a>

### Arrays.moveAt(array, from, to)
Move an item from one index position to another index position

**Kind**: static method of [<code>Arrays</code>](#Arrays)  

| Param | Description |
| --- | --- |
| array | the array being manipulated |
| from | the current index position |
| to | the new index position |

<a name="Arrays.moveAll"></a>

### Arrays.moveAll(elements, index) ⇒ <code>Array</code>
Move the given single element to a new position on this collection. *

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - the updated array with the moved items  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array</code> | the elements being moved |
| index | <code>int</code> | the new index for the moved element |

<a name="Arrays.isEmpty"></a>

### Arrays.isEmpty(value) ⇒
Check if the given array is null, undefined or empty.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>true</code> if currently empty, <code>false</code>
        otherwise.  

| Param | Description |
| --- | --- |
| value | the array being checked |

<a name="Arrays.getLength"></a>

### Arrays.getLength(value) ⇒ <code>Number</code>
Safe Array's length retrieval with fall back to 0 if not defined/null.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Number</code> - array's length  

| Param | Description |
| --- | --- |
| value | the array being checked |

<a name="Arrays.isLast"></a>

### Arrays.isLast(array, value) ⇒ <code>Boolean</code>
Compares if the given value is the last item of the given array

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Boolean</code> - true if so, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array used being compared |
| value | <code>Object</code> | the value being compared |

<a name="Arrays.toMultiValueObject"></a>

### Arrays.toMultiValueObject(items) ⇒
Convert the given array of objects into an Object. This object will contain
the same common properties from the objects in the given list. Each value
will contain instead a array from each object of the given list.

<pre>
[ {
	key : 1
}, {
	key : 2
} ]
</pre>

would be converted into:

<pre>
{
	key : [ 1, 2 ]
}
</pre>

This method is useful for converting a list of objects to a compatible
multi-value object used to submit to a remote server via AJAX (similar to
multi-value field forms).

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: object containing all properties as array  

| Param | Description |
| --- | --- |
| items | the list of objects to be converted |

<a name="Arrays.toPropertyArray"></a>

### Arrays.toPropertyArray(array, property) ⇒
Convert an array of hash objects to an array of properties. We extract the
property name from each hash object in the given array returning them as part
of a new array on the same order of the original one.

I.E.:

<pre>
var array = [{name : &quot;John&quot;},{ name : &quot;Mary&quot;
var result = arrayToPropertyArray(array, &quot;name&quot;);

Where result should be: [&quot;John&quot;, &quot;Mary&quot;]
</pre>

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: array of properties from each hash object in the given array  

| Param | Description |
| --- | --- |
| array | of hash objects |
| property | the property name |

<a name="Arrays.sort"></a>

### Arrays.sort(array, sorts, parser) ⇒ <code>Array</code>
Sort the given array by the given property in the given direction.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - sorted array (same instance of the given one)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array we want to sort |
| sorts | <code>Array</code> | the list of hash objects for the sorted fields. Each            object may contain            <code>{ field : "name", order : "asc|desc", valueFunction : ...}</code>            where.            <ul>            <li><b>property - {String or Function}</b>: the property name we            are sorting by. When not defined, use the value directly defined            in the array. You're also allowed to pass a function that accepts            one parameter and returns the value used to sort by. I.E.:            function(a){ return a.state.country.name } enabling you to            navigate through multiple objects.</li>            <li><b>asc - {String}</b> : the order in which sorting should            happen.</li>            <li><b>valueFunction - {Function}</b> : The function used to            extra items being sorted.</li>            </ul> |
| parser | <code>function</code> | function used to parse the extracted value before we            can run the comparison |

<a name="Arrays.sum"></a>

### Arrays.sum(arguments) ⇒ <code>Array</code>
Concatenate all the given arrays into a new single Array. Arguments that are
not arrays are just appended as is.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - array containing all subtracted sub-entries.  

| Param | Description |
| --- | --- |
| arguments | 0...x |

<a name="Arrays.substract"></a>

### Arrays.substract(arguments) ⇒ <code>Array</code>
Subtract all sequence values from the first array passed as an argument and
returned it as a new array.

**Kind**: static method of [<code>Arrays</code>](#Arrays)  
**Returns**: <code>Array</code> - array containing all added sub-entries.  

| Param | Description |
| --- | --- |
| arguments | 0...x |

<a name="Browser"></a>

## Browser ⇒
Plug-in that enable quick access for reading and writing browser cookies.

**Kind**: global variable  
**Returns**: cookie value while reading (undefined while writing)  

| Param | Description |
| --- | --- |
| name | the name of the cookie key used to identify the cookie |
| value | the value being written (only necessary while writing) |
| options | hash object holding options used while writing the given data to            your cookie. You may define the following properties:            <ul>            <li>expires: as date or number holding the time to live applied            to your cookie</li>            <li>path: the path your cookie will be stored with</li>            <li>domain: the domain your cookie will be stored with</li>            <li>secure: boolean telling us if your cookie is secured or not</li>            </ul> |


* [Browser](#Browser) ⇒
    * [new Browser()](#new_Browser_new)
    * [.user](#Browser.user)
    * [.support](#Browser.support)
        * [.touch](#Browser.support.touch)
        * [.mobile](#Browser.support.mobile)
        * [.ipad](#Browser.support.ipad)
        * [.iphone](#Browser.support.iphone)
        * [.ipod](#Browser.support.ipod)
    * [.hash](#Browser.hash) : <code>object</code>
        * [.delay](#Browser.hash.delay)
        * [.enabled](#Browser.hash.enabled)
        * [.get()](#Browser.hash.get) ⇒
        * [.handler()](#Browser.hash.handler)
    * [.openUrl(url, data, method, target, encType, charsetName)](#Browser.openUrl)

<a name="new_Browser_new"></a>

### new Browser()
Browser related components and utilities

<ul class="import">
<li>import orion.utils.Timer;</li>
<li>import org.jQuery;</li>
<li>import orion.reflect.Package;</li>
</ul>

<a name="Browser.user"></a>

### Browser.user
Information about the currently logged user on the application.

<p>
For that, refer to orion.security.User model.
</p>

**Kind**: static property of [<code>Browser</code>](#Browser)  
<a name="Browser.support"></a>

### Browser.support
Browser support

**Kind**: static property of [<code>Browser</code>](#Browser)  

* [.support](#Browser.support)
    * [.touch](#Browser.support.touch)
    * [.mobile](#Browser.support.mobile)
    * [.ipad](#Browser.support.ipad)
    * [.iphone](#Browser.support.iphone)
    * [.ipod](#Browser.support.ipod)

<a name="Browser.support.touch"></a>

#### support.touch
Indicate if the browser supports touch events

**Kind**: static property of [<code>support</code>](#Browser.support)  
<a name="Browser.support.mobile"></a>

#### support.mobile
Indicate if the browser is running on a mobile device

**Kind**: static property of [<code>support</code>](#Browser.support)  
<a name="Browser.support.ipad"></a>

#### support.ipad
Indicate if the browser is running on a iPad device

**Kind**: static property of [<code>support</code>](#Browser.support)  
<a name="Browser.support.iphone"></a>

#### support.iphone
Indicate if the browser is running on a iPhone device

**Kind**: static property of [<code>support</code>](#Browser.support)  
<a name="Browser.support.ipod"></a>

#### support.ipod
Indicate if the browser is running on a iPod device

**Kind**: static property of [<code>support</code>](#Browser.support)  
<a name="Browser.hash"></a>

### Browser.hash : <code>object</code>
Browser history utilities functions.

The default location.hash provides access to the hash URL but this component
gives you the ability to know when the hash URL has changed via event "hash"
dispatched within any jQuery component. It also give you the ability to
update the hash value without dispatching a change event or even
enable/disable the hash URL update for a certain period (during load time for
example while you parse the hash URL and load your internal components to
restore their state).

**Kind**: static namespace of [<code>Browser</code>](#Browser)  


* [.hash](#Browser.hash) : <code>object</code>
    * [.delay](#Browser.hash.delay)
    * [.enabled](#Browser.hash.enabled)
    * [.get()](#Browser.hash.get) ⇒
    * [.handler()](#Browser.hash.handler)

<a name="Browser.hash.delay"></a>

#### hash.delay
The time delay in milliseconds used to verify if the browser's hash URL
has changed

**Kind**: static property of [<code>hash</code>](#Browser.hash)  
<a name="Browser.hash.enabled"></a>

#### hash.enabled
Flag that indicates if hash is currently enabled. By setting this flag to
false, the hash value can't be updated via <code>update()</code>
method.

**Kind**: static property of [<code>hash</code>](#Browser.hash)  
<a name="Browser.hash.get"></a>

#### hash.get() ⇒
Retrieve the hash value from the location.hre. Remove the '#' symbol from
the value if defined.

**Kind**: static method of [<code>hash</code>](#Browser.hash)  
**Returns**: hash value  
<a name="Browser.hash.handler"></a>

#### hash.handler()
Handler invoked when by time to time to verify if the hash variable has
changed. If so, dispatch a hash event

**Kind**: static method of [<code>hash</code>](#Browser.hash)  
<a name="Browser.openUrl"></a>

### Browser.openUrl(url, data, method, target, encType, charsetName)
Open the given URL on the browser passing the given parameter using the given
HTTP method. If a target is not defined, opens a new window otherwise uses
given client to open the URL.

This method simulates a form submit, so the URL is the form action, the data
are the fields the form holds, the target is the submit target window and the
method is the HTTP method (post, get, etc.).

**Kind**: static method of [<code>Browser</code>](#Browser)  

| Param | Type | Description |
| --- | --- | --- |
| url |  | the URL you want the new window to open |
| data |  | the parameters you want to send across |
| method |  | the HTTP method (get or post). Default is "get". |
| target |  | the target you want the |
| encType | <code>String</code> | the form's enctype (as in multipart/form-data String if            pushing multipart documents). Defaults to            <code>application/x-www-form-urlencoded</code> |
| charsetName | <code>String</code> | the charset encoding used. Defaults to browser's encoding |

<a name="GUID"></a>

## GUID ⇒
Generate and return the next ID number

**Kind**: global variable  
**Returns**: next generated GUID  

* [GUID](#GUID) ⇒
    * [new GUID()](#new_GUID_new)
    * [.prefix](#GUID.prefix)
    * [.get(item)](#GUID.get) ⇒

<a name="new_GUID_new"></a>

### new GUID()
GUID helper class

<ul class="import">
<li>import orion.reflect.Package;</li>
</ul>

<a name="GUID.prefix"></a>

### GUID.prefix
Prefix prepended between each generated GUID

**Kind**: static property of [<code>GUID</code>](#GUID)  
<a name="GUID.get"></a>

### GUID.get(item) ⇒
Look up for the GUID of the given item by checking for a property named
<code>GUID</code> declared directly within the given item. If not defined,
a new GUID is assigned and returned.

**Kind**: static method of [<code>GUID</code>](#GUID)  
**Returns**: GUID from the given item  

| Param | Description |
| --- | --- |
| item | the item we want the GUID from |

<a name="Keyboard"></a>

## Keyboard
Verify if the given keyCode points to any of the meta keys including: enter,
tab, backspace and escape.

**Kind**: global variable  

| Param | Description |
| --- | --- |
| keycode | the keyboard key we want to verify |


* [Keyboard](#Keyboard)
    * [.BACKSPACE](#Keyboard.BACKSPACE)
    * [.TAB](#Keyboard.TAB)
    * [.ENTER](#Keyboard.ENTER)
    * [.ESCAPE](#Keyboard.ESCAPE)
    * [.SPACE](#Keyboard.SPACE)
    * [.DELETE](#Keyboard.DELETE)
    * [.PLUS](#Keyboard.PLUS)
    * [.MINUS](#Keyboard.MINUS)
    * [.LEFT_ARROW](#Keyboard.LEFT_ARROW)
    * [.UP_ARROW](#Keyboard.UP_ARROW)
    * [.RIGHT_ARROW](#Keyboard.RIGHT_ARROW)
    * [.DOWN_ARROW](#Keyboard.DOWN_ARROW)
    * [.PAGE_DOWN](#Keyboard.PAGE_DOWN)
    * [.PAGE_UP](#Keyboard.PAGE_UP)
    * [.COMMA](#Keyboard.COMMA)
    * [.is(keyCode, arguments)](#Keyboard.is) ⇒ <code>Boolean</code>

<a name="Keyboard.BACKSPACE"></a>

### Keyboard.BACKSPACE
Code that represents the keyboard Backspace key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.TAB"></a>

### Keyboard.TAB
Code that represents the keyboard Tab key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.ENTER"></a>

### Keyboard.ENTER
Code that represents the keyboard Enter key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.ESCAPE"></a>

### Keyboard.ESCAPE
Code that represents the keyboard Escape key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.SPACE"></a>

### Keyboard.SPACE
Code that represents the keyboard Space key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.DELETE"></a>

### Keyboard.DELETE
Code that represents the keyboard delete key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PLUS"></a>

### Keyboard.PLUS
Code that represents the keyboard plus key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.MINUS"></a>

### Keyboard.MINUS
Code that represents the keyboard minus key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.LEFT_ARROW"></a>

### Keyboard.LEFT_ARROW
Code that represents the keyboard Left Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.UP_ARROW"></a>

### Keyboard.UP_ARROW
Code that represents the keyboard Up Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.RIGHT_ARROW"></a>

### Keyboard.RIGHT_ARROW
Code that represents the keyboard Right Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.DOWN_ARROW"></a>

### Keyboard.DOWN_ARROW
Code that represents the keyboard Down Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PAGE_DOWN"></a>

### Keyboard.PAGE_DOWN
Code that represents the keyboard Page Down key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PAGE_UP"></a>

### Keyboard.PAGE_UP
Code that represents the keyboard Page Up key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.COMMA"></a>

### Keyboard.COMMA
Code that represents the keyboard Comma key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.is"></a>

### Keyboard.is(keyCode, arguments) ⇒ <code>Boolean</code>
Check rather the given keyboard code match any of the following declared
keys.

**Kind**: static method of [<code>Keyboard</code>](#Keyboard)  
**Returns**: <code>Boolean</code> - true if any of the given keys, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| keyCode | <code>int</code> | the keyCode being tested |
| arguments |  | (1..n) being any of the sequenced arguments passed on this method |

<a name="Keyboard"></a>

## Keyboard
Verify if the given keyCode points to any of the arrow keyboard keys

**Kind**: global variable  

| Param | Description |
| --- | --- |
| keycode | the keyboard key we want to verify |


* [Keyboard](#Keyboard)
    * [.BACKSPACE](#Keyboard.BACKSPACE)
    * [.TAB](#Keyboard.TAB)
    * [.ENTER](#Keyboard.ENTER)
    * [.ESCAPE](#Keyboard.ESCAPE)
    * [.SPACE](#Keyboard.SPACE)
    * [.DELETE](#Keyboard.DELETE)
    * [.PLUS](#Keyboard.PLUS)
    * [.MINUS](#Keyboard.MINUS)
    * [.LEFT_ARROW](#Keyboard.LEFT_ARROW)
    * [.UP_ARROW](#Keyboard.UP_ARROW)
    * [.RIGHT_ARROW](#Keyboard.RIGHT_ARROW)
    * [.DOWN_ARROW](#Keyboard.DOWN_ARROW)
    * [.PAGE_DOWN](#Keyboard.PAGE_DOWN)
    * [.PAGE_UP](#Keyboard.PAGE_UP)
    * [.COMMA](#Keyboard.COMMA)
    * [.is(keyCode, arguments)](#Keyboard.is) ⇒ <code>Boolean</code>

<a name="Keyboard.BACKSPACE"></a>

### Keyboard.BACKSPACE
Code that represents the keyboard Backspace key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.TAB"></a>

### Keyboard.TAB
Code that represents the keyboard Tab key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.ENTER"></a>

### Keyboard.ENTER
Code that represents the keyboard Enter key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.ESCAPE"></a>

### Keyboard.ESCAPE
Code that represents the keyboard Escape key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.SPACE"></a>

### Keyboard.SPACE
Code that represents the keyboard Space key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.DELETE"></a>

### Keyboard.DELETE
Code that represents the keyboard delete key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PLUS"></a>

### Keyboard.PLUS
Code that represents the keyboard plus key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.MINUS"></a>

### Keyboard.MINUS
Code that represents the keyboard minus key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.LEFT_ARROW"></a>

### Keyboard.LEFT_ARROW
Code that represents the keyboard Left Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.UP_ARROW"></a>

### Keyboard.UP_ARROW
Code that represents the keyboard Up Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.RIGHT_ARROW"></a>

### Keyboard.RIGHT_ARROW
Code that represents the keyboard Right Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.DOWN_ARROW"></a>

### Keyboard.DOWN_ARROW
Code that represents the keyboard Down Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PAGE_DOWN"></a>

### Keyboard.PAGE_DOWN
Code that represents the keyboard Page Down key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PAGE_UP"></a>

### Keyboard.PAGE_UP
Code that represents the keyboard Page Up key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.COMMA"></a>

### Keyboard.COMMA
Code that represents the keyboard Comma key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.is"></a>

### Keyboard.is(keyCode, arguments) ⇒ <code>Boolean</code>
Check rather the given keyboard code match any of the following declared
keys.

**Kind**: static method of [<code>Keyboard</code>](#Keyboard)  
**Returns**: <code>Boolean</code> - true if any of the given keys, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| keyCode | <code>int</code> | the keyCode being tested |
| arguments |  | (1..n) being any of the sequenced arguments passed on this method |

<a name="Keyboard"></a>

## Keyboard ⇒
Check if the given Keyboard's code represents a digit (number) from 0 to 9.

**Kind**: global variable  
**Returns**: true if a digit, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| keyCode | <code>int</code> | the keyboard's key code |


* [Keyboard](#Keyboard) ⇒
    * [.BACKSPACE](#Keyboard.BACKSPACE)
    * [.TAB](#Keyboard.TAB)
    * [.ENTER](#Keyboard.ENTER)
    * [.ESCAPE](#Keyboard.ESCAPE)
    * [.SPACE](#Keyboard.SPACE)
    * [.DELETE](#Keyboard.DELETE)
    * [.PLUS](#Keyboard.PLUS)
    * [.MINUS](#Keyboard.MINUS)
    * [.LEFT_ARROW](#Keyboard.LEFT_ARROW)
    * [.UP_ARROW](#Keyboard.UP_ARROW)
    * [.RIGHT_ARROW](#Keyboard.RIGHT_ARROW)
    * [.DOWN_ARROW](#Keyboard.DOWN_ARROW)
    * [.PAGE_DOWN](#Keyboard.PAGE_DOWN)
    * [.PAGE_UP](#Keyboard.PAGE_UP)
    * [.COMMA](#Keyboard.COMMA)
    * [.is(keyCode, arguments)](#Keyboard.is) ⇒ <code>Boolean</code>

<a name="Keyboard.BACKSPACE"></a>

### Keyboard.BACKSPACE
Code that represents the keyboard Backspace key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.TAB"></a>

### Keyboard.TAB
Code that represents the keyboard Tab key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.ENTER"></a>

### Keyboard.ENTER
Code that represents the keyboard Enter key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.ESCAPE"></a>

### Keyboard.ESCAPE
Code that represents the keyboard Escape key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.SPACE"></a>

### Keyboard.SPACE
Code that represents the keyboard Space key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.DELETE"></a>

### Keyboard.DELETE
Code that represents the keyboard delete key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PLUS"></a>

### Keyboard.PLUS
Code that represents the keyboard plus key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.MINUS"></a>

### Keyboard.MINUS
Code that represents the keyboard minus key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.LEFT_ARROW"></a>

### Keyboard.LEFT_ARROW
Code that represents the keyboard Left Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.UP_ARROW"></a>

### Keyboard.UP_ARROW
Code that represents the keyboard Up Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.RIGHT_ARROW"></a>

### Keyboard.RIGHT_ARROW
Code that represents the keyboard Right Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.DOWN_ARROW"></a>

### Keyboard.DOWN_ARROW
Code that represents the keyboard Down Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PAGE_DOWN"></a>

### Keyboard.PAGE_DOWN
Code that represents the keyboard Page Down key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PAGE_UP"></a>

### Keyboard.PAGE_UP
Code that represents the keyboard Page Up key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.COMMA"></a>

### Keyboard.COMMA
Code that represents the keyboard Comma key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.is"></a>

### Keyboard.is(keyCode, arguments) ⇒ <code>Boolean</code>
Check rather the given keyboard code match any of the following declared
keys.

**Kind**: static method of [<code>Keyboard</code>](#Keyboard)  
**Returns**: <code>Boolean</code> - true if any of the given keys, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| keyCode | <code>int</code> | the keyCode being tested |
| arguments |  | (1..n) being any of the sequenced arguments passed on this method |

<a name="LocalStorage"></a>

## LocalStorage ⇒ <code>Any</code>
Look-up for for the content stored under the given property name

**Kind**: global variable  
**Returns**: <code>Any</code> - the data stored under the given property name  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>String</code> | name of the property we want |


* [LocalStorage](#LocalStorage) ⇒ <code>Any</code>
    * [new LocalStorage()](#new_LocalStorage_new)
    * [.linkToUser](#LocalStorage.linkToUser) : <code>Boolean</code>
    * [.set(name, value)](#LocalStorage.set)
    * [.contains()](#LocalStorage.contains) ⇒ <code>Boolean</code>
    * [.remove(the)](#LocalStorage.remove)
    * [.getType()](#LocalStorage.getType) ⇒ <code>String</code>
    * [.setType(type)](#LocalStorage.setType)
    * [.isCookie()](#LocalStorage.isCookie) ⇒ <code>Boolean</code>

<a name="new_LocalStorage_new"></a>

### new LocalStorage()
API that wrappers <code>localStorage</code> falling back to regular browser
cookies when the same is not available.

<p>
Another important aspect of this API is that it allows you to storage
full-complex Javascript Object instances (including arrays, numbers, etc). In
other words, JSON-based data.
</p>

<ul class="import">
<li>import orion.utils.Browser;</li>
<li>import orion.utils.Objects;</li>
</ul>

<a name="LocalStorage.linkToUser"></a>

### LocalStorage.linkToUser : <code>Boolean</code>
Flag that indicates if stored data should be automatically linked to logged
user, whenever possible.

**Kind**: static property of [<code>LocalStorage</code>](#LocalStorage)  
**Default**: <code>true</code>  
<a name="LocalStorage.set"></a>

### LocalStorage.set(name, value)
Set/update the given value under the given name. The same can now be
retrieved via [LocalStorage#get()](LocalStorage#get())

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | the name of the property |
| value | <code>Any</code> | the data to be stored |

<a name="LocalStorage.contains"></a>

### LocalStorage.contains() ⇒ <code>Boolean</code>
Verify if the local storage has a property of the given name

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  
**Returns**: <code>Boolean</code> - true if exists, false otherwise  
<a name="LocalStorage.remove"></a>

### LocalStorage.remove(the)
Discard the content of stored under the given property name

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>String</code> | name of the property being discarded |

<a name="LocalStorage.getType"></a>

### LocalStorage.getType() ⇒ <code>String</code>
Look up for the storage type currently being used.

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  
**Returns**: <code>String</code> - either "local" if using <code>localStorage</code> or
        <code>cookie</code> if localStorage is not available.  
<a name="LocalStorage.setType"></a>

### LocalStorage.setType(type)
Alter the storage type utilizing from now-on the given storage type
discarding the previous storage being used.

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | the new storage type to be used |

<a name="LocalStorage.isCookie"></a>

### LocalStorage.isCookie() ⇒ <code>Boolean</code>
Verify if currently using a local storage type

**Kind**: static method of [<code>LocalStorage</code>](#LocalStorage)  
**Returns**: <code>Boolean</code> - true if currently using cookies a local storage, false
        otherwise  
<a name="Numbers"></a>

## Numbers ⇒
Generate a random number between two given numbers

**Kind**: global variable  
**Returns**: random between both  

| Param | Description |
| --- | --- |
| from | the smaller number |
| to | the largest number |


* [Numbers](#Numbers) ⇒
    * [new Numbers()](#new_Numbers_new)
    * [.ceilDecimal(value)](#Numbers.ceilDecimal) ⇒ <code>Number</code>
    * [.is(value)](#Numbers.is) ⇒ <code>Boolean</code>

<a name="new_Numbers_new"></a>

### new Numbers()
Static class used as a place-holder for <code>Number</code> based utility
methods.

<ul class="import">
<li>import orion.reflect.Package;</li>
</ul>

<a name="Numbers.ceilDecimal"></a>

### Numbers.ceilDecimal(value) ⇒ <code>Number</code>
Round up the given decimal value from 1 decimal after comma.

**Kind**: static method of [<code>Numbers</code>](#Numbers)  
**Returns**: <code>Number</code> - number rounded up  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | the number being rounded up |

<a name="Numbers.is"></a>

### Numbers.is(value) ⇒ <code>Boolean</code>
Check if the given String value is a Number value or not

**Kind**: static method of [<code>Numbers</code>](#Numbers)  
**Returns**: <code>Boolean</code> - true if a number, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the String value being tested |

<a name="Objects"></a>

## Objects ⇒
Perform a deep clone of the given Object, be it a single-value based type
such as String, Number, int, Date or be it a complex Hash object or Array or
even mixed returning a completely independent object as a result.

<p>
For simple Hash object copy, use #extend(target, source...) instead.
</p>

**Kind**: global variable  
**Returns**: deep cloned object completely independent from its source  

| Param | Description |
| --- | --- |
| object | the object being cloned |


* [Objects](#Objects) ⇒
    * [new Objects()](#new_Objects_new)
    * [.flatten](#Objects.flatten) ⇒ <code>Object</code>
    * [.parse](#Objects.parse) ⇒ <code>Object</code>
    * [.copy(data)](#Objects.copy) ⇒
    * [.isEmpty(object)](#Objects.isEmpty) ⇒ <code>Boolean</code>
    * [.clean(data)](#Objects.clean)
    * [.extend(deep, skipInvalid, deepArray, target, arguments)](#Objects.extend) ⇒
    * [.extendIf(target, source, deep, filter, skipInvalid, deepArray)](#Objects.extendIf) ⇒
    * [.extendIfNot(target, source, deep, filter)](#Objects.extendIfNot) ⇒ <code>Object</code>
    * [.toggle(value, opt1, opt2)](#Objects.toggle) ⇒
    * [.each(object, callback, scope)](#Objects.each)
    * [.toArray(object)](#Objects.toArray) ⇒
    * [.get(object, name)](#Objects.get) ⇒ <code>Object</code>
    * [.getNames(object)](#Objects.getNames) ⇒ <code>Array</code>
    * [.getLength(object)](#Objects.getLength) ⇒ <code>Number</code>
    * [.isDefined(object)](#Objects.isDefined) ⇒ <code>Boolean</code>
    * [.isValid(object)](#Objects.isValid) ⇒
    * [.equal(a, b, caseSensitive)](#Objects.equal) ⇒ <code>Boolean</code>
    * [.notEqual(a, b, caseSensitive)](#Objects.notEqual) ⇒ <code>Boolean</code>
    * [.match(source, target)](#Objects.match) ⇒ <code>Boolean</code>
    * [.compare(a, b)](#Objects.compare) ⇒
    * [.diff()](#Objects.diff) ⇒
    * [.propertyNames(hash)](#Objects.propertyNames) ⇒
    * [.sum(arguments)](#Objects.sum) ⇒ <code>Object</code>
    * [.subtract(arguments)](#Objects.subtract) ⇒ <code>Object</code>

<a name="new_Objects_new"></a>

### new Objects()
Static class used as a place-holder for <code>Object</code> based utility
methods.

<ul class="import">
<li>import orion.reflect.Reflection;</li>
<li>import orion.utils.Numbers;</li>
<li>import com.orion.language.Number;</li>
</ul>

<a name="Objects.flatten"></a>

### Objects.flatten ⇒ <code>Object</code>
Flatten the given object properties encoding them in n-level into a
single-level object where all property paths are separated by a dot (.).

**Kind**: static property of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - flattened object  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object to be flattened |

<a name="Objects.parse"></a>

### Objects.parse ⇒ <code>Object</code>
Parse the given plain String value to its corresponding type in Javascript
according to the following table of rules:

<ul>
<li><b>"true"</b> => true</li>
<li><b>"false"</b> => false</li>
<li><b>"1"</b> => 1. This is valid for any numeral (even negative)</li>
<li><b>"null"</b> => null</li>
<li><b>"undefined"</b> => undefined</li>
<li><b>"{\"name\" : \"..\"}"</b> => { name : "..." }. This is for any valid
JSON expression (even arrays)</li>
</ul>

**Kind**: static property of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - parsed String  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string being parsed or the String itself if it is            just a plain old String |

<a name="Objects.copy"></a>

### Objects.copy(data) ⇒
Copy all properties of the given object to a new object

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: copied object  

| Param | Description |
| --- | --- |
| data | the object to be copied |

<a name="Objects.isEmpty"></a>

### Objects.isEmpty(object) ⇒ <code>Boolean</code>
Check rather the given object contains at least one property

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Boolean</code> - <code>true</code> if no properties are defined in the
        given object, <code>false</code> otherwise  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object being mapped |

<a name="Objects.clean"></a>

### Objects.clean(data)
Remove all blank, null or NaN properties from the given object

**Kind**: static method of [<code>Objects</code>](#Objects)  

| Param | Description |
| --- | --- |
| data | the object to be cleaned |

<a name="Objects.extend"></a>

### Objects.extend(deep, skipInvalid, deepArray, target, arguments) ⇒
Low-level API for copying all properties defined within the given hash
objects into the given target hash object.

<p>
The target object will receive the properties from each defined hash argument
given in its sequential order. This means that if 2 objects are given, and
they both contain the same property with different value, only the last
object's property will be kept overriding all previously extended ones.
</p>

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: target with extended properties  

| Param | Type | Description |
| --- | --- | --- |
| deep | <code>Boolean</code> | If true, the merge becomes recursive (AKA. deep copy). |
| skipInvalid | <code>Boolean</code> | Flag that indicates if we should skip undefined/invalid            properties. Default is <code>true</code> |
| deepArray | <code>Boolean</code> | deep copy array items as well. Default is            <code>true</code> |
| target |  | the object receiving the copied properties |
| arguments |  | (1..x) arguments as hash objects where all properties shall be            copied to. |

<a name="Objects.extendIf"></a>

### Objects.extendIf(target, source, deep, filter, skipInvalid, deepArray) ⇒
Low-level API for copying all properties defined within the given hash
objects into the given target hash object.

<p>
An additional filter is applied via a callback function that will determine
if a field should be copied or not.
</p>

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: target with extended properties  

| Param | Type | Description |
| --- | --- | --- |
| target |  | the object receiving the copied properties |
| source |  | the object being copied over the given target hash |
| deep |  | If true, the merge becomes recursive (AKA. deep copy). |
| filter |  | callback function using the signature            <code>function(name, target, source)</code> that must return a            boolean to signal if the property should be copied or not. If not            defined, all properties are copied. |
| skipInvalid |  | Flag that indicates if we should skip undefined/invalid            properties. Default is <code>true</code> |
| deepArray | <code>Boolean</code> | deep copy array items as well. Default is            <code>true</code> |

<a name="Objects.extendIfNot"></a>

### Objects.extendIfNot(target, source, deep, filter) ⇒ <code>Object</code>
Similar to Objects.extend() but only works with a single source hash and only
copy properties that are not yet defined.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - target  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | the target object where properties are copied to |
| source | <code>Object</code> | the source object being copied |
| deep | <code>Boolean</code> | If true, the merge becomes recursive (AKA. deep copy). |
| filter |  | callback function using the signature            <code>function(name, target, source)</code> that must return a            boolean to signal if the property should be copied or not. If not            defined, all properties are copied. |

<a name="Objects.toggle"></a>

### Objects.toggle(value, opt1, opt2) ⇒
Toggle the given value returning option 1 if currently defined as option 2
and vice versa.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: opt1 or opt2 according to the above described rules.  

| Param | Description |
| --- | --- |
| value | the base value for comparison |
| opt1 | the option one returned if given value is equal opt2 or null. |
| opt2 | the option two returned if given value is equal opt1. |

<a name="Objects.each"></a>

### Objects.each(object, callback, scope)
Enables object/array navigation by visiting members of the given object using
a callback function as a way of looping through properties defined in a Hash
Object or elements of an Array.

**Kind**: static method of [<code>Objects</code>](#Objects)  

| Param | Description |
| --- | --- |
| object | the object being looped. |
| callback | function called for every encountered member of the given            object/array. The callback uses the signature            <code>(name, value)</code> for visited properties of a hash            object and <code>(index, value)</code> for array elements. |
| scope | the scope used while calling the callback function. If not            provided, the object being visited is used instead. |

<a name="Objects.toArray"></a>

### Objects.toArray(object) ⇒
Translate the given object into an array. If already an array, just return as
is. If a <code>Object</code> return the values defined in the given object
as an array. Anything else is wrapped into an array instance.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: values in the given object as an array.  

| Param | Description |
| --- | --- |
| object | the object object to be converted |

<a name="Objects.get"></a>

### Objects.get(object, name) ⇒ <code>Object</code>
Look-up for a single property value within the given object

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - the property's value  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object we want the property from |
| name | <code>String</code> | the property name being looked-up |

<a name="Objects.getNames"></a>

### Objects.getNames(object) ⇒ <code>Array</code>
Look-up for all the defined property names under the given object and return
it as an array.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Array</code> - array of property names  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object we want the property names from |

<a name="Objects.getLength"></a>

### Objects.getLength(object) ⇒ <code>Number</code>
Return the number of properties defined by the given Object.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Number</code> - the number of properties under this object  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object being scanned |

<a name="Objects.isDefined"></a>

### Objects.isDefined(object) ⇒ <code>Boolean</code>
Check if the given object is a defined value by comparing against
<code>null</code> and <code>undefined</code> returning <code>true</code>
when neither or <code>false</code> otherwise.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Boolean</code> - true if neither null or undefined, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object being validated |

<a name="Objects.isValid"></a>

### Objects.isValid(object) ⇒
Simply check if the given object is a valid object value. Primitive types
auto-evaluate to false when matching their default values.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: true if a valid value, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object being evaluated. |

<a name="Objects.equal"></a>

### Objects.equal(a, b, caseSensitive) ⇒ <code>Boolean</code>
Perform a deep comparison checking if the given two objects match completely.
Does not imply that both need to hold the same memory reference/instance.

<p>
Compare arrays to match the exact same order. Hash objects need to contain
the same properties and other values to match on type/value (simple
comparison using <code>==</code>).
</p>

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Boolean</code> - true if both values are equal, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Object</code> | the first value to be compared |
| b | <code>Object</code> | the second value to be compared |
| caseSensitive | <code>Boolean</code> | flag that indicates if the comparison if case sensitive |

<a name="Objects.notEqual"></a>

### Objects.notEqual(a, b, caseSensitive) ⇒ <code>Boolean</code>
Deep compare two objects returning the inverse result of
[Objects#equal()](Objects#equal()).

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Boolean</code> - true if both values are different, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Object</code> | the first value to be compared |
| b | <code>Object</code> | the second value to be compared |
| caseSensitive | <code>Boolean</code> | flag that indicates if the comparison if case sensitive |

<a name="Objects.match"></a>

### Objects.match(source, target) ⇒ <code>Boolean</code>
Check if the given source contains all the properties (with the same value)
defined in the given target object. If at least one property does not match,
returns false.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Boolean</code> - true if source has all properties of target with the same
        value, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Object</code> | the source object that should contain all target            properties |
| target | <code>Object</code> | the target object holding the properties compared against            source |

<a name="Objects.compare"></a>

### Objects.compare(a, b) ⇒
Compare the two given parameters to each other.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: 1 if a > b, 0 if equal or -1 if a < b  

| Param | Description |
| --- | --- |
| a | the first value in the comparison |
| b | the second value in the comparison |

<a name="Objects.diff"></a>

### Objects.diff() ⇒
Compare each property of the first object to the the property of the second
object. The result is an array of objects holding properties name for field
name, oldValue holding the value from the first parameter and newValue for
the second parameter. Only changed properties are included.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: array with object comparison of changed properties  
<a name="Objects.propertyNames"></a>

### Objects.propertyNames(hash) ⇒
Retrieve an array of property names stored within the given hash object. Each
element of the array represents a property name of the given hash object.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: array of property names stored in the given hash  

| Param | Description |
| --- | --- |
| hash | the hash we want the property names from |

<a name="Objects.sum"></a>

### Objects.sum(arguments) ⇒ <code>Object</code>
Concatenate all the given objects into a new single Object. Arguments that
are not objects are just appended as is.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - object containing all added sub-entries.  

| Param | Description |
| --- | --- |
| arguments | 0...x |

<a name="Objects.subtract"></a>

### Objects.subtract(arguments) ⇒ <code>Object</code>
Subtract all properties within all given objects from the first object passed
as an argument and returned it as a new object.

**Kind**: static method of [<code>Objects</code>](#Objects)  
**Returns**: <code>Object</code> - object containing subtracted properties.  

| Param | Description |
| --- | --- |
| arguments | 0...x |

<a name="Strings"></a>

## Strings ⇒ <code>String</code>
Capitalize the first character of the given String

**Kind**: global variable  
**Returns**: <code>String</code> - capitalized String  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the String value being capitalized |


* [Strings](#Strings) ⇒ <code>String</code>
    * [new Strings()](#new_Strings_new)
    * [.LINE_SEPARATOR](#Strings.LINE_SEPARATOR)
    * [.TRIM_LEFT](#Strings.TRIM_LEFT)
    * [.TRIM_RIGHT](#Strings.TRIM_RIGHT)
    * [.format(value, parameters)](#Strings.format) ⇒ <code>String</code>
    * [.startsWith(string, prefix, caseSensitive)](#Strings.startsWith) ⇒
    * [.endsWith(string, value, caseSensitive)](#Strings.endsWith) ⇒ <code>Boolean</code>
    * [.contains(string, prefix, caseSensitive)](#Strings.contains) ⇒ <code>Boolean</code>
    * [.replaceAll(string, oldValue, newValue, regex)](#Strings.replaceAll) ⇒
    * [.replace(string, key, value, index)](#Strings.replace) ⇒ <code>String</code>
    * [.trim(string)](#Strings.trim) ⇒ <code>String</code>
    * [.camelCaseByToken()](#Strings.camelCaseByToken) ⇒
    * [.substringAfter(str, delimiter)](#Strings.substringAfter) ⇒ <code>String</code>
    * [.substringBefore(str, delimiter)](#Strings.substringBefore) ⇒ <code>String</code>
    * [.trimLeft(string)](#Strings.trimLeft) ⇒
    * [.trimRight(string)](#Strings.trimRight) ⇒ <code>String</code>
    * [.padLeft(str, size, padChar)](#Strings.padLeft) ⇒ <code>String</code>
    * [.padRight(str, size, padChar)](#Strings.padRight) ⇒ <code>String</code>
    * [.truncate(value, length)](#Strings.truncate) ⇒ <code>String</code>
    * [.getLabel(string)](#Strings.getLabel) ⇒ <code>String</code>
    * [.getClosestWord(string, cursor)](#Strings.getClosestWord) ⇒ <code>Object</code>
    * [.tokenizeByCamelCase(string, token)](#Strings.tokenizeByCamelCase) ⇒ <code>String</code>
    * [.slugfy(the)](#Strings.slugfy) ⇒ <code>String</code>
    * [.tagfy(value)](#Strings.tagfy) ⇒ <code>Array</code>

<a name="new_Strings_new"></a>

### new Strings()
String utility class

<a name="Strings.LINE_SEPARATOR"></a>

### Strings.LINE_SEPARATOR
The default character used to separate lines (line-break);

**Kind**: static property of [<code>Strings</code>](#Strings)  
<a name="Strings.TRIM_LEFT"></a>

### Strings.TRIM_LEFT
RegExp expression used to trim the left side of a String

**Kind**: static property of [<code>Strings</code>](#Strings)  
**See**: Strings#trimLeft()  
<a name="Strings.TRIM_RIGHT"></a>

### Strings.TRIM_RIGHT
RegExp expression used to trim right left side of a String

**Kind**: static property of [<code>Strings</code>](#Strings)  
**See**: Strings#trimRight()  
<a name="Strings.format"></a>

### Strings.format(value, parameters) ⇒ <code>String</code>
Format the given String injecting the indexed parameters based on the
arguments of the given parameters array.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - formatted string;  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string being formatted |
| parameters | <code>String</code> | the parameters to be injected |

<a name="Strings.startsWith"></a>

### Strings.startsWith(string, prefix, caseSensitive) ⇒
Check rather the given String value starts with the given prefix value
returning <code>true</code> if so, or <code>false</code> otherwise

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>true</code> if the given String value has the same initial
        prefix, or <code>false</code> otherwise  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being evaluated |
| prefix | <code>String</code> | the prefix String value checked against the given String |
| caseSensitive | <code>Boolean</code> | flag that indicates if we should perform comparison            using case sensitive |

<a name="Strings.endsWith"></a>

### Strings.endsWith(string, value, caseSensitive) ⇒ <code>Boolean</code>
Verify if the given string ends with the given value

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Boolean</code> - true if the given string ends with the given value, false
        otherwise  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string we are verifying |
| value | <code>String</code> | the value used while comparing |
| caseSensitive |  | flag that indicates if we should perform comparison using case            sensitive |

<a name="Strings.contains"></a>

### Strings.contains(string, prefix, caseSensitive) ⇒ <code>Boolean</code>
Check rather the given String value contains the given prefix value returning
<code>true</code> if so, or <code>false</code> otherwise

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Boolean</code> - <code>true</code> if the given String value contains the
        given prefix, or <code>false</code> otherwise  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being evaluated |
| prefix | <code>String</code> | the prefix String value checked against the given String |
| caseSensitive | <code>Boolean</code> | flag that indicates if we should perform comparison            using case sensitive |

<a name="Strings.replaceAll"></a>

### Strings.replaceAll(string, oldValue, newValue, regex) ⇒
Replace within the given String value, all occurrences of the existing value
with the given new String value.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: formatted value containing the replaced values  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being parsed |
| oldValue | <code>String</code> | the existing value to be replaced |
| newValue | <code>String</code> | the new value to be replaced |
| regex | <code>Boolean</code> | flag that indicates if we should use regex 'g' to            replace all or not. If you're replacing characters that may            conflict with regex, you might not want to use this as true.            Defaults to false |

<a name="Strings.replace"></a>

### Strings.replace(string, key, value, index) ⇒ <code>String</code>
Method similar to String.replace() used to replace a certain string
value/regex expression within a given string.

<p>
It adds the ability to start replacing from a given starting index (in which
is used to substring before we can do the replace).
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - replaced/merged string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the main string template |
| key | <code>String</code> | the key we want to replace |
| value | <code>String</code> | the replacing the given key |
| index | <code>int</code> | the starting index in the given string where we want to            start replacing from (not required) |

<a name="Strings.trim"></a>

### Strings.trim(string) ⇒ <code>String</code>
Trim both left and right sides of the given string removing trailing and
white space characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - trimmed string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being processed |

<a name="Strings.camelCaseByToken"></a>

### Strings.camelCaseByToken() ⇒
Camel-case the given String value on every occurrence of the given token;

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: camel-cased String by a given tokentoken the token being used as a separatorthe given String camel-cased  
<a name="Strings.substringAfter"></a>

### Strings.substringAfter(str, delimiter) ⇒ <code>String</code>
<p>
Gets the substring after the first occurrence of a delimiter. The delimiter
is not returned.
</p>

<p>
A <code>null</code> string input will return <code>null</code>. An empty
("") string input will return the empty string. A <code>null</code>
delimiter will return the empty string if the input string is not
<code>null</code>.
</p>

<p>
If nothing is found, the empty string is returned.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - the substring after the first occurrence of the delimiter,
        null if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to get a substring from, may be null |
| delimiter | <code>String</code> | the String to search for, may be null |

<a name="Strings.substringBefore"></a>

### Strings.substringBefore(str, delimiter) ⇒ <code>String</code>
<p>
Gets the substring before the first occurrence of a delimiter. The delimiter
is not returned.
</p>

<p>
A <code>null</code> string input will return <code>null</code>. An empty
("") string input will return the empty string. A <code>null</code>
delimiter will return the empty string if the input string is not
<code>null</code>.
</p>

<p>
If nothing is found, the empty string is returned.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - the substring before the first occurrence of the delimiter,
        null if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to get a substring from, may be null |
| delimiter | <code>String</code> | the String to search for, may be null |

<a name="Strings.trimLeft"></a>

### Strings.trimLeft(string) ⇒
Trim the left side of the given string removing trailing and white space
characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: trimmed string  

| Param | Description |
| --- | --- |
| string | the String value being processed |

<a name="Strings.trimRight"></a>

### Strings.trimRight(string) ⇒ <code>String</code>
Trim the right sides of the given string removing trailing and white space
characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - trimmed string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being processed |

<a name="Strings.padLeft"></a>

### Strings.padLeft(str, size, padChar) ⇒ <code>String</code>
<p>
Left pad a String with a specified String.
</p>

<p>
Pad to a size of <code>size</code>.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - left padded String or original String if no padding is
        necessary, <code>null</code> if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to pad out, may be null |
| size | <code>Number</code> | the size to pad to |
| padChar | <code>String</code> | the String to pad with, null or empty treated as single            space |

<a name="Strings.padRight"></a>

### Strings.padRight(str, size, padChar) ⇒ <code>String</code>
<p>
Left pad a String with a specified String.
</p>

<p>
Pad to a size of <code>size</code>.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - left padded String or original String if no padding is
        necessary, <code>null</code> if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to pad out, may be null |
| size | <code>Number</code> | the size to pad to |
| padChar | <code>String</code> | the String to pad with, null or empty treated as single            space |

<a name="Strings.truncate"></a>

### Strings.truncate(value, length) ⇒ <code>String</code>
Truncate the given string value appending "..." to the substring extracted
with the given length if the given string's length is greater than the the
given length value (number) + 3.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - truncated string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string value to be truncated |
| length | <code>int</code> | the max length allowed |

<a name="Strings.getLabel"></a>

### Strings.getLabel(string) ⇒ <code>String</code>
<p>
Parse the given String into the most human-readable possible String.
</p>

<p>
This method transforms a field name or path into a readable string.
</p>

<p>
We tokenize upper case fields to a space character. We remove any "@" chars
and also replace "_", "-" or "." for a blank/space character.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - the label  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string to be transformed |

<a name="Strings.getClosestWord"></a>

### Strings.getClosestWord(string, cursor) ⇒ <code>Object</code>
Find the closest word within the given string, based on the given cursor
index position being a required parameter used to find out the closest word
from that location.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Object</code> - hash object containing closest word from the given index
        location and the starting index from where the word was retrieved:
        <code><{ value : '', index : 000}</code>  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string value containing the words |
| cursor | <code>int</code> | the index position of the cursor within the given string            (usually obtained from a text input selection) |

<a name="Strings.tokenizeByCamelCase"></a>

### Strings.tokenizeByCamelCase(string, token) ⇒ <code>String</code>
Tokenize the given String by camel case replacing upper case characters by
the given token.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - text  

| Param | Type |
| --- | --- |
| string | <code>String</code> | 
| token | <code>String</code> | 

<a name="Strings.slugfy"></a>

### Strings.slugfy(the) ⇒ <code>String</code>
Generate a slug for the given String value replacing spaces and special
characters per valid slug characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - generated slug for the given value  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>String</code> | value used to generate the slug |

<a name="Strings.tagfy"></a>

### Strings.tagfy(value) ⇒ <code>Array</code>
Split the given value by comma creating a list of anchor (<a>) for each one
of the given values.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Array</code> - list of tags for each value int he comma separated string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the value to be tagged |

<a name="Strings"></a>

## Strings ⇒
UN-Capitalize the first character of the given String

**Kind**: global variable  
**Returns**: UN-capitalized String  

| Param | Description |
| --- | --- |
| value | the String value being UN-capitalized |


* [Strings](#Strings) ⇒
    * [new Strings()](#new_Strings_new)
    * [.LINE_SEPARATOR](#Strings.LINE_SEPARATOR)
    * [.TRIM_LEFT](#Strings.TRIM_LEFT)
    * [.TRIM_RIGHT](#Strings.TRIM_RIGHT)
    * [.format(value, parameters)](#Strings.format) ⇒ <code>String</code>
    * [.startsWith(string, prefix, caseSensitive)](#Strings.startsWith) ⇒
    * [.endsWith(string, value, caseSensitive)](#Strings.endsWith) ⇒ <code>Boolean</code>
    * [.contains(string, prefix, caseSensitive)](#Strings.contains) ⇒ <code>Boolean</code>
    * [.replaceAll(string, oldValue, newValue, regex)](#Strings.replaceAll) ⇒
    * [.replace(string, key, value, index)](#Strings.replace) ⇒ <code>String</code>
    * [.trim(string)](#Strings.trim) ⇒ <code>String</code>
    * [.camelCaseByToken()](#Strings.camelCaseByToken) ⇒
    * [.substringAfter(str, delimiter)](#Strings.substringAfter) ⇒ <code>String</code>
    * [.substringBefore(str, delimiter)](#Strings.substringBefore) ⇒ <code>String</code>
    * [.trimLeft(string)](#Strings.trimLeft) ⇒
    * [.trimRight(string)](#Strings.trimRight) ⇒ <code>String</code>
    * [.padLeft(str, size, padChar)](#Strings.padLeft) ⇒ <code>String</code>
    * [.padRight(str, size, padChar)](#Strings.padRight) ⇒ <code>String</code>
    * [.truncate(value, length)](#Strings.truncate) ⇒ <code>String</code>
    * [.getLabel(string)](#Strings.getLabel) ⇒ <code>String</code>
    * [.getClosestWord(string, cursor)](#Strings.getClosestWord) ⇒ <code>Object</code>
    * [.tokenizeByCamelCase(string, token)](#Strings.tokenizeByCamelCase) ⇒ <code>String</code>
    * [.slugfy(the)](#Strings.slugfy) ⇒ <code>String</code>
    * [.tagfy(value)](#Strings.tagfy) ⇒ <code>Array</code>

<a name="new_Strings_new"></a>

### new Strings()
String utility class

<a name="Strings.LINE_SEPARATOR"></a>

### Strings.LINE_SEPARATOR
The default character used to separate lines (line-break);

**Kind**: static property of [<code>Strings</code>](#Strings)  
<a name="Strings.TRIM_LEFT"></a>

### Strings.TRIM_LEFT
RegExp expression used to trim the left side of a String

**Kind**: static property of [<code>Strings</code>](#Strings)  
**See**: Strings#trimLeft()  
<a name="Strings.TRIM_RIGHT"></a>

### Strings.TRIM_RIGHT
RegExp expression used to trim right left side of a String

**Kind**: static property of [<code>Strings</code>](#Strings)  
**See**: Strings#trimRight()  
<a name="Strings.format"></a>

### Strings.format(value, parameters) ⇒ <code>String</code>
Format the given String injecting the indexed parameters based on the
arguments of the given parameters array.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - formatted string;  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string being formatted |
| parameters | <code>String</code> | the parameters to be injected |

<a name="Strings.startsWith"></a>

### Strings.startsWith(string, prefix, caseSensitive) ⇒
Check rather the given String value starts with the given prefix value
returning <code>true</code> if so, or <code>false</code> otherwise

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>true</code> if the given String value has the same initial
        prefix, or <code>false</code> otherwise  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being evaluated |
| prefix | <code>String</code> | the prefix String value checked against the given String |
| caseSensitive | <code>Boolean</code> | flag that indicates if we should perform comparison            using case sensitive |

<a name="Strings.endsWith"></a>

### Strings.endsWith(string, value, caseSensitive) ⇒ <code>Boolean</code>
Verify if the given string ends with the given value

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Boolean</code> - true if the given string ends with the given value, false
        otherwise  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string we are verifying |
| value | <code>String</code> | the value used while comparing |
| caseSensitive |  | flag that indicates if we should perform comparison using case            sensitive |

<a name="Strings.contains"></a>

### Strings.contains(string, prefix, caseSensitive) ⇒ <code>Boolean</code>
Check rather the given String value contains the given prefix value returning
<code>true</code> if so, or <code>false</code> otherwise

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Boolean</code> - <code>true</code> if the given String value contains the
        given prefix, or <code>false</code> otherwise  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being evaluated |
| prefix | <code>String</code> | the prefix String value checked against the given String |
| caseSensitive | <code>Boolean</code> | flag that indicates if we should perform comparison            using case sensitive |

<a name="Strings.replaceAll"></a>

### Strings.replaceAll(string, oldValue, newValue, regex) ⇒
Replace within the given String value, all occurrences of the existing value
with the given new String value.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: formatted value containing the replaced values  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being parsed |
| oldValue | <code>String</code> | the existing value to be replaced |
| newValue | <code>String</code> | the new value to be replaced |
| regex | <code>Boolean</code> | flag that indicates if we should use regex 'g' to            replace all or not. If you're replacing characters that may            conflict with regex, you might not want to use this as true.            Defaults to false |

<a name="Strings.replace"></a>

### Strings.replace(string, key, value, index) ⇒ <code>String</code>
Method similar to String.replace() used to replace a certain string
value/regex expression within a given string.

<p>
It adds the ability to start replacing from a given starting index (in which
is used to substring before we can do the replace).
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - replaced/merged string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the main string template |
| key | <code>String</code> | the key we want to replace |
| value | <code>String</code> | the replacing the given key |
| index | <code>int</code> | the starting index in the given string where we want to            start replacing from (not required) |

<a name="Strings.trim"></a>

### Strings.trim(string) ⇒ <code>String</code>
Trim both left and right sides of the given string removing trailing and
white space characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - trimmed string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being processed |

<a name="Strings.camelCaseByToken"></a>

### Strings.camelCaseByToken() ⇒
Camel-case the given String value on every occurrence of the given token;

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: camel-cased String by a given tokentoken the token being used as a separatorthe given String camel-cased  
<a name="Strings.substringAfter"></a>

### Strings.substringAfter(str, delimiter) ⇒ <code>String</code>
<p>
Gets the substring after the first occurrence of a delimiter. The delimiter
is not returned.
</p>

<p>
A <code>null</code> string input will return <code>null</code>. An empty
("") string input will return the empty string. A <code>null</code>
delimiter will return the empty string if the input string is not
<code>null</code>.
</p>

<p>
If nothing is found, the empty string is returned.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - the substring after the first occurrence of the delimiter,
        null if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to get a substring from, may be null |
| delimiter | <code>String</code> | the String to search for, may be null |

<a name="Strings.substringBefore"></a>

### Strings.substringBefore(str, delimiter) ⇒ <code>String</code>
<p>
Gets the substring before the first occurrence of a delimiter. The delimiter
is not returned.
</p>

<p>
A <code>null</code> string input will return <code>null</code>. An empty
("") string input will return the empty string. A <code>null</code>
delimiter will return the empty string if the input string is not
<code>null</code>.
</p>

<p>
If nothing is found, the empty string is returned.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - the substring before the first occurrence of the delimiter,
        null if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to get a substring from, may be null |
| delimiter | <code>String</code> | the String to search for, may be null |

<a name="Strings.trimLeft"></a>

### Strings.trimLeft(string) ⇒
Trim the left side of the given string removing trailing and white space
characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: trimmed string  

| Param | Description |
| --- | --- |
| string | the String value being processed |

<a name="Strings.trimRight"></a>

### Strings.trimRight(string) ⇒ <code>String</code>
Trim the right sides of the given string removing trailing and white space
characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - trimmed string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the String value being processed |

<a name="Strings.padLeft"></a>

### Strings.padLeft(str, size, padChar) ⇒ <code>String</code>
<p>
Left pad a String with a specified String.
</p>

<p>
Pad to a size of <code>size</code>.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - left padded String or original String if no padding is
        necessary, <code>null</code> if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to pad out, may be null |
| size | <code>Number</code> | the size to pad to |
| padChar | <code>String</code> | the String to pad with, null or empty treated as single            space |

<a name="Strings.padRight"></a>

### Strings.padRight(str, size, padChar) ⇒ <code>String</code>
<p>
Left pad a String with a specified String.
</p>

<p>
Pad to a size of <code>size</code>.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - left padded String or original String if no padding is
        necessary, <code>null</code> if null String input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the String to pad out, may be null |
| size | <code>Number</code> | the size to pad to |
| padChar | <code>String</code> | the String to pad with, null or empty treated as single            space |

<a name="Strings.truncate"></a>

### Strings.truncate(value, length) ⇒ <code>String</code>
Truncate the given string value appending "..." to the substring extracted
with the given length if the given string's length is greater than the the
given length value (number) + 3.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - truncated string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string value to be truncated |
| length | <code>int</code> | the max length allowed |

<a name="Strings.getLabel"></a>

### Strings.getLabel(string) ⇒ <code>String</code>
<p>
Parse the given String into the most human-readable possible String.
</p>

<p>
This method transforms a field name or path into a readable string.
</p>

<p>
We tokenize upper case fields to a space character. We remove any "@" chars
and also replace "_", "-" or "." for a blank/space character.
</p>

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - the label  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string to be transformed |

<a name="Strings.getClosestWord"></a>

### Strings.getClosestWord(string, cursor) ⇒ <code>Object</code>
Find the closest word within the given string, based on the given cursor
index position being a required parameter used to find out the closest word
from that location.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Object</code> - hash object containing closest word from the given index
        location and the starting index from where the word was retrieved:
        <code><{ value : '', index : 000}</code>  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string value containing the words |
| cursor | <code>int</code> | the index position of the cursor within the given string            (usually obtained from a text input selection) |

<a name="Strings.tokenizeByCamelCase"></a>

### Strings.tokenizeByCamelCase(string, token) ⇒ <code>String</code>
Tokenize the given String by camel case replacing upper case characters by
the given token.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - text  

| Param | Type |
| --- | --- |
| string | <code>String</code> | 
| token | <code>String</code> | 

<a name="Strings.slugfy"></a>

### Strings.slugfy(the) ⇒ <code>String</code>
Generate a slug for the given String value replacing spaces and special
characters per valid slug characters.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>String</code> - generated slug for the given value  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>String</code> | value used to generate the slug |

<a name="Strings.tagfy"></a>

### Strings.tagfy(value) ⇒ <code>Array</code>
Split the given value by comma creating a list of anchor (<a>) for each one
of the given values.

**Kind**: static method of [<code>Strings</code>](#Strings)  
**Returns**: <code>Array</code> - list of tags for each value int he comma separated string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the value to be tagged |

<a name="UI"></a>

## UI
**Kind**: global variable  

* [UI](#UI)
    * [new UI()](#new_UI_new)
    * [.TOP](#UI.TOP) : <code>String</code>
    * [.RIGHT](#UI.RIGHT)
    * [.BOTTOM](#UI.BOTTOM)
    * [.LEFT](#UI.LEFT)
    * [.CENTER](#UI.CENTER)
    * [.INSIDE](#UI.INSIDE)
    * [.OUTSIDE](#UI.OUTSIDE)
    * [.simulateChildrenPosition()](#UI.simulateChildrenPosition)
    * [.contains(element, dimension)](#UI.contains) ⇒
    * [.getAlignPosition(element, target, valign, halign, policy, type)](#UI.getAlignPosition) ⇒ <code>Object</code>
    * [.getBestAlignPosition(element, target, valign, halign, policy, type)](#UI.getBestAlignPosition) ⇒ <code>Object</code>
    * [.toPixel(value)](#UI.toPixel) ⇒ <code>Number</code>

<a name="new_UI_new"></a>

### new UI()
jQuery utility plug-ins

<a name="UI.TOP"></a>

### UI.TOP : <code>String</code>
Constant used to define the vertical alignment of a drop-down to
<code>"top"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.RIGHT"></a>

### UI.RIGHT
Constant used to define the horizontal alignment of a drop-down to
<code>"right"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.BOTTOM"></a>

### UI.BOTTOM
Constant used to define the vertical alignment of a drop-down to
<code>"bottom"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.LEFT"></a>

### UI.LEFT
Constant used to define the horizontal alignment of a drop-down to
<code>"left"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.CENTER"></a>

### UI.CENTER
Constant used to define the vertical/horizontal alignment of a drop-down to
<code>"center"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.INSIDE"></a>

### UI.INSIDE
Constant used to define the attachment policy aligning this drop-down inside
the boundaries of the target element.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.OUTSIDE"></a>

### UI.OUTSIDE
Constant used to define the attachment policy aligning this drop-down outside
the boundaries of the target element.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.simulateChildrenPosition"></a>

### UI.simulateChildrenPosition()
Patch that simulates first-child and last-child for first and last child
elements for each of the elements selected in the given jQuery object list.

<p>
This is useful to fix the :first-child and :last-child incompatibility with
Internet Explorer
</p>

**Kind**: static method of [<code>UI</code>](#UI)  
<a name="UI.contains"></a>

### UI.contains(element, dimension) ⇒
Check if the given element is under the given dimension

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: true if dimension matches, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | the element we want to check against |
| dimension | <code>Object</code> | hash holding coordinates and size |

<a name="UI.getAlignPosition"></a>

### UI.getAlignPosition(element, target, valign, halign, policy, type) ⇒ <code>Object</code>
Look-up for the alignment position to move the given element attaching it to
the given target using the given vertical, horizontal and attachment policy.

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: <code>Object</code> - the start and ending position according to the current
        visibility of the given element  

| Param | Type | Description |
| --- | --- | --- |
| element | [<code>jQuery</code>](#jQuery) | the element we want to align against a given target |
| target | [<code>jQuery</code>](#jQuery) | the target element we are bound to |
| valign | <code>String</code> | the vertical alignment |
| halign | <code>String</code> | the horizontal alignment |
| policy | <code>String</code> | the attachment policy |
| type | <code>String</code> | flag that indicate if the returned position should be            fixed, absolute or relative. Default is "relative" |

<a name="UI.getBestAlignPosition"></a>

### UI.getBestAlignPosition(element, target, valign, halign, policy, type) ⇒ <code>Object</code>
Look-up for the best alignment position for the given element against the
given target, vertical and horizontal alignment and attachment policy.

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: <code>Object</code> - the start and ending position according to the current
        visibility of the given element  

| Param | Type | Description |
| --- | --- | --- |
| element | [<code>jQuery</code>](#jQuery) | the element we want to align against a given target |
| target | [<code>jQuery</code>](#jQuery) | the target element we are bound to |
| valign | <code>String</code> | the vertical alignment |
| halign | <code>String</code> | the horizontal alignment |
| policy | <code>String</code> | the attachment policy |
| type | <code>String</code> | flag that indicate if the returned position should be            fixed, absolute or relative. Default is "relative" |

<a name="UI.toPixel"></a>

### UI.toPixel(value) ⇒ <code>Number</code>
Convert the given String value to a number in pixels

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: <code>Number</code> - the given value as a Number converted to pixels  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string being converted |

<a name="UI"></a>

## UI
Patch that simulates focus within input boxes by adding the
<code>focus</code> class whenever the input is focused and by removing it
when the focus is lost.

<p>
This is useful for browsers that do not support :focus CSS selector such as
Internet Explorer 7 or older.
</p>

**Kind**: global variable  

| Param | Description |
| --- | --- |
| selector | the jQuery selector used to find the input boxes. If not given,            all input boxes are included |


* [UI](#UI)
    * [new UI()](#new_UI_new)
    * [.TOP](#UI.TOP) : <code>String</code>
    * [.RIGHT](#UI.RIGHT)
    * [.BOTTOM](#UI.BOTTOM)
    * [.LEFT](#UI.LEFT)
    * [.CENTER](#UI.CENTER)
    * [.INSIDE](#UI.INSIDE)
    * [.OUTSIDE](#UI.OUTSIDE)
    * [.simulateChildrenPosition()](#UI.simulateChildrenPosition)
    * [.contains(element, dimension)](#UI.contains) ⇒
    * [.getAlignPosition(element, target, valign, halign, policy, type)](#UI.getAlignPosition) ⇒ <code>Object</code>
    * [.getBestAlignPosition(element, target, valign, halign, policy, type)](#UI.getBestAlignPosition) ⇒ <code>Object</code>
    * [.toPixel(value)](#UI.toPixel) ⇒ <code>Number</code>

<a name="new_UI_new"></a>

### new UI()
jQuery utility plug-ins

<a name="UI.TOP"></a>

### UI.TOP : <code>String</code>
Constant used to define the vertical alignment of a drop-down to
<code>"top"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.RIGHT"></a>

### UI.RIGHT
Constant used to define the horizontal alignment of a drop-down to
<code>"right"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.BOTTOM"></a>

### UI.BOTTOM
Constant used to define the vertical alignment of a drop-down to
<code>"bottom"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.LEFT"></a>

### UI.LEFT
Constant used to define the horizontal alignment of a drop-down to
<code>"left"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.CENTER"></a>

### UI.CENTER
Constant used to define the vertical/horizontal alignment of a drop-down to
<code>"center"</code>.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.INSIDE"></a>

### UI.INSIDE
Constant used to define the attachment policy aligning this drop-down inside
the boundaries of the target element.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.OUTSIDE"></a>

### UI.OUTSIDE
Constant used to define the attachment policy aligning this drop-down outside
the boundaries of the target element.

**Kind**: static property of [<code>UI</code>](#UI)  
<a name="UI.simulateChildrenPosition"></a>

### UI.simulateChildrenPosition()
Patch that simulates first-child and last-child for first and last child
elements for each of the elements selected in the given jQuery object list.

<p>
This is useful to fix the :first-child and :last-child incompatibility with
Internet Explorer
</p>

**Kind**: static method of [<code>UI</code>](#UI)  
<a name="UI.contains"></a>

### UI.contains(element, dimension) ⇒
Check if the given element is under the given dimension

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: true if dimension matches, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | the element we want to check against |
| dimension | <code>Object</code> | hash holding coordinates and size |

<a name="UI.getAlignPosition"></a>

### UI.getAlignPosition(element, target, valign, halign, policy, type) ⇒ <code>Object</code>
Look-up for the alignment position to move the given element attaching it to
the given target using the given vertical, horizontal and attachment policy.

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: <code>Object</code> - the start and ending position according to the current
        visibility of the given element  

| Param | Type | Description |
| --- | --- | --- |
| element | [<code>jQuery</code>](#jQuery) | the element we want to align against a given target |
| target | [<code>jQuery</code>](#jQuery) | the target element we are bound to |
| valign | <code>String</code> | the vertical alignment |
| halign | <code>String</code> | the horizontal alignment |
| policy | <code>String</code> | the attachment policy |
| type | <code>String</code> | flag that indicate if the returned position should be            fixed, absolute or relative. Default is "relative" |

<a name="UI.getBestAlignPosition"></a>

### UI.getBestAlignPosition(element, target, valign, halign, policy, type) ⇒ <code>Object</code>
Look-up for the best alignment position for the given element against the
given target, vertical and horizontal alignment and attachment policy.

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: <code>Object</code> - the start and ending position according to the current
        visibility of the given element  

| Param | Type | Description |
| --- | --- | --- |
| element | [<code>jQuery</code>](#jQuery) | the element we want to align against a given target |
| target | [<code>jQuery</code>](#jQuery) | the target element we are bound to |
| valign | <code>String</code> | the vertical alignment |
| halign | <code>String</code> | the horizontal alignment |
| policy | <code>String</code> | the attachment policy |
| type | <code>String</code> | flag that indicate if the returned position should be            fixed, absolute or relative. Default is "relative" |

<a name="UI.toPixel"></a>

### UI.toPixel(value) ⇒ <code>Number</code>
Convert the given String value to a number in pixels

**Kind**: static method of [<code>UI</code>](#UI)  
**Returns**: <code>Number</code> - the given value as a Number converted to pixels  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the string being converted |

<a name="URLs"></a>

## URLs ⇒
Join the given url to the given arguments.

**Kind**: global variable  
**Returns**: joined url  

| Param | Description |
| --- | --- |
| url | the main url to join |
| args | array of arguments you would like to be joined to your URL |


* [URLs](#URLs) ⇒
    * [new URLs()](#new_URLs_new)
    * [.toQueryString(params)](#URLs.toQueryString) ⇒ <code>String</code>
    * [.getQueryString(query, ignore)](#URLs.getQueryString) ⇒
    * [.fromQueryString(query, ignore)](#URLs.fromQueryString) ⇒

<a name="new_URLs_new"></a>

### new URLs()
URL utility class

<a name="URLs.toQueryString"></a>

### URLs.toQueryString(params) ⇒ <code>String</code>
Transform the given hash object into a valid URL query string

**Kind**: static method of [<code>URLs</code>](#URLs)  
**Returns**: <code>String</code> - valid query String for a URL  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | parameters to be converted |

<a name="URLs.getQueryString"></a>

### URLs.getQueryString(query, ignore) ⇒
Parse the given query string into a JavaScript hash object holding the query
string key -> value.

**Kind**: static method of [<code>URLs</code>](#URLs)  
**Returns**: hash object containing the query string values  

| Param | Description |
| --- | --- |
| query | the HTTP URL/query string |
| ignore | indicates if we should ignore the query string question mark and            simply replace the variables in it. Pass true if you are sure            you're only providing the query string and not the complete url |

<a name="URLs.fromQueryString"></a>

### URLs.fromQueryString(query, ignore) ⇒
Parse the given query string into a JavaScript hash object holding the query
string key -> value.

**Kind**: static method of [<code>URLs</code>](#URLs)  
**Returns**: hash object containing the query string values  

| Param | Description |
| --- | --- |
| query | the HTTP URL/query string |
| ignore | indicates if we should ignore the query string question mark and            simply replace the variables in it. Pass true if you are sure            you're only providing the query string and not the complete url |

<a name="XML"></a>

## XML ⇒
Encode the given XML replacing encoded characters per the proper XML
characters.

**Kind**: global variable  
**Returns**: unescaped xml  

| Param | Description |
| --- | --- |
| xml | the xml to be unescaped |

<a name="XML"></a>

## XML ⇒
Encode the given XML document replacing XML keywords by their encoded
characters.

**Kind**: global variable  
**Returns**: encoded document  

| Param | Description |
| --- | --- |
| text | the XML document |

<a name="Ajax"></a>

## Ajax : <code>object</code>
Default ajax settings and properties under.

<ul class="import">
<li>import orion.reflect.Reflection;</li>
<li>import org.jQuery;</li>
</ul>

**Kind**: global namespace  


* [Ajax](#Ajax) : <code>object</code>
    * [.loadProcessors](#Ajax.loadProcessors)
    * [.LOADED](#Ajax.LOADED)

<a name="Ajax.loadProcessors"></a>

### Ajax.loadProcessors
List of functions used to process the HTML response after it has been
loaded from the remote server and before it has been injected into the
target HTML element.

<p>
Each function may process the result and replace it with a new one
performing validations to see if the content is appropriate for
displaying.
</p>

These functions must implement the following signature:
<code>function(response)</code> and must return the response. THe
function scope is binded to the target element being loaded.

If your function is only validating something, make sure you return the
same given response parameter. Returning null or empty will cause the
response to not be loaded into the target object.

<p>
These processors are globally applied and cover every single request for
both jQuery.fn.load() as well as HTTPService.load() methods.
</p>

If you need processors for specific components, use HTTPService pre and
post processors instead.

**Kind**: static property of [<code>Ajax</code>](#Ajax)  
<a name="Ajax.LOADED"></a>

### Ajax.LOADED
Event name dispatched whenever a content is loaded via jQuery.fn.loaded()
within both element loaded and document

**Kind**: static property of [<code>Ajax</code>](#Ajax)  
<a name="Printer"></a>

## Printer : <code>object</code>
Default settings used by the jQuery.fn.print plugin

<ul class="import">
<li>import org.jQuery;</li>
<li>import orion.utils.Timer;</li>
<li>import orion.reflect.Package;</li>
</ul>

**Kind**: global namespace  
**See**: jQuery.fn.print  


* [Printer](#Printer) : <code>object</code>
    * [.debug](#Printer.debug)
    * [.importCSS](#Printer.importCSS)
    * [.printContainer](#Printer.printContainer)
    * [.operaSupport](#Printer.operaSupport)

<a name="Printer.debug"></a>

### Printer.debug
Flag used during development to debug the printing plugin. It basically
shows the generated iframe when defined as true, or keep it hidden when
false.

**Kind**: static property of [<code>Printer</code>](#Printer)  
**Default**: <code>false</code>  
<a name="Printer.importCSS"></a>

### Printer.importCSS
Indicates if we should import the link tag (CSS files) defined in the
page into the printing IFrame. If there are at least one
<code>@media print</code> CSS tags, import them and exclude other CSS files.
       Otherwise, import all CSS file occurrences.

**Kind**: static property of [<code>Printer</code>](#Printer)  
**Default**: <code>true</code>  
<a name="Printer.printContainer"></a>

### Printer.printContainer
Indicate if we should include the container being printed in the IFrame
or just the inner elements defined with it. By settings this flag to
false, you may break your CSS rules as the main element being printed
will not exist on the generated IFrame.

**Kind**: static property of [<code>Printer</code>](#Printer)  
**Default**: <code>true</code>  
<a name="Printer.operaSupport"></a>

### Printer.operaSupport
Add support for opera by opening a new temporary popup. By default, Opera
Browser doesn't support the runtime IFrame HTML printing techniques this
plugin offers, so a new popup must be opened.

**Kind**: static property of [<code>Printer</code>](#Printer)  
**Default**: <code>true</code>  
<a name="update"></a>

## update(value, triggerEvent)
Update browser hash url

**Kind**: global function  

| Param | Description |
| --- | --- |
| value | the new hash value |
| triggerEvent | flag that indicates if we should trigger a hash event. Default            value is <code>true</code> |

<a name="Character"></a>

## Character()
Utilities related to accents/special characters.

<ul class="import">
<li>import orion.reflect.Package;</li>
</ul>

**Kind**: global function  

* [Character()](#Character)
    * [.IN](#Character.IN)
    * [.OUT](#Character.OUT)
    * [.clean(value)](#Character.clean) ⇒

<a name="Character.IN"></a>

### Character.IN
List of special characters

TODO: sync with http://www.w3schools.com/tags/ref_entities.asp

**Kind**: static property of [<code>Character</code>](#Character)  
<a name="Character.OUT"></a>

### Character.OUT
List of converted special characters to plain characters

**Kind**: static property of [<code>Character</code>](#Character)  
<a name="Character.clean"></a>

### Character.clean(value) ⇒
Clean the given string replacing any special character by their
corresponding/plain character.

**Kind**: static method of [<code>Character</code>](#Character)  
**Returns**: the cleaned string absent of any special character  

| Param | Description |
| --- | --- |
| value | the string value we want to clean |

<a name="jQuery"></a>

## jQuery(clazz, name) ⇒ [<code>jQuery</code>](#jQuery)
Detaches the instance of the given class's plugin from this jQuery
element.

**Kind**: global function  
**Returns**: [<code>jQuery</code>](#jQuery) - self reference  

| Param | Type | Description |
| --- | --- | --- |
| clazz | <code>Class</code> | the class being uninstalled |
| name | <code>String</code> | the plugin name being uninstalled |


* [jQuery(clazz, name)](#jQuery) ⇒ [<code>jQuery</code>](#jQuery)
    * [.overridden](#jQuery.overridden)
    * [.empty](#jQuery.empty)
    * [.asSelector(cssClass)](#jQuery.asSelector) ⇒ <code>String</code>
    * [.plugin(name, Class, initial)](#jQuery.plugin) ⇒
    * [.is(value)](#jQuery.is) ⇒

<a name="jQuery.overridden"></a>

### jQuery.overridden
Storage for overridden methods within jQuery

**Kind**: static property of [<code>jQuery</code>](#jQuery)  
<a name="jQuery.empty"></a>

### jQuery.empty
Empty jQuery stack

**Kind**: static property of [<code>jQuery</code>](#jQuery)  
<a name="jQuery.asSelector"></a>

### jQuery.asSelector(cssClass) ⇒ <code>String</code>
Translate the given CSS class to a valid CSS/jQuery selector transforming
it to be used as a jQuery selector.

**Kind**: static method of [<code>jQuery</code>](#jQuery)  
**Returns**: <code>String</code> - jQuery selector for all the given classes  

| Param | Type | Description |
| --- | --- | --- |
| cssClass | <code>String</code> | the CSS class we are looking for (may include            multiple separate by space) |

<a name="jQuery.plugin"></a>

### jQuery.plugin(name, Class, initial) ⇒
Read/write access to a jQuery plugin

**Kind**: static method of [<code>jQuery</code>](#jQuery)  
**Returns**: installed plugin  

| Param | Description |
| --- | --- |
| name | the plugin name being installed |
| Class | the class being installed |
| initial | the initial configuration |

<a name="jQuery.is"></a>

### jQuery.is(value) ⇒
Check if the given object is a jQuery object

**Kind**: static method of [<code>jQuery</code>](#jQuery)  
**Returns**: true if a jQuery object, false otherwise  

| Param | Description |
| --- | --- |
| value | the possible jQuery object |

<a name="Keyboard"></a>

## Keyboard()
Contains constants and utility functions to work with keyboard events

<ul class="import">
<li>import orion.reflect.Package;</li>
</ul>

**Kind**: global function  


* [Keyboard()](#Keyboard)
    * [.BACKSPACE](#Keyboard.BACKSPACE)
    * [.TAB](#Keyboard.TAB)
    * [.ENTER](#Keyboard.ENTER)
    * [.ESCAPE](#Keyboard.ESCAPE)
    * [.SPACE](#Keyboard.SPACE)
    * [.DELETE](#Keyboard.DELETE)
    * [.PLUS](#Keyboard.PLUS)
    * [.MINUS](#Keyboard.MINUS)
    * [.LEFT_ARROW](#Keyboard.LEFT_ARROW)
    * [.UP_ARROW](#Keyboard.UP_ARROW)
    * [.RIGHT_ARROW](#Keyboard.RIGHT_ARROW)
    * [.DOWN_ARROW](#Keyboard.DOWN_ARROW)
    * [.PAGE_DOWN](#Keyboard.PAGE_DOWN)
    * [.PAGE_UP](#Keyboard.PAGE_UP)
    * [.COMMA](#Keyboard.COMMA)
    * [.is(keyCode, arguments)](#Keyboard.is) ⇒ <code>Boolean</code>

<a name="Keyboard.BACKSPACE"></a>

### Keyboard.BACKSPACE
Code that represents the keyboard Backspace key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.TAB"></a>

### Keyboard.TAB
Code that represents the keyboard Tab key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.ENTER"></a>

### Keyboard.ENTER
Code that represents the keyboard Enter key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.ESCAPE"></a>

### Keyboard.ESCAPE
Code that represents the keyboard Escape key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.SPACE"></a>

### Keyboard.SPACE
Code that represents the keyboard Space key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.DELETE"></a>

### Keyboard.DELETE
Code that represents the keyboard delete key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PLUS"></a>

### Keyboard.PLUS
Code that represents the keyboard plus key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.MINUS"></a>

### Keyboard.MINUS
Code that represents the keyboard minus key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.LEFT_ARROW"></a>

### Keyboard.LEFT_ARROW
Code that represents the keyboard Left Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.UP_ARROW"></a>

### Keyboard.UP_ARROW
Code that represents the keyboard Up Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.RIGHT_ARROW"></a>

### Keyboard.RIGHT_ARROW
Code that represents the keyboard Right Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.DOWN_ARROW"></a>

### Keyboard.DOWN_ARROW
Code that represents the keyboard Down Arrow key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PAGE_DOWN"></a>

### Keyboard.PAGE_DOWN
Code that represents the keyboard Page Down key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.PAGE_UP"></a>

### Keyboard.PAGE_UP
Code that represents the keyboard Page Up key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.COMMA"></a>

### Keyboard.COMMA
Code that represents the keyboard Comma key

**Kind**: static constant of [<code>Keyboard</code>](#Keyboard)  
<a name="Keyboard.is"></a>

### Keyboard.is(keyCode, arguments) ⇒ <code>Boolean</code>
Check rather the given keyboard code match any of the following declared
keys.

**Kind**: static method of [<code>Keyboard</code>](#Keyboard)  
**Returns**: <code>Boolean</code> - true if any of the given keys, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| keyCode | <code>int</code> | the keyCode being tested |
| arguments |  | (1..n) being any of the sequenced arguments passed on this method |

<a name="Language"></a>

## Language()
Orion Language utilities and tricks.


<ul class="import">
<li>import orion.reflect.Reflection;</li>
<li>import orion.utils.Objects;</li>
<li>import orion.language.ComparisonOperator;</li>
<li>import com.orion.language.Float;</li>
<li>import com.orion.language.Long;</li>
<li>import com.orion.language.Double;</li>
</ul>

**Kind**: global function  
****: Nov 21, 2014 12:21:33 AM  
<br>  

* [Language()](#Language)
    * [.EMPTY_KEYWORD_ARGS](#Language.EMPTY_KEYWORD_ARGS)
    * [.EMPTY_REST_ARGS](#Language.EMPTY_REST_ARGS)
    * [.isPositive(value)](#Language.isPositive) ⇒ <code>Boolean</code>
    * [.equals(left, right)](#Language.equals) ⇒ <code>Boolean</code>
    * [.notEquals(left, right)](#Language.notEquals) ⇒
    * [.same(left, right)](#Language.same) ⇒
    * [.notSame(left, right)](#Language.notSame) ⇒
    * [.greaterThan(left, right)](#Language.greaterThan) ⇒
    * [.greaterOrEquals(left, right)](#Language.greaterOrEquals) ⇒
    * [.lessThan(left, right)](#Language.lessThan) ⇒
    * [.lessOrEquals(left, right)](#Language.lessOrEquals) ⇒
    * [.compare(left, right, operator)](#Language.compare) ⇒
    * [.getKwargs(exploded, extra, ignored)](#Language.getKwargs) ⇒

<a name="Language.EMPTY_KEYWORD_ARGS"></a>

### Language.EMPTY_KEYWORD_ARGS
Default value used for keyword-based argument types

**Kind**: static property of [<code>Language</code>](#Language)  
<a name="Language.EMPTY_REST_ARGS"></a>

### Language.EMPTY_REST_ARGS
Default value used for rest-based argument types

**Kind**: static property of [<code>Language</code>](#Language)  
<a name="Language.isPositive"></a>

### Language.isPositive(value) ⇒ <code>Boolean</code>
Taken the result of a condition value, this method evaluates if it represents
a positive results. Although, the standard Javascript specification can
evaluate positive expressions with a very close proximity of what the Orion
Language requires, this method will provide all necessary validations.
Positive expressions are represented by any value except:

<ul>
<li>null</li>
<li>undefined</li>
<li>false</li>
<li>negative number or 0</li>
<li>empty string</li>
<li>empty array</li>
<li>empty object</li>
</ul>

Everything else is evaluated as <code>true</code>

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: <code>Boolean</code> - true if positive and false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | the condition being evaluated |

<a name="Language.equals"></a>

### Language.equals(left, right) ⇒ <code>Boolean</code>
Check if both left and right values match in content. The type may be
different. This means a <code>(double)1</code> is always equals to a
<code>(int)1</code>.

<p>
This method contains the logic encapsulated by the comparison operator
defined in [ComparisonOperator#EQUALS](ComparisonOperator#EQUALS).
</p>

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: <code>Boolean</code> - true if equals, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Object</code> | the left side of the comparison |
| right | <code>Object</code> | the right side of the comparison |

<a name="Language.notEquals"></a>

### Language.notEquals(left, right) ⇒
Check if both left and right values do NOT match in content. The type does
not matter.

<p>
This method contains the logic encapsulated by the comparison operator
defined in [ComparisonOperator#NOT_EQUALS](ComparisonOperator#NOT_EQUALS).
</p>

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: true if not equals, false otherwise  

| Param | Description |
| --- | --- |
| left | the left side of the comparison |
| right | the right side of the comparison |

<a name="Language.same"></a>

### Language.same(left, right) ⇒
Check if both left and right values match in content and type. This means a
<code>(double)1</code> is always different from <code>(int)1</code>.

<p>
This method contains the logic encapsulated by the comparison operator
defined in [ComparisonOperator#SAME](ComparisonOperator#SAME).
</p>

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: true if equals, false otherwise  

| Param | Description |
| --- | --- |
| left | the left side of the comparison |
| right | the right side of the comparison |

<a name="Language.notSame"></a>

### Language.notSame(left, right) ⇒
Check if both left and right values do not match both in content and type.
This means a <code>(double)1</code> is always different from
<code>(int)1</code>.

<p>
This method contains the logic encapsulated by the comparison operator
defined in [ComparisonOperator#SAME](ComparisonOperator#SAME).
</p>

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: true if equals, false otherwise  

| Param | Description |
| --- | --- |
| left | the left side of the comparison |
| right | the right side of the comparison |

<a name="Language.greaterThan"></a>

### Language.greaterThan(left, right) ⇒
Check if the given <code>left</code> value is <code>greater</code> than
the given <code>right</code> value.

<p>
This method contains the logic encapsulated by the comparison operator
defined in [ComparisonOperator#GREATER_THAN](ComparisonOperator#GREATER_THAN).
</p>

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: true if left is greater than right, false otherwise  

| Param | Description |
| --- | --- |
| left | the left side of the comparison |
| right | the right side of the comparison |

<a name="Language.greaterOrEquals"></a>

### Language.greaterOrEquals(left, right) ⇒
Check if the given <code>left</code> value is <code>greater</code> or
<code>equals</code> to the given <code>right</code> value.

<p>
This method contains the logic encapsulated by the comparison operator
defined in [ComparisonOperator#GREATER_OR_EQUALS](ComparisonOperator#GREATER_OR_EQUALS).
</p>

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: true if left is greater than right, false otherwise  

| Param | Description |
| --- | --- |
| left | the left side of the comparison |
| right | the right side of the comparison |

<a name="Language.lessThan"></a>

### Language.lessThan(left, right) ⇒
Check if the given <code>left</code> value is <code>less</code> than the
given <code>right</code> value.

<p>
This method contains the logic encapsulated by the comparison operator
defined in [ComparisonOperator#LESS_THAN](ComparisonOperator#LESS_THAN).
</p>

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: true if left is less than right, false otherwise  

| Param | Description |
| --- | --- |
| left | the left side of the comparison |
| right | the right side of the comparison |

<a name="Language.lessOrEquals"></a>

### Language.lessOrEquals(left, right) ⇒
Check if the given <code>left</code> value is <code>less</code> or
<code>equals</code> to the given <code>right</code> value.

<p>
This method contains the logic encapsulated by the comparison operator
defined in [ComparisonOperator#LESS_OR_EQUALS](ComparisonOperator#LESS_OR_EQUALS).
</p>

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: true if left is less than right, false otherwise  

| Param | Description |
| --- | --- |
| left | the left side of the comparison |
| right | the right side of the comparison |

<a name="Language.compare"></a>

### Language.compare(left, right, operator) ⇒
Performs a comparison against both given values returning <code>true</code>
if the equality operator is satisfied between both values or
<code>false</code> otherwise.

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: <code>true</code> if the equality operator is satisfied between
        both values or <code>false</code> otherwise  

| Param | Description |
| --- | --- |
| left | the left side of the comparison (may be null) |
| right | the left right of the comparison (may be null) |
| operator | the operator describing the type of comparison |

<a name="Language.getKwargs"></a>

### Language.getKwargs(exploded, extra, ignored) ⇒
Build the kwargs argument value (map) from both given exploded and additional
set of arguments ignoring all given parameter names.

**Kind**: static method of [<code>Language</code>](#Language)  
**Returns**: kwargs map ready for invocation  

| Param | Description |
| --- | --- |
| exploded | a map exploded while invoking the method (may be null) |
| extra | the additional (non-mapped) parameters passed as the kwargs |
| ignored | set of property names to be ignored |

<a name="Timer"></a>

## Timer(callback, delay, args) ⇒
Register a callback to be called forever every given number of
milliseconds. The callback function is called passing the given arguments
<p>
The Timer#forever() method calls a function or evaluates an expression at
specified intervals (in milliseconds).
</p>

<p>
The Timer#forever() method will continue calling the function until
Timer#stop() is called, or the window is closed.
</p>

Tip: 1000 ms = 1 second.

**Kind**: global function  
**Returns**: generated id used to stop the timer via Timer#stop(id)  

| Param | Description |
| --- | --- |
| callback | the function called every given number of milliseconds |
| delay | time in milliseconds until the callback function is called |
| args | the arguments to be passed when calling the callback function |


* [Timer(callback, delay, args)](#Timer) ⇒
    * [new Timer()](#new_Timer_new)
    * [.running](#Timer.running)
    * [.deferred](#Timer.deferred)
    * [.defer](#Timer.defer)
    * [.undefer(callback)](#Timer.undefer)

<a name="new_Timer_new"></a>

### new Timer()
Encapsulate time-utility functions into a single static class.

<p>
Timer utilities used to call a function every # of milliseconds making usage
of setInterval Javascript function but enabling functions to be called within
specified parameter values only once or forever and also stopping the
callback function from being called by using its function reference rather
than the setInterval's generated id.
</p>

<p>
Sinon (used for testing purposes) overwrite the global time-utilities and
there seems to be some problems with its own implementation. We keep a
reference of the native implementation as we don't want our API to be
affected by Sinon.
</p>

<ul class="import">
<li>import orion.utils.GUID;</li>
</ul>

<a name="Timer.running"></a>

### Timer.running
Storage for registered callback UIDs currently running

**Kind**: static property of [<code>Timer</code>](#Timer)  
<a name="Timer.deferred"></a>

### Timer.deferred
Deferred callback invoked in bulk.

**Kind**: static property of [<code>Timer</code>](#Timer)  
<a name="Timer.defer"></a>

### Timer.defer
Defer a callback to be invoked later in a bulk-sequence.

**Kind**: static property of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function being invoked whenever possible |

<a name="Timer.undefer"></a>

### Timer.undefer(callback)
Cancel a deferred callback function preventing it from being executed.

**Kind**: static method of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function being cancelled |

<a name="Timer"></a>

## Timer() ⇒
The Timer#stop(callback) method clears a timer set with the
Timer#forever(callback, delay) method.

<p>
The function value passed to Timer#forever(callback) is used as the
parameter for the Timer#stop(callback) method.
<p>

**Kind**: global function  
**Returns**: true if cleared, false otherwise  

* [Timer()](#Timer) ⇒
    * [new Timer()](#new_Timer_new)
    * [.running](#Timer.running)
    * [.deferred](#Timer.deferred)
    * [.defer](#Timer.defer)
    * [.undefer(callback)](#Timer.undefer)

<a name="new_Timer_new"></a>

### new Timer()
Encapsulate time-utility functions into a single static class.

<p>
Timer utilities used to call a function every # of milliseconds making usage
of setInterval Javascript function but enabling functions to be called within
specified parameter values only once or forever and also stopping the
callback function from being called by using its function reference rather
than the setInterval's generated id.
</p>

<p>
Sinon (used for testing purposes) overwrite the global time-utilities and
there seems to be some problems with its own implementation. We keep a
reference of the native implementation as we don't want our API to be
affected by Sinon.
</p>

<ul class="import">
<li>import orion.utils.GUID;</li>
</ul>

<a name="Timer.running"></a>

### Timer.running
Storage for registered callback UIDs currently running

**Kind**: static property of [<code>Timer</code>](#Timer)  
<a name="Timer.deferred"></a>

### Timer.deferred
Deferred callback invoked in bulk.

**Kind**: static property of [<code>Timer</code>](#Timer)  
<a name="Timer.defer"></a>

### Timer.defer
Defer a callback to be invoked later in a bulk-sequence.

**Kind**: static property of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function being invoked whenever possible |

<a name="Timer.undefer"></a>

### Timer.undefer(callback)
Cancel a deferred callback function preventing it from being executed.

**Kind**: static method of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function being cancelled |

<a name="Timer"></a>

## Timer(callback, delay, args) ⇒
Register a callback function to be called once within the given number of
milliseconds. The callback function is called only once and passes the
given arguments.

<p>
The Timer#once() method calls a function or evaluates an expression at
specified intervals (in milliseconds).
</p>
p>

Tip: 1000 ms = 1 second.

<p>
The Timer#once() method will call the given function only once.
</p>

**Kind**: global function  
**Returns**: generated id used to stop the timer via Timer#stopOnce(id)  

| Param | Description |
| --- | --- |
| callback | the function called once within the given number of            milliseconds |
| delay | time in milliseconds until the callback function is called |
| args | the arguments to be passed when calling the callback function |


* [Timer(callback, delay, args)](#Timer) ⇒
    * [new Timer()](#new_Timer_new)
    * [.running](#Timer.running)
    * [.deferred](#Timer.deferred)
    * [.defer](#Timer.defer)
    * [.undefer(callback)](#Timer.undefer)

<a name="new_Timer_new"></a>

### new Timer()
Encapsulate time-utility functions into a single static class.

<p>
Timer utilities used to call a function every # of milliseconds making usage
of setInterval Javascript function but enabling functions to be called within
specified parameter values only once or forever and also stopping the
callback function from being called by using its function reference rather
than the setInterval's generated id.
</p>

<p>
Sinon (used for testing purposes) overwrite the global time-utilities and
there seems to be some problems with its own implementation. We keep a
reference of the native implementation as we don't want our API to be
affected by Sinon.
</p>

<ul class="import">
<li>import orion.utils.GUID;</li>
</ul>

<a name="Timer.running"></a>

### Timer.running
Storage for registered callback UIDs currently running

**Kind**: static property of [<code>Timer</code>](#Timer)  
<a name="Timer.deferred"></a>

### Timer.deferred
Deferred callback invoked in bulk.

**Kind**: static property of [<code>Timer</code>](#Timer)  
<a name="Timer.defer"></a>

### Timer.defer
Defer a callback to be invoked later in a bulk-sequence.

**Kind**: static property of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function being invoked whenever possible |

<a name="Timer.undefer"></a>

### Timer.undefer(callback)
Cancel a deferred callback function preventing it from being executed.

**Kind**: static method of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function being cancelled |

<a name="Timer"></a>

## Timer() ⇒
The Timer#stopOnce(callback) method clears a timer set with the
Timer#once(callback, delay) method.

<p>
The callback value passed to Timer#once(callback) is used as the
parameter for the Timer#stopOnce(callback) method.
<p>

**Kind**: global function  
**Returns**: true if cleared, false otherwise  

* [Timer()](#Timer) ⇒
    * [new Timer()](#new_Timer_new)
    * [.running](#Timer.running)
    * [.deferred](#Timer.deferred)
    * [.defer](#Timer.defer)
    * [.undefer(callback)](#Timer.undefer)

<a name="new_Timer_new"></a>

### new Timer()
Encapsulate time-utility functions into a single static class.

<p>
Timer utilities used to call a function every # of milliseconds making usage
of setInterval Javascript function but enabling functions to be called within
specified parameter values only once or forever and also stopping the
callback function from being called by using its function reference rather
than the setInterval's generated id.
</p>

<p>
Sinon (used for testing purposes) overwrite the global time-utilities and
there seems to be some problems with its own implementation. We keep a
reference of the native implementation as we don't want our API to be
affected by Sinon.
</p>

<ul class="import">
<li>import orion.utils.GUID;</li>
</ul>

<a name="Timer.running"></a>

### Timer.running
Storage for registered callback UIDs currently running

**Kind**: static property of [<code>Timer</code>](#Timer)  
<a name="Timer.deferred"></a>

### Timer.deferred
Deferred callback invoked in bulk.

**Kind**: static property of [<code>Timer</code>](#Timer)  
<a name="Timer.defer"></a>

### Timer.defer
Defer a callback to be invoked later in a bulk-sequence.

**Kind**: static property of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function being invoked whenever possible |

<a name="Timer.undefer"></a>

### Timer.undefer(callback)
Cancel a deferred callback function preventing it from being executed.

**Kind**: static method of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function being cancelled |

<a name="XMLs"></a>

## XMLs()
XML related components and utilities

<ul class="import">
<li>import orion.utils.Strings;</li>
</ul>

**Kind**: global function  


* [XMLs()](#XMLs)
    * [.get(node, name)](#XMLs.get) ⇒ <code>XMLNode</code>
    * [.attr(node, name)](#XMLs.attr) ⇒ <code>String</code>

<a name="XMLs.get"></a>

### XMLs.get(node, name) ⇒ <code>XMLNode</code>
Retrieve the first element by tag name within the given node

**Kind**: static method of [<code>XMLs</code>](#XMLs)  
**Returns**: <code>XMLNode</code> - the XML node extracted  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>XMLNode</code> | the XML node |
| name | <code>String</code> |  |

<a name="XMLs.attr"></a>

### XMLs.attr(node, name) ⇒ <code>String</code>
Look up for an attribute's value of the given node

**Kind**: static method of [<code>XMLs</code>](#XMLs)  
**Returns**: <code>String</code> - the node's value  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>XMLNode</code> | the XML node |
| name | <code>String</code> |  |

<a name="jQuery"></a>

## .jQuery(clazz, name) ⇒
Install the given <code>Class</code> as a jQuery plug-in using either
the <code>Class#getAlias()</code> or <code>Class#getSimpleName</code>
as the plugin's name, exposing it using the following jQuery stack
function:

<pre>
For jQuery.install(Grid, defaults) the plug-in can be accessible via: 

jQuery(&quot;.data-grid&quot;).gridPlugin({ ... } );
</pre>

<p style="color : red">
To use this function you must be sure to have jQuery scripts loaded.
</p>

**Kind**: static function  
**Returns**: installer  

| Param | Description |
| --- | --- |
| clazz | the class being installed |
| name | the plugin name being installed |


* [.jQuery(clazz, name)](#jQuery) ⇒
    * [.overridden](#jQuery.overridden)
    * [.empty](#jQuery.empty)
    * [.asSelector(cssClass)](#jQuery.asSelector) ⇒ <code>String</code>
    * [.plugin(name, Class, initial)](#jQuery.plugin) ⇒
    * [.is(value)](#jQuery.is) ⇒

<a name="jQuery.overridden"></a>

### jQuery.overridden
Storage for overridden methods within jQuery

**Kind**: static property of [<code>jQuery</code>](#jQuery)  
<a name="jQuery.empty"></a>

### jQuery.empty
Empty jQuery stack

**Kind**: static property of [<code>jQuery</code>](#jQuery)  
<a name="jQuery.asSelector"></a>

### jQuery.asSelector(cssClass) ⇒ <code>String</code>
Translate the given CSS class to a valid CSS/jQuery selector transforming
it to be used as a jQuery selector.

**Kind**: static method of [<code>jQuery</code>](#jQuery)  
**Returns**: <code>String</code> - jQuery selector for all the given classes  

| Param | Type | Description |
| --- | --- | --- |
| cssClass | <code>String</code> | the CSS class we are looking for (may include            multiple separate by space) |

<a name="jQuery.plugin"></a>

### jQuery.plugin(name, Class, initial) ⇒
Read/write access to a jQuery plugin

**Kind**: static method of [<code>jQuery</code>](#jQuery)  
**Returns**: installed plugin  

| Param | Description |
| --- | --- |
| name | the plugin name being installed |
| Class | the class being installed |
| initial | the initial configuration |

<a name="jQuery.is"></a>

### jQuery.is(value) ⇒
Check if the given object is a jQuery object

**Kind**: static method of [<code>jQuery</code>](#jQuery)  
**Returns**: true if a jQuery object, false otherwise  

| Param | Description |
| --- | --- |
| value | the possible jQuery object |

