import React from 'react';
import ReactDOM from 'react-dom';

/**
 * De gedachtengang van React is wel even wennen. De data-flow gaat namelijk maar
 * één kant op, wat ervoor zorgt dat de logica van de applicatie voorspelbaarder en
 * beter te begrijpen is. Het is wat lastig uit te leggen, maar als je er eenmaal mee
 * bezig bent wordt het een stuk duidelijker.
 *
 * Eén van de fijne punten in React is het werken in componenten. Alle logica en code
 * voor een bepaald component zit in één bestandje. Hier begint de tutorial dan ook mee.
 * De componenten worden in JSX geschreven, wat lijkt op een combinatie tussen HTML en
 * JavaScript. Verder wordt ook het doorgeven van data behandeld tussen componenten, waar
 * je dus in aanraking komt met de data-flow van React.
 *
 * In React is alles dus een component. Een component kan worden gemaakt met de
 * functie `React.createElement`. Het resultaat hiervan kan dan worden gebruikt door
 * `ReactDOM.render`.
 *
 * Voorbeeld:
 *
 *  ```
 *  ReactDOM.render(
 *    React.createElement('div', null, 'This is my component'),
 *    document.getElementById('app')
 *  );
 *  ```
 *
 * Dit komt overeen met:
 *
 *  ```
 *  let component = document.createElement('div');
 *  let container = document.getElementById('app');
 *
 *  component.innerHTML = 'This is my component';
 *  container.innerHTML = '';
 *
 *  container.appendChild(component);
 *  ```
 *
 * Wat zegt de API?:
 *
 *  `React.createElement` creates a `ReactElement` and takes the following arguments:
 *    - type: This can be an HTML tag name (e.g., 'div', 'span', etc), or a `ReactClass`
 *    - props: This is an object defining the properties for the element
 *    - children: This is the inner content of the element, which can be a string of text, or `ReactElement`
 *
 *  `ReactDOM.render` will render an element to the DOM and takes two arguments:
 *    - element: This is the `ReactElement` to be rendered.
 *    - container: This is the DOM element to render to.
 *
 * Oefening 1A:
 *
 * Creëer een `ReactElement` element welke wordt gebruikt om de tekst "Hello World yoo"
 * te renderen.
 *
 */

ReactDOM.render(
  React.createElement('div', null, 'Hello World'),
  document.getElementById('app')
);

/**
 *
 * Goed bezig en denk erom:
 * https://s-media-cache-ak0.pinimg.com/originals/89/49/17/894917caa2734906cff27783e881dc14.jpg
 *
 *
 * Oefening 1B:
 *
 * Creëer een `ReactElement` object welke wordt gebruikt om het adress van redhotminute
 * op deze manier weer te geven:
 *
 *   info@redhotminute.com
 *   +31 418 510 068
 *   Graaf Reinaldweg 22-26 4176 LX Tuil
 *   KVK 11051623
 *   BTW NL 810157408B01
 *
 */

ReactDOM.render(
  React.createElement('div', null, 'Hello World'),
  document.getElementById('app')
);

/**
 *
 * Leuk en aardig die createElement functie maar dit wordt een zooitje zo. Ik dacht dat React
 * juist overzichtelijk was?
 *
 * Dat klopt! Eigenlijk schrijft niemand op deze manier React componenten, maar dit wordt gedaan
 * met de nieuwe JSX markup. Deze markup is bedoeld om overzichtelijkere en voorspelbaardere
 * componenten te ontwikkelen.
 *
 * JSX is geheel optineel en vereist een transpiler zoals babel + babel-preset-react om hier
 * voor de browser begrijpbare taal van te maken. Waarschijlijk gebruik je nu ookal babel +
 * babel-preset-es2015 om je ES6 javascript werkend te krijgen in oudere browsers.
 *
 * Laten we eens kijken naar een voorbeeld van JSX:
 *
 *  ```
 *  ReactDOM.render(<div>This is my component</div>, document.getElementById('app'));
 *  ```
 *
 * Ik weet dat je zit te denken: "Waarom zit er HTML in mijn JavaScript?!" Dit is een typische
 * eerste reactie. Vergeet niet dat het optineel is om JSX te gebruiken, toch ben ik er van
 * overtuigd dat JSX je steeds beter zult bevallen. sidenote; Als je wilt weten waarom deze
 * benadering in mijn optiek juist een best practice is en geen anti pattern, kan je dit onderaan
 * deze file vinden.
 *
 * Realiseer je dat dit voorbeeld met JSX, na compilatie, precies dezelfde code produceerd als
 * in het eerste voorbeeld.
 *
 * Oefening 1C:
 *
 *  Refactor je vorige oplossing door gebruik te maken van JSX
 *
 */

ReactDOM.render(<div>Hello World!</div>, document.getElementById('app'));


/**
 *
 * Hier onder een stukje nerd uitleg waarom in mijn optiek JSX niet tegen best practices
 * in gaat:
 *
 * De JSX markup is bedoeld om overzichtelijkere en voorspelbaardere
 * componenten te ontwikkelen. Door HTML en javascript (nee css wordt niet vergeten) samen te
 * brengen in dezelfde laag (lees bestand) kan dit doel worden bereikt.
 *
 * Deze manier heeft aanvankelijk binnen de frontend wereld voor ophef gezorgd. De gevestigde
 * frameworks scheidden sinds mensen heugenis allemaal HTML en Javascript in aparte bestanden.
 * Deze benadering werd weer lang gezien als absolute 'best practice'. Dit werd door een aantal
 * ook wel separation of concerns genoemd.
 *
 * Maar is dat wel zo? Is het scheiden op deze manier wel separation of concerns?
 *
 * Nou.. nee, deze aanpak heeft eigenlijk niet zo veel met te maken met het scheiden van 'concerns'
 * Sterker nog, er worden hierdoor juist een aantal nieuwe 'concerns' geintroduceerd.
 * Deze manier is meer vergelijkbaar het met separation of technologies; we scheiden CSS, HTML
 * en Javascript van elkaar omdat het andere technologieen betreffen. Niet omdat ze zich bezig
 * houden met een andere concerns.
 *
 * Wait wut? Laten we voorbeeld gebruiken om dit iets te verduielijken;
 * We hebben een custom date range picker, dit component bestaat vaak uit css, html en javascript.
 * Simpel gezegd houden alle 3 de technologieen, zich voornamelijk bezig met hetzelfde 'concern':
 * namelijk, het faciliteren van visuele presentatie laag van de picker. Hoe deze picker aan zijn
 * data komt (denk aan dagen van de maand, datum van vandaag, enz.) is op dit moment niet zo relevant.
 *
 * Dat html en javascript hebben nog een andere functie hebben, namelijk strcutuur en interactie,
 * is goed te weerleggen. Horen symantiek en ineractie niet bij de presentatie laag?
 *
 * We scheiden dus html, css en javascript terwijl voornamelijk worden ingezet voor
 * de presentatie laag van de date range picker. Waarom werd dit dan zolang als best practice gezien?
 * Dit komt vooral omdat we jaren lang (nu nog steeds) gebruik maken CMS en server side content systemen
 * waarbij de templates in het systeem moesten zitten en de javascript en css vaak los werd gehouden.
 * Kijk bijvoorbeeld naar Sitecore met de cshtml/aspx files. De html template wordt in de data laag gebakken
 * en de css en javvascript komen er los boven op. Eigenlijk zou je data en presentatie van elkaar
 * willen scheiden. Het CMS als content provider en een apparte laag welke deze data omzet naar een
 * presenteerbare interface zodat de 2 hoofd concerns van iedereen webapp gescheiden kunnen worden;
 * data laag en presentatie laag.
 *
 * Om een lang verhaal lang te maken, terug naar JSX. JSX steld ons dus in staat om vitale presentaie
 * concerns op de logische plek binnen de applicatie te borgen.
 *
 *
 */
