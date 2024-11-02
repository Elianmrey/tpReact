// src/views/Home.tsx

import { useState, useEffect } from 'react';
import MaterialButton from '../../Components/MaterialButton.tsx';

export default function Home() {

    const [data, setData] = useState<{ message: string } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            try {
                await setTimeout(() => {
                    setData({ message: 'Olá ,Voce está na Home!' });

                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Página Inicial</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}
            <MaterialButton route="/formulary" buttonText="Formulário" />
            <MaterialButton route="/dashboard" buttonText="Dashboard" />
            <MaterialButton route="/settings" buttonText="Configurações" />
            <MaterialButton route="/signin" buttonText="Login" />
            <MaterialButton route="/signup" buttonText="Cadastro" />
        </div>
    );
};
