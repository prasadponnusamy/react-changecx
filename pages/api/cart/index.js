import { cart } from '../../commercetools-connector'

export default async function(req, res) {
    res.json(await cart(req, res))
}