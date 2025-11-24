module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"], // Isso já inclui todas as configurações padrão do Expo
        plugins: [
            [
                "module:react-native-dotenv", // Esse plugin é suficiente para configurar o .env
                {
                    moduleName: "@env",   // Nome do módulo usado para importar variáveis
                    path: ".env",         // Caminho para o arquivo .env
                },
            ],
        ],
    };
};
