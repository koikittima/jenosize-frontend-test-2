module.exports = {
    apps : [
        {
            name: "jenosize",
            exec_mode: 'cluster',
            instances: 'max',
            script: "./node_modules/.bin/next",
            args : "start",
            watch: true,
            env: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            env_production: {
                "PORT": 3011,
                "NODE_ENV": "production",
            }
        }
    ]
}