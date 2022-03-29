import { Component } from '../framework/Component';
import { Container } from './Container';
import { Header } from './Header';

export class App extends Component {
  render() {
    super.render([
      new Header({ title: 'Cart App', subTitle: 'Buy and sell !' }),
      new Container(),
    ]);
  }
}

customElements.define('app-app', App);
