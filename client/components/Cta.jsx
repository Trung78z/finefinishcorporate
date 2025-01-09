import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h4 max-w-xl text-center mb-8">
            Fine Finish rất sẵn lòng lắng nghe ý kiến và đồng hành cùng cộng
            đồng trên hành trình phát triển trong ngành hoàn thiện và xử lý bề
            mặt kim loại. Đừng ngần ngại liên hệ với Fine Finish qua các kênh
            sau:
          </h2>
          <Link href="/contact">
            <Button>Liên Hệ Ngay</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
