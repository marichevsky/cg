**Плюсы способа:** достаточно реалистичные отражения.

**Минусы способа:** сильная просадка по FPS.

Создаем **Scene Capture Cube** - камера, которая пишет все в Cubemap.

Далее создаем текстуру **Cube Render Target**. Закидываем ее в Texture Target камеры.

В нужном материале подключаем эту текстуру в Base Color, а в UV текстуры Reflection Vector.

Камеру помещаем в нужный объект.

![[68 Untitled 5.png|68 Untitled 5.png]]

Получаем вот такой материал с отражениями

![[43 Untitled 1 4.png|43 Untitled 1 4.png]]

Аналогично ей делается и плоское отражение, только вместо **Scene Capture Cube** используем **Scene Capure 2D**, а текстуру вместо **Cube Render Target** берём **Render Target**.