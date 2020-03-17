import {CONVERT_MODULE} from 'src/js/constants';

export default {
    appName: 'QR-code generator',
    drawer: {
        locale: 'Ru'
    },
    navigation: {
        index: 'Главная',
        history: 'История'
    },
    tabs: {
        labels: {
            url: 'Веб ссылка',
            text: 'Текст',
            mail: 'Email',
            tel: 'Телефон',
        },
        inputTitles: {
            url: 'Ваш url',
            text: 'Ваш текст',
            mail: 'Ваш email',
            tel: 'Ваш телефонный номер',
        },
        inputPlaceholders: {
            url: 'https://somedomain.com',
            text: 'Напишите Ваш текст здесь',
            mail: 'namesubname@mai.com',
            tel: '+1 (234) 565 789 00',
        }
    },
    qrView: {
        versionTitle: 'Выберите версию',
        qualityTitle: 'Виберите качество',
        sizeTitle: 'Выберите размер',
        qualityLevels: {
            low: 'Низкое',
            medium: 'Среднее',
            quartile: 'Выше среднего',
            high: 'Высокое'
        },
        downloadButtonPng: 'Скачать .png',
        downloadButtonSvg: 'Скачать .svg'
    },
    history: {
        emptyHistory: 'Нет истории',
    },
    errors: {
        [CONVERT_MODULE]: 'Ошибка конвертации, по пробуйте позже',
        universalError: 'Ошибка, по пробуйте позже'
    }
}
