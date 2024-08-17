import { authInstance } from './instance';

interface IPostAgenda {
  shareGroupId: number;
  title: string;
  photos: number[];
}

export async function createAgenda({
  shareGroupId,
  title,
  photos,
}: IPostAgenda): Promise<number | undefined> {
  try {
    const response = await authInstance().post('/agendas', {
      shareGroupId,
      title,
      photoIdList: photos,
    });
    if (response.status === 200) {
      return response.data.agendaId;
    } else {
    }
  } catch (error) {
    console.error('Error creating agenda:', error);
    throw error;
  }
}
