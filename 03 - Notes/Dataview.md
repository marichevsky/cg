---
share_link: https://share.note.sx/2v2i64d8#WJzVTkao7Rg96hePooAyJRXggkroHl7XiOnUOr+EHJ8
share_updated: 2024-09-04T21:21:08+03:00
cssclasses:
  - hide_properties
---

#### **3 вида отображения информации:**
**TABLE** - Таблица
**LIST** - Список
**TASK** - Задача

#### **Язык Dataview**
- **file.name** - название файла
- **file.size** - размер файла (в байтах)
<br>

- **FROM "Journals/Attachements"** - путь, откуда брать базу с учетом с сабфолдером
- **FROM [[-50 History MOC]]** - брать базу с Incoming links на указанный файл
- **FROM outgoing([[-50 History MOC]])** - брать базу с Outgoing links на указанный файл
- **FROM #example ** - составить базу по тегу
- **FROM #example AND #example ** - делает выборку, включающую оба тега
- **FROM #example OR #example ** - делает выборку, включающую один из тегов
- **FROM -#Daily**  - делает выборку из всего, исключая выбранный тег
<br>

- **WHERE file.name = "Example"** - фильтр по конкретному названию файла
- **WHERE file.name != "Example"** - исключить заметку с конкретным названия из списка
- **WHERE contains(author, "Example")** - поиск по конкретной характеристике
- **WHERE length(file.tags)=0** - отобразить все заметки, у которых нет тега
<br>

- **SORT file.size asc** - сортировать по конкретной характеристике от меньшего к большему
- **SORT file.size desc** - сортировать по конкретной характеристике от большего к меньшему
- **SORT file.cday desc** - сортировать по дате создания файла
#### **Нейминг**

author AS Author - фильтрация происходит по ключу "author", но в таблице будет отображено "Author"

---
### Ссылка на источник:
```link-bookmark
url:https://blacksmithgu.github.io/obsidian-dataview/
title:Dataview
description:
coverImg:assets/obsidian.png
logo:assets/obsidian.png
```





