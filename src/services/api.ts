import Axios from "axios";
import {
    PokemonResponse,
    PokemonListResponse,
} from "@app/core/domains/pokemon";
import { Config, params } from "./params";

export type ResponseMapGet = {
    "pokemon/{name}": PokemonResponse;
    pokemon: PokemonListResponse;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type ResponseMapPost = {};

// eslint-disable-next-line @typescript-eslint/ban-types
export type ResponseMapDelete = {};

// eslint-disable-next-line @typescript-eslint/ban-types
export type ResponseMapPut = {};

const api = Axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

api.interceptors.response.use((response) => {
    if (response.data === "" && response.request.method === "GET") {
        throw new Error("Empty API response");
    }
    return response;
});

export default {
    /**
     * GET request
     */

    async get<P extends keyof ResponseMapGet>(path: P, config?: Config) {
        const [apiPath, apiConfig] = params(path as string, config);
        const response = await api.get<ResponseMapGet[P]>(apiPath, apiConfig);
        return response.data;
    },

    /**
     * POST request
     */
    async post<P extends keyof ResponseMapPost>(
        path: P,
        data: Parameters<typeof api.post>[1],
        config?: Config
    ) {
        const [apiPath, apiConfig] = params(path, config);
        const response = await api.post<ResponseMapPost[P]>(
            apiPath,
            data,
            apiConfig
        );
        return response.data;
    },

    /**
     * DELETE request
     */
    async delete<P extends keyof ResponseMapDelete>(path: P, config?: Config) {
        const [apiPath, apiConfig] = params(path, config);
        const response = await api.delete<ResponseMapDelete[P]>(
            apiPath,
            apiConfig
        );
        return response.data;
    },

    /**
     * PUT request
     */
    async put<P extends keyof ResponseMapPut>(
        path: P,
        data: Parameters<typeof api.put>[1],
        config?: Config
    ) {
        const [apiPath, apiConfig] = params(path, config);
        const response = await api.put<ResponseMapPut[P]>(
            apiPath,
            data,
            apiConfig
        );
        return response.data;
    },
};
