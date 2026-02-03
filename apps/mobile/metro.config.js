const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

// Forçamos o Metro a olhar apenas para o node_modules local
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
];

// Importante: NÃO adicionar watchFolders do monorepo para evitar conflitos de resolução
config.watchFolders = [projectRoot];

module.exports = config;
