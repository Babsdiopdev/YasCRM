import { Contact } from "./contact.model"

export interface Commande {
    id?: number
    reference?: string
    totalCommande: number
    etape: string
    etatCommande: string,
    etatDevis: string,
    contact?: Contact,
    ventes?: any[]
}