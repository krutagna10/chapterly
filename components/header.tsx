import { ModeToggle } from "@/components/mode-toggle";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4">
      <Container className="flex justify-between items-center">
        <Link href="#">Chapterly</Link>
        <ModeToggle />
      </Container>
    </header>
  );
}
