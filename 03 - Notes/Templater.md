# Templater Syntax

### Dates

<% tp.date.now("DD-MM-YYYY") %> - дата в формате "30-08-2024"
<% tp.date.now("Do MMMM YYYY") %> - дата в формате "30th August 2024" 
<% tp.date.tomorrow("Do MMMM YYYY") %> - дата следующего дня
<% tp.date.yesterday("Do MMMM YYYY") %> - дата предыдущего дня
<% tp.date.now("DD-MM-YYYY", "P-1M") %> - дата месяц назад

### Files

<% tp.file.creation_date() %> - время создания файла
<% tp.file.last_modified_date() %> - время редактирования файла
<% tp.file.folder() %> - папка, в которой лежит файл

### Web

<% tp.web.daily_quote() %> - случайная цитата
