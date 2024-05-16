import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsServiceService } from '../../Services/posts-service.service';
import { Post } from '../../Interfaces/post';
import { AuthService } from '../../Services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { Notification } from '../../Interfaces/notifaction';


@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

  users = [
    { imageUrl: '../../assets/Images/hagar.jpg', name: 'John Doe', email: 'john@example.com' },
    { imageUrl: '../../assets/Images/hagar.jpg', name: 'Jane Smith', email: 'jane@example.com' },
    { imageUrl: '../../assets/Images/hagar.jpg', name: 'John Doe', email: 'john@example.com' },
    { imageUrl: '../../assets/Images/hagar.jpg', name: 'Jane Smith', email: 'jane@example.com' },
    { imageUrl: '../../assets/Images/hagar.jpg', name: 'John Doe', email: 'john@example.com' },
    { imageUrl: '../../assets/Images/hagar.jpg', name: 'Jane Smith', email: 'jane@example.com' },
  ];

  notfications:Notification[] = [];
  constructor(private authService:AuthService){}

  getAllNotification() {
    let email:string = localStorage.getItem("email");
    this.authService.getCurrentUser(email).subscribe({
      next: (user) => {
        this.loggedInUserId = user.userId;
  }})

}

