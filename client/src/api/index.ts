import {stringify} from 'query-string'
import {httpRequest, httpRequestAuth} from "./axios";
import {AuthRequest} from "../types/request/auth.request";
import {AuthResponse} from "../types/response/auth.response";
import {Response} from "./types";
import {LinkRequest} from "../types/request/link.request";
import {LinkResponse} from "../types/response/link.response";


// =============    AUTH    ==============

export const apiAuthRegister = (
    params: AuthRequest.Register
): Response<AuthResponse.Register> => httpRequestAuth.post(`/register?${stringify(params)}`)

export const apiAuthLogin = (
    params: AuthRequest.Login
): Response<AuthResponse.Login> => httpRequestAuth.post('/login', params)


// ==============    LINK    ===============

export const apiLinkCreate = (
    params: LinkRequest.Create
): Response<LinkResponse.Create> => httpRequest.post('/squeeze', params)

export const apiLinksGet = (
    params: LinkRequest.Get
): Response<LinkResponse.Create> => httpRequest.get('/statistics', {params})

export const apiLinkRedirect = (
    key: string
): any => httpRequest.get(`/s/${key}`)