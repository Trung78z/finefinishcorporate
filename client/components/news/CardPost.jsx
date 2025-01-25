import { formatContent } from "@/lib/utils";
import { API_URL } from "@/services/apiService";
import Link from "next/link";
import React from "react";

export default function CardPost({ item }) {
  return (
    <>
      <div className="group-abc flex items-center gap-x-2 dark:bg-secondary/30">
        <Link
          href={`/new/${item?.slug}/${item?.category?.slug}`}
          className="group-abc:hover:bg-slate-800"
        >
          <img
            src={`${API_URL}/api/image/${item?.image}`}
            alt=""
            className="h-16 w-16 rounded-lg object-cover object-center"
          />
        </Link>
        <div>
          <Link href={`/new/${item?.slug}/${item?.category?.slug}`}>
            <h4 className="text-lg font-medium">
              {formatContent(item.title, 30)}
            </h4>
          </Link>
          <p>{item.author}</p>
        </div>
      </div>
    </>
  );
}
