**value+** - позволяет передвигать привязанный объект

**.value** - дописанное в конце адреса выводит значение

**random(10,99).toFixed(2);**  в Source Text, чтобы создать рандомный ряд цифр, ограниченный 2 знаками на конце

**loopOut ()** - зацикленная анимация до конца

**loopIn ()** - зацикленная анимация от начала

**loopOut ("pingpong")** - зацикленная анимация туда-сюда

**loopOut ("pingpong",2)** - зацикленная анимация туда-сюда, повторение 2 ключей

**loopOut ("continue")** - анимация продолжения действия

**loopOut ("offset")** - анимация продолжения всех действий

**loopOutDuration("cycle", framesToTime(10));** - зацикливает 10 кадров

**index*30** - при дублировании слоя в Rotation - создает аналог повернутый на 30 градусов

**(index-1)*30** - то же самое, только первый слой будет стоять на своем месте

**linear(t, tMin, tMax, value1, value2)** - зависимость одного параметра от другого с конкретными значениями

**ease(t, tMin, tMax, value1, value2)** - то же самое, что и linear, только плавнее

**length(a,b)** - измерить расстояние

**Math.round** - округлить значения

**comp("Comp_layer")** - переадресация на нужный слой
<br>

###### **Пример Expression зависимости Scale от Position с привязкой к слайдеру (вставлять в Scale)**

Kof= effect ("Kof")("Slider");

posCircle = thisComp.layer("Circle").transform.position[0]; // x

linear (posCircle, 280, 960, value, value*Kof);
<br>

###### **Расстановка объектов по кругу (сувать в Rotation)**

a=360/thisComp.numLayers;

a*(index-1)
<br>

###### **Expression Bounce Effect (Motion Beast)**

amp = .06; // амплитуда

freq = 2; // частота

decay = 7; // затухание (чем больше значение, тем быстрее будет затухание)

//----------------------------------

n = 0;

if (numKeys > 0){

n = nearestKey(time).index;

if (key(n).time > time){

n--;

}

}

if (n == 0){

t = 0;

}else{

t = time - key(n).time;

}

if (n > 0){

v = velocityAtTime(key(n).time - thisComp.frameDuration/10);

value + v_amp_Math.sin(freq_t_2_Math.PI)/Math.exp(decay_t);

}else{

value;

}
<br>

###### **Wiggle Expression (рандомные колебания)**

В Wiggle Transform применять к Temporal Phase и Spatial Phase, убирая Wiggles/Second на ноль.

freq = 1;// частота wiggle

amp = 110; //амплитуда колебаний

loopTime = 3; //время цикла в секундах

t = time % loopTime;

wiggle1 = wiggle(freq, amp, 1, 0.5, t);

wiggle2 = wiggle(freq, amp, 1, 0.5, t - loopTime);

linear(t, 0, loopTime, wiggle1, wiggle2)
<br>

###### **Expression for Path (позволяет зацикливать и редактировать по Path)**

try{

timeStart = thisProperty.key(1).time;

duration = thisProperty.key(thisProperty.numKeys).time-timeStart;

pingPong = false; //change to true value if you want to loop animationn back & forth

quant=Math.floor((time-timeStart)/duration);

if(quant<0) quant = 0

if(quant%2 == 1 && pingPong == true){ t = 2 * timeStart + (quant+1) * duration - time;

}

else{

t = time-quant*duration;

}

}

catch(err){

t = time;

}

thisProperty.valueAtTime(t)
<br>

###### **Expression для Bend it (привязать опорные точки)**

toComp(value)
<br>

###### **Expression по времени.**

time*360
<br>

###### **Expression для установки нужного числа кадров на слой.**

posterizeTime(8)
<br>

###### **Expression для Time Remap (cmd+alt+t) для зацикливания футажа**

loopIn(type = "cycle", numKeyframes = 1);loopOut(type = "cycle", numKeyframes = 2)
<br>

###### **Expression для запуска анимации по маркеру**

n = marker.nearestKey(time).index;

if(time < marker.key(n).time){

n=n-1;}

if(n==0){

n=1}

t=time-marker.key(n).time;

thisProperty.valueAtTime(t)
<br>

###### **Expression для колебания текста (в Amount в Expression Selector)**

freq = 2; // частота

decay = 4; // затухание

delay = .05; // задержка букв

dur = .12; // длительность анимации

myDelay = (textIndex-1) * delay;

t = time - (inPoint + myDelay);

startVal = 100;

endVal = 0;

if(t < dur){

linear(t,0,dur,startVal,endVal);

}else{

amp = (endVal - startVal)/dur;

w = freq_Math.PI_2;

endVal + amp*(Math.sin(t_w)/Math.exp(decay_t)/w);

}
<br>

###### **Ограничить значения (например в Slider)**

clamp(value, min=-100, max=100)
<br>

###### **Время в формате (00:00) с ограничением отриц. значений**

slider = comp("Main comp 1").layer("Slider control").effect("Общее время дистанция")("Slider")

sec = slider%60 min = Math.floor(slider/60) function addZero(n) { if (n<10) return "0" + n else return n; }

if (slider>0) { addZero(min) + ":" + addZero(sec) } else { "00:00" }