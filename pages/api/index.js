import { home } from '../../commercetools-connector'

export default async function(req, res) {
    res.json(await home(req, res))
}