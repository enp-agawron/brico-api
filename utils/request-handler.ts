import { test, expect } from '@playwright/test'

export class RequestHandler {

    private baseUrl: string
    private apiPath: string = ''
    private queryParams: object = {}
    private apiHeaders: object = {}
    private apiBody: object = {}

    url(url: string) {}
    path(path: string) {}
    params(params: object) {}
    headers(headers: object) {}
    body(body: object) {}
}