# web
1)Почему не стоит вставлять тэги в документ с помощью document.write()?
    Он блокирует загрузку страницы
    При загруженной странице, вызов document.write() перезапишет её
    
    
  В каком именно месте вставляется записанный с помощью этой функции
  код/текст? И как его записать в определенном тэге?
    Вставляется сразу после скрипта, в котором он был вызван
    Вызвать его в нужном теге 


***На первой вкладке, я оставил на onclick() document.write, что бы собственно показать, что док-т будет перезаписан***
