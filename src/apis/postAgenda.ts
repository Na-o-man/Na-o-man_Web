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
}: IPostAgenda): Promise<any> {
  try {
    const res = await authInstance().post('/agendas', {
      shareGroupId,
      title,
      photoIdList: photos,
    });
    const { status, data } = res.data;
    if (status === 200) {
      return { status, data };
    }
  } catch (error) {
    console.error('Error creating agenda:', error);
    throw error;
  }
}
