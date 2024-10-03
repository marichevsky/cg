---
Ссылка: https://css-tricks.com/almanac/selectors/a/attribute/
---
DigitalOcean provides cloud products for every stage of your journey. Get started with [$200 in free credit!](https://try.digitalocean.com/css-tricks/?utm_medium=content_acq&utm_source=css-tricks&utm_campaign=global_brand_ad_en&utm_content=conversion_prearticle_everystage)

There are lots of ways you can select elements in [[CSS]]. The most basic selection is by tag name, like `p { }`. Almost anything more specific than a tag selector uses attributes — `[class](https://css-tricks.com/almanac/selectors/c/class/)` and `[ID](https://css-tricks.com/almanac/selectors/i/id/)` both select on those attributes on HTML elements. But `class` and `ID` aren’t the only attributes developers can select. We can use _any_ of an element’s attributes as selectors.

Attribute selection has a special syntax. Here’s an example:

```css
a[href="https://css-tricks.com"] { color: #E18728; }
```

That’s an **exact match** selector that will only select links with the exact `href` attribute value of “https://css-tricks.com”.

### The Seven Different Types

Attribute selectors are case-sensitive by default (see [case-insensitive matching](https://css-tricks.com/almanac/selectors/a/attribute/#case-insensitive-matching) below), and are written inside brackets `[]`.

There are seven different types of matches you can find with an attribute selector, and the syntax is different for each. Each of the more complex attribute selectors build on the syntax of the exact match selector — they all start with the attribute name and end with an equals sign followed by the attribute value(s), usually in quotes. What goes between the attribute name and equals sign is what makes the difference among the selectors.

```css
[data-value] { /* Attribute exists */ } [data-value="foo"] { /* Attribute has this exact value */ } [data-value*="foo"] { /* Attribute value contains this value somewhere in it */ } [data-value~="foo"] { /* Attribute has this value in a space-separated list somewhere */ } [data-value^="foo"] { /* Attribute value starts with this */ } [data-value|="foo"] { /* Attribute value starts with this in a dash-separated list */ } [data-value$="foo"] { /* Attribute value ends with this */ }
```

**Value contains:** attribute value contains a term as the only value, a value in a list of values, or as part of another value. To use this selector, add an asterisk (\*) before the equals sign. For example, `img[alt*="art"]` will select images with the alt text “abstract _art_” and “athlete _starting_ a new sport”, because the value “art” is in the word “starting”.

**Value is in a space-separated list:** value is either the only attribute value, or is a whole value in a space-separated set of values. Unlike the “contains” selector, this selector will not look for the value as a word fragment. To use this selector, add a tilde (~) before the equals sign. For example, `img[alt~="art"]` will select images with the alt text “abstract _art_” and “_art_ show”, but not “athlete starting a new sport” (which the “contains” selector _would_ select).

**Value starts with:** attribute value starts with the selected term. To use this selector, add a caret (^) before the equals sign. Don’t forget, case-sensitivity matters. For example, img\[alt^=”art”\] will select images with the alt text “art show” and “artistic pattern”, but not an image with the alt text “Arthur Miller” because “Arthur” begins with a capital letter.

**Value is first in a dash-separated list:** This selector is very similar to the “starts with” selector. Here, the selector matches a value that is either the only value or is the _first_ in a dash-separated list of values. To use this selector, add a pipe character (|) before the equals sign. For example, `li[data-years|="1900"]` will select list items with a `data-years` value of “1900-2000”, but not the list item with a `data-years` value of “1800-1900”.

**Value ends with:** attribute value ends with the selected term. To use this selector, add a dollar sign ($) before the equals sign. For example, `a[href$="pdf"]` selects every link that ends with .pdf.

**A note about quotes:** You can go without quotes around the value in some circumstances, but the rules for selecting without quotes are inconsistent cross-browser. Quotes always work, so if you stick to using them you can be sure your selector will work.

Fun fact: the values are treated as strings, so you don’t have to do any fancy escaping of characters to make them match, as you would if you used unusual characters in a class or ID selector.

```css
[class="(╯°□°）╯︵ ┻━┻"]{ color: red; font-weight: bold; }
```

### Case-insensitive matching

Case-insensitive attribute selectors are part of the [[CSS]] Working Group’s [Selectors Level 4](https://www.w3.org/TR/selectors-4/#attribute-case) specification. As mentioned above, attribute value strings are by default case-sensitive, but can be changed to case-insensitive by adding `i` just before the closing bracket:

```css
[attribute="value" i] { /* Styles here will apply to elements with: attribute="value" attribute="VaLuE" attribute="VALUE" ...etc */ }
```

Case-insensitive matching could be really handy for targeting attributes holding unpredictable, human-written text. For example, suppose you were styling a speech bubble on a chat app and wanted to add a “waving hand” to any messages with the text “hello” in some form. You could do so with only [[CSS]], using a case-insensitive matcher to catch all possible variations:

### Combining them

You can combine an attribute selector with other selectors, like tag, class, or ID.

```css
div[attribute="value"] { /* style rules here */ } .module[attribute="value"] { /* style rules here */ } #header[attribute="value"] { /* style rules here */ }
```

Or even combine multiple attribute selectors. This example selects images with alt text that includes the word “person” as the only value or a value in a space separated list, **and** a `src` value that includes the value “lorem”:

```css
img[alt~="person"][src*="lorem"] { /* style rules here */ }
```

### Attribute Selectors in JavaScript and jQuery

Attribute selectors can be used in jQuery just like any other [[CSS]] selector. In JavaScript, you can use attribute selectors with `document.querySelector()` and `document.querySelectorAll()`.

### Related

-   [class](https://css-tricks.com/almanac/selectors/c/class/)
-   [ID](https://css-tricks.com/almanac/selectors/i/id/)

### More Information

-   [The Skinny on Attribute Selectors](https://css-tricks.com/attribute-selectors/)
-   [Attribute selectors at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
-   [Attribute selectors in the W3C CSS spec](http://www.w3.org/TR/css3-selectors/#attribute-selectors)
