import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageLoaderService } from '../image-loader.service';
import { LoginService} from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  logoUrl: string = '';

  constructor(private formBuilder: FormBuilder,private imageLoader: ImageLoaderService, private service: LoginService) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', []],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  ngOnInit(): void {
    this.loadLogo();
  }
  loadLogo() {
    const logoUrl = 'https://avatars.githubusercontent.com/u/124091983';
    this.imageLoader.loadImage(logoUrl).subscribe((blob: Blob) => {
      this.logoUrl = URL.createObjectURL(blob);
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login form submitted');
    } else {
      return;
    }
  }

  updatePendingApprovals(usuario: string, senha: string) : void {
    
    let result :string = this.service.logar(usuario, senha);

    if(result == "false"){
          alert("Usuario ou senha inválidos, por favor tente novamente");
      }

      if(result == "true"){
          alert("Logado com sucesso");
      }
    }
}


