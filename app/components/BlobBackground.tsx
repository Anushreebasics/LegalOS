export default function BlobBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <div
                className="absolute top-[-70px] right-[-80px] w-[420px] h-[220px] rounded-full opacity-30"
                style={{
                    background: "radial-gradient(ellipse, #b8c0e0 0%, transparent 70%)",
                    filter: "blur(40px)",
                    transform: "rotate(-10deg)",
                }}
            />

            <div
                className="absolute top-[35%] left-[-80px] w-[320px] h-[160px] rounded-full opacity-25"
                style={{
                    background: "radial-gradient(ellipse, #c5cadf 0%, transparent 70%)",
                    filter: "blur(35px)",
                    transform: "rotate(8deg)",
                }}
            />

            <div
                className="absolute bottom-[-40px] left-[5%] w-[300px] h-[160px] rounded-full opacity-30"
                style={{
                    background: "radial-gradient(ellipse, #b0bbd8 0%, transparent 70%)",
                    filter: "blur(30px)",
                    transform: "rotate(-5deg)",
                }}
            />

            <div
                className="absolute bottom-[10%] right-[10%] w-[200px] h-[120px] rounded-full opacity-20"
                style={{
                    background: "radial-gradient(ellipse, #9aa5cc 0%, transparent 70%)",
                    filter: "blur(25px)",
                }}
            />

            <div className="absolute top-[95px] right-[-35px] h-[84px] w-[310px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95" />
            <div className="absolute top-[205px] right-[-45px] h-[84px] w-[390px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95" />
            <div className="absolute top-[315px] right-[-20px] h-[84px] w-[300px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95" />

            <div className="absolute top-[330px] left-[-95px] h-[84px] w-[310px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95" />
            <div className="absolute top-[445px] left-[-80px] h-[84px] w-[280px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95" />
            <div className="absolute bottom-[70px] left-[-70px] h-[84px] w-[480px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95" />
        </div>
    );
}
