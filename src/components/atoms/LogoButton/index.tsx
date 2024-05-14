import LogoButtonProps from "./types"
import { forwardRef, Ref } from "react"

const LogoButton = forwardRef(({ ...props }: LogoButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
        <button className="group" ref={ref} title="Logo do Amazon Hacking" aria-label="Logo do Amazon Hacking" {...props}>
            <svg width="218" height="114" viewBox="0 0 218 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1.5" width="216" height="111" rx="29" fill="black" />
                <rect x="1" y="1.5" width="216" height="111" rx="29" stroke="black" stroke-width="2" />
                <path d="M27.0666 53.7588H23L35.5534 26L47.7531 53.7588H44.2169L35.5534 34.8404L27.0666 53.7588Z" fill="white" />
                <path d="M33.078 53.7588H29.1883L35.3765 40.4982L41.5648 53.7588H37.675L35.3765 48.6314L33.078 53.7588Z" fill="white" />
                <path d="M54.1182 54.1124H50.4052L57.6543 26L66.1411 45.8025L74.4511 26.3536L81.877 54.1124H77.9872L73.9207 36.9621L66.1411 55.1733L58.5384 36.9621L54.1182 54.1124Z" fill="white" />
                <path d="M112.821 27.2377V31.3043H124.843L111.937 54.1125H130.678V50.5763H117.948L119.362 48.101H130.678V44.9185H120.954L130.678 27.2377H112.821Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M84.1738 53.9355H109.104L96.5504 26.3535L84.1738 53.9355ZM89.6364 50.3994H103.609L96.5732 34.9402L89.6364 50.3994Z" fill="white" />
                <path d="M96.5265 40.3214L92.8398 48.4546H100.266L96.5265 40.3214Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M92.8398 48.4546H100.266L96.5265 40.3214L92.8398 48.4546Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M149.413 51.2836C155.602 51.2836 160.375 46.4811 160.375 40.852C160.375 35.2228 155.602 30.4203 149.413 30.4203C143.225 30.4203 138.451 35.2228 138.451 40.852C138.451 46.4811 143.225 51.2836 149.413 51.2836ZM149.413 55.1734C157.616 55.1734 164.265 48.7615 164.265 40.852C164.265 32.9424 157.616 26.5305 149.413 26.5305C141.211 26.5305 134.562 32.9424 134.562 40.852C134.562 48.7615 141.211 55.1734 149.413 55.1734Z" fill="white" />
                <path d="M142.697 38.9069H156.135V42.7966H142.697V38.9069Z" fill="white" />
                <path d="M189.377 27.2377H193.62V47.0401H189.377V27.2377Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M187.86 50.2228L173.815 36.0037V50.2228H187.86ZM169.925 54.1125V26.5305L190.054 46.9096H193.617V54.1125H169.925Z" fill="white" />
                <g className="fill-white group-hover:fill-primary-100 transition-colors">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M181.354 62.3412C178.592 61.7515 175.704 62.1266 173.21 63.3928C170.718 64.6584 168.793 66.725 167.761 69.2069C166.729 71.6869 166.649 74.4341 167.532 76.9641C168.417 79.4958 170.215 81.6612 172.626 83.0587C175.039 84.4571 177.899 84.989 180.692 84.5501C183.485 84.1113 186.009 82.7342 187.821 80.6838C189.597 78.6745 190.616 75.7481 190.616 73.0308H194.506C194.506 76.606 193.198 80.4742 190.736 83.2598C188.31 86.0042 184.962 87.8168 181.296 88.3927C177.631 88.9686 173.867 88.2741 170.675 86.4241C167.482 84.5732 165.059 81.6799 163.86 78.2464C162.661 74.8112 162.771 71.0754 164.17 67.7129C165.567 64.3524 168.154 61.5977 171.449 59.9246C174.742 58.2522 178.539 57.7628 182.166 58.5372C185.793 59.3116 189.032 61.3044 191.295 64.1789L188.238 66.5847C186.552 64.4418 184.115 62.9308 181.354 62.3412Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M177.354 73.0309H192.737V76.567H180.891V85.5842H177.354V73.0309Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M152.501 83.1087L138.456 68.8897V83.1087H152.501ZM134.566 86.9985V59.4165L154.696 79.7956H158.259V86.9985H134.566Z" />
                    <path d="M154.013 60.1237H158.256V79.9261H154.013V60.1237Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.9739 86.9987L59.7742 58.7095L46.8672 86.9987H71.9739ZM52.9174 83.109H66.0604L59.674 68.3L52.9174 83.109Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 59.7703H26.8898V66.3122H39.9735V59.7703H43.8633V70.2019H23V59.7703Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 86.9987H26.8898V77.2742H39.9735V86.9987H43.8633V73.3845H23V86.9987Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M79.3425 83.4386C75.7486 80.4489 74.2769 76.6758 74.2773 72.9371L78.1671 72.9376C78.1668 75.5718 79.1634 78.2298 81.8301 80.4482C84.2406 82.4535 87.6846 82.9319 91.505 82.9319H96.5551V86.8216H91.505C87.5787 86.8216 82.8874 86.3876 79.3425 83.4386Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M79.3425 62.6228C75.7486 65.6125 74.2769 69.3856 74.2773 73.1243L78.1671 73.1238C78.1668 70.4896 79.1634 67.8316 81.8301 65.6132C84.2406 63.6079 87.6846 63.1295 91.505 63.1295H96.5551V59.2398H91.505C87.5787 59.2398 82.8874 59.6738 79.3425 62.6228Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M83.4688 84.3463V61.3613H87.3585V84.3463H83.4688Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.482 72.2548L121.66 59.4165L116.002 59.5933L104.981 70.2018H104.51V59.7701H100.62V86.9985H104.51V74.0916H104.891L116.71 86.9985H121.66L108.482 72.2548Z" />
                    <path d="M128.908 86.8219H125.195V59.7703H128.908V86.8219Z" />
                </g>
            </svg>
        </button>

    )
})

LogoButton.displayName = 'LogoButton'

export default LogoButton