class User {
    constructor(userData, root) {
        this._root = root;
        this.userId = userData.userId;
        this.username = userData.username;
        this.email = userData.email;
        this.validated = userData.validated;
    }

    ownOrganizations() {
        return this._root.organizationList({owner: this.userId});
    }
}

exports.User = User;
