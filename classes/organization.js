class Organization {
    constructor(userData, root) {
        this._root = root;
        this.orgaId = userData.orgaId;
        this.orgaName = userData.orgaName;
        this._owner = userData.owner;
        this._members = userData.members;
        this._pendingInvitations = userData.pendingInvitations;
    }

    owner() {
        return this._root.user({userId: this._owner});
    }

    members() {
        return this._members.map((memberId) => {
            return this._root.user({userId: memberId});
        });
    }

    pendingInvitations() {
        return Object.keys(this._pendingInvitations).map((invitedUserId) => {
            return this._root.user({userId: invitedUserId});
        });
    }
}

exports.Organization = Organization;
