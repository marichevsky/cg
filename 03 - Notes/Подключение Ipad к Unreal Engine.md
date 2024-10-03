1) Включить плагины Media IO Framework, Take Recorder, Virtual Production Utilities и Virtual Camera.

2) В World Settings выбрать VirtualCameraGameMode.

3) В Project Settings в Engine → Input включить галку Always Show Touch Interface. А в Editor Preferences в Play найти New Viewport Resolution и выбрать своё устройство.

---

Альтернативный вариант старта - создать Blank проект из категории Film/Video and Live Events

---

1) В Project Settings вводим Unicast и в Unicast Endpoint вводим свой IP (узнать IP можно, введя ipconfig в cmd)

2) Тут же идём в Engine → Rendering → Default Settings, там внизу нажимаем стрелочку и выставляем FBPF на 8bit RGBA

3) Создаём VirtualCamera2 Actor, создаётся блюпринт, в нём находим Vcam (Inherited), раскрываем Output Providers, включаем “Is active”

4) Идём в Window → Virtual Production → Live Link, добавляем +Source → Message Bus Source, выбираем своё устройство.

5) Возвращаемся в Vcam (Inherited), в Live Link Subject выбираем своё устройство, ставим выше галочку Enabled.