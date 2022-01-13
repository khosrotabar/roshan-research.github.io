import React from 'react';
import './contact-us-page.scss';
import {motion} from 'framer-motion';
import imageSource from '../../../assets/images/map.svg';
import emailSource from '../../../assets/images/email-icon.svg';
import phoneSource from '../../../assets/images/phone-icon.svg';
import locationSource from '../../../assets/images/location-icon.svg';

import {noneAnimation, startingAnimation} from "../../../animations/main-page";

const imageAnimationChooser = (props) => {
    if(props.shouldRerender){
        return startingAnimation;
    } else {
        return noneAnimation;
    }
};

export default function ContactusPage(props) {
    return (
        <motion.div
            className={'contact-us-page'}
            initial={imageAnimationChooser(props).initial}
            animate={imageAnimationChooser(props).animate}
            transition={imageAnimationChooser(props).transition}
        >
            <div id={'group'}>
                <div id={'texts-links'}>
                    <p id={'in-the-name'}>
                        به نام خداوند جان و خرد
                    </p>
                    <p id={'body-text'}>
                        <span style={{color: '#0077FF'}}>روشن </span>از سال 1390 با همت جمعی از دانشجویان دانشگاه علم و صنعت ایران شروع به کار نموده است. این گروه هدف خود را تلاش در راستای تحقق تمدن نوین اسلامی میداند و در قالب شرکت دانش‌بنیان راهکار پردازش ژرف برای پاسخ به نیازهای کشور، محصولات نرم‌افزاری ارائه می‌کند.
                    </p>
                    <div id={'email-row'}>
                        <img id={'email-icon'} src={emailSource} alt={''}/>
                        <a href={'mailto:salam@roshan-ai.ir'}>
                            <p id={'email-text'}>
                                salam@roshan-ai.ir
                            </p>
                        </a>
                    </div>
                    <div id={'phone-row'}>
                        <img id={'phone-icon'} src={phoneSource} alt={''}/>
                        <p>
                            91003303 21  98+
                        </p>
                    </div>
                    <div id={'address-row'}>
                        <img id={'location-icon'} src={locationSource} alt={''}/>
                        <a href={'https://www.google.com/maps/@35.7112824,51.4103303,19.52z'}>
                            <p id={'address-text'}>
                                میدان ولیعصر، خیابان کریم‌خان زند، خیابان به‌آفرین، پلاک 30، طبقه دوم
                            </p>
                        </a>
                    </div>
                </div>
                <div id={'contact-image'}>
                    <a href={'geo:35.7113,51.4105;u=35'}>

                    </a>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.47551006886061!2d51.41039480673782!3d35.711258957449914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0163343e08c1%3A0x32c2addbe412d651!2z2KrZh9ix2KfZhiDYs9iq2YjYsdiy!5e0!3m2!1sen!2suk!4v1642054837750!5m2!1sen!2suk"
                        allowFullScreen="true"
                        loading="lazy"
                        id={'main-image'}
                    />
                </div>
            </div>
        </motion.div>
    )
}