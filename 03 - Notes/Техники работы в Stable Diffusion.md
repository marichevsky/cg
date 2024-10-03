>[!note]- Апскейл через img2img
Создаём изображением, кидаем в img2img, увеличиваем разрешением, ставим CFG Scale на 0.4 и апскейлим.

>[!note]- Улучшаем лицо
Кидаем лицо в Inpaint, замазываем все черты лица с отступом на лбу и на подбородке. Выставляем такие настройки.
![[15 Pasted image 20240902134536.png]]

>[!note]- Улучшаем зрачки
[https://www.youtube.com/watch?v=qAcmQb_oZIk&list=PL05SB3rBbUsprkMgH3yDV12MuuIbO5KEq&index=59](https://www.youtube.com/watch?v=qAcmQb_oZIk&list=PL05SB3rBbUsprkMgH3yDV12MuuIbO5KEq&index=59)

>[!note]- Большое и широкоформатное изображение
Пишем нужный нам prompt, например:
_redhead girl, snow, forest_
DPM++ 2M Karras, 640 x 640, Steps: 22, Scale: 5.5
[Generate]
Убеждаемся, что нужный нам объект(ы) не вышли за левый и правый края
_(в нашем случае redhead должна быть в центре)_
Нажимаем Send to Inpaint
Закрашиваем маской зону внутри изображения и не трогаем левый и правый края
_(в нашем случае – это redhead girl)_
Убираем из prompt всё, что закрасили маской
_(в нашем случае – это redhead girl)_
Указываем
_Resize and fill_
и
_Inpaint not masked_
Width: 1144, Height: 640
DPM++ 2M Karras, Steps: 22, Scale: 5.5, Denoising strength: 0.8
[Generate]
Картинка расширилась, сохранив в центре нужные нам объекты
_(в нашем случае – это redhead girl)_
Нажимаем Send to img2img
Prompt оставляем пустым
_(если ваше изображение имеет идею разглядывания деталей, оставьте в prompt одно слово: detailed)_
Переключаем с
_Resize and fill_
обратно на
_Just resize_
Ставим Width: 800, Height: 800
(Это Tiling. Как он работает ➜
[](https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbXV5WEF1R0FCLUQzcWh1YWxCdy1rRWg4WXpoUXxBQ3Jtc0ttVHF2SjI2MXNFR2Y2bi1GdkhYU2ZydGhnd2dBdGdHYlUwRmd5elJwd1FTTDRuaE5YaG8xelFXQ0ppNVFIR21BNm9EUGctZnZzaXdyZ0l2bTEwbUxnWUFmcFlCVFdKcnlnWlBkR1UtTUdFVjNIWF93bw&q=https%3A%2F%2Fboosty.to%2Fxpuct%2Fposts%2F7798c4e5-2d14-47c6-a8b6-09b659863b9a%3Fshare%3Dpost_link%29&stzid=Ugwps9gzhKeglS8X9d94AaABAg)[https://boosty.to/xpuct/posts/7798c4e5-2d14-47c6-a8b6-09b659863b9a?share=post_link](https://boosty.to/xpuct/posts/7798c4e5-2d14-47c6-a8b6-09b659863b9a?share=post_link))
DPM++ 2M Karras, Steps: 22, Scale: 5.5, Denoising strength: 0.33 до 0.44 (чаще 0.4)
В скриптах (в самом низу) выбираем
_SD Upscale_
Параметры SD Upscale: Tile overlap: 192, Scale factor: 3, Upscaler: 4x_MNKD-Siax_200k (
[](https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbUprU0lxaXBsVWhBV05GRTJZWmRmckRIYzJhd3xBQ3Jtc0tuNjJrb0hjeHNjaTZSSlFFc3Z6UXVEdUF0WUFMWE5TaEFhN01ac05DX1FycnNBbFBRS3FzUUNBdzRyUkZyMTZnY01DSHRsR0lsZF9tZ0JxN3R3WG1KZTJjS0FOZDZhbmpYYkMwdHZkSmx1N3VzQ3FTQQ&q=https%3A%2F%2Ft.me%2Fwin10tweaker%2F308%29&stzid=Ugwps9gzhKeglS8X9d94AaABAg)[https://t.me/win10tweaker/308](https://t.me/win10tweaker/308))
[Generate]
Мы получили 4K изображение (3432 x 1920)
Пишем в prompt в обязательном порядке только одно слово: detailed
Переходим на вкладку Inpaint (именно на вкладку) и закрываем на крестик прошлое изображение
Перетягиваем сгенерированное изображение справа налево в зону Inpaint
(благодаря такому переносу у нас сохраняется Tiling 800 x 800
Переключаем
_Inpaint not masked_
обратно на
_Inpaint masked_
Переключаем режим на Only masked
Закрашиваем маской все зоны ПО ОДНОЙ, которым нужно вытянуть детали
_(в нашем случае – закрашиваем сначала только лицо redhead girl)_
DPM++ 2M Karras, Steps: 22, Scale: 5.5, Denoising strength: от 0.33 до 0.44 (чаще 0.4)
_(если работаем с лицами, как в нашем примере, то Denoising strength: 0.6 и убираем пока слово detailed)_
_(если закончили с лицом / лицами, то возвращаем в prompt слово detailed и для объектов ставим Denoising strength: 0.4)_
(с лицом можно применять стили Natural skin:
[](https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbmNydmVOMnFFNnA4NTVudHVVOEt4enBIWlM4Z3xBQ3Jtc0ttdnNqX21HTll0blB5TmpSSlE2Z3RsOXNQRmU3OU9naHQzc0o3T2NXMnRTODkwejM3cHRaMFpieUFHNHEzYzd2WUEwdXY5MGFFcjVkekZ4STVBeFgxaXBTU3BBQmRmSVhGS2VycWFtNGJUUXNOSFV6RQ&q=https%3A%2F%2Fboosty.to%2Fxpuct%2Fposts%2F0b98e80a-147a-467f-8477-dffebbd72aa7%3Fshare%3Dpost_link%29&stzid=Ugwps9gzhKeglS8X9d94AaABAg)[https://boosty.to/xpuct/posts/0b98e80a-147a-467f-8477-dffebbd72aa7?share=post_link](https://boosty.to/xpuct/posts/0b98e80a-147a-467f-8477-dffebbd72aa7?share=post_link))
В самом низу НЕ ЗАБЫВАЕМ выключить скрипт SD Upscale
[Generate]
Закрываем в Inpaint изображение (на крестик) и перетягиваем туда сгенерированное изображение
Снова закрашиваем И СНОВА – НЕ ЖАДНИЧАЯ по частям (потому что Tiling)
Не забываем смотреть, что написано в prompt. Там либо точно описанный объект, который замазали, либо detailed
[Generate]
Повторяем процедуру Inpaing (предыдущий абзац) пока не улучшим все детали, где нужно
Нас должно ПОЧТИ устраивать качество. Почти – это 80% и выше. Мы должны быть ПОЧТИ довольны.
Переходим на вкладку img2img и закрываем изображение, которое там было.
Перетягиваем сгенерированное изображение справа налево в эту зону img2img
_(так мы снова не потеряли введённые нами 800 x 800)_
Heun, Steps: 22, Scale: 5.5, Denoising strength: 0.1
В скриптах (в самом низу) снова выбираем
_SD Upscale_
Параметры SD Upscale: Tile overlap: 192, Scale factor: 2, Upscaler: 4x_MNKD-Siax_200k
[Generate]
Мы получили 7K изображение!
[[Photoshop]]:
Отправляем изображение в [[Photoshop]], исправляем и редактируем всё, что нужно.
Когда закончили, сдублируйте итоговое изображение (слой) и сделайте по нему двойной клик
Снимаете галочку с канала R, нажимаете OK
Приближаемся (zoom) как можно близко и нажимает на клавиатуре Ctrl + стрелка влево
Таким образом мы имитируем хроматические аберрации (дефекты линзы) и скрываем проблемы резкости и немного размытости
Сидя на этом слое убавляем его непрозрачность до 25%. Можно просто набрать цифрами на клавиатуре 25.
Делаем зрачки и улучшение деталей, как написано показано в двух видео тут:
[](https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbmtXY0l1d3AyWVVtTnJ4dXhHMDBjZC1YLVY1QXxBQ3Jtc0tsbFdtMlBNUVc1S2dYeGNRMHJleXZ4ZnVJajdKb0ZhYXNCS2VSbG1XenJ2OS1ycW9aeVRoVXNJdzBrZ0NvU0JEMEpRS2gxeG1md1l5Vjd3MHZLbFVCdUxnUVcxTXZ6YUNOZkNpZmpNN1Fsc0c5ZEdJSQ&q=https%3A%2F%2Fboosty.to%2Fxpuct%2Fposts%2Ff6816f5b-e64e-43f5-8318-7b179350d795%3Fshare%3Dpost_link&stzid=Ugwps9gzhKeglS8X9d94AaABAg)[https://boosty.to/xpuct/posts/f6816f5b-e64e-43f5-8318-7b179350d795?share=post_link](https://boosty.to/xpuct/posts/f6816f5b-e64e-43f5-8318-7b179350d795?share=post_link)
Делаете цветокоррекцию, если нужно (кривые, цветовой баланс, выборочная коррекция цвета и т.д.)
Добавляем шум 1% (галочка на монохромный)
Копируем итоговое изображение в буфер
Меняем размер изображения (Ctrl + Alt + I) на 3840 x 2160
Вставляем из буфера то, что скопировали и трансформируете (Ctrl + T), чтобы вписать изображение
(ДА ИМЕННО ТАК)
Готовченко

>[!note]- Раскрашивание ч/б изображения
[https://www.youtube.com/watch?v=H53C4qSjjgM&list=PL05SB3rBbUsprkMgH3yDV12MuuIbO5KEq&index=61](https://www.youtube.com/watch?v=H53C4qSjjgM&list=PL05SB3rBbUsprkMgH3yDV12MuuIbO5KEq&index=61)