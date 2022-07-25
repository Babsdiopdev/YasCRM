export interface Fournisseur {
    id?: number
    photo?: string
    reference?: string
    nom: string
    prenom: string
    telephone: string
    email: string
    adresse: string
    fullName?:string
}