
import { useState } from "react";
import { Flip } from "react-awesome-reveal";
import { Controller, useForm } from "react-hook-form";
import { userlogin, userregister } from "../utils/apiCalls";

const Login = () => {
    const { handleSubmit, control, reset } = useForm();
    const [tologin, setloginauth] = useState(false)

    console.log(tologin);

    //form reset
    const formreset = () => {
        reset({
            email: '',
            username: '',
            password: ''
        })
    }


    //login process
    const onlogin = async (data) => {
        console.log(data);

        const result = await userlogin({
            username: data.email,
            password: data.password
        })

        console.log(result);

    }

    //signup process
    const onsingin = async (data) => {
        console.log(data);
        const result = await userregister({
            username: data.username,
            email: data.email,
            password: data.password
        })

        console.log(result);
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

                        <Controller control={control} name="email"
                            render={({ field }) => <input type={"text"} placeholder="Email" inputMode={"text"} {...field} autoComplete={"true"} autoFocus={"true"} />} />
                        <br /><br />

                        <Controller control={control} name="password"
                            render={({ field }) => <input type={"password"} inputMode={"text"} placeholder="Password" {...field} autoComplete={"true"} />} />
                        <br /><br />
                        <button type="submit">Login</button>
                        <button type="reset" onClick={formreset} >Clear</button>
                    </form>
                </Flip>
            </div>

            {/* signupform */}
            <div style={{ display: tologin ? "none" : "block" }}>
                <Flip triggerOnce duration={2000}>
                    <form onSubmit={handleSubmit(onsingin)} className="authforms">
                        <h1>SignUp</h1>
                        <br />

                        <Controller control={control} name="username"
                            render={({ field }) => <input type={"text"} placeholder="Username" inputMode={"text"} {...field} autoComplete={"true"} autoFocus={"true"} />} />
                        <br /><br />

                        <Controller control={control} name="email"
                            render={({ field }) => <input type={"email"} placeholder="Email" inputMode={"text"} {...field} />} />
                        <br /><br />

                        <Controller control={control} name="password"
                            render={({ field }) => <input type={"password"} inputMode={"text"} placeholder="Password" {...field} autoComplete={"true"} />} />
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

