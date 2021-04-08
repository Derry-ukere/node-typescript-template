import { LoggerFactory } from './LoggerFactory';

const Logger = LoggerFactory.configure({
  id: 'template-sample',
  level: 'all',
});

export { Logger };
