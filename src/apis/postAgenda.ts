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
}: IPostAgenda): Promise<void> {
  try {
    const response = await authInstance().post('/agendas', {
      shareGroupId,
      title,
      photoIdList: photos,
    });
    if (response.status === 200) {
      console.log('Agenda created successfully');
    } else {
      throw new Error('Failed to create agenda');
    }
  } catch (error) {
    console.error('Error creating agenda:', error);
    throw error;
  }
}
