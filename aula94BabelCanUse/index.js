// Para iniciar o gerenciador de pacotes do node usar: "npm init -y"
// Para instalar o Babel: " npm install --save-dev @babel/cli @babel/preset-env @babel/core "
// "".gitignore" será ignorada, ele não vai ler.

// para converter o script para um script mais moderno ou antigo: " npx babel index.js -o bundle.js --presets=@babel/preset-env " então será criado um arquivo chamado "bundle.js" onde terá uma versão antiga do código que quero, para então rodar em navegadores antigos.

// "npm run babel coloca pra funcionar"
// ctrl + c para a execução do babel

// "babel": "babel ./index.js -o ./bundle.js --presets=@babel/preset-env -w" que está no package.js, ficará de olho no código, se eu fizer uma alteração no index.js, ele fará o mesmo no bundle (onde se encontra a versão antiga do meu código.)

const nome = "Gabriel";

const obj = {nome};
const novoObj = { ...obj };


console.log(novoObj);



