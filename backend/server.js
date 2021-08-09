import app from './app';

const portExpress = 3333;
app.listen(portExpress, () => {
  console.log(`🚀 Backend API started in port ${portExpress}`);
});
