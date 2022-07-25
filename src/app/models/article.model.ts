export interface Article {
    id?: number
    reference?: string
    libelle: string
    prixVente: number
    tva?: number
    etat: string
    type?: string
    qte: number
    ventes?: any[]
    achats?: any[]
}