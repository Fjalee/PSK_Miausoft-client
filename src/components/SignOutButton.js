import React from 'react';
import { useMsal } from '@azure/msal-react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

function handleLogout(instance, navigate) {
    instance.logoutPopup().then((r) => {
        navigate(0);
    }).catch((e) => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();
    const navigate = useNavigate();

    return (
        <Button
            variant="secondary"
            className="ml-auto"
            onClick={() => handleLogout(instance, navigate)}>Sign out
        </Button>
    );
};
