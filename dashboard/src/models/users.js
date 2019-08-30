import {query} from './database';

export const getAll = async () => {
    const result = await query('admin/auth/');
    return result;
}