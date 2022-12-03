require("dotenv").config();
module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : process.env.EC2USER,
      host : process.env.EC2HOST,
      key  : process.env.EC2KEY,
      ref  : 'origin/main',
      repo : process.env.EC2REPO,
      path : process.env.EC2PATH,
      'pre-deploy-local': '',
      'post-deploy' : 'yarn install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
