import {CONVERT_MODULE} from "src/js/constants";

export default {
    header: {
        langTitle: 'Language',
        locale: 'En'
    },
    tabs: {
        labels: {
            url: 'Web url',
            text: 'Text',
            mail: 'Email',
            tel: 'Phone',
        },
        inputTitles: {
            url: 'Your url',
            text: 'Your text',
            mail: 'Your email',
            tel: 'Your phone number',
        },
        inputPlaceholders: {
            url: 'https://somedomain.com',
            text: 'Write your text here',
            mail: 'namesubname@mai.com',
            tel: '+1 (234) 565 789 00',
        }
    },
    qrView: {
        versionTitle: 'Select version',
        qualityTitle: 'Select quality',
        sizeTitle: 'Select size',
        qualityLevels: {
            low: 'Low',
            medium: 'Medium',
            quartile: 'Quartile',
            high: 'High'
        },
        downloadButtonPng: 'Download .png',
        downloadButtonSvg: 'Download .svg'
    },
    history: {
        emptyHistory: 'Empty history',
    },
    errors: {
        [CONVERT_MODULE]: 'Convert error, try again later',
        universalError: 'Error, try again later'
    }
}
