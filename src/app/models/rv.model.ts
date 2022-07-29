import { Contact } from "./contact.model"
import { Employe } from "./employe.model"

export interface Rv{
  status: string
  message: any
   id: number
 reference:string
 titre: string
  date_debut: Date
  date_fin: Date
  heure_debut: string
  heure_fin: string
// responsable: string
 //collegues: string
 contact?: Contact,
 employe?: Employe,
 description: string
 lieu: string
}
