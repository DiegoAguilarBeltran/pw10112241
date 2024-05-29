<template>
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your email and password!</p>
              <div v-if="mensaje" class="alert alert-danger" role="alert">
                {{ mensaje }}
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input v-model="correo" type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input v-model="password" type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button @click.prevent="registro()" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Entrar</button>
              <p></p>
              <button @click.prevent="registroGoogle()" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">
                <Icon icon="logos:google-icon" /> Google
              </button>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<style>
.gradient-custom {
/* fallback for old browsers */
background: #6a11cb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>
<script>
    import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
    import { Icon } from '@iconify/vue';

    export default{
      name: "RegistroView",
      components: { Icon },
      data(){
        return{
          correo: '',
          password: '',
          mensaje: 0
        }
      },
      methods:{
        registro(){
            signInWithEmailAndPassword(getAuth(), this.correo, this.password)
            .then((data) => {
                this.mensaje = ''
                this.correo = ''
                this.password = ''
            }).catch((error) => {
                switch (error.code) {
                    case "auth/invalid-email":
                        this.mensaje = "Correo no valido"
                        break;
                        case "auth/user-not-found":
                        this.mensaje = "Usuario no valido"
                        break;
                        case "auth/wrong-password":
                        this.mensaje = "Contrasena incorrecta"
                        break;
                        default:
                        this.mensaje = "Correo o contrasena incorrecta"
                        break;
                }                
            })
        },
        registroGoogle(){
          const provider = new GoogleAuthProvider();
          signInWithPopup(getAuth(), provider)
          .then((result) => {
            this.$router.push('/clientes/')
          })
        },
      }
    }
</script>