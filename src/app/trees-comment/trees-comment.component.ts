import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommentsForTreesService } from '../../services/comments-for-trees.service';
import { TransferTreeDataService } from 'src/services/transfer-tree-data.service';

@Component({
  selector: 'app-trees-comment',
  templateUrl: './trees-comment.component.html',
  styleUrls: ['./trees-comment.component.css']
})
export class TreesCommentComponent implements OnInit {

  selectedTree: any; // Almacenar datos del arbol especifico
  commentsForm: FormGroup; // Formulario para enviar comentarios

  constructor(
    private fb: FormBuilder,
    private transferDataService: TransferTreeDataService, // Servicio de transferencia de datos entre compontentes
    private commentsService: CommentsForTreesService // Servicio para enviar comentarios a la base de datos
  ) {
    this.commentsForm = this.fb.group({
      comment: ['', [
        Validators.required,
        Validators.maxLength(200)]
      ]
    });
  }

  ngOnInit(): void {
    // Actualizar el arbol seleccionado en el componente
    this.transferDataService.tree.subscribe(tree => {
      this.selectedTree = tree;
    });
  }
  /*
  ** Enviar comentario al arbol seleccionado
  ** @param id: number - Id del arbol seleccionado
  ** @returns void - No retorna ningún valor.
  */
  sendComment(id:number): void {
    if (this.commentsForm.valid) {
      const comment = this.commentsForm.value.comment;
      this.commentsService.sendComments(comment, id).subscribe({
        next: () => { // Si se realiza el INSERT
          Swal.fire('Éxito', 'Comentario enviado correctamente', 'success');
          this.commentsForm.reset();
        },
        error: (error) => { // Si no se realiza el INSERT
          Swal.fire('Error', 'Hubo un problema al enviar el comentario', 'error');
          console.error(error);
        }
      });
    } else { // Si no hay comentario
      Swal.fire('Advertencia', 'Por favor, complete el comentario', 'warning');
    }
  }
}
