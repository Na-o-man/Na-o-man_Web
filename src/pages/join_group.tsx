import Joingroup3 from 'components/join_group/join_group_3';
import Joingroup1 from 'components/join_group/join_group_1';
import Joingroup2 from 'components/join_group/join_group_2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Joingroup: React.FC = () => {
  return (
    <Routes>
      <Route path="/shareGroups/join" element={<Joingroup1 />} />
      <Route path="/shareGroups/join/:id" element={<Joingroup2 />} />
      <Route path="/shareGroups/join/:id/profile" element={<Joingroup3 />} />
    </Routes>
  );
};
export default Joingroup;
