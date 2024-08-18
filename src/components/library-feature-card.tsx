import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type LibraryFeatureCardProps = {
  feature: {
    title: string;
    description: string;
  };
};

const LibraryFeatureCard = ({ feature }: LibraryFeatureCardProps) => {
  return (
    <>
      <Card className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <CardHeader>
          <CardTitle>{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{feature.description}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default LibraryFeatureCard;
