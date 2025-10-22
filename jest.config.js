export default {
  // El entorno de navegador (DOM) para Testing Library
  testEnvironment: 'jsdom',

  // El transform para que entienda JSX
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },

  moduleFileExtensions: ['js', 'jsx'],
  
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  }
};