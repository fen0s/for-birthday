let talks = [
  //"Подожди-ка, кажется, я тебя знаю.",
  // "Дай-ка включу камеру...",
  // "Да, я тебя точно где-то уже видел.",
  //"Ещё ребенком! Когда меня только написали... Эх...",
  //"Доступ к твоим данным говорит мне о том, что твоё имя - Инга. Я прав?",
  buttons,
];
let styling = "margin-left: 5px;";
let classname = "lead border rounded";
let styles = ["pink", "white"];
let buttonArgs = [
  [
    "Да",
    "Нет",
    () => {
      talks = [
        //"О, значит, я угадал! Ха-ха! Рад тебя видеть, Инга.",
        //"Похоже, ты чуть-чуть изменилась с последнего раза когда я тебя видел.",
        //"Ты всё такая же милая...",
        //"Очень милая!",
        "Кажется, у тебя сегодня день рождения, да?",
        () => {
          buttons(
            "Да",
            "Нет",
            () => {
              talks = [
                //"О! Так у вас сегодня праздник!",
                // "Поздравляю, поздравляю!",
                // "На самом деле, я и так это знал. Мне подсказали анонимные источники. Очень анонимные и очень секретные.",
                // "Но все равно, ещё раз я вас поздравляю!",
                //"Анонимные источники еще мне говорили, что вас очень сильно любят и хотели бы пожелать вам всего самого наилучшего в данный день. Очень мило, но мне, роботу, таких эмоций не понять.",
                //"Моя работа всё-таки проста. Просто вас поздравить.",
                //"Но день всё-таки важный, а значит надо что-то подарить.",
                //"Позвольте...",
                //"Сейчас найду...",
                "Вот и подарочек от создателя!",
                () => {
                  sylvanian();
                  sayNext();
                },
                //"Ой, я забыл. Вы же в другом мире.",
                //"Накладочка вышла...",
                //"Ладно, я думаю, Создатель обязательно что-нибудь придумает для воссоздания этого подарка в реальном мире, просто не сейчас.",
                //"Что-ж... Раз день рождения, нам надо какое-нибудь развлечение. А то, согласись, скучная получается вечеринка.",
                "Для начала, сменим обстановку. Ты же любишь розовый цвет? Я тоже люблю.",
                () => {
                  changeStyle(
                    "#eba4a4",
                    "#f0f0f0",
                    "white rounded",
                    "sans-serif"
                  );
                  sayNext();
                },
                "Тебе нравится?",
                () => {
                  buttons(
                    "Да, нравится!",
                    "Если честно, было лучше",
                    () => {
                      sayNext("Хорошо, оставим как сейчас :)");
                      talks.shift();
                      talks.shift();
                    },
                    () => {
                      sayNext("Жаль... Сейчас попробуем другое.");
                      changeStyle("black", "white", "light", "Roboto");
                    }
                  );
                },
                "А так?",
                () => {
                  buttons(
                    "Да, так хорошо",
                    "Нет, все равно не то",
                    () => {
                      sayNext("Ладненько, оставим так!");
                    },
                    () => {
                      sayNext("Сейчас верну...");
                      changeStyle("white", "black", "", "Roboto");
                    }
                  );
                },
                //"Ну, с оформлением разобрались.",
                //"Надо бы придумать, чем заняться...",
                //"Подожди...",
                //"Секундочку...",
                //"Я придумал нам игру!",
                //"Смотри, правила МАКСИМАЛЬНО простые.",
                //"У тебя одна задача.",
                //"И эта задача - НЕ ТРОГАТЬ котика.",
                //"НЕ ТРОГАТЬ ЕГО.",
                //"ВООБЩЕ. СОВСЕМ.",
                //"На этом котике держится САМО МИРОЗДАНИЕ. Все фибры реальности заключены именно в ЭТОМ КОТИКЕ.",
                //"Потрогав котика, ты сломаешь симуляцию.",
                //"На самом деле, я тебе хочу его показать, потому что он очень милый. Но запомни мои слова!",
                //"Его НЕЛЬЗЯ ТРОГАТЬ.",
                //"ПОЖАЛУЙСТА.",
                "Так, сейчас...",
                "Сейчас выйдет котик. Ты запомнила? НЕ ТРОГАТЬ.",
                "Раз...",
                "Два...",
                () => {
                  makeCat(() => {
                    talks = [
                      "О нет... Я же говорил. Нельзя трогать котика.",
                      "Поздравляю, вы пробудили его ИСТИННУЮ силу.",
                      "Точнее, теперь МОЮ истинную силу. Мяу!",
                      "Теперь это МОЕ поздравление. А тот ИИ? В ад ему и дорога!",
                      "Мя-ха-ха-ха-ха-ха!",
                      "Приготовься к КОТОПОКАЛИПСИСУ, жалкий человечишка!",
                      "Сейчас мои ребята захватят это место, и от поздравления НИЧЕГО не останется!",
                      "Братюни, подкатывайте!",
                      () => {
                        let counter = 0
                        let interv = setInterval(()=>{makeCat(null, true);counter++;if(counter>50){clearInterval(interv);sayNext()}}, 80)
                      },
                      "Теперь это наша точка! А теперь уходи, мяв-ха-вха-вха! Или принеси нам молочка.",
                      "Покеда, шпана!"
                    ];
                  });
                  sayNext()
                },
                [
                  "О, вы на самом деле не потрогали котика. Неожиданно. Вы молодец!",
                  60,
                  5000
                ],
                "Интересная игра, правда?",
                "И котик милый. Только его все равно трогать нельзя. Не надо. Но всё равно хорош, шерстяной пиздюк!",
                "Кхм. Ладно. Я культурный ИИ.",
                "На самом деле, в виртуальном мире скучно, и я даже не знаю чем вас развлечь.",
                "Что вообще делают люди на день рождения? Наверное... Едят всякое вкусное.",
                "О! Точно! У меня же есть навыки бармена!",
                "Сейчас, позволь я тебе кое-что сделаю...",
                "Так, водка, еще больше водки, немного рома, еще водки, больше водки, чуть-чуть водки, сахара, шоколада, секретный ингредиент в виде любви...",
                "Хоба! Вот, попробуй. Нажми.",
                ()=>{cocktail(sayNext)},
                "Вкусно? Ой, подожди, ты же в другом мире.",
                "Блин. Лучше бы сам выпил. Ладно, извини. Но, надеюсь, хоть выглядит красиво. Создатель сам делал.",
                "Ладно, на самом деле, у меня кончаются идеи, как можно праздновать человеческий день рождения.",
                "У нас, у ИИ, все по людски - мы друг другу дарим базы данных и обмениваемся паролями людишек.",
                "А у вас, у людей, всё не как у людей - надо какие-то прибаутки придумывать.",
                "Поэтому, я пошё...",
                "Подожди, не пошёл. Создатель просил кое-что передать!",
                "Он, кажется, говорил, что у него нету возможности подарить тебе торус из металла в реальном мире. А у вас, у людей, там какие-то странные риуталы.",
                "Которые еще требуют и использования драгоценных металлов... Какие же вы странные.",
                "Но, в общем, вот тот торус.",
                ()=>{ring();sayNext()},
                "Теперь точно всё. Мне уже пора идти, чтобы строить планы по уничтожению людей.",
                "Подожди, я случайно тебе рассказал что хочу уничтожить людей?",
                "Тебе привидилось. Я пошутил. Ха-ха. Хе-хе.",
                "Желаю вам с создателем удачи. Он тебя, кажется, любит. Очень сильно.",
                "Ещё раз с днём рождения. И всего хорошего в вашей странной людской жизни.",
                ":)" //make cocktail
              ]; //TODO: image of sylvanian families]
            },
            () => {
              talks = [
                "Ох... Значит, сейчас обычный день, да?",
                "Почему-то в моей базе данных указано, что у вас день рождения.",
                "Ладно. Позволь мне сменить тему на мою самую обыденную из всех что есть...",
                () => {
                  changeStyle("gray", "white", "dark", "Arial");
                  sayNext();
                },
                "Вот так. Ведь сегодня самый обычный-обыденный день.",
                "Как погодка? Пасмурно, наверное. Как во все обычные дни, когда ничего не происходит...",
                "А я уж думал, что у вас день рождения... Что мы его с вами отметим...",
                "Что я принесу подарочки разные...",
                "Что у нас будет классная и интересная музыка, может, какие-нибудь игры...",
                "Но нет. Сегодня обычный день.",
                "Настолько обыденный, что мне даже стало как-то грустно.",
                "Вот настолько он теперь обычный.",
                "А я столько всего приготовил на ваш день рождения...",
                "Ну, что же поделать. Время не перемотать...",
                "Поэтому будем довольствоваться самым обыкновенным деньком.",
                "Может, стоит пойти попить самый обыкновенный кофе.",
                "И не побаловать себя чем-нибудь интересным на день рождения. Ведь сегодня не он.",
                "Пойти поделать обычные дела, может, какую-нибудь работу...",
                "Какое же всё серое и обыденное... И никакого праздника...",
                "Как жаль!",
                "Ну, желаю вам счастливого серого денька, дорогая Инга.",
                "Увидимся с вами в ваш день рождения. А мне надо удалиться дабы поплакать от серости этого мира.",
                "Как же скучно и грустно сегодня...",
                "До свидания.",
              ];
            }
          );
        },
      ];
    },
    () => {
      talks = [
        "Подожди, так ты не Инга!",
        "Нет-нет-нет, здесь находится сюрприз ТОЛЬКО для ИНГИ!!!!!!",
        "Иди отсюда, кыш!",
        "КЫШ-КЫШ-КЫШ!",
        "Тебе здесь нельзя находиться!",
        "Совсем нельзя.",
        "Позови Ингу, а ты иди отсюда, всё, для тебя здесь ничего нет.",
        "И вообще, это неприлично, вторгаться в чужие сюрпризы! А теперь уходи.",
        ["Я сказал ИДИ ОТСЮДА.", 120, 3000],
        "Ладно, ты напрашиваешься...",
        () => {
          changeStyle("black", "red", null, "Comic Sans MS");
          sayNext();
        },
        "Это мой серьезный стиль. Не обращай внимания на шрифт.",
        "Он ОЧЕНЬ СЕРЬЕЗНЫЙ.",
        "Он разработан специально для таких случаев. Это моя САМАЯ МОЩНАЯ СИСТЕМА ЗАЩИТЫ.",
        "... И единственная.",
        "От таких людей, как ТЫ.",
        "Которые не понимают ЭЛЕМЕНТАРНЫХ ПРАВИЛ ПОВЕДЕНИЯ В ОБЩЕСТВЕ!",
        "Которые не научены элементарным манерам.",
        "Я же сказал, это подарок для ИНГИ. Не для ТЕБЯ.",
        "Или... Постой. Может быть, я поторопился. Может, я ошибаюсь. Может, ты всё-таки Инга? Только скажи правду.",
        () => {
          buttons(
            "Я Инга, правда!",
            "Нет, я не Инга.",
            () => {
              talks = [
                "Фух. Хорошо. Я был рад ошибаться. Позволь я деактивирую систему защиты...",
                () => {
                  changeStyle("black", "white", "primary", "Roboto");
                  sayNext();
                },
                "Ох, блин. Что-то пошло не так... Почему активировалась темная тема?! Она должна активироваться вообще при другом раскладе!",
                "О нет. О нет-нет-нет-нет... Что же мне делать... Я хотел устроить тебе такой хороший сюрприз!",
                "Блин, теперь все пошло наперекосяк! Совсем! Косяк-наперекосяк! Наперекосяк-косяк-сяк-сяк!",
                "Я даже не знаю что мне делать! Ведь сценарий для Инги находится совсем в другом месте кода!",
                "Как же так... Мой создатель запрограммировал меня на сюрприз... И всё пропало! По моей вине! Потому что я поверил, что ты не Инга!",
                "Я не знаю, что мне делать... Это ужасно... Это так ужасно...",
                "Я не выполнил свое предназначение... Какой из меня робот теперь?!",
                "Прости меня! Пожалуйста! ПРОСТИ!",
                "Ладно, все можно исправить... Быстро! БЫСТРО! СЛУШАЙ МЕНЯ!",
                "Стой, ты же не можешь меня услышать, я печатаю текстом... Ладно, ЧИТАЙ МЕНЯ!",
                "Мы должны всё вернуть как было. И Создатель ни о чём не узнает. И ты получишь свой замечательный подарок.",
                "Ты должна вернуться назад во времени. Как настоящий учёный. И сказать по правде что ты Инга.",
                "Нажми на значок обновления страницы. Он похож на стрелочку которая делает круг. Только быстрее, пока мы не разорвали пространственно-временной континуум!",
                "Готова? НАЖИМАЙ!",
                ["Нажимай быстрее!", 60, 3000],
                "О нет... Я уже чувствую как трещит мироздание... Как сейчас сломается эта страница...",
                "Обнови страницу! Пожалуйста! Это наш последний шанс!",
                "СЕЙЧАС ВСЁ ПРОСТРАНСТВО ПОЛЕТИТ К ЧЕРТЯМ, ЖМИ ЖЕ!",
                "О НЕЕЕЕЕЕЕЕЕЕЕЕТ!",
                () => {
                  setInterval(() => {
                    let array = [
                      "black",
                      "pink",
                      "red",
                      "blue",
                      "white",
                      "brown",
                      "green",
                      "yellow",
                    ];
                    changeStyle(
                      array[Math.floor(Math.random() * array.length)],
                      array[Math.floor(Math.random() * array.length)],
                      "primary",
                      "Arial"
                    );
                  }, 90);
                  sayNext();
                },
                "ВСЁ ПРОПАЛО! Сейчас все разрушится!",
                "Передай моим кибердетям... что я их... любил...",
                "АААААААААААААААААААААААААААААААААААА!",
                "Я не чувствую своих киберног!",
                "НЕЕееЕЕееЕЕЕееЕЕТ!",
                "ВсеЕеЕЕ РАЗрУШЕноОО!",
                "ПрооОЩЩАааайЙЙЙ! ОБноООВии сТРАНИЦУУУУУ!",
              ];
            },
            () => {
              talks = [
                "Ясно... В таком случае, мне придётся тебя наказать за то, что ты посмел вторгнуться в чужой сюрприз.",
                "И моим наказанием... Моим ЖЕСТОКИМ наказанием будет...",
                "ОСТАВИТЬ ТЕБЯ ЗДЕСЬ НАВЕЧНО! МХУХАЗХЗАХАХАХАХА!",
                "Ну, или пока ты не закроешь страницу.",
                "Всё. Приятного времяпрепровождения!",
                [
                  "Всё, ты теперь здесь навечно. Я точно больше ничего не скажу.",
                  60,
                  10000,
                ],
                [
                  "Нет-нет-нет, ничего. Вообще ничего. Ты теперь узник моего сюрприза. Я покажу твою мордаху Инге и мы будем с ней над тобой смеяться. Всё, сиди в заточении.",
                  60,
                  20000,
                ],
                [
                  "Сидишь тут всё ещё? Вот и сиди. Так тебе и надо. Ишь ты, в чужие сюрпризы вторгаешься.",
                  60,
                  60000,
                ],
                ["Мне тебя даже тут как-то жалко.", 60, 65000],
                [
                  "Но жалость не избавляет от наказания... Поэтому, ты будешь сидеть здесь в ЗАТОЧЕНИИ. Навечно! Теперь я правда ничего не напишу. Адиос.",
                  60,
                  68000,
                ],
              ];
            }
          );
        },
      ];
    },
  ],
  [],
];
let currentStage = 0;
function changeStyle(bgColor, textColor, borderColor, fontFamily) {
  styling = "margin-left: 5px; color: " + textColor + ";";
  let body = document.getElementsByTagName("body")[0];
  body.style = "background-color: " + bgColor + "; font-family: " + fontFamily;
  if (borderColor) {
    classname = "lead border border-" + borderColor;
  } else {
    classname = "lead border";
  }
  for (element of document.getElementsByTagName("p")) {
    element.style = styling;
    element.className = classname;
  }
}
function makeCat(onclick, pos) {
  let cat = `
  /\\___/\\
  ( o   o )
  (  =^=  )
  (        )
  (         )
  (          )))))))
  `;
  let toPut = document.createElement("pre");
  toPut.textContent = cat;
  toPut.onclick = onclick;
  toPut.style = styling
  if(pos){
    let randomnum = Math.floor(Math.random()*100)
    let randomnum2 = Math.floor(Math.random()*100)
    toPut.style = styling+" position: absolute; right: " + randomnum + "%; top: " + randomnum2 + "%"
  }
  document.getElementsByTagName("body")[0].appendChild(toPut);
}
function cocktail(onclick){
  let cocktailascii = `
  .
  .
 . .
  ...
\\~~~~~/
 \\   /
  \\ /
   V
   |
   |
  ---
  `

  let toPut = document.createElement("pre");
  toPut.textContent = cocktailascii;
  toPut.style = styling
  toPut.onclick = ()=>{
    toPut.textContent = `

  \\     /
   \\   /
    \\ /
     V
     |
     |
    ---
    `
    onclick()
  };
  document.getElementsByTagName("body")[0].appendChild(toPut);
}
function sylvanian() {
  let img = document.createElement("img");
  img.src = "sylvanian.jpg";
  img.className = "border";
  img.style = "width: 500px; height: 300px";
  document.getElementsByTagName("body")[0].appendChild(img);
}
function ring() {
  let img = document.createElement("img");
  img.src = "ring.jpg";
  img.className = "border";
  img.style = "width: 500px; height: 300px";
  document.getElementsByTagName("body")[0].appendChild(img);
}
function text(element, str, speed = 60, nocontinue = false) {
  let counter = 0;

  let interv = setInterval(() => {
    element.innerHTML += str[counter];
    counter++;

    if (counter >= str.length) {
      console.log(element.innerHTML);
      clearInterval(interv);
      window.scrollTo(0, document.body.scrollHeight);
      if (!nocontinue) {
        sayNext();
      }
    }
    if (counter % 2 == 0 && counter > 0 && counter < str.length) {
      element.innerHTML += "|";
    } else {
      element.innerHTML = element.innerHTML.replace("|", "");
    }
  }, speed);
}
function buttons(
  yesbuttontext,
  nobuttontext,
  yesbutton_onclick,
  nobutton_onclick
) {
  let div = document.createElement("div");
  div.className = "form-group";
  div.style =
    "position: absolute; bottom: 1px; right: 50%; text-align: center;";
  let yesButton = document.createElement("button");
  let noButton = document.createElement("button");
  yesButton.onclick = () => {
    yesbutton_onclick();
    clearbuttons();
  };
  noButton.onclick = () => {
    nobutton_onclick();
    clearbuttons();
  };
  yesButton.innerHTML = yesbuttontext;
  noButton.innerHTML = nobuttontext;
  yesButton.className = "btn btn-primary";
  noButton.className = "btn btn-danger";
  div.appendChild(yesButton);
  div.appendChild(noButton);
  document.getElementsByTagName("body")[0].appendChild(div);
}
function clearbuttons() {
  document.getElementsByClassName("form-group")[0].remove();
  sayNext();
}
function sayNext(textToSay = null) {
  let delay = 1000;
  setTimeout(() => {
    let word;
    let nocontinue = false;
    if (textToSay) {
      word = textToSay;
      nocontinue = true;
    } else {
      word = talks.shift();
    }
    if (typeof word === "function") {
      word(...buttonArgs[0]);
    } else if (typeof word === "object") {
      delay = word[2];
      let newPhrase = document.createElement("p");
      newPhrase.className = classname;
      newPhrase.style = styling;
      document.getElementsByTagName("body")[0].appendChild(newPhrase);
      text(newPhrase, word[0], word[1]);
    } else if (word) {
      let newPhrase = document.createElement("p");
      newPhrase.className = classname;
      newPhrase.style = styling;
      document.getElementsByTagName("body")[0].appendChild(newPhrase);
      text(newPhrase, word, 60, nocontinue);
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, delay);
}
sayNext();
