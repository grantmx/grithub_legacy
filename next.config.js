module.exports = {
    exportPathMap: async function (defaultPathMap, {dev, dir, outDir, buildId}){
        return{
            '/': {
                page: "/"
            }
        }
    },
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US'
    }
};
