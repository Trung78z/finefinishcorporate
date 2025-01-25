import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  // {
  //   icon: <User2 size={20} />,
  //   text: "Fine Finish",
  // },
  // {
  //   icon: <PhoneCall size={20} />,
  //   text: "+012 345 6789",
  // },
  // {
  //   icon: <MailIcon size={20} />,
  //   text: "youremail@email.com",
  // },
  // {
  //   icon: <Calendar size={20} />,
  //   text: "Born on 10 Mar, 1998",
  // },
  // {
  //   icon: <GraduationCap size={20} />,
  //   text: "Master on Computer Science",
  // },
  // {
  //   icon: <HomeIcon size={20} />,
  //   text: "321 Blue Avenue, NY, USA",
  // },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Phát triển bền vững",
        qualification:
          "Tạo ra giá trị lâu dài cho cộng đồng và ngành công nghiệp thông qua các giải pháp thân thiện với môi trường và hiệu quả cao.",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Hỗ trợ cộng đồng",
        role: "Xây dựng một nền tảng tương tác và hữu ích, giúp mọi thành viên ngành hoàn thiện nâng cao hiệu quả và chất lượng công việc.",
      },
      {
        company: "Thúc đẩy đổi mới",
        role: "Khuyến khích và lan tỏa những ý tưởng sáng tạo, công nghệ tiên tiến để thúc đẩy sự phát triển của ngành.",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Kỹ thuật mạ điện",
      },
      {
        name: "Kỹ thuật đánh bóng",
      },
      {
        name: " Công nghệ Mạ Cr3+ thay thế cho Mạ Cr6+",
      },
      {
        name: "Kỹ thuật phủ PVD",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="pb-12 dark:bg-background xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          Fine Finish
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative hidden flex-1 xl:flex">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.svg"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full dark:border-none xl:max-w-[520px] xl:grid-cols-3 xl:border">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Tầm Nhìn
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Sứ Mệnh
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Kiến Thức
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Tầm Nhìn Của Fine Finish</h3>
                    <p className="subtitle mx-auto max-w-xl xl:mx-0">
                      Trở thành nền tảng truyền thông hàng đầu, nơi kết nối và
                      thúc đẩy cộng đồng ngành hoàn thiện và xử lý bề mặt phát
                      triển bền vững, sáng tạo và hiệu quả. Fine Finish hướng
                      tới xây dựng một môi trường hỗ trợ lẫn nhau, nơi công
                      nghệ, kiến thức và con người cùng hội tụ để tạo ra giá trị
                      vượt trội.
                    </p>
                    {/* icons */}
                    {/* <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div> */}
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Chương trình hợp tác</div>
                      <div className="border-b border-border"></div>
                      <div>English, French, Spanish, Italian</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Sứ Mệnh Của Fine Finish
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid gap-y-8 md:grid-cols-2">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {company}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {university}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      Giải Pháp Kỹ Thuật Mạ và Xử Lý Kim Loại
                    </h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Kỹ Thuật</h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="mx-auto w-2/4 text-center xl:mx-0 xl:text-left"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                    Fine Finish
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left">
                        Kỹ Thuật Mạ
                      </h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* tool list */}
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
