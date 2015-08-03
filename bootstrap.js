/**
 * Created by rharik on 6/23/15.
 */
var _container = require('dagon');
module.exports = new _container(x=>
    x.pathToRoot(__dirname)
        .requireDirectoryRecursively('./src')
        .groupAllInDirectory('./src/CommandHandlers', 'commandHandlers')
        .for('gesConnection').instantiate(x=>x.initializeWithMethod('openConnection'))
        .for('gesRepository').instantiate(x=>x.asFunc())
        .for('readModelRepository').require("/src/mf_core/postgres/postgresRepository")
        .rename('lodash').withThis('_')
        .rename('bluebird').withThis('Promise')
        .complete());