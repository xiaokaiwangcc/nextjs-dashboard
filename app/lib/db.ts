import postgres from 'postgres';

// 创建全局单例数据库连接，避免多次创建导致连接数耗尽
declare global {
  var cachedSql: ReturnType<typeof postgres> | undefined;
}

const sql = global.cachedSql || postgres(process.env.POSTGRES_URL!, { 
  ssl: 'require',
  // 连接池配置
  max: 10, // 最大连接数
  idle_timeout: 20, // 空闲连接超时（秒）
  max_lifetime: 60 * 30 // 连接最大生命周期（30分钟）
});

if (process.env.NODE_ENV === 'development') {
  global.cachedSql = sql;
}

export default sql;
