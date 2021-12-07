exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || '';
  console.log("Hello, you!");

  return {
    statusCode: 200,
    body: "it twerks " + name,
  };
};
