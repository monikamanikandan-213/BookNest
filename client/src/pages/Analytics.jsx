import { useEffect, useState } from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";


function Analytics() {

    const defaultData = [
        { name: "Mon", minutes: 0 },
        { name: "Tue", minutes: 0 },
        { name: "Wed", minutes: 0 },
        { name: "Thu", minutes: 0 },
        { name: "Fri", minutes: 0 },
        { name: "Sat", minutes: 0 },
        { name: "Sun", minutes: 0 }
    ];


    const [progress, setProgress] = useState(0);

    const [bookTitle, setBookTitle] =
        useState("No book selected");

    const [readingData, setReadingData] =
        useState(defaultData);

    const [streak, setStreak] =
        useState(0);

    const [nightOwl, setNightOwl] =
        useState(false);


    // Load analytics data
    const loadAnalytics = () => {

        // Current book
        const currentBook =
            JSON.parse(
                localStorage.getItem(
                    "booknestCurrentBook"
                )
            );


        if (currentBook) {

            setProgress(
                currentBook.progress || 0
            );

            setBookTitle(
                currentBook.title
            );

        }


        // Reading data
        const savedData =
            localStorage.getItem(
                "booknestReadingData"
            );


        if (savedData) {

            setReadingData(
                JSON.parse(savedData)
            );

        }


        // Night Owl
        const savedNightOwl =
            localStorage.getItem(
                "booknestNightOwl"
            ) === "true";


        setNightOwl(savedNightOwl);


        // Reading streak
        calculateStreak();

    };


    // Calculate consecutive reading days
    const calculateStreak = () => {

        const savedDates =
            JSON.parse(
                localStorage.getItem(
                    "booknestReadingDates"
                )
            ) || [];


        if (savedDates.length === 0) {

            setStreak(0);

            return;

        }


        const dates =
            [...new Set(savedDates)]
                .sort()
                .reverse();


        let currentStreak = 0;


        const today =
            new Date();


        for (
            let i = 0;
            i < dates.length;
            i++
        ) {

            const expectedDate =
                new Date(today);


            expectedDate.setDate(
                today.getDate() - i
            );


            const expected =
                expectedDate
                    .toISOString()
                    .split("T")[0];


            if (dates.includes(expected)) {

                currentStreak++;

            } else {

                break;

            }

        }


        setStreak(currentStreak);

    };


    // Refresh analytics every second
    useEffect(() => {

        loadAnalytics();


        const timer =
            setInterval(() => {

                loadAnalytics();

            }, 1000);


        return () => {

            clearInterval(timer);

        };

    }, []);


    // Total reading time
    const totalMinutes =
        readingData.reduce(
            (total, day) =>
                total + Number(day.minutes || 0),
            0
        );


    // Number of days with reading activity
    const totalSessions =
        readingData.filter(
            (day) =>
                Number(day.minutes || 0) > 0
        ).length;


    // Achievement
    const getBadge = () => {

        if (nightOwl) {

            return "🌙 Night Owl";

        }


        if (streak >= 3) {

            return "🔥 Reading Streak";

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

        <div className="analytics-page">


            {/* HEADER */}

            <h1>
                📊 Reading Analytics
            </h1>


            <p
                style={{
                    textAlign: "center"
                }}
            >
                Track your reading activity
                and learning journey.
            </p>


            {/* TOP SUMMARY */}

            <div className="analytics-summary">


                {/* READING TIME */}

                <div className="summary-card">

                    <div className="summary-icon">
                        📖
                    </div>

                    <h3>
                        Reading Time
                    </h3>

                    <strong>
                        {totalMinutes.toFixed(1)} min
                    </strong>

                    <p>
                        Total time spent reading
                    </p>

                </div>


                {/* STREAK */}

                <div className="summary-card">

                    <div className="summary-icon">
                        🔥
                    </div>

                    <h3>
                        Reading Streak
                    </h3>

                    <strong>
                        {streak} {streak === 1 ? "Day" : "Days"}
                    </strong>

                    <p>
                        Consecutive reading days
                    </p>

                </div>


                {/* PROGRESS */}

                <div className="summary-card">

                    <div className="summary-icon">
                        📈
                    </div>

                    <h3>
                        Book Progress
                    </h3>

                    <strong>
                        {progress}%
                    </strong>

                    <p>
                        {bookTitle}
                    </p>

                </div>


                {/* SESSIONS */}

                <div className="summary-card">

                    <div className="summary-icon">
                        ⏱️
                    </div>

                    <h3>
                        Reading Sessions
                    </h3>

                    <strong>
                        {totalSessions}
                    </strong>

                    <p>
                        Days with reading activity
                    </p>

                </div>


            </div>


            {/* CURRENT BOOK */}

            <div className="analytics-card">

                <h2>
                    📚 Current Book
                </h2>


                <h3>
                    {bookTitle}
                </h3>


                <div className="analytics-progress">

                    <div
                        className="analytics-progress-bar"
                        style={{
                            width: `${progress}%`
                        }}
                    >
                    </div>

                </div>


                <p>
                    <strong>
                        {progress}%
                    </strong>{" "}
                    completed
                </p>

            </div>


            {/* WEEKLY CHART */}

            <div className="analytics-card">

                <h2>
                    📊 Weekly Reading Activity
                </h2>


                <p>
                    Time spent reading each day.
                </p>


                <div
                    style={{
                        width: "100%",
                        height: "350px"
                    }}
                >

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <BarChart
                            data={readingData}
                        >

                            <CartesianGrid
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                dataKey="name"
                            />

                            <YAxis
                                allowDecimals={true}
                            />

                            <Tooltip
                                formatter={(value) => [
                                    `${Number(value).toFixed(1)} min`,
                                    "Reading Time"
                                ]}
                            />

                            <Bar
                                dataKey="minutes"
                                fill="#315d72"
                                radius={[
                                    6,
                                    6,
                                    0,
                                    0
                                ]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>


            {/* ACHIEVEMENTS */}

            <div className="analytics-card">

                <h2>
                    🏅 Achievements
                </h2>


                <div className="badge">

                    {progress >= 20
                        ? "🌱 Reading Starter"
                        : "🔒 Reading Starter Locked"}

                </div>


                <div className="badge">

                    {progress >= 60
                        ? "📚 Book Explorer"
                        : "🔒 Book Explorer Locked"}

                </div>


                <div className="badge">

                    {progress >= 100
                        ? "🏆 Book Master"
                        : "🔒 Book Master Locked"}

                </div>


                <div className="badge">

                    {streak >= 3
                        ? "🔥 3 Day Reading Streak"
                        : "🔒 3 Day Streak Locked"}

                </div>


                <div className="badge">

                    {nightOwl
                        ? "🌙 Night Owl"
                        : "🔒 Night Owl Locked"}

                </div>

            </div>


        </div>

    );

}


export default Analytics;