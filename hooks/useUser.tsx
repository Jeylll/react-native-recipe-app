//hooks decides how components behave and this reads the user context
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContext';

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}