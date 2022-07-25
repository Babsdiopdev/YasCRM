import { Contact } from "./contact.model"

export interface Commande {
    id?: number
    reference?: string
    totalCommande: number
    etape: string
    etat: string
    contact?: Contact,
    ventes?: []
}