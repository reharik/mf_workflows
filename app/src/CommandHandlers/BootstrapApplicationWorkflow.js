/**
 * Created by parallels on 7/16/15.
 */
"use strict";

module.exports = function(eventhandlerbase,
                          eventrepository,
                          //readstorerepository,
                          logger,
                          fs,
                            uuid,
                            appdomain) {



    function BootstrapApplicationWorkflow() {
        if (!(this instanceof BootstrapApplicationWorkflow)) {
            return new BootstrapApplicationWorkflow();
        }

    }

    return {
        handlesEvents: ['bootstrapApplication'],
        handleEvent  : function(event) {
            var handlerBase = eventhandlerbase(event, 'bootstrapApplication', this.handlers[event.eventName]);
            return handlerBase.application(event);
        },
        handlers     : {
            loginTrainer(vnt) {
                console.log(vnt);
                this.createNotification(vnt);
                var trainer = eventrepository.getById(appdomain.Trainer, vnt.Id);
                trainer.loginTrainer(vnt);
                eventrepository.save(trainer, {continuationId});
            },
            bootstrapApplication(vnt) {
                console.log('inside bootstrapper handler');
                console.log(vnt);
                //hireTrainer();
                return 'success';
            }
        },

        hireTrainer() {
            logger.info('calling hiretrainer');
            var trainer = new appdomain.Trainer();
            trainer.hireTrainer({
                credentials: {
                    userName: 'admin',
                    password: '123456'
                },
                contact    : {
                    firstName   : 'Raif',
                    lastName    : 'Harik',
                    emailAddress: 'reharik@gmail.com',
                    phone       : '666.666.6666',
                    secondPhone : '777.777.7777'
                },
                address    : {
                    address1: '1706 willow st',
                    address2: 'b',
                    city    : 'Austin',
                    state   : 'TX',
                    zipCode : '78702'
                }
                ,
                dob        : new Date()
            });
            logger.info('saving trainer');
            logger.trace(trainer);
            eventrepository.save(trainer);
        }
    };

    //addStates() {
    //    logger.info('calling addstates');
    //    var script =
    //        "begin; " +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"AK\", \"Name\":\"Alaska\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"AZ\", \"Name\":\"Arizona\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"AR\", \"Name\":\"Arkansas\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"CA\", \"Name\":\"California\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"CO\", \"Name\":\"Colorado\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"CT\", \"Name\":\"Connecticut\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"DE\", \"Name\":\"Delaware\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"DC\", \"Name\":\"District Of Columbia\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"FL\", \"Name\":\"Florida\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"GA\", \"Name\":\"Georgia\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"HI\", \"Name\":\"Hawaii\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"ID\", \"Name\":\"Idaho\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"IL\", \"Name\":\"Illinois\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"IN\", \"Name\":\"Indiana\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"IA\", \"Name\":\"Iowa\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"KS\", \"Name\":\"Kansas\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"KY\", \"Name\":\"Kentucky\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"LA\", \"Name\":\"Louisiana\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"ME\", \"Name\":\"Maine\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"MD\", \"Name\":\"Maryland\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"MA\", \"Name\":\"Massachusetts\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"MI\", \"Name\":\"Michigan\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"MN\", \"Name\":\"Minnesota\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"MS\", \"Name\":\"Mississippi\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"MO\", \"Name\":\"Missouri\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"MT\", \"Name\":\"Montana\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"NE\", \"Name\":\"Nebraska\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"NV\", \"Name\":\"Nevada\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"NH\", \"Name\":\"New Hampshire\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"NJ\", \"Name\":\"New Jersey\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"NM\", \"Name\":\"New Mexico\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"NY\", \"Name\":\"New York\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"NC\", \"Name\":\"North Carolina\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"ND\", \"Name\":\"North Dakota\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"OH\", \"Name\":\"Ohio\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"OK\", \"Name\":\"Oklahoma\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"OR\", \"Name\":\"Oregon\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"PA\", \"Name\":\"Pennsylvania\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"RI\", \"Name\":\"Rhode Island\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"SC\", \"Name\":\"South Carolina\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"SD\", \"Name\":\"South Dakota\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"TN\", \"Name\":\"Tennessee\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"TX\", \"Name\":\"Texas\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"UT\", \"Name\":\"Utah\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"VT\", \"Name\":\"Vermont\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"VA\", \"Name\":\"Virginia\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"WA\", \"Name\":\"Washington\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"WV\", \"Name\":\"West Virginia\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"WI\", \"Name\":\"Wisconsin\"}' );" +
    //        "insert into \"public\".\"states\" (id, document) values ('" + uuid.v4() + "', '{\"Code\":\"WY\", \"Name\":\"Wyoming\"}' );" +
    //        "commit;";
    //
    //    readstorerepository.query(script);
    //}
    //}
};
