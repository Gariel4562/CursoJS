"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Para iniciar o gerenciador de pacotes do node usar: "npm init -y"
// Para instalar o Babel: " npm install --save-dev @babel/cli @babel/preset-env @babel/core "
// "".gitignore" será ignorada, ele não vai ler.

// para converter o script para um script mais moderno ou antigo: " npx babel index.js -o bundle.js --presets=@babel/preset-env " então será criado um arquivo chamado "bundle.js" onde terá uma versão antiga do código que quero, para então rodar em navegadores antigos.

// "npm run babel coloca pra funcionar"
// ctrl + c para a execução do babel

// "babel": "babel ./index.js -o ./bundle.js --presets=@babel/preset-env -w" que está no package.js, ficará de olho no código, se eu fizer uma alteração no index.js, ele fará o mesmo no bundle (onde se encontra a versão antiga do meu código.)

var nome = "Gabriel";
var obj = {
  nome: nome
};
var novoObj = _objectSpread({}, obj);
console.log(novoObj);
