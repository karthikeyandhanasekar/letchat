
import { useState } from "react";
import { Flip } from "react-awesome-reveal";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
    const { handleSubmit, control, reset } = useForm();
    const [tologin, setloginauth] = useState(false)

    console.log(tologin);

    //form reset
    const formreset = () => {
        reset({
            username: '',
            password: ''
        })
    }
    
    //login process
    const onlogin = (data) => {
        console.log(data);

    }

    //signup process
    const onsingin = (data) => {

    }

    return (
        <main className="loginsection">

            <div className="authoptions">
                <h1>Options</h1>
                <ul >
                    <li onClick={() => setloginauth(false)}>SignUp</li>
                    <li onClick={() => setloginauth(true)}>Login</li>
                </ul>
            </div>

            {/* loginform */}
            <div style={{ display: tologin ? "block" : "none" }}>
                <Flip triggerOnce duration={2000}  >
                    <form onSubmit={handleSubmit(onlogin)} className="authforms">
                        <h1>Login</h1>
                        <br />

                        <Controller control={control} name="username"
                            render={({ field }) => <input type={"text"} placeholder="Email" inputMode={"text"} {...field} />} />
                        <br /><br />

                        <Controller control={control} name="password"
                            render={({ field }) => <input type={"password"} inputMode={"text"} placeholder="Password" {...field} />} />
                        <br /><br />
                        <button type="submit">Login</button>
                        <button type="reset" onClick={formreset} >Clear</button>
                    </form>
                </Flip>
            </div>

            {/* signupform */}
            <div div style={{ display: tologin ? "none" : "block" }}>
                <Flip triggerOnce duration={2000}>
                    <form onSubmit={handleSubmit(onsingin)} className="authforms">
                        <h1>SignUp</h1>
                        <br />

                        <Controller control={control} name="username"
                            render={({ field }) => <input type={"text"} placeholder="Email" inputMode={"text"} {...field} />} />
                        <br /><br />

                        <Controller control={control} name="password"
                            render={({ field }) => <input type={"password"} inputMode={"text"} placeholder="Password" {...field} />} />
                        <br /><br />
                        <button type="submit">SignUp</button>
                        <button type="reset" onClick={formreset} >Clear</button>
                    </form>
                </Flip>

            </div>
        </main>
    )
}

export default Login

