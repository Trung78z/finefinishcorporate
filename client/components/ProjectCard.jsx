import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { API_URL } from "@/services/apiService";
import { formatContent } from "@/lib/utils";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        <div>
          <Link
            href={`/new/${project?.slug}/${project?.category?.slug}`}
            className="bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark relative flex h-[300px] w-full items-center justify-center overflow-hidden xl:bg-[110%] xl:bg-no-repeat"
          >
            <Image
              className="absolute bottom-0 shadow-2xl"
              src={`${API_URL}/api/image/${project?.image}`}
              width={247}
              height={250}
              alt=""
              priority
            />{" "}
          </Link>
        </div>
      </CardHeader>
      <div className="h-full min-h-40 px-8 py-6">
        <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
          {project?.category?.slug}
        </Badge>
        <Link href={`/new/${project?.slug}/${project?.category?.slug}`}>
          <h4 className="h4 mb-1">{project?.title}</h4>
        </Link>
        <p
          className="text-muted-foreground text-lg"
          dangerouslySetInnerHTML={{
            __html: formatContent(project?.description, 60),
          }}
        ></p>
      </div>
    </Card>
  );
};

export default ProjectCard;
