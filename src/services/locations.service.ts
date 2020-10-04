import axios, { AxiosInstance } from 'axios';
import { ServerResponse } from 'http';

export default class LocationsService {
    private _axiosInstance?: AxiosInstance;

    get http() {
        if (!this._axiosInstance) {
            this._axiosInstance = axios.create({
                baseURL: 'https://us-central1-spaceapps-api-dev.cloudfunctions.net/api/api',
                validateStatus: () => true,
            });
        }
        return this._axiosInstance;
    }

    async getMinifiedObservatories():Promise<any>{
        const result = await this.http.get<ServerResponse>('/observatories/minifiedObservatories');
        if(result.status){
            return result.data;
        }

        throw new Error('getting observatory data failed');
    }

    async getObservatoryDetalis(id: string): Promise<any>{
        const result = await this.http.post<ServerResponse>('/observatories/get-obs-by-id', {id});
        if(result.status){
            return result.data;
        }

        throw new Error('Getting obseravotery data by id failed');
    }
}