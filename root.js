const { aggregateReader } = require('./mongo');

const { User } = require('./classes/user');
const { Organization } = require('./classes/organization');

const root = {
	userList: function({validated}) {
        let filter = {};
        if(typeof validated !== 'undefined') {
            filter = validated ? {validated: true} : {validated: false};
        }

        return new Promise((resolve, reject) => {
            aggregateReader('user', filter, (err, items) => {
                resolve(items.map((item) => { 
                    return new User(item, root) 
                }));
            });
        });
	},
    user: function({userId}) {
        return new Promise((resolve, reject) => {
            aggregateReader('user', {userId: userId}, (err, items) => {
                resolve(new User(items[0], root));
            });
        });
    },
    organizationList: function({owner}) {
        let filter = {};
        if(typeof owner !== 'undefined') {
            filter = owner ? {owner: owner} : {owner: owner};
        }

        return new Promise((resolve, reject) => {
            aggregateReader('organization', filter, (err, items) => {
                resolve(items.map((item) => { 
                    return new Organization(item, root) 
                }));
            });
        });
	},
    organization: function({organizationId}) {
        return new Promise((resolve, reject) => {
            aggregateReader('user', {orgaId: organizationId}, (err, items) => {
                resolve(new Organization(items[0], root));
            });
        });
    }
}

exports.root = root;
