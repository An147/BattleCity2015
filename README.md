# BattleCity2015
Univercity project: a remake of classic Battle City game.

## Инструкция по установке и запуску локального сервера
1.	Устанавливаем *Node.js*
2.	Устанавливаем *MongoDB*
3.	Устанавливаем *Python* (потребуется для компиляции некоторых библиотек). Добавляем системную переменную окружения PYTHON равную <полный путь к папке с python’ом> (Мой компьютер -> Свойства -> Дополнительно -> Переменные среды и окружения или что-то типа того).
4.	Копируем все из репозитория в эту папку
    - 4.1	Запускаем Git Bash (консоль Git можно скачать на их офф. Сайте)
   -  4.2	Переходим в пустую папку, где будет лежать проект (**cd bla-bla-bla**)
    - 4.3	**git init**
    - 4.4	**git remote add <любое имя-псевдоним удаленного репозитория, например tanks> https://github.com/An147/BattleCity2015.git**
    - 4.5	**git fetch tanks**
    - 4.6	**git pull tanks master**
    - 4.7	Всё! Проверьте наличие всех файлов в этой папке. Можно запустить **git status** – должно выдать, что нечего коммитить, все ОК)
5.	Запускаем Node.js command prompt
6.	Переходим в папку где лежит проект (**cd bla-bla-bla**)
7.	Устанавливаем все зависимости: **npm install** . Здесь важно, чтобы стоял текущий путь в папке с проектом, а конкретнее именно где размещен файл *package.json*. 
8.	Установка занимает много времени – это нормально! Всего около 160 Мб зависимостей у меня устанавливаются в течение 15-20 минут. При этом в конце будут ошибки при скачивании некоторых библиотек – неподходящая версия node.js или npm, или еще что-то не по феншую – это тоже номально ! xD
9.	 Теперь устанавливаем все зависимости для front-end: **bower install** . Здесь тоже важно, чтобы стоял текущий путь в папке с проектом, а конкретнее именно где размещен файл *bower.json*. Если у вас не стоит bower, установите его через **npm install -g bower**. Эта команда поставит его глобально, не только для текущего проекта.
10.	Запускаем еще одно окно Node.js command prompt специально для  MongoDB, в нем даем команду: **mongod –dbpath “C:/bla-bla-bla/path-to-your-project-folder/db”**. В папке с проектом есть папка db. В общем, это папка куда будет какать MongoDB своими JSON объектами))
11.	 Запускаем сервер в первом окне Node.js: **grunt serve**. Опять же, если не установлен Grunt, ставим его через **npm install –g grunt-cli**. Более подробно см. документацию на их офф. Сайте.
12.	Начинается процесс компиляции проекта и т.д…если все OK, то окно браузера со стартовой страницей проекта откроется само

P.S. Все это проделано с 5 по 13 пункт заново, протестено. Все должно работать. За вопросами – обращаться в личку, или в [Конфу разрабов в ВК](http://vk.com/im?peers=66770317&sel=c39)
