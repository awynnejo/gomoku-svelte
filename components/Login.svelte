<script>
    import { link } from 'svelte-spa-router'
    import { useForm, validators,  Hint, required } from "svelte-use-form"
 const form = useForm();

</script>
<form use:form>
    <h1>Login</h1>
    <label>Username</label>
    <input name='username' use:validators={[required]}/>
    <Hint for='username' on='required'>
        This field is required
    </Hint>
    <label>Password</label>
    <input name='password' type='password' use:validators={[required]}>
    <Hint for='password' on='required'>
        This field is required
    </Hint>
    <button disabled={!$form.valid}>Login</button>
</form>
