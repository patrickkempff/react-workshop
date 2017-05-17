import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('app');

/**
 * Zoals benoemd aan het begin van deze oefeningen, is alles in React een
 * component. Door componenten als bouwstenen te zien, is een volgende logische
 * stap om gebruik te maken van meerdere componenten die we combineren om complexere
 * componenten te ontwikkelen, of zelfs apps!
 *
 * Tot nu toe hebben alleen componenten gemaakt die gebruik maken van native HTML
 * elementen, het is echter prima mogelijk om op precies dezelfde wijze gebruik
 * te maken van andere zelf gemaakte componenten.
 *
 * Voorbeeld:
 *
 *  ```
 *  let FormField = (props) => {
 *    return (
 *      <div className="c-form-group">
 *        <label htmlFor={props.htmlFor}>{props.label}</label>
 *        {props.children}
 *      </div>
 *    );
 *  };
 *
 *  let LoginForm = () => {
 *    return (
 *      <form role="form" className="c-form">
 *        <FormField htmlFor="username" label="Username">
 *          <input className="form-control" name="username" id="username"/>
 *        </FormField>
 *        <FormField htmlFor="password" label="Password">
 *          <input className="c-form__field" name="password" id="password"/>
 *        </FormField>
 *        <button className="c-button c-button--primary">Submit</button>
 *      </form>
 *    );
 *  };
 *
 *  ReactDOM.render(<LoginForm/>, container);
 *  ```
 *
 * We zouden nu `FormField` kunnen verplaatsen in zijn eigen bestand. Hierdoor wordt
 * het mogelijk om zowel beter geisoleerd te kunnen testen als dit component in andere
 * componenten te gebruiken.
 *
 * Oefening 4A:
 *
 *  Creëer een `Person` component met de volgende specificaties.
 *
 *    `Person`:
 *      - Render een `div` met de className `c-person`
 *      - Accepteer de props `name`, `title`, `avatar`, `twitter`, `github`
 *      - Render de name and title van de person
 *      - Render de `Avatar`
 *      - Render links naar twitter and github via het `c-icon` component
 *
 *    `Avatar`:
 *      - Render een `img` met`className` `c-avatar`
 *      - Accepteer de props `size` en `url`
 *      - Stel de hoogte/breedte van de afbeelding bij afhankelijk van
 *        de afbeeldingsgrootte
 *
 *    `Icon`:
 *      - Render een element met de `className` `c-icon`
 *      - Accepteer de props `href` en `type`
 *      - Render een font-awesome icon afhankelijk van `type`
 */

let Person = (props) => {
  return (
    <div className="c-person">
      <Avatar url={props.avatar} size={200}/>
      <b>{props.name}</b>
      <em>{props.title}</em>
      <ul>
        <li><Icon href={`https://twitter.com/${props.twitter}`} type="twitter"/></li>
        <li><Icon href={`https://github.com/${props.github}`} type="github"/></li>
      </ul>
    </div>
  );
}

Person.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string
};

let Avatar = (props) => {
  return (
    <img src={props.url} className="c-avatar" style={{
      width: props.size,
      height: props.size,
      borderRadius: props.size / 2
    }}/>
  );
}

Avatar.defaultProps = {
  size: 200
};

Avatar.propTypes = {
  url: PropTypes.string,
  size: PropTypes.number
};

let Icon = (props) => {
  return (
    <a href={props.href} target="_blank" className="c-icon">
      <i className={`fa fa-${props.type}`}/>
    </a>
  );
};

ReactDOM.render(
  <Person
    name="Edgar"
    title="Afdeling Crediteuren"
    avatar="https://s-media-cache-ak0.pinimg.com/736x/dc/68/c3/dc68c37e8d6c23d5f42c0a768dc1f5a1.jpg"
    twitter="edgar_jiskefet"
    github="edgar"
  />, container
);
