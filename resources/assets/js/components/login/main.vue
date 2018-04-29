<script>
    export default {
        props: ['token'],
        data() {
            return {
                user:{
                    email:'brunopignatari@gmail.com',
                    password:'',
                    remember:'1',
                }
            }
        },
        methods:{
            submitform () {
                this.$validator.validateAll().then( res => {
                    if ( res ) 
                    {
                        alert('Form successfully submitted!')
                    }
                    else
                    {
                        alert('Please correct all error!')
                    }
                })
            }

        }
        
    }
</script>
<template>
    <div >
        <div class="container py-5">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center text-white mb-4">Login Form</h2>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="card rounded-0">
                                <div class="card-header">
                                    <h3 class="mb-0"><i class="fa fa-user"></i> Login Form</h3>
                                </div>
                                <div class="card-body">
                                    <form class="form" role="form" autocomplete="off" @submit.prevent="submitform"  method="POST">
                                        <div class="form-group">
                                            <label for="uname1">E-mail</label>
                                            <input type="text" class="form-control form-control-lg rounded-0" name="email" required=""
                                                v-model="user.email"
                                                v-validate="'required|email'"
                                            >
                                            <span class="text-danger" v-show="errors.has('email')"><i class="fa fa-exclamation-circle"></i> {{ errors.first('email') }}  </span>
                                            
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input type="password" class="form-control form-control-lg rounded-0" name='password'
                                                v-model="user.password"
                                                v-validate="'required'"
                                            >
                                            <span class="text-danger" v-show="errors.has('password')"><i class="fa fa-exclamation-circle"></i> {{ errors.first('password') }}</span>
                                        </div>
                                        <button type="submit" class="btn btn-success btn-lg float-right"><i class="fa fa-check"></i> Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>
