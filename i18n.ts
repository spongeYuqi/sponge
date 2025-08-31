// import { notFound } from 'next/navigation';
// import { getRequestConfig } from 'next-intl/server';

// // Can be imported from a shared config
// const locales = ['en', 'zh'];

// export default getRequestConfig(async ({ locale }) => {
//     // Validate that the incoming `locale` parameter is valid
//     if (!locales.includes(locale as any)) notFound();

//     return {
//         messages: (await import(`./messages/${locale}.json`)).default
//     };
// });

import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'zh'];

export default getRequestConfig(async ({ locale }) => {
    // 如果请求的locale无效或者为空，强制使用'en'
    if (!locale || !locales.includes(locale as any)) {
        locale = 'zh'; // 强制设置为英文
    }

    return {
        messages: (await import(`./messages/${locale}.json`)).default
    };
});