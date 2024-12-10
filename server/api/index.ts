export default eventHandler((event) => {
    throw createError({
        status: 200,
        statusMessage: 'This should be a JSON response, not a html page',
    })
});
