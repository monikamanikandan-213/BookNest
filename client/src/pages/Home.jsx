import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const [showCreateAccount, setShowCreateAccount] = useState(false);


    const handleLogin = (e) => {

        e.preventDefault();

        if (
            email === "admin@booknest.com" &&
            password === "123456"
        ) {

            if (rememberMe) {

                localStorage.setItem(
                    "booknestRemember",
                    "true"
                );

            }

            localStorage.setItem(
                "booknestLoggedIn",
                "true"
            );

            navigate("/library");

        } else {

            setError(
                "Invalid email or password"
            );

        }

    };


    return (

        <div className="login-page">

            <div className="login-container">


                {/* LEFT SIDE */}

                <div className="login-visual">

                    <div className="visual-content">

                        <div className="brand">

                            <span>📚</span>

                            <strong>
                                BookNest
                            </strong>

                        </div>


                        <div className="welcome-content">

                            <p className="small-heading">
                                YOUR DIGITAL READING SPACE
                            </p>

                            <h1>
                                Read.
                                <br />
                                Discover.
                                <br />
                                <span>Grow.</span>
                            </h1>

                            <p className="visual-description">
                                A smarter and more comfortable
                                way to explore books, track your
                                reading and build better learning
                                habits.
                            </p>

                        </div>


                        <div className="reading-features">

                            <div>
                                <span>01</span>
                                <p>
                                    Smart Reading
                                </p>
                            </div>

                            <div>
                                <span>02</span>
                                <p>
                                    Multi-Language
                                </p>
                            </div>

                            <div>
                                <span>03</span>
                                <p>
                                    Reading Analytics
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                {/* RIGHT SIDE */}

                <div className="login-form-section">

                    <div className="login-form-box">


                        <div className="mobile-logo">
                            📚
                        </div>


                        <p className="form-welcome">
                            Welcome back
                        </p>


                        <h2>
                            Sign in to BookNest
                        </h2>


                        <p className="login-subtitle">
                            Continue your reading journey.
                        </p>


                        <form
                            onSubmit={handleLogin}
                        >


                            {/* EMAIL */}

                            <label>
                                Email address
                            </label>


                            <div className="input-box">

                                <span>
                                    ✉
                                </span>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError("");
                                    }}
                                    required
                                />

                            </div>


                            {/* PASSWORD */}

                            <label>
                                Password
                            </label>


                            <div className="input-box">

                                <span>
                                    🔒
                                </span>

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError("");
                                    }}
                                    required
                                />


                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >
                                    {showPassword
                                        ? "Hide"
                                        : "Show"}
                                </button>

                            </div>


                            {/* OPTIONS */}

                            <div className="login-options">

                                <label className="remember">

                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) =>
                                            setRememberMe(
                                                e.target.checked
                                            )
                                        }
                                    />

                                    <span>
                                        Remember me
                                    </span>

                                </label>


                                <span className="forgot-password">
                                    Forgot password?
                                </span>

                            </div>


                            {error && (

                                <p className="login-error">
                                    {error}
                                </p>

                            )}


                            {/* LOGIN BUTTON */}

                            <button
                                type="submit"
                                className="login-button"
                            >

                                Sign in

                                <span>
                                    →
                                </span>

                            </button>


                        </form>


                        {/* CREATE ACCOUNT */}

                        <div className="create-account">

                            <span>
                                Don't have an account?
                            </span>


                            <button
                                type="button"
                                onClick={() =>
                                    setShowCreateAccount(
                                        true
                                    )
                                }
                            >
                                Create a new account
                            </button>

                        </div>


                        {/* CREATE ACCOUNT MESSAGE */}

                        {showCreateAccount && (

                            <div className="create-account-box">

                                <strong>
                                    Create your BookNest account
                                </strong>

                                <p>
                                    Account registration will
                                    be available soon.
                                </p>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowCreateAccount(
                                            false
                                        )
                                    }
                                >
                                    Close
                                </button>

                            </div>

                        )}


                        <div className="login-divider">

                            <span>
                                A simple space for readers
                            </span>

                        </div>


                        <p className="login-footer">

                            Read at your pace.
                            <strong>
                                {" "}Learn with BookNest.
                            </strong>

                        </p>


                    </div>

                </div>

            </div>

        </div>

    );

}

export default Home;