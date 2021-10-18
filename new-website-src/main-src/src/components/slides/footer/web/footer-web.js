import './footer-web.scss';
import {ReactComponent as Line} from "../../../../assets/images/footer-line.svg";
import {ReactComponent as Email} from "../../../../assets/images/email.svg";
import {ReactComponent as Name} from "../../../../assets/images/sherkat.svg";
import {ReactComponent as RoshanSVG} from "../../../../assets/images/roshan-icon.svg";
import {Link} from "react-router-dom";

export default function FooterWeb() {
    const height = window.innerHeight;

    const scrollToTop = (height) => {
        const totalHeight = 5 * height;
        window.scrollTo({
            top: totalHeight - 1 * height,
            behavior:'smooth',
        });
        setTimeout(() => {
            window.scrollTo({
                top: totalHeight - 2 * height,
                behavior:'smooth',
            });
        }, 500);
        setTimeout(() => {
            window.scrollTo({
                top: totalHeight - 3 * height,
                behavior:'smooth',
            });
        }, 1000);
        setTimeout(() => {
            window.scrollTo({
                top: totalHeight - 4 * height,
                behavior:'smooth',
            });
        }, 1500);
        setTimeout(() => {
            window.scrollTo({
                top: totalHeight - 5 * height,
                behavior:'smooth',
            });
        }, 2000);

        setTimeout(() => {
            window.location.reload();
        }, 2500);
    };

    return (
        <div id={'footer'}>
            <Line id={'line'}/>
            <div id={'body'}>
                <div id={'icons-group'}>
                    <button title={'خانه'} onClick={() => {
                        scrollToTop(height);
                    }} style={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                    }}>
                        <RoshanSVG id={'icon'}/>
                    </button>
                    <button title={'خانه'} onClick={() => {
                        scrollToTop(height);
                    }} style={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                    }}>
                        <svg
                            id={'title'}
                            width={44}
                            height={17}
                            viewBox="0 0 44 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                id={'text'}
                                d="M4.453 16.03a4.233 4.233 0 01-2.044-.496 3.866 3.866 0 01-1.484-1.396 4.253 4.253 0 01-.56-1.374 5.551 5.551 0 01-.13-1.222c0-.126.01-.364.029-.713.019-.354.118-.844.298-1.469.18-.63.429-1.28.749-1.95L2.547 8A11.632 11.632 0 001.9 9.622a7.15 7.15 0 00-.29 1.462c-.01.155-.015.305-.015.45 0 .291.031.6.094.924.063.33.194.65.393.96.252.393.582.696.989.91a2.88 2.88 0 001.382.327h1.709c.557 0 1.01-.061 1.36-.182.354-.117.628-.282.822-.495.198-.213.332-.473.4-.778.072-.3.109-.635.109-1.004V7.084h1.374v2.261c.005.194.04.371.102.531.068.155.158.289.27.4.11.112.244.2.4.262.16.058.336.088.53.088h.284V12h-.284c-.475 0-.909-.104-1.302-.313v.51c0 1.28-.34 2.237-1.018 2.872-.679.64-1.694.96-3.047.96h-1.71zm.05-9.492l1.237-1.25 1.265 1.265-1.25 1.25-1.251-1.265zm10.209 4.088c.053 0 .08.019.08.058v1.243c0 .049-.027.073-.08.073h-3.113c-.048 0-.073-.024-.073-.073v-1.243c0-.04.025-.058.073-.058h3.113zm2.969 0c.053 0 .08.019.08.058v1.243c0 .049-.027.073-.08.073h-3.113c-.049 0-.073-.024-.073-.073v-1.243c0-.04.024-.058.073-.058h3.113zm5.456 1.36c-.456 0-.861-.066-1.215-.197a2.426 2.426 0 01-.894-.582 2.366 2.366 0 01-.88.604c-.335.126-.672.189-1.011.189h-1.673v-1.374h1.673c.072 0 .177-.01.312-.03.136-.024.27-.08.4-.167.131-.092.245-.228.342-.407.102-.18.153-.424.153-.735V7.084h1.374v2.174c0 .47.11.815.328 1.033.223.218.586.327 1.09.327.073 0 .175-.012.306-.036a1.125 1.125 0 00.75-.59c.101-.179.152-.424.152-.734V7.084h1.367v2.174c0 .47.114.817.342 1.04.228.223.594.335 1.098.335.078 0 .182-.015.313-.044a1.165 1.165 0 00.72-.61c.092-.18.138-.42.138-.72 0-.107-.01-.24-.029-.4a7.955 7.955 0 00-.065-.517 18.804 18.804 0 00-.19-1.098c-.034-.17-.065-.32-.094-.451a3.897 3.897 0 00-.073-.298l1.302-.415a17.296 17.296 0 01.276 1.295c.044.223.083.448.117.676.039.223.07.441.094.654.024.209.037.393.037.553 0 .46-.075.863-.226 1.208a2.458 2.458 0 01-1.404 1.36c-.305.111-.61.17-.916.174a3.48 3.48 0 01-1.236-.204 2.483 2.483 0 01-.902-.603 2.403 2.403 0 01-.88.596c-.33.131-.662.197-.996.197zM26.126 1.81l-1.033 1.01-1.018-1.01L25.122.77l1.004 1.04zm.356 3.287l-1.149-1.163 1.135-1.179 1.178 1.179-1.164 1.163zm-2.785-.014l-1.15-1.164 1.135-1.178L24.86 3.92l-1.163 1.164zm8.254 9.556c.732 0 1.347-.056 1.847-.167.5-.112.894-.284 1.185-.517.252-.203.437-.463.553-.778.121-.315.182-.708.182-1.178H34.38c-.34 0-.684-.05-1.033-.153a2.69 2.69 0 01-.953-.502 2.645 2.645 0 01-.69-.909c-.18-.378-.27-.838-.27-1.381 0-.32.027-.609.08-.866a4.42 4.42 0 01.211-.698 3.176 3.176 0 01.582-.916 2.811 2.811 0 012.022-.836c.344 0 .666.053.967.16.3.106.57.266.807.48.655.61.982 1.568.982 2.872V12c0 .688-.102 1.28-.305 1.774-.2.5-.51.917-.931 1.252-.427.334-.958.581-1.593.741-.63.165-1.399.248-2.305.248V14.64zm2.378-7.527c-.48 0-.854.17-1.12.509-.267.34-.4.817-.4 1.433 0 .625.189 1.059.567 1.301.092.059.187.107.284.146.097.034.191.06.283.08l.248.036c.077.005.14.008.189.008h1.338V9.25c0-.354-.027-.652-.08-.895a2.492 2.492 0 00-.204-.61 1.067 1.067 0 00-.283-.364 1.048 1.048 0 00-.306-.19.961.961 0 00-.29-.065 2.243 2.243 0 00-.226-.014zM38 16.036v-1.374h1.004c.499 0 .93-.06 1.294-.182.369-.116.672-.298.91-.546a2.2 2.2 0 00.53-.945c.117-.383.175-.839.175-1.367V7.084h1.374v4.538c0 .693-.092 1.311-.276 1.854a3.623 3.623 0 01-.807 1.39 3.486 3.486 0 01-1.346.865c-.533.204-1.151.305-1.854.305H38z"
                                fill="#fff"
                            />
                        </svg>
                    </button>
                </div>
                <div id={'left'}>
                    <div id={'links'}>
                        <Link to={'/contact-us'}  title={'بخش تماس با ما'}>
                            <svg
                                id={'contact-us'}
                                width={62}
                                height={14}
                                fill="none"
                                viewBox="0 0 62 14"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    viewBox="0 0 62 14"
                                    id={'text'}
                                    fill={'white'}
                                    d="M3.471 10a6.476 6.476 0 01-1.107-.09 2.838 2.838 0 01-.738-.247c-.2-.11-.361-.246-.484-.408a2 2 0 01-.28-.572 3.416 3.416 0 01-.134-.738 11.678 11.678 0 01-.031-.904V.919h1.202v6.122c0 .369.01.668.032.897.026.23.087.407.185.535a.801.801 0 00.451.254c.204.043.505.066.904.07V10zm4.363-.897c.03 0 .07-.002.12-.007a.465.465 0 00.173-.05.656.656 0 00.184-.134.812.812 0 00.166-.261c.05-.115.091-.259.12-.433.035-.178.052-.394.052-.649 0-.047-.005-.12-.013-.223a2.245 2.245 0 00-.191-.725 1.309 1.309 0 00-.23-.363 1.125 1.125 0 00-.865-.375 1.03 1.03 0 00-.477.102.939.939 0 00-.324.267c-.09.114-.164.25-.223.407-.06.153-.115.32-.166.503-.05.178-.101.367-.152.566-.051.195-.11.39-.179.586.221.11.425.214.611.311.187.098.361.183.522.255.161.068.312.123.452.165.144.039.284.058.42.058zM7.35 4.686c.416 0 .777.081 1.082.242.31.157.567.37.77.637.204.267.354.574.452.922.102.348.153.709.153 1.082 0 .412-.036.766-.108 1.063a2.81 2.81 0 01-.274.75c-.115.2-.244.361-.388.484a1.689 1.689 0 01-.853.407 2.32 2.32 0 01-.35.032c-.208 0-.407-.02-.598-.063a3.711 3.711 0 01-.586-.185c-.199-.076-.409-.172-.63-.286a56.111 56.111 0 01-.719-.388A1.678 1.678 0 013.96 10h-.732V8.797h.732c.16 0 .292-.06.394-.178.106-.119.197-.274.274-.464.076-.191.146-.41.21-.656.063-.246.136-.498.216-.757a6.85 6.85 0 01.3-.757c.114-.247.258-.465.432-.656a2.1 2.1 0 01.643-.464c.254-.12.562-.179.922-.179zM19.125 10a6.477 6.477 0 01-1.107-.09 2.84 2.84 0 01-.738-.247c-.2-.11-.36-.246-.484-.408a2 2 0 01-.28-.572 3.414 3.414 0 01-.133-.738 11.685 11.685 0 01-.032-.904V.919h1.203v6.122c0 .369.01.668.031.897.026.23.087.407.185.535a.802.802 0 00.452.254c.203.043.505.066.903.07V10zm3.173-5.18a8.761 8.761 0 01.134.617c.034.161.07.342.108.541a17.062 17.062 0 01.178 1.177c.021.187.032.35.032.49 0 .408-.068.76-.203 1.057a2.1 2.1 0 01-1.24 1.158c-.269.093-.538.14-.81.14h-1.622V8.797h1.622c.064 0 .153-.008.268-.025a.937.937 0 00.655-.49c.09-.153.134-.365.134-.637 0-.093-.009-.21-.026-.35a6.704 6.704 0 00-.057-.458 11.096 11.096 0 00-.076-.502 21.758 21.758 0 00-.172-.898 4.452 4.452 0 00-.064-.267l1.14-.35zm-2.201 7.49l1.081-1.095 1.108 1.108-1.095 1.094-1.095-1.107zM42.21 10c-.42 0-.79-.062-1.107-.185a2.067 2.067 0 01-.79-.534c-.114.136-.243.25-.388.344-.14.089-.286.163-.439.222a2.43 2.43 0 01-.903.153c-.53 0-.989-.119-1.375-.356v.534c0 1.112-.297 1.945-.89 2.501-.595.556-1.484.834-2.667.834h-1.496a3.749 3.749 0 01-1.788-.427 3.399 3.399 0 01-1.298-1.215 3.722 3.722 0 01-.49-1.203 4.724 4.724 0 01-.121-1.082c0-.11.009-.32.026-.63.02-.31.11-.742.267-1.298.157-.556.375-1.128.655-1.718l1.082.528c-.238.492-.426.965-.566 1.42-.136.453-.221.882-.255 1.285-.013.135-.019.267-.019.394 0 .26.028.533.083.821.06.289.176.569.35.84.22.344.509.609.865.796.357.19.76.286 1.21.286h1.495c.488 0 .884-.05 1.19-.153.31-.101.55-.246.719-.432.174-.187.29-.412.35-.675.063-.259.095-.55.095-.872v-4.48h1.203V6.94c0 .407.038.734.115.98.08.242.184.429.311.56a.964.964 0 00.44.261c.165.042.335.064.509.064.106 0 .226-.02.362-.058.136-.038.263-.101.382-.19a1.168 1.168 0 00.426-.942V5.698h1.197v1.98c.008.385.11.67.305.852.2.182.516.274.949.274.072-.005.165-.02.28-.045a.925.925 0 00.617-.522c.08-.157.12-.365.12-.623 0-.094-.008-.21-.025-.35a10.587 10.587 0 00-.127-.935c-.03-.17-.06-.33-.09-.478a8.322 8.322 0 00-.14-.662l1.146-.35c.009.021.024.087.045.197a14.78 14.78 0 01.19.93c.039.195.073.392.103.591.03.195.053.386.07.573.02.182.031.344.031.484 0 .403-.065.753-.197 1.05a2.205 2.205 0 01-.509.738 2.15 2.15 0 01-.713.445 2.382 2.382 0 01-.795.153zm6.91 0a6.476 6.476 0 01-1.107-.09 2.84 2.84 0 01-.738-.247c-.2-.11-.36-.246-.484-.408a2 2 0 01-.28-.572 3.414 3.414 0 01-.133-.738 11.682 11.682 0 01-.032-.904V.919h1.203v6.122c0 .369.01.668.032.897.025.23.087.407.184.535a.802.802 0 00.452.254c.203.043.505.066.903.07V10zm7.227 0a2.7 2.7 0 01-.859-.134 2.471 2.471 0 01-.725-.381 1.67 1.67 0 01-.795.675c-.137.059-.268.097-.395.114a2.055 2.055 0 01-.331.032c-.208 0-.408-.022-.599-.064a3.708 3.708 0 01-.585-.185c-.2-.076-.41-.172-.63-.286a55.64 55.64 0 01-.72-.388 1.678 1.678 0 01-1.342.617h-.496V8.797h.496c.161 0 .293-.06.395-.178.106-.119.197-.274.273-.464.077-.191.147-.41.21-.656.064-.246.136-.498.217-.757.084-.259.184-.511.299-.757.114-.247.259-.465.432-.656a2.1 2.1 0 01.643-.464c.255-.12.562-.179.923-.179.416 0 .776.081 1.082.242.31.157.566.37.77.637.203.267.354.574.452.922.101.348.152.709.152 1.082 0 .28.05.503.147.668.102.161.216.285.343.37a1.203 1.203 0 00.643.19h.223V10h-.223zm-3.105-.897c.033 0 .076-.002.127-.007a.46.46 0 00.165-.05.655.655 0 00.185-.134.812.812 0 00.165-.261c.051-.115.092-.259.121-.433a3.527 3.527 0 00.038-.872 2.246 2.246 0 00-.19-.725 1.31 1.31 0 00-.23-.363 1.125 1.125 0 00-.865-.375 1.03 1.03 0 00-.477.102.939.939 0 00-.325.267c-.089.114-.163.25-.223.407-.059.153-.114.32-.165.503-.051.178-.102.367-.153.566-.05.195-.11.39-.178.586.22.11.424.214.611.311.187.098.36.183.522.255.161.068.312.123.452.165.144.039.284.058.42.058zm7.502-4.283a8.907 8.907 0 01.134.617c.033.161.07.342.107.541a16.818 16.818 0 01.178 1.177c.022.187.032.35.032.49 0 .408-.067.76-.203 1.057a2.1 2.1 0 01-1.241 1.158c-.267.093-.537.14-.808.14h-2.635V8.797h2.635c.063 0 .152-.008.267-.025a.938.938 0 00.656-.49c.089-.153.133-.365.133-.637 0-.093-.008-.21-.025-.35a6.767 6.767 0 00-.058-.458 11.098 11.098 0 00-.076-.502 21.758 21.758 0 00-.172-.898 4.39 4.39 0 00-.063-.267l1.139-.35zm-.115-1.35l-1.005-1.017.992-1.031 1.031 1.03-1.018 1.019zm-2.437-.012L57.187 2.44l.993-1.03 1.031 1.03-1.018 1.018z"
                                />
                            </svg>
                        </Link>
                        <Link to={'/join-us'}  title={'بخش همکاری باما'}>
                            <svg
                                id={'join-us'}
                                width={72}
                                height={15}
                                fill="none"
                                viewBox="0 0 72 15"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    id={'text'}
                                    d="M3.149 11a6.467 6.467 0 01-1.107-.09 2.838 2.838 0 01-.739-.247c-.199-.11-.36-.246-.483-.408a2.002 2.002 0 01-.28-.572 3.416 3.416 0 01-.134-.738 11.679 11.679 0 01-.032-.904V1.919h1.203v6.122c0 .369.01.668.032.897.025.23.087.407.184.535a.801.801 0 00.452.254c.204.043.505.066.904.07V11zm4.363-.897c.03 0 .07-.002.12-.007a.466.466 0 00.172-.05.656.656 0 00.185-.134.812.812 0 00.165-.261c.051-.115.092-.259.121-.433.034-.178.051-.394.051-.649 0-.047-.004-.12-.012-.223a2.243 2.243 0 00-.191-.725 1.308 1.308 0 00-.23-.363 1.125 1.125 0 00-.865-.375 1.03 1.03 0 00-.477.102.939.939 0 00-.325.267c-.089.114-.163.25-.222.407-.06.153-.115.32-.166.503-.05.178-.102.367-.153.566-.05.195-.11.39-.178.586.22.11.424.214.611.311.187.098.36.183.522.255.161.068.312.123.452.165.144.039.284.058.42.058zm-.484-4.417c.416 0 .776.081 1.082.242.31.157.566.37.77.637.204.267.354.574.452.922.102.348.152.709.152 1.082 0 .412-.036.766-.108 1.063a2.81 2.81 0 01-.273.75c-.115.2-.244.361-.389.484a1.689 1.689 0 01-.853.407 2.32 2.32 0 01-.35.032c-.207 0-.407-.02-.597-.063a3.71 3.71 0 01-.586-.185c-.2-.076-.41-.171-.63-.286a54.725 54.725 0 01-.719-.388A1.678 1.678 0 013.636 11h-.732V9.797h.732c.162 0 .293-.06.395-.178.106-.119.197-.274.273-.464.077-.191.147-.41.21-.656.064-.246.136-.498.217-.757.085-.259.184-.511.299-.757.114-.247.259-.465.433-.656a2.1 2.1 0 01.642-.464c.255-.12.563-.179.923-.179zM18.803 11a6.466 6.466 0 01-1.107-.09 2.837 2.837 0 01-.738-.247c-.2-.11-.36-.246-.484-.408a2.004 2.004 0 01-.28-.572 3.42 3.42 0 01-.134-.738 11.685 11.685 0 01-.031-.904V1.919h1.202v6.122c0 .369.01.668.032.897.026.23.087.407.185.535a.801.801 0 00.451.254c.204.043.505.066.904.07V11zm3.173-5.18c.009.025.026.093.051.204.025.11.053.248.083.413.034.161.07.342.108.541a17.068 17.068 0 01.178 1.177c.021.187.032.35.032.49 0 .408-.068.76-.204 1.057a2.1 2.1 0 01-1.24 1.158c-.268.093-.537.14-.809.14h-1.623V9.797h1.623c.064 0 .153-.008.267-.025a.938.938 0 00.655-.49c.09-.153.134-.365.134-.637 0-.093-.008-.21-.025-.35a6.832 6.832 0 00-.057-.458 11.098 11.098 0 00-.077-.502 21.758 21.758 0 00-.171-.898 4.55 4.55 0 00-.064-.267l1.14-.35zm-2.202 7.49l1.082-1.095 1.107 1.108-1.094 1.094-1.095-1.107zm13.51-.013a4.64 4.64 0 001.102-.114c.314-.072.573-.19.776-.35.204-.162.354-.372.452-.63.098-.26.146-.573.146-.942-.407-.106-.806-.212-1.196-.318l-.522-.134c-.182-.05-.365-.1-.547-.146-.178-.051-.354-.098-.528-.14a35.38 35.38 0 01-.471-.121 3.514 3.514 0 01-.28-1.343l.006-.407c.009-.246.1-.57.274-.974.174-.403.42-.763.738-1.082.318-.322.685-.579 1.1-.77a4.077 4.077 0 011.662-.362c.399 0 .808.061 1.228.184l-.3 1.152a2.822 2.822 0 00-.877-.127c-.297 0-.584.042-.86.127-.27.08-.523.2-.757.356a2.454 2.454 0 00-.598.567c-.161.216-.278.46-.35.732-.05.178-.076.362-.076.553 0 .11.008.22.025.331l2.438.605c.339.093.593.246.763.458.17.212.255.47.255.776 0 .556-.066 1.042-.197 1.457-.132.42-.342.768-.63 1.044-.289.276-.662.484-1.12.624-.454.14-1.006.21-1.655.21h-1.406c-.323 0-.635-.04-.936-.121a3.922 3.922 0 01-.853-.337 3.881 3.881 0 01-1.33-1.196c-.199-.323-.35-.678-.451-1.063a4.77 4.77 0 01-.153-1.222c0-.53.083-1.101.248-1.712.17-.615.416-1.264.738-1.947a663.092 663.092 0 011.056.515c-.56 1.196-.84 2.234-.84 3.112 0 .314.039.613.115.897.076.284.183.541.318.77.217.34.51.605.878.796.37.195.773.292 1.21.292h1.406zm4.7 1.235v-1.203h.879c.437 0 .814-.053 1.132-.159.323-.102.588-.26.796-.477.212-.217.367-.492.464-.827.102-.336.153-.734.153-1.197V6.7h1.203v3.97c0 .607-.08 1.148-.242 1.623-.157.48-.392.884-.706 1.215a3.05 3.05 0 01-1.178.758c-.466.178-1.007.267-1.622.267h-.879zM47.282 11a6.466 6.466 0 01-1.108-.09 2.837 2.837 0 01-.738-.247c-.2-.11-.36-.246-.483-.408a2 2 0 01-.28-.572 3.414 3.414 0 01-.134-.738 11.685 11.685 0 01-.032-.904V1.919h1.203v6.122c0 .369.01.668.032.897.025.23.087.407.184.535a.801.801 0 00.452.254c.204.043.505.066.904.07V11zm7.882 0h-.096c-.377 0-.715-.036-1.012-.108a3.345 3.345 0 01-.801-.306 3.573 3.573 0 01-.669-.483 7.211 7.211 0 01-.598-.637.757.757 0 01-.025.058.802.802 0 00-.026.057 2.075 2.075 0 01-.502.63 2.748 2.748 0 01-.758.464c-.25.11-.528.193-.833.249-.306.05-.624.076-.955.076h-1.87V9.797h1.87c.246 0 .475-.017.687-.05.217-.039.41-.09.58-.153.173-.068.32-.149.439-.242a.938.938 0 00.273-.312.883.883 0 00.083-.388c0-.115-.03-.278-.09-.49-.059-.217-.222-.505-.49-.866a2632.29 2632.29 0 00-2.08-2.92l.235-.891L54.368.786l.497 1.101-5.212 2.387 2.526 3.506c.259.348.49.65.694.904.203.25.41.458.617.623.212.166.441.289.687.37.25.08.548.12.891.12h.096V11zm7.22 0a2.7 2.7 0 01-.86-.134 2.469 2.469 0 01-.725-.381 1.669 1.669 0 01-.795.675 1.47 1.47 0 01-.395.114 2.055 2.055 0 01-.331.032c-.208 0-.407-.022-.598-.064a3.712 3.712 0 01-.586-.185c-.2-.076-.41-.171-.63-.286a54.979 54.979 0 01-.719-.388 1.678 1.678 0 01-1.343.617h-.496V9.797h.496c.161 0 .293-.06.395-.178.106-.119.197-.274.274-.464.076-.191.146-.41.21-.656.063-.246.135-.498.216-.757.085-.259.184-.511.299-.757.114-.247.259-.465.433-.656.178-.19.392-.346.642-.464.255-.12.563-.179.923-.179.416 0 .777.081 1.082.242.31.157.566.37.77.637.204.267.354.574.452.922.102.348.153.709.153 1.082 0 .28.048.503.146.668.102.161.216.285.343.37a1.203 1.203 0 00.643.19h.223V11h-.223zm-3.106-.897c.034 0 .076-.002.127-.007a.46.46 0 00.166-.05.656.656 0 00.184-.134.812.812 0 00.165-.261c.051-.115.092-.259.121-.433.034-.178.051-.394.051-.649 0-.047-.004-.12-.012-.223a2.246 2.246 0 00-.191-.725 1.311 1.311 0 00-.23-.363 1.125 1.125 0 00-.865-.375 1.03 1.03 0 00-.477.102.94.94 0 00-.325.267c-.089.114-.163.25-.222.407-.06.153-.115.32-.166.503-.05.178-.102.367-.153.566-.05.195-.11.39-.178.586.22.11.424.214.611.311.187.098.36.183.522.255.161.068.312.123.452.165.144.039.284.058.42.058zm7.21-.745a2 2 0 00.432-.254 1.79 1.79 0 00.35-.344 1.452 1.452 0 00.318-.923 1 1 0 00-.134-.534 1.184 1.184 0 00-.318-.357 1.16 1.16 0 00-.388-.197 1.13 1.13 0 00-.337-.064c-.174 0-.335.028-.484.083a1.058 1.058 0 00-.636.554c-.06.131-.09.273-.09.426 0 .183.024.348.07.497.052.144.128.28.23.407.106.123.24.242.4.356.162.115.357.231.586.35zm1.622-5.053a133.702 133.702 0 011.8 1.922c.17.183.327.359.472.528.148.166.277.319.388.459.114.135.2.246.254.33.115.187.208.368.28.541a2.06 2.06 0 01.184.853c0 .072-.005.174-.018.306a2.97 2.97 0 01-.115.521 2.069 2.069 0 01-.324.675c-.145.2-.32.371-.528.516a2.408 2.408 0 01-.707.33c-.263.081-.547.121-.853.121-.288 0-.587-.038-.897-.114a4.854 4.854 0 01-.96-.357 5.296 5.296 0 01-.262-.114 11.191 11.191 0 00-.222-.102 3.36 3.36 0 01-.178-.09 7.99 7.99 0 01-1.4.28c-.535.06-1.112.09-1.731.09h-.936V9.797h.936c.275 0 .56-.004.852-.012.297-.009.56-.028.79-.058a2.524 2.524 0 01-.669-.878 2.74 2.74 0 01-.21-1.1 2.198 2.198 0 01.668-1.604c.212-.2.46-.355.745-.465a2.53 2.53 0 01.942-.172 2.163 2.163 0 011.279.401c.174.119.324.259.452.42.131.157.242.323.33.496.09.17.155.344.198.522.046.174.07.338.07.49 0 .437-.083.832-.248 1.184-.162.348-.401.655-.72.923.179.072.367.131.567.178a2.699 2.699 0 00.98.044 1.233 1.233 0 00.668-.305c.093-.09.174-.204.242-.344a.853.853 0 00.083-.375c0-.064-.015-.166-.045-.306-.025-.14-.106-.328-.242-.566a5.467 5.467 0 00-.515-.738 13.78 13.78 0 00-.687-.79 27.58 27.58 0 00-.783-.801 70.502 70.502 0 01-.796-.796l.866-.84z"
                                    fill="#fff"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div id={'email-name'}>
                        <Name id={'name'}/>
                        <Email id={'email'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};