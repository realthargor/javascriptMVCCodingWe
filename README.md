Testanwendung mit JavaScriptMVC 3.2.4
=======================================

# Wo ist der Code?

JS-MVC hat die Eigenheit, dass die eigentliche Anwendung in einem Unterorder des Framworks entwickelt werden muss.
Der selbst geschriebene Teil der Anwendung befindert sich unter _/cw_.

# Beschreibung des Frameworks

Der Schwerpunkt von JS-MVC ist es eine Projekt- und Dateistruktur
vorzugeben und die dort abgelegten Dateien korrekt zu Laden. Um
dieses "Feature" zu nutzen muss der Entwickler die enthaltenen
Codegeneratoren verwenden und ihnen korrekte Pfade mitgeben.

Mit dem App-Generator wird das Grundgerüst der Anwendung erzeugt
(Grundseite, Controller, ein paar Ordner).

Der Model-Generator erzeugt ein /model/*. Dort eine JS-Datei für den
Aufruf abgelegt, die ein Model-Objekt beinhalten, die Struktur eines
Model-Objektes definiert (Attribute werden per Hand eingepflegt) und
CRUD-Operationen definieren. Jedes Datei wird in die models.js
eingetragen.

Der Controller-Generator erzeugt unter /controllers/ eine JS-Datei
(den Controller) und eine Grundseite.  Im Controller wird der Code
implementiert der den Inhalt der Grundseite durch Views austauscht.

Unter /controller/$foobar(/views/*) werden Templates ablegt die als
Views innerhalb des Controllers vewendet werden.

# Fazit

Die Idee des Frameworks scheint auf den ersten Blick gut
zusein. Komplexen JS-Frontends tendieren dazu keine saubere Trennung
der Aspekte und keine ordentliche Struktur zu entwicklen.

Leider ist die Umsetzung des Ganzen sehr mangelhaft. So mangelhaft,
dass unser Team als einziges nach zwei Tagenkeine lauffähige Anwendung
zu präsentieren hatte!

JavascriptMVC ist
- buggy
 - generierter Code funktioniert nicht
 - Exceptions werden verschluckt
- schlecht dokumentiert
 - die Dokumentation auf der Website hat keine sinnvolle Struktur, die Navigation ist unverständlich 
 - die einzelnen Kapitel sind inkonsistent und enthalten viele Sprünge denen der Leser nicht folgen kann
- unvollständig, wenn man es als MVC-Framework verwenden will
 - es sind mehrere Templating-Engines vorgeschlagen und enthalten aber keine vorkonfiguriert, wie man sie aktiviert ist schlecht dokumentiert
 - es gibt kein Routing
 - es gibt kein Binding
 - es gibt keine Validierung