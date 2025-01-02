import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  currency: string;
  banner: string;
}

export function ProductCard({ name, price, currency, banner }: ProductCardProps) {
  const formattedPrice = price + currency;

  return (
    <Card className="w-full max-w-sm mx-auto bg-zinc-800 border-zinc-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-zinc-100">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          className="w-full h-48 bg-zinc-700 rounded-md mb-4"
          src={banner}
          alt={name}
          layout="responsive"
          width={500}
          height={300}
        />
        <p className="text-3xl font-bold text-center text-zinc-100">{formattedPrice}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-zinc-600 hover:bg-zinc-500 text-zinc-100">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
