# theory
1 Для тега <img /> обов'язково треба задавати width="" і hight="" <br/>
2 Усі фотографії повині бути зжати jpeg https://squoosh.app/ png https://compresspng.com/ru/ svg https://jakearchibald.github.io/svgomg/ ті валідція html https://validator.w3.org/nu/ <br/>
3 Перевірити продуктивність сайту https://pagespeed.web.dev/?hl=ru <br/>
2 Кожній секцї обовязково треба робити заголовок для підвіщення сімантичнотсі та допомоги ассистивниь технологіям. Якщо у таге section не має заголовка то він робиться для читалок і скривається для користовачів.


2
1. Доступності в вебе є аріа атрібути aria-label="Ссилка на facebook" використовується для кнопок и ссилок іконок соціальних мереж де є тільки іконка і не має ніякого описання. <br />
2. Unicode Спецсимволі, яких не має на клавыатуры ставяться мнемокодамі або символьними подстановками <br />
https://html.spec.whatwg.org/multipage/named-characters.html https://www.toptal.com/designers/htmlarrows/symbols/ <br />

3
1. CSS-зміни  <br />
:root {  <br />
--title-text-color: black,  <br />
--description-text-color: gray,  <br />
--accent-color: red,  <br />
}  <br />

.title {  <br />
backround-color: var(--title-text--color)  <br />
} <br />

4 <br />
Кнопці треба задати fotn-family: inherit (наслідувати) тому що кнопка  не успадкує фонт фемелі <br />
font-size: 16px і line-height: 18px треба розділити 18/16 = 1.2 і записати в line-height: 1.2 <br />
Заходимо на сайт google-fonts та обираємо шрифт і потім підключаємо його в html файлі перед CSS стилями <br />
System Font Stack https://systemfontstack.com/ <br />
CSS system fonts cheatsheet https://devhints.io/css-system-font-stack <br />

body { <br />
backround-color <br />
color <br />
font-family <br />
letter-spacing: -0.015em <br />
font-size: задаємо від параграфів <br />
line-height: 1.67 <br />
} <br />

Правило <br />
.title { <br />
Геометрия <br />
Дисплей і позиционування <br />
Маржин и падинг <br />
Фондс <br />
Динамика <br />
бекграйнд цвет <br />
анімації <br />
} <br />

5 <br />
Глобальний border-box <br />
html { <br />
box-sizing: border-box <br />
} <br />

*, <br />
*::before, <br />
*::after { <br />
box-sizing: inherit <br />
} <br />

Силкам а треба задати display: inline-block <br />


<div class="container"></div> <br />
css <br />
.container { <br />
width: 1200px <br />
pading-left: 15px <br />
pading-right: 15px <br />
margin: 0 auto <br />
} <br />

body { <br />
margin: 0 <br />
} <br />

.list { <br />
padding 0 <br />
margin 0 <br />
list-style none <br />
} <br />

h1, h2, h3, h4, h5, h6 { <br />
margin-top 0 <br />
margin-bottom 0 <br />
} <br />

.section { <br />
padding-top 120px <br />
padding-bottom 120px <br />
} <br />

У нас є різни брайзери... і в них різні таблиці стилів <br />
Тому щоб привести базові стилі різних брайзеров до єдиного стилю треба підключити модерн-нормалайз https://www.npmjs.com/package/modern-normalize <br />
перед всіма стилями css
