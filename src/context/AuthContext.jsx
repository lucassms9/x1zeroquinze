import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [onboardingStep, setOnboardingStep] = useState(0); // 0 (start) to 3 (complete)

    // Mock login function
    const login = (email, password) => {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const mockUser = {
                    email,
                    name: 'Usuário Demo',
                    id: '123'
                };
                setUser(mockUser);

                // If it's a specific demo email, pretend onboarding is done, else start at 0
                if (email === 'demo@x1.com') {
                    setOnboardingStep(4); // Completed
                } else {
                    setOnboardingStep(0);
                }

                localStorage.setItem('x1_user', JSON.stringify(mockUser));
                resolve(mockUser);
            }, 1000);
        });
    };

    const register = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = {
                    email: data.email,
                    name: data.name,
                    id: Date.now().toString()
                };
                setUser(newUser);
                setOnboardingStep(0);
                localStorage.setItem('x1_user', JSON.stringify(newUser));
                resolve(newUser);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        setOnboardingStep(0);
        localStorage.removeItem('x1_user');
    };

    const updateOnboardingStep = (step) => {
        setOnboardingStep(step);
    };

    // Check for persisted user on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('x1_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            // For demo purposes, if stored user exists, assume step 0 or 4 based on logic or persist step too.
            // Let's default to 0 for simplicity unless we persist step.
            setOnboardingStep(0);
        }
    }, []);

    const value = {
        user,
        onboardingStep,
        login,
        register,
        logout,
        updateOnboardingStep,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
