import { format, startOfDay } from 'date-fns';
import { READABLE_DATE_FORMAT } from '../variables/constants';

export const toSingleReadableFormat = (date: string) =>
    date ? format(new Date(date), READABLE_DATE_FORMAT) : '';
