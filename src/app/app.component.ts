import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

	
    books = [

		{
			title: "Love is beautiful.",
			author: "Masuma",
			img:"https://m.media-amazon.com/images/I/81t-IstQ+ZL._SY466_.jpg"
		},
		{
			title:"Pete the Cat: Pete at the Beach.",
			author:"James Dean ",
			img:"https://m.media-amazon.com/images/I/81hCIfZcnfL._SY466_.jpg"
		},
		{
			title:"Clifford's Good Deeds.",
			author:" Norman Bridwell",
			img:"https://m.media-amazon.com/images/I/71RsFVNONuL._SY466_.jpg"
		},
		{
           title:"I Love You More - Children's Padded Board Book.",
		   author:"Little Hippo Books",
		   img:"https://m.media-amazon.com/images/I/91Xv1gxxijL._SY466_.jpg"

		},
		{
			title:"If Animals Kissed Good Night Board book.",
			author:"Ann Whitford Paul",
			img:"https://m.media-amazon.com/images/I/81nzxODnaJL._SY466_.jpg"
		},

		{
			title:"I Love You to the Moon and Back.",
			author:"Amelia Hepworth",
			img:"https://m.media-amazon.com/images/I/8144Vic9C5L._SY466_.jpg"
		},
		{  
			title:"Chicka Chicka Boom Boom.",
			author:" Bill Martin Jr. and John Archambault",
			img:"https://m.media-amazon.com/images/I/811ftjOO5FL._SY466_.jpg"

		},
		{
			title:"If Animals Kissed Good Night.",
			author:"Ann Whitford Paul",
			img:"https://m.media-amazon.com/images/I/81nzxODnaJL._SY466_.jpg"
		}

	];

	addBook(data:any) {
		this.books.push(data);
	}
	


ngOnInit(){
	//this.addBook();
}
}

