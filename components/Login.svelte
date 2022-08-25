<script>
    import { link } from 'svelte-spa-router'
    import { useForm, validators,  Hint, required } from "svelte-use-form"
    import { store, database } from '../src/auth.ts'


 const form = useForm();
 let username = ''
 let password = ''
 let error = ''

function login() {
    const user = database.find(
        (u) => u.username === username && u.password === password
    )
     if ( user ){
         console.log(user)
         $store = user
         console.log(JSON.stringify($store, null, 2))
         if ( error ) error = ''
     }
     else {
         error = 'No matching username and password'
         console.log('No matching username and password')
     }
 }

function logout(){
     $store = null
 }

export const getUserDetails = async () => {
}

</script>


<form use:form on:submit|preventDefault={login}>
    <h1>Login</h1>
    <label>Username</label>
    <input name='username' bind:value={username} use:validators={[required]}/>
    <Hint for='username' on='required'>
        This field is required
    </Hint>
    <br>
    <label>Password</label>
    <input name='password' type='password' bind:value={password} use:validators={[required]}>
    <Hint for='password' on='required'>
        This field is required
    </Hint>
    <button type='submit' disabled={!$form.valid} on:click={login}>Login</button>
</form>
