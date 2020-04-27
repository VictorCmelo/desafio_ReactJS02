#  :heavy_check_mark: Desafio 02 - ReactJs 

Complementando os conceitos de Node.js este desafio cria um Frontend que interage com o Backend criado no [desafio 01](https://github.com/VictorCmelo/desafio_node01)

## O que é o ReactJS

- Uma biblioteca para construção de interfaces
- Utiliza o Single-Page-Aplications ( tudo fica em uma página)

## Escrito em JSX 

- Linguagem para escrever Html dentro do JavaScript

Exemplo de JSX

```
Import React from 'react';

import './buttom.css';
import icon from './button.png';

function Button(){
	return(
		<button>
			<img src={icon} />
		</button>
	);
}
```

### Babel / Webpack

> O Babel serve como um "convertedor" de código Js para que todos os browsers entendam 
> WebPack: Cria um arquivo que "ensina ao Js como importar arquivos com extensões como: .css, .jpg e outras

## [Axios](https://github.com/axios/axios) 

Uma Api que fax a  conexão do Backend com o Frontend 

## Cors 

> CORS (Cross-Origin Resource Sharing) é uma especificação do W3C que, quando implementado pelo navegador, permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.


#  :pushpin: O DESAFIO: 
A aplicação que armazena repositórios do portfólio, o qual o backend foi  desenvolvido  no último desafio utilizando o Node.js.

