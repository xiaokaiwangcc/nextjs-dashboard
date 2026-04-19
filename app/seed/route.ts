import bcrypt from 'bcrypt';
import sql from '../lib/db';
// TODO: 添加 placeholder-data.ts 文件来启用数据库 seed
// import { invoices, customers, revenue, users } from '../lib/placeholder-data';

export async function GET() {
  return Response.json({ 
    message: 'Seed route ready. Add placeholder-data.ts file to enable seeding.' 
  });
  
  // 取消下面的注释来启用 seed 功能
  /*
  try {
    await sql.begin(async (sql) => {
      // seedUsers(),
      // seedCustomers(),
      // seedInvoices(),
      // seedRevenue(),
    ]);
    
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
  */
}
