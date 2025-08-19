import { NameInput } from './style.js';

export default function NameBox({ value, onChange }) {
  return (
    <div>
      <NameInput
        type="text"
        placeholder="Name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
