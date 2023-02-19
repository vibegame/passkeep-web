import { apiClient } from '../../api-client';
import { CreateClueDto } from './create-clue-field.dto';

export const clueFieldsService = {
  createOne(dto: CreateClueDto) {
    return apiClient.post('/clueFields', dto);
  },
};
