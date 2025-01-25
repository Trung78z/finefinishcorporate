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
    <section className="h-[84vh] bg-hero bg-cover bg-bottom bg-no-repeat py-12 dark:bg-background dark:bg-none xl:py-24 xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
              Fine Finish
            </div>
            <h1 className="h3 mb-4">
              Nền tảng truyền thông hỗ trợ cộng đồng ngành hoàn thiện và xử lý
              bề mặt kim loại.
            </h1>
            <p className="subtitle mx-auto max-w-[490px] xl:mx-0">
              Fine Finish là một nền tảng mới được thành lập nhằm cung cấp thông
              tin, công nghệ, và giải pháp cho cộng đồng các nhà sản xuất và
              chuyên gia trong lĩnh vực hoàn thiện bề mặt và xử lý kim loại.
              Chúng tôi cam kết trở thành đối tác đáng tin cậy, đồng hành cùng
              các doanh nghiệp và cá nhân trong việc nâng cao hiệu quả và chất
              lượng công việc.
            </p>
            {/* buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
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
          <div className="relative hidden xl:flex">
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
            <div className="absolute -right-2 -top-1 h-[500px] w-[500px] bg-hero_shape2_light bg-no-repeat dark:bg-hero_shape2_dark"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.svg"
            />
          </div>
        </div>
        {/* icon */}
        <div className="absolute bottom-44 left-2/4 hidden animate-bounce md:flex xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
