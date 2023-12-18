import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getAllUsers(): any[] {
    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];
  
    return users;
  }

  login(): void {
    const emailToSearch = this.username; 
    const passwordToSearch = this.password;
  
    const users = this.getAllUsers();
  
    const userFound = users.find(user => user.email === emailToSearch && user.password === passwordToSearch);
  
    if (userFound) {
      // Utilisateur trouvé, connexion réussie
      console.log('Connecté avec succès:', userFound);
      this.router.navigate(['home']);
      
    } else {
      // Aucun utilisateur trouvé, connexion échouée
      console.error('Erreur lors de la connexion : Utilisateur non trouvé');
     
    }
  }

  

  

}
