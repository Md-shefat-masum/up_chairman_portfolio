var app_config = {
    api_host: "/",
    api_prefix: "api/v1",
    api_endpoint: "",
};

app_config.api_endpoint = app_config.api_host +'/'+ app_config.api_prefix;

export default app_config;