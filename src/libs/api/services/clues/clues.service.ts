import { apiClient } from '../../api-client';
import { Clue, ClueField } from '../../types';
import { CreateClueDto } from './create-clue.dto';

export const cluesService = {
  findAll() {
    return apiClient.get<(Clue & { clueFields: ClueField[] })[]>('/clues', {
      params: {
        _embed: 'clueFields',
      },
    });
  },

  createOne(dto: CreateClueDto) {
    return apiClient.post<Clue>('/clues', dto);
  },

  deleteOne(id: string) {
    return apiClient.delete(`/clues/${id}`);
  },
};
