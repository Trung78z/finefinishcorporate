import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send, Facebook } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Fine Finish
            </div>
            <h1 className="h3 mb-4">
              Nền tảng truyền thông hỗ trợ cộng đồng ngành hoàn thiện và xử lý
              bề mặt kim loại.
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Fine Finish là một nền tảng mới được thành lập nhằm cung cấp thông
              tin, công nghệ, và giải pháp cho cộng đồng các nhà sản xuất và
              chuyên gia trong lĩnh vực hoàn thiện bề mặt và xử lý kim loại.
              Chúng tôi cam kết trở thành đối tác đáng tin cậy, đồng hành cùng
              các doanh nghiệp và cá nhân trong việc nâng cao hiệu quả và chất
              lượng công việc.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Zalo <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Fanpage
                <Facebook size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[6rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="năm kinh nghiệm"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[6rem]"
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText="k"
              badgeText="Dự án"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[45%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText="k"
              badgeText="Khách hàng"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.svg"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
