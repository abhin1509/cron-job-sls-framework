module.exports.hello = (event) => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "lambda executed successfully!",
        input: event,
      }
    ),
  };
};