import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('app');

/**
 * Styling van React componenten lijkt sterk op hoe je native HTML element
 * zou stylen. Er zijn 2 opties: CSS classes en inline styles. Deze styling
 * kan worden doorgegeven aan het component via de inmiddels bekende `props`.
 *
 * Voorbeeld:
 *
 *  ```
 *  ReactDOM.render(<input className="form-field"/>, container);
 *  ReactDOM.render(<input className="c-form__field"/>, container);
 *  ```
 *
 * Het valt je misschien op dat we in het bovenstaande voorbeeld gebruik maken
 * van de prop met de naam `className` in plaats van class. Dit komt omdat het
 * woord class een gereserveerde naam in javascript is, dus om conflicten te voorkomen
 * gebruiken we className om een CSS class aan een element te geven.
 *
 * Daarnaast is er ook de mogelijkheid om gebruik te maken van inline styles. Deze manier
 * maak het mogelijk om direct styling aan een component mee te geven zonder gebruik te
 * maken van CSS classes. Deze inline styling worden gedefineerd als een javascript
 * object. Ondanks dat inline styles nog vaak als anti pattern worden gezien, wordt
 * deze methode toch steeds populairder omdat dit een aantal grote voordelen met zich mee
 * brengen. Om het simpel te houden gaan we hier nog niet op in.
 *
 * Voorbeeld:
 *
 *  ```
 *  ReactDOM.render(
 *    <input style={{
 *      border: '1px solid #000',
 *      fontSize: 18,
 *      width: 150
 *    }} />, container
 *  );
 *  ```
 *
 * Wanneer je gebruik maakt van inline style property namen die een streepje (bijv. font-size)
 * bevatten dan moet je deze eerst omzetten naar camel case. (font-size -> fontSize). Dit
 * is in lijn met de DOM spec voor inline styles. Daarnaast worden alle nummerieke
 * property waardes geinterpereerd als `px`. Bijvoorbeeld fontSize: 18 is het zelfde als
 * fontSize: '18px'.
 *
 * Oefening 3A:
 *
 *  Creëer een `Box` component. Dit component rendered een `div` en accepteerd
 *  een `size` en `style` prop. De volgende CSS classes kan je gebruiken:
 *    - c-box: bevat the basis styling voor het component.
 *    - c-box--large: render een grote box.
 *    - c-box--medium: render een middelgrote box.
 *    - c-box--small: render een kleine box.
 *
 *  Wanneer de waarde van de `size` prop gelijk aan large is dan moet de box
 *  gebruik maken van de class c-box--large. Dit component moet ook elk
 *  type inline styles accepteren en renderen.
 *
 *  Success!
 */


/**
 *
 * Nu is het tijd om styling en propType validatie toe te passen.
 *
 * Oefening 3B:
 *  Maak gebruik van het box component van oefening 3A en voeg propType
 *  validatie toe. Alleen de `sizes` large, medium en small zijn toegestaan.
 *  De `size` en `style` props zijn verplicht.
 *
 */

/**
 * Oefening 3C:
 *  Maak `size` optioneel, waneer er geen size wordt meegestuurd wordt medium
 *  gebruikt.
 */


/**
 * Oefening 3D:
 *  Maak styles optioneel, zorg ervoor dat wanneer er geen style prop wordt meegestuurd
 *  de box een standaard background-color heeft.
 */

/**
 * Oefening 3E (Bonus):
 *  Voeg de prop `rotation` toe, hiermee moet worden kunnen worden aangegeven of de box
 *  een rotatie moet krijgen en hoeveel. Indien er geen rotatie word meegegeven wordt er
 *  ook geen rotatie gezet.
 */
