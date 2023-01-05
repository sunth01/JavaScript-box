import { logger } from './utils/logger.js'

console.log(logger)

logger.http('127.0.0.1')
logger.error('这是一条错误提示')
logger.warn('这是一条提示')