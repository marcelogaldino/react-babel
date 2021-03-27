module.exports = {
    presets: [
        '@babel/preset-env', // converte codigo do js ES6+ para um js mais antigo baseado no ambiente que estamos, podemos definir targets tambem. Ex: rode no ie v10
        '@babel/preset-react' // adiciona as funcionalidades do react na conversao, JSX por exemplo
    ]
}