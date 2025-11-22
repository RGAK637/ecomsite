'use client';

import { useState, FormEvent } from 'react';
import styles from './Login.module.css';

type AuthMode = 'login' | 'signup';

export default function LoginPage() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for authentication logic
    console.log('Form submitted:', { mode, formData });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.loginSignup}>
      <div className={styles.container}>
        <h1>{mode === 'login' ? 'Login' : 'Sign Up'}</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          {mode === 'signup' && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              aria-label="Your name"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-label="Email address"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            minLength={6}
            aria-label="Password"
          />
          <button type="submit">
            {mode === 'login' ? 'Login' : 'Continue'}
          </button>
        </form>

        <p className={styles.switchMode}>
          {mode === 'login' ? (
            <>
              Don&apos;t have an account?{' '}
              <button type="button" onClick={() => setMode('signup')}>
                Sign up here
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button type="button" onClick={() => setMode('login')}>
                Login here
              </button>
            </>
          )}
        </p>

        {mode === 'signup' && (
          <label className={styles.terms}>
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              required
            />
            <span>
              By continuing, I agree to the terms of use &amp; privacy policy
            </span>
          </label>
        )}
      </div>
    </div>
  );
}
