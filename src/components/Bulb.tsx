function Bulb(props) {
    const text = props.text;
    return (
        <svg
        width="1738"
        height="1080"
        viewBox="0 0 1738 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_dddddd_157_171)">
            <circle
                cx="881.307"
                cy="329.307"
                r="97.5574"
                stroke="#F2C698"
                stroke-width="1.5"
            />
            <text
                x="881.307"
                y="329.307"
                textAnchor="middle"
                fill="#ED6A6C"
                fontSize="20"
                dy=".35em"
            >
                {text}
            </text>
        </g>
        <defs>
            <filter
                id="filter0_dddddd_157_171"
                x="0.158752"
                y="-551.841"
                width="1762.3"
                height="1762.3"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="9.31954" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.94902 0 0 0 0 0.776471 0 0 0 0 0.596078 0 0 0 1 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_157_171"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="18.6391" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.94902 0 0 0 0 0.776471 0 0 0 0 0.596078 0 0 0 1 0"
                />
                <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_157_171"
                    result="effect2_dropShadow_157_171"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="65.2368" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.94902 0 0 0 0 0.776471 0 0 0 0 0.596078 0 0 0 1 0"
                />
                <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_157_171"
                    result="effect3_dropShadow_157_171"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="130.474" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.94902 0 0 0 0 0.776471 0 0 0 0 0.596078 0 0 0 1 0"
                />
                <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_157_171"
                    result="effect4_dropShadow_157_171"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="223.669" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.94902 0 0 0 0 0.776471 0 0 0 0 0.596078 0 0 0 1 0"
                />
                <feBlend
                    mode="normal"
                    in2="effect4_dropShadow_157_171"
                    result="effect5_dropShadow_157_171"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="391.421" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.94902 0 0 0 0 0.776471 0 0 0 0 0.596078 0 0 0 1 0"
                />
                <feBlend
                    mode="normal"
                    in2="effect5_dropShadow_157_171"
                    result="effect6_dropShadow_157_171"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect6_dropShadow_157_171"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
    )
    }
export default Bulb;
