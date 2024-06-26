export interface Post {
 userId: number
 id: number
 title: string
 body: string
}

export interface Comment {
 postId: number
 id: number
 name: string
 email: string
 body: string
 profilePicture: string
 createdAt: string
}

export interface User {
 id: number
 name: string
 username: string
 email: string
 address: Address
 phone: string
 website: string
 company: Company
}

interface Address {
 street: string
 suite: string
 city: string
 zipcode: string
 geo: Geo
}

interface Geo {
 lat: string
 lng: string
}

interface Company {
 name: string
 catchPhrase: string
 bs: string
}

export interface Photo {
 albumId: number
 id: number
 title: string
 url: string
 thumbnailUrl: string
}

export interface PostwithProperty {
 id: string | number | any
 userId: number
 title: string
 body: string
 user: User
 comment: Comment[]
 numberOfComments: number
 image: Photo
 createdAt: string
}
