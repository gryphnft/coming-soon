require("dotenv").config();
console.log(process.env);
module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : process.env.USER,
      host : process.env.HOST,
      key  : process.env.KEY,
      ref  : 'origin/main',
      repo : process.env.REPO,
      path : process.env.PATHDIR,
      'pre-deploy-local': '',
      'post-deploy' : 'yarn install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
