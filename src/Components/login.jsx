
import { Zoom } from "react-awesome-reveal";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
    const { handleSubmit, control } = useForm();

    const onsubmit = (data) => {
        console.log(data);
        
    }

    return (
        <main    className="loginsection">

            <Zoom triggerOnce>
                <form onSubmit={handleSubmit(onsubmit)} className="loginform">
                    <h1>Chat!</h1>
                    <br />

                    <Controller control={control} name="username"
                        render={({ field }) => <input type={"text"} placeholder="Email" inputMode={"text"} {...field} />} />
                    <br /><br />

                    <Controller control={control} name="password"
                        render={({ field }) => <input type={"password"} inputMode={"text"} placeholder="Password" {...field} />} />
                 <br /><br />
                 <button type="submit">Login</button>
                 <button type="reset">Clear</button>
                </form>
            </Zoom>
        </main>
    )
}

export default Login

