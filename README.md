# Gulp-Assembly
## Сборка Gulp
### Установка
1. Cкачать файлы командой: git clone https://github.com/Noiker-ux/Gulp-Assembly
2. Переименовать название папки в название проекта.
3. Открыть папку в Visual Studio Code, открыть терминал и ввести следующие команды:
  - npm i
  - npm install webp-converter@2.2.3 --save-dev
  - npm audit fix
4. Наша сборка установленна! Вводим команду: gulp или npx gulp
### Примечания
Перед работой с gulp проверьте установлен ли node.js
Команда: node --version
Если отсутствует: Cкачайте с node.js версию LTS (https://nodejs.org/en/)

Проверьте установлен ли Gulp глобально
Если нет установите его командой: npm install --global gulp-cli

Папка проекта не должна называться gulp

Запускать можно и отдельные функции, например gulp css

WEBP-CSS выдает ошибку если в названии файла картинки есть пробелы и/или кириллица
### Функционал сборки
1. Собирает все файлы html в один
2. Cобирает все файлы css в один
3. Автопрефиксер
4. Минифицирует файлы css и создает две копии (сжатая и копия для разработчика)
5. Работает с препроцессорами SASS и SCSS
6. Собирает все файлы JS в один
7. Минифицирует файлы JS и создает две копии (сжатая и копия для разработчика)
8. Уменьшает размеры изображений без потери качества
9. Формирует файлы изображений в формате .webp
10. Собирает файлы .svg и формирует спрайт (в папке img)
11. Компилирует файлы шрифтов в формат woff и woff2
12. В файле font.scss подключает шрифты (прописать: @include font("[Название шрифта]", "[Название файла шрифта]", "[Размер]", "[Начертание]"); )
13. Cобирает куски media questions в один и отправляет в конец файла .css
14. При помощи BrowserSync не требует перезагрузки для отображения изменений
### Пакеты учавстующие в сборке
1. BrowserSync - https://www.browsersync.io/docs/gulp
2. File Include - https://www.npmjs.com/package/gulp-file-include
3. Del - https://www.npmjs.com/package/del
4. Sass - https://www.npmjs.com/package/gulp-sass
5. Autoprefixer - https://www.npmjs.com/package/gulp-autoprefixer
6. Group CSS media-queries - https://www.npmjs.com/package/gulp-group-css-media-queries
7. Rename - https://www.npmjs.com/package/gulp-rename
8. Clean CSS - https://www.npmjs.com/package/gulp-clean-css
9. Uglify ES - https://www.npmjs.com/package/gulp-uglify-es
10. Babel - https://www.npmjs.com/package/gulp-babel
11. Imagemin - https://www.npmjs.com/package/gulp-imagemin
12. WEBP - https://www.npmjs.com/package/gulp-webp
13. WEBP HTML - https://www.npmjs.com/package/gulp-webp-html
14. WEBP CSS - https://www.npmjs.com/package/gulp-webpcss
15. Fonter - https://www.npmjs.com/package/gulp-fonter
16. ttf2woff - https://www.npmjs.com/package/gulp-ttf2woff
17. ttf2woff2 - https://www.npmjs.com/package/gulp-ttf2woff2
18. SVG Sprite - https://www.npmjs.com/search?q=gulp-svg-sprite
### Перечень команд в сборке
1. gulp - запустить сборку
2. gulp [название функции] - запустить определенную функцию
3. gulp otf2ttf - переконвертировать формат .otf в .ttf
4. gulp svgSprite - Собрать спрайт из svg картинок
