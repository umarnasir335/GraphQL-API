const supertest = require('supertest');

const app = require('./app');
const project = require('./constants/project');


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/GRAPHQL/i);
  expect(linkElement).toBeInTheDocument();
});

describe('GET /', () => {
  it('should respond with a message', async () => {
    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toEqual(project.message);
  });
});