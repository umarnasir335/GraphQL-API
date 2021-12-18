{
  it('should respond with a 404 for a not found state', async () => {
    await supertest(app)
      .get('/api/v1/states/4200')
      .expect('Content-Type', /json/)
      .expect(404);
  });
  function references(table, tableName, notNullable = true, columnName = '') {
    const definition = table
      .integer(`${columnName || tableName}_id`)
      .unsigned()
      .references('id')
      .inTable(tableName)
      .onDelete('cascade');
  
    if (notNullable) {
      definition.notNullable();
    }
    return definition;
  }
}