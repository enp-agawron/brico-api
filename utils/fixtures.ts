import { test as base } from '@playwright/test'
import { RequestHandler } from './request-handler'
import { APILoger } from './logger'

export type TestOptions = {
    api: RequestHandler
}

export const test = base.extend<TestOptions>({
    api: async({ request }, use) => {
        const baseUrl = 'https://pre-brico.adafir.eu'
        const logger = new APILoger()
        const requestHandler = new RequestHandler(request, baseUrl, logger)
        await use(requestHandler)
    }


})