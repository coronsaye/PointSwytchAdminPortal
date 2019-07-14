export class AccessToken {

    constructor(
        private token,
        private expiry_date,
        private date_created,
        private user_id
    ) { }
}

