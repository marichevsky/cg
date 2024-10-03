>[!note]- **Spawning**
> **Spawn Rate** - модуль равномерного спавна частиц, в котором указываем сколько частиц хотим спавнить в данный момент

>[!note]- **Attribute Reader**
> **Sample Particles From Other Emitter** - настройки спавна частиц по частицам с другого эмиттера

>[!note]- **Audio**

>[!note]- **Beam**
> **Beam Emitter Setup** - модуль риббона от точки до точки  
> 
> **Spawn Beam** - заспавнить модуль бима  
> 
> **Update Beam** - опциональный модуль для анимации бима
> 
> **Scale Beam Width** - умножение ширины бима на число
 
>[!note]- **Camera**
> **Camera Offset** - позволяет сдвигать частицы относительно камеры

>[!note]- **Collision**
> **Collision** - включить коллизию

>[!note]- **Color**
> **Color** - модуль цвета
> 
> **Scale Color** - модуль умножения цвета на определенные значения

>[!note]- **Constraints**

>[!note]- **Debug**

>[!note]- **Default**

>[!note]- **Distance Fields**

>[!note]- **Events** 
> **Generate Location Event** - создаёт ивент позиции партикла  
> 
> **Generate Death Event** - создаёт ивент смерти партикла  
> 
> **Generate Collision Event** - создаёт ивент коллизии партикла
> 
> **Recieve Location Event** - получает информацию о Location на другом эмиттере  
> 
> **Recieve Death Event** - получает информацию о смерти партикла 
>  
> **Recieve Collision Event** - получает информацию о коллизии частиц эмиттера
   
>[!note]- **Export**

>[!note]- **Emitter**
> **Emitter State** - задаёт время жизни эмиттера, его поведение

>[!note]- **Forces** 
> **Solve Forces and Velocity** - обязательный модуль для движущихся частиц. Считает все силы и скорости, действующие на частицы и создает результирующее движение. 
> 
> **Drag** - затормаживает частицы. Работает вне зависимости положения в иерархии. 
> 
> **Acceleration Force** - модуль ускорения (отличается от Gravity тем, что учитывает массу) 
> 
> **Gravity Force** - добавить гравитацию (отличается от Acceleration тем, что игнорирует массу) 
> 
> **Wind Force** - добавить ветер (отличается от Acceleration и Gravity тем, что у него есть Wind Speed Scale и Air Resistance) 
> 
> **Limit Force** - ограничивает примененную к частицам силу 
> 
> **Curl Noise Force** - ускорение частиц по рандомному нойзу
> 
> **Line Attraction Noise** - линия, притягивающая/отталкивающая частицы 
> 
> **Spring Force** - точка, притягивающая частицы как пружина. Если двигать эмиттер по позиции туда-сюда, частички будут пружинить.
> 
> **Point Attraction Force** - позволяет задать частицам ускорение в сторону точки. Позволяет задать Kill Radius и партиклы будут всасываться в определенную точку и пропадать в ней.
> 
> **Point Force** - тот же Point Attraction Force, только с меньшим кол-вом настроек. 
> 
> **Vortex Force** - задать вращающую силу частицам.
> 
> **Solve Rotational Forces and Velocity** - необходим для работы Add Rotational Velocity и Mesh Initial Force 
> 
> **Mesh Initial Force** - задаёт вращение частичкам-мешам
 
>[!note]- **Initialization**
> **Initialize Particle** - модуль частиц, их размер, цвет, поворот, флип материала и тд.
> 
> **Initialize Ribbon** - модуль трейлов, их лайфтайм, позиция, масса, цвет, ширина

>[!note]- **Kill**
> **Kill Particles** - убивает частицы. Внутри только буль “Kill Particles”. Подразумевает написание своего правила для убийства частиц.
> 
> **Kill Particles in Volume** - убивает частицы в определенном волюме

>[!note]- **Lifetime**
> **Particle State** - позволяет выключить умирание частиц, сделать луп жизни частиц

>[!note]- **Location**
> **Shape Location** - форма эмиттера по фигуре (сфера, торус, кубик и тд), ее разворот, дистрибушн. Так же тут задаётся расположение только по границе объекта.
> 
> **Static Mesh Location** - форма эмиттера по мешу
> 
> **Skeletal Mesh Location** - форма эмиттера по скелетал мешу
> 
> **Rotate Around Point** - закручивает частицы вокруг точки, аналог Vortex
> 
> **Grid Location** - спавнит частички по гриду
 
>[!note]- **Mask**

>[!note]- **Mass**

>[!note]- **Material**
> **Dynamic Material Parameters** - задать кастомные параметры в ноду материала динамичных параметров
 
>[!note]- **Math**

>[!note]- **Math/Blend**

>[!note]- **MAXScripts**

>[!note]- **Mesh**
> **Sample Static Mesh** - задать статик меш для эмиттера. Необходимый модуль для Static Mesh Location.

>[!note]- **Orientation**
> **Sprite Rotation Rate** - позволяет крутить частички. Крутит все частицы одинаково, если нужно крутить в зависимости от лайфтайма - нужно анимировать переменную SpriteRotation.
> 
> **Initial Mesh Orientation** - задать разворот частиц-мешей
> 
> **Orient Mesh to Vector** - задать разворот частиц-мешей по вектору
> 
> **Update Mesh Orientation** - модуль вращения частиц-мешей

>[!note]- **Physics**
> **Add Rotational Velocity** - задать вращение частичкам-мешам. Задаётся в Particle Spawn. Для работы необходим доп. модуль **Solve Rotational Forces and Velocity** в Particle Update.
 
>[!note]- **Ribbon**
> **Scale Ribbon Width** - умножение ширины риббона на число
 
>[!note]- **Shapes**

>[!note]- **Size**
> **Scale Sprite Size** - модуль изменения скейла частиц
 
>[!note]-  **Skeletal Mesh**

>[!note]- **Spawning**
> **Spawn Per Frame** - спавнит частицы каждый кадр, завязан на фреймрейте
> 
> **Spawn Per Unit** - спавнит частицы в зависимости от пройденного расстояния, хорошо подходит для трейлов, искр и тд. (работает только в случае движения эмиттера)
> 
> **Spawn Burst Instantaneous** - резкий спавн N кол-ва частиц
> 
> **Spawn Particles From Other Emitter** - спавн частиц с другого эмиттера (таким образом можно делать трейлы)

>[!note]- **Splines**

>[!note]- **Sprite**

>[!note]- **SubUV**
> **SubUVAnimation** - анимация спрайтшита

>[!note]- **Texture**
> **SampleTexture** - позволяет спавнить частицы по текстуре
 
>[!note]- **Utility**

>[!note]- **Vector Field**
> **Apply Vector Field** - применить векторфилд
> 
> **Sample Vector Field** - загрузить предзагруженный векторфилд в эмиттер

>[!note]- **Velocity**
> **Add Velocity** - модуль постоянной скорости
> 
> **Add Velocity From Point** - задаёт скорость относительно точки (все частицы отталкиваются в разные стороны относительно заданной точки)
> 
> **Add Velocity in Cone** - задаёт скорость по конусу
> 
> **Inherit Velocity** - передача частицам скорости извне (например при перемещении системы частиц)
> 
> **Vortex Velocity** - закручивает частицы, есть возможность добавлять Falloff