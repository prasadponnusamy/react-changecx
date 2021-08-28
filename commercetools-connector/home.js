import fulfillAPIRequest from 'react-storefront/props/fulfillAPIRequest'
import createAppData from './utils/createAppData'

export default async function home(req, res) {
    return await fulfillAPIRequest(req, {
        appData: createAppData,
        pageData: () =>
            Promise.resolve({
                title: 'React Storefront | Commercetools Connector',
                slots: {
                    heading: 'Welcome',
                    description: `
                <p>
                Enjoy our Commercetools Connector.
              </p>
              <p>Happy coding!</p>
            `,
                },
            }),
    })
}