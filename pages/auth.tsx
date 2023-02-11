import { UserInput } from "@/models/UserInput";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { SET_USER } from "../apollo/mutations/register";

export default function AuthScreen() {
    const [register, { data }] = useMutation(SET_USER);
    const [userData, setUserData] = useState<UserInput>({
        fullName: "",
        email: "",
        password: "",
    });

    console.log(data && `bienvenido a la plataforma ${data.register.fullName}`);

    return (
        <div className="wrapper">
            <div id="formContent">
                <br />
                <form className="formAuth">
                    <label className="label">Nombre</label>
                    <input
                        className="input"
                        type="text"
                        id="fullName"
                        onChange={(event) => {
                            setUserData({
                                ...userData,
                                fullName: event.target.value,
                            });
                        }}
                        placeholder="Ingresá tu nombre"
                    />
                    <label className="label">Email</label>
                    <input
                        className="input"
                        type="text"
                        id="email"
                        onChange={(event) => {
                            setUserData({
                                ...userData,
                                email: event.target.value,
                            });
                        }}
                        placeholder="Ingresá tu email"
                    />
                    <label className="label">Contraseña</label>
                    <input
                        className="input"
                        type="text"
                        id="password"
                        onChange={(event) => {
                            setUserData({
                                ...userData,
                                password: event.target.value,
                            });
                        }}
                        placeholder="Ingresá tu contraseña"
                    />
                    <button
                        onClick={() => {
                            register({ variables: { input: userData } });
                        }}
                    >
                        ENVIAR
                    </button>
                </form>
            </div>
        </div>
    );
}
