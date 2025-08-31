import UIButton from '@/components/ui-components/button/ui-button';

interface Props {
  url: string;
  handleVoteForBattle: () => void;
}

const OpenentsBlock: React.FC<Props> = ({ url, handleVoteForBattle }) => {
  return (
    <div className="home-main-opponent">
      <img src={url} alt="Openent One" />
      <UIButton label="J'aime" onClick={handleVoteForBattle} />
    </div>
  );
};

export default OpenentsBlock;
