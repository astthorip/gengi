const fetch = require('node-fetch');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  try {
    // Fetch the data
    const res = await fetch(`https://apis.is/currency/arion`);

    // Transform the data into json
    const data = await res.json();

    // Map over the results array, calling action.createNode on each item in the array
    data.results.forEach(item => {
      const node = {
        ...item, // We copy all of the properties from the item object
        id: createNodeId(`Currency-Item-${item.shortName}`), // Needs to be unique
        internal: {
          type: 'CurrencyItem',
          contentDigest: createContentDigest(item) // We pass in the item object to make sure it's unique
        }
      };

      // Create the actual data node
      actions.createNode(node);
    });
  } catch (error) {
    console.log(error);
  }
};