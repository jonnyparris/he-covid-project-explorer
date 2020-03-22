const Airtable = require('airtable');
const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

const base = new Airtable({
  apiKey: AIRTABLE_API_KEY
}).base(AIRTABLE_BASE_ID);

const atTopProblemsTable = base('Proposed solutions');

// TODO make this async
exports.handler = (_event, _context, callback) => {
  const proposals = [];
  atTopProblemsTable
    .select({
      maxRecords: 25,
      view: 'Grid view'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        proposals.push(...records.map(record => {
          return {
            id: record.id,
            name: record.get('Title'),
            problem: record.get('Problems tackled')
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
            body: JSON.stringify(proposals)
          });
        }
      }
    );
};
