import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
// components
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section className="min-h-screen dark:bg-background">
      <div className="container mx-auto dark:bg-background">
        <div className="mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 mb-8 max-w-md">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Fine Finish – Nâng tầm hoàn thiện, vững bước thành công nostrum.
            </p>
          </div>
          <div className="hidden w-full bg-contact_illustration_light bg-contain bg-top bg-no-repeat dark:bg-contact_illustration_dark xl:flex"></div>
        </div>
        <div className="h-full w-full bg-background">
          <div className="grid bg-background py-10 xl:grid-cols-2">
            <div className="mb-12 flex flex-col gap-y-4 bg-background text-base xl:mb-24 xl:gap-y-14 xl:text-lg">
              <div className="flex items-center gap-x-8 bg-background">
                <MailIcon size={18} className="text-primary" />
                <div>Finefinishtek@gmail.com</div>
              </div>
              <div className="flex items-center gap-x-8">
                <HomeIcon size={18} className="text-primary" />
                <div>
                  26 đường số 5, KDC Vạn Phúc, Hiệp Bình Phước, Thủ Đức, Hồ Chí
                  Minh
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <PhoneCall size={18} className="text-primary" />
                <div>0327 345 612</div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
