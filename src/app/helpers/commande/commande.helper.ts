import { FormGroup } from "@angular/forms";
import Swal from "sweetalert2";
import { Commande } from "../../models/commande.model";
import { CommandeService } from "../../services/commande.service";

export class CommandeHelper {

    constructor(
        private commandeService: CommandeService
    ) {}

    updateCommande(component: any, commandeId?: number, commande?: Commande, commandeForm?: FormGroup, etatDevis?: string, etatCommande?: string, etape?: string) {

        let id: number = 0;

        let commandeRequest: any = {
            etape: '',
            etat: '',
            contactId: 0,
            ventes: []
        }
    
        if(commande !== undefined) {
            id = commande!.id!;

            const articles = [];

            for(let value of commande!.ventes!) {
                articles.push({
                  id: value.id,
                  qte: value.qte, 
                  articleId: value.article.id
                });
            }

            commandeRequest.etape = etape!;
            commandeRequest.etatCommande = etatCommande!;
            commandeRequest.etatDevis = etatDevis!;
            commandeRequest.contactId = commande!.contact!.id;
            commandeRequest.ventes = articles;

        } else if(commandeForm !== undefined) {
            id = commandeId!;

            const articles = [];

            for(let value of commandeForm!.value['articles']) {
                articles.push({
                  id: value.id,
                  qte: value.qte, 
                  articleId: value.article.id
                });
            }

            let nouvelEtat: string = component.commandeOrDevis

            if(component.commandeOrDevis === 'DEVIS') {
                if(commandeForm!.value['etat'].value === 'VALIDE') {
                    nouvelEtat = 'COMMANDE';
                }
            }

            commandeRequest.etape = nouvelEtat;
            commandeRequest.etat = commandeForm!.value['etat'].value;
            commandeRequest.contactId = commandeForm!.value['contact'].id;
            commandeRequest.ventes = articles;
        }
    
        this.commandeService.updateCommandeyId(id, commandeRequest).subscribe(
          (response) => {
            Swal.fire({
              position: 'top-end',
              icon: (response.status === 'OK') ? 'success': 'error',
              title: `<small>${response.message}</small>`,
              showConfirmButton: false,
              timer: 1500
            }).then((result) => {
                if(result.dismiss) {
                    if(commandeForm !== undefined) {
                        component.oncloseDialog();
                    } else if(commande !== undefined) {
                        component.getAllCommandes();
                    }
                }
              }
            );
          }
        );
    }
}