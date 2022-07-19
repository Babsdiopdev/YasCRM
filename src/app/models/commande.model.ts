<<<<<<< HEAD
export interface commande{
    id:number
    reference:string
    totalCommande:number
    etapeCommande:string
    EtatCommande:string
    
=======
import { Contact } from "./contact.model"

export interface Commande {
    id?: number
    reference?: string
    totalCommande: number
    etape: string
    etat: string
    contact?: Contact,
    ventes?: []
>>>>>>> a648466a0ca77188e2c440b3aef4c83d33e28874
}