# Html, Css

Corso base per la programmazione frontend

- [Html, Css](#html-css)
- [Lezione 01](#lezione-01)
  - [Strumenti Necessari](#strumenti-necessari)
  - [FrontEnd, BackEnd](#frontend-backend)
  - [HTML](#html)
  - [CSS](#css)
  - [JAVASCRIPT](#javascript)
  - [Storia](#storia)
- [Lezione 02](#lezione-02)
  - [Struttura HTML](#struttura-html)
  - [Boilerplate HTML](#boilerplate-html)
  - [Tag HTML](#tag-html)
- [Lezione 03](#lezione-03)
- [Lezione 04](#lezione-04)
  - [Attributi HTML](#attributi-html)
- [Lezione 05](#lezione-05)
- [Lezione 06](#lezione-06)
  - [Tabelle HTML](#tabelle-html)
  - [Lezione 08](#lezione-08)
- [Lezione 08](#lezione-08-1)
  - [Input:](#input)
  - [Alcuni attributi degli input](#alcuni-attributi-degli-input)
  - [Button](#button)
  - [Label](#label)
- [Lezione 10](#lezione-10)
  - [Form](#form)
  - [Form validation](#form-validation)
  - [password Validation:](#password-validation)
  - [email Validation:](#email-validation)
  - [Altro conclusioni:](#altro-conclusioni)
  - [Attributo `disabled selected`:](#attributo-disabled-selected)
- [Lezione 10](#lezione-10-1)
  - [Tag `<div>`](#tag-div)
- [Lezione 09](#lezione-09)
  - [Form](#form-1)

# Lezione 01

## Strumenti Necessari
Brower Web: Google Chrome <br>
Editor di testo: Visual studio code

## FrontEnd, BackEnd
In HTML, CSS, JAVASCRIPT, il frontend rappresenta tutto ciò che vediamo e tutto ciò con cui interagiamo. Il backend invece rappresenta il mondo che c'è dietro il frontend ovvero tutta la logica di programmazione che permette alla pagina in HTML di funzionare. Il backend fornisce degli strumenti che possono essere utilizzati dal frontend. Per pensare al backend è possibile pensare ai database, ai server etc.. Il Backend si programma con linguaggi tipo python, ruby, PHP. Il frontend invece si programma con HTML, CSS, JAVASCRIPT.

## HTML
Hyper Text Markup Language.

## CSS
Cascading Style Sheet.
Definisce l'aspetto (lo stile), dimensioni, colori, animazioni.
Il CSS lavora "sopra" l'HTML.

## JAVASCRIPT
Linguaggio di scripting.
Definisce l'interazione in una pagina, anima HTML, CSS

## Storia
L'HTML viene creato nel 1989-1990, per la formattazione e impaginazione di documenti ipertestuali. E' un linguaggio di markup. Nasce insieme ad altri due standard: URL (uniform resource locator), HTTP (hypertext transfer protocol). Lo standard URL definisce gli indirizzi dei server e documenti online. Lo standard HTTP invece permette di fare collegamente ipertestuali tra documenti. Lo standard HTML invece permette di generare documenti.

# Lezione 02

## Struttura HTML
La struttura dell'HTML si basa su contenuti testuali all'interno di "tag". I "tag" definisco proprio il tipo di struttura che avrà il contenuto all'interno che potrà essere un titolo, un'immagine, un paragrafo, un collegamento esterno.. e molto altro.

``` HTML
<tag> contenuto </tag>
```
Esempi:
``` HTML
<h1> il tag h1 definisce un titolo </h1>
<p> il tag p definisce un paragrafo </p>
```

## Boilerplate HTML
Vediamo quindi quale deve essere la struttura iniziale di una pagina HTML.

```HTML
<!DOCTYPE html>
<html>
<head>

<!-- METADATA QUA -->

    <title> Titolo </title>
</head>
<body>


<!-- CONTENUTO QUA -->

</body>
</html>
```

Il tag `head` rappresenta l'intestazione, `title` il titolo della pagina HTML, `body` rappresenta il contenuto della pagina HTML mentre all'interno di `<!-- -->` è possibile inserire un commento al codice.


**Nota: Titolo della pagina HTML**

Il titolo della pagina html è quello che si visualizza nel motore di ricerca come collegamento alla pagina HTML. Se vogliamo ad esempio entrare sul sito "la Repubblica", cliccheremo sul collegamento *la Repubblica - News in tempo reale - Le notizie e i video di politica, cronaca, economia, sport*. Questo, rappresenta il titolo della pagina HTML.

![#region](images/README01.png)

Con lo strumento *Visualizza sorgente pagina* di google chrome è possibile visualizzare il codice sorgente e verificare quindi che al tag `title` corrisponda il titolo della pagina del sito "La repubblica" ovvero: *la Repubblica - News in tempo reale - Le notizie e i video di politica, cronaca, economia, sport*

![#region](images/README02.png)

**Warning!** Non confondere il titolo della pagina HTML rappresentato tramite il tag `title` con il titolo del contenuto della pagina HTML che è rappresentato tramite uno dei tag della famiglia `h` come ad esempio `h1`.

## Tag HTML

In questo documento non troveremo la descrizione dettagliata di tutti i tag HTML anche perchè sono un po' sparsi ovunque su internet. Un ottimo sito dove poter consultare la descrizione dettagliata dei tag è:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element <br>
Inoltre è da preferire un approccio pratico alla programmazione piuttosto che teorico.


# Lezione 03

```HTML
<!-- HTML BOILER PLATE -->
<!-- --------------------------------------------------- -->
<!DOCTYPE html>
<html>
<head>

<!-- METADATA QUA -->

    <title> Titolo </title>
</head>
<body>

    <!-- CONTENUTO QUA -->

    <!-- <h1> rappresenta l'elemento "titolo di un nuovo paragrafo" -->
    <!-- E' possibile scegliere da h1 a h5 come titolo di un nuovo paragrafo con la differenza che si avranno titoli con diversa grandezza di font per evidenziarne l'importanza -->
    <h1>Ciao, sono un h1</h1>
    <h2>Ciao, sono un h2</h2>
    <h3>Ciao, sono un h3</h3>
    <h4>Ciao, sono un h4</h4>
    <h5>Ciao, sono un h5</h5>

    <!-- <p> rappresenta l'elemento "paragrafo". Da usare per formattare il testo. -->
    Testo non formattato:
    Questo testo non è formattato tramite il tag "p".
    Anche se vado a capo, il risultato sarà visualizzato sulla stessa linea.

    <p>Testo formattato:</p>
    <p>Questo testo è formattato tramite il tag "p".</p>
    <p>Se vado a capo, il risultato sarà visualizzato sulla linea successiva coerentemente con il codice sorgente.</p>

    <!-- <strong>, <b>, <em>, <i>. -->
    <!-- Questi tag sono utilizzaati per dare importanza al testo. Si tratta di rendere il testo corsivo (em, i) piuttosto che grassetto (strong, b). -->
    <!-- L'effetto di strong è visivamente lo stesso di bold. Stessa cosa vale tra emphasized e italic. La differenza è che strong e emphasized aggiungono significato alla struttura mentre bold e italic rappresentano solo lo stile del font -->
    <!-- Ha senso utilizzare strong e emphasis solo quando c'è bisogno di dare significato alla struttura -->


    <strong> sono strong </strong>
    <b> sono bold </b>
    <em> sono emphasys </em>
    <i> sono italic </i>

    <!-- Liste -->
    <!-- <ul> (unordered list) liste non ordinate -->
    <!-- <ol> (ordered list) liste ordinate -->

    <h3>Liste non ordinate</h3>
    <ul>
        <li>sono il primo elemento </li>
        <li>sono il secondo elemento </li>
    </ul>


    <h3>Liste ordinate</h3>
    <ol>
        <li>sono il primo elemento </li>
        <li>sono il secondo elemento </li>
    </ol>

    <h3>Liste complesse</h3>
    <ol>
        <li>sono il primo elemento </li>
        <ul>
            <li>sono A</li>
            <li>sono B</li>
        </ul>
        <li><b> sono il secondo elemento </b></li>
        <ol>
            <li><i>sono A</i></li>
            <li><i>sono B</i></li>
        </ol>
    </ol>

</body>
</html>
<!-- --------------------------------------------------- -->
```
<div class="outputHTML">

<!-- CONTENUTO QUA -->

<!-- <h1> rappresenta l'elemento "titolo di un nuovo paragrafo" -->
<!-- E' possibile scegliere da h1 a h5 come titolo di un nuovo paragrafo con la differenza che si avranno titoli con diversa grandezza di font per evidenziarne l'importanza -->

<h1>Ciao, sono un h1</h1>
<h2>Ciao, sono un h2</h2>
<h3>Ciao, sono un h3</h3>
<h4>Ciao, sono un h4</h4>
<h5>Ciao, sono un h5</h5>

<!-- <p> rappresenta l'elemento "paragrafo". Da usare per formattare il testo. -->
Testo non formattato:
Questo testo non è formattato tramite il tag "p".
Anche se vado a capo, il risultato sarà visualizzato sulla stessa linea.

<p>Testo formattato:</p>
<p>Questo testo è formattato tramite il tag "p".</p>
<p>Se vado a capo, il risultato sarà visualizzato sulla linea successiva coerentemente con il codice sorgente.</p>

<!-- <strong>, <b>, <em>, <i>. -->
<!-- Questi tag sono utilizzaati per dare importanza al testo. Si tratta di rendere il testo corsivo (em, i) piuttosto che grassetto (strong, b). -->
<!-- L'effetto di strong è visivamente lo stesso di bold. Stessa cosa vale tra emphasized e italic. La differenza è che strong e emphasized aggiungono significato alla struttura mentre bold e italic rappresentano solo lo stile del font -->
<!-- Ha senso utilizzare strong e emphasis solo quando c'è bisogno di dare significato alla struttura -->


<strong> sono strong </strong>
<b> sono bold </b>
<em> sono emphasys </em>
<i> sono italic </i>

<!-- Liste -->
<!-- <ul> (unordered list) liste non ordinate -->
<!-- <ol> (ordered list) liste ordinate -->

<h3>Liste non ordinate</h3>
<ul>
    <li>sono il primo elemento </li>
    <li>sono il secondo elemento </li>
</ul>


<h3>Liste ordinate</h3>
<ol>
    <li>sono il primo elemento </li>
    <li>sono il secondo elemento </li>
</ol>

<h3>Liste complesse</h3>
<ol>
    <li>sono il primo elemento </li>
    <ul>
        <li>sono A</li>
        <li>sono B</li>
    </ul>
    <li><b> sono il secondo elemento </b></li>
    <ol>
        <li><i>sono A</i></li>
        <li><i>sono B</i></li>
    </ol>
</ol>
</div>

---

<br>

# Lezione 04

## Attributi HTML

Specificano una funzione o una tipologia dell'elemento del tag in considerazione.

Sono sempre nella forma `chiave/valore` con una sintassi del tipo:

```HTML
<tag attributo1="valore1" attributo2="valore2">
```
E' possibile con gli attributi aggiungere immagini o collegamenti a siti esterni.

Un esempio è `href`, un link tag:

```HTML
<a href="http://www.google.it">vai su google</a>
```
Questo tag creerà un collegamento a un sito, una pagina esterna o interna (in questo caso google.it quindi una pagina esterna) con il nome "vai su google". Cliccando quindi su "vai su google" verremo reindirizzati su www.google.it

**Warning!** Il tag appena creato non funzionerà senza il protocollo `http`. Scrivendo quindi semplicemente "www.google.it" non troverà la pagina.

E' possibile linkare pagine locali del nostro progetto. Per linkare una pagina locale di nome "pagina2.html" con tutti i suoi contenuti basterà scrivere:

```HTML
<a href="pagina2.html">vai su pagina2</a>
```

Un altro esempio è il tag `img` per l'inserimento di immagini. Anche in questo caso le immagini possono essere locali o link web.

```HTML
<img src="https://media.laregione.ch/files/domains/laregione.ch/images/4bvc/l_-gatto-boschi-natura-animale-svizzera-m9ma.jpg?v=1">

<img src="..\LinkLocali\ImmagineGatto.jpg">
```
Come si nota, nel primo caso c'è un link a un'immagine web mentre nel secondo caso l'immagine è locale ed è al path relativo `..\LinkLocali\ImmagineGatto.jpg`"

Esistono centinaia di attributi. Il consiglio è sempre quello di cercare e indagare per approfondire e scoprire gli utilizzi in base all'applicazione.

# Lezione 05

Vedremo un esempio di applicazione di `<a>` tag e di `<img>` includendo link a pagine locali o pagine web, immagini locali o web.

```HTML
<!-- Attributi HTML -->
<!-- <href> collegamento a pagine interne o esterne-->
<!-- Se la pagina è una pagina web, non funzionerà senza il protocollo HTTP.-->
<!-- Se la pagina è una pagina locale interna, ovvero della root del nostro progetto, funzionerà da link alla pagina-->
<h3>Elemento link</h3>
<p>
    <a href="www.google.it">vai su google, link a "www.google.it", una pagina web senza HTTP protocol (non funzionante)</a>
</p>
<p>
    <a href="LinkLocali\02_HTML_ElementiBase_PAG2.html">vai su 02_HTML_ElementiBase_PAG2.html, link interno alla root del progetto</a>
</p>
<p>
    <a href="http://www.google.it">vai su google, link a "http://www.google.it", una pagina web con HTTP protocol (funzionante)</a>
</p>

<!-- <img> link di un'immagine-->
<!-- Anche in questo caso è possibile inserire immagini provenienti da pagine web, ricordando di anteporre il protocollo HTTP-->
<!-- Oppure è possibile inserire un'immagine locale-->
<h3>Elemento Immagine</h3>
<p>
    <img src="https://media.laregione.ch/files/domains/laregione.ch/images/4bvc/l_-gatto-boschi-natura-animale-svizzera-m9ma.jpg?v=1">
</p>
<p>
    <img src="LinkLocali\ImmagineGatto.jpg">
</p>
```

<div class="outputHTML">
<!-- Attributi HTML -->
<!-- <href> collegamento a pagine interne o esterne-->
<!-- Se la pagina è una pagina web, non funzionerà senza il protocollo HTTP.-->
<!-- Se la pagina è una pagina locale interna, ovvero della root del nostro progetto, funzionerà da link alla pagina-->
<h3>Elemento link</h3>
<p>
    <a href="www.google.it">vai su google, link a "www.google.it", una pagina web senza HTTP protocol (non funzionante)</a>
</p>
<p>
    <a href="LinkLocali\02_HTML_ElementiBase_PAG2.html">vai su 02_HTML_ElementiBase_PAG2.html, link interno alla root del progetto</a>
</p>
<p>
    <a href="http://www.google.it">vai su google, link a "http://www.google.it", una pagina web con HTTP protocol (funzionante)</a>
</p>

<!-- <img> link di un'immagine-->
<!-- Anche in questo caso è possibile inserire immagini provenienti da pagine web, ricordando di anteporre il protocollo HTTP-->
<!-- Oppure è possibile inserire un'immagine locale-->
<h3>Elemento Immagine</h3>
<p>
    <img src="https://media.laregione.ch/files/domains/laregione.ch/images/4bvc/l_-gatto-boschi-natura-animale-svizzera-m9ma.jpg?v=1">
</p>
<p>
    <img src="LinkLocali\ImmagineGatto.jpg">
</p>
</div>

# Lezione 06

## Tabelle HTML

Andiamo direttamente a vedere una struttura completa per la creazione di una tabella tramite il tag `table`.

```HTML
<table border="1" width="50%">
    <tr>
        <th>Animali</th>
        <td>cane</td>
        <td>gatto</td>
        <td>elefante</td>
    </tr>
    <tr>
        <th>Social media</th>
        <td>facebook</td>
        <td>linkedin</td>
        <td>instagram</td>
    </tr>
</table>
```

<div class="outputHTML">
<table border="1" width="50%">
    <tr>
        <th>Animali</th>
        <td>cane</td>
        <td>gatto</td>
        <td>elefante</td>
    </tr>
    <tr>
        <th>Social media</th>
        <td>facebook</td>
        <td>linkedin</td>
        <td>instagram</td>
    </tr>
</table>
</div>


Il tag `table` accetta come attributi `border` e `width` (e molti altri).
`border` rappresenta di fatto il bordo, come valore accetta un numero decimale che rappresenterà la grandezza del bordo. `width` invece rappresenta la grandezza della tabella e può essere espressa con un numero decimale il quale verrà interpretato come numero di pixel con il quale si desidera realizzare la grandezza tabella o con un numero percentuale e in questo caso la tabella sarà grande in modo relativo alla grandezza della pagina in base alla percentuale inserita. Se scrivo `width="200"` la tabella sara grande 200 pixel. Se scrivo `width="50%"` la tabella occuperà meta' pagina.
`tr` e `td` stanno rispettivamente per "table row" e "table data". Con `tr` sarà possibile inserire una riga, con `td` sarà possibile inserire un elemento all'interno della riga. `th` invece sta "table header" e sta per il titolo della tabella. A seconda di dov'è inserito rappresenterà il titolo della colonna o della riga. Nell'esempio sopra riportato la tabella è scritta in modo tale che il titolo venga generato all'interno della riga.

## Lezione 08

Vediamo una tabella complessa con bordo, titolo e che metta insieme immagini-link, link ipertestuali e testo.

```HTML
<h3>Tabella complessa</h3>
<p>
    <table border="20" width="100%">
        <tr>
            <th>Social Media</th>
            <th>Link</th>
            <th>Opinione</th>
        </tr>
        <tr>
            <td><img src="https://icons.iconarchive.com/icons/sicons/basic-round-social/256/linkedin-icon.png"></td>
            <td><a href="https://it.linkedin.com/">Linkedin</a></td>
            <td>Social Aziendale</td>
        </tr>
        <tr>
            <td><img src="data:image/jpeg;base64,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"></td>
            <td><a href="https://it-it.facebook.com/">Facebook</a></td>
            <td>Social Individuale non utile</td>
        </tr>
        <tr>
            <td><img src="data:image/jpeg;base64,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"></td>
            <td><a href="https://www.instagram.com/?hl=it">Instagram</a></td>
            <td>Social Individuale non utile</td>
        </tr>
    </table>
</p>
```
<div class="outputHTML">
<h3>Tabella complessa</h3>
<p>
    <table border="20" width="50%">
        <tr>
            <th>Social Media</th>
            <th>Link</th>
            <th>Opinione</th>
        </tr>
        <tr>
            <td><img src="https://icons.iconarchive.com/icons/sicons/basic-round-social/256/linkedin-icon.png"></td>
            <td><a href="https://it.linkedin.com/">Linkedin</a></td>
            <td>Social Aziendale</td>
        </tr>
        <tr>
            <td><img src="data:image/jpeg;base64,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"></td>
            <td><a href="https://it-it.facebook.com/">Facebook</a></td>
            <td>Social Individuale non utile</td>
        </tr>
        <tr>
            <td><img src="data:image/jpeg;base64,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"></td>
            <td><a href="https://www.instagram.com/?hl=it">Instagram</a></td>
            <td>Social Individuale non utile</td>
        </tr>
    </table>
</p>
</div>


# Lezione 08

## Input:

l'elemento `<input>` permette di inserire un input che sia una casella di testo, una checkbox, una scelta multipla, una droplist e molto altro.

**Input testuale:**
```HTML
Inserisci il tuo nome: <input type="text">
```
<div class="outputHTML">
Inserisci il tuo nome: <input type="text">
</div>
<br>
<br>

**Input checkbox:**
```HTML
Accetta le condizioni di utilizzo: <input type="checkbox">
```
<div class="outputHTML">
Accetta le condizioni di utilizzo: <input type="checkbox">
</div>
<br>
<br>

**Input droplist menu':**
```HTML
<select>
    <option>Anno</option>
    <option>1990</option>
    <option>1991</option>
    <option>...</option>
</select>
```
<div class="outputHTML">
<select id="anno" required>
    <option disabled selected>Anno</option>
    <option>1990</option>
    <option>1991</option>
    <option>...</option>
</select>
</div>
<br>
<br>

**Input selezione multipla:**
```HTML
A <input type="radio">
B <input type="radio">
```
<div class="outputHTML">
A <input type="radio">
B <input type="radio">
</div>
<br>
<br>

## Alcuni attributi degli input
Vediamo alcuni attributi principali degli input. Ricordiamo che gli attributi in un tag vanno a specificare il comportamento del tag andandolo a personalizzare.

Attributo `Placeholeder`:
Utilizzato per inserire una stringa di testo da visualizzare di default in una casella di testo input in modo tale da aiutare l'utente a capire cosa dovrà scrivere. Ecco un esempio:

```HTML
Inserisci il tuo nome: <input type="text" placeholder="nome">
```
<div class="outputHTML">
Inserisci il tuo nome: <input type="text" placeholder="nome">
</div>
<br>
<br>

Attributo `Required`:
Utilizzato quando l'input in questione è necessario per la compilazione del form. Supponiamo di dover creare un account per un sito, sicuramente non ci farà procedere se non si è inserita un'email e una password. In questo caso l'input relativo alla casella testuale "email" e quello relativo alla casella testuale "password" avranno l'attributo `Required`.

Attributo `name`:
Utilizzato per rendere unico e mutuamente esclusivo un input. Piu' avant vedremo come applicare questo concetto alla selezione multipla nel capito delle label.

## Button
Per inserire un bottone è possibile utilizzare il tag `<button>` o l'input `<input type="submit">`.

```HTML
<button>clicca qui</button>
<input type="submit">
```
<div class="outputHTML">
<button>clicca qui</button>
<input type="submit">
</div>
<br>
<br>

C'è da precisare che tali bottoni hanno senso in contesto di un form e se a tali bottoni è associata un'azione ma vedremo piu' avanti.

## Label
le label servono per associare un nome, un'etichetta a un input in modo tale che sia associata univocamente a tale input. La label avrà un nome identificativo, rappresentato all'interno dell'attributo `for` e un testo che in generale potranno differire. Per associare la label all'input, l'input dovrà avere un attributo `id` che dovrà coincidere con l'attributo `for` della label. Se ciò avviene si sarà creata un associazione tra l'etichetta e l'input.

```HTML
<label for="nome_PC">Nome PC:</label>
<input id="nome_PC" type="text" placeholder="Cognome" required>
```
<div class="outputHTML">
<label for="nome_PC">Nome PC:</label>
<input id="nome_PC" type="text" placeholder="es: DELL-7450" required>
</div>
<br>
<br>

Cliccando su "Nome PC" il focus viene spostato sulla casella di testo.

**Nota:** E' sempre bene inserire una label per ogni input anche se non c'è nessuna etichetta. Sarà più chiaro in futuro.

Vediamo un'altro esempio di utilizzo della `label` in combinazione con l'attributo `name`. In questo esempio si renederà unica la scelta di un input nella selezione multipla.

```HTML
<label for="uomo">Uomo</label>
<input name="genere" id="uomo" type="radio" required>
<label for="femmina">Femmina</label>
<input name="genere" id="femmina" type="radio" required>
```
<div class="outputHTML">
<label for="uomo">Uomo</label>
<input name="genere" id="uomo" type="radio" required>
<label for="donna">Donna</label>
<input name="genere" id="donna" type="radio" required>
</div>

# Lezione 10

## Form
Si apre un tag `<form>` quando vogliamo inserire una serie di input che fanno parte dello stesso contesto. <br> Se non si aprisse un form e inserissimo gli input, l'effetto visuale sarebbe lo stesso ma non sarebbero collegati di contesto. Cio' implica ad esempio che qualora schiacciassimo un tasto che vorremo fosse associato a determinati input con la funzione di "assegnazione degli input" non succederebbe niente, verrebbe interpretato chiaramente come un tasto non "agganciato" a nessuna serie di input. Inserendolo invece in un form con input di varia natura invece si associa l'azione del tasto collegata in qualche modo agli input testuali.

## Form validation

Importanti sono i form validation ovvero controlli piu' o meno accurati che vengono fatti in caso di errori nella digitazione degli input. <br>
Alcuni esempi sono i vari gradi di password validation, cioè alert che compaiono quando la password inserita è troppo corta o troppo lunga o le email validation che effettuano controlli sul campo testuale contenente l'email.

## password Validation:

```HTML
<form>
    <input id="password" type="password" placeholder="nuova password" pattern=".{5,10}" required title="5-10 caratteri" required>
    <button>OK</button>
</form>
```
<form>
    <input id="password" type="password" placeholder="nuova password" pattern=".{5,10}" required title="5-10 caratteri" required>
    <button>OK</button>
</form>


## email Validation:

```HTML
<form>
    <label for="email"></label>
    <input id="email" type="email" placeholder="email" required>
    <button>OK</button>
</form>
```
<form>
    <label for="email"></label>
    <input id="email" type="email" placeholder="email" required>
    <button>OK</button>
</form>


## Altro conclusioni:

Vediamo altri attributi e tag per concludere questa prima parte con HTML.

## Attributo `disabled selected`:

Con l'attributo `disabled` seguito dall'attributo `selected` è possibile inserire un placeholder non selezionabile nelle droplist

```HTML
<select id="giorno" required>
    <option disabled selected>Giorno</option>
    <option>1</option>
    <option>2</option>
    <option>..</option>
</select>
```

<select id="giorno" required>
    <option disabled selected>Giorno</option>
    <option>1</option>
    <option>2</option>
    <option>..</option>
</select>

# Lezione 10

## Tag `<div>`
Il tag `<div>` ha piu' o meno lo scopo del tag `<p>` ma serve a separare gli oggetti come caselle di testo di input/output. E' possibile verificare la differenza tra i due tag.

```HTML
<select>
    <option disabled selected>Giorno</option>
    <option>1</option>
    <option>2</option>
    <option>..</option>
</select>
<select>
    <option disabled selected>Mese</option>
    <option>Gennaio</option>
    <option>Febbraio</option>
    <option>...</option>
</select>
<select>
    <option disabled selected>Anno</option>
    <option>1990</option>
    <option>1991</option>
    <option>...</option>
</select>
```

<select>
    <option disabled selected>Giorno</option>
    <option>1</option>
    <option>2</option>
    <option>..</option>
</select>
<select>
    <option disabled selected>Mese</option>
    <option>Gennaio</option>
    <option>Febbraio</option>
    <option>...</option>
</select>
<select>
    <option disabled selected>Anno</option>
    <option>1990</option>
    <option>1991</option>
    <option>...</option>
</select>


```HTML
<div>
    <select>
        <option disabled selected>Giorno</option>
        <option>1</option>
        <option>2</option>
        <option>..</option>
    </select>
</div>
<div>
    <select>
        <option disabled selected>Mese</option>
        <option>Gennaio</option>
        <option>Febbraio</option>
        <option>...</option>
    </select>
</div>
<div>
    <select>
        <option disabled selected>Anno</option>
        <option>1990</option>
        <option>1991</option>
        <option>...</option>
    </select>
</div>
```
<div>
    <select>
        <option disabled selected>Giorno</option>
        <option>1</option>
        <option>2</option>
        <option>..</option>
    </select>
</div>
<div>
    <select>
        <option disabled selected>Mese</option>
        <option>Gennaio</option>
        <option>Febbraio</option>
        <option>...</option>
    </select>
</div>
<div>
    <select>
        <option disabled selected>Anno</option>
        <option>1990</option>
        <option>1991</option>
        <option>...</option>
    </select>
</div>
<br>
<br>

# Lezione 09

## Form
Qua sotto vedremo un esempio concreto di un form per la compilazione dati necessario quando si effettua una nuova registrazione su un sito come potrebbe essere ad esempio un social network.

```HTML
 <form>
    <label for="nome"></label>
    <input id="nome" type="text" placeholder="Nome" required>
    <label for="cognome"></label>
    <input id="cognome" type="text" placeholder="Cognome" required>
    <div>
        <label for="email"></label>
        <input id="email" type="email" placeholder="email" required>
    </div>
    <div>
        <label for="password"></label>
        <input id="password" type="password" placeholder="nuova password" pattern=".{5,10}" required title="5-10 caratteri" required>
    </div>       
    <p>
        Data di Nascita:
    </p>
    <div>
        <label for="giorno"></label>
        <select id="giorno" required>
            <option disabled selected>Giorno</option>
            <option>1</option>
            <option>2</option>
            <option>..</option>
        </select>
        <label for="mese"></label>
        <select id="mese" required>
            <option disabled selected>Mese</option>
            <option>Gennaio</option>
            <option>Febbraio</option>
            <option>...</option>
        </select>
        <label for="anno"></label>
        <select id="anno" required>
            <option disabled selected>Anno</option>
            <option>1990</option>
            <option>1991</option>
            <option>...</option>
        </select>
    </div>
    <div>
        <label for="uomo">Uomo</label>
        <input name="genere" id="uomo" type="radio" required>
        <label for="femmina">Femmina</label>
        <input name="genere" id="femmina" type="radio" required>
    </div>
    <div>
        <label for="condizioni">Accetto le condizioni di utilizzo</label>
        <input type="checkbox" name="codizioni" id="condizioni" required>
    </div>
    <div>
        <button>Iscriviti</button>
    </div>
</form>
```

<div class="outputHTML">
 <form>
    <label for="nome"></label>
    <input id="nome" type="text" placeholder="Nome" required>
    <label for="cognome"></label>
    <input id="cognome" type="text" placeholder="Cognome" required>
    <div>
        <label for="email"></label>
        <input id="email" type="email" placeholder="email" required>
    </div>
    <div>
        <label for="password"></label>
        <input id="password" type="password" placeholder="nuova password" pattern=".{5,10}" required title="5-10 caratteri" required>
    </div>       
    <p>
        Data di Nascita:
    </p>
    <div>
        <label for="giorno"></label>
        <select id="giorno" required>
            <option disabled selected>Giorno</option>
            <option>1</option>
            <option>2</option>
            <option>..</option>
        </select>
        <label for="mese"></label>
        <select id="mese" required>
            <option disabled selected>Mese</option>
            <option>Gennaio</option>
            <option>Febbraio</option>
            <option>...</option>
        </select>
        <label for="anno"></label>
        <select id="anno" required>
            <option disabled selected>Anno</option>
            <option>1990</option>
            <option>1991</option>
            <option>...</option>
        </select>
    </div>
    <div>
        <label for="uomo">Uomo</label>
        <input name="genere" id="uomo" type="radio" required>
        <label for="femmina">Femmina</label>
        <input name="genere" id="femmina" type="radio" required>
    </div>
    <div>
        <label for="condizioni">Accetto le condizioni di utilizzo</label>
        <input type="checkbox" name="codizioni" id="condizioni" required>
    </div>
    <div>
        <button>Iscriviti</button>
    </div>
</form>
</div>



