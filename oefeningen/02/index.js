import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('app');

/**
 * Het is mogelijk om aan React componenten data mee te geven. Deze data noemen we
 * props (van properties). Deze manier lijkt sterk op het gebruik van HTML attributen.
 *
 * Voorbeeld:
 *
 *  ```
 *  ReactDOM.render(
 *    <OrderDetail orderNumber="12345"/>
 *    document.getElementById('app')
 *  );
 *  ```
 *
 * Het meegeven van props aan het component van buiten af zorgt ervoor
 * dat (complexe) logica naar een ander niveau kan verdwijnen. Er onstaat een
 * sterke scheiding tussen implementatie en toepassing maar zorgt er wel
 * voor dat het nog mogelijk is om informatie aan het component door te sturen.
 *
 * Eigenlijk hezelfde principe als een javascript functie. Je roept de
 * functie aan, geeft data mee als argumenten en er komt resultaat uit.
 *
 * Om React te laten weten dat we gebruik willen maken van props, moeten we ons component iets
 * anders definiëren dan we in het vorige voorbeeld hebben gedaan.
 *
 *  ```
 *  let Hello = (props) => {
 *    return <div>Hello {props.children}</div>;
 *  };
 *
 *  ReactDOM.render(<Hello>World</Hello>, container);
 *  ```
 *
 * In dit voorbeeld wordt er gebruik gemaakt van `props.children`, dit is een speciale
 * prop welke eigenlijk alles zal renderen wat eraan wordt doorgegeven middels de `body/content` van het component.
 * Deze benadering is vergelijkbaar met het gebruik van "transclude" icm een Angular directive.
 *
 * Het zal je waarschijnlijk opvallen dat er `curly braces` om `props.children` staan.
 * Dit laat React weten dat het de wat er binnen de braces valt moet worden
 * uit gevoerd als letterlijke javascript.
 *
 * Je kan ook eventuele props accepteren die je nodig hebt voor het maken van je component
 * zoals het voorbeeld hieronder.
 *
 *  ```
 *  let OrderDetail = (props) => {
 *    return (
 *      <div>
 *        <div>Order Number: {props.order.number}</div>
 *        <div>Quantity: {props.order.quantity</div>
 *        <div>Order Total: {props.order.quantity * props.product.price}</div>
 *        <div>Product: {props.product.name}</div>
 *        <div><img src={props.product.imageUrl}/></div>
 *      </div>
 *    );
 *  };
 *
 *  ReactDOM.render(
 *    <OrderDetail
 *      order={{
 *        number: 12345,
 *        quantity: 3
 *      }}
 *      product={{
 *        name: 'Nerf CS-18 N-Strike Elite Rapidstrike',
 *        price: 34.95,
 *        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71D%2Brf9kXuL._SL1500_.jpg'
 *      }}
 *    />, container
 *  );
 *  ```
 *
 * Oefening 2A:
 *
 *  Maak een component waarbij je de gebruikers voor en achter naam gebruikt
 *  om "Hallo Jan Janssen!" te renderen.
 */

let SayHello = (props) => {
  return (
    <div>Hello {props.firstName} {props.lastName}!</div>
  );
};

ReactDOM.render(<SayHello firstName="Jane" lastName="Doe"/>, container);

/**
 * Het kan voorkomen dat je de props die aan je component worden meegegeven wilt
 * valideren, om er zeker van te zijn dat ze aan bepaalde criteria voldoen.
 *
 * Met deze validatie kan je bijvoorbeeld het type controlleren bijv wanneer de waarde
 * van de prop persee een string, nummer, object moet zijn. Hiermee kan je ook aangeven
 * dat een prop verplicht is.
 *
 * Daarnaast heeft React ook een mechanisme waarbij je kan aangeven dat wanneer
 * er geen waarde wordt meegestuurd voor een specifieke prop en deze niet verplicht is,
 * je een standaard waarde kan meegeven.
 *
 * Hiervoor kan je `PropTypes` en `defaultProps` gebruiken.
 *
 * Voorbeeld:
 *
 *  ```
 *  let OrderDetail = (props) => {
 *    return (
 *      <div>
 *        <div>Order Number: {props.order.number}</div>
 *        <div>Quantity: {props.order.quantity</div>
 *        <div>Order Total: {props.order.quantity * props.product.price}</div>
 *        <div>Product: {props.product.name}</div>
 *        <div><img src={props.product.imageUrl}/></div>
 *      </div>
 *    );
 *  };
 *
 *  OrderDetail.defaultProps = {
 *    order: {},
 *    product: {}
 *  };
 *
 *  OrderDetail.propTypes = {
 *    order: PropTypes.object,
 *    product: PropTypes.object
 *  };
 *
 *  ReactDom.render(<OrderDetail/>, container);
 *  ```
 *
 * Meer informatie https://facebook.github.io/react/docs/reusable-components.html#prop-validation
 *
 * Oefening 2B:
 *
 *  Maak een nieuw component dat een `user` object verwacht als prop.
 *  In dit user object zitten zowel de voornaam, achternaam als de nickname
 *  van deze `user` (gebruiker).
 *
 *  De gebruikersnaam dient verplicht te zijn. De voor en achternaam dienen
 *  een standaard waarde te hebben wanneer deze niet zijn meegegeven.
 *
 *  Uit eindelijk moet er iets uitkomen in lijn met "Hello El1teSnipaH32_NL (Henk Jansen)".
 */

let ValidateHello = (props) => {
  return (
    <div>Hello {props.user.firstName} {props.user.lastName}</div>
  );
};

ValidateHello.defaultProps = {
  user: {}
};

ValidateHello.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  })
};

ReactDOM.render(<ValidateHello user={{firstName: 'Jane', lastName: 'Doe'}}/>, container);
