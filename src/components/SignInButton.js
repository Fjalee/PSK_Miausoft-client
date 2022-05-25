import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

function handleLogin(instance, navigate) {
    instance.loginPopup(loginRequest).then((r) => {
        navigate(0);
    }).catch((e) => {
        console.error(e);
    });
}

export const SignInButton = () => {
    const { instance } = useMsal();
    const navigate = useNavigate();

    return (
        <Button
            variant="secondary"
            className="ml-auto"
            onClick={() => handleLogin(instance, navigate)}>Sign in
        </Button>
    );
};
