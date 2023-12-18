import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommentsForTreesService } from '../../services/comments-for-trees.service';

@Component({
  selector: 'app-trees-comment',
  templateUrl: './trees-comment.component.html',
  styleUrls: ['./trees-comment.component.css']
})
export class TreesCommentComponent implements OnInit {

  commentsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentsService: CommentsForTreesService
  ) {
    this.commentsForm = this.fb.group({
      comentario: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {
  }

  sendComment(): void {
    if (this.commentsForm.valid) {
      const comentario = this.commentsForm.value.comentario;
      this.commentsService.sendComments(comentario).subscribe(
        () => {
          Swal.fire('Éxito', 'Comentario enviado correctamente', 'success');
          this.commentsForm.reset();
        },
        (error) => {
          Swal.fire('Error', 'Hubo un problema al enviar el comentario', 'error');
          console.error(error);
        }
      );
    } else {
      Swal.fire('Advertencia', 'Por favor, complete el comentario', 'warning');
    }
  }

}
