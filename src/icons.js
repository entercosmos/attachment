import React from 'react'

export default {
    play: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M85.6546266,43.3010116 L22.6442273,1.3643244 C17.2704307,-2.21820666 10,1.68043009 10,8.10791229 L10,91.875918 C10,98.4087688 17.2704307,102.202037 22.6442273,98.6195059 L85.6546266,56.6828188 C90.3962118,53.6271305 90.3962118,46.4620684 85.6546266,43.3010116 Z"
                fill={'currentColor'}/>
        </svg>
    ),
    pause: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M87.6321768,0 C89.8469696,0 91.6398971,1.78759201 91.6398971,4.10094637 L91.6398971,95.8990536 C91.6398971,98.212408 89.7415033,100 87.5267105,100 L64.1131866,100 C61.7929275,100 60,98.1072555 60,95.8990536 L60,4.10094637 C60,1.78759201 61.8983938,0 64.1131866,0 L87.6321768,0 Z M36.6321768,0 C38.8469696,0 40.6398971,1.78759201 40.6398971,4.10094637 L40.6398971,95.8990536 C40.6398971,98.212408 38.7415033,100 36.5267105,100 L13.1131866,100 C10.7929275,100 9,98.1072555 9,95.8990536 L9,4.10094637 C9,1.78759201 10.8983938,0 13.1131866,0 L36.6321768,0 Z"
                fill={'currentColor'}/>
        </svg>
    ),
    close: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero" fill="currentColor">
                    <path
                        d="M0.0392772977,6.67714061 L6.71641791,0 L100,93.2835821 L93.3228594,99.9607227 L0.0392772977,6.67714061 Z M93.2835821,0 L99.9607227,6.67714061 L6.67714061,99.9607227 L0,93.2835821 L93.2835821,0 Z"/>
                </g>
            </g>
        </svg>
    ),
    arrowLeft: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero" fill="currentColor">
                    <polygon
                        points="77.5049679 4.48674387 73.018224 0 23 50.018224 72.9426972 100 77.4311954 95.5150112 31.9717334 50.0199783"/>
                </g>
            </g>
        </svg>
    ),
    arrowRight: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero" fill="currentColor">
                    <polygon
                        points="22.7475161 4.7392278 27.2342599 0.252483926 77.2524839 50.2707079 27.3097867 100.252484 22.8212885 95.7674951 68.2807505 50.2724623"/>
                </g>
            </g>
        </svg>
    ),
    pencil: props => (
        <svg {...props} viewBox="0 0 16 16" style={{shapeRendering: 'geometricprecision'}}>
            <path
                fillRule="evenodd"
                fill="currentColor"
                d="M2.35675466,10.6432453 L8.64324534,4.35675466 C8.84064305,4.15935695 9.1593509,4.15929778 9.3559202,4.35580156 L11.6440798,6.64319844 C11.838707,6.83776073 11.8402755,7.15874732 11.6432453,7.35580563 L5.35675466,13.6431944 C5.15935695,13.8406203 4.7782068,14 4.50461102,14 L2.49538898,14 C2.2157526,14 2,13.7782068 2,13.504611 L2,11.495389 C2,11.2157526 2.1597245,10.8402755 2.35675466,10.6432453 Z M12.7109951,1.71135812 L14.2896049,3.28944188 C14.6796404,3.67934745 14.6824243,4.31845743 14.2896881,4.71080116 L13.3483476,5.65120077 C13.1568151,5.84254182 12.8404491,5.84010222 12.6438798,5.64359844 L10.3557202,3.35620156 C10.161093,3.16163927 10.1557721,2.84442791 10.3481734,2.65202659 L11.2890435,1.71115654 C11.6873,1.3129 12.3182129,1.31870679 12.7109951,1.71135812 Z"
            />
        </svg>
    ),
    download: props => (
        <svg {...props} viewBox="0 0 16 16" style={{shapeRendering: 'geometricprecision'}}>
            <path
                fillRule="evenodd"
                fill="currentColor"
                d="M8,0 C12.418,0 16,3.582 16,8 C16,12.418 12.418,16 8,16 C3.582,16 0,12.418 0,8 C0,3.582 3.582,0 8,0 Z M8,2 C4.692,2 2,4.692 2,8 C2,11.308 4.692,14 8,14 C11.308,14 14,11.308 14,8 C14,4.692 11.308,2 8,2 Z M11,9.5 C8.99394614,12 8.33753424,12.642482 8.33753424,12.642482 C8.15366364,12.8401935 7.84881952,12.8399338 7.66177128,12.642482 C7.66177128,12.642482 7,12 5,9.5 C4.53501573,8.91876966 4.5,8.5 5.5,8.5 L6.5,8.5 L6.5,5 C6.49999999,4.44390917 7.00090414,3.5 8.00045207,3.5 C9,3.5 9.49999996,4.44782158 9.5,5 L9.5,8.5 L10.5,8.5 C11.5,8.5 11.4674389,8.91746463 11,9.5 Z"
            />
        </svg>
    ),
    trash: props => (
        <svg {...props} viewBox="0 0 16 16" style={{shapeRendering: 'geometricprecision'}}>
            <path
                fillRule="evenodd"
                fill="currentColor"
                d="M4,7.50639765 C4,6.6744372 4.66831553,6 5.50473881,6 L10.4952612,6 C11.3263055,6 12,6.67646277 12,7.50639765 L12,13.0026083 C12,14.1057373 11.1132936,15 10.0018986,15 L5.99810135,15 C4.89458045,15 4,14.1041422 4,13.0026083 L4,7.50639765 Z M11,3 L5,3 L5,1.5 C5,1.225 5.225,1 5.5,1 L10.5,1 C10.775,1 11,1.225 11,1.5 L11,3 Z M3,4 C3,3.44771525 3.4556644,3 3.99539757,3 L12.0046024,3 C12.5543453,3 13,3.44386482 13,4 C13,4.55228475 12.5443356,5 12.0046024,5 L3.99539757,5 C3.44565467,5 3,4.55613518 3,4 Z M6,3 L10,3 L10,2 L6,2 L6,3 Z"
            />
        </svg>
    ),
    paperclip: props => (
        <svg {...props} viewBox="0 0 12 12" style={{shapeRendering: 'geometricprecision'}}>
            <path
                fillRule="evenodd"
                fill="currentColor"
                d="M3.0681802,11.6504133 C1.43593291,11.6504133 0,10.3913686 0,8.71859676 C0,7.89479722 0.282835753,7.06368859 0.916192745,6.43450711 L6.52840542,0.860641096 C6.67627262,0.693800279 6.96789836,0.68556392 7.1249551,0.843772923 C7.28201183,1.00199556 7.27161683,1.29355449 7.1036892,1.44018623 L1.49573788,7.01405225 C1.02807073,7.4786429 0.818181435,8.07992439 0.818181435,8.71859676 C0.818181435,9.92169156 1.85207359,10.832232 3.0681802,10.832232 C3.63101248,10.832232 4.19857125,10.6001548 4.64488387,10.1546687 L10.7684599,4.0438848 C11.0339598,3.77887585 11.181812,3.44485331 11.181812,3.13620802 C11.181812,2.73917188 11.0567066,2.35946754 10.7727213,2.07513588 C10.2237964,1.52552255 9.36137068,1.52552255 8.81249507,2.07513588 C6.79174528,4.09852567 4.76931549,6.11990274 2.7485781,8.14330617 C2.51463823,8.41841966 2.50518687,8.73868312 2.68465768,8.9444421 C2.94349863,9.1482238 3.26824859,9.12573745 3.44744135,8.95726027 C5.29258324,7.12201128 7.13777054,5.28679775 8.98294271,3.45157603 C9.13081672,3.28476249 9.42241928,3.27652613 9.57946783,3.43473513 C9.73651638,3.59294414 9.72613639,3.88448943 9.5582333,4.03112117 L4.02272512,9.53681904 C3.37311775,10.0584233 2.56841729,10.0613006 2.10938059,9.53259177 C1.59256133,8.99766479 1.65898143,8.1604198 2.12642603,7.61071101 C4.25070441,5.48370673 6.41303626,3.31798065 8.23295662,1.49565893 C9.09213569,0.63534122 10.4930586,0.635368493 11.3522729,1.49565893 C11.8126774,1.95663595 12,2.56644016 12,3.13628984 C12,3.69619862 11.7430912,4.22490742 11.3437502,4.62349811 L5.22017433,10.7342957 C4.62852011,11.3248453 3.85531813,11.649527 3.06818674,11.6504815 L3.0681802,11.6504133 Z"
            />
        </svg>
    ),
    spinner: props => (
        <svg {...props} viewBox="0 0 54 54" style={{shapeRendering: 'geometricprecision'}}>
            <path
                d="M10.9,48.6c-1.6-1.3-2-3.6-0.7-5.3c1.3-1.6,3.6-2.1,5.3-0.8c0.8,0.5,1.5,1.1,2.4,1.5c7.5,4.1,16.8,2.7,22.8-3.4c1.5-1.5,3.8-1.5,5.3,0c1.4,1.5,1.4,3.9,0,5.3c-8.4,8.5-21.4,10.6-31.8,4.8C13,50.1,11.9,49.3,10.9,48.6z"
                fill="currentColor"/>
            <path
                d="M53.6,31.4c-0.3,2.1-2.3,3.5-4.4,3.2c-2.1-0.3-3.4-2.3-3.1-4.4c0.2-1.1,0.2-2.2,0.2-3.3c0-8.7-5.7-16.2-13.7-18.5c-2-0.5-3.2-2.7-2.6-4.7s2.6-3.2,4.7-2.6C46,4.4,53.9,14.9,53.9,27C53.9,28.5,53.8,30,53.6,31.4z"
                fill="currentColor"/>
            <path
                d="M16.7,1.9c1.9-0.8,4.1,0.2,4.8,2.2s-0.2,4.2-2.1,5c-7.2,2.9-12,10-12,18.1c0,1.6,0.2,3.2,0.6,4.7c0.5,2-0.7,4.1-2.7,4.6c-2,0.5-4-0.7-4.5-2.8C0.3,31.5,0,29.3,0,27.1C0,15.8,6.7,5.9,16.7,1.9z"
                fill="currentColor"/>
        </svg>
    )
}