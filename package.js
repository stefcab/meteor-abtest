Package.describe({
  summary: "Simple AB testing framework for Meteor"
});

Package.on_use(function(api){
    //api.use('standard-app-packages', ['client', 'server']);
    api.use('coffeescript', ['client', 'server']);
    api.use('templating', 'client');
//    api.use(['templating'], ['client', 'server']);
//    api.use(['templating','spacebars','ui'], 'client');


    api.add_files(['abtest-client.coffee'], 'client');
    api.add_files(['abtest-server.coffee'], 'server');
    api.add_files(['abtest-both.coffee'], ['client', 'server']);

    api.add_files(['abtest-dashboard.coffee', 'abtest-dashboard.html'], 'client');

    api.export('ABTest');
    api.export('ABTestServer');
});