import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Reader() {

    const location = useLocation();

    const book = location.state?.book;

    const [language, setLanguage] = useState("English");
    const [summary, setSummary] = useState("");
    const [progress, setProgress] = useState(0);
    const [nightOwl, setNightOwl] = useState(false);


    // LOAD SAVED PROGRESS
    useEffect(() => {

        if (!book) {
            return;
        }

        const savedProgress =
            Number(
                localStorage.getItem(
                    `booknestProgress_${book._id}`
                )
            ) || 0;

        setProgress(savedProgress);


        const savedNightOwl =
            localStorage.getItem(
                "booknestNightOwl"
            ) === "true";

        setNightOwl(savedNightOwl);


        localStorage.setItem(
            "booknestCurrentBook",
            JSON.stringify({
                id: book._id,
                title: book.title,
                progress: savedProgress
            })
        );

    }, [book]);


    // READING TIME TRACKER
    useEffect(() => {

        if (!book) {
            return;
        }

        const today = new Date().getDay();

        const dayIndex =
            today === 0
                ? 6
                : today - 1;


        const storageKey =
            "booknestReadingData";


        const defaultData = [
            { name: "Mon", minutes: 0 },
            { name: "Tue", minutes: 0 },
            { name: "Wed", minutes: 0 },
            { name: "Thu", minutes: 0 },
            { name: "Fri", minutes: 0 },
            { name: "Sat", minutes: 0 },
            { name: "Sun", minutes: 0 }
        ];


        const timer = setInterval(() => {

            const savedData =
                JSON.parse(
                    localStorage.getItem(
                        storageKey
                    )
                ) || defaultData;


            savedData[dayIndex].minutes +=
                10 / 60;


            localStorage.setItem(
                storageKey,
                JSON.stringify(savedData)
            );


        }, 10000);


        return () => {
            clearInterval(timer);
        };

    }, [book]);


    // NO BOOK SELECTED
    if (!book) {

        return (
            <div>

                <h1>📖 Book Reader</h1>

                <p>
                    Please select a book from the library.
                </p>

            </div>
        );

    }


    // LANGUAGE CONTENT
    const getContent = () => {

        if (language === "Tamil") {

            return "ஒவ்வொரு இரவும், ஒரு சிறிய நட்சத்திரம் வானத்திலிருந்து பூமியைப் பார்த்தது.";

        }


        if (language === "Hindi") {

            return "हर रात, एक छोटा सितारा आसमान से धरती को देखता था.";

        }


        return book.content;

    };


    // READ ALOUD
    const readAloud = () => {

        const text = getContent();


        const speech =
            new SpeechSynthesisUtterance(text);


        let languageCode = "en-US";


        if (language === "Tamil") {
            languageCode = "ta-IN";
        }


        if (language === "Hindi") {
            languageCode = "hi-IN";
        }


        speech.lang = languageCode;


        const voices =
            window.speechSynthesis.getVoices();


        const matchingVoice =
            voices.find(
                (voice) =>
                    voice.lang.toLowerCase() ===
                    languageCode.toLowerCase()
            );


        if (matchingVoice) {

            speech.voice = matchingVoice;

        }


        speech.rate = 0.9;

        speech.pitch = 1;

        speech.volume = 1;


        window.speechSynthesis.cancel();

        window.speechSynthesis.speak(speech);

    };


    // STOP READING
    const stopReading = () => {

        window.speechSynthesis.cancel();

    };


    // SUMMARY
    const summarizeBook = () => {

        axios
            .post(
                "http://localhost:5000/api/summary",
                {
                    content: book.content
                }
            )
            .then((response) => {

                setSummary(
                    response.data.summary
                );

            })
            .catch((error) => {

                console.log(
                    "Summary error:",
                    error
                );

            });

    };


    // UPDATE PROGRESS + STREAK
    const updateProgress = () => {

        if (progress >= 100) {
            return;
        }


        const newProgress =
            Math.min(
                progress + 20,
                100
            );


        setProgress(newProgress);


        // SAVE BOOK PROGRESS
        localStorage.setItem(
            `booknestProgress_${book._id}`,
            newProgress
        );


        // SAVE CURRENT BOOK
        localStorage.setItem(
            "booknestCurrentBook",
            JSON.stringify({
                id: book._id,
                title: book.title,
                progress: newProgress
            })
        );


        // SAVE TODAY'S READING DATE
        const today =
            new Date()
                .toISOString()
                .split("T")[0];


        const savedDates =
            JSON.parse(
                localStorage.getItem(
                    "booknestReadingDates"
                )
            ) || [];


        if (!savedDates.includes(today)) {

            savedDates.push(today);

        }


        localStorage.setItem(
            "booknestReadingDates",
            JSON.stringify(savedDates)
        );


        // NIGHT OWL
        const currentHour =
            new Date().getHours();


        if (
            currentHour >= 20 ||
            currentHour < 6
        ) {

            setNightOwl(true);


            localStorage.setItem(
                "booknestNightOwl",
                "true"
            );

        }

    };


    // BADGE
    const getBadge = () => {

        if (nightOwl) {

            return "🌙 Night Owl";

        }


        if (progress === 100) {

            return "🏆 Book Master";

        }


        if (progress >= 60) {

            return "📚 Book Explorer";

        }


        if (progress >= 20) {

            return "🌱 Reading Starter";

        }


        return "🔒 No Badge Yet";

    };


    return (

        <div className="reader">

            <h1>
                📖 {book.title}
            </h1>


            <p>
                <strong>Author:</strong>{" "}
                {book.author}
            </p>


            {/* LANGUAGE */}

            <div className="language-section">

                <label>

                    <strong>
                        🌐 Select Language:
                    </strong>

                </label>


                <select
                    value={language}
                    onChange={(e) =>
                        setLanguage(
                            e.target.value
                        )
                    }
                >

                    <option value="English">
                        English
                    </option>

                    <option value="Tamil">
                        Tamil
                    </option>

                    <option value="Hindi">
                        Hindi
                    </option>

                </select>

            </div>


            <hr />


            {/* BOOK CONTENT */}

            <h3>
                📖 Book Content
            </h3>


            <div className="reader-content">

                <p>
                    {getContent()}
                </p>

            </div>


            {/* BUTTONS */}

            <div className="reader-controls">

                <button
                    onClick={readAloud}
                >
                    🔊 Read Aloud
                </button>


                <button
                    onClick={stopReading}
                >
                    ⏹ Stop
                </button>


                <button
                    onClick={summarizeBook}
                >
                    📝 Summarize Book
                </button>

            </div>


            {/* SUMMARY */}

            {summary && (

                <div className="reader-content">

                    <h2>
                        📝 Book Summary
                    </h2>


                    <p>
                        {summary}
                    </p>

                </div>

            )}


            {/* PROGRESS */}

            <div className="progress-section">

                <h2>
                    📈 Reading Progress
                </h2>


                <h3>
                    {progress}% Completed
                </h3>


                <progress
                    value={progress}
                    max="100"
                >
                </progress>


                {progress < 100 ? (

                    <button
                        onClick={updateProgress}
                    >
                        📖 Continue Reading
                    </button>

                ) : (

                    <h3>
                        🎉 Book Completed!
                    </h3>

                )}


                {/* BADGE */}

                <h3>
                    🏅 Badge: {getBadge()}
                </h3>

            </div>

        </div>

    );

}

export default Reader;