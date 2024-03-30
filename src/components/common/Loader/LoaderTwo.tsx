import React from 'react';

const Loader: React.FC = () => {
    return <span className=' w-full h-full flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <defs>
                <filter id="ldio-f87pnpdsyv4-filter" x="-100%" y="-100%" width="300%" height="300%" color-interpolation-filters="sRGB">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.4000000000000004"></feGaussianBlur>
                    <feComponentTransfer result="cutoff">
                        <feFuncA type="table" tableValues="0 0 0 0 0 0 1 1 1 1 1"></feFuncA>
                    </feComponentTransfer>
                </filter>
            </defs>
            <g filter="url(#ldio-f87pnpdsyv4-filter)"><g transform="translate(50 50)">
                <g>
                    <circle cx="17" cy="0" r="5" fill="#4658ac">
                        <animate attributeName="r" keyTimes="0;0.5;1" values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="4s" repeatCount="indefinite" begin="-0.25s"></animate>
                    </circle>
                    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="4s" repeatCount="indefinite" begin="0s"></animateTransform>
                </g>
            </g>
                <g transform="translate(50 50)">
                    <g>
                        <circle cx="17" cy="0" r="5" fill="#e7008a">
                            <animate attributeName="r" keyTimes="0;0.5;1" values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="2s" repeatCount="indefinite" begin="-0.2s"></animate>
                        </circle>
                        <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="2s" repeatCount="indefinite" begin="-0.05s"></animateTransform>
                    </g>
                </g>
                <g transform="translate(50 50)">
                    <g>
                        <circle cx="17" cy="0" r="5" fill="#ff003a">
                            <animate attributeName="r" keyTimes="0;0.5;1" values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="1.3333333333333333s" repeatCount="indefinite" begin="-0.15s"></animate>
                        </circle>
                        <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="1.3333333333333333s" repeatCount="indefinite" begin="-0.1s"></animateTransform>
                    </g>
                </g>
                <g transform="translate(50 50)">
                    <g>
                        <circle cx="17" cy="0" r="5" fill="#ff6d00">
                            <animate attributeName="r" keyTimes="0;0.5;1" values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="1s" repeatCount="indefinite" begin="-0.1s"></animate>
                        </circle>
                        <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="1s" repeatCount="indefinite" begin="-0.15s"></animateTransform>
                    </g>
                </g>
                <g transform="translate(50 50)">
                    <g>
                        <circle cx="17" cy="0" r="5" fill="#ffc53f">
                            <animate attributeName="r" keyTimes="0;0.5;1" values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="0.8s" repeatCount="indefinite" begin="-0.05s"></animate>
                        </circle>
                        <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="0.8s" repeatCount="indefinite" begin="-0.2s"></animateTransform>
                    </g>
                </g>
            </g>
        </svg>
    </span>
};

export default Loader;
