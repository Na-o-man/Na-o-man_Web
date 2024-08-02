import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AddFileContainer = styled.div`
  display: flex;
`;

export const File = styled(I.File)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 90%;
`;

export const AddFileText = styled.p`
  font-size: 1.3rem;
  color: #134b80;
  position: absolute;
  top: 50%;
  left: 33%;
  text-align: center;
  z-index: 10;
  font-weight: bold;
`;

export const CopyCloudContainer = styled.div`
  display: flex;
`;

export const Cloud = styled(I.Cloud)`
  position: absolute;
  bottom: calc(43% - 132px - 36.5px);
  right: calc(65% - 147.5px - 59px);
  z-index: 10;
  width: 30%;
  height: 40%;
`;

export const CopyCloudText = styled.p`
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  top: 60.5%;
  left: 72%;
=======
=======
>>>>>>> Stashed changes
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  top: 59%;
  left: 68%;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  text-align: center;
  z-index: 10;
  font-weight: bold;
`;

export const Copy = styled(I.Copy)`
  position: absolute;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  bottom: calc(41.5% - 132px - 36.5px);
=======
  bottom: calc(42% - 132px - 36.5px);
>>>>>>> Stashed changes
=======
  bottom: calc(42% - 132px - 36.5px);
>>>>>>> Stashed changes
  right: calc(68% - 147.5px - 59px);
  z-index: 10;
  width: 4%;
  height: 40%;
`;

export const InviteContainer = styled.div`
  display: flex;
`;

export const InviteBar = styled(I.InviteBar)`
  position: absolute;
  bottom: calc(33% - 132px - 36.5px);
  right: calc(79% - 147.5px - 59px);
  z-index: 10;
  width: 60%;
  height: 40%;
`;

export const InviteText = styled.p`
  font-size: 0.7rem;
  color: #134b80;
  position: absolute;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  top: 69.5%;
  left: 31%;
=======
  top: 68.5%;
  left: 28%;
>>>>>>> Stashed changes
=======
  top: 68.5%;
  left: 28%;
>>>>>>> Stashed changes
  text-align: center;
  z-index: 10;
  font-weight: bold;
`;

export const InviteBar2 = styled(I.InviteBar)`
  position: absolute;
  bottom: calc(26% - 132px - 36.5px);
  right: calc(79% - 147.5px - 59px);
  z-index: 10;
  width: 60%;
  height: 40%;
`;

export const InviteText2 = styled.p`
  font-size: 0.7rem;
  color: #134b80;
  position: absolute;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  top: 76.5%;
  left: 41%;
=======
  top: 75.5%;
  left: 38%;
>>>>>>> Stashed changes
=======
  top: 75.5%;
  left: 38%;
>>>>>>> Stashed changes
=======
  top: 75.5%;
  left: 38%;
>>>>>>> Stashed changes
  text-align: center;
  z-index: 10;
  font-weight: bold;
`;
