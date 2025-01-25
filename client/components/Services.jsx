import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Hỗ trợ kiến thức chuyên ngành",
    description:
      "Cung cấp thông tin chi tiết về các nguyên lý và quy trình xử lý bề mặt kim loại như mạ điện, anodize, phủ bột, và nhiều phương pháp hoàn thiện khác. ",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Thư viện tài liệu chuyên sâu",
    description:
      "Người dùng có thể truy cập và tải về tài liệu kỹ thuật, nghiên cứu, và các báo cáo về ngành hoàn thiện bề mặt.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Tìm kiếm nhà cung cấp và đối tác gia công",
    description:
      "Cơ sở dữ liệu được cập nhật thường xuyên về các nhà cung cấp vật tư, thiết bị, và dịch vụ gia công chất lượng cao.",
  },
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Tư vấn và hỗ trợ kỹ thuật",
    description:
      "Cung cấp lời khuyên và giải đáp thắc mắc liên quan đến công nghệ và quy trình hoàn thiện bề mặt. Tích hợp các công cụ trò chuyện và phản hồi nhanh, giúp người dùng nhận được hỗ trợ kịp thời.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Nền tảng học hỏi và kết nối cộng đồng",
    description:
      "Tổ chức các buổi gặp gỡ chuyên đề để cập nhật xu hướng và giao lưu kinh nghiệm. Không gian trao đổi kiến thức, giải pháp và ý tưởng giữa các chuyên gia, doanh nghiệp và nhà nghiên cứu trong ngành.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Fine Finish cam kết cung cấp những dịch vụ tối ưu",
    description:
      "Giúp cộng đồng ngành hoàn thiện và xử lý bề mặt kim loại phát triển hiệu quả và bền vững. Hãy truy cập ngay để khám phá thêm các tiện ích tại Fine Finish!",
  },
];

const Services = () => {
  return (
    <section className="mb-12 dark:bg-background xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-12 text-center xl:mb-24">
          Dịch vụ của Fine Finish
        </h2>
        {/* grid items */}
        <div className="grid justify-center gap-y-12 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="relative flex h-[300px] w-full max-w-[424px] flex-col items-center justify-center pb-10 pt-16"
                key={index}
              >
                <CardHeader className="absolute -top-[60px] text-primary">
                  <div className="flex h-[80px] w-[140px] items-center justify-center bg-white dark:bg-background">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
