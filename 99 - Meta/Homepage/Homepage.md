---
banner: "[[Hypergrids.jpg]]"
banner_icon: 🏡
banner_lock: true
banner_y: 0.151
cssclasses:
  - homepage
banner_x: 0.5
---

>[!quote|right] Случайная цитата
>`dice:[[Цитаты]]` 

⠀

[![[Daily Note_v5.svg|150]]](<03-10-2024 Daily>)%%embed%%

<br>


```dataviewjs
// The date format for your periodic/daily notes
const dateFormat = 'DD-MM-YYYY'
// Get the current file
const file = app.vault.getAbstractFileByPath(dv.current().file.path)
// Get the text contents of the current file
let contents = await app.vault.read(file)
// Update any text on the line before %%embed%% to be an embedded link to today's NOTE
contents = contents.replace(/^.*?%%embed%%$/m, '[![[Daily Note_v5.svg|150]]](<' + moment().format(dateFormat) + ' Daily>)%%embed%%')
// Save the new contents back to the current file
await app.vault.modify(file, contents)
```


### **<font color="#54B6F8">MOCS</font>**
```dataview
TABLE WITHOUT ID
  slice(rows.file.link, 0 * aThird, 1 * aThird) as "First #_hide_header",
  slice(rows.file.link, 1 * aThird, 2 * aThird) as "Second",
  slice(rows.file.link, 2 * aThird, 3 * aThird) as "Third",
  slice(rows.file.link, 3 * aThird) as "Last"
FROM "01 - Maps of Content"
LIMIT 100
GROUP BY true
FLATTEN ceil(length(rows)/4) as aThird
```
---
<br>

> [!multi-column]
> 
>> [!note]+ Последние созданные
>>```dataview
>>TABLE file.ctime AS "Last Created #_hide_header"
>>SORT file.ctime DESC
>>LIMIT 5
>>```
>
>> [!database]+ Последние отредактированные
>>```dataview
>>TABLE file.mtime AS "Last Modified #_hide_header"
>>WHERE file.name != "Homepage"
>>SORT file.mtime DESC
>>LIMIT 5
>>```

