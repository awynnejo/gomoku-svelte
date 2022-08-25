<script>
    import { link, push, pop, replace } from 'svelte-spa-router'
    import { useForm, validators,  Hint, required } from "svelte-use-form"
    import { login_store , database } from '../src/auth.ts'


 const form = useForm();
 let username = ''
 let password = ''
 let error = ''

function login() {
    const user = database.find(
        (u) => u.username === username && u.password === password
    )
     if ( user ){
         $login_store = user
         console.log(JSON.stringify($login_store, null, 2))
         if ( error ) error = ''
         push('/')
     }
     else {
         error = 'No matching username and password'
         console.log('No matching username and password')
     }
 }

function logout(){
     $login_store = null
}


</script>


{#if $login_store == null}
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

{:else}
<h2> You are logged in as {JSON.stringify($login_store.username, null, 2)}</h2>
<button on:click={logout}>Logout</button>
{/if}
