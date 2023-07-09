export interface UserType {
    "uid": string
    "verified": boolean,
    "personal_information": {
      "image": string,
      "email": string,
      "last_name": string,
      "first_name": string,
      "cell_number": number
    },
    "location": {
      "city": string
      "country": string
      "zip_code": string
      "latitude": string
      "longitude": string
    }
  
}