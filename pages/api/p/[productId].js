import { product } from '../../../commercetools-connector'

export default async function pdp(req, res) {
    const { productId } = req.query
    return res.json(await product({ id: productId }, req, res))
}