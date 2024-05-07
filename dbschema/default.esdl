module default {
    type Photo {
        required file_key: str {
            constraint exclusive;
        }
        required photographer: Photographer;
        required is_claimed: bool {
            default := false;
        }
    }

    type Photographer {
        required clerk_id: str {
            constraint exclusive;
        } 
    }
}
