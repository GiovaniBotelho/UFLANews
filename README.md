# Aplicativo UFLANews

## Projeto

<p>Visando deixar as notícias e informativos da comunidade acadêmica, ou até mesmo da comunidade de Lavras em geral, mais acessíveis, foi proposto uma ideia de aplicativo que seja capaz de direcionar e filtrar aquilo que o usuário se interesse em acompanhar. O projeto da disciplina GCC132 - Modelagem e Implementação de Software consiste na implementação de um aplicativo informativo, cujo nome será <b>UflaNews</b>.</p> <p>O aplicativo tem como objetivo apresentar um feed de publicações de boletins eletrônicos da UFLA, contendo publicadores de diversas áreas da universidade, tais como incubadora de empresas (Inbatec), o restaurante universitário (RU), Pró-Reitoria de Graduação (PRG), entre outros, que permita o usuário acompanhar aquilo que deseje de acordo com sua escolha.</p>

**Equipe de Desenvolvimento**: [Breno Tiso](https://github.com/brenotiso), [Giovani Botelho](https://github.com/GiovaniBotelho), [Maurício Vieira](https://github.com/mauriciovr13), [Pedro Moreira](https://github.com/pereke) e [Vinícius Spinelli](https://github.com/VSpinelliG).

**Atores do sistema**:
* **Usuário**: interage com o aplicativo para a realização de tarefas de seu interesse.
* **UFLANews API**: responsável por gerir os dados exibidos no aplicativo (notícias, likes, entre outros).

**Diagrama de casos de uso**:

![Diagrama de casos de uso do aplicativo](https://i.imgur.com/2SYBmue.png)

**Links úteis**:
* [Documento de requisitos](https://github.com/GiovaniBotelho/UFLANews/issues)
* [Protótipo de interface gráfica](https://xd.adobe.com/spec/65353875-2f7a-44a8-7527-9e1c9037238c-1304/).

## Framework

[React Native](https://facebook.github.io/react-native/) é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.

### Getting Started - React Native

Você precisa seguir os seguintes passos para rodar o projeto:
- Ambiente React Native:
  - Possuir a versão [v10.16.3](https://nodejs.org/dist/v10.16.3/) do nodejs.
  - Possuir um ambiente React Native previamente configurado. [Leia mais](https://facebook.github.io/react-native/docs/getting-started.html).
- Instalar dependências do projeto:
  ```
  yarn install
  ```
- Criar chave para o apk:
  ```
  cd android/app/
  keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
  ```
- Rodar o aplicativo em dispositivos Android: 
  ```
  react-native run-android
  ```
- Rodar o aplicativo em dispositivos iOS:
  - Rodar pelo XCode

### Estrutura
A estrutura do projeto será de acordo com esta [publicação](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) da plataforma Medium.
