import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Artwork } from 'src/app/artwork/Artwork';
import { ArtworkService } from 'src/app/artwork/artwork.service';
import { Exhibition } from '../exhibition';
import { ExhibitionService } from '../exhibition.service';

@Component({
  selector: 'app-exhibition-detail',
  templateUrl: './exhibition-detail.component.html',
  styleUrls: ['./exhibition-detail.component.css']
})
export class ExhibitionDetailComponent implements OnChanges {

  @Input() exhibitionDetail!: number;
  @Input() museumDetail!: number;
  exhibition!: Exhibition;
  artworks: Array<Artwork> = [];
  @ViewChild("modalInfo", {static: false}) myModalInfo: TemplateRef<any> | undefined;
  artworkForm!: FormGroup;

  constructor(private exhibitionService: ExhibitionService,
              private modalService: NgbModal,
              private artworkService: ArtworkService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService) { }

  getExhibition(museo:number, id: number): void {
    this.exhibitionService.getExhibition(museo, id).subscribe((exhibition) => {
      this.exhibition = exhibition;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getExhibition(this.museumDetail, this.exhibitionDetail);
    this.getArtworks();

    this.artworkForm = this.formBuilder.group({
      artwork: ["", [Validators.required]],
      })
  }

  getArtworks(): void {
    this.artworkService.getArtworks()
    .subscribe((artworks) => {
      artworks.forEach(artwork => {
        var include = false;
        this.exhibition.artworks.forEach(element => {
          if(artwork.id == element.id){
            include = true;
          }
        });
        if(!include){
          this.artworks.push(artwork);
        }
      });

    });

  }

  addArtwork(artwork: any){
    this.exhibitionService.addArtwork(this.exhibitionDetail, artwork.artwork).subscribe(artwork=>{
      console.info("The artwaork was add: ", artwork)
      this.toastr.success("Confirmation", "Artwork add")
      this.artworkForm.reset();
      this.getExhibition(this.museumDetail, this.exhibitionDetail);
      this.modalService.dismissAll();
      })
  }

  openModal(){
    this.modalService.open(this.myModalInfo);
  }

}
