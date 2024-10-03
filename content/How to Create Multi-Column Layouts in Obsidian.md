> [!link] Источник
> https://readmedium.com/how-to-create-multi-column-layouts-in-obsidian-90a69cdd921f

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*kv6AwK6-y2gCzGbNdQ_rsw.jpeg)

Obsidian is a markdown-based editor and it does not have any support for multiple-column layout.

But thanks to the Obsidian community, there are lots of options available.

In this article, we’ll talk about creating multiple-column layouts in Obsidian with the help of [modular CSS layout](https://github.com/efemkay/obsidian-modular-css-layout).

Below is a screenshot from the Life OS vault I created at the beginning of the year. This beautiful look is all possible with the help of multi-column layouts.

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*GEGPYP1SQzVe30_BZM25cA.png)

You can watch the setup video [here](https://www.youtube.com/watch?v=8rCveomZHDQ&t=1503s).

Doesn’t it look beautiful?

Of course, it does.

In this article, we’ll learn how you can create multi-column layouts in your Obsidian notes.

### Modular CSS Layout for Obsidian

[Obsidian Modular CSS](https://github.com/efemkay/obsidian-modular-css-layout) layout by [Faiz Khuzaimah](https://github.com/efemkay) is a CSS repository with CSS layout hacks. It has the following three CSS snippets.

- MCL Gallery Cards: It lets you create Image gallery
- MCL Multi Column: It lets you create multi-column layout in your notes
- MCL Wide Views: It provides support for full-width page per note basis

We’ll only talk about multi-column CSS in this article

### Adding CSS snippets

Adding CSS snippets to your vault is easy. Here’s a [step-by-step guide](https://help.obsidian.md/Extending+Obsidian/CSS+snippets).

Download the MCL multi-column CSS file from the repository and a**dd it to your vault.**

Once you add it. **Enable the CSS snippet.**

Now let’s learn how you can create the multi-column layout with this MCL multi column CSS.

### Multi-Columns with Callouts

There are a few different ways to create the multi-column layout. Let’s first talk about creating one with callouts.

For that, first, you need to create a multicolumn callout. It is a custom callout type created with the CSS.

Then you need to create sub callout under the `multi-column`callout.

> [!multi-column]
>
>> [!note]+ Work
>> your notes or lists here. using markdown formatting
>
>> [!warning]+ Personal
>> your notes or lists here. using markdown formatting
>
>> [!summary]+ Charity
>> your notes or lists here. using markdown formatting

**Note:** Two callouts should be separated by leaving a line. The line separating callouts should use only 1 angle bracket. (>)

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*HydF9mWKQACrMPgJ-MTR8Q.png)

You can also nest callout under the sub-callouts.

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*PR8g5s0ZO1rVMy33I21x5Q.png)

Easy, peasy.

### Float Callout

Float callout allows you to create a side node or info box either to the right or either to the left side of the main note.

Here’s how to create a float callout.

> [!info|left]
> Addition note to the main article

Content of the main article

Add left or right to the regular callout. And make sure the callout is above the content you want to have it wrapped around.

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*Jz1cNLDGF2-pjv25XM0HLw.png)

You can also adjust the width of the callout to suit your needs. These 3 width options are available.

- **-small:** default width 300px
- **-medium:** default width 400px
- **-large:** default width 600px

### Blank Callout

The blank callout is a custom callout that removes the decoration around it. It provides an invisible container for the callout.

> [!multi-column]
>
>> [!note]+ Work
>> your notes or lists here. using markdown formatting
>>> [!note]+ Work
>>> your notes or lists here. using markdown formatting
>> your notes or lists here. using markdown formatting
>
>> [!blank]+ Personal
>> your notes or lists here. using markdown formatting
>
>> [!summary]+ Charity
>> your notes or lists here. using markdown formatting

The middle callout here is a blank callout.

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*aCnEynQ7g8UFmgE27XYZqg.png)

This can be useful in cases where you want to have an invisible container for the embedded content.

### List Column, List Grid, & List Card

List layout allows you to create multi-column layout using unordered list.

You can use `#mcl/list-column` on the top-level list to create one.

List grid callout allows you to create multiple columns and multiple rows using unordered list.

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*T3k13tiixOqnZ6pmxJAhzQ.png)

You can do this simply by changing the hashtag in the unordered list from `#mcl-list-column` to `#mcl-list-grid`.

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*RGBEj0jPmixKzRuqUT5lSg.png)

List card is similar to the grid layout but it has some extra customization to give it card like look.

Use `#mcl-list-card` on the top-level list item for this.

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*kRoEkaXgFA4OguvPLWcSuw.png)

### Conclusion

These are some basics on how you can create multiple column layouts in Obsidian with the help of Obsidian modular CSS layout.

You can explore more features from this [documentation section](https://efemkay.github.io/obsidian-modular-css-layout/), like width control and using Cssclasses.

Multi-column CSS from modular CSS layout is a great way to enhance your experience in Obsidian. This can help you to create your notes better.

It can be useful, especially in cases where you want to create homepage setups or dashboard setups.

