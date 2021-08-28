import getClient from './client'
import normalizeProduct from './normalizeProduct'

// TODO: make process env var
const limit = 24

export default async function productListing(req, params, catId) {
    // console.log(req, params, searchOptions, 'req,params searchOptions')
    const { page = 1, filters = '[]', sort } = params
    // const page = 1;
    //const offset = limit * (page - 1)

    const client = await getClient(req)
        //console.log('eswaran')
    const search = await client.findProducts(catId)
        //   {
        //     sort,
        //     offset,
        //     limit,
        //     ...searchOptions,
        // })

    //console.log(plp);
    let products = []
        ///console.log(search.results[0].masterVariant.images[0].url);
    if (search.results) {
        products = search.results.map(p => { return { id: p.id, name: p.name.en, url: p.masterVariant.images[0].url } })
            // await client.getProducts({
            //     ids: search.results.map(p => p.sku).join(','),
            //     allImages: true,
            // })
    }
    //console.log(products, 'products.data');
    const totalPages = 1 //Math.ceil(search.total / limit) + 1

    // collect all page data
    return {
        total: 10,
        page,
        totalPages,
        // isLanding,
        // cmsBlocks,
        products: (products || []).map(normalizeProduct),
        sort,
        sortOptions: [],
        // search.sortingOptions.map(({ label, id }) => {
        //     return {
        //         name: label,
        //         code: id,
        //     }
        // }),
        filters: [],
        facets: []
            // (search.refinements || [])
            //     .filter(e => e.values)
            //     .map(({ label, attributeId, values }) => {
            //         return {
            //             name: label,
            //             options: values.map(({ hitCount, label, value }) => {
            //                 return {
            //                     name: label,
            //                     code: `${attributeId}=${value}`,
            //                     matches: hitCount,
            //                 }
            //             }),
            //         }
            //     }),
    }
}