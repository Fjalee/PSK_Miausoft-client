import { useMsal } from '@azure/msal-react';
import React, { useEffect, useState } from 'react';

const ProtectedComponent = ({ roles, children }) => {
    const { instance, accounts } = useMsal();
    const [isAllowed, setIsAllowed] = useState(null);

    const onLoad = async () => {
        const currentAccount = accounts && accounts[0];
        if (!currentAccount) {
            setIsAllowed(false);
            return;
        }
        const userRoles = currentAccount.idTokenClaims['roles'];
        let allowed = true;
        if (roles) {
            if (roles && !roles.length) {
                roles = [roles];
            }

            for (const role of roles) {
                allowed = allowed && userRoles.includes(role);
            }
        }
        setIsAllowed(allowed);
    };

    useEffect(() => {
        onLoad();
    }, [instance]);

    return (
        isAllowed ? children : <></>
    );
};

export default ProtectedComponent;
