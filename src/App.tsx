import { Checkbox, CheckboxControlLabel } from './components/ui/checkbox';

export const App = () => (
  <div style={{ padding: '10px' }}>
    <CheckboxControlLabel control={<Checkbox />} label="Check-box" />
    <Checkbox disabled />
  </div>
);
