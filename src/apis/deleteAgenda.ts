import { authInstance } from './instance';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

interface IDeleteAgenda {
  agendaId: number;
}

export async function deleteAgenda({ agendaId }: IDeleteAgenda): Promise<void> {
  try {
    const response = await authInstance().delete(
      `${SERVER_URL}/agendas/${agendaId}`,
    );
    if (response.status === 200) {
      console.log('Agenda deleted successfully');
    } else {
      throw new Error('Failed to delete agenda');
    }
  } catch (error) {
    console.error('Error deleting agenda:', error);
    throw error;
  }
}
