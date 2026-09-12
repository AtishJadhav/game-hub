import { Badge } from "@chakra-ui/react";

interface CricticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CricticScoreProps) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" padding={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
