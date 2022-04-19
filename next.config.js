module.exports = {
    exportPathMap: async function (defaultPathMap, {dev, dir, outDir, buildId}){
        return{
            '/': {
                page: "/"
            }
        }
    },
    env:{
        NEXT_PUBLIC_GA_ID: 'G-NH2S1GEN8H'
    }
};
