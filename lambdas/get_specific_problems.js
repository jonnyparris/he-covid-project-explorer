const Airtable = require('airtable');
const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

const base = new Airtable({
  apiKey: AIRTABLE_API_KEY
}).base(AIRTABLE_BASE_ID);

const atTopProblemsTable = base('Specific problems to solve');

// TODO make this async
exports.handler = (_event, _context, callback) => {
  const problems = [];
  atTopProblemsTable
    .select({
      maxRecords: 25,
      view: 'Grid view'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        problems.push(...records.map(record => {
          return {
            id: record.id,
            name: record.get('Problem'),
            category: record.get('Category')
          };
        }));
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          callback(err);
        } else {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(problems)
          });
        }
      }
    );
};
