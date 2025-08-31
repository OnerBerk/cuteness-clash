import './ui-button.scss';

interface Props {
  label: string;
  onClick: () => void;
}

const UIButton: React.FC<Props> = ({ label, onClick }) => (
  <button className="ui-button-main" onClick={onClick}>
    {label}
  </button>
);

export default UIButton;
