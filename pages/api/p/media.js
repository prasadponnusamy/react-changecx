export { productMedia }
from '../../../commercetools-connector'

export default async function(req, res) {
    const { productId, color } = req.query
    res.json(await productMedia({ id: productId, color }, req, res))
}